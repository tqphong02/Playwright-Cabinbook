import { test, expect } from '@playwright/test';
import path from 'path';

test.use({
    storageState: 'auth/storageState.json',
});

test('Create chất xếp checklist', async ({ page }) => {

    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/'); // đã đăng nhập
    // await page.pause();
    await page.getByText('Danh sách checklist chất xếp').click();
    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByRole('textbox', { name: 'Galley code' }).fill('456');
    await page.getByRole('textbox', { name: 'Galley items' }).fill('789');
    await page.getByRole('textbox', { name: 'Mô tả' }).fill('Test upload');

    // await page.getByTestId('FileUploadOutlinedIcon').click();
    const imagePath = path.resolve('Uploadfiles/voi.jpg');
    await page.setInputFiles('input[type="file"]', imagePath);

    await page.locator('div').filter({ hasText: /^Thêm$/ }).getByRole('button').click();
    await page.getByRole('textbox', { name: 'Nhập' }).fill('1234');
    await page.locator('input[name="ccl"]').fill('44');
    await page.locator('input[name="pE"]').fill('44');
    await page.locator('input[name="ycl"]').fill('44');
    await page.getByRole('row', { name: '44 44' }).getByRole('button').first().click();
    await page.getByRole('button', { name: 'Thêm' }).nth(1).click();
    await expect(page.getByText('Tạo mới thành công!')).toBeVisible();
    await page.screenshot({ path: `Screenshots/create-cxb-successfull.png`, fullPage: true });

});
