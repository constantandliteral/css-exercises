import puppeteer, { Browser } from 'puppeteer';
import goToPage from '../goToPage';
import hideHomer from '../hideHomer';
import takeScreenshot from '../takeScreenshot';

describe('Simpsons Exercise - Shading', () => {
  let browser: Browser;

  beforeEach(async () => {
    browser = await puppeteer.launch();
  });

  it('shows 16px shading in the head', async () => {
    const page = await goToPage(browser);
    await hideHomer(page, 'head');
    const image = await takeScreenshot(page, 'screen');

    expect(image).toMatchImageSnapshot({
      customSnapshotIdentifier: 'shading',
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  });

  afterEach(async () => {
    await browser.close();
  });
});
