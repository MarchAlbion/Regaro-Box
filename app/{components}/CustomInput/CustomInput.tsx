"use client";

type Props = {
  lgMargin?: string;
  mdMargin?: string;
  inputWidth?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  mb?: string;
  bg?: string;
};

export default function CustomInput({
  lgMargin = "lg:mr-5",
  mdMargin = "md:mr-4",
  inputWidth = "md:w-96",
  mb = "mb-2",
  value = "",
  placeholder = "Search for weapon",
  onChange = () => {},
  bg="bg-transparent",
}: Props) {


  return (
    <div
      className={`${lgMargin} ${mb} md:mb-0 ${mdMargin} z-40`}
    >
      <input
        id="name"
        onChange={onChange}
        name="Hello"
        type="text"
        value={value}
        placeholder={placeholder}
        className={`p-5 block w-full ${bg} rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:white outline-none sm:text-sm sm:leading-6 ${inputWidth} transition-all duration-300 z-40`}
      />
    </div>
  );
}
