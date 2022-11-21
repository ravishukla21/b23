function studentData(first,last,age,marks,h1,h2,h3) {
  // let style={
  //   first,last,age,marks,h1,h2,h3
  // }
   let style={
    fullName :first+last,
    first,last,age,marks,
    hobbies:[h1,h2,h3],
    getInfo:first+last+"'s age is"+age,
    getResult:'Result: PASS',
  }
 
    

  
  
  return (style)
}


//studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');





export {studentData}