"use client";


import { useState } from "react";
import CustomInput from "../{components}/CustomInput/CustomInput";
import RichTextEditor from "../{components}/RichText/Rischtext";

export default function Admin() {
  const [value, setValue] = useState<string>("");
  const handleChange = (value: string) => {
    setValue(value);
    console.log(value);
  };
  return (
    <main className="lg:grid grid-cols-2 self-center h-full items center gap-5">
      <section className="flex-col bg-gray-transparent justify-center items-center p-5 gap-5">
        <CustomInput
          lgMargin="lg:mr-0"
          mdMargin="md:mr-0"
          inputWidth="md:w-full"
        />
        <RichTextEditor value={value} onChange={handleChange} />
      </section>
      <div>
        <div className='ql-snow'>
        <div
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>

      </div>
    </main>
  );
}
