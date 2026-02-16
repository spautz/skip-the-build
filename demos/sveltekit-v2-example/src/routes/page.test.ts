import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import Page from './+page.svelte';

describe('+page.svelte', () => {
  it('shows "Hello world!"', () => {
    render(Page);

    expect(screen.getByText('From the slow-package-example package: Hello World!')).toBeVisible();
  });
});
