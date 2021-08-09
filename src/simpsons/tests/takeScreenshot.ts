import { Page } from 'puppeteer';

const takeScreenshot = async (page: Page, ofElement: string) => {
  if (ofElement) {
    const element = await page.$(`[data-testid=${ofElement}]`);
    const image = await element?.screenshot();
    return image;
  }

  const image = await page.screenshot();
  return image;
};

export default takeScreenshot;
