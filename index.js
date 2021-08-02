const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("Welcome Response From Kundan");
});
server.listen(7000,'127.0.0.1',() => {
    console.log("Web Sever Created");
});