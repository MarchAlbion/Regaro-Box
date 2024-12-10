import Link from "next/link";

export default function Socials() {
  return (
    <div className=" flex-col self-center h-full w-full  gap-5">
      <Link href="" className="flex justify-center items-center w-60">
        <img src="/YouTube.png" />
      </Link>
      <Link href="" className="flex justify-center items-center w-60">
        <img src="/Discord.png" />
      </Link>
      <Link href="" className="flex justify-center items-center w-60">
        <img src="/PlayAlbion.png" />
      </Link>
      <Link href="" className="flex justify-center items-center w-60">
        <img src="/Donate.png" />
      </Link>
    </div>
  );
}
