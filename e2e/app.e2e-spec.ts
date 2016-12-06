import { NicespeakingPresentationPage } from './app.po';

describe('nicespeaking-presentation App', function() {
  let page: NicespeakingPresentationPage;

  beforeEach(() => {
    page = new NicespeakingPresentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
