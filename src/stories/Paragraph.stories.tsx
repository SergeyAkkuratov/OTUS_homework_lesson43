import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph, ParagraphStyle } from './Paragraph';

const meta = {
    title: 'Example/Paragraph',
    component: Paragraph,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { text: "Example" },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        text: "This is MAIN text paragraph",
        textStyle: ParagraphStyle.MAIN
    },
};

export const Citation: Story = {
    args: {
        text: "This is Citation text paragraph",
        textStyle: ParagraphStyle.CITATION
    },
};

export const Common: Story = {
    args: {
        text: "This is Common text paragraph",
        textStyle: ParagraphStyle.COMMON
    },
};