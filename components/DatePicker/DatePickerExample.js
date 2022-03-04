import { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
const DatePicker = dynamic(() => import("components/DatePicker"), {
  ssr: false,
});

const DatePickerExample = () => {
  const [date, setDate] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <p>date picker : </p>
      <div className="mt-8">
        <DatePicker
          onChange={setDate}
          errors={errors}
          control={control}
          value={date}
          name="date"
        />
      </div>
    </>
  );
};

export { DatePickerExample };
