import { useState, useEffect, useRef } from "react";
import { Customer } from "../utils/types";

interface CustomerListProps {
  customers: Customer[];
  selectedCustomer: Customer | null;
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerList = ({
  customers,
  selectedCustomer,
  onSelectCustomer,
}: CustomerListProps) => {
  const [visibleCustomers, setVisibleCustomers] = useState(20);
  const listRef = useRef<HTMLUListElement | null>(null);
  //   console.log("length", customers.length);

  const loadMoreCustomers = () => {
    if (visibleCustomers < customers.length) {
      setVisibleCustomers((prevVisibleCustomers) => prevVisibleCustomers + 20);
    }
  };

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        loadMoreCustomers();
      }
    }
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [visibleCustomers]);

  return (
    <ul ref={listRef} className="h-full overflow-y-auto">
      {customers.slice(0, visibleCustomers).map((customer) => (
        <li
          key={customer.id}
          className={`border border-gray-200 p-6 cursor-pointer border-r-2  ${
            selectedCustomer?.id === customer.id
              ? "bg-gray-200 border-r-gray-800"
              : "bg-white"
          }`}
          onClick={() => {
            onSelectCustomer(customer);
          }}
        >
          <h1 className="capitalize text-gray-700 font-semibold text-xl tracking-wide">
            {customer.name}
          </h1>
          <h2 className="text-sm text-gray-600">{customer.title}</h2>
          <p className="text-xs text-gray-500">{customer.address}</p>
        </li>
      ))}
    </ul>
  );
};

export default CustomerList;
