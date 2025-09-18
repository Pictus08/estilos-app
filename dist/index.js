"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  Alert: () => Alert,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Breadcrumbs: () => Breadcrumbs,
  Button: () => Button,
  Card: () => Card,
  Chart: () => Chart,
  Checkbox: () => Checkbox,
  ConfirmDialog: () => ConfirmDialog,
  DatePicker: () => DatePicker,
  Drawer: () => Drawer,
  EmptyState: () => EmptyState,
  FileUpload: () => FileUpload,
  Input: () => Input,
  Modal: () => Modal,
  Navbar: () => Navbar,
  Pagination: () => Pagination,
  RadioGroup: () => RadioGroup,
  SearchInput: () => SearchInput,
  Select: () => Select,
  Sidebar: () => Sidebar,
  Skeleton: () => Skeleton,
  Spinner: () => Spinner,
  StatsCard: () => StatsCard,
  Stepper: () => Stepper,
  TBody: () => TBody,
  TD: () => TD,
  TH: () => TH,
  THead: () => THead,
  TR: () => TR,
  Table: () => Table,
  TableFilterBar: () => TableFilterBar,
  Tabs: () => Tabs,
  TextArea: () => TextArea,
  TimePicker: () => TimePicker,
  Toast: () => Toast,
  ToggleSwitch: () => ToggleSwitch
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react = require("react");
var import_clsx = __toESM(require("clsx"));
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        ref,
        className: (0, import_clsx.default)(base, variants[variant], className),
        disabled,
        ...props,
        children
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
var import_react2 = require("react");
var import_clsx2 = __toESM(require("clsx"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = (0, import_react2.forwardRef)(
  ({ className, type = "text", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        ref,
        type,
        className: (0, import_clsx2.default)(
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
var import_react3 = require("react");
var import_clsx3 = __toESM(require("clsx"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var TextArea = (0, import_react3.forwardRef)(
  ({ className, rows = 4, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "textarea",
      {
        ref,
        rows,
        className: (0, import_clsx3.default)(
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
var import_react4 = require("react");
var import_clsx4 = __toESM(require("clsx"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var Select = (0, import_react4.forwardRef)(
  ({ className, options, children, multiple, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "select",
      {
        ref,
        multiple,
        className: (0, import_clsx4.default)(
          "block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary",
          className
        ),
        ...props,
        children: options ? options.map((opt, idx) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: opt.value, children: opt.label }, idx)) : children
      }
    );
  }
);
Select.displayName = "Select";

// src/components/Checkbox.tsx
var import_react5 = require("react");
var import_clsx5 = __toESM(require("clsx"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var Checkbox = (0, import_react5.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "input",
      {
        ref,
        type: "checkbox",
        className: (0, import_clsx5.default)(
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
var import_react6 = require("react");
var import_clsx6 = __toESM(require("clsx"));
var import_jsx_runtime6 = require("react/jsx-runtime");
function RadioGroup({ name, options, value, onChange, className }) {
  const groupId = (0, import_react6.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: (0, import_clsx6.default)("flex flex-col gap-2", className), role: "radiogroup", children: options.map((opt) => {
    const id = `${groupId}-${opt.value}`;
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { htmlFor: id, className: "inline-flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-sm text-slate-700", children: opt.label })
    ] }, opt.value);
  }) });
}

// src/components/ToggleSwitch.tsx
var import_react7 = require("react");
var import_clsx7 = __toESM(require("clsx"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var ToggleSwitch = (0, import_react7.forwardRef)(
  ({ className, checked, onChange, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: (0, import_clsx7.default)("inline-flex items-center cursor-pointer", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "h-5 w-9 rounded-full bg-slate-300 peer-checked:bg-secondary relative transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 translate-x-0 peer-checked:translate-x-5 transition-transform rounded-full bg-white shadow" }) })
    ] });
  }
);
ToggleSwitch.displayName = "ToggleSwitch";

// src/components/DatePicker.tsx
var import_react8 = require("react");
var import_clsx8 = __toESM(require("clsx"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var DatePicker = (0, import_react8.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "input",
    {
      ref,
      type: "date",
      className: (0, import_clsx8.default)(
        "block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary",
        className
      ),
      ...props
    }
  )
);
DatePicker.displayName = "DatePicker";

// src/components/TimePicker.tsx
var import_react9 = require("react");
var import_clsx9 = __toESM(require("clsx"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var TimePicker = (0, import_react9.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "input",
    {
      ref,
      type: "time",
      className: (0, import_clsx9.default)(
        "block rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary",
        className
      ),
      ...props
    }
  )
);
TimePicker.displayName = "TimePicker";

// src/components/FileUpload.tsx
var import_react10 = require("react");
var import_clsx10 = __toESM(require("clsx"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var FileUpload = (0, import_react10.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "input",
    {
      ref,
      type: "file",
      className: (0, import_clsx10.default)(
        "block w-full text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-4 file:py-2 file:text-white hover:file:bg-secondary/90",
        className
      ),
      ...props
    }
  )
);
FileUpload.displayName = "FileUpload";

// src/components/Alert.tsx
var import_clsx11 = __toESM(require("clsx"));
var import_jsx_runtime11 = require("react/jsx-runtime");
function Alert({ variant = "info", children, className }) {
  const styles = {
    info: "bg-sky-50 text-sky-800 border-sky-200",
    success: "bg-emerald-50 text-emerald-800 border-emerald-200",
    warning: "bg-amber-50 text-amber-800 border-amber-200",
    error: "bg-danger/10 text-danger border-danger/30"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: (0, import_clsx11.default)("rounded-md border px-4 py-3 text-sm", styles[variant], className), children });
}

// src/components/Toast.tsx
var import_clsx12 = __toESM(require("clsx"));
var import_jsx_runtime12 = require("react/jsx-runtime");
function Toast({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: (0, import_clsx12.default)("fixed bottom-4 right-4 rounded-md bg-slate-800 px-4 py-2 text-white shadow-lg", className), children });
}

// src/components/Spinner.tsx
var import_clsx13 = __toESM(require("clsx"));
var import_jsx_runtime13 = require("react/jsx-runtime");
function Spinner({ size = 20, className }) {
  const style = { width: size, height: size };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("svg", { className: (0, import_clsx13.default)("animate-spin text-secondary", className), style, viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" })
  ] });
}

// src/components/Skeleton.tsx
var import_clsx14 = __toESM(require("clsx"));
var import_jsx_runtime14 = require("react/jsx-runtime");
function Skeleton({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: (0, import_clsx14.default)("animate-pulse rounded-md bg-slate-200", className) });
}

// src/components/ConfirmDialog.tsx
var import_clsx15 = __toESM(require("clsx"));
var import_jsx_runtime15 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: (0, import_clsx15.default)("fixed inset-0 z-50 flex items-center justify-center", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "absolute inset-0 bg-black/40", onClick: onCancel }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "relative z-10 w-full max-w-sm rounded-lg bg-white p-4 shadow-lg", children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "mb-2 text-base font-semibold text-slate-900", children: title }),
      description && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mb-4 text-sm text-slate-600", children: description }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { variant: "outline", onClick: onCancel, children: cancelText }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Button, { variant: "danger", onClick: onConfirm, children: confirmText })
      ] })
    ] })
  ] });
}

