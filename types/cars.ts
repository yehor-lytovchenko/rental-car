interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  img: string;
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  mileage: number;
}

interface Cars {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}

export type { Cars, Car };
