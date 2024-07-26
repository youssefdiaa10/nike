import { useState } from "react";
import { star } from "../assets/icons";
import ShoeProduct from "./ShoeProduct";

const PopularProductCard = ({ imgURL, name, price }) => {
  const [toShow, setToShow] = useState(false);

  function handleToShow() {
    setToShow(!toShow);
  }
  return (
    <>
      <div
        className="flex flex-1 flex-col w-full max-sm:w-full hover:-translate-y-3"
        onClick={handleToShow}
      >
        <img src={imgURL} alt={name} className="w-[280px] h-[282px]" />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-[17px] leading-normal">
          {price}
        </p>
      </div>

      {toShow ? (
        <ShoeProduct
          imgURL={imgURL}
          name={name}
          price={price}
          handleToShow={handleToShow}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default PopularProductCard;
