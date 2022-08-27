'use strict';


function esAccesible(results,seleccionados) {
    //console.log("Cantidad repetidas  " + seleccionados)

    let resultado = seleccionados.filter((item,index)=>{
    return seleccionados.indexOf(item) === index;
    })

    console.log("Los errores de accesibilidad encontrados son:  ")

    for (i = 0; i < resultado.length; i++) {

        let error = resultado[i];
        let errorSplit = error.split(".");
        let errorObject = {};


        if(errorSplit.length > 0 ){
            if(errorSplit[0] === "WCAG2AA"){
                errorObject.nivel     = errorSplit[0].replace("WCAG2AA","Nivel: AA")
            }
            else{
                errorObject.nivel     = errorSplit[0].replace("WCAG2A","Nivel: A ")
            }

            errorObject.principio = errorSplit[1].replace("Principle","Principio: ");
            errorObject.guia      = errorSplit[2].replace("Guideline","Guia: ");
            errorObject.criterio =  "Criterio: " + errorSplit[3];
        }
        console.log(errorObject.nivel  + " "+ errorObject.principio  + " "+ errorObject.guia  + " "+ errorObject.criterio );
    } 

    if (resultado.length > 8){
            console.log(results.pageUrl + " NO ES ACCESIBLE")
    }
    else {
            console.log(results.pageUrl + " ES ACCESIBLE")
    }      
}




module.exports = {
        "esAccesible":esAccesible
}    