import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CounterComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`app component value should be 1 on init`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.value).toEqual(1);
  });
});
