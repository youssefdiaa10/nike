const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red hover:bg-red-700 text-white border-coral-red"
      }  rounded-full `}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow-right-icon"
          className="ml-2 rounded-full w-5 h-5 hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default Button;
