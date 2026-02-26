import cases from '@/data/cases.json'

export default function CaseStudySection() {
  const latestCases = cases.slice(0, 2)

  return (
    <section className="p-case-study" id="case-study">
      <div className="l-inner">
        <div className="c-section-head">
          <hgroup className="c-section-head__title-wrap">
            <p className="c-section-head__sub">Case Study</p>
            <h2 className="c-section-head__title">導入事例</h2>
          </hgroup>
          <div className="c-section-head__cta">
            <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
          </div>
        </div>
        <div className="p-case-study__container p-case-study__container--grid">
          {latestCases.map((c, i) => (
            <div className="p-case-study__card" key={c.slug}>
              <a href={`/case/${c.slug}/`} className={`p-case-study__card-img img0${i + 1}`}>
                <img
                  src={c.thumbnail || '/img/img_case-study-placeholder.webp'}
                  loading="lazy"
                  alt={c.title}
                />
              </a>
              <div className="p-case-study__card-body">
                <h3 className="p-case-study__card-title">{c.title}</h3>
                <div className="p-case-study__card-logo">
                  <img
                    src={c.meta?.logoUrl || '/img/logo.webp'}
                    loading="lazy"
                    alt={c.title}
                  />
                </div>
                <a href={`/case/${c.slug}/`} className="p-case-study__card-link">この記事を読む</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
