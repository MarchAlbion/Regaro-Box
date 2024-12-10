type Props = {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  bgColor?: string;
  bgHoverColor?: string;
};

export const Button = ({
  text,
  onClick = () => {},
  type = "button",
  bgColor = "bg-blue-500",
  bgHoverColor = "hover:bg-blue-700",
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${bgColor} ${bgHoverColor} text-white font-bold py-1 px-4 rounded transition-all duration-300 `}
    >
      {text}
    </button>
  );
};
