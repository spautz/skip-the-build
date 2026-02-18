import process from 'node:process';

const hasInteractiveTTY = () => process.stdout.isTTY;

const noInteractiveTTY = () => !hasInteractiveTTY();

export { hasInteractiveTTY, noInteractiveTTY };
