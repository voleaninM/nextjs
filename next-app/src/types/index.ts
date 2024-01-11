export type CarT = {
  city_mpg: number;
  carClass: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};
export type FilterT = {
  make?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
};
export type OptionT = {
  title: string;
  value: string;
};
