var fruits = ["Banana", "Orange", "Apple", "Mango"];
var res = document.getElementById('result')
var text='';
// function dataview(){>
    for(i=0;i<=fruits.length-1;i++){
      text+=`<li> ${fruits[i]} </li>`;
    } 
    res.innerHTML = text;  

    
// }
// dataview()



// pop method
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
var fruits2 =fruits1.pop()
var res = document.getElementById('pop')

function bob(res1,res2,e){
    var text='';
    for(i=0;i<=res1.length-1;i++){
        text+=`<li> ${res1[i]} </li>`;
      } 
      e.innerHTML = text; 
}
bob(fruits1,fruits2,res)


// push method
var fruitspush = ["Banana", "Orange", "Apple", "Mango"];
var fruitspush2 = fruitspush.push('arul')
var reslt2 = document.getElementById('push')

bob(fruitspush,fruitspush2,reslt2)



// unshift method

var fruitsunshift = ["Banana", "Orange", "Apple", "Mango"];
var fruitsunshift1 = fruitsunshift.unshift('akpand')
var reslt = document.getElementById('unshift')

bob(fruitsunshift,fruitsunshift1,reslt)



// shift method

var fruitshift = ["Banana", "Orange", "Apple", "Mango"];
var fruitshift1 = fruitshift.shift()
var reshift = document.getElementById('shift')

bob(fruitshift,fruitshift1,reshift)


//delete method

var fruitsdelete = ["Banana", "Orange", "Apple", "Mango"];
var fruitsdelte1 = delete fruitsdelete[2]
var resdelte= document.getElementById('delete')

bob(fruitsdelete,fruitsdelte1,resdelte)

console.log(resdelte)



var fruitscopy = ["Banana", "Orange", "Apple", "Mango"];
var fruitscopy1 = fruitscopy.copyWithin(2,0)
var rescopy= document.getElementById('copy')

bob(fruitscopy,fruitscopy1,rescopy)

console.log(rescopy)

// slice method

var fruitslice = ["Banana", "Orange", "Apple", "Mango"];
var fruitslice1 = fruitslice.slice(1)
var reslice= document.getElementById('slice')

bob(fruitslice,fruitslice1,reslice)

console.log(reslice)


// short methods

var fruitshort = ["Banana", "Orange", "Apple", "Mango"];
var fruitshort1 = fruitshort.sort()
var resort= document.getElementById('short')

bob(fruitshort,fruitshort1,resort)

console.log(resort)

// splice method
var fruitsplice = ["Banana", "Orange", "Apple", "Mango"];
var fruitsplice1 = fruitsplice.splice(0,1,'arul','ak')
var resplice= document.getElementById('splice')

bob(fruitsplice,fruitsplice1,resplice)

console.log(resplice)

// join method
var fruitjoin = ["Banana", "Orange", "Apple", "Mango"];
var fruitjoin1 = fruitjoin.join(' * ')
var resjoin= document.getElementById('join')
bob(fruitjoin,fruitjoin1,resjoin)

console.log(resjoin)
