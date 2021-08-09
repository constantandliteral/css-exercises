import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import hideHomer from '../hideHomer';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Part 3 Bonus', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it("shifts homer's eyes back and forth every 2 seconds", async () => {
    const page = await goToPage(browser, { enableAnimation: true });
    await hideHomer(page, 'eyes');

    const imageAfter0Secs = await takeScreenshot(page, 'eyes');
    expect(imageAfter0Secs).toMatchImageSnapshot({
      customSnapshotIdentifier: 'bonus-after-0-secs',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });

    await page.waitForTimeout(1000);
    const imageAfter1Sec = await takeScreenshot(page, 'eyes');
    expect(imageAfter1Sec).toMatchImageSnapshot({
      customSnapshotIdentifier: 'bonus-after-1-sec',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });

    await page.waitForTimeout(1000);
    const imageAfter2Secs = await takeScreenshot(page, 'eyes');
    expect(imageAfter2Secs).toMatchImageSnapshot({
      customSnapshotIdentifier: 'bonus-after-2-secs',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
