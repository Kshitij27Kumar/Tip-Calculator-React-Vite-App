import { useState } from 'react'

function TipPercentageButtons() {
  const [selectedPercentage, setSelectedPercentage] = useState(5)

  const handleButtonClick = (percentage: number) => {
    setSelectedPercentage(percentage)
  }

  return (
    <div>
      <button
        className={`button ${selectedPercentage === 5 ? 'selected' : ''}`}
        onClick={() => handleButtonClick(5)}
      >
        5%
      </button>
      <button
        className={`button ${selectedPercentage === 10 ? 'selected' : ''}`}
        onClick={() => handleButtonClick(10)}
      >
        10%
      </button>
      <button
        className={`button ${selectedPercentage === 15 ? 'selected' : ''}`}
        onClick={() => handleButtonClick(15)}
      >
        15%
      </button>
      <button
        className={`button ${selectedPercentage === 25 ? 'selected' : ''}`}
        onClick={() => handleButtonClick(25)}
      >
        25%
      </button>
      <button
        className={`button ${selectedPercentage === 50 ? 'selected' : ''}`}
        onClick={() => handleButtonClick(50)}
      >
        50%
      </button>
    </div>
  )
}

export default TipPercentageButtons
