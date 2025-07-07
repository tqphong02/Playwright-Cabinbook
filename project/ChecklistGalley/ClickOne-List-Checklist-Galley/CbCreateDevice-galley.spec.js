import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/storageState.json',
});
//đổi thông tin 
test('Thêm mới checklist thiết bị Galley', async ({ page }) => {
    await page.goto('https://cabinbook-ui-uat.azurewebsites.net/');
    await page.getByText('Danh sách sơ đồ Galley').click();
    // await page.pause();
    await page.getByRole('cell', { name: 'A350-29C/45I/231Y-35A', exact: true }).click();
    await page.getByRole('button', { name: 'Thêm mới' }).click();
    await page.getByRole('combobox', { name: 'Galley Position' }).click();
    await page.getByRole('option', { name: 'Front Galley' }).click();
    await page.getByRole('combobox', { name: 'Equipment' }).click();
    await page.getByRole('option', { name: 'Water Bottle 99999' }).click();
    await page.getByRole('textbox', { name: 'Position' }).click();
    await page.getByRole('textbox', { name: 'Position' }).fill('test');
    await page.getByRole('textbox', { name: 'Priority' }).click();
    await page.getByRole('textbox', { name: 'Priority' }).fill('hehe');
    await page.getByRole('spinbutton', { name: 'T11' }).click();
    await page.getByRole('spinbutton', { name: 'T11' }).fill('5');
    await page.getByRole('spinbutton', { name: 'T12' }).click();
    await page.getByRole('spinbutton', { name: 'T12' }).fill('08');
    await page.getByRole('spinbutton', { name: 'Container' }).click();
    await page.getByRole('spinbutton', { name: 'Container' }).fill('09');
    await page.getByRole('spinbutton', { name: 'Oven', exact: true }).click();
    await page.getByRole('spinbutton', { name: 'Oven', exact: true }).fill('010');
    await page.getByRole('spinbutton', { name: 'Oven racks' }).click();
    await page.getByRole('spinbutton', { name: 'Oven racks' }).fill('010');
    await page.getByRole('textbox', { name: 'Notes' }).click();
    await page.getByRole('textbox', { name: 'Notes' }).fill('nono');
    await page.getByRole('button', { name: 'Thêm' }).click();
    await expect(page.getByText('Tạo mới thành công!')).toBeVisible();
    await expect(page.getByRole('checkbox', { name: '1 test Water Bottle 99999 GLX' })).toBeVisible();

    await page.screenshot({ path: `Screenshots/createChecklist-galley-successfull.png`, fullPage: true });
});