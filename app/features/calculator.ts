import { loanRates } from "../data/data";
import {
  EnergyOption,
  MileageOption,
  NumberOfPassengers,
  VehicleOption,
  YearOption,
} from "../types/types";

export function adjustRateForPassengers(
  baseRate: number,
  passengers: NumberOfPassengers
): number {
  const adjustments: Record<NumberOfPassengers, number> = {
    1: 0.11,
    2: -0.17,
    3: -0.29,
    4: -0.53,
  };
  return baseRate + (adjustments[passengers] || 0);
}
export function calculateLoanRate(
  vehicle: VehicleOption,
  energy: EnergyOption,
  year: YearOption,
  mileage: MileageOption,
  passengers: NumberOfPassengers
): number {
  // Calcul du score total du véhicule
  const vehicleScore = Math.round(
    vehicle.ecoScore + energy.ecoScore + year.ecoScore + mileage.ecoScore
  );

  // Trouver le taux d'emprunt correspondant au score du véhicule
  const baseRate =
    loanRates.find(
      (rate) =>
        vehicleScore >= rate.scoreRange[0] && vehicleScore <= rate.scoreRange[1]
    )?.rate || 0;

  // Ajuster le taux en fonction du nombre de passagers
  return adjustRateForPassengers(baseRate, passengers);
}
