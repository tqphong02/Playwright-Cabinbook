import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});
//đổi thông tin 
test('Xóa sơ đồ Galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    await page.pause();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).click();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).fill('test');
    // await expect(page.getByRole('cell', { name: 'A350-29C/36I/240Y-35B' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `Screenshots/searchAircraft-galley-successfull.png`, fullPage: true });
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/galleys?keyword=test');
    await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.p-2\\.5').click();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).fill('m');
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/galleys?keyword=m');
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).fill('ma');
    await expect(page.getByRole('cell', { name: 'Không có dữ liệu' })).toBeVisible();
    await page.screenshot({ path: `Screenshots/search2-galley-successfull.png`, fullPage: true });
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).click();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).fill('mã');
    await expect(page.getByRole('cell', { name: 'mã sơ đồ' })).toBeVisible();
    await page.locator('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.p-2\\.5').click();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).fill('qu');
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/galleys?keyword=qu');
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).fill('quo');
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/galleys?keyword=quo');
    await expect(page.getByRole('cell', { name: 'Không có dữ liệu' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).click();
    await page.getByRole('textbox', { name: 'Tìm theo Aircraft, Mã sơ đồ' }).fill('quố');
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/galleys?keyword=qu%E1%BB%91');
    await expect(page.getByRole('cell', { name: 'Quốc tế' }).nth(1)).toBeVisible();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `Screenshots/search3-galley-successfull.png`, fullPage: true });
});