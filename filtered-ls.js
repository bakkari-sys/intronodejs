const fs = require("fs")
fs.readdir(process.argv[2], (err, list)=>{
    if(err){console.log(err)}
    else{list.map(e => (e.includes("."+process.argv[3]) && console.log(e)))
    }})
