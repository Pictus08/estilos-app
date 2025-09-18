import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";

const meta = {
  title: "Layout/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h3 className="mb-2 text-base font-semibold">Modal</h3>
          <p className="mb-4 text-sm text-slate-600">Contenido del modal.</p>
          <div className="text-right">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cerrar
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

