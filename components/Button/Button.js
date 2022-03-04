const Button = ({
  variant,
  children,
  className,
  color,
  textColor,
  hoverColor,
  ...props
}) => {
  return variant === "outlined" ? (
    <button
      {...props}
      className={`bg-transparent ${
        hoverColor ? hoverColor : "hover:bg-primary-dark hover:text-white"
      } ${textColor ? textColor : "text-primary-main"} border ${
        color ? color : "border-primary-main"
      } w-32 font-bold py-2 px-4 rounded-full ${className || ""}`}
    >
      {children}
    </button>
  ) : variant === "text" ? (
    <button
      {...props}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${
        className || ""
      }`}
    >
      {children}
    </button>
  ) : (
    <button
      {...props}
      className={`${color ? color : "bg-primary-main"} ${
        hoverColor ? hoverColor : "hover:bg-primary-dark"
      } ${
        textColor ? textColor : "text-white"
      } font-bold py-2 px-4 rounded-full w-32 h-10 ${className || ""}`}
    >
      {children}
    </button>
  );
};

export { Button };
