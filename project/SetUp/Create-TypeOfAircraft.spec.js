import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});

test('tạo mới cấu hình loại tàu bay', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    //await page.pause();
    await page.getByRole('button', { name: 'Loại tàu bay' }).click();
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await page.getByRole('textbox', { name: 'Aircraft Type' }).click();
    await page.getByRole('textbox', { name: 'Aircraft Type' }).fill('hehe');
    await page.getByRole('textbox', { name: 'Registration' }).click();
    await page.getByRole('textbox', { name: 'Registration' }).fill('hehehuhu');
    await page.getByRole('combobox', { name: 'AC Type' }).click();
    await page.getByRole('option', { name: 'Thân rộng' }).click();
    await page.getByRole('spinbutton', { name: 'C', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'C', exact: true }).fill('02');
    await page.getByRole('spinbutton', { name: 'PE', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'PE', exact: true }).fill('03');
    await page.getByRole('spinbutton', { name: 'Y', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'Y', exact: true }).fill('04');
    await page.getByRole('spinbutton', { name: 'Pilot/Rest comp' }).click();
    await page.getByRole('spinbutton', { name: 'Pilot/Rest comp' }).fill('05');
    await page.getByRole('spinbutton', { name: 'CA\'rest comp' }).click();
    await page.getByRole('spinbutton', { name: 'CA\'rest comp' }).fill('06');
    await page.getByRole('spinbutton', { name: 'Lab Waste bin' }).click();
    await page.getByRole('spinbutton', { name: 'Lab Waste bin' }).fill('07');
    await page.getByRole('spinbutton', { name: 'Waste bin Medium' }).click();
    await page.getByRole('spinbutton', { name: 'Waste bin Medium' }).fill('08');
    await page.getByRole('spinbutton', { name: 'Waste bin Large' }).click();
    await page.getByRole('spinbutton', { name: 'Waste bin Large' }).fill('09');
    await page.getByRole('spinbutton', { name: 'Waste cart' }).click();
    await page.getByRole('spinbutton', { name: 'Waste cart' }).fill('010');
    await page.getByRole('spinbutton', { name: 'Lab C' }).click();
    await page.getByRole('spinbutton', { name: 'Lab C' }).fill('011');
    await page.getByRole('spinbutton', { name: 'Lab PE' }).click();
    await page.getByRole('spinbutton', { name: 'Lab PE' }).fill('012');
    await page.getByRole('spinbutton', { name: 'Lab Y' }).click();
    await page.getByRole('spinbutton', { name: 'Lab Y' }).fill('013');
    await page.getByRole('button', { name: 'Lưu' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `Screenshots/createloaitaubay-successfull.png`, fullPage: true });
    await expect(page.getByText('Tạo mới thành công!')).toBeVisible();

});