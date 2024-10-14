import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>This is a protected page</p>
      <UserButton />
    </div>
  );
}
