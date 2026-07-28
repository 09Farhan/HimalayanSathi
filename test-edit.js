const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  // Set auth cookie to bypass login
  await page.setCookie({
    name: 'hs_admin_session',
    value: 'authenticated',
    domain: 'localhost',
  });

  try {
    console.log('Navigating to admin...');
    await page.goto('http://localhost:3000/admin', { waitUntil: 'networkidle2' });
    console.log('At admin page.');
    
    // Click the "Tour Packages" tab
    const tabs = await page.$$('button');
    let foundTab = false;
    for (const tab of tabs) {
      const text = await page.evaluate(el => el.textContent, tab);
      if (text && text.includes('Tour Packages')) {
        await tab.click();
        console.log('Clicked Tour Packages tab');
        foundTab = true;
        break;
      }
    }
    
    if (!foundTab) {
        console.log("Could not find Tour Packages tab");
    }
    
    await new Promise(r => setTimeout(r, 2000));
    
    // Click the Edit button on the first package
    // The Edit button has title="Edit Package"
    const editBtns = await page.$$('button[title="Edit Package"]');
    if (editBtns.length > 0) {
      await editBtns[0].click();
      console.log('Clicked Edit Package button');
    } else {
      console.log('No Edit buttons found!');
    }
    
    await new Promise(r => setTimeout(r, 2000));
    
  } catch (err) {
    console.error('Puppeteer Error:', err);
  } finally {
    await browser.close();
  }
})();
