import fs from 'fs/promises'
import path from 'path'
import { getFavIcoFromGoogle } from './download.js'

import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonObj = {
  name: 'xcy',
  age: 32
}


let parentDir = path.join(__dirname, '../docs/nav')
let dataToJsonList = []

fs.readdir(parentDir).then((files) => {
  let originalFiles = []
  for (let file of files) {
    if (path.extname(file) === '.json') {
      originalFiles.push(path.join(parentDir, file))
    }
  }

  // TODO 并发优化


  for (let file of originalFiles) {
    getDataFromJson(file).then(value => {
      dataToJsonList.push({ path: file, data: value })
      console.log('****start**', file)
      for (let i = 0; i < value.length; i++) {
        let innerArr = value[i].items;
        for (let j = 0; j < innerArr.length; j++) {
          if (checkIconIsValid(innerArr[j])) {
            console.log('valid', innerArr[j].icon)
            if (!innerArr?.at(j).link) {
              writeLogs(innerArr.at(j))
              return
            }
            let imgPath = genImgPathFromUrl(innerArr[j].link)
            innerArr[j].icon = '/public/sites/' + imgPath;
            console.log(innerArr[j].icon)
            let realPath = path.join(__dirname, '../docs/public/sites/', imgPath)
            getFavIcoFromGoogle(innerArr[j].link, realPath).then(() => {
              fs.writeFile(file, JSON.stringify(value))
            })
          } else {
            console.log('invalid', innerArr[j].icon)
          }
        }
      }

    })
  }
}).catch(err => console.log(err)).finally(() => {
})


async function getDataFromJson(path) {
  const textContent = await fs.readFile(path)
  const obj = JSON.parse(textContent)
  return obj
}





function checkIconIsValid(item) {
  if (!item.icon) {
    return false
  }

  if (item.icon.startsWith('http')) {
    return true;
  }

  if (item.icon.startsWith('/')) {
    return true;
  }
  // TODO 如果是本地路径查看是否存在
  return false;
}


function genImgPathFromUrl(url) {
  let hostname = new URL(url).hostname
  return hostname + '.png';
}


function writeLogs(content) {
  fs.writeFile(path.join(__dirname, '../error.log'), content, {
    mode: 'a'
  })
}
