import type { Meta, StoryObj } from "@storybook/react";
import { StatsCard } from "./StatsCard";

const meta = {
  title: "Datos/StatsCard",
  component: StatsCard,
  tags: ["autodocs"],
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Viajes",
    value: 128,
  },
};

