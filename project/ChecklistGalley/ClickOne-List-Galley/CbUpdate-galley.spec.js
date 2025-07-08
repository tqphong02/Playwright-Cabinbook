import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('Update Galley: drag and resize item', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();

    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/cxb/galleys');
    await page.getByRole('cell', { name: 'A350-29C/36I/240Y-35B' }).nth(1).click();
    await page.getByRole('tab', { name: 'Galley' }).click();

    // Mở giao diện chỉnh sửa sơ đồ
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();

    const source = page.locator('[gs-id="4635e067-10c6-4460-8b94-37f5bd38212e"]');
    await expect(source).toBeVisible();
    await page.waitForTimeout(1000);

    // === Bước 1: Kéo item sang phải
    const box = await source.boundingBox();
    if (box) {
        const startX = box.x + box.width / 2;
        const startY = box.y + box.height / 2;

        const offsetX = 100; // Di chuyển sang phải
        const offsetY = 0;

        await page.mouse.move(startX, startY);
        await page.mouse.down();
        await page.waitForTimeout(200);
        await page.mouse.move(startX + offsetX, startY + offsetY, { steps: 10 });
        await page.mouse.up();
    }

    await page.waitForTimeout(1000);

    // === Bước 2: Resize item
    const resizeHandle = source.locator('.ui-resizable-handle.ui-resizable-se');
    await expect(resizeHandle).toBeVisible();

    const resizeBox = await resizeHandle.boundingBox();
    if (resizeBox) {
        const resizeStartX = resizeBox.x + resizeBox.width / 2;
        const resizeStartY = resizeBox.y + resizeBox.height / 2;

        const resizeOffsetX = 100;  // Resize rộng thêm
        const resizeOffsetY = 100;  // Resize cao thêm

        await page.mouse.move(resizeStartX, resizeStartY);
        await page.mouse.down();
        await page.waitForTimeout(200);
        await page.mouse.move(resizeStartX + resizeOffsetX, resizeStartY + resizeOffsetY, { steps: 10 });
        await page.mouse.up();
    }

    await page.waitForTimeout(1000);

    // === Bước 3: Nhấn nút Lưu
    await page.getByRole('button', { name: 'Lưu' }).click();
});
