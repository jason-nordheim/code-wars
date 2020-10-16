/**
 * Instructions: Complete the solution so that it returns 
 * the first argument (string) passed in ends with the second
 * argument (also a string) 
 */

 export function stringEndsWith(str, ending) {
   // if the string provided is short then the ending 
   // string, return false 
   if (str.length < ending.length) {
     return false 
   } else if (str[str.length -1] !== ending[ending.length - 1]) {
     // if the last character in the ending does not match the 
     // the last character of the ending, return false 
     return false 
   } else {
     // compare each letter starting from the end of the 
     // the "ending" string, if any of the characters 
     // within the do not match 
     // return true 
     let distanceFromEnd = 0 
     while (distanceFromEnd < ending.length){
      if(str[str.length - 1 - distanceFromEnd] !== ending[ending.length - 1 - distanceFromEnd]){
        return false 
      }
      distanceFromEnd++ 
     }
     
     // if we made it here, we found no different letters 
     return true 
   }
 }