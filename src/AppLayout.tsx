import { useState } from "react";
import CustomerDetails from "./pages/CustomerDetails";
import CustomerList from "./pages/CustomerList";
import { customerList } from "./utils/data";

const AppLayout = () => {
  const [customerId, setCustomerId] = useState<number | null>(null);

  const handleCustomer = (id: number) => {
    setCustomerId(id);
  };

  const selectedCustomer = customerList.find(
    (customer) => customer.id === customerId
  );

  return (
    <div className="grid h-screen grid-cols-[25%_1fr]  ">
      <div className="overflow-y-auto">
        <CustomerList customerId={customerId} handleCustomer={handleCustomer} />
      </div>
      <div className="h-screen">
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};
export default AppLayout;
