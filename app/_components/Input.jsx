import { twMerge } from "tailwind-merge";

function Input({
  label,
  name,
  type = "text",
  disabled = false,
  value,
  id,
  tags,
  containerClassName,
  labelClassName,
  inputClassName,
  onChange,
  onRemoveTag,
  maxTags = 5, // Add max tags limit
  maxTagLength = 20,
}) {
  const canAddMoreTags = tags?.length < maxTags;

  return (
    <div className={twMerge("space-y-2", containerClassName)}>
      <label
        htmlFor={id}
        className={twMerge("text-lg font-semibold", labelClassName)}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          type={type}
          className={twMerge(
            "w-full resize-none rounded-md p-2 outline-none focus:ring-2 focus:ring-buttonBg disabled:bg-white",
            inputClassName,
          )}
          rows={8}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      ) : tags ? (
        <>
          <div className="relative">
            <input
              id={id}
              name={name}
              type={type}
              className={twMerge(
                "w-full rounded-md p-2 outline-none focus:ring-2 focus:ring-buttonBg disabled:bg-white",
                tags?.length > 0 ? "pr-24" : "",
                inputClassName,
              )}
              onChange={onChange}
              value={value}
              maxLength={maxTagLength} // Limit input length
              placeholder={
                !canAddMoreTags
                  ? `Max ${maxTags} tags allowed`
                  : `Enter tags (max ${maxTagLength} chars)`
              }
              disabled={disabled}
            />

            {/* Tags Display */}
            {tags && tags?.length > 0 && (
              <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center space-x-1">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex max-w-[150px] items-center truncate rounded-md bg-gray-200 px-2 py-1 text-sm"
                    title={tag} // Show full tag on hover
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => onRemoveTag(tag)}
                      className="ml-1 text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Tags Count */}
          <div className="mt-1 text-sm text-gray-500">
            {tags?.length} / {maxTags} tags
          </div>
        </>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={twMerge(
            "w-full rounded-md p-2 outline-none focus:ring-2 focus:ring-buttonBg disabled:bg-white",
            inputClassName,
          )}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      )}
    </div>
  );
}

export default Input;
