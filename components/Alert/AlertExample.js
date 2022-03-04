import { Button } from "components/Button/Button";
import exception from "utilities/exception";

const AlertExample = () => {
  return (
    <>
      <p>alert : </p>

      <div className="mt-4">
        <Button
          variant="outlined"
          onClick={() =>
            exception.message([
              { type: "error", title: "خطایی رخ داده است" },
              { type: "success", title: "با موفقیت انجام شد" },
            ])
          }
        >
          ایجاد آلرت
        </Button>
      </div>
    </>
  );
};

export { AlertExample };
