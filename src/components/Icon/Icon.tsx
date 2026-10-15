import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  Clock,
  Copy,
  ExternalLink,
  History,
  Info,
  LoaderCircle,
  type LucideIcon,
  MessageSquareText,
  Network,
  NotepadText,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Send,
  TriangleAlert,
  X,
} from "lucide-react";
import { cx } from "../../internal/cx";

// The icons the design system allows, imported one by one so that a bundle keeps only those it uses.
const icons = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "circle-alert": CircleAlert,
  "circle-check": CircleCheck,
  clock: Clock,
  copy: Copy,
  diagram: Network,
  "external-link": ExternalLink,
  history: History,
  info: Info,
  loader: LoaderCircle,
  message: MessageSquareText,
  notepad: NotepadText,
  pencil: Pencil,
  plus: Plus,
  refresh: RefreshCw,
  search: Search,
  send: Send,
  "triangle-alert": TriangleAlert,
  x: X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
export type IconSize = "sm" | "md" | "lg";

/** Every icon name the design system allows. */
export const iconNames = Object.keys(icons) as readonly IconName[];

export interface IconProps {
  name: IconName;
  /** sm 14, md 16, lg 20. */
  size?: IconSize;
  /** Names the icon for assistive technologies; without it, the icon is decorative and hidden from them. */
  label?: string;
  className?: string;
}

export function Icon({ name, size = "md", label, className }: IconProps) {
  const Glyph = icons[name];
  const naming = label === undefined ? { "aria-hidden": true } : { role: "img", "aria-label": label };
  return <Glyph className={cx("cpds-icon", `cpds-icon--${size}`, className)} strokeWidth={1.75} focusable="false" data-icon={name} {...naming} />;
}
