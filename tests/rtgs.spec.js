import { test, expect } from '@playwright/test';

test.beforeEach(async ({ browser }) => { //beforeAll can be used
  const context = await browser.newContext()
  const page = await context.newPage()
 //Login 
  await page.goto('http://10.10.114.134:8443/login');
  await page.locator('//*[@id="login_username"]').fill('20230356');
  await page.locator('//*[@id="login_password"]').fill('Cbl@1234');
  await page.locator('//*[@id="login"]/div[4]/div/div/div/div').click();
});
test.afterAll(async ({browser}) => {
  const mouseHover = await page.locator('//*[@id="root"]/section/section/header/ul/li');
  await  mouseHover.hover()
  await page.click('//*[@id="rc-menu-uuid-89781-6-dropdown-popup"]/li[2]');
});
test.describe('Confguration', () => {
  test('User & Security', async ({page}) => { 
    await page.locator('//*[@id="root"]/section/aside/div/ul/li[1]/span').click();
    await page.waitForTimeout(5000);
    });
  
  test('In Out Confguration', async ({ page }) => {
    // ...
  });
  test('Main Menu', async ({ page }) => {
    // ...
  });
  test('Bank Branch', async ({ page }) => {
    // ...
  });
  test('Account Setup', async ({ page }) => {
    // ...
  });
  test('RTGS Department', async ({ page }) => {
    // ...
  });
  test('RTGS Currency', async ({ page }) => {
    // ...
  });
  test('Transaction Profile', async ({ page }) => {
    // ...
  });
  test('Charge VAT Setup', async ({ page }) => {
    // ...
  });
  test('FC Account Type', async ({ page }) => {
    // ...
  });
  test('IB Transactions', async ({ page }) => {
    // ...
  });
  test('Reversal List', async ({ page }) => {
    // ...
  });
  test('Issue Resolver', async ({ page }) => {
    // ...
  });
  test('Query of Business', async ({ page }) => {
    // ...
  });
  test('Hour', async ({ page }) => {
    // ...
  });
 });

 test.describe('Transactions', () => {
  test('Outward Transaction', async ({ page }) => {
    // ...
  });
  test('Inward Pending', async ({ page }) => {
    // ...
  });
  test('Transaction Approval', async ({ page }) => {
    // ...
  });
  test('Rejected', async ({ page }) => {
    // ...
  });
  test('Transactions', async ({ page }) => {
    // ...
  });
  test('Reject Incoming', async ({ page }) => {
    // ...
  });
  test('by Approver', async ({ page }) => {
    // ...
  });
  test('Manual Return', async ({ page }) => {
    // ...
  });
  test('Standing Instruction', async ({ page }) => {
    // ...
  });
  test('Reconciliation', async ({ page }) => {
    // ...
  });
 });

 test.describe('Transaction Search', () => {
  test('Outward Customer', async ({ page }) => {
    // ...
  });
  test('Outward Bank', async ({ page }) => {
    // ...
  });
  test('Intward Customer', async ({ page }) => {
    // ...
  });
  test('Inward Bank', async ({ page }) => {
    // ...
  });
});

test.describe('Reports', () => {
  test('Outward Customer', async ({ page }) => {
    // ...
  });
});

test.describe('RTGS Message Logs', () => {
  test('Outward Customer', async ({ page }) => {
    // ...
  });
});