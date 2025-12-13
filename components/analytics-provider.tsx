"use client";

import { useEffect } from "react";

export function AnalyticsProvider() {
    useEffect(() => {
        // Basic Google Tag Manager implementation
        // Ideally this would be connected to a real ID provided by the user
        // For now we setup the dataLayer
        // @ts-ignore
        window.dataLayer = window.dataLayer || [];

        // Example GTM Script injection could go here, for now it's a placeholder
        // ensuring the infrastructure is ready.
    }, []);

    return null;
}
