import React from 'react'
import { Slot } from '@croct/plug-react'
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
    <Slot id="home-banner" fallback={fallbackBanner}>
      {({ title, subtitle, cta }) => (
        <main
          className={
            'h-screen flex flex-col items-center justify-center bg-bodyColor text-txtColor'
          }
        >
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
  )
}
