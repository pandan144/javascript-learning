const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    hair:"black",
    work:"Web developer",
    Salary:'12,0000',
  };
var result=document.getElementById("result")
// result.innerHTML=`<li> ${person.firstName}</li>`
var res='';
for( const key in person){

    res=`<li id=${key}> ${key} : ${person[key]} </li>`
    console.log(res)
    result.innerHTML= res;

}





