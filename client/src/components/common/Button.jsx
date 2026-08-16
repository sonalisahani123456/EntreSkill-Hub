function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-slate-300 text-slate-700 hover:bg-slate-100",

    success:
      "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;