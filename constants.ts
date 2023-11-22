import { Text, ImageIcon, MessageSquare } from "lucide-react";

export const MAX_FREE_COUNTS = 1;

export const tools = [
  {
    label: 'Crear texto',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Crear imágenes',
    icon: ImageIcon,
    color: "text-[#00f8cb]",
    bgColor: "bg-[#00c7df]/10",
    href: '/image',
  },
  {
    label: 'Etiquetas',
    icon: Text,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/labels',
  },
];
