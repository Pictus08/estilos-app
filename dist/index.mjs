// src/components/Button.tsx
import { forwardRef } from "react";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
var Button = forwardRef(
  ({ variant = "primary", className, children, disabled, ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
      secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
      outline: "border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-300",
      danger: "bg-danger text-white hover:bg-danger/90 focus:ring-danger",
      success: "bg-emerald-600 text-white hover:bg-emerald-600/90 focus:ring-emerald-600",
      icon: "p-2 h-9 w-9 bg-transparent hover:bg-slate-100 text-slate-700"
    };
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className: clsx(base, variants[variant], className),
        disabled,
        ...props,
        children
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
import { forwardRef as forwardRef2 } from "react";
import clsx2 from "clsx";
import { jsx as jsx2 } from "react/jsx-runtime";
var Input = forwardRef2(
  ({ className, type = "text", ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "input",
      {
        ref,
        type,
        className: clsx2(
          "block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary",
          className
        ),
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/TextArea.tsx
import { forwardRef as forwardRef3 } from "react";
import clsx3 from "clsx";
import { jsx as jsx3 } from "react/jsx-runtime";
var TextArea = forwardRef3(
  ({ className, rows = 4, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "textarea",
      {
        ref,
        rows,
        className: clsx3(
          "block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary",
          className
        ),
        ...props
      }
    );
  }
);
TextArea.displayName = "TextArea";

// src/components/Select.tsx
import { forwardRef as forwardRef4 } from "react";
import clsx4 from "clsx";
import { jsx as jsx4 } from "react/jsx-runtime";
var Select = forwardRef4(
  ({ className, options, children, multiple, ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "select",
      {
        ref,
        multiple,
        className: clsx4(
          "block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary",
          className
        ),
        ...props,
        children: options ? options.map((opt, idx) => /* @__PURE__ */ jsx4("option", { value: opt.value, children: opt.label }, idx)) : children
      }
    );
  }
);
Select.displayName = "Select";

// src/components/Checkbox.tsx
import { forwardRef as forwardRef5 } from "react";
import clsx5 from "clsx";
import { jsx as jsx5 } from "react/jsx-runtime";
var Checkbox = forwardRef5(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx5(
      "input",
      {
        ref,
        type: "checkbox",
        className: clsx5(
          "h-4 w-4 rounded border-slate-300 text-secondary focus:ring-secondary",
          className
        ),
        ...props
      }
    );
  }
);
Checkbox.displayName = "Checkbox";

// src/components/RadioGroup.tsx
import { useId } from "react";
import clsx6 from "clsx";
import { jsx as jsx6, jsxs } from "react/jsx-runtime";
function RadioGroup({ name, options, value, onChange, className }) {
  const groupId = useId();
  return /* @__PURE__ */ jsx6("div", { className: clsx6("flex flex-col gap-2", className), role: "radiogroup", children: options.map((opt) => {
    const id = `${groupId}-${opt.value}`;
    return /* @__PURE__ */ jsxs("label", { htmlFor: id, className: "inline-flex items-center gap-2", children: [
      /* @__PURE__ */ jsx6(
        "input",
        {
          id,
          type: "radio",
          name: name || groupId,
          value: String(opt.value),
          checked: value === opt.value,
          onChange: (e) => onChange?.(e.target.value),
          className: "h-4 w-4 border-slate-300 text-secondary focus:ring-secondary"
        }
      ),
      /* @__PURE__ */ jsx6("span", { className: "text-sm text-slate-700", children: opt.label })
    ] }, opt.value);
  }) });
}

// src/components/ToggleSwitch.tsx
import { forwardRef as forwardRef6 } from "react";
import clsx7 from "clsx";
import { jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var ToggleSwitch = forwardRef6(
  ({ className, checked, onChange, ...props }, ref) => {
    return /* @__PURE__ */ jsxs2("label", { className: clsx7("inline-flex items-center cursor-pointer", className), children: [
      /* @__PURE__ */ jsx7(
        "input",
        {
          ref,
          type: "checkbox",
          className: "sr-only peer",
          checked,
          onChange,
          ...props
        }
      ),
      /* @__PURE__ */ jsx7("div", { className: "h-5 w-9 rounded-full bg-slate-300 peer-checked:bg-secondary relative transition-colors", children: /* @__PURE__ */ jsx7("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 translate-x-0 peer-checked:translate-x-5 transition-transform rounded-full bg-white shadow" }) })
    ] });
  }
);
ToggleSwitch.displayName = "ToggleSwitch";

// src/components/DatePicker.tsx
import { forwardRef as forwardRef7 } from "react";
import clsx8 from "clsx";
import { jsx as jsx8 } from "react/jsx-runtime";
var DatePicker = forwardRef7(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
    "input",
    {
      ref,
      type: "date",
      className: clsx8(
        "block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary",
        className
      ),
      ...props
    }
  )
);
DatePicker.displayName = "DatePicker";

// src/components/TimePicker.tsx
import { forwardRef as forwardRef8 } from "react";
import clsx9 from "clsx";
import { jsx as jsx9 } from "react/jsx-runtime";
var TimePicker = forwardRef8(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx9(
    "input",
    {
      ref,
      type: "time",
      className: clsx9(
        "block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary",
        className
      ),
      ...props
    }
  )
);
TimePicker.displayName = "TimePicker";

// src/components/FileUpload.tsx
import { forwardRef as forwardRef9 } from "react";
import clsx10 from "clsx";
import { jsx as jsx10 } from "react/jsx-runtime";
var FileUpload = forwardRef9(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx10(
    "input",
    {
      ref,
      type: "file",
      className: clsx10(
        "block w-full text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-white hover:file:bg-secondary/90",
        className
      ),
      ...props
    }
  )
);
FileUpload.displayName = "FileUpload";

// src/components/Alert.tsx
import clsx11 from "clsx";
import { jsx as jsx11 } from "react/jsx-runtime";
function Alert({ variant = "info", children, className }) {
  const styles = {
    info: "bg-sky-50 text-sky-800 border-sky-200",
    success: "bg-emerald-50 text-emerald-800 border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border-amber-200",
    error: "bg-danger/10 text-danger border-danger/30"
  };
  return /* @__PURE__ */ jsx11("div", { className: clsx11("rounded-md border px-4 py-3 text-sm", styles[variant], className), children });
}

// src/components/Toast.tsx
import clsx12 from "clsx";
import { jsx as jsx12 } from "react/jsx-runtime";
function Toast({ children, className }) {
  return /* @__PURE__ */ jsx12("div", { className: clsx12("fixed bottom-4 right-4 rounded-md bg-slate-800 px-4 py-2 text-white shadow-lg", className), children });
}

// src/components/Spinner.tsx
import clsx13 from "clsx";
import { jsx as jsx13, jsxs as jsxs3 } from "react/jsx-runtime";
function Spinner({ size = 20, className }) {
  const style = { width: size, height: size };
  return /* @__PURE__ */ jsxs3("svg", { className: clsx13("animate-spin text-secondary", className), style, viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ jsx13("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
    /* @__PURE__ */ jsx13("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" })
  ] });
}

// src/components/Skeleton.tsx
import clsx14 from "clsx";
import { jsx as jsx14 } from "react/jsx-runtime";
function Skeleton({ className }) {
  return /* @__PURE__ */ jsx14("div", { className: clsx14("animate-pulse rounded-md bg-slate-200", className) });
}

// src/components/ConfirmDialog.tsx
import clsx15 from "clsx";
import { jsx as jsx15, jsxs as jsxs4 } from "react/jsx-runtime";
function ConfirmDialog({
  open,
  title = "Confirmar",
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
  className
}) {
  if (!open) return null;
  return /* @__PURE__ */ jsxs4("div", { className: clsx15("fixed inset-0 z-50 flex items-center justify-center", className), children: [
    /* @__PURE__ */ jsx15("div", { className: "absolute inset-0 bg-black/40", onClick: onCancel }),
    /* @__PURE__ */ jsxs4("div", { className: "relative z-10 w-full max-w-sm rounded-lg bg-white p-4 shadow-lg", children: [
      title && /* @__PURE__ */ jsx15("h3", { className: "mb-2 text-base font-semibold text-slate-900", children: title }),
      description && /* @__PURE__ */ jsx15("div", { className: "mb-4 text-sm text-slate-600", children: description }),
      /* @__PURE__ */ jsxs4("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsx15(Button, { variant: "outline", onClick: onCancel, children: cancelText }),
        /* @__PURE__ */ jsx15(Button, { variant: "danger", onClick: onConfirm, children: confirmText })
      ] })
    ] })
  ] });
}

// src/components/Navbar.tsx
import clsx16 from "clsx";
import { jsx as jsx16, jsxs as jsxs5 } from "react/jsx-runtime";
function Navbar({ left, right, className }) {
  return /* @__PURE__ */ jsxs5("header", { className: clsx16("flex items-center justify-between border-b bg-white px-4 py-3 shadow-sm", className), children: [
    /* @__PURE__ */ jsx16("div", { className: "flex items-center gap-2", children: left }),
    /* @__PURE__ */ jsx16("div", { className: "flex items-center gap-2", children: right })
  ] });
}

// src/components/Sidebar.tsx
import clsx17 from "clsx";
import { jsx as jsx17 } from "react/jsx-runtime";
function Sidebar({ children, className }) {
  return /* @__PURE__ */ jsx17("aside", { className: clsx17("w-64 border-r bg-white p-4", className), children });
}

// src/components/Breadcrumbs.tsx
import { jsx as jsx18, jsxs as jsxs6 } from "react/jsx-runtime";
function Breadcrumbs({ items, separator = "/" }) {
  return /* @__PURE__ */ jsx18("nav", { "aria-label": "Breadcrumb", className: "text-sm text-slate-600", children: /* @__PURE__ */ jsx18("ol", { className: "flex items-center gap-2", children: items.map((item, i) => /* @__PURE__ */ jsxs6("li", { className: "flex items-center gap-2", children: [
    item.href ? /* @__PURE__ */ jsx18("a", { href: item.href, className: "hover:text-slate-900", children: item.label }) : /* @__PURE__ */ jsx18("span", { className: "text-slate-900", children: item.label }),
    i < items.length - 1 && /* @__PURE__ */ jsx18("span", { className: "opacity-60", children: separator })
  ] }, i)) }) });
}

// src/components/Card.tsx
import clsx18 from "clsx";
import { jsx as jsx19, jsxs as jsxs7 } from "react/jsx-runtime";
function Card({ title, children, className }) {
  return /* @__PURE__ */ jsxs7("div", { className: clsx18("rounded-lg border bg-white p-4 shadow-sm", className), children: [
    title && /* @__PURE__ */ jsx19("h3", { className: "mb-2 text-base font-semibold text-slate-900", children: title }),
    /* @__PURE__ */ jsx19("div", { children })
  ] });
}

// src/components/Modal.tsx
import clsx19 from "clsx";
import { jsx as jsx20, jsxs as jsxs8 } from "react/jsx-runtime";
function Modal({ open, onClose, children, className }) {
  if (!open) return null;
  return /* @__PURE__ */ jsxs8("div", { className: clsx19("fixed inset-0 z-50 flex items-center justify-center", className), children: [
    /* @__PURE__ */ jsx20("div", { className: "absolute inset-0 bg-black/40", onClick: onClose }),
    /* @__PURE__ */ jsx20("div", { className: "relative z-10 w-full max-w-lg rounded-lg bg-white p-4 shadow-lg", children })
  ] });
}

// src/components/Drawer.tsx
import clsx20 from "clsx";
import { jsx as jsx21, jsxs as jsxs9 } from "react/jsx-runtime";
function Drawer({ open, side = "right", onClose, children, className }) {
  if (!open) return null;
  return /* @__PURE__ */ jsxs9("div", { className: clsx20("fixed inset-0 z-50", className), children: [
    /* @__PURE__ */ jsx21("div", { className: "absolute inset-0 bg-black/40", onClick: onClose }),
    /* @__PURE__ */ jsx21(
      "div",
      {
        className: clsx20(
          "absolute top-0 h-full w-80 bg-white shadow-lg transition-transform",
          side === "right" ? "right-0" : "left-0"
        ),
        children
      }
    )
  ] });
}

// src/components/Tabs.tsx
import { useState } from "react";
import clsx21 from "clsx";
import { jsx as jsx22, jsxs as jsxs10 } from "react/jsx-runtime";
function Tabs({ items, defaultIndex = 0, className }) {
  const [index, setIndex] = useState(defaultIndex);
  return /* @__PURE__ */ jsxs10("div", { className, children: [
    /* @__PURE__ */ jsx22("div", { className: "flex gap-2 border-b", children: items.map((it, i) => /* @__PURE__ */ jsx22(
      "button",
      {
        className: clsx21(
          "px-3 py-2 text-sm",
          i === index ? "border-b-2 border-secondary text-secondary" : "text-slate-600 hover:text-slate-900"
        ),
        onClick: () => setIndex(i),
        children: it.label
      },
      i
    )) }),
    /* @__PURE__ */ jsx22("div", { className: "pt-3", children: items[index]?.content })
  ] });
}

// src/components/Accordion.tsx
import { useState as useState2 } from "react";
import clsx22 from "clsx";
import { jsx as jsx23, jsxs as jsxs11 } from "react/jsx-runtime";
function Accordion({ items, className }) {
  const [open, setOpen] = useState2(null);
  return /* @__PURE__ */ jsx23("div", { className: clsx22("divide-y rounded-md border", className), children: items.map((item, i) => /* @__PURE__ */ jsxs11("div", { children: [
    /* @__PURE__ */ jsxs11(
      "button",
      {
        className: "flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium hover:bg-slate-50",
        onClick: () => setOpen(open === i ? null : i),
        children: [
          item.title,
          /* @__PURE__ */ jsx23("span", { className: "text-slate-400", children: open === i ? "\u2212" : "+" })
        ]
      }
    ),
    open === i && /* @__PURE__ */ jsx23("div", { className: "px-4 py-3 text-sm text-slate-700", children: item.content })
  ] }, i)) });
}

// src/components/Table.tsx
import clsx23 from "clsx";
import { jsx as jsx24 } from "react/jsx-runtime";
function Table({ children, className }) {
  return /* @__PURE__ */ jsx24("div", { className: clsx23("overflow-x-auto", className), children: /* @__PURE__ */ jsx24("table", { className: "min-w-full divide-y divide-slate-200", children }) });
}
function THead({ children }) {
  return /* @__PURE__ */ jsx24("thead", { className: "bg-slate-50 text-left text-sm text-slate-600", children });
}
function TBody({ children }) {
  return /* @__PURE__ */ jsx24("tbody", { className: "divide-y divide-slate-200 text-sm text-slate-800", children });
}
function TR({ children }) {
  return /* @__PURE__ */ jsx24("tr", { className: "hover:bg-slate-50", children });
}
function TH({ children }) {
  return /* @__PURE__ */ jsx24("th", { className: "px-4 py-2 font-semibold", children });
}
function TD({ children }) {
  return /* @__PURE__ */ jsx24("td", { className: "px-4 py-2", children });
}

// src/components/TableFilterBar.tsx
import clsx24 from "clsx";
import { jsx as jsx25, jsxs as jsxs12 } from "react/jsx-runtime";
function TableFilterBar({ value, onChange, children, className }) {
  return /* @__PURE__ */ jsxs12("div", { className: clsx24("mb-3 flex items-center justify-between gap-2", className), children: [
    /* @__PURE__ */ jsx25("div", { className: "flex-1", children: /* @__PURE__ */ jsx25(
      Input,
      {
        placeholder: "Buscar...",
        value,
        onChange: (e) => onChange?.(e.target.value),
        className: "w-full"
      }
    ) }),
    /* @__PURE__ */ jsx25("div", { className: "flex items-center gap-2", children })
  ] });
}

// src/components/Pagination.tsx
import clsx25 from "clsx";
import { jsx as jsx26, jsxs as jsxs13 } from "react/jsx-runtime";
function Pagination({ page, totalPages, onChange, className }) {
  const canPrev = page > 1;
  const canNext = page < totalPages;
  return /* @__PURE__ */ jsxs13("div", { className: clsx25("flex items-center gap-2", className), children: [
    /* @__PURE__ */ jsx26(
      "button",
      {
        className: clsx25(
          "rounded-md border px-3 py-1 text-sm",
          canPrev ? "hover:bg-slate-50" : "opacity-50 cursor-not-allowed"
        ),
        onClick: () => canPrev && onChange?.(page - 1),
        children: "Anterior"
      }
    ),
    /* @__PURE__ */ jsxs13("span", { className: "text-sm text-slate-600", children: [
      page,
      " / ",
      totalPages
    ] }),
    /* @__PURE__ */ jsx26(
      "button",
      {
        className: clsx25(
          "rounded-md border px-3 py-1 text-sm",
          canNext ? "hover:bg-slate-50" : "opacity-50 cursor-not-allowed"
        ),
        onClick: () => canNext && onChange?.(page + 1),
        children: "Siguiente"
      }
    )
  ] });
}

// src/components/Badge.tsx
import clsx26 from "clsx";
import { jsx as jsx27 } from "react/jsx-runtime";
function Badge({ children, variant = "default", className }) {
  const styles = {
    default: "bg-slate-100 text-slate-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-danger/10 text-danger",
    info: "bg-sky-100 text-sky-700"
  };
  return /* @__PURE__ */ jsx27("span", { className: clsx26("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", styles[variant], className), children });
}

// src/components/StatsCard.tsx
import clsx27 from "clsx";
import { jsx as jsx28, jsxs as jsxs14 } from "react/jsx-runtime";
function StatsCard({ label, value, icon, className }) {
  return /* @__PURE__ */ jsxs14("div", { className: clsx27("flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm", className), children: [
    /* @__PURE__ */ jsxs14("div", { children: [
      /* @__PURE__ */ jsx28("div", { className: "text-sm text-slate-600", children: label }),
      /* @__PURE__ */ jsx28("div", { className: "text-2xl font-semibold text-slate-900", children: value })
    ] }),
    icon && /* @__PURE__ */ jsx28("div", { className: "text-secondary", children: icon })
  ] });
}

// src/components/Chart.tsx
import clsx28 from "clsx";
import { jsx as jsx29 } from "react/jsx-runtime";
function Chart({ children, className }) {
  return /* @__PURE__ */ jsx29("div", { className: clsx28("rounded-lg border bg-white p-4", className), children });
}

// src/components/SearchInput.tsx
import { forwardRef as forwardRef10 } from "react";
import clsx29 from "clsx";
import { jsx as jsx30, jsxs as jsxs15 } from "react/jsx-runtime";
var SearchInput = forwardRef10(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxs15("div", { className: clsx29("relative", className), children: [
      /* @__PURE__ */ jsx30(
        "svg",
        {
          className: "pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-400",
          width: "16",
          height: "16",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /* @__PURE__ */ jsx30(
            "path",
            {
              fillRule: "evenodd",
              d: "M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z",
              clipRule: "evenodd"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx30(
        "input",
        {
          ref,
          type: "search",
          className: "block w-full rounded-md border border-slate-300 bg-white py-2 pl-8 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary",
          ...props
        }
      )
    ] });
  }
);
SearchInput.displayName = "SearchInput";

// src/components/Stepper.tsx
import clsx30 from "clsx";
import { jsx as jsx31, jsxs as jsxs16 } from "react/jsx-runtime";
function Stepper({ steps, active, className }) {
  return /* @__PURE__ */ jsx31("ol", { className: clsx30("flex items-center gap-4", className), children: steps.map((label, i) => {
    const status = i < active ? "done" : i === active ? "active" : "todo";
    return /* @__PURE__ */ jsxs16("li", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx31(
        "span",
        {
          className: clsx30(
            "flex h-6 w-6 items-center justify-center rounded-full text-xs",
            status === "done" && "bg-secondary text-white",
            status === "active" && "border border-secondary text-secondary",
            status === "todo" && "border border-slate-300 text-slate-500"
          ),
          children: i + 1
        }
      ),
      /* @__PURE__ */ jsx31("span", { className: "text-sm text-slate-700", children: label })
    ] }, i);
  }) });
}

// src/components/EmptyState.tsx
import clsx31 from "clsx";
import { jsx as jsx32, jsxs as jsxs17 } from "react/jsx-runtime";
function EmptyState({ title = "Sin datos", description, action, className }) {
  return /* @__PURE__ */ jsxs17("div", { className: clsx31("flex flex-col items-center justify-center rounded-lg border bg-white p-8 text-center", className), children: [
    /* @__PURE__ */ jsx32("div", { className: "mb-2 text-lg font-semibold text-slate-900", children: title }),
    description && /* @__PURE__ */ jsx32("div", { className: "mb-4 text-sm text-slate-600", children: description }),
    action
  ] });
}

// src/components/Avatar.tsx
import clsx32 from "clsx";
import { jsx as jsx33 } from "react/jsx-runtime";
function initials(name) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (first + last).toUpperCase();
}
function Avatar({ src, alt, name, size = 40, className }) {
  const style = { width: size, height: size };
  if (src) {
    return /* @__PURE__ */ jsx33("img", { src, alt: alt || name || "avatar", className: clsx32("rounded-full object-cover", className), style });
  }
  return /* @__PURE__ */ jsx33("div", { className: clsx32("flex items-center justify-center rounded-full bg-slate-200 text-slate-700", className), style, children: /* @__PURE__ */ jsx33("span", { className: "text-sm font-medium", children: initials(name) }) });
}
export {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Chart,
  Checkbox,
  ConfirmDialog,
  DatePicker,
  Drawer,
  EmptyState,
  FileUpload,
  Input,
  Modal,
  Navbar,
  Pagination,
  RadioGroup,
  SearchInput,
  Select,
  Sidebar,
  Skeleton,
  Spinner,
  StatsCard,
  Stepper,
  TBody,
  TD,
  TH,
  THead,
  TR,
  Table,
  TableFilterBar,
  Tabs,
  TextArea,
  TimePicker,
  Toast,
  ToggleSwitch
};
