import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexShellComponent } from './pokedex-shell.component';
import { PokemonService } from '../../services/pokemon.service';
import { IAuthService } from '../../services/auth.service.interface';
import { of } from 'rxjs';
import { signal } from '@angular/core';

describe('PokedexShellComponent', () => {
  let component: PokedexShellComponent;
  let fixture: ComponentFixture<PokedexShellComponent>;
  let mockPokemonService: any;
  let mockAuthService: any;

  beforeEach(async () => {
    mockPokemonService = {
      getPokemons: jasmine.createSpy('getPokemons').and.returnValue(of({ results: [] })),
      getPokemonDetails: jasmine.createSpy('getPokemonDetails').and.returnValue(of({})),
    };

    mockAuthService = {
      isLoggedIn: signal(true),
      currentUser: signal({ name: 'ASH' }),
      login: jasmine.createSpy('login'),
      logout: jasmine.createSpy('logout'),
      register: jasmine.createSpy('register')
    };

    await TestBed.configureTestingModule({
      imports: [PokedexShellComponent],
      providers: [
        { provide: PokemonService, useValue: mockPokemonService },
        { provide: IAuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokedexShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
