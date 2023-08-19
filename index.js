const http = require('http');

const server = http.createServer((req,res) => {
    console.log("Yo, just received your request");

    const url = req.url;
    if (url === '/'){
        res.write("<h1>Heya...This is Nana Kay</h1>");
    }else if (url === '/Login'){
        res.write("<h1>Welcome to Login</h1>")
    }else if (url === '/About'){
        res.write('<h1>What do you want to know about?...</h1>');
    }else {
        res.write("<h1>You lost bro...</h1>")
    }

    res.end(); 
});


server.listen(4000, ()=>{
    console.log("Server listening ...");
});