import { ServicioPage } from './app.po';

describe('servicio App', () => {
  let page: ServicioPage;

  beforeEach(() => {
    page = new ServicioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
