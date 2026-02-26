const problems = [
  { img: 'img_problem01', title: '入場時の混雑や滞留', text: '1人ずつ名刺などで本人確認するため、受付に時間がかかってしまう。' },
  { img: 'img_problem02', title: '紙やExcelでの管理ミスが多い', text: 'ゲスト一覧表を紙やExcelで管理すると、手作業によるミスが発生してしまう。' },
  { img: 'img_problem03', title: 'システム化したいがコストが高い', text: '各ゲストの来場有無は、受付のリストでしか確認ができない。' },
  { img: 'img_problem04', title: 'システム導入までの時間もかかる', text: 'イベント来場者数の集計も、アンケート回答の集計も、すべて手作業で時間がかかる。' },
]

export default function ProblemSection() {
  return (
    <section className="p-problem" id="problem">
      <div className="l-inner">
        <div className="c-section-head js-in-view fade-in-up">
          <hgroup className="c-section-head__title-wrap">
            <p className="c-section-head__sub">problem</p>
            <h2 className="c-section-head__title">よくある課題</h2>
          </hgroup>
          <div className="c-section-head__cta">
            <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
          </div>
        </div>
        <div className="p-problem__container js-in-view fade-in-up">
          {problems.map((p, i) => (
            <div className="p-problem__card" key={i}>
              <div className="p-problem__card-img">
                <picture>
                  <source media="(min-width: 768px)" srcSet={`/img/${p.img}--pc.webp`} />
                  <img src={`/img/${p.img}--sp.webp`} loading="lazy" alt="" width={260} height={261} />
                </picture>
              </div>
              <div className="p-problem__card-body">
                <h3 className="p-problem__card-title">{p.title}</h3>
                <p className="p-problem__card-text">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
