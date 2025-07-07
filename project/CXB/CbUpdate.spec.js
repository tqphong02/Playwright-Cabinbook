import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('Update checklist CXB', async ({ page }) => {

    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách checklist chất xếp').click();
    await page.getByRole('row', { name: '1 456-001 456 789 Test upload' }).getByLabel('Chỉnh sửa').click();
    await page.getByRole('textbox', { name: 'Galley code' }).click();
    await page.getByRole('textbox', { name: 'Galley code' }).fill('hehe');
    await page.getByRole('textbox', { name: 'Galley items' }).click();
    await page.getByRole('textbox', { name: 'Galley items' }).fill('toi la con voi');
    await page.getByRole('textbox', { name: 'Mô tả' }).click();
    await page.getByRole('textbox', { name: 'Mô tả' }).fill('2 con voi ');
    await page.getByRole('row', { name: '44 44 44' }).getByRole('button').first().click();
    await page.getByRole('textbox', { name: 'Nhập' }).click();
    await page.getByRole('textbox', { name: 'Nhập' }).fill('hehe');
    await page.locator('input[name="ccl"]').click();
    await page.locator('input[name="ccl"]').fill('14');
    await page.locator('input[name="pE"]').click();
    await page.locator('input[name="pE"]').fill('15');
    await page.locator('input[name="ycl"]').click();
    await page.getByRole('cell', { name: '44' }).getByPlaceholder('Nhập').fill('18');
    await page.getByRole('row', { name: 'hehe 14 15' }).getByRole('button').first().click();
    await page.getByRole('button', { name: 'Lưu' }).click();
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();
    await page.screenshot({ path: `Screenshots/update-cxb-successfull.png`, fullPage: true });
});