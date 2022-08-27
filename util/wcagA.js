'use strict';


const pa11y = require('pa11y');

function runPally() {
    pa11y('https://www.eventbrite.com/', {
        standard: 'WCAG2A',
        includeNotices: true,
        includeWarnings: true,
        log: {
            debug: console.log,
            error: console.error,
            info: console.log
        },
        wait: 3000
    })
    .then((results) => {
        console.log(results);
    })
}
runPally();