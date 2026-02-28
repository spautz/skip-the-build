import type { Meta, StoryObj } from '@storybook/sveltekit';
import { fn } from 'storybook/test';
import Button from './Button.svelte';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    onclick: fn(),
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const Primary: Story = {
  args: { primary: true, label: 'Button' },
};

const Secondary: Story = {
  args: { label: 'Button' },
};

const Large: Story = {
  args: { size: 'large', label: 'Button' },
};

const Small: Story = {
  args: { size: 'small', label: 'Button' },
};

export default meta;
export { Primary, Secondary, Large, Small };
