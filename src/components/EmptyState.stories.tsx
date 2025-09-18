import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { Button } from "./Button";

const meta = {
  title: "Extras/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Sin resultados",
    description: "Intenta cambiar los filtros o crea un nuevo elemento.",
    action: <Button>Crear</Button>,
  },
};

