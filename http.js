const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('<h1>Welcome to our Home Page...</h1>')
    }
    else if (req.url === '/about'){
        res.write('<h2>ABOUT: About my Website.</h2>' )
    }
    else res.end(`
    <h3>OOPS!</h3>
    <p>The page is not available</p>
    <p>Go back <a href='/'>home</a> </p>
    `)
    
    res.end()
})

server.listen(5000)


