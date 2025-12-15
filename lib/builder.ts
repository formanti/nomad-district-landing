"use client";

import { fetchOneEntry, Content } from "@builder.io/sdk-react";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || "";

export { fetchOneEntry, Content, BUILDER_API_KEY };
