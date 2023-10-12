// @ts-check
import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
  //Login Functions
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('id=user-name').fill("standard_user");
  await page.locator('id=password').fill("secret_sauce");
  await page.click('id=login-button');
  //Home Page functions
  //DropDOwn handling
  const elements = await page.$$("//*[@id='inventory_container']//div/a/div");
  for (const element of elements) {
    const elementtext = await element.textContent();
    console.log(elementtext);
  }
  //await page.locator('//*[@id="inventory_filter_container"]/select').selectOption('lohi');
  //await page.locator('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click();
  //await page.locator('//*[@id="shopping_cart_container"]/a').click();
  //await page.locator('//*[@id="cart_contents_container"]/div/div[2]/a[2]').click();
  //await page.locator('id=first-name').fill("Mr. Mega");
  //await page.locator('id=last-name').fill("Mind");
  //await page.locator('id=postal-code').fill("4185");
  //await page.click('//*[@id="checkout_info_container"]/div/form/div[2]/input');
  // await page.mouse.move(0, 100);
  // await page.click('//*[@id="checkout_summary_container"]/div/div[2]/div[8]/a[2]');
  //await page.click('//*[@id="logout_sidebar_link"]');
});
