import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});
test('Delete checklist CXB', async ({ page }) => {

    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách checklist chất xếp').click();
    await page.getByRole('row', { name: '1 456-001 456 789 Test upload' }).getByLabel('Xóa').click();// thay doi thong tin xoa
    await expect(page.getByRole('heading', { name: 'Xóa checklist chất xếp' })).toBeVisible();
    await expect(page.getByText('Bạn có chắc muốn xóa thông')).toBeVisible();
    await page.getByRole('button', { name: 'Xác nhận' }).click();
    await expect(page.getByText('Xóa checklist chất xếp thành công')).toBeVisible();
    await page.screenshot({ path: `Screenshots/delete-cxb-successfull.png`, fullPage: true });
});