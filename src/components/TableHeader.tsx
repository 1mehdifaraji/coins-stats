import { FC } from "react";
import Text from "./common/Text";

interface TableHeaderProps {
  t: any;
}

const TableHeader: FC<TableHeaderProps> = ({ t }) => (
  <div className="flex justify-between items-center font-bold text-gray-500 text-xs border-b border-t transition-colors duration-100 border-gray-200 dark:border-gray-800 py-2">
    <div>
      <div className="flex items-center w-56 ml-5">
        <Text>#</Text>
        <Text className="ml-6">{t("name")}</Text>
      </div>
    </div>
    <div className="flex items-center justify-between w-full">
      <Text className="-translate-x-2">{t("24h-change")}</Text>
      <Text>{t("price")}</Text>
    </div>
  </div>
);

export default TableHeader;
