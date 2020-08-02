let input = document.getElementById('phone-mask');
let output = document.getElementsByClassName('output')[0];

input.onkeyup=function (e) {

    let value=this.value.replace(/[^0-9]+/g,'');
    let matchValue=this.value.replace(/[^a-zA-Z0-9]+/g,'');   
    let isNum = false;


    if(value.length === matchValue.length) isNum = true;
    console.log(value,matchValue, typeof this.value, isNum);
    if (this.value.length === 3 && e.keyCode !== 8) {
        this.value=this.value+'-';
        console.log(e.keyCode);
    }else if (this.value.length === 7 && e.keyCode !== 8) {
        this.value=this.value+'-';
    }else if (isNum) {
        output.innerHTML='Right format';
        output.style.color='green';
    }else if(!isNum){
        output.innerHTML='Wrong format, no letters please';
        output.style.color='red';
    }
}
        
// input.onblur=function () {
//     let value=parseInt(this.value.replace(/\s/g,''));
//     alert(typeof value+' '+value);
// }

let bankNum = document.getElementById('bankNum');
let output2 = document.getElementsByClassName('output')[1];
output2.innerHTML = "Please enter a bank number wiht 16 digits";
bankNum.onkeyup=function(e){
    let code=this.value.replace(/[^0-9]+/g,'')
    let len = code.length

    if(this.value.length === 4 || this.value.length === 9 || this.value.length === 14 && e.keyCode !== 8){
        this.value=this.value+' ';
    }
    if(e.keyCode === 8) {
        output2.innerHTML = "Please enter a bank number wiht 16 digits";
        output2.style.color='black';
    }
    if(len === 16){
        let arr = (code + '').split('').reverse().map(x => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
        sum += lastDigit;
        if(sum%10 === 0) {
            output2.style.color='green';
            output2.innerHTML = "Valid Number";       
        }
        else {
            output2.style.color='red';
            output2.innerHTML = "Invalid Number";         
        }
    }
}
