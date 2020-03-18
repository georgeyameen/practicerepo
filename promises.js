const f = new Promise(function(resolve, reject){
    return setTimeout(() => resolve("okay"), 3000)
}
)
const g = new Promise(function(resolve, reject){
    return setTimeout(() => resolve("meh"), 3000)
}
)
Promise.all([f,g]).then((values)=>{
    console.log(values)
})

/* f.then(function(value){
    console.log(value)
    return g.then((value2)=>{
        return value + value2
    })
}).then(function(value){
    console.log(value)
}) */



