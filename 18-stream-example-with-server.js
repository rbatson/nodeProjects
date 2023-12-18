var http = require('http')
var fs = require('fs')

// sending file in ONE big chunk
// http
//     .createServer((req, res) => {
//     const text = fs.readFileSync('./content/evenbiggerfile.txt', 'utf8')
//     res.end(text)
//     })
//     .listen(5050)
//
//
http
    .createServer((req, res) => {
        const fileStream = fs.createReadStream('./content/evenbiggerfile.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err)
        })
    })
    .listen(5050)

