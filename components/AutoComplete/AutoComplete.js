import { Controller } from "react-hook-form";

import { memo, useEffect } from "react";
import Image from "next/image";

const AutoCompleteField = ({
  name,
  validator,
  errors,
  value,
  disabled,
  label,
  onChange,
  options,
  keyName,
  keyValue,
  control,
  placeholder,
  withBackWhite,
  loading,
  errorText,
  type,
}) => {
  useEffect(() => {
    if (type === "number") {
      let textfield = document.getElementsByTagName("input");
      textfield[1].setAttribute("type", "number");
    }
  }, [type]);

  return (
    <Controller
      control={control}
      name={name}
      rules={validator}
      render={({ field }) => {
        return (
          <>
            {label && (
              <label htmlFor={name} className="dateLabel">
                {label}
              </label>
            )}

            {/* <Select
              additionalProps={{
                id: name,
              }}
              loading={loading}
              options={options}
              values={value ? value : undefined}
              direction="rtl"
              labelField={keyName}
              valueField={keyValue}
              itemRenderer={({ item, itemIndex, props, state, methods }) => {
                return (
                  <div>
                    <p
                      onClick={() => methods.addItem(item)}
                      style={
                        state.values.find((x) => x[keyName] === item[keyName])
                          ? {
                              color: "#d9aa7d",
                            }
                          : {}
                      }
                    >
                      {item[keyName]}
                    </p>
                  </div>
                );
              }}
              noDataRenderer={(rr) => {
                return "لیست خالی می‌باشد";
              }}
              // clearable={value ? true : false}
              // dropdownHandleRenderer={({ props, state, methods }) => {
              //   return (
              //     <Image
              //       alt="arrow"
              //       width={10}
              //       height={1}
              //       src="/icons/other/Iconly-Light-outline-Arrow - Down 2.svg"
              //       className={state.dropdown ? styles.arrowBottomY : undefined}
              //       objectFit="contain"
              //       objectPosition="left"
              //       layout="responsive"
              //     />
              //   );
              // }}
              searchable
              searchBy={keyName}
              onChange={(values) => {
                onChange(values);
                field.onChange(values);
              }}
              className={
                disabled
                  ? styles.disableBack
                  : (errors && name && validator && errors[name]) ||
                    (errorText &&
                      (Array.isArray(errorText)
                        ? errorText.find((el) => el["propertyName"] === name)
                          ? true
                          : false
                        : true))
                  ? `${styles.errorRoot} ${styles.root}`
                  : withBackWhite
                  ? styles.whiteRoot
                  : styles.root
              }
              name={name}
              placeholder={placeholder}
              disabled={disabled}
            /> */}

            {((errors && name && validator && errors[name]) || errorText) && (
              <p className="help is-danger">
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
          </>
        );
      }}
    />
  );
};

export default memo(AutoCompleteField);
