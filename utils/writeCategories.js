import fs from 'fs';

const categories = [
    {
        name: 'Assertion Failed',
        matchedStatuses: ['failed'],
        matchedMessageRegex: '.*AssertionError.*',
    },
    {
        name: 'Timeout Error',
        matchedStatuses: ['broken'],
        matchedMessageRegex: '.*Timeout.*',
    }
];

const dir = './allure-results';
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(`${dir}/categories.json`, JSON.stringify(categories, null, 2));
console.log('Wrote categories.json');
