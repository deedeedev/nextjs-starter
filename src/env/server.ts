import type { StandardSchemaV1 } from "@standard-schema/spec";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export default createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  emptyStringAsUndefined: true,
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
  onValidationError: (issues: readonly StandardSchemaV1.Issue[]) => {
    console.error("❌ Invalid environment variables:", issues);
    process.exit(1);
  },
});
