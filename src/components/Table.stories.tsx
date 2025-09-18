import type { Meta, StoryObj } from "@storybook/react";
import { Table, THead, TBody, TR, TH, TD } from "./Table";

const meta = {
  title: "Datos/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Table>
      <THead>
        <TR>
          <TH>Nombre</TH>
          <TH>Edad</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>Ana</TD>
          <TD>28</TD>
        </TR>
        <TR>
          <TD>Juan</TD>
          <TD>34</TD>
        </TR>
      </TBody>
    </Table>
  ),
};

