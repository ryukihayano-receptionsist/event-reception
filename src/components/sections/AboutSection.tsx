import Image from 'next/image'

export default function AboutSection() {
  return (
    <div className="p-about">
      <div className="l-inner">
        <div className="c-section-head js-in-view fade-in-up">
          <hgroup className="c-section-head__title-wrap">
            <p className="c-section-head__sub">About</p>
            <h2 className="c-section-head__title">QRで効率的なイベント受付を、<br />今すぐに、使い切り料金で。</h2>
          </hgroup>
          <div className="c-section-head__cta p-about__cta">
            <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
          </div>
        </div>
        <p className="p-about__text js-in-view fade-in-up">
          招待レセプションは、招待制イベントの受付に最適化されたイベント受付サービスです。<br className="u-pc" />
          事前にゲストのメールアドレス宛にQR付き招待状を送付し、当日QRによる受付を実現することで入場時の混雑を無くします。<br className="u-pc" />
          オンライン手続きのみで利用開始でき、月額料金不要で招待人数に応じた料金のみで利用できます。
        </p>
      </div>
      <div className="p-about__img js-in-view fade-in-up">
        <div className="u-pc">
          <Image
            src="/img/img_about--pc.webp"
            alt=""
            width={1280}
            height={566}
            loading="lazy"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="u-sp">
          <Image
            src="/img/img_about--sp.webp"
            alt=""
            width={721}
            height={566}
            loading="lazy"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}
