"use client";

// This component registers custom components with Builder.io
// It needs to be a client component and run on client-side
import { useEffect } from "react";

export function BuilderRegister() {
    useEffect(() => {
        // Dynamic import to register components on client side
        import("@/lib/builder-registry");
    }, []);

    return null;
}