// src/components/Navbar.tsx
var import_clsx16 = __toESM(require("clsx"));
var import_jsx_runtime16 = require("react/jsx-runtime");
function Navbar({ left, right, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("header", { className: (0, import_clsx16.default)("flex items-center justify-between border-b bg-white px-4 py-3 shadow-sm", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center gap-2", children: left }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex items-center gap-2", children: right })
  ] });
}

// src/components/Sidebar.tsx
var import_clsx17 = __toESM(require("clsx"));
var import_jsx_runtime17 = require("react/jsx-runtime");
function Sidebar({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("aside", { className: (0, import_clsx17.default)("w-64 border-r bg-white p-4", className), children });
}

// src/components/Breadcrumbs.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function Breadcrumbs({ items, separator = "/" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("nav", { "aria-label": "Breadcrumb", className: "text-sm text-slate-600", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ol", { className: "flex items-center gap-2", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("li", { className: "flex items-center gap-2", children: [
    item.href ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("a", { href: item.href, className: "hover:text-slate-900", children: item.label }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-slate-900", children: item.label }),
    i < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "opacity-60", children: separator })
  ] }, i)) }) });
}

// src/components/Card.tsx
var import_clsx18 = __toESM(require("clsx"));
var import_jsx_runtime19 = require("react/jsx-runtime");
function Card({ title, children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: (0, import_clsx18.default)("rounded-lg border bg-white p-4 shadow-sm", className), children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "mb-2 text-base font-semibold text-slate-900", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children })
  ] });
}

