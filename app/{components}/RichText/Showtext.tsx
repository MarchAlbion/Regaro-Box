export default function Showtext({value}: {value: string}) {
  return (
    <div className="ql-snow">
      <div className="ql-editor" dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}
