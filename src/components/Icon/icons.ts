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

/**
 * One icon of the design system's set. Only this package creates them, so the set stays closed; each icon is its own
 * export, so a bundle keeps only the icons an interface imports.
 */
export class IconGlyph {
  readonly #closedSet = true;
  readonly name: string;
  readonly component: LucideIcon;

  constructor(name: string, component: LucideIcon) {
    this.name = name;
    this.component = component;
  }
}

export const iconArrowLeft = /* @__PURE__ */ new IconGlyph("arrow-left", ArrowLeft);
export const iconArrowRight = /* @__PURE__ */ new IconGlyph("arrow-right", ArrowRight);
export const iconCheck = /* @__PURE__ */ new IconGlyph("check", Check);
export const iconChevronDown = /* @__PURE__ */ new IconGlyph("chevron-down", ChevronDown);
export const iconChevronRight = /* @__PURE__ */ new IconGlyph("chevron-right", ChevronRight);
export const iconCircleAlert = /* @__PURE__ */ new IconGlyph("circle-alert", CircleAlert);
export const iconCircleCheck = /* @__PURE__ */ new IconGlyph("circle-check", CircleCheck);
export const iconClock = /* @__PURE__ */ new IconGlyph("clock", Clock);
export const iconCopy = /* @__PURE__ */ new IconGlyph("copy", Copy);
export const iconDiagram = /* @__PURE__ */ new IconGlyph("diagram", Network);
export const iconExternalLink = /* @__PURE__ */ new IconGlyph("external-link", ExternalLink);
export const iconHistory = /* @__PURE__ */ new IconGlyph("history", History);
export const iconInfo = /* @__PURE__ */ new IconGlyph("info", Info);
export const iconLoader = /* @__PURE__ */ new IconGlyph("loader", LoaderCircle);
export const iconMessage = /* @__PURE__ */ new IconGlyph("message", MessageSquareText);
export const iconNotepad = /* @__PURE__ */ new IconGlyph("notepad", NotepadText);
export const iconPencil = /* @__PURE__ */ new IconGlyph("pencil", Pencil);
export const iconPlus = /* @__PURE__ */ new IconGlyph("plus", Plus);
export const iconRefresh = /* @__PURE__ */ new IconGlyph("refresh", RefreshCw);
export const iconSearch = /* @__PURE__ */ new IconGlyph("search", Search);
export const iconSend = /* @__PURE__ */ new IconGlyph("send", Send);
export const iconTriangleAlert = /* @__PURE__ */ new IconGlyph("triangle-alert", TriangleAlert);
export const iconX = /* @__PURE__ */ new IconGlyph("x", X);
