import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import hideHomer from '../hideHomer';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Outer Ear', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows a 60px tall outer ear (including the 8px ink line), beginning 115px from the left of the screen', async () => {
    const page = await goToPage(browser);
    await hideHomer(page, 'ear');
    const image = await takeScreenshot(page, 'screen');

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'outer-ear',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
