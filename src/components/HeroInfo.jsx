import React from 'react'
import Button from '../components/Button'

const HeroInfo = ({ title, subtitle, cta }) => {
  return (
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
  )
}

export default HeroInfo
