import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import hideHomer from '../hideHomer';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Inner Ear', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows 30px wide (including 8px ink line) inner ear', async () => {
    const page = await goToPage(browser);
    await hideHomer(page, 'ear');

    const image = await takeScreenshot(page, 'screen');
    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'inner-ear',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
