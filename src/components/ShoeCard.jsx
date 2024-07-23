const ShoeCard = ({ imgUrl, changeShoeImg, shoeImg }) => {
  const handleClick = () => {
    if (shoeImg !== imgUrl) {
      changeShoeImg(imgUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        shoeImg === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex bg-card bg-center bg-cover justify-center items-center rounded-xl max-sm:p-4 sm:w-40 sm:h-40">
        <img
          src={imgUrl.thumbnail}
          alt="shoe"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
