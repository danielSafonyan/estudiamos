import React from 'react'
import './styles/WordDefinitionMain.css'

import hasSpanishAccent from '../utils/hasSpanishAccent'
import checkInputWord from '../utils/checkInputWord'

import wordData from '../assets/wordData'

export default function WordDefinitionMain() {
  const [wordNumber, setWordNumber] = React.useState(0)
  const [wordInput, setWordInput] = React.useState('')
  const [isWordShown, setIsWordShown] = React.useState(false)
  const { name: word, definition: wordDefinition } = wordData[wordNumber]
  
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
        <main className="word-definition-main">
            <div>{wordNumber + 1}/10</div>  
            <form 
            className="word-definition-form" 
            onSubmit={handleSubmit}
            >
                {hasSpanishAccent(word) && <p className="word-definition-hint">{'Presta la atención a los acentos'}</p>}
                <p className="word-definition-hint">{ isWordShown ? word : ''}</p>
                <input
                    value={wordInput}
                    className="word-definition-input"
                    style={inputWordStyle}
                    maxLength={word.length}
                    onChange={e => setWordInput(e.target.value)}
                /> <span className="word-definition-definition">{wordDefinition}</span>
                <div className="word-definition-btn-container">
                <button 
                    type='button' 
                    className='btn' 
                    onClick={showPrevWord}
                    >Atrás</button>
                <button     
                    type='button'
                    className='btn' 
                    onClick={() => setIsWordShown(prev => !prev)}
                    ><i className="fa-solid fa-poo"></i></button>
                </div>
            </form>
        </main>
        )
}