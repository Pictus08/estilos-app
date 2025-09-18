import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
  title: "Extras/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/80",
    alt: "Usuario",
    size: 48,
  },
};

export const WithInitials: Story = {
  args: {
    name: "Ada Lovelace",
    size: 48,
  },
};

