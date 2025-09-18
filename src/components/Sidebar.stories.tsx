import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta = {
  title: "Layout/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <ul className="space-y-2 text-sm">
        <li className="hover:text-slate-900">Inicio</li>
        <li className="hover:text-slate-900">Usuarios</li>
        <li className="hover:text-slate-900">Reportes</li>
      </ul>
    ),
  },
};

