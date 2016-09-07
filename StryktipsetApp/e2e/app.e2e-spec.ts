import { StryktipsetAppPage } from './app.po';

describe('stryktipset-app App', function() {
  let page: StryktipsetAppPage;

  beforeEach(() => {
    page = new StryktipsetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
