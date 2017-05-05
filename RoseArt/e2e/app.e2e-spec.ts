import { RoseArtPage } from './app.po';

describe('rose-art App', () => {
  let page: RoseArtPage;

  beforeEach(() => {
    page = new RoseArtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
