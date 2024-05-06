const http = require('http');
const port = 8000;
const fs = require('fs');
const reqHandler = (req,res) => {
    let filename = '';

    switch(req.url){
        case '/':
            filename = "./index.html"
            break;
            case '/about':
            filename = "./about.html"
            break;
            case '/contact':
            filename = "./contact.html"
            break;
            case '/blog':
                filename = "./blog.html"
                break;

    }
    fs.readFile(filename,(err,result) =>{
        if(!err){
            res.end(result);
        }
    })
}
const server = http.createServer(reqHandler);

server.listen(port,(err) => {
    if(err){
        console.log("server not in port")
        return false;
    }
    console.log("server start in port")
})