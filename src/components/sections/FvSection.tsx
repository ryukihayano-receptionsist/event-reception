import Image from 'next/image'

export default function FvSection() {
  return (
    <section className="p-fv js-in-view fade-in-up">
      {/* PC hero image */}
      <div className="p-fv__hero p-fv__hero--pc">
        <Image
          src="/img/img_fv--pc.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 0px, 48vw"
          style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
        />
      </div>
      {/* SP hero image */}
      <div className="p-fv__hero p-fv__hero--sp">
        <Image
          src="/img/img_fv--sp.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 0px, 369px"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
      </div>
      <div className="l-inner">
        <div className="p-fv__container">
          <h2 className="p-fv__title">小規模やクローズドな<br className="u-sp" />イベントも<br />受付はQRでスムーズに。</h2>
          <p className="p-fv__text">月額利用料不要の使い切り受付システムで、<br className="u-pc" />招待制イベントの受付を気軽に効率化。</p>
          <div className="p-fv__cta">
            <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
          </div>
          <p className="p-fv__notes">クレカ登録不要で、招待枠10人分を無料でお試しいただけます。</p>
        </div>
      </div>
    </section>
  )
}
