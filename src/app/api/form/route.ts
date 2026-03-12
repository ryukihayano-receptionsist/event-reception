import { NextRequest, NextResponse } from 'next/server'

type FormData = {
  formType: 'request' | 'contact'
  company: string
  department?: string
  lastName: string
  firstName: string
  email: string
  phone?: string
  eventType?: string
  eventTiming?: string
  eventSize?: string
  message?: string
  pageTitle?: string
  recaptchaToken?: string
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY is not set, skipping verification')
    return true
  }
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    })
    const data = await res.json()
    return data.success && data.score >= 0.5
  } catch {
    console.error('reCAPTCHA verification failed')
    return true
  }
}

async function submitToPardot(formData: FormData): Promise<void> {
  const endpoint =
    formData.formType === 'request'
      ? process.env.PARDOT_ENDPOINT_REQUEST
      : process.env.PARDOT_ENDPOINT_CONTACT

  if (!endpoint) {
    console.warn(`PARDOT_ENDPOINT_${formData.formType.toUpperCase()} is not set`)
    return
  }

  // Pardotフォームハンドラーのフィールド名（英語）に合わせる
  // ※ IVRは日本語フィールド名だが、event-receptionは英語フィールド名
  const params = new URLSearchParams()
  params.append('email', formData.email)
  params.append('company', formData.company)
  if (formData.department) params.append('department', formData.department)
  params.append('last_name', formData.lastName)
  params.append('first_name', formData.firstName)
  if (formData.phone) params.append('phone', formData.phone)
  if (formData.eventType) params.append('event_type', formData.eventType)
  if (formData.eventTiming) params.append('event_timing', formData.eventTiming)
  if (formData.eventSize) params.append('event_size', formData.eventSize)
  if (formData.message) params.append('comments', formData.message)

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
  } catch (error) {
    console.error('Pardot submission error:', error)
  }
}

async function notifySlack(formData: FormData): Promise<void> {
  // Use separate webhooks for request and contact
  const webhookUrl =
    formData.formType === 'request'
      ? process.env.SLACK_WEBHOOK_REQUEST
      : process.env.SLACK_WEBHOOK_CONTACT

  if (!webhookUrl) {
    console.warn(`SLACK_WEBHOOK_${formData.formType.toUpperCase()} is not set`)
    return
  }

  const formTypeLabel = formData.formType === 'request' ? '📄 資料請求' : '📩 お問い合わせ'

  const text = [
    `${formTypeLabel} がありました`,
    `*貴社名:* ${formData.company}`,
    formData.department ? `*部署:* ${formData.department}` : null,
    `*氏名:* ${formData.lastName} ${formData.firstName}`,
    `*メール:* ${formData.email}`,
    formData.phone ? `*電話:* ${formData.phone}` : null,
    formData.eventType ? `*イベントの種類:* ${formData.eventType}` : null,
    formData.eventTiming ? `*開催予定時期:* ${formData.eventTiming}` : null,
    formData.eventSize ? `*招待人数規模:* ${formData.eventSize}` : null,
    formData.message ? `*お問い合わせ内容:*\n${formData.message}` : null,
    formData.pageTitle ? `*ページ:* ${formData.pageTitle}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
  } catch (error) {
    console.error('Slack notification error:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json()

    // Validation
    if (!body.company || !body.lastName || !body.firstName || !body.email) {
      return NextResponse.json(
        { success: false, message: '必須項目を入力してください。' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'メールアドレスの形式が正しくありません。' },
        { status: 400 }
      )
    }

    // reCAPTCHA
    if (body.recaptchaToken) {
      const isHuman = await verifyRecaptcha(body.recaptchaToken)
      if (!isHuman) {
        return NextResponse.json(
          { success: false, message: 'セキュリティ検証に失敗しました。' },
          { status: 400 }
        )
      }
    }

    // Pardot + Slack in parallel
    await Promise.all([submitToPardot(body), notifySlack(body)])

    const redirectUrl =
      body.formType === 'request' ? '/resource-thanks/' : '/contact-thanks/'

    return NextResponse.json({ success: true, redirectUrl })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { success: false, message: 'サーバーエラーが発生しました。' },
      { status: 500 }
    )
  }
}
