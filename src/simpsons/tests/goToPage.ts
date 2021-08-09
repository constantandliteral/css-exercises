import { Browser } from 'puppeteer';

const noAnimationCss = `
*,
*::after,
*::before {
    animation-delay: -0.0001s !important;
    animation-duration: 0s !important;
    animation-play-state: paused !important;
}`;

const goToPage = async (
  browser: Browser,
  { enableAnimation = false }: { readonly enableAnimation?: boolean } = {}
) => {
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/simpsons');
  await page.setViewport({
    width: 1366,
    height: 1024,
  });

  if (!enableAnimation) {
    await page.addStyleTag({
      content: noAnimationCss,
    });
  }

  return page;
};

export default goToPage;
