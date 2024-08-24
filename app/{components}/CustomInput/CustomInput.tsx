'use client';

type Props = {
  lgMargin?: string;
  mdMargin?: string;
  inputWidth?: string;
}

export default function CustomInput({lgMargin = 'lg:mr-5', mdMargin = 'md:mr-4',inputWidth = 'md:w-96'}: Props) {
  console.log(lgMargin);

  return (
    <div className={`${lgMargin} mb-2 md:mb-0 ${mdMargin}`}>
      <input
        id="name"
        name="Hello"
        type="text"
        placeholder="Search for weapon"
        className={`p-5 block w-full bg-transparent rounded-md border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:white outline-none sm:text-sm sm:leading-6 ${inputWidth}`}
      />
    </div>
  );
}
