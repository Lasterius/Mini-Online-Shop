export interface IFiltersState {
  priceRange: { min: number; max: number };
  sortByPopularity: boolean;
  sortByRating: boolean;
  isOpen: boolean;
}
