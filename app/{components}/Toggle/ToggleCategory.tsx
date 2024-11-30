"use client";

import { Switch } from "@headlessui/react";

type Props = {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedItemCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function ToggleCategory({ enabled, setEnabled, setSelectedItemCategory}: Props) {
  const handleChange = () => {
    setEnabled(prev => !prev);
    setSelectedItemCategory(enabled ? "sword" : "shoes");
  }
  
  return (
    <Switch
      checked={enabled}
      onChange={() => handleChange()}
      className="group relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full "
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute size-full rounded-md bg-dark-blue"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-indigo-800 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 inline-block size-5 transform rounded-full border border-indigo-900 bg-indigo-500 shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
      />
    </Switch>
  );
}
