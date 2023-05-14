import { FC } from "react";

interface ErrorProps {
  t: any;
}

const Error: FC<ErrorProps> = ({ t }) => (
  <div className="text-red-500 text-sm font-semibold text-center mt-7 mx-10">
    {t("error-fetching-data")}
  </div>
);

export default Error;
