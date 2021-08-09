import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import hideHomer from '../hideHomer';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Nose', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows a 180x80px nose (not including the 8px ink line), beginning 100px from the right of the screen, and 25px below the bottom edge of the screen', async () => {
    const page = await goToPage(browser);
    await hideHomer(page, 'nose');
    const image = await takeScreenshot(page, 'screen');

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'nose',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
