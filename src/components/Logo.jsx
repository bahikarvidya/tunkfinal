import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
        <Image
        src="/src/image/tunklogoremovebgpreview-3@2x.png"
        height="30"
        width="50"
        />
      </Link>
  );
};

export default Logo;
