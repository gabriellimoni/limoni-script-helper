# Limoni Script Helper
Package for help me write scripts in Node.js. This package exports an object with all the side functions I use to write local scripts.

## Instalation

`npm install limoni-script-helpers`

## Usage

```javascript
// require the function you need
const {
    getDateFromExcelDateNumber,
    getTimestampString,
    json2csv,
    xlsx2json,
    log,
    sleep,
} = require('limoni-script-helpers')

// then run it
await sleep(2000) // 2s
```

## Features

- `xlsx2json`: Imports the first Excel tab from a XLSX file into a JSON array. Each item of the array is an object with the first row as object keys.
- `json2csv`: Exports a JSON array into a CSV file.
- `getDateFromExcelDateNumber`: Format a excel number date (eg. 35384) to javascript Date;
- `getTimestampString`: Get the current timestamp string (eg: 2020-8-28 9-14-10). Useful for output file names;
- `log`: Log data into file and console if needed;
- `sleep`: Sleep for some time (ms).