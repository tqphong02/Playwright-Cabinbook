import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('Create sơ đồ galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await page.getByRole('combobox', { name: 'Aircraft' }).click();
    await page.getByRole('option', { name: 'A350-29C/36I/240Y-35B' }).click();
    await page.getByRole('textbox', { name: 'Mã sơ đồ Galley' }).click();
    await page.getByRole('textbox', { name: 'Mã sơ đồ Galley' }).fill('nhớ thay đổi mã sơ galley'); // thay đổi mỗi lần test
    await page.getByRole('combobox', { name: 'Khung thời gian' }).click();
    await page.getByRole('option', { name: 'Buổi sáng', exact: true }).click();
    await page.getByRole('combobox', { name: 'Nhóm đường bay' }).click();
    await page.getByRole('option', { name: 'Quốc tế' }).click();
    await page.getByRole('textbox', { name: 'Mô tả' }).click();
    await page.getByRole('textbox', { name: 'Mô tả' }).fill('hehe');
    await expect(page.getByRole('heading', { name: 'Thêm Galley' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Hủy bỏ' })).toBeVisible();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Tạo mới thành công!')).toBeVisible();
    await page.screenshot({ path: `Screenshots/create-galley-successfull.png`, fullPage: true });
});