const pally = require('pa11y')
const functionEsAccesible = require("./util/accesibilidad.js")

const optionsAA = {
        standard: 'WCAG2AA',
        includeNotices: false,
        includeWarnings: false,
        wait: 3000,
        log: {
                debug: console.log,
                error: console.error,
                info: console.log
        }
};

const optionsA = {
        standard: 'WCAG2A',
        includeNotices: false,
        includeWarnings: false,
        wait: 3000,
        log: {
                debug: console.log,
                error: console.error,
                info: console.log
        }
};

async function run() {

let seleccionados = [];
let wcag = [
"WCAG2A.Principle1.Guideline1_1.1_1_1",
"WCAG2A.Principle1.Guideline1_2.1_2_1",
"WCAG2A.Principle1.Guideline1_2.1_2_2",
"WCAG2A.Principle1.Guideline1_2.1_2_3",
"WCAG2AA.Principle1.Guideline1_2.1_2_4",
"WCAG2AA.Principle1.Guideline1_2.1_2_5",
"WCAG2A.Principle1.Guideline1_3.1_3_1",
"WCAG2A.Principle1.Guideline1_3.1_3_2",
"WCAG2A.Principle1.Guideline1_3.1_3_3",
"WCAG2A.Principle1.Guideline1_4.1_4_1",
"WCAG2A.Principle1.Guideline1_4.1_4_2",
"WCAG2AA.Principle1.Guideline1_4.1_4_3",
"WCAG2AA.Principle1.Guideline1_4.1_4_4",
"WCAG2AA.Principle1.Guideline1_4.1_4_5",
"WCAG2A.Principle2.Guideline2_1.2_1_1",
"WCAG2A.Principle2.Guideline2_1.2_1_2",
"WCAG2A.Principle2.Guideline2_2.2_2_1",
"WCAG2A.Principle2.Guideline2_2.2_2_2",
"WCAG2A.Principle2.Guideline2_3.2_3_1",
"WCAG2A.Principle2.Guideline2_4.2_4_1",
"WCAG2A.Principle2.Guideline2_4.2_4_2",
"WCAG2A.Principle2.Guideline2_4.2_4_3",
"WCAG2A.Principle2.Guideline2_4.2_4_4",
"WCAG2AA.Principle2.Guideline2_4.2_4_5",
"WCAG2AA.Principle2.Guideline2_4.2_4_6",
"WCAG2AA.Principle2.Guideline2_4.2_4_7",
"WCAG2A.Principle3.Guideline3_1.3_1_1",
"WCAG2AA.Principle3.Guideline3_1.3_1_2",
"WCAG2A.Principle3.Guideline3_2.3_2_1",
"WCAG2A.Principle3.Guideline3_2.3_2_2",
"WCAG2AA.Principle3.Guideline3_2.3_2_3",
"WCAG2AA.Principle3.Guideline3_2.3_2_4",
"WCAG2A.Principle3.Guideline3_3.3_3_1",
"WCAG2A.Principle3.Guideline3_3.3_3_2",
"WCAG2AA.Principle3.Guideline3_3.3_3_3",
"WCAG2AA.Principle3.Guideline3_3.3_3_4",
"WCAG2A.Principle4.Guideline4_1.4_1_1",
"WCAG2A.Principle4.Guideline4_1.4_1_2"];


const resultsAA = await pally ('https://www.eventbrite.com/',optionsAA);

resultsAA.issues.forEach(element => {

        for (i = 0; i < wcag.length; i++) {
                if (element.code.substring(0,37).includes(wcag[i])) {
                        seleccionados.push(wcag[i]);
                }            
        } 
});

const resultsA = await pally ('https://www.eventbrite.com/',optionsA);

console.log("TEST")
resultsA.issues.forEach(element => {

        for (i = 0; i < wcag.length; i++) {
                if (element.code.substring(0,37).includes(wcag[i])) {    
                        // si lo incluye agregalo al array de los seleccionados
                        seleccionados.push(wcag[i]);
                }            
        } 
});

functionEsAccesible.esAccesible(resultsAA,seleccionados);

}



run();