import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('Cập nhật thông tin Galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    await page.getByRole('row', { name: '1 A321-16C/168Y - 32C as Quốc' }).getByLabel('Cập nhật').click();
    await page.getByRole('combobox', { name: 'Aircraft' }).click();
    await page.getByRole('option', { name: 'A321-16C/168Y-32C' }).click();
    await page.getByRole('textbox', { name: 'Mã sơ đồ Galley' }).click();
    await page.getByRole('textbox', { name: 'Mã sơ đồ Galley' }).fill('hehe');
    await page.getByRole('combobox', { name: 'Khung thời gian' }).click();
    await page.getByRole('option', { name: 'Buổi sáng trưa' }).click();
    await page.getByRole('combobox', { name: 'Nhóm đường bay' }).click();
    await page.getByRole('option', { name: 'GROUP 4NĐ: 6H<<BH<<12H' }).click();
    await page.getByRole('textbox', { name: 'Mô tả' }).click();
    await page.getByRole('textbox', { name: 'Mô tả' }).fill('test test');
    await page.getByRole('button', { name: 'Cập nhật' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    await page.screenshot({ path: `Screenshots/update-galley-successfull.png`, fullPage: true });
});