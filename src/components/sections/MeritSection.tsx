const merits = [
  { icon: 'icon_merit01.webp', title: 'ゲストをCSVで一括招待', text: '一括で招待メールを配信し、ゲスト一人一人に個別の受付用QRを送付できます。' },
  { icon: 'icon_merit02.webp', title: 'ゲストはQRで簡単受付', text: 'QRだけで本人確認と受付処理が完了。紙リスト不要で、待ち時間を大幅に削減。' },
  { icon: 'icon_merit03.webp', title: 'ゲスト情報をクラウドで管理', text: '主催者はどこからでも閲覧・更新でき、複数担当者での運用も安心・スムーズ。' },
  { icon: 'icon_merit04.webp', title: '低コストで受付の効率化を実現', text: '予算の少ない無料イベントでも、低コストでQR受付による効率化を実現可能。' },
  { icon: 'icon_merit05.webp', title: '商談不要ですぐに利用開始できる', text: '営業担当とのやりとり不要で利用開始できるため、来週のイベントにも間に合う。', titleClass: 'p-merit__card-title--nowrap' },
]

export default function MeritSection() {
  return (
    <section className="p-merit" id="merit">
      <div className="l-inner">
        <div className="c-section-head js-in-view fade-in-up">
          <hgroup className="c-section-head__title-wrap">
            <p className="c-section-head__sub">Benefit</p>
            <h2 className="c-section-head__title">導入メリット</h2>
          </hgroup>
          <div className="c-section-head__cta">
            <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
          </div>
        </div>
        <div className="p-merit__container js-in-view fade-in-up">
          {merits.map((m, i) => (
            <div className="p-merit__card" key={i}>
              <div className="p-merit__card-img">
                <img src={`/img/${m.icon}`} loading="lazy" alt="" width={160} height={160} />
              </div>
              <h3 className={`p-merit__card-title${m.titleClass ? ` ${m.titleClass}` : ''}`}>{m.title}</h3>
              <p className="p-merit__card-text">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
