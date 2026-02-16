import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import Page from './Page.svelte';

const meta = {
  title: 'Example/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

type Story = StoryObj<typeof meta>;

const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const loginButton = canvas.getByRole('button', { name: /log in/i });
    await expect(loginButton).toBeInTheDocument();

    await userEvent.click(loginButton);
    await waitFor(() => expect(loginButton).not.toBeInTheDocument());

    const logoutButton = canvas.getByRole('button', { name: /log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

const LoggedOut: Story = {};

export default meta;
export { LoggedIn, LoggedOut };
