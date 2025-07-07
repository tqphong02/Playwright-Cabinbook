import fs from 'fs';

const env = `
Browser=Chrome, Firefox, Edge, Mobile Safari
Device=Chrome, Firefox, Edge, Mobile Safari
Platform=iOS
Environment=UAT
`;


const allureResultsDir = './allure-results';
if (!fs.existsSync(allureResultsDir)) {
    fs.mkdirSync(allureResultsDir);
}

fs.writeFileSync(`${allureResultsDir}/environment.properties`, env.trim());
console.log('Wrote environment.properties');
