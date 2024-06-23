import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SpaceBlock, { SpaceBlockStyle } from "./SpaceBlock";

const meta = {
    title: "Example/SpaceBlock",
    component: SpaceBlock,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div style={{ width: "500px" }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof SpaceBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
    args: {
        style: SpaceBlockStyle.common,
    },
};

export const Double: Story = {
    args: {
        style: SpaceBlockStyle.double,
    },
};

export const Hradient: Story = {
    args: {
        style: SpaceBlockStyle.hradient,
    },
};
