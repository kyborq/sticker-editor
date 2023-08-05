import { TIcon, icons } from "../icons/icons";

type Props = {
  name: TIcon;
  className?: string;
};

export const Icon: React.FC<Props> = ({ name, className }) => {
  const IconComponent = icons[name];
  return <IconComponent className={className} />;
};
