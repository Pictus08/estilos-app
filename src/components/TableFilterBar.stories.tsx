import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TableFilterBar } from "./TableFilterBar";
import { Button } from "./Button";

const meta = {
  title: "Datos/TableFilterBar",
  component: TableFilterBar,
  tags: ["autodocs"],
} satisfies Meta<typeof TableFilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <TableFilterBar value={value} onChange={setValue}>
        <Button variant="secondary">Acción</Button>
      </TableFilterBar>
    );
  },
};

