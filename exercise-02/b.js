const api=  ()=>{
  return new Promise((res,rej)=>{
    res(1)
  })
}
const api2=  ()=>{
  return new Promise((res,rej)=>{
    res(2)
  })
}
const api3=  ()=>{
  return new Promise((res,rej)=>{
    res(3)
  })
}

api()
  .then(x=>{
    console.log('result:',x)
    return api2()
  })
  .then(x=>{
    console.log('result2:',x)
    return api3()
  })
  .then(x=>{
    console.log('result3:',x)
  })
  .catch(err=>{
    console.log("err")
  })