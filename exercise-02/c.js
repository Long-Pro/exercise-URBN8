
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

const api=  async()=>{
  try {
    const x=await new Promise((res,rej)=>{
      res(1)
    })
    console.log('result:',x)

    const x2=await api2()
    console.log('result2:',x2)

    const x3=await api3()
    console.log('result3:',x3)

  } catch (error) {
    console.log("err")
  }
}

api()




