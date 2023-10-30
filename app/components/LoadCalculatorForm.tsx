"use client";

import { useEffect, useState } from "react";
import {
  energyOptions,
  mileageOptions,
  vehicleOptions,
  yearOptions,
} from "../data/data";
import { calculateLoanRate } from "../features/calculator";
import {
  EnergyOption,
  MileageOption,
  NumberOfPassengers,
  VehicleOption,
  YearOption,
} from "../types/types";

export default function LoanCalculator() {
  const [vehicle, setVehicle] = useState<VehicleOption | undefined>(
    vehicleOptions[0]
  );
  const [energy, setEnergy] = useState<EnergyOption | undefined>(
    energyOptions[0]
  );
  const [year, setYear] = useState<YearOption | undefined>(yearOptions[0]);
  const [mileage, setMileage] = useState<MileageOption | undefined>(
    mileageOptions[0]
  );
  const [passengers, setPassengers] = useState<NumberOfPassengers>(1);
  const [rate, setRate] = useState<number | undefined>();

  useEffect(() => {
    if (vehicle && energy && year && mileage && passengers) {
      const rate = calculateLoanRate(
        vehicle,
        energy,
        year,
        mileage,
        passengers
      );
      setRate(rate);
    }
  }, [energy, mileage, passengers, vehicle, year]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Simulateur de Taux d'Emprunt pour Véhicule
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Type de véhicule:
            <select
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={vehicle?.type || ""}
              onChange={(e) =>
                setVehicle(
                  vehicleOptions.find((v) => v.type === e.target.value)
                )
              }
            >
              {vehicleOptions.map((option, index) => (
                <option key={index} value={option.type}>
                  {option.type}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Type d'énergie:
            <select
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={energy?.type || ""}
              onChange={(e) =>
                setEnergy(
                  energyOptions.find((eo) => eo.type === e.target.value)
                )
              }
            >
              {energyOptions.map((option, index) => (
                <option key={index} value={option.type}>
                  {option.type}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Année de fabrication:
            <select
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={year?.range || ""}
              onChange={(e) =>
                setYear(yearOptions.find((y) => y.range === e.target.value))
              }
            >
              {yearOptions.map((option, index) => (
                <option key={index} value={option.range}>
                  {option.range}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Kilométrage annuel:
            <select
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={mileage?.range || ""}
              onChange={(e) =>
                setMileage(
                  mileageOptions.find((m) => m.range === e.target.value)
                )
              }
            >
              {mileageOptions.map((option, index) => (
                <option key={index} value={option.range}>
                  {option.range}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre de passagers:
            <input
              type="number"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={passengers}
              onChange={(e) =>
                setPassengers(
                  parseInt(e.target.value, 10) as NumberOfPassengers
                )
              }
              min="1"
              max="4"
            />
          </label>
        </div>

        <div className="text-center font-semibold text-lg mt-6">
          Taux d'emprunt: <span className="text-indigo-600">{rate}%</span>
        </div>
      </div>
    </div>
  );
}
