import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPokemon, IPokemonDetails } from '@shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-right-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-screen.component.html',
  styleUrl: './right-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightScreenComponent {
  protected readonly Math = Math;

  pokemons = input<IPokemon[]>([]);
  selectedPokemon = input<IPokemonDetails | null>(null);
  isOpen = input<boolean>(false);

  onSelect = output<string>();
  onNext = output<void>();
  onPrev = output<void>();

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  getPokemonImageUrl(url: string): string {
    const id = this.getPokemonId(url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}
