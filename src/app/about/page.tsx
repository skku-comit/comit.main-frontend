import IntroSection from '@/components/about/IntroSection'
import OrganizationSection from '@/components/about/OrganizationSection'
import CISection from '@/components/about/CISection'
import ContactSection from '@/components/about/ContactSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <IntroSection />
      <OrganizationSection />
      <CISection />
      <ContactSection />
    </div>
  )
}
