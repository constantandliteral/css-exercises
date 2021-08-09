import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Step 3', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows a row of doughnuts 30px from the bottom of the wall, where each doughnut is 120x120px', async () => {
    const page = await goToPage(browser);
    const image = await takeScreenshot(page);

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'step3-doughnuts',
      failureThreshold: 0.005,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
