import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import LoginComponent from './login.component';
import { AuthHttp } from '../../http/auth.http';
import { LoginPresenter } from './login.presenter';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('@LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let http: jasmine.SpyObj<AuthHttp>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    http = jasmine.createSpyObj('AuthHttp', ['login']);
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        HttpClientTestingModule,
        RouterModule,
        ReactiveFormsModule,
        BrowserModule,
      ],
      providers: [
        LoginPresenter,
        { provide: AuthHttp, useValue: http },
        { provide: Router, useValue: router },
        provideAnimations(),
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('when submit form', () => {
    it('#should not call the login service when form is invalid', () => {
      const password = '12321';
      const username = '';
      component.presenter.username.setValue(username);
      component.presenter.password.setValue(password);

      component.submit();

      expect(http.login).not.toHaveBeenCalled();
    });
    it('should mark all fields as touched when submitting the form', () => {
      spyOn(component.presenter.form, 'markAllAsTouched');

      component.submit();

      expect(component.presenter.form.markAllAsTouched).toHaveBeenCalled();
    });

    it('should not call http.login if the form is invalid', () => {
      component.presenter.form.setErrors({ invalid: true });

      component.submit();

      expect(http.login).not.toHaveBeenCalled();
    });

    it('should call http.login with the correct data if the form is valid', fakeAsync(() => {
      component.presenter.username.setValue('user');
      component.presenter.password.setValue('password');
      http.login.and.returnValue(of({} as any));

      component.submit();
      tick(500);

      expect(http.login).toHaveBeenCalledWith({
        username: 'user',
        password: 'password'
      });
    }));

    it('should navigate to the home page after a successful login', fakeAsync(() => {
      component.presenter.username.setValue('user');
      component.presenter.password.setValue('password');
      http.login.and.returnValue(of({} as any));

      component.submit();
      tick(500);

      expect(router.navigate).toHaveBeenCalledWith(['/']);
    }));

  });
});
