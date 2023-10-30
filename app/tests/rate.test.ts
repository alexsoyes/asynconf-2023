import { describe, expect, it } from "vitest";
import {
  energyOptions,
  mileageOptions,
  vehicleOptions,
  yearOptions,
} from "../data/data";
import { calculateLoanRate } from "../features/calculator";

describe("calculateLoanRate", () => {
  // Test avec score 0-10
  it("should return 3.0% for score 0-10 with adjustments for passengers", () => {
    const rate = calculateLoanRate(
      vehicleOptions.find((v) => v.type === "SUV / 4x4")!, // ecoScore: 4
      energyOptions.find((e) => e.type === "Diesel")!, // ecoScore: 4
      yearOptions.find((y) => y.range === "1960-1970")!, // ecoScore: 1
      mileageOptions.find((m) => m.range === "25-30K/km")!, // ecoScore: 1
      1 // Nombre de passagers
    );
    expect(rate).toBeCloseTo(3.11); // 3.0% + 0.11% pour 1 passager
  });

  // Test avec score 11-15
  it("should return 2.74% for score 11-15 with adjustments for passengers", () => {
    const rate = calculateLoanRate(
      vehicleOptions.find((v) => v.type === "Cabriolet")!, // ecoScore: 6
      energyOptions.find((e) => e.type === "Gaz")!, // ecoScore: 6
      yearOptions.find((y) => y.range === "1960-1970")!, // ecoScore: 1
      mileageOptions.find((m) => m.range === "25-30K/km")!, // ecoScore: 1
      2 // Nombre de passagers
    );
    expect(rate).toBeCloseTo(2.57); // 2.74% - 0.17% pour 2 passagers
  });

  // Test avec score 16-25
  it("should return 2.52% for score 16-25 with adjustments for passengers", () => {
    const rate = calculateLoanRate(
      vehicleOptions.find((v) => v.type === "Berline")!, // ecoScore: 6.5
      energyOptions.find((e) => e.type === "Hybride")!, // ecoScore: 7
      yearOptions.find((y) => y.range === "1990-2000")!, // ecoScore: 4
      mileageOptions.find((m) => m.range === "15-20K/km")!, // ecoScore: 5
      3 // Nombre de passagers
    );
    expect(rate).toBeCloseTo(2.23); // 2.52% - 0.29% pour 3 passagers
  });

  // Test avec score 26-33
  it("should return 2.1% for score 26-33 with adjustments for passengers", () => {
    const rate = calculateLoanRate(
      vehicleOptions.find((v) => v.type === "Citadine")!, // ecoScore: 8
      energyOptions.find((e) => e.type === "Électrique")!, // ecoScore: 9
      yearOptions.find((y) => y.range === "Après 2010")!, // ecoScore: 7
      mileageOptions.find((m) => m.range === "10-15K/km")!, // ecoScore: 7
      4 // Nombre de passagers
    );
    expect(rate).toBeCloseTo(1.57); // 2.1% - 0.53% pour 4 passagers
  });
});
