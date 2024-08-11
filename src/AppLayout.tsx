import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Customer } from "./utils/types";
import CustomerList from "./pages/CustomerList";
import CustomerDetails from "./pages/CustomerDetails";
import Header from "./components/Header";

const AppLayout = () => {
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
    console.log(generatedCustomers);

    setCustomers(generatedCustomers);
    setSelectedCustomer(generatedCustomers[0]);
  }, []);

  return (
    <>
      <Header />
      <div className="grid h-screen grid-cols-[25%_1fr]  ">
        <div className="overflow-y-auto">
          <CustomerList
            customers={customers}
            selectedCustomer={selectedCustomer}
            onSelectCustomer={setSelectedCustomer}
          />
        </div>
        <div className="">
          {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
        </div>
      </div>
    </>
  );
};
export default AppLayout;
