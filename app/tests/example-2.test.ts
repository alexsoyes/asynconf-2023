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
  // ... (autres tests)

  it("should correctly calculate the loan rate for Example 2", () => {
    // Données pour l'Exemple 2
    const vehicle: VehicleOption = { type: "Citadine", ecoScore: 8 };
    const energy: EnergyOption = { type: "Hybride", ecoScore: 7 };
    const year: YearOption = { range: "Après 2010", ecoScore: 9 };
    const mileage: MileageOption = { range: "5-10K/km", ecoScore: 8 };
    const passengers: NumberOfPassengers = 4;

    // Calcul du taux
    const rate = calculateLoanRate(vehicle, energy, year, mileage, passengers);

    // Vérification si le taux est correct (1,57% pour l'Exemple 2)
    expect(rate).toBeCloseTo(1.57);
  });
});
