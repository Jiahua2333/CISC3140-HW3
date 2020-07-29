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

