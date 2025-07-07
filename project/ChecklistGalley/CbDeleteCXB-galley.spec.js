import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});
//đổi thông tin 
test('Xóa Galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    await page.getByRole('row', { name: '1 A321-16C/168Y-32C hehe 8' }).getByRole('button').nth(1).click();
    await expect(page.getByText('Bạn có chắc chắn muốn xóa')).toBeVisible();
    await page.getByRole('button', { name: 'Xác nhận' }).click();
    await expect(page.getByText('Xóa Galley thành công!')).toBeVisible();
    await page.screenshot({ path: `Screenshots/delete-galley-successfull.png`, fullPage: true });
});