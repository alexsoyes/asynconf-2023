import {
  EnergyOption,
  LoanRate,
  MileageOption,
  VehicleOption,
  YearOption,
} from "../types/types";

export const vehicleOptions: VehicleOption[] = [
  { type: "Citadine", ecoScore: 8 },
  { type: "Cabriolet", ecoScore: 6 },
  { type: "Berline", ecoScore: 6.5 },
  { type: "SUV / 4x4", ecoScore: 4 },
];

export const energyOptions: EnergyOption[] = [
  { type: "Essence", ecoScore: 5 },
  { type: "Électrique", ecoScore: 9 },
  { type: "Gaz", ecoScore: 6 },
  { type: "Hybride", ecoScore: 7 },
  { type: "Diesel", ecoScore: 4 },
];

export const yearOptions: YearOption[] = [
  { range: "1960-1970", ecoScore: 1 },
  { range: "1970-1980", ecoScore: 2 },
  { range: "1990-2000", ecoScore: 4 },
  { range: "2000-2010", ecoScore: 5 },
  { range: "Après 2010", ecoScore: 7 },
];

export const mileageOptions: MileageOption[] = [
  { range: "5-10K/km", ecoScore: 9 },
  { range: "10-15K/km", ecoScore: 7 },
  { range: "15-20K/km", ecoScore: 5 },
  { range: "20-25K/km", ecoScore: 3 },
  { range: "25-30K/km", ecoScore: 1 },
];

export const loanRates: LoanRate[] = [
  { scoreRange: [0, 10], rate: 3.0 },
  { scoreRange: [11, 15], rate: 2.74 },
  { scoreRange: [16, 25], rate: 2.52 },
  { scoreRange: [26, 33], rate: 2.1 },
  { scoreRange: [34, 40], rate: 1.85 },
];
