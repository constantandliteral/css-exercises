import { Page } from 'puppeteer';

const hideHomer = async (page: Page, exceptTestId?: string) => {
  await Promise.all(
    ['head', 'nose', 'eyes', 'ear', 'hair'].map(async (testId) => {
      if (testId === exceptTestId) return Promise.resolve();
      return page.$eval(`[data-testid="${testId}"]`, (element) => {
        // @ts-ignore
        element.style.setProperty('visibility', 'hidden');
      });
    })
  );
};

export default hideHomer;
