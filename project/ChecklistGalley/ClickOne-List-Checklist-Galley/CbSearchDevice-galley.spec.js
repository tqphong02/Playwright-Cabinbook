import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});
//đổi thông tin 
test('Tìm kiếm checklist thiết bị Galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    await page.getByRole('cell', { name: 'A350-29C/36I/240Y-35B' }).first().click();
    // await page.pause();
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/galleys/42d78c5d-a05c-4c24-899c-aef94f485545');
    await page.getByRole('textbox', { name: 'Tìm theo Position, Equipment' }).click();
    await page.getByRole('textbox', { name: 'Tìm theo Position, Equipment' }).fill('su');
    await page.screenshot({ path: `Screenshots/searchPosition-device-successfull.png`, fullPage: true });
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/galleys/42d78c5d-a05c-4c24-899c-aef94f485545?keyword=5');
    await page.getByRole('textbox', { name: 'Tìm theo Position, Equipment' }).fill('w');
    await expect(page.getByRole('checkbox', { name: '1 Su57 Waste WST High 0 0 0 0' })).toBeVisible();
    await page.screenshot({ path: `Screenshots/searchEquipment-device-successfull.png`, fullPage: true });
});