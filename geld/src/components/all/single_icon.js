import { useContext } from "react";
import * as icons from "react-icons/gr";
import { Context } from "@/app/layout";

export default function SingleIcon(props) {
  const { IconColor } = useContext(Context);
  const Icon = icons[props.icon_];

  return <Icon size={18} color={IconColor} />;
}
