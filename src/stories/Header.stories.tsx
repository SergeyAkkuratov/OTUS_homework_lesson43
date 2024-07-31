import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta = {
    title: "Example/Header",
    component: Header,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Level1: Story = {
    args: {
        level: 1,
        children: "This is Header level 1",
    },
};

export const Level2: Story = {
    args: {
        level: 2,
        children: "This is Header level 2",
    },
};

export const Level3: Story = {
    args: {
        level: 3,
        children: "This is Header level 3",
    },
};

export const Level4: Story = {
    args: {
        level: 4,
        children: "This is Header level 4",
    },
};

export const Level5: Story = {
    args: {
        level: 5,
        children: "This is Header level 5",
    },
};

export const Level6: Story = {
    args: {
        level: 6,
        children: "This is Header level 6",
    },
};
