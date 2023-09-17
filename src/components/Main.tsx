import { useState } from 'react'
import '../App.css'

const main = () => {
  const [bill, setBill] = useState<string>('')
  const [customTip, setCustomTip] = useState<string>('')
  const [numberOfPeople, setNumberOfPeople] = useState<string>('')
  const [tipPerPerson, setTipPerPerson] = useState('0.00')
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState('0.00')

  const handleCustomTip = () => {
    const customTipPercentage = parseFloat(customTip)
    calculate(customTipPercentage / 100)
  }

  const valid = (): boolean => {
    if (parseFloat(bill) < 0) {
      const invalidBill = document.getElementById(
        'if-negative-bill'
      ) as HTMLParagraphElement
      const billInput = document.getElementById('bill') as HTMLInputElement
      if (invalidBill) {
        invalidBill.innerText = "Can't be Negative"
        invalidBill.style.color = 'red'
        billInput.style.borderColor = 'red'
      }
      return false
    } else if (parseFloat(bill) >= 0) {
      const validBill = document.getElementById(
        'if-negative-bill'
      ) as HTMLParagraphElement
      const billInput = document.getElementById('bill') as HTMLInputElement
      if (validBill) {
        validBill.innerText = ``
        billInput.style.borderColor = ''
      }

      return true
    } else if (parseInt(numberOfPeople) <= 0) {
      const invalidNumberOfPeople = document.getElementById(
        'if-zero-number'
      ) as HTMLParagraphElement
      const peopleInput = document.getElementById(
        'number-people'
      ) as HTMLInputElement
      if (invalidNumberOfPeople) {
        invalidNumberOfPeople.innerText = "Can't be Zero or Negative"
        invalidNumberOfPeople.style.color = 'red'
        peopleInput.style.borderColor = 'red'
      }
      return false
    } else if (parseInt(numberOfPeople) > 0) {
      const validNumberOfPeople = document.getElementById(
        'if-zero-number'
      ) as HTMLParagraphElement
      const peopleInput = document.getElementById(
        'number-people'
      ) as HTMLInputElement
      if (validNumberOfPeople) {
        validNumberOfPeople.innerText = ``
        peopleInput.style.borderColor = ''
      }

      return true
    } else if (parseFloat(customTip) < 0) {
      const invalidCustomTip = document.getElementById(
        'if-negative-tip'
      ) as HTMLParagraphElement
      const customTipInput = document.getElementById(
        'custom'
      ) as HTMLInputElement
      if (invalidCustomTip) {
        invalidCustomTip.innerText = "Can't be Negative"
        invalidCustomTip.style.color = 'red'
        customTipInput.style.borderColor = 'red'
      }
      return false
    } else if (parseFloat(customTip) >= 0) {
      const validCustomTip = document.getElementById(
        'if-zero-number'
      ) as HTMLParagraphElement
      const customTipInput = document.getElementById(
        'custom'
      ) as HTMLInputElement
      if (validCustomTip) {
        validCustomTip.innerText = ``
        customTipInput.style.borderColor = ''
      }

      return true
    }

    return true
  }
  const calculate = (tipPercentage: number) => {
    if (valid()) {
      if (parseFloat(bill) !== 0 && parseInt(numberOfPeople) !== 0) {
        let tip = (parseFloat(bill) * tipPercentage) / parseInt(numberOfPeople)
        let total = parseFloat(bill) / parseInt(numberOfPeople) + tip
        let exactTip = tip.toFixed(2)
        let exactTotal = total.toFixed(2)
        setTipPerPerson(exactTip)
        setTotalAmountPerPerson(exactTotal)
      }
    }
  }

  const reset = (): void => {
    setBill('')
    setNumberOfPeople('')
    setCustomTip('')
    setTipPerPerson('0.00')
    setTotalAmountPerPerson('0.00')
  }

  return (
    <main>
      <div id='main-left'>
        <div id='main-left-top'>
          <div id='bill-label'>
            <p>Bill</p>
            <p id='if-negative-bill'></p>
          </div>

          <div id='bill'>
            <img src='/assets/icon-dollar.svg' alt='dollar icon' />
            <input
              className='input'
              type='number'
              name='bill'
              placeholder='0'
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />
          </div>
        </div>
        <div id='main-left-middle'>
          <div id='tip-label'>
            <p>Select Tip %</p>
            <p id='if-negative-tip'></p>
          </div>
          <div className='percentage-choice'>
            <button
              id='button'
              className='button'
              onClick={() => calculate(0.05)}
            >
              5%
            </button>
            <button
              id='button'
              className='button'
              onClick={() => calculate(0.1)}
            >
              10%
            </button>
            <button
              id='button'
              className='button'
              onClick={() => calculate(0.15)}
            >
              15%
            </button>
            <button
              id='button'
              className='button'
              onClick={() => calculate(0.25)}
            >
              25%
            </button>
            <button
              id='button'
              className='button'
              onClick={() => calculate(0.5)}
            >
              50%
            </button>
            <input
              id='custom'
              className='custom'
              type='number'
              placeholder='Custom'
              onChange={(e) => setCustomTip(e.target.value)}
              onClick={handleCustomTip}
            />
          </div>
        </div>
        <div id='main-left-bottom'>
          <div id='people-information'>
            <p>Number of people</p>
            <p id='if-zero-number'></p>
          </div>
          <div id='number-people'>
            <img src='/assets/icon-person.svg' alt='icon person' />
            <input
              className='input'
              type='text'
              name='numberOfPeople'
              placeholder='0'
              defaultValue={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div id='main-right'>
        <div id='main-right-top'>
          <div>
            <p className='tip-person'>Tip Amount</p>
            <p className='person'>/ person</p>
          </div>
          <div className='total-tip'>
            <div className='dollar'></div>
            <span>$</span>
            <span id='result-tip'>{tipPerPerson}</span>
          </div>
        </div>
        <div id='main-right-middle'>
          <div>
            <p className='tip-person'>Total</p>
            <p className='person'>/ person</p>
          </div>
          <div className='total-tip'>
            <div className='dollar'></div>
            <span>$</span>
            <span id='result-total'>{totalAmountPerPerson}</span>
          </div>
        </div>
        <button id='button-reset' disabled onClick={() => reset()}>
          RESET
        </button>
      </div>
    </main>
  )
}

export default main
