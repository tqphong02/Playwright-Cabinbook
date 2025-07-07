import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test.use({
  storageState: 'auth/storageState.json',
});

test('Tải file về thư mục project/Downloads', async ({ page }) => {
  await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
  await page.getByText('Danh sách sơ đồ Galley').click();
  await page.getByRole('cell', { name: 'A350-29C/36I/240Y-35B' }).first().click();

  const saveFolder = path.join('Downloads');
  fs.mkdirSync(saveFolder, { recursive: true });

  //Tải xuống
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Tải xuống' }).click();
  const download = await downloadPromise;
  const downloadPath = path.join(saveFolder, download.suggestedFilename());
  await download.saveAs(downloadPath);
  console.log(`Đã lưu file 1: ${downloadPath}`);

  // Tải biểu mẫu
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Tải biểu mẫu' }).click();
  const download1 = await download1Promise;
  const path2 = path.join(saveFolder, download1.suggestedFilename());
  await download1.saveAs(path2);
  console.log(`Đã lưu file 2: ${path2}`);
  await expect(page.getByText('Tải biểu mẫu thành công!')).toBeVisible();
});
