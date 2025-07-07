import fs from 'fs';

const executor = {
    name: 'QA Team',
    type: 'playwright',
    url: 'http://localhost',
    buildName: 'UAT Login & create 001',
    buildUrl: '',
    reportUrl: '',
};

const dir = './allure-results';
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(`${dir}/executor.json`, JSON.stringify(executor, null, 2));
console.log('Wrote executor.json');
