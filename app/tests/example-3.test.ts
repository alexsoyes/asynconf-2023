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

  it("should correctly calculate the loan rate for Example 3", () => {
    // Données pour l'Exemple 3
    const vehicle: VehicleOption = { type: "Cabriolet", ecoScore: 6 };
    const energy: EnergyOption = { type: "Diesel", ecoScore: 4 };
    const year: YearOption = { range: "1970-1980", ecoScore: 2 }; // Ajustez en fonction de l'année exacte
    const mileage: MileageOption = { range: "10-15K/km", ecoScore: 7 };
    const passengers: NumberOfPassengers = 2;

    // Calcul du taux
    const rate = calculateLoanRate(vehicle, energy, year, mileage, passengers);

    // Vérification si le taux est correct (2,35% pour l'Exemple 3)
    expect(rate).toBeCloseTo(2.35);
  });
});
