"use client";

import type { RegisteredComponent } from "@builder.io/sdk-react";
import { register } from "@builder.io/sdk-react";

// Import custom components
import { HeroSection } from "@/components/sections/hero";
import { VideoSection } from "@/components/sections/video-section";
import { BenefitsSection } from "@/components/sections/benefits";
import { OfferSection } from "@/components/sections/offer";
import { Footer } from "@/components/footer";

// Define custom components for Builder.io
export const customComponents: RegisteredComponent[] = [
    {
        component: HeroSection,
        name: "HeroSection",
        friendlyName: "Hero Section",
        inputs: [
            {
                name: "badge",
                type: "string",
                defaultValue: "Remote Job Academy",
                friendlyName: "Badge Text",
            },
            {
                name: "headline",
                type: "string",
                defaultValue: "Encuentra el trabajo remoto",
                friendlyName: "Headline (Part 1)",
            },
            {
                name: "headlineHighlight",
                type: "string",
                defaultValue: "de tus sueños.",
                friendlyName: "Headline Highlight (Orange)",
            },
            {
                name: "subheadline",
                type: "string",
                defaultValue: "Sistema claro y accionable.\nPara conseguir tu primer trabajo remoto en dólares.",
                friendlyName: "Subheadline",
            },
            {
                name: "ctaPrimary",
                type: "string",
                defaultValue: "Únete al Programa →",
                friendlyName: "Primary CTA Text",
            },
            {
                name: "ctaSecondary",
                type: "string",
                defaultValue: "¿Qué ofrecemos?",
                friendlyName: "Secondary CTA Text",
            },
        ],
    },
    {
        component: VideoSection,
        name: "VideoSection",
        friendlyName: "Video Section",
        inputs: [
            {
                name: "eyebrow",
                type: "string",
                defaultValue: "¿Qué ofrecemos?",
                friendlyName: "Eyebrow Text",
            },
            {
                name: "headline",
                type: "string",
                defaultValue: "Toma el control de tu carrera.",
                friendlyName: "Headline",
            },
            {
                name: "videoUrl",
                type: "string",
                defaultValue: "https://player.vimeo.com/video/1146233269?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
                friendlyName: "Vimeo Video URL",
            },
            {
                name: "caption",
                type: "string",
                defaultValue: "Descubre cómo hemos ayudado a más de 350 profesionales a escapar de la oficina y construir una vida bajo sus propios términos.",
                friendlyName: "Caption Text",
            },
        ],
    },
    {
        component: BenefitsSection,
        name: "BenefitsSection",
        friendlyName: "Benefits Section",
        inputs: [
            {
                name: "eyebrow",
                type: "string",
                defaultValue: "¿Por qué elegirnos?",
                friendlyName: "Eyebrow Text",
            },
            {
                name: "headline",
                type: "string",
                defaultValue: "Transforma tu carrera profesional",
                friendlyName: "Headline",
            },
            {
                name: "benefits",
                type: "list",
                friendlyName: "Benefit Cards",
                subFields: [
                    {
                        name: "title",
                        type: "string",
                        friendlyName: "Title",
                    },
                    {
                        name: "description",
                        type: "string",
                        friendlyName: "Description",
                    },
                    {
                        name: "icon",
                        type: "string",
                        enum: ["DollarSign", "Globe2", "Users"],
                        defaultValue: "DollarSign",
                        friendlyName: "Icon",
                    },
                ],
                defaultValue: [
                    {
                        title: "Ganar en Dólares",
                        description: "Accede a salarios globales sin importar dónde vivas. Multiplica tu poder adquisitivo.",
                        icon: "DollarSign",
                    },
                    {
                        title: "Disrupción Personal",
                        description: "Rompe con el camino tradicional. Tu carrera no tiene por qué ser lineal ni aburrida.",
                        icon: "Globe2",
                    },
                    {
                        title: "Comunidad Activa",
                        description: "Rodéate de personas que están pasando por el mismo proceso que tú.",
                        icon: "Users",
                    },
                ],
            },
        ],
    },
    {
        component: OfferSection,
        name: "OfferSection",
        friendlyName: "Offer Section",
        inputs: [
            {
                name: "eyebrow",
                type: "string",
                defaultValue: "La oferta completa",
                friendlyName: "Eyebrow Text",
            },
            {
                name: "headline",
                type: "string",
                defaultValue: "Más que una academia,",
                friendlyName: "Headline (Part 1)",
            },
            {
                name: "headlineHighlight",
                type: "string",
                defaultValue: "un ecosistema.",
                friendlyName: "Headline Highlight (Orange)",
            },
            {
                name: "subheadline",
                type: "string",
                defaultValue: "Todo lo que necesitas para dar el salto, en un solo lugar.",
                friendlyName: "Subheadline",
            },
            {
                name: "features",
                type: "list",
                friendlyName: "Feature List",
                subFields: [
                    {
                        name: "text",
                        type: "string",
                        friendlyName: "Feature Text",
                    },
                ],
                defaultValue: [
                    { text: "Metodología probada paso a paso" },
                    { text: "Preparación de documentos (CV, Cover Letter y LinkedIn)" },
                    { text: "Aprende a encontrar los mejores trabajos remotos" },
                    { text: "Prepárate para las entrevistas como un pro" },
                    { text: "Usa IA para potenciar tu búsqueda" },
                    { text: "Sesiones semanales de Q&A en vivo" },
                ],
            },
            {
                name: "ctaText",
                type: "string",
                defaultValue: "Únete al Programa →",
                friendlyName: "CTA Button Text",
            },
            {
                name: "disclaimer",
                type: "string",
                defaultValue: "Acceso inmediato • Garantía de satisfacción",
                friendlyName: "Disclaimer Text",
            },
        ],
    },
    {
        component: Footer,
        name: "Footer",
        friendlyName: "Footer",
        inputs: [],
    },
];

// Register all custom components with Builder.io
customComponents.forEach((comp) => {
    register("insertMenu", {
        name: comp.name,
        items: [
            {
                name: comp.friendlyName || comp.name,
            },
        ],
    });
});

// Also register as editor settings
register("editor.settings", {
    customInsertMenu: true,
});
