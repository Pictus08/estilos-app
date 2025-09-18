import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { Button } from "./Button";

const meta = {
  title: "Layout/Navbar",
  component: Navbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    left: <div className="font-semibold">Mi App</div>,
    right: <Button variant="secondary">Salir</Button>,
  },
};

