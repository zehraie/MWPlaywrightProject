import { test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config("./.env");



test("MW Login", async ({ page }) => {
  // go to to https://mw.qareerltd.com/admin

  // await page.goto("https://mw.qareerltd.com/admin");

  // await page.waitForTimeout(7000);

  //go to to orange Page
  await page.goto(process.env.ORANGE_URL);

  // create locator variable named usernameInput
  const usernameInput = await page.locator("//input[@name='username']");

  // create locator variable named passwordInput and use this xpath //input[@id='inputPassword'] to locate
  const passwordInput = await page.locator("//input[@name='password']");

  // create locator variable named signinButton and use this xpath //button[@type='submit'] to locate
  const signinButton = await page.locator("//button[@type='submit']");

  // pause the automation for 2 seconds
  await page.waitForTimeout(2000);

  // enter username and password
  await usernameInput.fill(process.env.ORANGE_STUDENT_USERNAME);

  await page.waitForTimeout(2000);

  await passwordInput.fill(process.env.ORANGE_STUDENT_PASSWORD);

  // click on signin button
  await signinButton.click();

  await page.waitForTimeout(2000);
  //  await expect(page).toHaveURL(/.*index/)
  await page.waitForTimeout(5000);


});
