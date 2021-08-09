import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Step 2', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows a row of burgers 30px from the top of the wall, where each burger is 120x120px', async () => {
    const page = await goToPage(browser);
    const image = await takeScreenshot(page);

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'step2-burgers',
      failureThreshold: 0.005,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
