import { MvcSamplePage } from './app.po';

describe('mvc-sample App', function() {
  let page: MvcSamplePage;

  beforeEach(() => {
    page = new MvcSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
