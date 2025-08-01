import type { StandardSchemaV1 } from "@standard-schema/spec";
import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";

expand(config({ quiet: true }));

export default createEnv({
  client: {},
  onValidationError: (issues: readonly StandardSchemaV1.Issue[]) => {
    console.error("❌ Invalid environment variables:", issues);
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {},
});
