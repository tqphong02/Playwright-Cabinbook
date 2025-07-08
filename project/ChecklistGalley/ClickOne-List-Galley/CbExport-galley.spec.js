import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test.use({
    storageState: 'auth/storageState.json',
});

test('Export Galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    await page.pause();
    await page.getByRole('cell', { name: 'A350-29C/36I/240Y-35B' }).first().click();
    await page.getByRole('tab', { name: 'Galley' }).click();

    const saveFolder = path.join('Downloads');
    fs.mkdirSync(saveFolder, { recursive: true });
    const downloadPromise = page.waitForEvent('download');

    await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
    const download = await downloadPromise;
    const filePath = path.join(saveFolder, download.suggestedFilename());
    await download.saveAs(filePath);
    console.log(`File đã được export và lưu tại: ${filePath}`);

    // (Tuỳ chọn) Kiểm tra file tồn tại
    expect(fs.existsSync(filePath)).toBeTruthy();
});
