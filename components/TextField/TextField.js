import { Controller } from "react-hook-form";
import { memo, useState } from "react";
import Image from "next/image";

const TextField = ({
  name,
  validator,
  errors,
  placeholder,
  value,
  label,
  onChange,
  defaultValue,
  type,
  leftAdornment,
  rightAdornment,
  multiline,
  disabled,
  ltr,
  control,
  maxChars,
  isPassword,
  errorText,
  maxRows,
  handlePressEnter,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const getClassName = () => {
    if (leftAdornment && !rightAdornment) {
      return "control has-icons-left";
    }
    if (isPassword && !rightAdornment) {
      return "control has-icons-left";
    }
    if (isPassword && rightAdornment) {
      return "control has-icons-left has-icons-right";
    }
    if (rightAdornment && !leftAdornment) {
      return "control has-icons-right";
    }
    if (rightAdornment && leftAdornment) {
      return "control has-icons-right has-icons-left";
    }
    if (!rightAdornment && !rightAdornment) {
      return "control";
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (handlePressEnter) {
        handlePressEnter();
      }
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={validator}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <div className="field">
            {label && (
              <label htmlFor={name} className="text-gray text-md ">
                {label}
              </label>
            )}
            {multiline ? (
              <textarea
                rows={maxRows ? 4 : 1}
                id={name}
                className={
                  (errors && name && validator && errors[name]) ||
                  (errorText &&
                    (Array.isArray(errorText)
                      ? errorText.find((el) => el["propertyName"] === name)
                        ? true
                        : false
                      : true))
                    ? `textarea `
                    : ` textarea`
                }
                disabled={disabled}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  onChange(e.target.value);
                }}
                name={name}
              ></textarea>
            ) : (
              <div className={getClassName()}>
                <input
                  dir={ltr ? "ltr" : "rtl"}
                  onKeyDown={handleKeyDown}
                  id={name}
                  disabled={disabled}
                  onChange={
                    maxChars
                      ? (e) => {
                          let t = e.target.value;

                          t = t.toString().slice(0, maxChars);
                          onChange(t);
                          field.onChange(t);
                        }
                      : (e) => {
                          onChange(e.target.value);
                          field.onChange(e.target.value);
                        }
                  }
                  className={
                    (errors && name && validator && errors[name]) ||
                    (errorText &&
                      (Array.isArray(errorText)
                        ? errorText.find((el) => el["propertyName"] === name)
                          ? true
                          : false
                        : true))
                      ? `mt-2 border-2 border-error text-gray-900 text-sm rounded-lg focus:ring-error focus:border-error block w-full p-2.5  `
                      : "mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  }
                  required
                  type={
                    type
                      ? type
                      : isPassword && showPassword
                      ? "password"
                      : "text"
                  }
                  placeholder={placeholder}
                  value={defaultValue && !value ? defaultValue : value}
                  name={name}
                  style={
                    isPassword
                      ? { paddingRight: 36 }
                      : rightAdornment || leftAdornment
                      ? { paddingRight: 32 }
                      : { paddingRight: "1rem", paddingLeft: "1rem" }
                  }
                />
                {leftAdornment && (
                  <span className="icon is-left">{leftAdornment}</span>
                )}

                {isPassword && (
                  <span
                    className="icon is-left is-clickable "
                    style={{ pointerEvents: "visible" }}
                  >
                    {!showPassword ? (
                      <Image
                        src="/icons/auth/Iconly-Light-Show.svg"
                        width={24}
                        height={24}
                        alt="show password"
                        onClick={() => {
                          setShowPassword(true);
                        }}
                      />
                    ) : (
                      <Image
                        src="/icons/auth/Iconly-Light-Hide.svg"
                        width={24}
                        height={24}
                        alt="show password"
                        onClick={() => {
                          setShowPassword(false);
                        }}
                      />
                    )}
                  </span>
                )}

                {rightAdornment && (
                  <span className="icon is-right">{rightAdornment}</span>
                )}
              </div>
            )}

            {((errors && name && validator && errors[name]) || errorText) && (
              <p className={`help text-error text-xs mt-1`}>
                {name && validator && errors[name]
                  ? errors[name].message
                  : errorText
                  ? Array.isArray(errorText)
                    ? errorText.find((el) => el["propertyName"] === name)
                        ?.errorMessage
                    : errorText
                  : false}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default memo(TextField);
