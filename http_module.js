const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        return res.end("Welcome to Home Page.")
    }
    if(req.url === '/about'){
        return res.end("This is About Page.")

    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the Page.</p>
    <a href="/">back to home</a>
    `)
})

server.listen(3000)