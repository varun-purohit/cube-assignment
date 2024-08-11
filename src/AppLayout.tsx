// src/AppLayout.tsx
import CustomerList from "./pages/CustomerList";
import CustomerDetails from "./pages/CustomerDetails";
import Header from "./components/Header";
import { useCustomers } from "./hooks/useCustomerList";

const AppLayout = () => {
  const { customers, selectedCustomer, setSelectedCustomer } = useCustomers();

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
