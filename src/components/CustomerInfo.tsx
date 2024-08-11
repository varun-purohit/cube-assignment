interface CustomerInfoProps {
  name: string;
  title: string;
  address: string;
  nameStyle: string;
  titleStyle: string;
  addressStyle: string;
}

const CustomerInfo = ({
  name,
  title,
  address,
  nameStyle,
  titleStyle,
  addressStyle,
}: CustomerInfoProps) => {
  return (
    <>
      <h1 className={nameStyle}>{name}</h1>
      <h2 className={titleStyle}>{title}</h2>
      <p className={addressStyle}>{address}</p>
    </>
  );
};
export default CustomerInfo;
