import { QuickSearchPage } from './app.po';

describe('quick-search App', function() {
  let page: QuickSearchPage;

  beforeEach(() => {
    page = new QuickSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
