var student=[{
    "name":"doe",
    "age":23,
    "year":2018,
    "university":'JNTU' 
    
},{
    "name":"jhone",
    "age":26,
    "year":2015,
    "university":'NITk' 
    
}]


   // for-in
              for(var key in student){
                  console.log(student[key]);
              }
     // forEach
   student.forEach((item)=>console.log(item));
   
   
   //for-of
   for(var n of student){
       console.log(n.name);
   }
    