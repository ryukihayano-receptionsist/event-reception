import '@/styles/sub-pages.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import LpScripts from '@/components/LpScripts'

export const metadata = {
  title: 'お問い合わせ | 招待レセプション',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="l-main page page-contact">
        <div className="container">
          <header className="page-header mb-12">
            <h1 className="page-title">お問い合わせ</h1>
            <p className="page-desc">資料請求や導入に関するご質問など、お気軽にご連絡ください。</p>
          </header>
          <ContactForm />
        </div>
      </main>
      <Footer />
      <LpScripts />
    </>
  )
}
