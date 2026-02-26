'use client'

import { useState, useEffect, useCallback } from 'react'

type HeaderProps = {
  isFrontPage?: boolean
}

export default function Header({ isFrontPage = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    const handleResize = () => {
      if (window.innerWidth > 960) closeMenu()
    }
    document.addEventListener('keydown', handleEsc)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleEsc)
      window.removeEventListener('resize', handleResize)
    }
  }, [closeMenu])

  const handleNavClick = () => {
    if (window.innerWidth <= 960) closeMenu()
  }

  return (
    <>
      <div
        className={`l-header__overlay${isOpen ? ' is-active' : ''}`}
        onClick={closeMenu}
      />
      <header className="l-header">
        <div className="l-header__inner">
          <a href="/" className="l-header__logo">
            <img
              className="l-header__logo-img"
              src="/img/logo.webp"
              alt="招待レセプション"
              width={396}
              height={104}
            />
          </a>

          <button
            className={`l-header__hamburger${isOpen ? ' is-active' : ''}`}
            type="button"
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="l-header__hamburger-line" />
            <span className="l-header__hamburger-line" />
            <span className="l-header__hamburger-line" />
          </button>

          <nav className={`l-header__nav${isOpen ? ' is-open' : ''}`}>
            <>
              <ul className="l-header__nav-list">
                <li><a href={isFrontPage ? '#problem' : '/#problem'} onClick={handleNavClick}>よくある課題</a></li>
                <li><a href={isFrontPage ? '#flow' : '/#flow'} onClick={handleNavClick}>利用フロー</a></li>
                <li><a href={isFrontPage ? '#plan' : '/#plan'} onClick={handleNavClick}>料金プラン</a></li>
                <li><a href={isFrontPage ? '#faq' : '/#faq'} onClick={handleNavClick}>FAQ</a></li>
                <li><a href="https://event.app.receptionist.jp/" onClick={handleNavClick}>ログイン</a></li>
              </ul>
              <div className="l-header__nav-cta">
                <a className="c-button__header--frame" href="/resource/document/">
                  資料をダウンロード
                </a>
                <a className="c-button__header" href="https://event.app.receptionist.jp/signup">
                  無料ではじめる
                </a>
              </div>
            </>
          </nav>
        </div>
      </header>
    </>
  )
}
