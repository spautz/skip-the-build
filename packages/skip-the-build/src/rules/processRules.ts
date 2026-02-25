import process from 'node:process';

const hasInteractiveTTY = (): boolean => process.stdout.isTTY;

const noInteractiveTTY = (): boolean => !hasInteractiveTTY();

export { hasInteractiveTTY, noInteractiveTTY };
