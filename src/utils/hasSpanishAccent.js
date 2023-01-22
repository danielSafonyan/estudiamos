const SPANISH_ACCENTS = 'áéíóúüñ'
export default function hasSpanishAccent(word) {
    return !!word.match(new RegExp(`[${SPANISH_ACCENTS}]`))
}