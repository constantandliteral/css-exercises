import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import hideHomer from '../hideHomer';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Part 2 easter egg', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('when an eye is hovered, slides down an eyelid half way over 0.5 seconds', async () => {
    const page = await goToPage(browser);
    await hideHomer(page, 'eyes');

    const imageAfter0Secs = await takeScreenshot(page, 'eyes');
    expect(imageAfter0Secs).toMatchImageSnapshot({
      customSnapshotIdentifier: 'bonus-after-0-secs',
      failureThreshold: 0.015,
      failureThresholdType: 'percent',
    });

    await page.hover('[data-testid=left-eye]');

    await page.waitForTimeout(250);
    const imageAfterQuarterSec = await takeScreenshot(page, 'eyes');
    expect(imageAfterQuarterSec).toMatchImageSnapshot({
      customSnapshotIdentifier: 'bonus-after-0.25-secs',
      failureThreshold: 0.015,
      failureThresholdType: 'percent',
    });

    await page.waitForTimeout(250);
    const imageAfterHalfSec = await takeScreenshot(page, 'eyes');
    expect(imageAfterHalfSec).toMatchImageSnapshot({
      customSnapshotIdentifier: 'bonus-after-0.5-secs',
      failureThreshold: 0.015,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
