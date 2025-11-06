// let obj={};

// obj.name="rohit";
//key value writable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
 //writable =flase ,value ko kya ma change karva sakta hu
//  obj.name="Mohit";
 //configurable =flase 

//  let obj ={};
//  Object.defineProperty(obj,'name',{
//     value:"rohit",
//     writable:true,
//     enumerable:true,
//     configurable:false,
//  })

//  Object.defineProperty(obj,"name",{
//     writable:false,


//  })


//   obj.name="mohit";
 
//  console.log(obj);
 

//  const obj1={
//     name:"rohit",
//     age:23,
//     account_number:3001,
//  }
//  Object.defineProperty(obj1,'account_number',{
//     writable:false
//  })
//  obj1.account_number =2001;
//  console.log(obj1.account_number);

  // const customer={
  //   name:"roght",
  //   age:23,
  //   account_number:86,
  //   blaance:1234,
  // }

  //name ,acccount number kabhi bhi alag nahi hine chaiye
//    Object.defineProperty(customer,"name",{
//     writable:false,
//    })
 
  //enumerable jid be kiey ka inumerable true hoga vo un sabko print karega
  // inherit hoke bhi koi bhi property or key aati hai ,uska ineumerable tuue hoga to vo bhi print hoga

//     let customer2=Object.create(customer);
//     customer2.city="haridwar";
//     customer2.place="delhi";

//     Object.defineProperty(customer,"name",{
//         enumerable:false,
//     })
//   for(let key in customer2)
//      console.log(key);
   
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));

  
// Object.defineProperty(Object.prototype,'toString',{
//     enumerable:true,
//   })
//  for(let key in customer)
//     console.log(key);
 


 
