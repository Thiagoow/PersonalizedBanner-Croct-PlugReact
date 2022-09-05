import React from 'react'
import { HomeBanner } from '../components/HomeBanner'
const { accentTitle, accentFirst, title, subtitle, cta } = HomeBanner
import Button from '../components/Button'

export default function Home() {
  return (
    <main
      className={
        'h-screen flex flex-col items-center justify-center bg-bodyColor text-txtColor'
      }
    >
      <section className={'grid gap-4 max-w-sm'}>
        <h1 className={'text-firstColor font-bold text-3xl'}>
          {accentFirst && (
            <strong className="text-altFirstColor">{accentTitle}</strong>
          )}{' '}
          {title}{' '}
          {!accentFirst && (
            <strong className="text-altFirstColor">{accentTitle}</strong>
          )}
        </h1>

        <p>{subtitle}</p>
        <Button label={cta.label} href={cta.link} />
      </section>

      <section className="infoImage">
        <img src="" alt="" />
      </section>
    </main>
  )
}
