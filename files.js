const fs = require('fs').promises

console.log('hello node')

fs.readdir(__dirname).then(files => Promise.all(files.map(async file => {
   const res = await fs.stat(file) 
   return {
    name: file
   }
}))).then(res => console.table(res))

