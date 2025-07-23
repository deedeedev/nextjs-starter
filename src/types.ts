import { LucideProps } from "lucide-react";

export interface NavigationLink {
  label: string;
  href?: string;
  submenu: boolean;
  type: "simple" | "description" | "icon";
  items?: {
    href: string;
    label: string;
    description?: string;
    icon?: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  }[];
}
