import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta = {
  title: "Base/TextArea",
  component: TextArea,
  args: { placeholder: "Escribe un texto más largo..." },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

