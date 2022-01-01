/*let Variable assign*/
let num = document.getElementById("number");
let from = document.getElementById("form");
let to = document.getElementById("to");
let calc = document.getElementById("calc");
let res = document.getElementById("res");
let motherOfTable = document.getElementById('motherOfTable');
let table = document.getElementById("table");
let clear = document.getElementById("clear");
let switcher = document.getElementById("switcher");

calc.addEventListener("click",_=>{
    let currency = num.value;
    let fromValue = from.value;
    let toValue = to.value;

    chacker(currency,fromValue,toValue);


    if (fromValue == "0" || currency == ""){
        return
    }else {
        calculate(currency,fromValue,toValue,res);
        Storage()
        motherOfTable.classList.remove("d-none")
    }

    num.value = "";
    num.focus();
    from.value= "0";
    to.value = "1";
});

/*for Calculation*/
function calculate(x,y,z,alpha) {
    alpha.innerText =  (x * y / z).toFixed(2);

    let fromText = document.querySelector(`[value="${y}"]`)
    let toText = document.querySelector(`[value="${z}"]`)

    addTable(fromText.innerText,toText.innerText,alpha.innerText,x)
}

/*for table*/
function addTable(x,y,z,o) {
    let d = new Date()

    let tableCheck = document.getElementById("tableCheck");

    tableCheck.classList.remove("d-none")

    table.innerHTML +=`
        <tr>
            <td class="text-secondary">${d.toLocaleString()}</td>
            <td class="text-secondary">${o} ${x}</td>
            <td class="text-secondary">${y}</td>
            <td class="text-secondary text-end">${z}</td>
        </tr>
    `
}

/*for validation*/
function chacker(x,y,z) {
    if (x == "" || x == "0" ){
        num.classList.add("is-invalid");
    }else {
        num.classList.remove("is-invalid");
    }

    if (y == "0"){
        from.classList.add("is-invalid");
    }else {
        from.classList.remove("is-invalid");
    }
}

/*for LocalStorage*/


function Storage() {

    localStorage.setItem("one",table.innerHTML)

}

(function storageChacker() {

    if (localStorage.one === undefined){

    }else{
        table.innerHTML += localStorage.one;
        motherOfTable.classList.remove("d-none")
    };

})()

/*clear record*/

clear.addEventListener("click",_=>{
    localStorage.clear()
    location.reload()
})

/*Theme Changer*/

let counter = 0
switcher.addEventListener("change",_=>{
    counter++
    if (counter == 1){
        document.body.style.backgroundColor = "#000"
        document.querySelector(".switch").style.backgroundColor = "#000"
        document.getElementById("indicator").classList.remove("fa-moon");
        document.getElementById("indicator").classList.add("fa-sun");
        document.getElementById("indicator").classList.add("text-white");
    }else{
        document.body.style.backgroundColor = "#fff"
        document.querySelector(".switch").style.backgroundColor = "#fff"
        counter = 0
        document.getElementById("indicator").classList.remove("fa-sun");
        document.getElementById("indicator").classList.add("fa-moon");
        document.getElementById("indicator").classList.remove("text-white၏  ");
        document.getElementById("indicator").classList.add("text-black");
    }
})



