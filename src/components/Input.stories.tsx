import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Base/Input",
  component: Input,
  args: { placeholder: "Escribe algo..." },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = { args: { type: "text" } };
export const Password: Story = { args: { type: "password" } };
export const Email: Story = { args: { type: "email" } };
export const Number: Story = { args: { type: "number" } };

