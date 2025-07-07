// tests/login.spec.js
import { test } from '@playwright/test';
import { addAllureMetadata } from '../utils/addAllureMetadata.js';

test('Login and save session', async ({ page }, testInfo) => {

    addAllureMetadata(testInfo, {
        feature: 'Checklist Chất xếp',
        story: 'login vào trang chủ',
        owner: 'Phong',
        severity: 'critical',
        tag: ['web', 'uat'],
    });
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/auth/sign-in');
    await page.getByRole('textbox', { name: 'Tên tài khoản' }).fill('tentaikhoan');
    await page.getByRole('textbox', { name: 'Mật khẩu' }).fill('matkhau');
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await page.waitForTimeout(3000);
    // await page.pause();

    //Lưu session vào file
    await page.context().storageState({ path: 'auth/storageState.json' });
});
