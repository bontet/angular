import { BontetPage } from './app.po';

describe('bontet App', () => {
  let page: BontetPage;

  beforeEach(() => {
    page = new BontetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
