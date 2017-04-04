import { Angular2WorkingPage } from './app.po';

describe('angular2-working App', function() {
  let page: Angular2WorkingPage;

  beforeEach(() => {
    page = new Angular2WorkingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
