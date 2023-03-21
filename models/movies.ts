export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Mapped type for changing type from required to optional
type options = {
  name: string;
  id: number;
};
type Optional<T> = {
  [x in keyof T]+?: T[x];
};
function generate(options: Optional<options>) {
  options.id;
}
