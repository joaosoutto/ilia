module.exports = {

"[project]/src/components/Container/styles.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "MainContainerWrapper": ()=>MainContainerWrapper,
    "NoContentWrapper": ()=>NoContentWrapper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [ssr] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.ts [ssr] (ecmascript)");
;
;
const NoContentWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"])(()=>({
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 0
    }));
const MainContainerWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"])(({ isMobile })=>({
        flex: 1,
        width: "100%",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["theme"].spacing(2),
        maxHeight: "100%",
        height: "100%",
        border: "1px solid red",
        padding: isMobile ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["theme"].spacing(1)
    }));
}),
"[project]/src/components/Container/MainContainer.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDimensions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDimensions.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2f$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container/styles.ts [ssr] (ecmascript)");
;
;
;
const MainContainer = ({ children })=>{
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDimensions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2f$styles$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["MainContainerWrapper"], {
        isMobile: isMobile,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Container/MainContainer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MainContainer;
}),
"[externals]/axios [external] (axios, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/contants/api.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BASE_API_URL": ()=>BASE_API_URL
});
const BASE_API_URL = "https://swapi.dev/api";
}),
"[project]/services/planets.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contants/api.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
class PlanetsApi {
    static getPlanets(params) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_API_URL"]}/planets`, {
            params
        });
    }
    static getPlanetDetails(id) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_API_URL"]}/planets/${id}`);
    }
}
const __TURBOPACK__default__export__ = PlanetsApi;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/query/constants.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "QUERY_KEYS": ()=>QUERY_KEYS
});
const QUERY_KEYS = {
    planets: "planets"
};
}),
"[project]/query/planets/usePlanets.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/planets.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$query$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/query/constants.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const usePlanets = (params)=>{
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const fetchPage = (number)=>{
        setCurrentPage(number);
    };
    const query = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$29$__["useQuery"])({
        queryKey: [
            __TURBOPACK__imported__module__$5b$project$5d2f$query$2f$constants$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["QUERY_KEYS"].planets,
            params,
            currentPage
        ],
        queryFn: async ()=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].getPlanets({
                ...params || {},
                page: currentPage
            })
    });
    return {
        planetsResponse: query.data?.data,
        fetchPage,
        currentPage,
        ...query
    };
};
const __TURBOPACK__default__export__ = usePlanets;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/hooks/useDebounce.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useDebounce": ()=>useDebounce
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
}),
"[project]/src/components/searchInput/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SearchOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/SearchOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/palette.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme/theme.ts [ssr] (ecmascript)");
;
;
;
;
;
;
const SearchInput = ({ placeholder = "Search...", onChange, value, isLoading })=>{
    const getEndAdornment = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/src/components/searchInput/index.tsx",
                lineNumber: 17,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        return value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
            size: "small",
            onClick: ()=>onChange?.(""),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].primary[600]
                }
            }, void 0, false, {
                fileName: "[project]/src/components/searchInput/index.tsx",
                lineNumber: 22,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/searchInput/index.tsx",
            lineNumber: 21,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
        variant: "outlined",
        placeholder: placeholder,
        size: "small",
        fullWidth: true,
        disabled: isLoading,
        InputProps: {
            startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SearchOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$palette$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["palette"].primary.main,
                    marginRight: __TURBOPACK__imported__module__$5b$project$5d2f$theme$2f$theme$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["theme"].spacing(1)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/searchInput/index.tsx",
                lineNumber: 37,
                columnNumber: 11
            }, void 0),
            endAdornment: getEndAdornment()
        },
        onChange: (e)=>onChange?.(e.target.value),
        value: value
    }, void 0, false, {
        fileName: "[project]/src/components/searchInput/index.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SearchInput;
}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}}),
"[project]/contants/planets.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PlanetClimate": ()=>PlanetClimate
});
var PlanetClimate = /*#__PURE__*/ function(PlanetClimate) {
    PlanetClimate["ARID"] = "arid";
    PlanetClimate["TEMPERATE"] = "tempaerate";
    PlanetClimate["FROZEN"] = "frozen";
    PlanetClimate["MURKY"] = "murky";
    PlanetClimate["HOT"] = "hot";
    PlanetClimate["TROPICAL"] = "tropical";
    PlanetClimate["POLLUTED"] = "polluted";
    PlanetClimate["UNKNOWN"] = "unknown";
    PlanetClimate["SUPERHEATED"] = "superheated";
    return PlanetClimate;
}({});
}),
"[project]/src/utils/planets.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getClimateColor": ()=>getClimateColor
});
var __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contants/planets.ts [ssr] (ecmascript)");
;
function getClimateColor(climate) {
    switch(climate){
        case __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PlanetClimate"].ARID:
            return "#EDC988";
        case __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PlanetClimate"].TEMPERATE:
            return "#88B04B";
        case "frozen":
            return "#B3E0FF";
        case __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PlanetClimate"].MURKY:
            return "#6B705C";
        case __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PlanetClimate"].HOT:
            return "#FF5733";
        case __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PlanetClimate"].TROPICAL:
            return "#29B6F6";
        case __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PlanetClimate"].POLLUTED:
            return "#757575";
        case __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PlanetClimate"].UNKNOWN:
            return "#BDBDBD";
        case __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PlanetClimate"].SUPERHEATED:
            return "#FF1744";
        case __TURBOPACK__imported__module__$5b$project$5d2f$contants$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["PlanetClimate"].FROZEN:
            return "#90CAF9";
        default:
            return "#88B04B";
    }
}
}),
"[project]/src/components/DataGrid/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DataGrid": ()=>DataGrid
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [ssr] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PublicOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/PublicOutlined.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Terrain$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Terrain.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WbSunny$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/WbSunny.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Star.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Satellite$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Satellite.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/planets.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const DataGrid = ({ results })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        style: {
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "20px",
            padding: "20px"
        },
        children: results?.map((result)=>{
            const primaryClimate = result.climate.split(",")[0].trim();
            const climateColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$planets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getClimateColor"])(primaryClimate);
            // Create climate-specific background gradients
            const getClimateBackground = (climate, color)=>{
                switch(climate.toLowerCase()){
                    case 'arid':
                        return `
                radial-gradient(circle at 20% 20%, ${color}20 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${color}15 0%, transparent 50%),
                linear-gradient(135deg, #2D1B00 0%, #4A2C00 50%, #1A0F00 100%)
              `;
                    case 'temperate':
                        return `
                radial-gradient(circle at 20% 20%, ${color}20 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${color}15 0%, transparent 50%),
                linear-gradient(135deg, #0D2B00 0%, #1A4D00 50%, #051A00 100%)
              `;
                    case 'frozen':
                        return `
                radial-gradient(circle at 20% 20%, ${color}20 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${color}15 0%, transparent 50%),
                linear-gradient(135deg, #001A2B 0%, #003D5C 50%, #000D1A 100%)
              `;
                    case 'hot':
                        return `
                radial-gradient(circle at 20% 20%, ${color}20 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${color}15 0%, transparent 50%),
                linear-gradient(135deg, #2B0D00 0%, #5C1A00 50%, #1A0500 100%)
              `;
                    case 'tropical':
                        return `
                radial-gradient(circle at 20% 20%, ${color}20 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${color}15 0%, transparent 50%),
                linear-gradient(135deg, #001A2B 0%, #003D5C 50%, #000D1A 100%)
              `;
                    case 'murky':
                        return `
                radial-gradient(circle at 20% 20%, ${color}20 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${color}15 0%, transparent 50%),
                linear-gradient(135deg, #1A1A0D 0%, #2B2B1A 50%, #0D0D05 100%)
              `;
                    case 'polluted':
                        return `
                radial-gradient(circle at 20% 20%, ${color}20 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${color}15 0%, transparent 50%),
                linear-gradient(135deg, #1A1A1A 0%, #2B2B2B 50%, #0D0D0D 100%)
              `;
                    case 'superheated':
                        return `
                radial-gradient(circle at 20% 20%, ${color}25 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${color}20 0%, transparent 50%),
                linear-gradient(135deg, #2B0000 0%, #5C0000 50%, #1A0000 100%)
              `;
                    default:
                        return `
                radial-gradient(circle at 20% 20%, ${color}20 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${color}15 0%, transparent 50%),
                linear-gradient(135deg, #000000 0%, #301841 50%, #000000 100%)
              `;
                }
            };
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                sx: {
                    background: getClimateBackground(primaryClimate, climateColor),
                    border: `2px solid ${climateColor}`,
                    borderRadius: "20px",
                    padding: "24px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    minHeight: "320px",
                    "&:hover": {
                        transform: "translateY(-12px) scale(1.02)",
                        boxShadow: `
                  0 25px 50px ${climateColor}30,
                  0 0 30px ${climateColor}20,
                  inset 0 0 20px ${climateColor}10
                `,
                        borderColor: climateColor,
                        "& .planet-glow": {
                            opacity: 1,
                            transform: "scale(1.1)"
                        },
                        "& .star-field": {
                            opacity: 0.8
                        }
                    },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "6px",
                        background: `linear-gradient(90deg, transparent, ${climateColor}, transparent)`,
                        borderRadius: "20px 20px 0 0"
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "200px",
                        height: "200px",
                        background: `radial-gradient(circle, ${climateColor}05 0%, transparent 70%)`,
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 0
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        className: "star-field",
                        sx: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            opacity: 0.3,
                            background: `
                  radial-gradient(2px 2px at 20px 30px, #FFFFFF, transparent),
                  radial-gradient(2px 2px at 40px 70px, #FFFFFF, transparent),
                  radial-gradient(1px 1px at 90px 40px, #FFFFFF, transparent),
                  radial-gradient(1px 1px at 130px 80px, #FFFFFF, transparent),
                  radial-gradient(2px 2px at 160px 30px, #FFFFFF, transparent)
                `,
                            backgroundRepeat: "repeat",
                            backgroundSize: "200px 100px",
                            zIndex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataGrid/index.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            zIndex: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            className: "planet-glow",
                            sx: {
                                width: "60px",
                                height: "60px",
                                background: `linear-gradient(45deg, ${climateColor}40, ${climateColor}20)`,
                                border: `3px solid ${climateColor}`,
                                boxShadow: `
                    0 0 20px ${climateColor}50,
                    inset 0 0 20px ${climateColor}20
                  `,
                                opacity: 0.8,
                                transition: "all 0.4s ease",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "-2px",
                                    left: "-2px",
                                    right: "-2px",
                                    bottom: "-2px",
                                    background: `conic-gradient(from 0deg, ${climateColor}, transparent, ${climateColor})`,
                                    borderRadius: "50%",
                                    zIndex: -1,
                                    animation: "rotate 3s linear infinite"
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PublicOutlined$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    color: climateColor,
                                    fontSize: "32px",
                                    filter: `drop-shadow(0 0 8px ${climateColor})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataGrid/index.tsx",
                                lineNumber: 198,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/DataGrid/index.tsx",
                            lineNumber: 171,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataGrid/index.tsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            position: "relative",
                            zIndex: 2,
                            marginBottom: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h5",
                                sx: {
                                    color: "#FFFFFF",
                                    fontWeight: "bold",
                                    fontSize: "1.5rem",
                                    textShadow: `
                    0 0 10px ${climateColor},
                    0 0 20px ${climateColor}50,
                    0 0 30px ${climateColor}30
                  `,
                                    maxWidth: "calc(100% - 80px)",
                                    position: "relative",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        left: "-10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        width: "4px",
                                        height: "60%",
                                        background: `linear-gradient(to bottom, ${climateColor}, transparent)`,
                                        borderRadius: "2px"
                                    }
                                },
                                children: [
                                    "🌌 ",
                                    result.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DataGrid/index.tsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "caption",
                                sx: {
                                    color: `${climateColor}80`,
                                    fontSize: "0.7rem",
                                    fontWeight: 500,
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    display: "block",
                                    marginTop: "4px"
                                },
                                children: "PLANET CLASSIFICATION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DataGrid/index.tsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DataGrid/index.tsx",
                        lineNumber: 209,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            position: "relative",
                            zIndex: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                            spacing: 2.5,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                        padding: "8px 12px",
                                        background: `linear-gradient(90deg, ${climateColor}10, transparent)`,
                                        borderRadius: "8px",
                                        border: `1px solid ${climateColor}20`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Terrain$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                color: climateColor,
                                                fontSize: "22px",
                                                filter: `drop-shadow(0 0 4px ${climateColor})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DataGrid/index.tsx",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "caption",
                                                    sx: {
                                                        color: `${climateColor}60`,
                                                        fontSize: "0.7rem",
                                                        fontWeight: 600,
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.5px",
                                                        display: "block"
                                                    },
                                                    children: "SURFACE TERRAIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "body2",
                                                    sx: {
                                                        color: "#FFFFFF",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500
                                                    },
                                                    children: result.terrain || "Unknown"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DataGrid/index.tsx",
                                            lineNumber: 270,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                    lineNumber: 258,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                        padding: "8px 12px",
                                        background: `linear-gradient(90deg, ${climateColor}10, transparent)`,
                                        borderRadius: "8px",
                                        border: `1px solid ${climateColor}20`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Satellite$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                color: climateColor,
                                                fontSize: "22px",
                                                filter: `drop-shadow(0 0 4px ${climateColor})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DataGrid/index.tsx",
                                            lineNumber: 309,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "caption",
                                                    sx: {
                                                        color: `${climateColor}60`,
                                                        fontSize: "0.7rem",
                                                        fontWeight: 600,
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.5px",
                                                        display: "block"
                                                    },
                                                    children: "PLANETARY DIAMETER"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "body2",
                                                    sx: {
                                                        color: "#FFFFFF",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500
                                                    },
                                                    children: result.diameter === "unknown" ? "Unknown" : `${Number(result.diameter).toLocaleString()} km`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DataGrid/index.tsx",
                                            lineNumber: 310,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                    lineNumber: 298,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                        padding: "8px 12px",
                                        background: `linear-gradient(90deg, ${climateColor}10, transparent)`,
                                        borderRadius: "8px",
                                        border: `1px solid ${climateColor}20`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WbSunny$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                color: climateColor,
                                                fontSize: "22px",
                                                filter: `drop-shadow(0 0 4px ${climateColor})`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DataGrid/index.tsx",
                                            lineNumber: 351,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "caption",
                                                    sx: {
                                                        color: `${climateColor}60`,
                                                        fontSize: "0.7rem",
                                                        fontWeight: 600,
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.5px",
                                                        display: "block"
                                                    },
                                                    children: "ATMOSPHERIC CLIMATE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "body2",
                                                    sx: {
                                                        color: "#FFFFFF",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 500
                                                    },
                                                    children: result.climate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/DataGrid/index.tsx",
                                            lineNumber: 352,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        marginTop: "16px",
                                        textAlign: "center"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            sx: {
                                                color: climateColor
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DataGrid/index.tsx",
                                            lineNumber: 382,
                                            columnNumber: 27
                                        }, void 0),
                                        label: `${primaryClimate.charAt(0).toUpperCase() + primaryClimate.slice(1)} CLASS`,
                                        sx: {
                                            backgroundColor: `${climateColor}15`,
                                            color: climateColor,
                                            border: `2px solid ${climateColor}`,
                                            fontWeight: "bold",
                                            fontSize: "0.8rem",
                                            padding: "8px 16px",
                                            height: "36px",
                                            boxShadow: `0 0 15px ${climateColor}30`,
                                            "&:hover": {
                                                backgroundColor: `${climateColor}25`,
                                                boxShadow: `0 0 20px ${climateColor}40`
                                            },
                                            "& .MuiChip-icon": {
                                                fontSize: "18px"
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DataGrid/index.tsx",
                                        lineNumber: 381,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DataGrid/index.tsx",
                                    lineNumber: 380,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DataGrid/index.tsx",
                            lineNumber: 256,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataGrid/index.tsx",
                        lineNumber: 255,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            background: `linear-gradient(90deg, transparent, ${climateColor}, transparent)`,
                            opacity: 0.8,
                            borderRadius: "0 0 20px 20px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/DataGrid/index.tsx",
                        lineNumber: 407,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                        id: "9a260ea77903f67d",
                        children: "@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
                    }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
                ]
            }, result.name, true, {
                fileName: "[project]/src/components/DataGrid/index.tsx",
                lineNumber: 88,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/DataGrid/index.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Home/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2f$MainContainer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Container/MainContainer.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$query$2f$planets$2f$usePlanets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/query/planets/usePlanets.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDebounce.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchInput$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/searchInput/index.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataGrid$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DataGrid/index.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$query$2f$planets$2f$usePlanets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$query$2f$planets$2f$usePlanets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const Home = ()=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const debouncedSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebounce$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useDebounce"])(searchTerm, 1000);
    const { planetsResponse, isLoading, fetchPage, currentPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$query$2f$planets$2f$usePlanets$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"])({
        search: debouncedSearchTerm
    });
    console.log(planetsResponse);
    // console.log(isLoading, isFetching, isPending);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2f$MainContainer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$searchInput$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                placeholder: "Search planets...",
                value: searchTerm,
                onChange: (e)=>setSearchTerm(e),
                isLoading: isLoading
            }, void 0, false, {
                fileName: "[project]/src/components/Home/index.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DataGrid$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DataGrid"], {
                results: planetsResponse?.results
            }, void 0, false, {
                fileName: "[project]/src/components/Home/index.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                onClick: ()=>fetchPage(currentPage + 1),
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/src/components/Home/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                onClick: ()=>fetchPage(currentPage - 1),
                children: "Previous"
            }, void 0, false, {
                fileName: "[project]/src/components/Home/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Home/index.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Home;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Home/index.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const HomePage = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Home$2f$index$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/pages/index.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HomePage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a8547b2b._.js.map