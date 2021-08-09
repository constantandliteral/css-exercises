import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Step 4', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows a 916x666px (not including the 8px ink line) TV in the middle of the wall', async () => {
    const page = await goToPage(browser);
    const image = await takeScreenshot(page);

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'step4-outer-television',
      failureThreshold: 0.005,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
