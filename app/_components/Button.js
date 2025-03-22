import Link from "next/link";
import { twMerge } from "tailwind-merge";

function Button({ children, href, type, className, onClick }) {
  if (type === "link") {
    return (
      <Link
        href={href}
        className={twMerge(
          "mb-3 mr-3 self-end rounded-lg bg-buttonBg px-6 py-2 text-lightText",
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        "self-end rounded-lg bg-buttonBg px-6 py-2 text-lightText",
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
