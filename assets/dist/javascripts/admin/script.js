// Load trước khi xử lí JS
document.addEventListener("DOMContentLoaded", function(){
	 x = document.getElementById('mySelect').value;
     y = document.getElementById('DoiMau');
     if(x == "ChuaGiao") y.classList.add('success');
     else if(x == "DangGiao") y.classList.add('warning');
     else y.classList.add('info');

     x = document.getElementById('mySelect1').value;
     y = document.getElementById('DoiMau1');
     if(x == "ChuaGiao") y.classList.add('success');
     else if(x == "DangGiao") y.classList.add('warning');
     else y.classList.add('info');

     x = document.getElementById('mySelect2').value;
     y = document.getElementById('DoiMau2');
     if(x == "ChuaGiao") y.classList.add('success');
     else if(x == "DangGiao") y.classList.add('warning');
     else y.classList.add('info');

     x = document.getElementById('mySelect3').value;
     y = document.getElementById('DoiMau3');
     if(x == "ChuaGiao") y.classList.add('success');
     else if(x == "DangGiao") y.classList.add('warning');
     else y.classList.add('info');
}, false)

function myFunction() {
    x = document.getElementById('mySelect').value;
    y = document.getElementById('DoiMau');
    y.classList.remove('success');
    y.classList.remove('warning');
    y.classList.remove('info');

    if(x == "ChuaGiao") y.classList.add('success');
    else if(x == "DangGiao") y.classList.add('warning');
    else y.classList.add('info');
    console.log(x);
    console.log(y);
}


function myFunction1() {
	x = document.getElementById('mySelect1').value;
    y = document.getElementById('DoiMau1');
    y.classList.remove('success');
    y.classList.remove('warning');
    y.classList.remove('info');

    if(x == "ChuaGiao") y.classList.add('success');
    else if(x == "DangGiao") y.classList.add('warning');
    else y.classList.add('info');
    console.log(x);
    console.log(y);
}

function myFunction2() {
	x = document.getElementById('mySelect2').value;
    y = document.getElementById('DoiMau2');
    y.classList.remove('success');
    y.classList.remove('warning');
    y.classList.remove('info');

    if(x == "ChuaGiao") y.classList.add('success');
    else if(x == "DangGiao") y.classList.add('warning');
    else y.classList.add('info');
    console.log(x);
    console.log(y);
}


function myFunction3() {
	x = document.getElementById('mySelect3').value;
    y = document.getElementById('DoiMau3');
    y.classList.remove('success');
    y.classList.remove('warning');
    y.classList.remove('info');

    if(x == "ChuaGiao") y.classList.add('success');
    else if(x == "DangGiao") y.classList.add('warning');
    else y.classList.add('info');
    console.log(x);
    console.log(y);
}
