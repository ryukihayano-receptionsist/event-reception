import Image from 'next/image'

const useCases = [
  { img: 'img_case01', alt: 'パーティーを楽しむ人々', tags: [['招待制パーティ'], ['懇親会', '交流会']] },
  { img: 'img_case02', alt: '発表会を行う様子', tags: [['メディア向け発表会', '顧客向け新商品発表会']] },
  { img: 'img_case03', alt: '社内イベントに参加する人々', tags: [['社内イベント', '内定式', '入社式', '表彰式']] },
  { img: 'img_case04', alt: '卒業式の様子', tags: [['学校イベント', '入学式', '卒業式', '運動会', '文化祭']] },
]

export default function UseCaseSection() {
  return (
    <section className="p-use-case" id="use-case">
      <div className="l-inner">
        <div className="c-section-head js-in-view fade-in-up">
          <hgroup className="c-section-head__title-wrap">
            <p className="c-section-head__sub">Use Case</p>
            <h2 className="c-section-head__title">利用シーン・ユースケース</h2>
          </hgroup>
          <div className="c-section-head__cta">
            <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
          </div>
        </div>
        <div className="p-use-case__container js-in-view fade-in-up">
          {useCases.map((uc, i) => (
            <div className="p-use-case__item" key={i}>
              <div className="p-use-case__item-img">
                <div className="u-pc">
                  <Image src={`/img/${uc.img}--pc.webp`} alt={uc.alt} width={670} height={401} loading="lazy" sizes="(max-width: 767px) 0px, 50vw" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="u-sp">
                  <Image src={`/img/${uc.img}--sp.webp`} alt={uc.alt} width={670} height={401} loading="lazy" sizes="(min-width: 768px) 0px, 100vw" style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
              <div className="p-use-case__item-body">
                {uc.tags.map((tagGroup, j) => (
                  <ul className="p-use-case__item-tags" key={j}>
                    {tagGroup.map((tag, k) => (
                      <li key={k}>{tag}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
