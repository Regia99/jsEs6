// let a = 2;
// a = a * 2;

// try{
//     document.querySelector("div").innerHTML = a;
// }catch(err){
//     if(err.name === "TypeError")
// }

// let prom = prompt("Type your value");
//  prom = +prom;

//  try{
//      if(typeof prom !== "number" || !prom){
//          throw "Не корректное начение!"
//      }
//  }catch(err){
//      console.log(err);
//  }finally{
//      alert("You can try again")
//  }

//  let color = "red";
// switch (color) {
//     case red:
//         alert("red");
        
//         break;
//         case red:
//         alert("red");
        
//         break;
//         case red:
//         alert("red");
        
//         break;

//     default:
//         alert("Error");
//         break;
// }


// Задание на повторение.....

// let person = {}
// while (true){
//     let comand = prompt("1.Добавить \n  2.Просмотреть \n 3.Удалить \n 4.Введите команду");

    
//     if(command === "1"){
// let name = prompt("Type name");
// let nameIs;
// for(key in person){
//     if(name == person[key]){
//         nameIs = name;
//     }
// }
// if(nameIs || !name){
//     alert("Error");
// }else{
//     persons[name] = name;
// }
// }else if(comand === "2"){
//     }else if(comand === "3"){

//     }else{
//         break;
//     }
// }

////23 задание- экзамен......

// let first__num = +prompt("First__num") 
// if(first__num % 3 == 0 && first__num % 5 == 0){ 
//     alert("ого, делится") 
// }else if(first__num % 3==0){ 
//     alert('арара') 
// }else if(first__num % 5==0){ 
//     alert('огого') 
// }

const person ={
    name: "Aika",
    year: 18,
};

const defaults ={
    name:"user",
    year:18,
    host:"localhost",
}

const user ={...defaults, ...person}
const us = {}
for (key in person){
    us[key] = person[key]
}
console.log(us);
console.log(user);


function count(...arguments){
console.log(arguments);
}

count(12,4,5,10,20);


const mass = [2,3,"text"];
const mass2 =[22,55, "som"];
const shallowCopy = [...mass, ...mass2]
console.log(shallowCopy);





    
