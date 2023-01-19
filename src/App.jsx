import './App.css'
import React from 'react'

function App() {
  const [wordInput, setWordInput] = React.useState('')
  function handleInput(event) {
    setWordInput(event.target.value)
  }

  const [isWordShown, setIsWordShown] = React.useState(false)
  function toggleIsWordShown() {
    console.log("I don't know the word.")
    setIsWordShown(prev => !prev)
  }

  const word = "La medianoche"
  const wordDefinition = `se refiere a la hora exacta de 12:00 de la noche, o sea, el momento en el cual el día cambia a la noche. También puede ser usado para referirse al periodo de tiempo que va desde las 11:00 PM hasta las 1:00 AM.`

  function checkInputWord(word, wordInput) {
    word = word.toLowerCase()
    wordInput = wordInput.toLowerCase()
    // if (word === wordInput) return '#138A36'
    if (word === wordInput) return '#1ACC29'

    const len = wordInput.length
    if (word.slice(0, len) === wordInput) return '#62BBC1'

    return '#C80A1E'
  }
  
  const inputWordStyle = {
    width: (word.length + 2) + 'ch', 
    textAlign: 'center',
    color: checkInputWord(word, wordInput)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (word === wordInput) {
      console.log("Going to the new word!")
    }
  }
  
  return (
          <div className='app-container'>
            <header className="header">
              <i className="fa-solid fa-arrow-left"></i>
              <div>1/10</div>  
            </header>
            <main className="main">
              <form className="form" onSubmit={handleSubmit}>
                <p className="word-hint">{ isWordShown ? word : ''}</p>
                <input
                  value={wordInput}
                  className="word-input"
                  style={inputWordStyle}
                  maxLength={word.length}
                  onChange={handleInput}
                /><span className="word-definition">{wordDefinition}</span>
                <div className="btn-container">
                  <button type='submit' className='btn'>Comprobar</button>
                  <button type='button' className='btn' onClick={toggleIsWordShown}><i className="fa-solid fa-poo"></i></button>
                </div>
              </form>
            </main>
          </div>)
}

export default App
