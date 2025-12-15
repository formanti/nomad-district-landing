"use client";

import { Content } from "@builder.io/sdk-react";
import { customComponents } from "@/lib/builder-registry";

interface BuilderPageProps {
    content: any;
    apiKey: string;
}

export function BuilderPage({ content, apiKey }: BuilderPageProps) {
    return (
        <Content
            content={content}
            apiKey={apiKey}
            model="page"
            customComponents={customComponents}
        />
    );
}
