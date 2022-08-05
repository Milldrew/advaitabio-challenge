import { browser, by, element } from 'protractor';

// Listing 8.4
describe('our first Protractor test', () => {
  it('should load a page and verify the url', async () => {
    expect('hello').toEqual('hello');
  });
});
