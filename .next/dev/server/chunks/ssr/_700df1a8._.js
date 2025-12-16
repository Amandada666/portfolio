module.exports = [
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutText",
    ()=>aboutText,
    "diplomes",
    ()=>diplomes,
    "expertiseIntro",
    ()=>expertiseIntro,
    "expertises",
    ()=>expertises,
    "langues",
    ()=>langues,
    "personalInfo",
    ()=>personalInfo,
    "projects",
    ()=>projects,
    "skills",
    ()=>skills,
    "socialLinks",
    ()=>socialLinks
]);
const personalInfo = {
    name: "Amanda Gérard",
    title: "Chef de projet e-commerce",
    email: "amanda.gerard19@hotmail.fr",
    phone: "+33 7 85 33 76 33",
    location: "Paris, France",
    birthDate: "23/07/1997",
    linkedin: "https://www.linkedin.com/in/gerardamanda",
    malt: "https://www.malt.fr/profile/amandagerard",
    collective: "https://app.collective.work/collective/ronan-jaffre/",
    calendly: "https://calendly.com/amanda-gerard-calendar",
    cvLink: "https://www.amanda-gerard.com/cv-amanda-gerard-2025.pdf",
    avatar: "/images/avatar.png",
    banner: "/images/banner.jpg"
};
const aboutText = `J'aide les marques à améliorer leur e-commerce et leur logistique pour vendre mieux et livrer sans stress.

L'objectif : moins de frictions, moins d'erreurs, plus de ventes, plus de satisfaction client.`;
const expertiseIntro = `Je suis cheffe de projet digital senior, spécialisée Shopify, logistique e-commerce et process opérationnels. J'interviens sur :
• Création & optimisation de boutiques Shopify
• Configuration logistique : transporteurs, flux, API, stocks, notifications
• Déploiement de process internes (e-commerce, logistique, SAV, facturation)
• Automatisations via Shopify Flow
• Suivi du parcours d'achat & optimisation mobile-first (UX / CRO)
• Gestion de projet complète : cadrage → production → QA → mise en ligne
• Coordination inter-équipes (tech, logistique, marketing, support)`;
const expertises = [
    {
        title: "Expertise Shopify & E-commerce",
        description: "J'accompagne les marques dans la création et l'optimisation de boutiques Shopify solides, rapides et prêtes pour la croissance. J'allie UX, conversion, logistique et automatisation pour construire des sites qui fonctionnent réellement : fiables au quotidien, clairs pour les clients, et simples à gérer pour les équipes."
    },
    {
        title: "Vision business & sens du concret",
        description: "Je garde toujours un pied dans la stratégie et un pied dans l'opérationnel. Ça me permet de prioriser les actions qui ont un impact direct : parcours d'achat plus fluide, process internes plus efficaces, meilleure coordination et moins de frictions. L'objectif est simple : un e-commerce qui tourne bien, sans surpromesse ni complexité inutile."
    },
    {
        title: "Process & fiabilité opérationnelle",
        description: "Je mets en place des process clairs qui sécurisent les opérations : stocks, expéditions, SAV, facturation, logistique. Cette approche structure les projets, réduit les erreurs et rend le quotidien plus fluide pour les équipes. C'est ce qui permet de livrer des projets stables, même dans des contextes exigeants."
    }
];
const diplomes = [
    {
        title: "Directeur de projet digital",
        school: "Mediaschool, Nice",
        description: "Diplôme de chef de projet digital"
    }
];
const langues = [
    {
        name: "Français",
        level: "Natif"
    },
    {
        name: "Anglais",
        level: "Professionnel"
    }
];
const skills = [
    {
        title: "Gestion de projet",
        items: [
            "Cadrage · briefs · roadmaps",
            "Planification & priorisation",
            "Suivi A → Z de la production",
            "Comités de pilotage · KPI",
            "Mises en ligne"
        ]
    },
    {
        title: "Shopify",
        items: [
            "Shopify · Shopify Plus · Liquid",
            "Shopify Flow · automatisations",
            "Intégrations API logistiques",
            "Tests end-to-end · QA"
        ]
    },
    {
        title: "Relation client",
        items: [
            "Recueil des besoins",
            "Recommandations concrètes",
            "Reporting & suivi",
            "Accompagnement opérationnel"
        ]
    },
    {
        title: "Process & organisation",
        items: [
            "Workflows e-commerce",
            "Process logistique · SAV · facturation",
            "Méthodologies internes",
            "Amélioration continue",
            "Fiabilité & standardisation"
        ]
    },
    {
        title: "Logistique",
        items: [
            "Stocks · analyse prédictive",
            "Expéditions · transporteurs",
            "Réduction des erreurs",
            "Coordination e-commerce / ops",
            "Gestion des lancements"
        ]
    },
    {
        title: "Outils",
        items: [
            "Shopify · Shopify Plus · Liquid",
            "Klaviyo · Zendesk",
            "Asana · Monday · Office 365",
            "Balsamiq · Figma",
            "Transporteurs & intégrations API"
        ]
    },
    {
        title: "Coordination",
        items: [
            "Relations interservices",
            "Orchestration tech / design / logistique",
            "Gestion proactive des risques",
            "Communication claire et structurée"
        ]
    },
    {
        title: "Management",
        items: [
            "Encadrement d'alternants",
            "Pilotage d'équipes internes & prestas",
            "Répartition des tâches",
            "Montée en compétence"
        ]
    }
];
const projects = [
    {
        company: "SNA GZ",
        position: "Responsable Projets Digitaux",
        startDate: "02/2023",
        endDate: "05/2025",
        location: "Paris, France",
        companyDescription: "SNA GZ (SNA Group), créée en 2009 et basée à Paris, est une entreprise spécialisée dans la production, la distribution et le e-commerce de produits dérivés, musique et merchandising. L'organisation gère un large catalogue, une logistique intégrée et un volume important de lancements produits, nécessitant une forte coordination entre les pôles e-commerce, logistique, stock, support et production.",
        workDescription: "Responsable de la conception, de l'optimisation et du pilotage des projets digitaux e-commerce, avec un focus sur l'automatisation des flux et la coordination inter-équipes.",
        tasks: [
            "Conception et optimisation de boutiques Shopify (Shopify / Liquid / Klaviyo)",
            "Intégration d'API logistiques et automatisation des flux via Shopify Flow",
            "Définition et mise en place de workflows internes (e-commerce, stock, SAV, facturation)",
            "Pilotage complet des projets : cadrage, planning, tests end-to-end, mise en ligne",
            "Suivi prédictif des stocks et coordination avec la logistique pour éviter ruptures et retards",
            "Structuration de KPI et outils de suivi pour le pilotage opérationnel"
        ],
        technologies: [
            "Shopify",
            "Shopify Plus",
            "Liquid",
            "Klaviyo",
            "Shopify Flow",
            "Balsamiq",
            "Office 365",
            "Asana",
            "Monday",
            "Zendesk"
        ]
    },
    {
        company: "COLORZ Agency",
        position: "Chef de projet e-commerce",
        startDate: "05/2022",
        endDate: "12/2022",
        location: "Paris, France",
        companyDescription: "Colorz est une agence digitale fondée en 2006 et basée à Paris, spécialisée en conception d'expériences e-commerce, branding, UX/UI et développement sur mesure pour des marques premium et des DNVB. L'agence intervient sur des projets end-to-end alliant design, technique et performance.",
        workDescription: "Gestion de projets e-commerce de A à Z, de la conception à la mise en production, avec un focus sur la coordination des équipes et la qualité des livrables.",
        tasks: [
            "Gestion complète de projets e-commerce : cahiers des charges, planning, chiffrage",
            "Coordination des équipes tech, design et intégration (Shopify, UX, front)",
            "Organisation, suivi et réalisation des recettes fonctionnelles",
            "Mise en place de process internes pour fluidifier le delivery",
            "Analyse des besoins client et formulation de recommandations structurées"
        ],
        technologies: [
            "Shopify",
            "Figma",
            "Balsamiq",
            "Office 365",
            "Monday",
            "Asana"
        ]
    },
    {
        company: "ONPC",
        position: "Chef de Projet Digital",
        startDate: "09/2020",
        endDate: "05/2022",
        location: "Paris, France",
        companyDescription: "ONPC (On n'est pas que…) est une entreprise française spécialisée dans la production digitale, les projets interactifs et la communication digitale. Basée à Paris, la société accompagne des marques et institutions dans le développement de solutions digitales sur-mesure.",
        workDescription: "Pilotage de projets digitaux interactifs, coordination des équipes créatives et techniques, et suivi qualité des livrables.",
        tasks: [
            "Conception des documents clés : briefs, specs fonctionnelles, wireframes",
            "Pilotage du planning projet et organisation des réunions de suivi",
            "Coordination transverse entre design, développement et production",
            "Suivi des livrables et contrôle qualité avant déploiement"
        ],
        technologies: [
            "Office 365",
            "Balsamiq",
            "Outils de gestion de projet"
        ]
    },
    {
        company: "Nanogramme",
        position: "Chef de projet digital",
        startDate: "09/2018",
        endDate: "08/2020",
        location: "Nice, France",
        companyDescription: "Nanogramme est une agence de communication digitale fondée en 2014 à Nice, spécialisée en création de sites web, e-commerce et dispositifs interactifs. L'agence accompagne des PME, institutions et marques dans leurs projets digitaux sur mesure.",
        workDescription: "Gestion de projets web variés (e-commerce, sites vitrines, dispositifs interactifs) de la conception au déploiement.",
        tasks: [
            "Gestion de projets web de la conception au déploiement (Shopify, Magento, WordPress, PrestaShop)",
            "Coordination des équipes techniques et créatives",
            "Rédaction et structuration des documents de production (specs, wireframes)",
            "Suivi des développements et réalisation des recettes avant livraison"
        ],
        technologies: [
            "Shopify",
            "Magento",
            "PrestaShop",
            "WordPress",
            "Office 365",
            "Balsamiq"
        ]
    }
];
const socialLinks = {
    linkedin: {
        url: "https://www.linkedin.com/in/gerardamanda",
        icon: "/images/linkedin.webp",
        name: "LinkedIn"
    },
    malt: {
        url: "https://www.malt.fr/profile/amandagerard",
        icon: "/images/malt.png",
        name: "Malt"
    },
    // collective: {
    //   url: "https://app.collective.work/collective/ronan-jaffre/",
    //   icon: "/images/collective.png",
    //   name: "Collective",
    // },
    email: {
        url: "mailto:amanda.gerard19@hotmail.fr",
        icon: "/images/email.png",
        name: "Email"
    }
};
}),
"[project]/components/nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const navItems = [
    {
        label: "À propos",
        href: "#about"
    },
    {
        label: "Expertise",
        href: "#expertise"
    },
    {
        label: "Formation",
        href: "#formation"
    },
    {
        label: "Compétences",
        href: "#skills"
    },
    {
        label: "Projets",
        href: "#projects"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
function Nav() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-[#e2e8f0]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "font-bold text-[#00147D] text-lg",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].name
                        }, void 0, false, {
                            fileName: "[project]/components/nav.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-6",
                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    className: "text-sm text-[#64748b] hover:text-[#0023DD] transition-colors",
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/components/nav.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/nav.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "md:hidden p-2 text-[#00147D]",
                            "aria-label": "Toggle menu",
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/nav.tsx",
                                lineNumber: 42,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/nav.tsx",
                                lineNumber: 42,
                                columnNumber: 41
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/nav.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/nav.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden py-4 border-t border-[#e2e8f0]",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.href,
                            onClick: ()=>setIsOpen(false),
                            className: "block py-2 text-[#64748b] hover:text-[#0023DD] transition-colors",
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/components/nav.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/nav.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/nav.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/nav.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Menu", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }
    ]
]);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_700df1a8._.js.map