import { useState } from "react";
import Link from "next/link";

interface Props {
  href: string;
  currentPage: string;
}

const NavButton: React.FC<Props> = ({ href, currentPage }) => {
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(currentPage === href);

  const handleClick = () => {
    setIsCurrentPage(true);
  };

  const buttonStyle =
    "h-10 w-10 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors duration-300";
  const filledStyle = isCurrentPage ? "bg-black text-white" : "";
  const emptyStyle = isCurrentPage ? "" : "bg-transparent";

  return (
    <Link href={href} passHref>
      <a>
        <button
          className={`${buttonStyle} ${filledStyle} ${emptyStyle}`}
          onClick={handleClick}
        ></button>
      </a>
    </Link>
  );
};

export default NavButton;
