import React from 'react'
import { useEvaluation } from '@croct/plug-react'
//Images import:
import developer from '../assets/img/Developer.png'
import marketer from '../assets/img/Marketer.png'

const HeroImg = () => {
  const persona = useEvaluation("user's persona or else 'unknown'")

  return (
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
        className={'max-w-[17rem] xs:max-w-sm lg:!max-w-md relative z-10'}
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
  )
}

export default HeroImg
