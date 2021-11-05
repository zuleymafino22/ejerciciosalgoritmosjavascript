//Primero declaramos las variables a utilizar en el 
//algoritmo

function operacionesBasicas(){
    var A = 0;
    var B = 0;
    var suma = 0;
    var resta = 0;
    var multi  = 0;
    var divi = 0;
    // Solicitamos los valores y los asignamos en las valiables a y b
    // a través de la función prompt
    A = parseFloat(prompt("Por favor ingrese el primer valor"));
    B = parseFloat(prompt("Por favor ingrese el segundo valor"));
    // Realizamos las operaciones del algoritmo
    suma = A + B;
    resta = A - B;
    multi = A * B;
    divi = A / B;
    // Imprimimos los resultados en pantalla
    alert ("El resultado de la suma es: " + suma);
    alert ("El resultado de la resta es: " + resta);
    alert ("El resultado de la multimplicación es: " + multi);
    alert ("El resultado de la división es: " + divi);
}


function mayorDeDosNumeros(){

    // determinar el mayor de dos numeros 


    var A = 0; 
    var B = 0; 

    A = parseFloat(prompt("por favor ingrese el primer valor"));
    B = parseFloat(prompt("por favor ingrese el segundo valor"));

    if (A==B){
        alert("los numeros son iguales"); 
    }if (A>B){
        alert(A + " es mayor que " + B);
    }if (A<B){
        alert(A + " es menor que " + B);
    }
    
    
}

function menorDeTresNumeros(){

// determinar el menor de tres numeros 

    var A = 0;
    var B = 0;
    var C = 0;

    A = parseFloat (prompt("digite el primer numero"));
    B = parseFloat (prompt("digite el segundo numero"));
    C = parseFloat (prompt("digite el tercer numero"));

    if (A==B & A==C){
        alert("los numeros son iguales");
    }else if ( B<A && B<C){
        alert(B + " es el menor");
    }else if (C<A && C<B )
        alert(C + " es el menor");
    

} 


function numeroParOImpar(){
    // determinar si un numero es par o impar 


    var A = 0; 

    A = prompt("escriba un numero");

    if ((A % 2) == 0){
        alert(A + " ES PAR");
    }else{
        alert(A + " ES IMPAR");
    }
 
}

function cuadradoDeUnNumero(){

    // determinar el cuadrado de un numero

    var numero = 0;
    var cuadrado = 0;
    
    numero = parseFloat(prompt("escriba un numero"));

    alert(" el cuadrado del numero es: " + numero*numero)





}

function areaDeunTriangulo(){

    // determinar el area de un triangulo 

    var base = 0;
    var altura = 0;
    var area = 0;

    base = parseFloat(prompt("dijite la base del triangulo"));
    altura = parseFloat(prompt("dijite la altura del triangulo"));

    alert("el area del triangulo es: " + base*altura/2)

}

function centimetrosAMetros(){

    //determinar los centimetros de un valor dado en metro por el usuario

    var metros = 0; 
    var centimetros = 0;

    metros = parseFloat(prompt("ingrese el valor en metros"));

    alert(metros + " metros convertidos a centimetros son: " + metros*100 + " centimetros")

}

function añoDeNacimiento(){

    // determienr el año en que nacio el usuario 

    var E = 0;
    var A = 0; 
    var N = 0; 


    E = parseFloat(prompt(" cuantos años tiene "));
    A = parseFloat(prompt(" en que año esta "));
    N = (A-E);
    alert("el año de su nacimiento es " + N);


} 


function inversionBanco(){

    // un individuo desea invertir su capital en un banco y requiere saber cuánto dinero
    //ganará después de N número de años, teniendo en cuenta que el banco paga un
    //interés del 2% mensual

    var c = 0; 
    var a = 0; 
    var g = 0; 
    var m = 0; 

    c = parseFloat(prompt("ingrese la inversion"));
    a = parseFloat(prompt("digite los años que desea invertir"));

    m = c*0.24
    g = m*a

    alert("las ganancia que ganara por  " + c + " de pesos en " +  a +  " años es: " + g)


}

function promedio(){
    // el promedio se calcula al sumar la cantidad de notas
    // y dividir el resultado de estas suma en la cantidad
    var nota1 = 0;
    var nota2 = 0;
    var nota3 = 0;
    var nota4 = 0;
    var nota5 = 0;
    var promedio = 0;

    nota1 = parseFloat(prompt("POR FAVOR INGRESE LA PRIMER NOTA"));
    nota2 = parseFloat(prompt("POR FAVOR INGRESE LA SEGUNDA NOTA"));
    nota3 = parseFloat(prompt("POR FAVOR INGRESE LA TERCERA NOTA"));
    nota4 = parseFloat(prompt("POR FAVOR INGRESE LA CUARTA NOTA"));
    nota5 = parseFloat(prompt("POR FAVOR INGRESE LA QUINTA NOTA"));

    promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    if (promedio<= 2.9) {
        alert ("REPROBO, su promedio es de: " + promedio);
    }else {
        alert ("APROBO, su promedio es de: " + promedio); 
    }

}

function descuentosFruteria(){

    var kilo = 0; 
    var precio = 0; 
    var total = 0; 
    var descuentos = 0; 
    var TT

    kilo = parseFloat(prompt(" dijite el numero de kilos que desea comprar"));
    precio = parseFloat(prompt(" dijite el precio del kilo de manzana "));

    total = precio*kilo

    if (kilo <= 2){
        descuentos = 0
        alert(" no se aplica descuento ");
    }else{

    }if ((kilo >= 3  && (kilo <= 5))){
        descuentos = total*0.10
        alert(" se aplica un 10% de descunto");
    }else{

    }if ((kilo >= 6)  && (kilo <= 10)){
        descuentos= total*0.15
        alert( " se aplico un 15% de descuento"); 
    }else{

    }if (kilo > 10 ){
        descuentos = total*0.20
        alert(" se aplico un 20% de desceunto");

    } 

    TT = total-descuentos
    alert("el precio sin descuento es: " + total );
    alert("el descuento aplicado es: " + descuentos);
    alert(" el total a pagar por los kilos de manzana es: " + TT);
    


}