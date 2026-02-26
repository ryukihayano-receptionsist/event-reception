import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LpScripts from '@/components/LpScripts'
import { getAllCases, getCaseBySlug, formatDate } from '@/lib/content'

export async function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  return { title: c ? `${c.title} | 招待レセプション` : '導入事例 | 招待レセプション' }
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getCaseBySlug(slug)
  if (!c) notFound()

  return (
    <>
      <Header />
      <main className="l-main single-case">
        <div className="case-2col">
          <div className="case-main">
            <article className="case-article">
              <header className="page-header">
                <h1 className="page-title">{c.title}</h1>
                <p className="page-description">公開日: {formatDate(c.date)}</p>
              </header>
              {c.thumbnail && (
                <div className="case-thumb">
                  <img src={c.thumbnail} alt={c.title} />
                </div>
              )}
              <div className="article-content">
                <div className="case-container" dangerouslySetInnerHTML={{ __html: c.content }} />
              </div>
              <div className="back-to-archive">
                <a href="/case/" className="back-to-archive-link">導入事例一覧に戻る</a>
              </div>
            </article>
          </div>
          <aside className="case-sidebar">
            <div className="case-sidebar-box">
              {c.meta?.logoUrl && (
                <div className="case-logo">
                  <img src={c.meta.logoUrl} alt="企業ロゴ" />
                </div>
              )}
              <h3 className="sidebar-title">企業概要</h3>
              <dl className="case-info-list">
                {c.meta?.companyName && (
                  <div className="case-info-item">
                    <dt>企業名</dt>
                    <dd>{c.meta.companyName}</dd>
                  </div>
                )}
                {c.meta?.industry && (
                  <div className="case-info-item">
                    <dt>業種</dt>
                    <dd>{c.meta.industry}</dd>
                  </div>
                )}
                {c.meta?.employeeSize && (
                  <div className="case-info-item">
                    <dt>従業員数</dt>
                    <dd>{c.meta.employeeSize}</dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
      <LpScripts />
    </>
  )
}
