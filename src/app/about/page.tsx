'use client'

// import IntroSection from '@/components/about/IntroSection'
// import OrganizationSection from '@/components/about/OrganizationSection'
// import CISection from '@/components/about/CISection'
// import ContactSection from '@/components/about/ContactSection'
import LocationSection from '@/components/about/LocationSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black/95">
      {/* <IntroSection />
      <OrganizationSection />
      <CISection /> */}
      {/* <ContactSection /> */}
      
      {/* 찾아오시는 길 섹션 */}
      <LocationSection />
    </div>
  )
}
