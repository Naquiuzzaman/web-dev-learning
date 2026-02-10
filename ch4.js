// Q.1
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let val of marks){
//     sum+=val;

// }
// let avg = sum / marks.length;
// console .log (`avg marks of the class= ${avg}`);

// Q.2
// 

// 2ND METHOD 
// let items = [250,645,300,900,50,];
// for (let i = 0; i < items.length ; i++){
//     let offer = items[i]/10;
//     items [i] -= offer;
// }
// console.log (items);


// # ARRAY METHODS

// let marks = [97,98,99,100];
// console.log(marks.toString);
// console.log (marks);

//  #ARRAY METODS 
    
    // 1. concat() : Joins multiple array & return result

    // let marvelHeroes = ["thor"," spiderman", "ironman"];
    // let dcHeroes = ["superman", "batman"];
    // let heroes = marvelHeroes.concat(dcHeroes);
    // console .log (heroes);

// 2.unshift() : Add to start 

//  let marvelHeroes = ["thor"," spiderman", "ironman"];
// let heroes = marvelHeroes.unshift("antman");
//  console.log (heroes)
// console.log(marvelHeroes); 


// 3. shift() : Delete from start and return 

// let marvelHeroes = ["thor"," spiderman", "ironman"];
// let val = marvelHeroes.shift();
// console.log(" deleted"  ,val); 


// 4.push() : Add to end

// let marvelHeroes = ["thor"," spiderman", "ironman"];
//  let val = marvelHeroes.push("antman");
//   console.log(val); 
// console.log(marvelHeroes)


// 5.Pop : Delete from end & return

// let marvelHeroes = ["thor"," spiderman", "ironman"];
// let val = marvelHeroes.pop();
// console.log(val); 
// console.log(marvelHeroes)


// 6.tostring():convert array to string

// let marvelHeroes = ["thor"," spiderman", "ironman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.toString());
// console.log(marvelHeroes);

//  7.slice() : Return a piece of the array 
        // SLICE (STARTIDX, ENDIDX)

// let marvelHeroes = ["thor"," spiderman", "ironman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice());

//  8. splice() : change original array (add, remove, replace)
            // SPLICE (STARTIDX, DELCOUNT, NEWEL1...)
 
// let arr =  [1, 2, 3, 4, 5];
//   arr.splice(2, 0, 101,);   // add element
// console.log(arr.splice());

// Q.1

// let companies = ["Bloomberg", "Microsoft", "Google", "Uber"];
// companies.shift(); // Q.A part
// console.log(companies);
// companies.splice(3,1,"Ola"); //Q.B part 
// console.log(companies);
// companies.push("Amazon"); //Q.C part
// console.log(companies);