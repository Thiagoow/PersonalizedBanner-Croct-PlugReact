import React from 'react'
import { Link } from 'react-router-dom'
import { useCroct } from '@croct/plug-react'
import croctLogo from '../assets/img/croct.svg'

export default function SetPersona() {
  const croct = useCroct()
  const setPersona = React.useCallback(
    (inputValue) => croct.user.edit().set('custom.persona', inputValue).save(),
    [croct]
  )

  function handleClick() {
    const inputValue = document.getElementById('personaId').value
    setPersona(inputValue.toLowerCase())
  }

  return (
    <main className={'centerHVFlex gap-14 [&>*]:flex'}>
      <div className="gap-2 text-xl items-end">
        <img src={croctLogo} className={'max-w-[2rem]'} alt="Croct logo" />
        <p>Croct</p>
      </div>

      <section className={'flex-col gap-3'}>
        <label>Choose your user persona:</label>

        <div className={'flex-row'}>
          <input
            type="text"
            id="personaId"
            placeholder="Type 1 of the options below"
            className="border-2 border-gray-300 bg-white h-10 focus:border-transparent"
          />

          <Link
            to="/home"
            onClick={handleClick}
            className={'primaryBtn p-[0.6rem] ml-2'}
          >
            SET !
          </Link>
        </div>

        <p className={'text-txtColor text-[0.84rem]'}>
          Developer, Marketer, Growth-hacker
        </p>
      </section>
    </main>
  )
}
