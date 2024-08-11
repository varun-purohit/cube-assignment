// src/hooks/useCustomers.ts
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { Customer } from "../utils/types";

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  useEffect(() => {
    const generatedCustomers = Array.from({ length: 1000 }, (_, index) => ({
      id: index + 1,
      name: faker.person.fullName(),
      title: faker.person.jobTitle(),
      address: faker.location.streetAddress(true),
    }));

    setCustomers(generatedCustomers);
    setSelectedCustomer(generatedCustomers[0]);
  }, []);

  return { customers, selectedCustomer, setSelectedCustomer };
};
