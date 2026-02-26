'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot check
    if (formData.get('website_url')) {
      window.location.href = '/contact-thanks/'
      return
    }

    const data = {
      formType: 'contact' as const,
      company: formData.get('company') as string,
      department: formData.get('department') as string,
      lastName: formData.get('lastname') as string,
      firstName: formData.get('firstname') as string,
      email: formData.get('email') as string,
      phone: formData.get('tel') as string,
      eventType: formData.get('event_type') as string,
      eventTiming: formData.get('event_timing') as string,
      eventSize: formData.get('event_size') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.success) {
        window.location.href = result.redirectUrl
      } else {
        alert(result.message || '送信に失敗しました。')
        setIsSubmitting(false)
      }
    } catch {
      window.location.href = '/contact-thanks/'
    }
  }

  return (
    <form className="contact-form request-form" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="contact_website_url">Website</label>
        <input type="text" id="contact_website_url" name="website_url" autoComplete="off" tabIndex={-1} />
      </div>

      <div className="form-row">
        <label htmlFor="contact_company">貴社名 <span className="required">*</span></label>
        <input type="text" id="contact_company" name="company" required />
      </div>

      <div className="form-row">
        <label htmlFor="contact_department">部署</label>
        <input type="text" id="contact_department" name="department" />
      </div>

      <div className="form-row name-row">
        <div>
          <label htmlFor="contact_lastname">姓 <span className="required">*</span></label>
          <input type="text" id="contact_lastname" name="lastname" required />
        </div>
        <div>
          <label htmlFor="contact_firstname">名 <span className="required">*</span></label>
          <input type="text" id="contact_firstname" name="firstname" required />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="contact_email">メールアドレス <span className="required">*</span></label>
        <input type="email" id="contact_email" name="email" required />
      </div>

      <div className="form-row">
        <label htmlFor="contact_tel">電話番号</label>
        <input type="tel" id="contact_tel" name="tel" />
      </div>

      <div className="form-row">
        <label>イベントの種類</label>
        <ul className="radio-list">
          {['社内イベント', '社外の人を招待する自社イベント', '保護者等を招待する学校イベント', '招待制の式典', 'ビジネス系の交流会・勉強会', '趣味の交流会・勉強会', 'その他'].map((v) => (
            <li key={v}><label><input type="radio" name="event_type" value={v} /> {v}</label></li>
          ))}
        </ul>
      </div>

      <div className="form-row">
        <label>イベント開催予定時期</label>
        <select name="event_timing">
          <option value="">選択してください</option>
          {['1ヶ月以内', '3ヶ月以内', '6ヶ月以内', '1年以内', '未定'].map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <label>イベント招待人数規模</label>
        <select name="event_size">
          <option value="">選択してください</option>
          {['〜100人', '〜300人', '〜1000人', '1001人以上', '未定'].map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="contact_message">お問い合わせ内容</label>
        <textarea id="contact_message" name="message" rows={5} placeholder="ご質問やご要望がございましたらご記入ください" />
      </div>

      <div className="form-row check-row">
        <label>
          <input type="checkbox" name="agree" required />
          （株）RECEPTIONISTの
          <a href="https://help.receptionist.jp/?help=402" target="_blank" rel="noopener noreferrer">個人情報の取り扱い</a>
          に同意します。
        </label>
      </div>

      <div className="form-row submit-row">
        <button type="submit" className="c-button" disabled={isSubmitting}>
          {isSubmitting ? '送信中...' : '送信する'}
        </button>
      </div>
    </form>
  )
}
