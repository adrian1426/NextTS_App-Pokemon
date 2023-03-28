export interface PokemonResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Result[];
}

export interface Result {
  id: string;
  img: string;
  name: string;
  url: string;
}
