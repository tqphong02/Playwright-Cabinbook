import { test, expect } from '@playwright/test';
import path from 'path';
test.use({
    storageState: 'auth/storageState.json',
});
//đổi thông tin 
test('Upload file excel sơ đồ Galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    // await page.pause();
    await page.getByRole('cell', { name: 'A350-29C/36I/240Y-35B' }).first().click();
    // await page.getByRole('button', { name: 'Tải lên' }).click();
    const UploadPath = path.resolve('project/Downloads/Template-import-galley.xlsx');
    await page.setInputFiles('input[type="file"]', UploadPath);
    await expect(page.getByText('b72 spririt')).toBeVisible();
    await page.screenshot({ path: `Screenshots/uploadFile-galley-successfull.png`, fullPage: true });
});