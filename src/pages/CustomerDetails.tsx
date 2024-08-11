import { Customer } from "../utils/types";
import Images from "../components/Images";
import CustomerInfo from "../components/CustomerInfo";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  return (
    <div className="flex flex-col items-center h-full px-36 pt-12 bg-slate-100">
      <CustomerInfo
        name={customer.name}
        address={customer.address}
        title={customer.title}
        nameStyle="font-semibold text-gray-700 text-3xl tracking-wide mb-2"
        addressStyle="mb-4 text-gray-500 text-center"
        titleStyle=" text-xl text-gray-600"
      />
      <Images id={customer.id} />
    </div>
  );
};

export default CustomerDetails;
