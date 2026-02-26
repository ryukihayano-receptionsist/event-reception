import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LpScripts from '@/components/LpScripts'

export const metadata = {
  title: '資料請求を受け付けました | 招待レセプション',
}

export default function ResourceThanksPage() {
  return (
    <>
      <Header />
      <main className="l-main page page-thanks">
        <div className="container">
          <header className="page-header mb-12">
            <h1 className="page-title">資料請求を受け付けました</h1>
          </header>
          <div className="thanks-content">
            <p className="thanks-message">
              この度は、招待レセプションの資料をご請求いただき、誠にありがとうございます。<br />
              ご入力いただいたメールアドレス宛に、資料をお送りいたします。
            </p>
            <div className="thanks-notice">
              <p>
                ※ 数分経ってもメールが届かない場合は、迷惑メールフォルダをご確認いただくか、<br />
                お手数ですが再度お申し込みください。
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
