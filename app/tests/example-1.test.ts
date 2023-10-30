import { describe, expect, it } from "vitest";
import { calculateLoanRate } from "../features/calculator";
import {
  EnergyOption,
  MileageOption,
  NumberOfPassengers,
  VehicleOption,
  YearOption,
} from "../types/types";

describe("calculateLoanRate", () => {
  it("should correctly calculate the loan rate for Example 1", () => {
    // Données pour l'Exemple 1
    const vehicle: VehicleOption = { type: "Citadine", ecoScore: 8 };
    const energy: EnergyOption = { type: "Électrique", ecoScore: 9 };
    const year: YearOption = { range: "2000-2010", ecoScore: 1 };
    const mileage: MileageOption = { range: "25-30K/km", ecoScore: 5 };
    const passengers: NumberOfPassengers = 1;

    // Calcul du taux
    const rate = calculateLoanRate(vehicle, energy, year, mileage, passengers);

    // Vérification si le taux est correct (2.63% pour l'Exemple 1)
    expect(rate).toBeCloseTo(2.63);
  });
});
