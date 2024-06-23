import type { Meta, StoryObj } from "@storybook/react";
import CollapseBlock from "./CollapseBlock";

const meta = {
    title: "Example/CollapseBlock",
    component: CollapseBlock,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof CollapseBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
    args: {
        title: "Title",
        collapsed: true,
        children: "Common Text inside",
    },
};

export const NotCollapsed: Story = {
    args: {
        title: "Title",
        collapsed: false,
        children: "Common Text inside",
    },
};
