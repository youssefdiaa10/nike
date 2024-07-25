import { star } from "../assets/icons";

const ShoeProduct = ({ imgURL, name, price, handleToShow }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-1 justify-center items-center bg-black/40">
      <div className="bg-white py-5 px-10 rounded-[40px] border-coral-red border-[3px]">
        <div className="flex justify-end">
          <h1
            className="text-white font-bold text-[30px] bg-coral-red px-4 rounded-xl"
            onClick={handleToShow}
          >
            X
          </h1>
        </div>
        <img src={imgURL} alt={name} className="w-[360px] h-[362px] mt-5" />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ShoeProduct;
