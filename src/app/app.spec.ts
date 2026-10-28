import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TranslationService } from './services/translation.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  afterEach(() => localStorage.removeItem('portfolio-lang'));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the name in the hero heading', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Allan Salah-Djimabi');
  });

  it('should switch every section to French', () => {
    TestBed.inject(TranslationService).setLanguage('fr');
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#about h2')?.textContent).toContain('À Propos');
    expect(document.documentElement.lang).toBe('fr');
  });

  it('should link both projects to their GitHub repositories', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>('#projects .view-btn')
    ).map(a => a.href);
    expect(links).toEqual([
      'https://github.com/Al-Ralph/Stage-projet',
      'https://github.com/Al-Ralph/afrikabnb'
    ]);
  });
});
