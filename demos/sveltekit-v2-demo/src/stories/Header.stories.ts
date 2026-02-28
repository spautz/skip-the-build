import type { Meta, StoryObj } from '@storybook/sveltekit';
import { fn } from 'storybook/test';
import Header from './Header.svelte';

const meta = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

const LoggedIn: Story = {
  args: {
    user: { name: 'Jane Doe' },
  },
};

const LoggedOut: Story = {};

export default meta;
export { LoggedIn, LoggedOut };
