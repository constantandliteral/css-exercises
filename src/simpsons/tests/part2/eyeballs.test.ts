import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import hideHomer from '../hideHomer';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Eyeballs', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows a pair of 160px round eyeballs (not including the 8px ink line) beginning 4px from the bottom of the screen, with the right eye beginning 80px from the right edge of the screen and underlapping the left eye by 42px', async () => {
    const page = await goToPage(browser);
    await hideHomer(page, 'eyes');
    const image = await takeScreenshot(page, 'screen');

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'eyeballs',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
