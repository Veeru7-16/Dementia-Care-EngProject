// const http= require("http")
// const fs= require('fs')

// const server= http.createServer((req,res)=>{
//     console.log(req.url , req.method)
//     res.setHeader('Content-type', 'text/html'); 


//     let path= './views/';
//     switch(req.url){
//         case '/login':
//             path += 'login.html'
//             res.statusCode = 200 //sets status code for every page. view it in network by inspecting the page
//         break;
//         case '/signup':
//             path += 'signup.html'
//             res.statusCode = 200
//         break;
//         default:
//             path += '404.html'  
//             res.statusCode = 404
//         break;
       
//     }

//     fs.readFile(path,(err,data)=>{
//         if (err){
//             console.log(err)
//             res.end()
//         }
//         else{
//             res.end(data)
//         }
//     })


// });





// server.listen(3000,'localhost',()=>{
//     console.log('listening on port 3000');
// })





