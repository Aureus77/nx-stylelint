export interface StylelintExecutorSchema {
  config: string;
  lintFilePatterns: string[];
  format: Formatter;
  silent: boolean;
  force: boolean;
  fix: boolean;
  maxWarnings: number;
  outputFile?: string;
}

type Formatter = 'compact' | 'json' | 'string' | 'unix' | 'verbose';
