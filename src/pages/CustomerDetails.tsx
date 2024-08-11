interface CustomerDetailsProps {
  id: number;
  heading: string;
  description: string;
}

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  console.log(customer.heading);

  return (
    <div className="grid place-items-center px-36 pt-12 text-center ">
      <h1 className="font-normal text-2xl tracking-wide py-2">
        {customer.heading} details here
      </h1>
      <p className="text-gray-400 py-2 mt-3">{customer.description}</p>
    </div>
  );
};
export default CustomerDetails;
