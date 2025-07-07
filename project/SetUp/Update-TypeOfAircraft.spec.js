import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('Chỉnh sửa cấu hình loại tàu bay', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.pause();
    await page.getByRole('button', { name: 'Loại tàu bay' }).click();
    await page.getByRole('row', { name: '1 hehe Thân rộng' }).getByLabel('Cập nhật').click();
    await page.getByRole('textbox', { name: 'Aircraft Type' }).click();
    await page.getByRole('textbox', { name: 'Aircraft Type' }).fill('hehehaha');
    await page.getByRole('textbox', { name: 'Registration' }).click();
    await page.getByRole('textbox', { name: 'Registration' }).fill('hohohoho');
    await page.getByRole('button', { name: 'Open' }).click();
    await page.getByRole('option', { name: 'Thân hẹp' }).click();
    await page.getByRole('spinbutton', { name: 'Lab C' }).click();
    await page.getByRole('spinbutton', { name: 'Lab C' }).fill('033');
    await page.getByRole('spinbutton', { name: 'Lab PE' }).click();
    await page.getByRole('spinbutton', { name: 'Lab PE' }).fill('03');
    await page.getByRole('spinbutton', { name: 'PE', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'PE', exact: true }).fill('03');
    await page.getByRole('spinbutton', { name: 'Y', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'Y', exact: true }).fill('1953');
    await page.getByRole('spinbutton', { name: 'C', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'C', exact: true }).fill('83');
    await page.getByRole('spinbutton', { name: 'CA\'rest comp' }).click();
    await page.getByRole('spinbutton', { name: 'CA\'rest comp' }).fill('03');
    await page.getByRole('spinbutton', { name: 'Pilot/Rest comp' }).click();
    await page.getByRole('spinbutton', { name: 'Pilot/Rest comp' }).fill('033');
    await page.getByRole('spinbutton', { name: 'Lab Waste bin' }).click();
    await page.getByRole('spinbutton', { name: 'Lab Waste bin' }).fill('03');
    await page.getByRole('spinbutton', { name: 'Waste bin Medium' }).click();
    await page.getByRole('spinbutton', { name: 'Waste bin Medium' }).fill('03');
    await page.getByRole('spinbutton', { name: 'Waste bin Large' }).click();
    await page.getByRole('spinbutton', { name: 'Waste bin Large' }).fill('03');
    await page.getByRole('spinbutton', { name: 'Waste cart' }).click();
    await page.getByRole('spinbutton', { name: 'Waste cart' }).fill('03');
    await page.getByRole('button', { name: 'Cập nhật' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `Screenshots/updateloaitaubay-successfull.png`, fullPage: true });
    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();


});