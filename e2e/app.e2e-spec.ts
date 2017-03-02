import { GlassesProjectPage } from './app.po';

describe('glasses-project App', () => {
  let page: GlassesProjectPage;

  beforeEach(() => {
    page = new GlassesProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
