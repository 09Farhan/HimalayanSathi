const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  // Set auth cookie
  await page.setCookie({
    name: 'admin_session',
    value: 'YOUR_SECURE_ADMIN_SECRET_KEY_123!@#', // Assuming this is the secret from .env? I don't know the exact .env value.
    domain: 'localhost',
  });

  try {
    await page.goto('http://localhost:3000/admin', { waitUntil: 'networkidle2' });
    console.log('Navigated to admin');
    
    // Click the packages tab
    const tabs = await page.$$('button');
    for (const tab of tabs) {
      const text = await page.evaluate(el => el.textContent, tab);
      if (text.includes('Tour Packages')) {
        await tab.click();
        console.log('Clicked Tour Packages tab');
        break;
      }
    }
    
    // Wait for the packages tab to load
    await new Promise(r => setTimeout(r, 2000));
    
    // Click Add New Package
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await page.evaluate(el => el.textContent, btn);
      if (text.includes('Add New Package')) {
        await btn.click();
        console.log('Clicked Add New Package');
        break;
      }
    }
    
    await new Promise(r => setTimeout(r, 2000));
    
  } catch (err) {
    console.error('Puppeteer Error:', err);
  } finally {
    await browser.close();
  }
})();
