/* eslint-disable @typescript-eslint/no-unsafe-call */

import { defineConfig } from "@prisma/config";

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  migrate: {
    databaseUrl: process.env.DATABASE_URL,
  },
});
