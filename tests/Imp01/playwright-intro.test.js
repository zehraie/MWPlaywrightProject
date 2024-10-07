import test from "playwright/test";

test('search for Playwright on google', async ({ page }) => {
    /*
    open browser https://www.google.com
    locate search box
    type "playwright" in search box
    press Enter
    close browser
    */
     await page.goto('https://www.google.com/');
    
     await page.waitForTimeout(3000);
    const searchInput = await page.locator("//textarea[@class='gLFyf']");
    //await searchInput.type('playwright');
    
    await searchInput.fill('playwright Automation Testing');
    await page.waitForTimeout(3000); // Wait for search results to load
    await searchInput.press('Enter');
    
    await page.waitForTimeout(3000);
     

});