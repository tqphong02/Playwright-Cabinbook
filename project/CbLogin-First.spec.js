import { test } from '@playwright/test';
import { addAllureMetadata } from '../utils/addAllureMetadata.js';
import dotenv from 'dotenv';
dotenv.config();

test('@login Login and save session', async ({ page }, testInfo) => {
    const username = process.env.CB_USERNAME;
    const password = process.env.CB_PASSWORD;

    if (!username || !password) {
        throw new Error('Thiếu biến môi trường CB_USERNAME hoặc CB_PASSWORD');
    }

    addAllureMetadata(testInfo, {
        feature: 'Checklist Chất xếp',
        story: 'login vào trang chủ',
        owner: 'Phong',
        severity: 'critical',
        tag: ['web', 'uat'],
    });

    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/auth/sign-in');
    await page.getByRole('textbox', { name: 'Tên tài khoản' }).fill(username);
    await page.getByRole('textbox', { name: 'Mật khẩu' }).fill(password);
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await page.waitForTimeout(3000);
    await page.context().storageState({ path: 'auth/storageState.json' });
});
