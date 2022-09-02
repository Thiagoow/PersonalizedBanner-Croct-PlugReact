import React from 'react'
import reactLogo from '../assets/img/react.svg'
import Button from '../components/Button'
import BtnLink from '../components/BtnLink'

export default function Home() {
  return (
    <main
      className={
        'h-screen flex flex-col items-center justify-center bg-bodyColor text-txtColor'
      }
    >
      <img
        src={reactLogo}
        className={'w-52 pointer-events-none animate-spin'}
        alt="React logo spinning"
      />
      <b>Hello React + Tailwind!</b>
      <Button />

      <p>
        Edit <code>App.jsx</code> save to test HMR updates.
      </p>

      <div className={'mt-6'}>
        <BtnLink href="https://reactjs.org"> Learn React </BtnLink>
        {' | '}
        <BtnLink href="https://tailwindcss.com">Learn Tailwind</BtnLink>
      </div>
    </main>
  )
}
