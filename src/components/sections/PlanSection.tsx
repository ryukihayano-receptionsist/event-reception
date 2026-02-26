const seriesPlans = [
  { people: '50人分', payment: 'クレジットカード払い', price: '5,000' },
  { people: '100人分', payment: 'クレジットカード払い', price: '9,800' },
  { people: '500人分', payment: 'クレジットカード / 請求書払い', price: '47,500' },
]

const otherPlans = [
  { people: '50人分', payment: 'クレジットカード払い', price: '7,000' },
  { people: '100人分', payment: 'クレジットカード払い', price: '13,500' },
  { people: '500人分', payment: 'クレジットカード / 請求書払い', price: '65,000' },
]

function PlanCards({ plans }: { plans: typeof seriesPlans }) {
  return (
    <div className="p-plan__container">
      {plans.map((p, i) => (
        <div className="p-plan__card" key={i}>
          <p className="p-plan__card-class">招待枠 <span>{p.people}</span></p>
          <p className="p-plan__card-payment">{p.payment}</p>
          <div className="p-plan__card-price">
            <span className="p-plan__card-price-yen">&yen;</span>
            <span className="p-plan__card-price-num">{p.price}</span>
            <span className="p-plan__card-price-tax">(税別)</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function PlanSection() {
  return (
    <section className="p-plan" id="plan">
      <div className="l-inner">
        <div className="c-section-head c-section-head--plan js-in-view fade-in-up">
          <hgroup className="c-section-head__title-wrap">
            <p className="c-section-head__sub">Price</p>
            <h2 className="c-section-head__title">料金プラン</h2>
          </hgroup>
          <p className="c-section-head__text">
            月額サービスではないため、維持費はかかりません。<br />
            無料招待枠を利用して無料トライアルすることが可能です。
          </p>
          <div className="c-section-head__cta">
            <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
          </div>
        </div>

        <div className="p-plan__group js-in-view fade-in-up">
          <h3 className="p-plan__group-title">RECEPTIONISTシリーズ契約中の企業さま</h3>
          <PlanCards plans={seriesPlans} />
        </div>

        <div className="p-plan__group p-plan__group--other js-in-view fade-in-up">
          <h3 className="p-plan__group-title">上記以外のお客様</h3>
          <PlanCards plans={otherPlans} />
        </div>

        <p className="p-plan__note js-in-view fade-in-up">※販売パートナー経由の場合は500人分単位のみでの販売とさせていただいております。</p>
      </div>
    </section>
  )
}
