const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
    const html=fs.readFileSync("server.html","utf-8");
    res.end(html);

}).listen(4000);
