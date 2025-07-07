import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test.use({
    storageState: 'auth/storageState.json',
});

test('Tải excel checklists của list flight', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách chuyến bay').nth(1).click();
    //  await page.pause();
    await page.getByRole('cell', { name: 'VN7129' }).click();
    await expect(page.getByText('MÃ SƠ ĐỒ GALLEY: A321-8C/195Y')).toBeVisible();

    await page.getByRole('tab', { name: 'Galley' }).click();
    const downloadPromise = page.waitForEvent('download');
    const saveFolder = path.join('Downloads');
    fs.mkdirSync(saveFolder, { recursive: true });

    await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
    const download = await downloadPromise;

    const filePath = path.join(saveFolder, download.suggestedFilename());
    await download.saveAs(filePath);
    console.log(`File đã được export và lưu tại: ${filePath}`);

    // (Tuỳ chọn) Kiểm tra file tồn tại
    expect(fs.existsSync(filePath)).toBeTruthy();
});