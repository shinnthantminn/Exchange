import currency from "./data.js"

let select = document.querySelectorAll(".select");

function fixAndSetAttribute(x) {
    return  x.replace(",","");
}

for (let x in currency) {
    let a = currency[x].rates;
    for (let z in a){
        for (let i = 0; i < select.length; i++) {
            /*select[i].innerHTML += `<option value="1,285.9">AUD</option>
                <option value="${a[z]}">${z}</option>
            `*/

            let opt = document.createElement("option");
            opt.append(z);
            opt.setAttribute("value",fixAndSetAttribute(a[z]));
            fixAndSetAttribute(a[z],opt);
            select[i].append(opt);
        }
    }
}



