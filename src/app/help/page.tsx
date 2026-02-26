import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LpScripts from '@/components/LpScripts'
import { getAllHelps } from '@/lib/content'

export const metadata = {
  title: 'ヘルプ一覧 | 招待レセプション',
}

export default function HelpArchivePage() {
  const helps = getAllHelps()

  return (
    <>
      <Header />
      <main className="l-main help-archive">
        <header className="page-header">
          <h1 className="page-title">ヘルプ一覧</h1>
          <p className="page-description">RECEPTIONISTシリーズ各製品のヘルプ記事をまとめています。</p>
        </header>
        {helps.length > 0 ? (
          <ul className="help-list">
            {helps.map((h) => (
              <li className="help-item" key={h.slug}>
                <a href={`/help/${h.slug}/`}>
                  <div className="content">
                    <h2>{h.title}</h2>
                    <p className="excerpt">{h.excerpt}</p>
                    <span className="readmore">続きを読む →</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>ヘルプ記事が見つかりません。</p>
        )}
      </main>
      <Footer />
      <LpScripts />
    </>
  )
}
