import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import hideHomer from '../hideHomer';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Shading', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it("shows homer's hair, where each strand is 160px wide (including the 8px ink line)", async () => {
    const page = await goToPage(browser);
    await hideHomer(page, 'hair');
    const image = await takeScreenshot(page, 'screen');

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'hair',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
