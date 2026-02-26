import '@/styles/front-page.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LpScripts from '@/components/LpScripts'
import FvSection from '@/components/sections/FvSection'
import AboutSection from '@/components/sections/AboutSection'
import ProblemSection from '@/components/sections/ProblemSection'
import FlowSection from '@/components/sections/FlowSection'
import UseCaseSection from '@/components/sections/UseCaseSection'
import MeritSection from '@/components/sections/MeritSection'
import CaseStudySection from '@/components/sections/CaseStudySection'
import PlanSection from '@/components/sections/PlanSection'
import FaqSection from '@/components/sections/FaqSection'

export default function HomePage() {
  return (
    <>
      <Header isFrontPage />
      <main className="l-main l-main--front">
        <FvSection />
        <AboutSection />
        <ProblemSection />
        <FlowSection />
        <UseCaseSection />
        <MeritSection />
        <CaseStudySection />
        <PlanSection />
        <FaqSection />
      </main>
      <Footer />
      <LpScripts isHome />
    </>
  )
}
