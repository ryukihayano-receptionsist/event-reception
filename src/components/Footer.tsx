import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="l-footer js-in-view fade-in-up">
      <div className="l-inner l-footer__inner">
        <div className="l-footer__container">
          <div className="l-footer__contents">
            <div className="l-footer__body">
              <h2 className="l-footer__title">さっそくはじめましょう</h2>
              <p className="l-footer__text">
                クレカ登録不要で、招待枠10人分を無料でお試しいただけます。
              </p>
              <div className="l-footer__links">
                <a href="/resource/document/" className="c-button__large">資料をダウンロード</a>
              </div>
            </div>

            <div className="l-footer__company">
              <ul className="l-footer__company-menu">
                <li><a href="https://receptionist.co.jp/about">運営会社情報</a></li>
                <li><a href="https://help.receptionist.jp/?help=402">個人情報保護方針</a></li>
                <li><a href="/help/helpcenter/">ヘルプセンター</a></li>
                <li><a href="/help/terms/">利用規約</a></li>
              </ul>
              <div className="l-footer__company-info">
                <div className="l-footer__company-logo">
                  <Image src="/img/logo-footer.webp" alt="Receptionist" width={264} height={64} loading="lazy" sizes="132px" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="l-footer__company-copyright">
                  &copy; RECEPTIONIST, Inc.<span>All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="l-footer__img">
            <div className="u-pc">
              <Image src="/img/img_footer--pc.webp" alt="" width={686} height={496} loading="lazy" sizes="(max-width: 767px) 0px, 686px" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="u-sp">
              <Image src="/img/img_footer--sp.webp" alt="" width={686} height={496} loading="lazy" sizes="(min-width: 768px) 0px, 100vw" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
