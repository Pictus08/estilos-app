import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Drawer } from "./Drawer";
import { Button } from "./Button";

const meta = {
  title: "Layout/Drawer",
  component: Drawer,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="right">
          <div className="p-4">Contenido del Drawer</div>
        </Drawer>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="left">
          <div className="p-4">Contenido del Drawer</div>
        </Drawer>
      </>
    );
  },
};

