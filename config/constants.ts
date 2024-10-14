import assert from "assert";

assert(process.env.NEXT_PUBLIC_API_URL, "Please provide <NEXT_PUBLIC_API_URL> via .env");
export const API_URL: string = process.env.NEXT_PUBLIC_API_URL;