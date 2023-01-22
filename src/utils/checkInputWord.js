export default function checkInputWord(word, wordInput) {
    word = word.toLowerCase()
    wordInput = wordInput.toLowerCase()
    if (word === wordInput) return '#1ACC29'

    const len = wordInput.length
    if (word.slice(0, len) === wordInput) return '#62BBC1'

    return '#C80A1E'
  }