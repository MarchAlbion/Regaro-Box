"use client";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";


const ReactQuillNew = dynamic(() => import("react-quill-new"), { ssr: false });


interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  const module = {
    toolbar: toolbarOptions,
  };

  return (
    <div className="w-full box-border p-4 bg-gray-100 border border-gray-300 rounded-md mt-5">
      <div className="h-52 lg:h-96 bg-white rounded-md overflow-hidden shadow-md">
      <ReactQuillNew
            value={value}
            onChange={onChange}
            className="h-full"
            theme="snow"
            modules={module}
          />
      </div>
    </div>
  );
};

export default RichTextEditor;
