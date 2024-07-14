let curr = document.querySelectorAll('.Currency');
let data = document.getElementById('data');
let error = document.getElementById('error');
let btn = document.getElementById('btn');

console.log(curr)
fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displaydropdown(res))

function displaydropdown(res){
    let cur = Object.entries(res)
    
    for(i=0;i<cur.length;i++){
        let opt=`<option vlaue="${cur[i][0]}">${cur[i][0]}</option>`;
        curr[0].innerHTML += opt
        curr[1].innerHTML += opt
    }
}

btn.addEventListener("click",()=>{
    let Currency1 = curr[0].value;
    let Currency2 = curr[1].value;
    let datainput = data.value;

    if(Currency1 === Currency2){
        error.innerText="Choose The Differenr Currencies"
    }
    else if(!datainput){
        error.innerText=" Enter The Currencies value"
    }
    else{
        convertcourrency(Currency1,Currency2,datainput)
    }
})


function convertcourrency(Currency1,Currency2,datainput){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${datainput}&from=${Currency1}&to=${Currency2}`)
      .then(resp => resp.json())
      .then((data) => {
        document.getElementById('result').value=(Object.values(data.rates)[0])
      });
}