// src/components/Modal.tsx
var import_clsx19 = __toESM(require("clsx"));
var import_jsx_runtime20 = require("react/jsx-runtime");
function Modal({ open, onClose, children, className }) {
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: (0, import_clsx19.default)("fixed inset-0 z-50 flex items-center justify-center", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "absolute inset-0 bg-black/40", onClick: onClose }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "relative z-10 w-full max-w-lg rounded-lg bg-white p-4 shadow-lg", children })
  ] });
}

// src/components/Drawer.tsx
var import_clsx20 = __toESM(require("clsx"));
var import_jsx_runtime21 = require("react/jsx-runtime");
function Drawer({ open, side = "right", onClose, children, className }) {
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: (0, import_clsx20.default)("fixed inset-0 z-50", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "absolute inset-0 bg-black/40", onClick: onClose }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      "div",
      {
        className: (0, import_clsx20.default)(
          "absolute top-0 h-full w-80 bg-white shadow-lg transition-transform",
          side === "right" ? "right-0" : "left-0"
        ),
        children
      }
    )
  ] });
}

// src/components/Tabs.tsx
var import_react11 = require("react");
var import_clsx21 = __toESM(require("clsx"));
var import_jsx_runtime22 = require("react/jsx-runtime");
function Tabs({ items, defaultIndex = 0, className }) {
  const [index, setIndex] = (0, import_react11.useState)(defaultIndex);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex gap-2 border-b", children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      "button",
      {
        className: (0, import_clsx21.default)(
          "px-3 py-2 text-sm",
          i === index ? "border-b-2 border-secondary text-secondary" : "text-slate-600 hover:text-slate-900"
        ),
        onClick: () => setIndex(i),
        children: it.label
      },
      i
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "pt-3", children: items[index]?.content })
  ] });
}

// src/components/Accordion.tsx
var import_react12 = require("react");
var import_clsx22 = __toESM(require("clsx"));
var import_jsx_runtime23 = require("react/jsx-runtime");
function Accordion({ items, className }) {
  const [open, setOpen] = (0, import_react12.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: (0, import_clsx22.default)("divide-y rounded-md border", className), children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      "button",
      {
        className: "flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium hover:bg-slate-50",
        onClick: () => setOpen(open === i ? null : i),
        children: [
          item.title,
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-slate-400", children: open === i ? "\u2212" : "+" })
        ]
      }
    ),
    open === i && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "px-4 py-3 text-sm text-slate-700", children: item.content })
  ] }, i)) });
}

