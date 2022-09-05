import React from 'react'
import { Slot } from '@croct/plug-react'
import Loading from '../components/Loading'
import Button from '../components/Button'

export default function Home() {
  const fallbackBanner = {
    title: 'Default title',
    subtitle: 'Default subtitle',
    cta: {
      label: 'Try now',
      link: 'https://croct.com'
    }
  }

  return (
    <React.Suspense fallback={<Loading />}>
      <Slot id="home-banner" fallback={fallbackBanner}>
        {({ title, subtitle, cta }) => (
          <main className={'centerHVFlex bg-bodyColor text-txtColor'}>
            <section className={'grid gap-4 max-w-sm'}>
              <h1 className={'text-firstColor font-bold text-3xl'}>
                <strong className="text-altFirstColor"></strong>
                {title}
              </h1>

              <p>{subtitle}</p>
              <Button label={cta.label} href={cta.link} />
            </section>

            <section className="infoImage">
              <img src="" alt="" />
            </section>
          </main>
        )}
      </Slot>
    </React.Suspense>
  )
}
