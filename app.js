const data1=require("./data1")
const fs = require("fs")
const  yargs = require("yargs")

 yargs.command({
    command : "add" ,describe : " to add an item",
    builder : {
      fname : {
         describe :"this is the first name desc in add command",demandOption : true ,type : "string"},
      lname : {
         describe :"this is the last name desc in add command",
         demandOption : true ,
         type : "string"
              }
    },
    handler : (x)=> { data1.addPerson(x.id,x.fname ,x.lname,x.city,x.age) }
})

yargs.command({command : "delete",  describe: "to delete an item",
   handler : (x)=> { data1.delete_Data(x.id) }
})

yargs.command({
   command : "read",
   describe: "to read an item",
   builder:{
      id:{
         describe:"this is id ",demandOption:true,  type:"string"
         }
   },
   handler : (x)=> {  data1.Read_Data(x.id) }
})

yargs.command({
   command : "list",describe: "to list  items", handler : ()=> {data1.list_data() }
             })
                yargs.parse()




 

 


