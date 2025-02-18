const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new", // Optional: opt into new headless mode
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Disable sandboxing
  });
  const page = await browser.newPage();

  // Test index.html
  console.log('Testing index.html...');
  await page.goto('file://' + __dirname + '/index.html');
  const title = await page.title();
  if (title !== 'Home Page') {
    console.error('Test failed: Title mismatch for index.html');
    process.exit(1);
  }
  console.log('Passed: index.html');

  // Test about.html
  console.log('Testing about.html...');
  await page.goto('file://' + __dirname + '/about.html');
  const aboutTitle = await page.title();
  if (aboutTitle !== 'About Page') {
    console.error('Test failed: Title mismatch for about.html');
    process.exit(1);
  }
  console.log('Passed: about.html');

  await browser.close();
})();
