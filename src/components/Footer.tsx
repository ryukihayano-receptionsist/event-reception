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
                  <img src="/img/logo-footer.webp" loading="lazy" alt="Receptionist" width={264} height={64} />
                </div>
                <div className="l-footer__company-copyright">
                  &copy; RECEPTIONIST, Inc.<span>All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="l-footer__img">
            <picture>
              <source media="(min-width: 768px)" srcSet="/img/img_footer--pc.webp" />
              <img src="/img/img_footer--sp.webp" loading="lazy" alt="" width={686} height={496} />
            </picture>
          </div>
        </div>
      </div>
    </footer>
  )
}
