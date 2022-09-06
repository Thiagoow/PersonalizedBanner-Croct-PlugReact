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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget aliquam tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
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
              'centerHVFlex bg-bodyColor text-txtColor mt-48 md:flex-row md:mt-0'
            }
          >
            <section
              className={'grid gap-4 max-w-sm ml-5 md:max-w-md md:ml-10'}
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
              <img
                src={persona === 'developer' || null ? developer : marketer}
                className={'max-w-[17rem] xs:max-w-sm lg:!max-w-md'}
                alt="persona image"
              />
            </section>
          </main>
        )}
      </Slot>
    </React.Suspense>
  )
}
