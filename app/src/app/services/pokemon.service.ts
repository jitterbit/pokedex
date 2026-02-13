import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonList, IPokemonDetails } from '@shared/interfaces/pokemon.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly apiUrl = `${environment.apiUrl}/pokemon`;

  constructor(private readonly http: HttpClient) {}

  getPokemons(limit: number = 20, offset: number = 0): Observable<IPokemonList> {
    return this.http.get<IPokemonList>(this.apiUrl, {
      params: { limit, offset }
    });
  }

  getPokemonDetails(nameOrId: string): Observable<IPokemonDetails> {
    return this.http.get<IPokemonDetails>(`${this.apiUrl}/${nameOrId}`);
  }
}
