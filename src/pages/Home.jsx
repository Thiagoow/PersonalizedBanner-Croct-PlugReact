import React from 'react'
import { Slot } from '@croct/plug-react'
import Loading from '../components/Loading'
import HeroInfo from '../components/HeroInfo'
import HeroImg from '../components/HeroImg'

export default function Home() {
  const fallbackBanner = {
    title: "Hi There! It seems like you don't have a persona yet",
    subtitle:
      "If that's the case, please click on the CTA-Button below & choose one of the options to get started.",
    cta: {
      label: 'Set My Persona',
      link: '/login'
    }
  }

  return (
    <React.Suspense fallback={<Loading />}>
      <Slot id="home-banner" fallback={fallbackBanner}>
        {({ title, subtitle, cta }) => (
          <main
            className={
              'centerHVFlex bg-bodyColor text-txtColor mt-32 md:mt-0 md:flex-row'
            }
          >
            <HeroInfo title={title} subtitle={subtitle} cta={cta} />
            <HeroImg />
          </main>
        )}
      </Slot>
    </React.Suspense>
  )
}
