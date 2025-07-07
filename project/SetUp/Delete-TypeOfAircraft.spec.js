import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('Xóa loại tàu bay', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    // await page.pause();
    await page.getByRole('button', { name: 'Loại tàu bay' }).click();
    await page.getByRole('row', { name: '1 hehehaha Thân hẹp' }).getByLabel('Xóa').click();
    await expect(page.getByText('Bạn có chắc chắn muốn xóa loạ')).toBeVisible();
    await page.getByRole('button', { name: 'Xác nhận' }).click();
    await expect(page.getByText('Xóa loại tàu bay thành công!')).toBeVisible();
    await page.screenshot({ path: `Screenshots/deleteloaitaubay-successfull.png`, fullPage: true });

});