import { TFunction } from "i18next";

export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: {
    title: string;
    link: string; // Tambahkan properti link
    color?: string;
  }[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
