type Props = {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
};

export const Button = ({
  text,
  onClick = () => {},
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded transition-all duration-300 "
    >
      {text}
    </button>
  );
};
