import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LpScripts from '@/components/LpScripts'
import { getAllResources } from '@/lib/content'

export const metadata = {
  title: 'リソース一覧 | 招待レセプション',
}

export default function ResourceArchivePage() {
  const resources = getAllResources()

  return (
    <>
      <Header />
      <main className="l-main">
        <div className="l-inner">
          <h1 className="page-title">リソース一覧</h1>
          {resources.length > 0 ? (
            <ul className="resource-archive">
              {resources.map((r) => (
                <li key={r.slug}>
                  <a href={`/resource/${r.slug}/`}>{r.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>リソースが見つかりません。</p>
          )}
        </div>
      </main>
      <Footer />
      <LpScripts />
    </>
  )
}