// src/components/Table.tsx
var import_clsx23 = __toESM(require("clsx"));
var import_jsx_runtime24 = require("react/jsx-runtime");
function Table({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: (0, import_clsx23.default)("overflow-x-auto", className), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("table", { className: "min-w-full divide-y divide-slate-200", children }) });
}
function THead({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("thead", { className: "bg-slate-50 text-left text-sm text-slate-600", children });
}
function TBody({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tbody", { className: "divide-y divide-slate-200 text-sm text-slate-800", children });
}
function TR({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tr", { className: "hover:bg-slate-50", children });
}
function TH({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("th", { className: "px-4 py-2 font-semibold", children });
}
function TD({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("td", { className: "px-4 py-2", children });
}

// src/components/TableFilterBar.tsx
var import_clsx24 = __toESM(require("clsx"));
var import_jsx_runtime25 = require("react/jsx-runtime");
function TableFilterBar({ value, onChange, children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: (0, import_clsx24.default)("mb-3 flex items-center justify-between gap-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      Input,
      {
        placeholder: "Buscar...",
        value,
        onChange: (e) => onChange?.(e.target.value),
        className: "w-full"
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex items-center gap-2", children })
  ] });
}

// src/components/Pagination.tsx
var import_clsx25 = __toESM(require("clsx"));
var import_jsx_runtime26 = require("react/jsx-runtime");
function Pagination({ page, totalPages, onChange, className }) {
  const canPrev = page > 1;
  const canNext = page < totalPages;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: (0, import_clsx25.default)("flex items-center gap-2", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "button",
      {
        className: (0, import_clsx25.default)(
          "rounded-md border px-3 py-1 text-sm",
          canPrev ? "hover:bg-slate-50" : "opacity-50 cursor-not-allowed"
        ),
        onClick: () => canPrev && onChange?.(page - 1),
        children: "Anterior"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("span", { className: "text-sm text-slate-600", children: [
      page,
      " / ",
      totalPages
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "button",
      {
        className: (0, import_clsx25.default)(
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
var import_clsx26 = __toESM(require("clsx"));
var import_jsx_runtime27 = require("react/jsx-runtime");
function Badge({ children, variant = "default", className }) {
  const styles = {
    default: "bg-slate-100 text-slate-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-danger/10 text-danger",
    info: "bg-sky-100 text-sky-700"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: (0, import_clsx26.default)("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", styles[variant], className), children });
}

// src/components/StatsCard.tsx
var import_clsx27 = __toESM(require("clsx"));
var import_jsx_runtime28 = require("react/jsx-runtime");
function StatsCard({ label, value, icon, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: (0, import_clsx27.default)("flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "text-sm text-slate-600", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "text-2xl font-semibold text-slate-900", children: value })
    ] }),
    icon && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "text-secondary", children: icon })
  ] });
}

// src/components/Chart.tsx
var import_clsx28 = __toESM(require("clsx"));
var import_jsx_runtime29 = require("react/jsx-runtime");
function Chart({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: (0, import_clsx28.default)("rounded-lg border bg-white p-4", className), children });
}

// src/components/SearchInput.tsx
var import_react13 = require("react");
var import_clsx29 = __toESM(require("clsx"));
var import_jsx_runtime30 = require("react/jsx-runtime");
var SearchInput = (0, import_react13.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: (0, import_clsx29.default)("relative", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        "svg",
        {
          className: "pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-400",
          width: "16",
          height: "16",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "path",
            {
              fillRule: "evenodd",
              d: "M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z",
              clipRule: "evenodd"
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
var import_clsx30 = __toESM(require("clsx"));
var import_jsx_runtime31 = require("react/jsx-runtime");
function Stepper({ steps, active, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("ol", { className: (0, import_clsx30.default)("flex items-center gap-4", className), children: steps.map((label, i) => {
    const status = i < active ? "done" : i === active ? "active" : "todo";
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("li", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "span",
        {
          className: (0, import_clsx30.default)(
            "flex h-6 w-6 items-center justify-center rounded-full text-xs",
            status === "done" && "bg-secondary text-white",
            status === "active" && "border border-secondary text-secondary",
            status === "todo" && "border border-slate-300 text-slate-500"
          ),
          children: i + 1
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "text-sm text-slate-700", children: label })
    ] }, i);
  }) });
}

// src/components/EmptyState.tsx
var import_clsx31 = __toESM(require("clsx"));
var import_jsx_runtime32 = require("react/jsx-runtime");
function EmptyState({ title = "Sin datos", description, action, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: (0, import_clsx31.default)("flex flex-col items-center justify-center rounded-lg border bg-white p-8 text-center", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "mb-2 text-lg font-semibold text-slate-900", children: title }),
    description && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "mb-4 text-sm text-slate-600", children: description }),
    action
  ] });
}

// src/components/Avatar.tsx
var import_clsx32 = __toESM(require("clsx"));
var import_jsx_runtime33 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("img", { src, alt: alt || name || "avatar", className: (0, import_clsx32.default)("rounded-full object-cover", className), style });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: (0, import_clsx32.default)("flex items-center justify-center rounded-full bg-slate-200 text-slate-700", className), style, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("span", { className: "text-sm font-medium", children: initials(name) }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
