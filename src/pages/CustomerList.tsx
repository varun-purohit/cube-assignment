import { customerList } from "../utils/data";

interface CustomerListProps {
  customerId: number | null;
  handleCustomer: (id: number) => void;
}

const CustomerList = ({ customerId, handleCustomer }: CustomerListProps) => {
  return (
    <ul className="">
      {customerList.map((customer) => {
        const description = customer.description;
        const truncatedDescription =
          description.split(" ").length > 22
            ? `${description.split(" ").slice(0, 22).join(" ")}...`
            : description;

        return (
          <li
            key={customer.id}
            className={`border border-gray-200 p-6 cursor-pointer  ${
              customerId === customer.id
                ? "bg-gray-200 border-r-2 border-r-gray-600"
                : "bg-white"
            }`}
            onClick={() => handleCustomer(customer.id)}
          >
            <h2 className="capitalize text-gray-700 text-xl tracking-wide">
              {customer.heading}
            </h2>
            <p className="text-gray-400 mt-2">{truncatedDescription}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default CustomerList;
