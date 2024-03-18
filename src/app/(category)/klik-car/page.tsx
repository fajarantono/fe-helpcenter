import Image from 'next/image';
import carIMG from '/public/illustration/il-car.svg';

const KlikCar = () => {
  return (
    <>
      <Image src={carIMG} alt="klik-car" />
    </>
  );
};

export default KlikCar;
