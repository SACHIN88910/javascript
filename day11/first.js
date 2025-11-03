//  let obj1 ={
//     a:1,
//     b:2
//  }

//  let  obj2=obj1;
//  console.log(obj2);
//  shallow copy
//  obj2.a=10;
//  console.log(obj1,obj2);


 //deep copy
//  let obj3=structuredClone(obj1);
//  obj3.a=20;
//  console.log(obj3,obj1);


// const user={
//     name:"roghit",
//     balance:430,
//     address:{
//         pincode:23455678,
//         city:"kotwera"
//     }
// }

//  console.log(user.address.pincode);

//  const user2=Object.assign({},user);
//  console.log(user2);
//  user2.address.pincode=3482324;
//  console.log(user.address.pincode);
//  user2.name="sachin";
//  console.log(user.name);

// 
//Object.freeze
// object.seal

// destruecting the object 

// let obj={
//     name:"rohit",
//     money:432,
//     balance:121,
//     age:23
// }

//  const {name:full_name,balance:amount}=obj;
//  console.log(name,balance);
// console.log(full_name,amount);
 
    // const{name,age,...obj1}=obj;
    // console.log(obj1);

//  const arr=[3,2,1,5,10];
//  const[first,second, ,third]=arr;
//  console.log(first,second,third);
//  console.log(arr);

// const[first,second,...thord]=arr;
// console.log(first,second,thord);


// let obj={
//     name:"rohit",
//     money:430,
//     age:20,
//     arr:[23,4,6,234,232],
//     address:{
//         pincode:246832,
//         city:"kotdwaer",
//         state:"uk"
//     }
// }

// const{address:{pincode,city,state}}=obj;
// console.log(pincode,city,state);   

// const {arr:[first]}=obj;
// console.log(first);
  

// let user={
//     name:"rohit",
//     amount:420,
//     greet:function(){
//         console.log( "hello  coder army");
//     },
//     meet:function(){
//         return 20;
//     }
// }
//   user.greet();
//  console.log(user.meet());


// let obj={
//     name:"rohit",
//     amount:420,
//     greet:function(){
//         return 10;
//     }
// }

//   console.log(obj.toString());
  

 

//  const obj={
//     name:"sachin",
//     gender:"male",
//     age:20,
//     address:{
//         houseno:"k444",
//         streetno:12,
//         city:"delhi",
//     },
    
//     arr:[1234,1,2,4,5],
//  }

//  const{address:{streetno,city}}=obj;

//  console.log(streetno,city);
//  const{arr:[first]}=obj;
//  console.log(first);
//  console.log(obj.address.houseno);



