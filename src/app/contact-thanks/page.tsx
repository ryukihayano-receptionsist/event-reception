import '@/styles/sub-pages.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LpScripts from '@/components/LpScripts'

export const metadata = {
  title: 'お問い合わせを受け付けました | 招待レセプション',
}

export default function ContactThanksPage() {
  return (
    <>
      <Header />
      <main className="l-main page page-thanks">
        <div className="container">
          <header className="page-header mb-12">
            <h1 className="page-title">お問い合わせを受け付けました</h1>
          </header>
          <div className="thanks-content">
            <p className="thanks-message">
              この度は、お問い合わせいただき、誠にありがとうございます。<br />
              内容を確認の上、担当者より折り返しご連絡いたします。
            </p>
            <div className="thanks-notice">
              <p>
                ※ 2〜3営業日以内にご連絡がない場合は、お手数ですが<br />
                再度お問い合わせいただくか、お電話にてご連絡ください。
              </p>
            </div>
            <div className="thanks-action">
              <a href="/" className="c-button c-button--outline">トップページへ戻る</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <LpScripts />
    </>
  )
}
