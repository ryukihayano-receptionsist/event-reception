import '@/styles/sub-pages.css'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LpScripts from '@/components/LpScripts'
import { getAllHelps, getHelpBySlug, formatDate } from '@/lib/content'

export async function generateStaticParams() {
  return getAllHelps().map((h) => ({ slug: h.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const h = getHelpBySlug(slug)
  return { title: h ? `${h.title} | 招待レセプション` : 'ヘルプ | 招待レセプション' }
}

export default async function HelpDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const h = getHelpBySlug(slug)
  if (!h) notFound()

  return (
    <>
      <Header />
      <main className="l-main single-help">
        <div className="help-single">
          <header className="page-header">
            <h1 className="page-title">{h.title}</h1>
            <p className="post-meta">公開日: {formatDate(h.date)}</p>
          </header>
          <div className="article-content" dangerouslySetInnerHTML={{ __html: h.content }} />
          <div className="back-to-archive">
            <a href="/help/">ヘルプ記事一覧に戻る</a>
          </div>
        </div>
      </main>
      <Footer />
      <LpScripts />
    </>
  )
}
