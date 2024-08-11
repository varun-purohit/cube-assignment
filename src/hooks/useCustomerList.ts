import { useEffect } from "react";
import { faker } from "@faker-js/faker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setCustomers } from "../store/customerSlice";

export const useCustomers = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state: RootState) => state.customer.customers);
  const selectedCustomer = useSelector(
    (state: RootState) => state.customer.selectedCustomer
  );

  useEffect(() => {
    const generatedCustomers = Array.from({ length: 1000 }, (_, index) => ({
      id: JSON.stringify(index + 1),
      name: faker.person.fullName(),
      title: faker.person.jobTitle(),
      address: faker.location.streetAddress(true),
    }));

    dispatch(setCustomers(generatedCustomers));
  }, [dispatch]);

  return { customers, selectedCustomer };
};
