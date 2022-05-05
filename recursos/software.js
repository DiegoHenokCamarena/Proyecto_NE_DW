function comprobarModulo(){
    var num1 = parseInt(document.getElementById('valor1').value);
    var num2 = parseInt(document.getElementById('valor2').value);
    var m = parseInt(document.getElementById('modulo').value);

    var res1 = num1%m;
    var res2 = num2%m;

    if (res1 == res2){
        alert("Son congruentes");
        
    }else{
        alert("No son congruentes");
        
    }
}