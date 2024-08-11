import CustomerList from "./pages/CustomerList";
import CustomerDetails from "./pages/CustomerDetails";
import Header from "./components/Header";
import { useCustomers } from "./hooks/useCustomerList";
import { useDispatch } from "react-redux";
import { setSelectedCustomer } from "./store/customerSlice";
import { Customer } from "./utils/types";

const AppLayout = () => {
  const dispatch = useDispatch();
  const { customers, selectedCustomer } = useCustomers();

  const handleCustomer = (customer: Customer) => {
    dispatch(setSelectedCustomer(customer));
  };

  return (
    <>
      <Header />
      <div className="grid h-screen grid-cols-[25%_1fr]  ">
        <div className="overflow-y-auto">
          <CustomerList
            customers={customers}
            selectedCustomer={selectedCustomer}
            onSelectCustomer={handleCustomer}
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
