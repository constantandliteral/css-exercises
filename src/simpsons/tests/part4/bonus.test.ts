import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Part 3 easter egg', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('when the tv screen is hovered, turns everything on it to black and white over 0.5 secs', async () => {
    const page = await goToPage(browser);

    const imageAfter0Secs = await takeScreenshot(page, 'screen');
    expect(imageAfter0Secs).toMatchImageSnapshot({
      customSnapshotIdentifier: 'bonus-after-0-secs',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });

    await page.hover('[data-testid=screen]');

    await page.waitForTimeout(250);
    const imageAfterQuarterSec = await takeScreenshot(page, 'screen');
    expect(imageAfterQuarterSec).toMatchImageSnapshot({
      customSnapshotIdentifier: 'bonus-after-0.25-secs',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });

    await page.waitForTimeout(250);
    const imageAfterHalfSec = await takeScreenshot(page, 'screen');
    expect(imageAfterHalfSec).toMatchImageSnapshot({
      customSnapshotIdentifier: 'bonus-after-0.5-secs',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
