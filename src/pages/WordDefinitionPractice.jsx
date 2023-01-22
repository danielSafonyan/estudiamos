import React from 'react'
import Header from '../components/Header'
import wordData from '../assets/wordData'
import hasSpanishAccent from '../utils/hasSpanishAccent'

export default function WordDefinitionPractice() {

  const [wordNumber, setWordNumber] = React.useState(0)

  const [wordInput, setWordInput] = React.useState('')
  function handleInput(event) {
    setWordInput(event.target.value)
  }

  const [isWordShown, setIsWordShown] = React.useState(false)
  function toggleIsWordShown() {
    setIsWordShown(prev => !prev)
  }

  const { name: word, definition: wordDefinition } = wordData[wordNumber]

  function checkInputWord(word, wordInput) {
    word = word.toLowerCase()
    wordInput = wordInput.toLowerCase()
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
    const wordsMatch = word.toLowerCase() === wordInput.toLowerCase()
    if (wordsMatch && wordNumber < 10) {
      setWordNumber(prev => prev + 1)
      setWordInput('')
      setIsWordShown(false)
    }
  }

  function showPrevWord() {
    if (wordNumber > 0) {
      setWordNumber(prev => prev - 1)
    }
  }
  
  return (
          <div className='app-container'>
            <Header />
            <main className="main">
                <div>{wordNumber + 1}/10</div>  
              <form className="form" onSubmit={handleSubmit}>
                {hasSpanishAccent(word) && <p className="word-hint">{'Presta la atención a los acentos'}</p>}
                <p className="word-hint">{ isWordShown ? word : ''}</p>
                <input
                  value={wordInput}
                  className="word-input"
                  style={inputWordStyle}
                  maxLength={word.length}
                  onChange={handleInput}
                /> <span className="word-definition">{wordDefinition}</span>
                <div className="btn-container">
                  <button type='button' className='btn' onClick={showPrevWord}>Atrás</button>
                  <button type='button' className='btn' onClick={toggleIsWordShown}><i className="fa-solid fa-poo"></i></button>
                </div>
              </form>
            </main>
          </div>)
}