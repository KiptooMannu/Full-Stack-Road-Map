// what is rest parameter : rest parameter is used to get the rest of the parameters


const sample = (a,b,...args) => {
    console.log(a,b)
    args.forEach((arg) => {
        console.log(arg)
    })
    console.log(typeof args)
}

sample(1,2,3,4,5,6,7,8,9,10)

