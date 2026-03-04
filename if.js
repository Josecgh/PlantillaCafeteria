const edad = prompt("¿Cuál es tu edad?:");
if((typeof edad)=="number"){
    if(edad<30){
        console.log("!Eres Junior¡");
    }else{
        console.log("!Eres Senior¡");
    }
}else{
    console.error("!ERROR, Solo numeros¡")
}
