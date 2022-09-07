import React from 'react'
import { useCroct } from '@croct/plug-react'
import croctLogo from '../assets/img/croct.svg'

export default function Login() {
  const croct = useCroct()
  const setPersona = React.useCallback(
    (inputValue) => croct.user.edit().set('custom.persona', inputValue).save(),
    [croct]
  )

  function handleClick() {
    const inputValue = document
      .getElementById('personaId')
      .value.trim()
      .toLowerCase()

    if (
      inputValue === 'developer' ||
      inputValue === 'marketer' ||
      inputValue === 'growth-hacker'
    ) {
      setPersona(inputValue)
      window.location.href = '/home'
    } else {
      alert('Please type a valid persona')
    }
  }

  return (
    <main className={'centerHVFlex !h-screen gap-14 [&>*]:flex'}>
      <div className="gap-2 text-xl items-end font-semibold">
        <img src={croctLogo} className={'max-w-[2rem]'} alt="Croct logo" />
        <p>Croct</p>
      </div>

      <section className={'flex-col gap-3'}>
        <label>Choose your user persona:</label>

        <div className={'flex flex-row'}>
          <input
            type="text"
            id="personaId"
            placeholder="Type 1 of the options below"
            className="border-2 border-gray-300 bg-white h-10 focus:border-transparent"
          />

          <button onClick={handleClick} className={'primaryBtn p-2 ml-2'}>
            SET!
          </button>
        </div>

        <p className={'text-txtColor text-[0.84rem]'}>
          Developer, Marketer, Growth-hacker
        </p>
      </section>
    </main>
  )
}
