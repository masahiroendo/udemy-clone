import { LucideIcon } from "lucide-react";

import { IconBadge } from "@/components/icon-badge";

export const InfoCard = ({
  icon: Icon,
  variant,
  label,
  numberOfItems,
}: {
  numberOfItems: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
}) => {
  return (
    <div className="border rounde-md flex items-center gap-x-2 p-3">
      <IconBadge icon={Icon} variant={variant} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
};
