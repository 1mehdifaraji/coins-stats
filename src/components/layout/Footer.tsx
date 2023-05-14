import { FC } from "react";
import Text from "../common/Text";

const Footer: FC = () => (
  <div className="m-10 text-sm text-center text-slate-500">
    <Text>Copyright © {new Date().getFullYear()} Coins Stats</Text>
    <Text>All rights reserved</Text>
    <div className="mt-2">
      Developer{" "}
      <a
        className="font-bold underline text-blue-400"
        target="_blank"
        rel="noreferrer"
        href="https://mehdifaraji.ir"
      >
        Mehdi Faraji
      </a>
    </div>
  </div>
);

export default Footer;
