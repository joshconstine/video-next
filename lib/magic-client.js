import { Magic } from "magic-sdk";

export const createMagic = () => {
  return (
    typeof window !== "undefined" &&
    new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API)
  );
};
export const magic = createMagic();

console.log("magic setup");
