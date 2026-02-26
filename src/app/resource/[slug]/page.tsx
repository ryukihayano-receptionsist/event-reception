import '@/styles/sub-pages.css'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RequestForm from '@/components/RequestForm'
import LpScripts from '@/components/LpScripts'
import { getAllResources, getResourceBySlug } from '@/lib/content'

export async function generateStaticParams() {
  return getAllResources().map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const r = getResourceBySlug(slug)
  return { title: r ? `${r.title} | 招待レセプション` : '資料 | 招待レセプション' }
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const r = getResourceBySlug(slug)
  if (!r) notFound()

  return (
    <>
      <Header />
      <main className="l-main single-resource">
        <div className="container py-16">
          <article>
            <header className="post-header mb-8">
              <h1 className="post-title">{r.title}</h1>
            </header>
            <div className="resource-body">
              <div className="main-column">
                {r.thumbnail && (
                  <div className="post-thumbnail mb-8">
                    <img src={r.thumbnail} alt={r.title} />
                  </div>
                )}
                {r.meta && (
                  <>
                    <div className="resource-meta-inline">
                      {r.meta.pageCount && (
                        <>
                          <span className="label-badge">ページ数</span>
                          <span className="label-value">{r.meta.pageCount}</span>
                        </>
                      )}
                      {r.meta.lastUpdated && (
                        <>
                          <span className="label-badge">最終更新日</span>
                          <span className="label-value">{r.meta.lastUpdated}</span>
                        </>
                      )}
                    </div>
                    <div className="resource-meta">
                      {r.meta.audience && (
                        <div className="meta-row">
                          <span className="label-badge">対象者</span>
                          <span className="label-value">{r.meta.audience}</span>
                        </div>
                      )}
                      {r.meta.summary && (
                        <div className="meta-row">
                          <span className="label-badge">資料の主な内容</span>
                          <span className="label-value">{r.meta.summary}</span>
                        </div>
                      )}
                      {r.meta.points && (
                        <div className="meta-row">
                          <span className="label-badge">おすすめポイント</span>
                          <span className="label-value">{r.meta.points}</span>
                        </div>
                      )}
                    </div>
                  </>
                )}
                <div className="post-content" dangerouslySetInnerHTML={{ __html: r.content }} />
              </div>
              <aside className="form-area">
                <RequestForm pageTitle={r.title} />
              </aside>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <LpScripts />
    </>
  )
}
