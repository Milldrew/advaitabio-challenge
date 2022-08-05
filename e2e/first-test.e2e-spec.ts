import { browser, by, element } from 'protractor';

// Listing 8.4
describe('our first Protractor test', () => {
  beforeEach(async () => {
    await browser.get('');
    await browser.waitForAngular();
  });
  it('App is runningn on localhost:4200', async () => {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
    const title = await browser.getTitle();
  });
  it('The plot graph instantiates', async () => {
    //const h1Ele = await element(by.name('h1')).getText();
    //console.log(h1Ele);
    const dotElement = element(by.id('pathway11202'));
    const rValue = await dotElement.getAttribute('r');
    console.log(rValue);
  });
});
