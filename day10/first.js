// how to create object
//  const obj={
//     0:20,
//     1:23,
//     2:32,
//     name:"rohit",
//     account_balance:420,
//     gender:"Male",
//     age:30,
//     undefined:30,
//     null:"jsakw",
//  }
//  console.log(obj);
//  console.log(typeof obj);
//  console.log(obj.gender);
//  console.log(obj.name);
//  console.log(obj["gender"]);
//  console.log(obj["account_balance"]);
//  console.log(obj.undefined);
//  console.log(obj.null);
 //console.log(obj[0]);

  
//  let arr=[21,434,13];
//  console.log(arr[0],obj[1]);
    

// second method
 // const person=new Object();

//property add
// person.name="Rohit";
// person.age=80;
// person.gender="Male";
// console.log( person);
//  delete person.age;
//  console.log(person);
//  //modify and update
//  person.name ="Mohit";
//  console.log(person);
 


// third method

// class people{
//     constructor(Na,ag,egn){
//         this.Name=Na;
//         this.age=ag;
//         this.egnw=egn;
//     }
// }

//  let per1= new people("Rohit",20,"Male");
//  let per2 =new people("aman",20,"male");
//  console.log(per1);
//  console.log(per2);


    // let obj={
    //     name:"sachhin",
    //     age:30,
    //     account_balace:432,
    // }
    // const arr =Object.keys(obj);
    // console.log(arr);
    // const arr1 =Object.values(obj);
    // const arr2=Object.entries(obj);

    //assighn use case
    // const onj1={a:1,b:2};
    // const obj2={c:2,d:4};
    // const obj4={s:2,l:4};
    // const obj3=Object.assign({},obj4,onj1,obj2);
    // obj3.a=10;
    // console.log(obj3);
    // 
//   const obj5={...obj2,...obj4};
//   console.log(obj5);  






// second method


 
const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

const obj4={...obj1,...obj2};
 console.log(obj4);