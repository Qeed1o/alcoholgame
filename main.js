window.onload = () => { 
	//document.body.requestFullscreen();
	window.scrollTo(0,1);
	console.log('test');
}

let namesArray = [];
let alcoArray = [];

let nameIndex = 0;
let alcoIndex = 0;

const addName = () => {
    const input = document.getElementById('name');
    const select = document.getElementById('nameses');
    console.log(`AddName: ${input.value}`);
    namesArray.push(input.value);
    const optionToAdd = document.createElement('option');
    optionToAdd.value = input.value;
    optionToAdd.text = input.value;
    select.appendChild(optionToAdd);
    input.value = "";
}

const addAlco = () => {
    const input = document.getElementById('alco');
    const select = document.getElementById('alcoses');
    console.log(`AddAlco: ${input.value}`);
    alcoArray.push(input.value);
    const optionToAdd = document.createElement('option');
    optionToAdd.value = input.value;
    optionToAdd.text = input.value;
    select.appendChild(optionToAdd);
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
   const isRocket = el.id === "dirik";
//    alcoIndex = ((alcoIndex + 1) <= (alcoArray.length - 1)) ? alcoIndex + 1 : 0;

   if(isRocket){
       animation(el, function(){
            document.getElementById('winner').style.color = "black"; 
            alcoIndex = Math.floor(alcoArray.length - 1);
            const rAlco = alcoArray[alcoIndex]
            const rName = namesArray[nameIndex]
            console.log(nameIndex, namesArray[nameIndex])
            document.getElementById('winner').innerHTML = `${rAlco} + ${rName} = <i class="fa fa-heart" aria-hidden="true"></i>`;

            document.getElementById('winner').style.display = "";
            document.getElementById('dirik').style.display = "none";
            nameIndex = nameIndex + 1;
            nameIndex >= namesArray.length ? nameIndex = 0 : {};
       });
   }else{
        animation(el, function(){
            document.getElementById('winner').style.display = "none";
            document.getElementById('dirik').style.display = "";
        });
   }

   
}

const reset = () => {
    namesArray = [];
    alcoArray = [];
    document.getElementById('names').innerHTML = ""
    document.getElementById('alcos').innerHTML = ""
}
