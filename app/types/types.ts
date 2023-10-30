export type VehicleType = "Citadine" | "Cabriolet" | "Berline" | "SUV / 4x4";
export type EnergyType =
  | "Essence"
  | "Électrique"
  | "Gaz"
  | "Hybride"
  | "Diesel";
export type YearRange =
  | "1960-1970"
  | "1970-1980"
  | "1990-2000"
  | "2000-2010"
  | "Après 2010";
export type MileageRange =
  | "5-10K/km"
  | "10-15K/km"
  | "15-20K/km"
  | "20-25K/km"
  | "25-30K/km";

export type NumberOfPassengers = 1 | 2 | 3 | 4;

export interface VehicleOption {
  type: VehicleType;
  ecoScore: number;
}

export interface EnergyOption {
  type: EnergyType;
  ecoScore: number;
}

export interface YearOption {
  range: YearRange;
  ecoScore: number;
}

export interface MileageOption {
  range: MileageRange;
  ecoScore: number;
}

export interface LoanRate {
  scoreRange: [number, number];
  rate: number;
}
