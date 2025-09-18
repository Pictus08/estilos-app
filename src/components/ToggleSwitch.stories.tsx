import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ToggleSwitch } from "./ToggleSwitch";

const meta = {
  title: "Base/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  render: () => {
    const [on, setOn] = useState(true);
    return <ToggleSwitch checked={on} onChange={(e) => setOn(e.currentTarget.checked)} />;
  },
};

