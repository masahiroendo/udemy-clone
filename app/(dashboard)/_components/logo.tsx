import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image height={90} width={90} alt="logo" src="/logo.svg" />
    </Link>
  );
};
