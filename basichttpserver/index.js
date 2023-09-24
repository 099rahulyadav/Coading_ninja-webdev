const http = require("http");
const port=8000;
const fs=require('fs');

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    let filepath;
    switch(req.url){
        case '/':
            filepath='./index.html'
        break;
    case '/profile':
        filepath='./profile.html'
    break;
    default:
        filepath='./404.html'
    }
    //res.end("<h1>Gotcha!</h1>");
   /* fs.readFile('./index.html',function(err,data){
        if (err) {
            console.log('error',err);
            return res.end('<h1>Error!</h1>')
    }
    return res.end(data);
 } )*/
 fs.readFile(filepath,function(err,data){
    if (err) {
        console.log('error',err);
        return res.end('<h1>Error!</h1>')
}
return res.end(data);
});
}

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running:",port);
});