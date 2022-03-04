import dynamic from "next/dynamic";
import exception from "utilities/exception";

import Alert from "components/Alert";
import { PaginationExample } from "components/Pagination/PaginationExample";
import { TextFieldExample } from "components/TextField/TextFieldExample";
import { MapExample } from "components/Map/MapExample";
import { DatePickerExample } from "components/DatePicker/DatePickerExample";
import { AlertExample } from "components/Alert/AlertExample";
import { LoaderExample } from "components/Loader/LoaderExample";

const MainWrapper = ({ Component, pageProps }) => {
  return (
    <>
      <Alert ref={exception.snackBarRef} />

      <LoaderExample />
      <PaginationExample />
      <TextFieldExample />
      <DatePickerExample />
      <AlertExample />
      <MapExample />

      <Component {...pageProps} />
    </>
  );
};

export default MainWrapper;
