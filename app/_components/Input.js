import { twMerge } from "tailwind-merge";

function Input({
  label,
  name,
  type,
  id,
  containerClassName,
  labelClassName,
  inputClassName,
}) {
  return (
    <div className={twMerge("space-y-2", containerClassName)}>
      <label
        htmlFor={id}
        className={twMerge("text-lg font-semibold", labelClassName)}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={twMerge(
          "w-full rounded-md p-2 outline-none focus:ring-2 focus:ring-buttonBg",
          inputClassName,
        )}
      />
    </div>
  );
}

export default Input;
