import { Customer } from "../utils/types";
import Images from "../components/Images";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  return (
    <div className="grid place-items-center px-36 pt-12 bg-slate-100">
      <h1 className="font-semibold text-gray-700 text-3xl tracking-wide mb-2">
        {customer.name}
      </h1>
      <h2 className="text-xl text-gray-600 ">{customer.title}</h2>
      <p className="mb-4 text-gray-500 text-center">{customer.address}</p>
      <Images />
    </div>
  );
};

export default CustomerDetails;
