const faqs = [
  { q: 'スマホを持っていない来場者にはどう対応すればいい？', a: 'WEB管理画面や受付用スマホアプリのゲスト一覧から、名前・社名で検索して手動で受付することが可能です。' },
  { q: 'セキュリティは？', a: '当社はISMSおよびISO27017（クラウドセキュリティ）の認証を取得しており、セキュリティに十分配慮したサービス提供を心がけております。' },
  { q: 'QR発行は誰ができますか？', a: 'イベントの管理者権限または招待権限をもったユーザーが、招待・QR発行することが可能です。' },
  { q: '同時に複数入場口で使えますか？', a: '受付用端末を複数用意いただければ、複数の入場口で同時に受付することが可能です。' },
]

export default function FaqSection() {
  return (
    <section className="p-faq" id="faq">
      <div className="l-inner">
        <div className="c-section-head js-in-view fade-in-up">
          <hgroup className="c-section-head__title-wrap">
            <p className="c-section-head__sub">FAQ</p>
            <h2 className="c-section-head__title">よくあるご質問</h2>
          </hgroup>
          <div className="c-section-head__cta">
            <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
          </div>
        </div>
        <div className="p-faq__container js-in-view fade-in-up">
          {faqs.map((faq, i) => (
            <div className="p-faq__item" key={i}>
              <h3 className="p-faq__item-question">{faq.q}</h3>
              <p className="p-faq__item-answer">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
