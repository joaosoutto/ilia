module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("@tanstack/react-query");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react [external] (react, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/theme/palette.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "palette": ()=>palette
});
const white = "#FFFFFF";
const black = "#000000";
const starWarsYellow = "#FFE81F";
const jediBlue = "#1E3689";
const sithRed = "#FA041C";
const palette = {
    black,
    white,
    starWarsYellow,
    jediBlue,
    sithRed,
    lightsabers: {
        blue: "#1E3689",
        green: "#6C9CA4",
        red: "#FA041C",
        purple: "#5F5FD4",
        yellow: "#FFE81F"
    },
    galactic: {
        space: "#000000",
        stars: "#FFFFFF",
        nebula: "#301841",
        desert: "#F46434",
        metal: "#95CCDC",
        gold: "#E4BC94"
    },
    force: {
        light: "#5C97B5",
        dark: "#5E262C",
        balance: "#6C9CA4"
    },
    branded: {
        primary: jediBlue,
        secondary: sithRed,
        mainBg: "#000000",
        lightBg: "#F2F2F2",
        white: "#FFFFFF",
        black: "#000000",
        lightGray: "#95CCDC",
        gray: "#8F8F8F",
        darkGray: "#301841",
        red: sithRed
    },
    primary: {
        contrastText: white,
        dark: "#0F1F4A",
        main: jediBlue,
        light: "#1E368929",
        50: "#E6EDF7",
        100: "#B3C7E3",
        200: "#80A1CF",
        300: "#4D7BBB",
        400: "#1E3689",
        500: "#1A2F7A",
        600: "#16286B",
        700: "#12215C",
        800: "#0E1A4D",
        900: "#0A133E",
        950: "#060C2F",
        overlay4: "#1E36890A",
        overlay8: "#1E368914",
        overlay16: "#1E368929",
        overlay48: "#1E36897A"
    },
    secondary: {
        main: sithRed,
        dark: "#8B0210",
        light: "#FA041C29"
    },
    text: {
        primary: "#FFFFFF",
        secondary: "#95CCDC",
        link: jediBlue
    },
    background: {
        appBar: "#000000",
        default: "#000000",
        container: "#301841"
    },
    icon: jediBlue,
    divider: "#95CCDC",
    action: {
        disabled: "#8F8F8F1F"
    }
};
}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/hooks/useDimensions.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useIsDesktop": ()=>useIsDesktop,
    "useIsMobile": ()=>useIsMobile,
    "useIsTablet": ()=>useIsTablet
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [ssr] (ecmascript) <export default as useMediaQuery>");
;
const useIsMobile = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(max-width: 768px)");
};
const useIsTablet = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(max-width: 1130px)");
};
const useIsDesktop = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(min-width: 1025px)");
};
}),
"[project]/src/assets/svgs/DarthVaderIcon.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/palette.ts [ssr] (ecmascript)");
;
;
const DarthVaderIcon = ({ color, width, height })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: width || "100",
        height: height || "100",
        viewBox: "0 0 64 64",
        fill: color || __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].force.light,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            d: "M 31 0 C 29.683594 0 28.574219 0.859375 28.171875 2.042969 C 18.082031 2.480469 10 10.804688 10 21 L 10 25.84375 L 0.699219 54.671875 C 0.445313 55.457031 0.53125 56.320313 0.929688 57.042969 C 1.324219 57.761719 2.007813 58.292969 2.804688 58.5 L 4.265625 58.875 C 12.425781 60.980469 20.796875 62.117188 29.191406 62.328125 L 30.339844 63.09375 C 30.84375 63.429688 31.421875 63.597656 32 63.597656 C 32.578125 63.597656 33.15625 63.429688 33.664063 63.09375 L 34.8125 62.328125 C 43.203125 62.117188 51.574219 60.980469 59.734375 58.875 L 61.191406 58.5 C 61.988281 58.292969 62.675781 57.765625 63.074219 57.042969 C 63.46875 56.320313 63.554688 55.457031 63.300781 54.671875 L 54 25.84375 L 54 21 C 54 10.804688 45.917969 2.480469 35.828125 2.042969 C 35.425781 0.859375 34.316406 0 33 0 Z M 31 2 L 33 2 C 33.550781 2 34 2.449219 34 3 L 34 26 C 34 26.550781 33.550781 27 33 27 L 31 27 C 30.449219 27 30 26.550781 30 26 L 30 3 C 30 2.449219 30.449219 2 31 2 Z M 28 4.050781 L 28 24.953125 C 26.761719 24.335938 25.390625 24 24 24 L 22.390625 24 C 18.707031 24 15.433594 26.203125 14.046875 29.617188 L 3.15625 56.488281 C 2.957031 56.398438 2.785156 56.269531 2.679688 56.078125 C 2.546875 55.832031 2.515625 55.554688 2.601563 55.285156 L 11.953125 26.308594 L 12 21 C 12 11.964844 19.09375 4.574219 28 4.050781 Z M 36 4.050781 C 44.90625 4.574219 52 11.964844 52 21 L 52 26.15625 L 61.394531 55.285156 C 61.480469 55.550781 61.457031 55.832031 61.320313 56.078125 C 61.214844 56.269531 61.042969 56.402344 60.84375 56.488281 L 49.953125 29.617188 C 48.566406 26.203125 45.292969 24 41.609375 24 L 40 24 C 38.609375 24 37.238281 24.335938 36 24.953125 Z M 38.875 6.582031 C 38.488281 6.625 38.144531 6.894531 38.027344 7.292969 C 37.871094 7.820313 38.175781 8.378906 38.703125 8.535156 C 39.390625 8.738281 40.0625 9 40.699219 9.3125 C 40.839844 9.382813 40.988281 9.414063 41.136719 9.414063 C 41.503906 9.414063 41.859375 9.207031 42.03125 8.851563 C 42.277344 8.355469 42.070313 7.757813 41.578125 7.515625 C 40.839844 7.15625 40.066406 6.851563 39.269531 6.617188 C 39.140625 6.578125 39.003906 6.566406 38.875 6.582031 Z M 44.273438 9.5625 C 44.019531 9.578125 43.769531 9.6875 43.585938 9.894531 C 43.21875 10.304688 43.25 10.9375 43.660156 11.308594 C 45.0625 12.558594 46.195313 14.128906 46.9375 15.84375 C 47.101563 16.222656 47.46875 16.449219 47.855469 16.449219 C 47.988281 16.449219 48.121094 16.421875 48.25 16.363281 C 48.757813 16.144531 48.992188 15.558594 48.773438 15.050781 C 47.917969 13.070313 46.609375 11.261719 44.996094 9.816406 C 44.789063 9.632813 44.527344 9.546875 44.273438 9.5625 Z M 22.390625 26 L 24 26 C 25.160156 26 26.304688 26.289063 27.316406 26.835938 C 27.636719 27.007813 27.96875 27.152344 28.300781 27.285156 C 28.785156 28.296875 29.808594 29 31 29 L 33 29 C 34.191406 29 35.214844 28.296875 35.699219 27.285156 C 36.03125 27.152344 36.359375 27.007813 36.683594 26.835938 C 37.695313 26.289063 38.839844 26 40 26 L 41.609375 26 C 44.472656 26 47.023438 27.714844 48.097656 30.371094 L 58.902344 57.019531 C 52.042969 58.765625 45.03125 59.820313 37.992188 60.207031 L 42.785156 57.011719 C 43.335938 57.613281 44.121094 58 45 58 C 46.652344 58 48 56.652344 48 55 C 48 53.722656 47.191406 52.636719 46.0625 52.203125 L 51.832031 43.554688 C 52.140625 43.09375 52.015625 42.476563 51.554688 42.167969 C 51.09375 41.859375 50.472656 41.984375 50.167969 42.445313 L 43.785156 52.015625 L 35 41.636719 L 35 40 C 35 38.347656 33.652344 37 32 37 C 30.347656 37 29 38.347656 29 40 L 29 41.636719 L 20.214844 52.015625 L 13.832031 42.445313 C 13.523438 41.984375 12.90625 41.863281 12.445313 42.171875 C 11.984375 42.476563 11.859375 43.097656 12.167969 43.558594 L 17.9375 52.203125 C 16.808594 52.636719 16 53.722656 16 55 C 16 56.652344 17.347656 58 19 58 C 19.878906 58 20.664063 57.613281 21.214844 57.011719 L 26.007813 60.207031 C 18.964844 59.820313 11.957031 58.765625 5.097656 57.019531 L 15.902344 30.371094 C 16.980469 27.714844 19.523438 26 22.390625 26 Z M 23.042969 28 C 20.179688 28 17.632813 29.714844 16.558594 32.367188 L 16.503906 32.496094 C 16.003906 33.730469 16.148438 35.128906 16.890625 36.234375 C 17.636719 37.339844 18.878906 38 20.210938 38 L 26 38 C 28.207031 38 30 36.207031 30 34 C 30 30.691406 27.308594 28 24 28 Z M 40 28 C 36.691406 28 34 30.691406 34 34 C 34 36.207031 35.792969 38 38 38 L 43.789063 38 C 45.121094 38 46.363281 37.339844 47.109375 36.234375 C 47.851563 35.128906 48 33.730469 47.496094 32.496094 L 47.445313 32.371094 C 46.371094 29.714844 43.820313 28 40.957031 28 Z M 23.042969 30 L 24 30 C 26.207031 30 28 31.792969 28 34 C 28 35.101563 27.101563 36 26 36 L 20.210938 36 C 19.535156 36 18.929688 35.679688 18.550781 35.117188 C 18.171875 34.554688 18.101563 33.875 18.355469 33.25 L 18.40625 33.121094 C 19.175781 31.226563 20.996094 30 23.042969 30 Z M 40 30 L 40.957031 30 C 43.003906 30 44.824219 31.226563 45.59375 33.125 L 45.644531 33.25 C 45.898438 33.875 45.828125 34.558594 45.449219 35.117188 C 45.070313 35.679688 44.464844 36 43.789063 36 L 38 36 C 36.898438 36 36 35.101563 36 34 C 36 31.792969 37.792969 30 40 30 Z M 32 39 C 32.550781 39 33 39.449219 33 40 L 33 41 L 31 41 L 31 40 C 31 39.449219 31.449219 39 32 39 Z M 17 40 C 16.445313 40 16 40.445313 16 41 C 16 41.554688 16.445313 42 17 42 L 26 42 C 26.554688 42 27 41.554688 27 41 C 27 40.445313 26.554688 40 26 40 Z M 38 40 C 37.445313 40 37 40.445313 37 41 C 37 41.554688 37.445313 42 38 42 L 47 42 C 47.554688 42 48 41.554688 48 41 C 48 40.445313 47.554688 40 47 40 Z M 30.464844 43 L 33.535156 43 L 42.417969 53.5 C 42.324219 53.65625 42.246094 53.824219 42.183594 54 L 21.816406 54 C 21.753906 53.824219 21.675781 53.65625 21.582031 53.5 Z M 32 46 C 31.445313 46 31 46.445313 31 47 L 31 52 C 31 52.554688 31.445313 53 32 53 C 32.554688 53 33 52.554688 33 52 L 33 47 C 33 46.445313 32.554688 46 32 46 Z M 27 49 C 26.445313 49 26 49.445313 26 50 L 26 52 C 26 52.554688 26.445313 53 27 53 C 27.554688 53 28 52.554688 28 52 L 28 50 C 28 49.445313 27.554688 49 27 49 Z M 37 49 C 36.445313 49 36 49.445313 36 50 L 36 52 C 36 52.554688 36.445313 53 37 53 C 37.554688 53 38 52.554688 38 52 L 38 50 C 38 49.445313 37.554688 49 37 49 Z M 19 54 C 19.550781 54 20 54.449219 20 55 C 20 55.550781 19.550781 56 19 56 C 18.449219 56 18 55.550781 18 55 C 18 54.449219 18.449219 54 19 54 Z M 45 54 C 45.550781 54 46 54.449219 46 55 C 46 55.550781 45.550781 56 45 56 C 44.449219 56 44 55.550781 44 55 C 44 54.449219 44.449219 54 45 54 Z M 23.300781 56 L 40.699219 56 L 32.558594 61.429688 C 32.21875 61.65625 31.78125 61.65625 31.445313 61.429688 Z"
        }, void 0, false, {
            fileName: "[project]/src/assets/svgs/DarthVaderIcon.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/assets/svgs/DarthVaderIcon.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DarthVaderIcon;
}),
"[project]/src/components/shared/navigation/Logo.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/palette.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDimensions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDimensions.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$DarthVaderIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svgs/DarthVaderIcon.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
const Logo = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDimensions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const handleNavigation = (path)=>{
        router.push(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        onClick: ()=>handleNavigation("/"),
        sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            justifyContent: isMobile ? "center" : "flex-start",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svgs$2f$DarthVaderIcon$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                width: isMobile ? "34px" : "42px",
                height: isMobile ? "34px" : "42px",
                color: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].galactic.stars
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navigation/Logo.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h5",
                color: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].galactic.stars,
                children: "SW Planets"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/navigation/Logo.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/navigation/Logo.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Logo;
}),
"[project]/src/components/shared/navigation/Header/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/AppBar/AppBar.js [ssr] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Toolbar/Toolbar.js [ssr] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/palette.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navigation$2f$Logo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/navigation/Logo.tsx [ssr] (ecmascript)");
;
;
;
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
        position: "static",
        elevation: 0,
        sx: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].branded.mainBg
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
            sx: {
                display: "flex",
                alignItems: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navigation$2f$Logo$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/shared/navigation/Header/index.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/shared/navigation/Header/index.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/navigation/Header/index.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
}),
"[project]/src/components/shared/navigation/Footer/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/palette.ts [ssr] (ecmascript)");
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].branded.mainBg,
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "subtitle2",
            color: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].galactic.stars,
            children: "May the force be with you"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/navigation/Footer/index.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/navigation/Footer/index.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/shared/layout.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/palette.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navigation$2f$Header$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/navigation/Header/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navigation$2f$Footer$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/navigation/Footer/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDimensions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDimensions.ts [ssr] (ecmascript)");
;
;
;
;
;
;
const Layout = (props)=>{
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDimensions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            flexDirection: "column",
            maxHeight: "100vh",
            height: "100vh",
            width: "100%",
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].branded.darkGray,
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navigation$2f$Header$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/shared/layout.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    flex: 1,
                    display: "flex",
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].branded.lightBg,
                    padding: isMobile ? 2 : 4,
                    overflow: "auto"
                },
                children: props.children
            }, void 0, false, {
                fileName: "[project]/src/components/shared/layout.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$navigation$2f$Footer$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/shared/layout.tsx",
                lineNumber: 47,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/layout.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Layout;
}),
"[project]/src/pages/_app.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [ssr] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/layout.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/palette.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
function App({ Component, pageProps }) {
    const queryClient = new __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["QueryClient"]();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
        palette: {
            background: {
                default: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].background.default
            }
        },
        typography: {
            fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif'
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "React Boilerplate"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/_app.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["QueryClientProvider"], {
                client: queryClient,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
                    theme: theme,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/pages/_app.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                                ...pageProps
                            }, void 0, false, {
                                fileName: "[project]/src/pages/_app.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/_app.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/_app.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/_app.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = App;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__60212df9._.js.map