import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Step 5', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows a 600x450px (not including the 8px ink line) screen on the TV, retaining a 52px thick purple frame in the outer TV (150px thick on the right)', async () => {
    const page = await goToPage(browser);
    const image = await takeScreenshot(page, 'television');

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'step5-inner-television',
      failureThreshold: 0.005,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
