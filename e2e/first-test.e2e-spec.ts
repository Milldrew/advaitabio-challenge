import { browser, by, element } from 'protractor';

// Listing 8.4
describe('our first Protractor test', () => {
  beforeEach(async () => {
    await browser.get('');
    await browser.waitForAngular();
  });
  /*
  it('App is runningn on localhost:4200', async () => {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
    const title = await browser.getTitle();
  });
  it('The plot graph instantiates', async () => {
    //const h1Ele = await element(by.name('h1')).getText();
    //console.log(h1Ele);
    const svgElement = element(by.tagName('svg'));
    const svgIsPresent = await svgElement.isPresent();
    console.log(svgIsPresent);
    expect(svgIsPresent).toBe(true);
  });
  */
  it('The dot id=pathway11202 sarts at 14, goes to 19 on mouseover and goes back to 14 on mouseout', async () => {
    const dot = element(by.id('pathway11202'));
    let rValue = await dot.getAttribute('r');
    console.log(typeof rValue);
    console.log(rValue);
    await browser.actions().mouseMove(dot).perform();
    rValue = await dot.getAttribute('r');
    console.log(rValue);
  });
});
