// function myfunc(){
//   var a = +prompt("Enter the number")
//   var b = +prompt("Enter the number")
//   var c = +prompt("Enter the number")
//   var d = +prompt("Enter the number")
//   if(a === d && b === c){
//     console.log("right")
//   }
//   else(console.log(wrong))
// }
// myfunc()

////////////////////////////////////////////////////////

// function reverse() {
//     let ent = +prompt("Enter the Number")
//     let arr = ent.toString().split("");
//     let reversed = arr.reverse().join("");
//     console.log(reversed)
//     return reversed;
// }
// reverse()

/////////////////////////////////////////////


// let possibleCombinations = (str) =>{
//     let combinations = [];
//       for(let i = 0 ;i < str.length; i++)
//     {
//         for(let j = i + 1; j< str.length + 1; j++)
//         {
//             combinations.push(str.slice(i , j));
//         }
//     }
    
//     console.log(combinations);
//     return combinations;
// }
// possibleCombinations("dog")

///////////////////////////////////////////////////////


// function alphaOrder(str){
//     var arr = str.split("");
//     arr.sort();
//     var sortedStr = arr.join("");
//     return sortedStr
//  }
//  console.log(alphaOrder("webmaster"))
//
///////////////////////////////////////////////////// 

// function countVowel(str) { 
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
// }
// const string = prompt("Enter a string");
// const result = countVowel(string);
// console.log(result);

////////////////////////////////////////////////////////

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

///////////////////////////////////////////////////////////////

// function longest(str){
//   str = str.match(/[a-zA-Z0-9]+/gi);
//   let largest = "";
//   for(let i = 0; i < str.length; i++){
//       if(str[i].length > largest.length){
//       largest = str[i]
//       }
//   }
//   return largest;
//   }
   
//   console.log(longest("Web Development Tutorial"))
// // function checkprm(num){
//    for(i = 2 * 1,2,3,4,5. ; i < num; i++){
//       if(num % i===0)
//       return("NotPrimeNumber")
//    }
//    return("PrimeNumber")
// }
// console.log(checkprm(37))

//////////////////////////////////////////////////////////////

// function sum( value1 , value2 ) {
//     // var value1 = +prompt("Enter the number");
//     // var value2 = +prompt("Enter the number");
//     var total = value1 + value2;
//     console.log( 'The sum of ' + value1 + ' and ' + value2 + ' is: ' + total );
// }
// sum(3 , 0);

//////////////////////////////////////////////////////////

// function Second_Greatest_Lowest(arr_num)
// {
//   arr_num.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = [arr_num[0]];
//   var result = [];
  
//   for(var j=1; j < arr_num.length; j++)
//   {
//     if(arr_num[j-1] !== arr_num[j])
//     {
//       uniqa.push(arr_num[j]);
//     }
//   }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//   return result.join(',');
//   }

// console.log(Second_Greatest_Lowest([1,2,3,4,5]));