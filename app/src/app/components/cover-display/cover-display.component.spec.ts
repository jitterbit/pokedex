import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoverDisplayComponent } from './cover-display.component';
import { IAuthService } from '../../services/auth.service.interface';
import { of } from 'rxjs';
import { signal } from '@angular/core';

describe('CoverDisplayComponent', () => {
  let component: CoverDisplayComponent;
  let fixture: ComponentFixture<CoverDisplayComponent>;
  let mockAuthService: any;

  beforeEach(async () => {
    mockAuthService = {
      isLoggedIn: signal(false),
      currentUser: signal(null),
      login: jasmine.createSpy('login').and.returnValue(of({})),
      register: jasmine.createSpy('register').and.returnValue(of({})),
      logout: jasmine.createSpy('logout')
    };

    await TestBed.configureTestingModule({
      imports: [CoverDisplayComponent],
      providers: [
        { provide: IAuthService, useValue: mockAuthService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CoverDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should start with empty username', () => {
    expect(component.username()).toBe('');
  });

  it('should update password when keyboard keys are pressed and field is active', () => {
    component.activeField.set('pass');
    component.handleKeyPress('1');
    component.handleKeyPress('2');
    
    expect(component.password()).toBe('12');
  });

  it('should call authService.login when handleAction is called in login mode', () => {
    component.username.set('testuser');
    component.password.set('1234');
    component.mode.set('login');

    component.handleAction();

    expect(mockAuthService.login).toHaveBeenCalledWith('testuser', '1234');
  });

  it('should delete last character when DEL is pressed', () => {
    component.password.set('123');
    component.activeField.set('pass');
    
    component.handleKeyPress('DEL');
    
    expect(component.password()).toBe('12');
  });
});
