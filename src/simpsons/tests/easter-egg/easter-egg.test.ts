import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import hideHomer from '../hideHomer';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Easter egg', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    jest.setTimeout(10000);
  });

  it('on tab, shows the titles on screen, zooming in over 3 seconds', async () => {
    const page = await goToPage(browser);
    await hideHomer(page);

    const imageAfter0Secs = await takeScreenshot(page, 'screen');
    expect(imageAfter0Secs).toMatchImageSnapshot({
      customSnapshotIdentifier: 'easter-egg-after-0-secs',
    });

    await page.focus('[data-testid=titles]');

    await page.waitForTimeout(1500);
    const imageAfter1AndHalfSecs = await takeScreenshot(page, 'screen');
    expect(imageAfter1AndHalfSecs).toMatchImageSnapshot({
      customSnapshotIdentifier: 'easter-egg-after-1.5-secs',
      failureThreshold: 0.1,
      failureThresholdType: 'percent',
    });

    await page.waitForTimeout(1500);
    const imageAfter3Secs = await takeScreenshot(page, 'screen');
    expect(imageAfter3Secs).toMatchImageSnapshot({
      customSnapshotIdentifier: 'easter-egg-after-3-secs',
      failureThreshold: 0.1,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
