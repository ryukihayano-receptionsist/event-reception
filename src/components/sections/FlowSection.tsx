import Image from 'next/image'

const steps = [
  { num: 1, title: '招待者ごとに一意のQRを発行', text: 'それぞれのゲストに受付・入場用のQRを発行。受付で名刺確認する必要はありません。' },
  { num: 2, title: 'スマホやiPadで簡単受付', text: '主催者側は、ブラウザとカメラがついた端末を使って、ゲストのQRを読み取るだけ。' },
  { num: 3, title: '初期費用・月額料金不要', text: '初期費用も月額料金も不要で、招待枠数の事前購入料金のみで使い切りできる。' },
  { num: 4, title: '利用開始までオンラインで完結', text: 'サービス利用登録から招待枠の購入、ゲストの招待など、すべてオンラインで完結。' },
]

export default function FlowSection() {
  return (
    <section className="p-flow" id="flow">
      <div className="l-inner">
        <div className="c-section-head js-in-view fade-in-up">
          <hgroup className="c-section-head__title-wrap">
            <p className="c-section-head__sub">Servise Flow</p>
            <h2 className="c-section-head__title">利用フロー</h2>
          </hgroup>
          <div className="c-section-head__cta">
            <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
          </div>
        </div>
        <div className="p-flow__container js-in-view fade-in-up">
          <div className="p-flow__img">
            <div className="u-pc">
              <Image src="/img/img_flow--pc.webp" alt="イベント情報を登録、メールでゲストを招待し、当日はQRコードで受付、終了後はレポートを確認" width={670} height={842} loading="lazy" sizes="(max-width: 767px) 0px, 670px" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="u-sp">
              <Image src="/img/img_flow--sp.webp" alt="イベント情報を登録、メールでゲストを招待し、当日はQRコードで受付、終了後はレポートを確認" width={670} height={842} loading="lazy" sizes="(min-width: 768px) 0px, 100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
          <div className="p-flow__contents">
            {steps.map((s) => (
              <div className="p-flow__step" key={s.num}>
                <div className="p-flow__step-num">
                  <div className="p-flow__step-num-icon">
                    <Image src="/img/icon_finger.webp" alt="" width={111} height={112} loading="lazy" sizes="56px" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="p-flow__step-num-text">解決 <span>{s.num}</span></div>
                </div>
                <div className="p-flow__step-body">
                  <h3 className="p-flow__step-title">{s.title}</h3>
                  <p className="p-flow__step-text">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
