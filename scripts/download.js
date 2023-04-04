import path from 'path'
import axios from 'axios'
import fs from 'fs'
import { getFavIcoFromGoogle } from './download.js'

import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 
 * @param {*} site 
 * @param {*} size 'big' | 'small'
 */
export function getFavIcoFromGoogle(url, imagePath, size = 'big') {
  let searchPath = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=${size === 'big' ? '128' : 16}`
  return axios.get(searchPath, {
    responseType: 'stream'
  }).then(response => new Promise((resolve, reject) => {
    response.data.pipe(fs.createWriteStream(imagePath))
      .on('finish', () => resolve())
      .on('error', e => reject(e))
  }))
}

export function getFavEasy(url) {
  getFavIcoFromGoogle(url, path.join(__dirname, '../' + url + '.png'))
}