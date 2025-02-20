import { FC } from "react";

interface CardExpertiseProps {
  title: string;
  description: string;
  icon: any; // Pastikan ini adalah React component, contoh: `icon: JSX.Element`
}

const CardExpertise: FC<CardExpertiseProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="space-y-4 rounded-md bg-[#FFFFFF] p-6">
      <div className="flex w-fit items-center justify-center rounded-lg bg-[#ffffff] p-2">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>

      <p className="text-xl font-semibold">{title}</p>

      <p>{description}</p>
    </div>
  );
};

export default CardExpertise;
