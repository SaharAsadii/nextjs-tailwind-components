import { Controller } from "react-hook-form";
import Image from "next/image";
import moment from "moment-jalaali";
import { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const DtPicker = dynamic(() => import("react-calendar-datetime-picker"), {
  ssr: false,
});

import "react-calendar-datetime-picker/dist/index.css";

const DatePicker = ({
  name,
  validator,
  errors,
  value,
  label,
  onChange,
  defaultValue,
  disabled,
  control,
  maximumDateToday,
  placeholder,
  withIcon,
  maxDate,
}) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleChange = (e, field) => {
    if (e) {
      setSelectedDay(e);
      let t = moment(`${e.year}/${e.month}/${e.day}`, "jYYYY/jM/jD");
      t = t._i.split("-");
      let s = `${t[0]}/${t[1]}/${t[2]}`;

      onChange(s);
      field.onChange(s);
    }
  };

  useEffect(() => {
    if (value) {
      let temp = moment(value).format("jYYYY/jM/jD");
      temp = temp.split("/");
      setSelectedDay({
        year: parseInt(temp[0]),
        month: parseInt(temp[1]),
        day: parseInt(temp[2]),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <Controller
      control={control}
      name={name}
      rules={validator}
      defaultValue={defaultValue}
      render={({ field }) => {
        return (
          <div className="w-full">
            {label && <p className="dateLabel">{label}</p>}
            <div
              className="datePickerDiv"
              style={{
                borderColor:
                  errors && name && validator && errors[name] ? "red" : "",
              }}
            >
              <DtPicker
                isDisabled={disabled}
                placeholder={placeholder}
                maxDate={
                  maximumDateToday
                    ? {
                        year: parseInt(
                          moment().format("jYYYY/jM/jD").split("/")[0]
                        ),
                        month: parseInt(
                          moment().format("jYYYY/jM/jD").split("/")[1]
                        ),
                        day: parseInt(
                          moment().format("jYYYY/jM/jD").split("/")[2]
                        ),
                      }
                    : maxDate
                    ? { year: 1383, month: 12, day: 1 }
                    : undefined
                }
                value={selectedDay}
                onChange={(e) => handleChange(e, field)}
                local="fa"
                showWeekend
              />
            </div>

            {errors && name && validator && errors[name] && (
              <p className="help is-danger">
                {name && validator && errors[name]
                  ? errors[name].message
                  : false}
              </p>
            )}
          </div>
        );
      }}
    />
  );
};

export default memo(DatePicker);
