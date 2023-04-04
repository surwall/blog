import path from 'path'
import axios from 'axios'
import fs from 'fs'

import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




/**
 * 
 * @param {*} site 
 * @param {*} size 'big' | 'small'
 */
function getFavIcoFromGoogle(url, imagePath, size = 'big') {
  let searchPath = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=${size === 'big' ? '128' : 16}`
  return axios.get(searchPath, {
    responseType: 'stream'
  }).then(response => new Promise((resolve, reject) => {
    response.data.pipe(fs.createWriteStream(imagePath))
      .on('finish', () => resolve())
      .on('error', e => reject(e))
  }))
}


function getFavEasy(url) {
  getFavIcoFromGoogle(url, path.join(__dirname, Math.random().toFixed(5) + '.png'))
}


let arr = [
  `
  
https://cordova.apache.org/
  
  `,
]

for (let item of arr) {
  getFavEasy(item.trim())
}
