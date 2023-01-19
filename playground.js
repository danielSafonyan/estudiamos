
const spreadsheetId = '1jOub2gVVQMtB5wKUOQ43XpD4denrZZ5nEG_c4alLpm8'
const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`

fetch(API_URL)
    .then(resp => resp.json())
    .then(data => console.log(data))