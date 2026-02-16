import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const internal_runGit = async (args: Array<string>): Promise<string | undefined> => {
  const { stdout } = await execFileAsync('git', args, {
    windowsHide: true,
    env: process.env,
  });

  const output = String(stdout).trim();
  return output.length ? output : undefined;
};

const internal_stringMatches = (value: string | undefined, pattern: string | RegExp) => {
  if (!value) {
    return false;
  }
  if (typeof pattern === 'string') {
    return value === pattern;
  }
  return pattern.test(value);
};

// const internal_getGitDir = async (): Promise<string | undefined> => {
//   return internal_runGit(['rev-parse', '--git-dir']);
// };

const internal_getCurrentBranch = async (): Promise<string | undefined> => {
  const branchOrHead = await internal_runGit(['rev-parse', '--abbrev-ref', 'HEAD']);

  // Detached HEAD returns "HEAD" (not a real branch name)
  if (!branchOrHead || branchOrHead === 'HEAD') {
    return undefined;
  }

  return branchOrHead;
};

const isGitBranch = async (pattern: string | RegExp) => {
  const branchName = await internal_getCurrentBranch();
  return internal_stringMatches(branchName, pattern);
};

const notGitBranch = async (pattern: string | RegExp) => {
  return !(await isGitBranch(pattern));
};

const isShallowClone = async () => {
  const shallowFlag = await internal_runGit(['rev-parse', '--is-shallow-repository']);
  return shallowFlag === 'true';
};

export { isGitBranch, isShallowClone, notGitBranch };
