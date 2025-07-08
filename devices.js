import { devices } from 'playwright';

console.log('Danh sách thiết bị ảo mà Playwright hỗ trợ:\n');

for (const name of Object.keys(devices)) {
    console.log(name);
}