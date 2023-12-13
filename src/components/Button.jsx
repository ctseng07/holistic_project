const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-4 py-2.5 text-transform: uppercase text-xs leading-none hover:bg-black font-bodani
                ${backgroundColor 
                ? `${backgroundColor} ${textColor}`
                : 'bg-pink text-white'
                } rounded ${fullWidth && 'w-full'}"}`}
                >
            {label}
  
            {iconURL && <img src={iconURL}
                alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    )
  }
  
  export default Button