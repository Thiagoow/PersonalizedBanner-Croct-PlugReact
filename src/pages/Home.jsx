import React from 'react'
import { useEvaluation, Slot } from '@croct/plug-react'
import Loading from '../components/Loading'
import Button from '../components/Button'
//Images import:
import developer from '../assets/img/Developer.png'
import marketer from '../assets/img/Marketer.png'

export default function Home() {
  const persona = useEvaluation("user's persona or else 'unknown'")

  const fallbackBanner = {
    title: "Hi There! It seems like you don't have a persona yet",
    subtitle:
      "If that's the case, please click on the CTA-Button below & choose one of the options to get started.",
    cta: {
      label: 'Set My Persona',
      link: '/setPersona'
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
            <section
              className={
                'grid gap-4 max-w-sm self-start ml-5 xs:ml-14 md:self-center md:ml-10 md:max-w-md'
              }
            >
              <h1 className={'text-firstColor font-bold text-3xl'}>
                <strong className="text-altFirstColor">
                  {title.split(' ').slice(0, 2).join(' ')}
                </strong>{' '}
                {title.split(' ').slice(2).join(' ')}
              </h1>

              <p>{subtitle}</p>
              <Button label={cta.label} href={cta.link} />
            </section>

            <section className={'mt-16 self-end md:mt-0 md:ml-16'}>
              <svg // Mobile triangleBg:
                class="absolute z-0 right-0 block md:hidden w-0 xs:h-full xs:w-[52%] text-[#3fd29a]"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 100,100 0,100" />
              </svg>

              <img
                src={persona === 'developer' || null ? developer : marketer}
                className={
                  'max-w-[17rem] xs:max-w-sm lg:!max-w-md relative z-10'
                }
                alt="persona image"
              />

              <svg // Desktop triangleBg:
                class="absolute z-0 right-0 inset-y-0 hidden md:block h-full md:w-[39%] xl:w-[42%] text-[#3fd29a]"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 100,100 0,100" />
              </svg>
            </section>
          </main>
        )}
      </Slot>
    </React.Suspense>
  )
}
