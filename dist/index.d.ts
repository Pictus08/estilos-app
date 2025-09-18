import * as react from 'react';
import { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonVariant = "primary" | "secondary" | "outline" | "danger" | "success" | "icon";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    className?: string;
    children?: ReactNode;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}
declare const TextArea: react.ForwardRefExoticComponent<TextAreaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface Option {
    label: ReactNode;
    value: string | number;
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options?: Option[];
    className?: string;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface RadioOption {
    label: string;
    value: string | number;
}
interface RadioGroupProps {
    name?: string;
    options: RadioOption[];
    value?: string | number;
    onChange?: (value: string) => void;
    className?: string;
}
declare function RadioGroup({ name, options, value, onChange, className }: RadioGroupProps): react_jsx_runtime.JSX.Element;

interface ToggleSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    className?: string;
}
declare const ToggleSwitch: react.ForwardRefExoticComponent<ToggleSwitchProps & react.RefAttributes<HTMLInputElement>>;

interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    className?: string;
}
declare const DatePicker: react.ForwardRefExoticComponent<DatePickerProps & react.RefAttributes<HTMLInputElement>>;

interface TimePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    className?: string;
}
declare const TimePicker: react.ForwardRefExoticComponent<TimePickerProps & react.RefAttributes<HTMLInputElement>>;

interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    className?: string;
}
declare const FileUpload: react.ForwardRefExoticComponent<FileUploadProps & react.RefAttributes<HTMLInputElement>>;

type AlertVariant = "info" | "success" | "warning" | "error";
interface AlertProps {
    variant?: AlertVariant;
    children?: ReactNode;
    className?: string;
}
declare function Alert({ variant, children, className }: AlertProps): react_jsx_runtime.JSX.Element;

interface ToastProps {
    children?: ReactNode;
    className?: string;
}
declare function Toast({ children, className }: ToastProps): react_jsx_runtime.JSX.Element;

interface SpinnerProps {
    size?: number;
    className?: string;
}
declare function Spinner({ size, className }: SpinnerProps): react_jsx_runtime.JSX.Element;

interface SkeletonProps {
    className?: string;
}
declare function Skeleton({ className }: SkeletonProps): react_jsx_runtime.JSX.Element;

interface ConfirmDialogProps {
    open: boolean;
    title?: string;
    description?: ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    className?: string;
}
declare function ConfirmDialog({ open, title, description, confirmText, cancelText, onConfirm, onCancel, className, }: ConfirmDialogProps): react_jsx_runtime.JSX.Element | null;

interface NavbarProps {
    left?: ReactNode;
    right?: ReactNode;
    className?: string;
}
declare function Navbar({ left, right, className }: NavbarProps): react_jsx_runtime.JSX.Element;

interface SidebarProps {
    children?: ReactNode;
    className?: string;
}
declare function Sidebar({ children, className }: SidebarProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    label: ReactNode;
    href?: string;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    separator?: ReactNode;
}
declare function Breadcrumbs({ items, separator }: BreadcrumbsProps): react_jsx_runtime.JSX.Element;

interface CardProps {
    title?: ReactNode;
    children?: ReactNode;
    className?: string;
}
declare function Card({ title, children, className }: CardProps): react_jsx_runtime.JSX.Element;

interface ModalProps {
    open: boolean;
    onClose?: () => void;
    children?: ReactNode;
    className?: string;
}
declare function Modal({ open, onClose, children, className }: ModalProps): react_jsx_runtime.JSX.Element | null;

interface DrawerProps {
    open: boolean;
    side?: "left" | "right";
    onClose?: () => void;
    children?: ReactNode;
    className?: string;
}
declare function Drawer({ open, side, onClose, children, className }: DrawerProps): react_jsx_runtime.JSX.Element | null;

interface TabItem {
    label: ReactNode;
    content: ReactNode;
}
interface TabsProps {
    items: TabItem[];
    defaultIndex?: number;
    className?: string;
}
declare function Tabs({ items, defaultIndex, className }: TabsProps): react_jsx_runtime.JSX.Element;

interface AccordionItemProps {
    title: ReactNode;
    content: ReactNode;
}
interface AccordionProps {
    items: AccordionItemProps[];
    className?: string;
}
declare function Accordion({ items, className }: AccordionProps): react_jsx_runtime.JSX.Element;

interface TableProps {
    children?: ReactNode;
    className?: string;
}
declare function Table({ children, className }: TableProps): react_jsx_runtime.JSX.Element;
declare function THead({ children }: {
    children?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function TBody({ children }: {
    children?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function TR({ children }: {
    children?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function TH({ children }: {
    children?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function TD({ children }: {
    children?: ReactNode;
}): react_jsx_runtime.JSX.Element;

interface TableFilterBarProps {
    value?: string;
    onChange?: (v: string) => void;
    children?: ReactNode;
    className?: string;
}
declare function TableFilterBar({ value, onChange, children, className }: TableFilterBarProps): react_jsx_runtime.JSX.Element;

interface PaginationProps {
    page: number;
    totalPages: number;
    onChange?: (page: number) => void;
    className?: string;
}
declare function Pagination({ page, totalPages, onChange, className }: PaginationProps): react_jsx_runtime.JSX.Element;

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";
interface BadgeProps {
    children?: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}
declare function Badge({ children, variant, className }: BadgeProps): react_jsx_runtime.JSX.Element;

interface StatsCardProps {
    label: ReactNode;
    value: ReactNode;
    icon?: ReactNode;
    className?: string;
}
declare function StatsCard({ label, value, icon, className }: StatsCardProps): react_jsx_runtime.JSX.Element;

interface ChartProps {
    children?: ReactNode;
    className?: string;
}
declare function Chart({ children, className }: ChartProps): react_jsx_runtime.JSX.Element;

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    className?: string;
}
declare const SearchInput: react.ForwardRefExoticComponent<SearchInputProps & react.RefAttributes<HTMLInputElement>>;

interface StepperProps {
    steps: string[];
    active: number;
    className?: string;
}
declare function Stepper({ steps, active, className }: StepperProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps {
    title?: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
    className?: string;
}
declare function EmptyState({ title, description, action, className }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface AvatarProps {
    src?: string | null;
    alt?: string;
    name?: string;
    size?: number;
    className?: string;
}
declare function Avatar({ src, alt, name, size, className }: AvatarProps): react_jsx_runtime.JSX.Element;

export { Accordion, type AccordionItemProps, type AccordionProps, Alert, type AlertProps, type AlertVariant, Avatar, type AvatarProps, Badge, type BadgeProps, type BadgeVariant, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonProps, type ButtonVariant, Card, type CardProps, Chart, type ChartProps, Checkbox, type CheckboxProps, ConfirmDialog, type ConfirmDialogProps, DatePicker, type DatePickerProps, Drawer, type DrawerProps, EmptyState, type EmptyStateProps, FileUpload, type FileUploadProps, Input, type InputProps, Modal, type ModalProps, Navbar, type NavbarProps, type Option, Pagination, type PaginationProps, RadioGroup, type RadioGroupProps, type RadioOption, SearchInput, type SearchInputProps, Select, type SelectProps, Sidebar, type SidebarProps, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, StatsCard, type StatsCardProps, Stepper, type StepperProps, TBody, TD, TH, THead, TR, type TabItem, Table, TableFilterBar, type TableFilterBarProps, type TableProps, Tabs, type TabsProps, TextArea, type TextAreaProps, TimePicker, type TimePickerProps, Toast, type ToastProps, ToggleSwitch, type ToggleSwitchProps };
