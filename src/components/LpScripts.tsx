'use client'

import { useEffect } from 'react'

type LpScriptsProps = {
  isHome?: boolean
}

export default function LpScripts({ isHome = false }: LpScriptsProps) {
  useEffect(() => {
    // Viewport fix (375px min) - home only
    if (isHome) {
      const viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
        const switchViewport = () => {
          const value = window.outerWidth > 375
            ? 'width=device-width,initial-scale=1'
            : 'width=375'
          if (viewport.getAttribute('content') !== value) {
            viewport.setAttribute('content', value)
          }
        }
        window.addEventListener('resize', switchViewport)
        switchViewport()
        return () => window.removeEventListener('resize', switchViewport)
      }
    }
  }, [isHome])

  useEffect(() => {
    // IntersectionObserver for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view')
        } else {
          entry.target.classList.remove('is-in-view')
        }
      })
    })

    const items = document.querySelectorAll('.js-in-view')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Smooth scroll with header offset
    const header = document.querySelector('.l-header')
    const headerHeight = header ? header.getBoundingClientRect().height : 0

    const handleClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement
      const href = link.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href)
        if (target) {
          e.preventDefault()
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight
          window.scrollTo({ top: targetPosition, behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener('click', handleClick))

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleClick))
    }
  }, [])

  useEffect(() => {
    // FAQ accordion (Web Animations API)
    const animTiming: KeyframeAnimationOptions = {
      duration: 300,
      easing: 'ease-in-out',
    }

    const details = document.querySelectorAll('.js-details')
    const handlers: Array<{ el: Element; handler: (e: Event) => void }> = []

    details.forEach((el) => {
      const summary = el.querySelector('.js-summary')
      const answer = el.querySelector('.js-content') as HTMLElement | null
      if (!summary || !answer) return

      const handler = (e: Event) => {
        e.preventDefault()
        if (el.getAttribute('open') !== null) {
          const closingAnim = answer.animate(
            [
              { height: answer.offsetHeight + 'px', opacity: 1 },
              { height: '0px', opacity: 0 },
            ],
            animTiming
          )
          closingAnim.onfinish = () => el.removeAttribute('open')
        } else {
          el.setAttribute('open', 'true')
          answer.animate(
            [
              { height: '0px', opacity: 0 },
              { height: answer.offsetHeight + 'px', opacity: 1 },
            ],
            animTiming
          )
        }
      }

      summary.addEventListener('click', handler)
      handlers.push({ el: summary, handler })
    })

    return () => {
      handlers.forEach(({ el, handler }) => el.removeEventListener('click', handler))
    }
  }, [])

  return null
}
