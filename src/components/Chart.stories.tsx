import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "./Chart";

const meta = {
  title: "Datos/Chart",
  component: Chart,
  tags: ["autodocs"],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
  args: {
    children: <div className="h-40 w-full rounded-md bg-slate-100 text-center leading-[10rem]">Aquí tu chart</div>,
  },
};

