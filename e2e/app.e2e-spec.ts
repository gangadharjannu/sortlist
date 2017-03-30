import { SortlistPage } from './app.po';

describe('sortlist App', () => {
  let page: SortlistPage;

  beforeEach(() => {
    page = new SortlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
