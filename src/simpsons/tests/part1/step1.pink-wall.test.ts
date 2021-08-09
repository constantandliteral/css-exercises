import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Step 1', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows a pink wall that fills the available screen space', async () => {
    const page = await goToPage(browser);
    const image = await takeScreenshot(page);

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'step1-pink-wall',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
