import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuComponent } from './side-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SideMenuComponent,
        BrowserAnimationsModule,
        BrowserModule,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#toggleMenu', () => {
    it('should change opened flag to false', () => {
      const opened = false;
      component.opened = true;

      component.toggleMenu();

      expect(opened).toBeFalse();
    });
    it('should change opened flag to true', () => {
      const opened = true;
      component.opened = false;

      component.toggleMenu();

      expect(opened).toBeTrue();
    });
  })
});
