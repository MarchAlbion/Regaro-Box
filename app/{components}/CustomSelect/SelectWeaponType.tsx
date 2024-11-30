"use client";

type Props = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};
export default function SelectItemType({
  options,
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-4">

      <select
        id="location"
        name="location"
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-white ring-1 ring-inset bg-dark-blue focus:ring-2 focus:ring-indigo-600 sm:text-sm/6 cursor-pointer"
      >
        {options.map((option) => (
          <option key={option} value={option} className="cursor-pointer">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
