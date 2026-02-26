import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LpScripts from '@/components/LpScripts'
import { getAllCases } from '@/lib/content'

export const metadata = {
  title: '導入事例一覧 | 招待レセプション',
}

export default function CaseArchivePage() {
  const cases = getAllCases()

  return (
    <>
      <Header />
      <main className="l-main case-archive">
        <div className="l-inner">
          <header className="archive-header">
            <h1 className="archive-title">導入事例一覧</h1>
            <p className="archive-description">
              「招待レセプション」をご利用いただいた企業様の事例をご紹介します。
            </p>
          </header>
          {cases.length > 0 ? (
            <div className="archive-list">
              {cases.map((c) => (
                <article key={c.slug} className="case-article">
                  <a href={`/case/${c.slug}/`} className="thumb">
                    <img
                      src={c.thumbnail || '/img/img_case-study-placeholder.webp'}
                      alt={c.title}
                    />
                  </a>
                  <div className="card-body">
                    <h2 className="case-title">
                      <a href={`/case/${c.slug}/`}>{c.title}</a>
                    </h2>
                    <p className="case-excerpt">{c.excerpt}</p>
                    <a href={`/case/${c.slug}/`} className="case-read-more">この記事を読む</a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p>導入事例が登録されていません。</p>
          )}
        </div>
      </main>
      <Footer />
      <LpScripts />
    </>
  )
}
