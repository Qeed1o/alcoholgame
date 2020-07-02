window.onload = () => { }

let namesArray = [];
let alcoArray = [];

const addName = () => {
    const input = document.getElementById('name');
    console.log(`AddName: ${input.value}`);
    namesArray.push(input.value);
    input.value = "";
}

const addAlco = () => {
    const input = document.getElementById('alco');
    console.log(`AddAlco: ${input.value}`);
    alcoArray.push(input.value);
    input.value = "";
}

const animation = (el, callback) => {
    el.classList.add('spin')
    setTimeout(() => {
        el.classList.remove('spin')
        // el.style.display = "none";
        callback();
    }, 1500);
}

const select = (el) => {
   const isRocket = el.classList[0] === "fa";

   if(isRocket){
       animation(el, function(){
            document.getElementById('winner').style.color = "black"; 

            const rAlco = alcoArray[Math.floor(Math.random() * alcoArray.length)]
            const rName = namesArray[Math.floor(Math.random() * namesArray.length)]
            document.getElementById('winner').innerHTML = `${rAlco} + ${rName} = <i class="fa fa-heart" aria-hidden="true"></i>`;

            document.getElementById('winner').style.display = "";
            document.getElementById('rocket').style.display = "none";
       });
   }else{
        animation(el, function(){
            document.getElementById('winner').style.display = "none";
            document.getElementById('rocket').style.display = "";
        });
   }
}

const reset = () => {
    namesArray = [];
    alcoArray = [];
}