import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta = {
  title: "Base/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    options: [
      { label: "Opción A", value: "A" },
      { label: "Opción B", value: "B" },
    ],
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    options: [
      { label: "Rojo", value: "red" },
      { label: "Azul", value: "blue" },
      { label: "Verde", value: "green" },
    ],
  },
};

