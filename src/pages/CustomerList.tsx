import React from "react";
import { Customer } from "../utils/types";
import CustomerInfo from "../components/CustomerInfo";
import { useScroll } from "../hooks/useScroll";

interface CustomerListProps {
  customers: Customer[];
  selectedCustomer: Customer | null;
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  selectedCustomer,
  onSelectCustomer,
}) => {
  const { visibleItems, listRef } = useScroll(customers.length);

  return (
    <ul ref={listRef} className="h-full overflow-y-auto">
      {customers.slice(0, visibleItems).map((customer) => (
        <li
          key={customer.id}
          className={`border border-gray-200 p-6 cursor-pointer border-r-2  ${
            selectedCustomer?.id === customer.id
              ? "bg-gray-200 border-r-gray-800"
              : "bg-white"
          }`}
          onClick={() => onSelectCustomer(customer)}
        >
          <CustomerInfo
            name={customer.name}
            address={customer.address}
            title={customer.title}
            nameStyle="capitalize text-gray-700 font-semibold text-xl tracking-wide"
            addressStyle="text-xs text-gray-500"
            titleStyle="text-sm text-gray-600"
          />
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
