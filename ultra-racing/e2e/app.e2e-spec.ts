import { UltraRacingPage } from './app.po';

describe('ultra-racing App', () => {
  let page: UltraRacingPage;

  beforeEach(() => {
    page = new UltraRacingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
