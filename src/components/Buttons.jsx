import React, { useState } from 'react'

const Buttons = () => {
  const [equal, setEqual] = useState([])

  const arrayButtons = [
    'Clear',
    '/',
    '*',
    '7',
    '8',
    '9',
    '-',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '0',
    '00',
    '.',
    '=',
  ]
  const addId = (el) => {
    if (el === 'Clear') return 'clear'
    if (el === '+') return 'plus'
    if (el === '=') return 'equal'
  }

  const buttonAction = (e) => {
    if (e.target.textContent === 'Clear') {
      setEqual([])
    } else if (e.target.textContent === '=') {
      setEqual([eval(equal.join(''))])
    } else if (
      (e.target.textContent === '+' && equal.length === 0) ||
      (e.target.textContent === '-' && equal.length === 0) ||
      (e.target.textContent === '*' && equal.length === 0) ||
      (e.target.textContent === '/' && equal.length === 0)
    ) {
      setEqual([...equal])
    } else {
      setEqual([...equal, e.target.textContent])
    }
  }

  return (
    <div className='buttons'>
      <h2 id='value'>{equal}</h2>
      {arrayButtons.map((button) => {
        return (
          <span
            onClick={buttonAction}
            id={addId(button)}
            key={button}
          >
            {button}
          </span>
        )
      })}
    </div>
  )
}

export default Buttons
