import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vitest } from 'vitest';

import { App } from '../App.js';

describe('App', () => {
  afterEach(() => {
    cleanup();
    vitest.resetModules();
  });

  it('Renders without error', () => {
    render(<App />);

    expect(screen.getByText('Vite + React')).toBeVisible();
  });

  it('Displays a value from the slow example package', () => {
    render(<App />);

    expect(screen.getByText('From the slow-package-example package: Hello World!')).toBeVisible();
  });
});
