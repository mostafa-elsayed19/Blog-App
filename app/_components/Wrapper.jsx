import { twMerge } from "tailwind-merge";

function Wrapper({ children, className }) {
  return (
    <div className={twMerge("mx-auto max-w-6xl px-4 py-4 xl:px-0", className)}>
      {children}
    </div>
  );
}

export default Wrapper;
