

  const fs = require("fs")

  const addPerson = (id , fname , lname , city , age) => {
       const allData = loadInfo()
const duplicateData =allData.filter((obj)=>{
  return obj.id===id
})

if (duplicateData.length==0){

       allData.push({
         id : id,
         fname : fname,
         lname : lname,
         city : city,
         age : age
       })

       savealldata(allData)
      }else{
        console.log("error yaaa bro")
      }
  }

/////////////////////////////////////////////////////////////////////

  const loadInfo = () => {
    try { 
        const dataJson = fs.readFileSync("data1.json").toString()
        return  JSON.parse(dataJson)
    }
    catch {
        return []
    }
     
  }

/////////////////////////////////////////////////////////////////////
 
  const savealldata = (allData) => {
     const saveallDataJson  = JSON.stringify(allData)
     fs.writeFileSync("data1.json" , saveallDataJson)
  }

///.......................................................................delete data...................................................
const delete_Data=(id)=>{
const AllData =loadInfo()
const dataToKeep=AllData.filter((obj)=>{
  return obj.id!==id

})

savealldata(dataToKeep)
}

//............................................................read data ....................................................................
const Read_Data=(id)=>{
  const allData=loadInfo()
  const item_Neaded=allData.find((obj)=>{
    return obj.id==id
  })
  if (item_Neaded){
console.log(item_Neaded)
  }else{
    console.log("not found")
  }
}
//............................................................list users.....................................................................
const list_data=()=>{
  const allData=loadInfo()
allData.forEach((obj) => {
  console.log(obj.fname,obj.city)
});
}

///...........................................................export file & functions.............................................................


module.exports = {
    addPerson,
    delete_Data,
    Read_Data,
    list_data
}