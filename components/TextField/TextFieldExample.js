import { useState } from "react";
import TextField from "components/TextField/TextField";
import { useForm } from "react-hook-form";
import validate from "utilities/validation/validate";
import { Button } from "components/Button/Button";

const TextFieldExample = () => {
  const [value, setValue] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <p>TextField : </p>
      <div className="mt-8">
        <TextField
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          validator={{
            validate: {
              required: validate.required,
            },
          }}
          label="کد ملی"
          placeholder="لطفا کد ملی خود را وارد نمایید"
          errors={errors}
          control={control}
          name="NationalCode"
          type="number"
          maxChars={10}
        />
      </div>

      <div className="mt-4">
        <Button
          variant="outlined"
          // color="bg-error"
          // textColor="text-black"
          // hoverColor="hover:bg-secondary-main"
          onClick={handleSubmit(() => alert("gggg"))}
        >
          ثبت
        </Button>
      </div>
    </>
  );
};

export { TextFieldExample };
