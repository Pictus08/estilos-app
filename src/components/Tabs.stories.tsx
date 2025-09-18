import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta = {
  title: "Layout/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Uno", content: <div>Contenido 1</div> },
      { label: "Dos", content: <div>Contenido 2</div> },
      { label: "Tres", content: <div>Contenido 3</div> },
    ],
  },
};

