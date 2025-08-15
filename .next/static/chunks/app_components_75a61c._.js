(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_components_75a61c._.js", {

"[project]/app/components/typography/h1/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_h1": "style-module__D3MrTG__component_h1",
  "component_h2": "style-module__D3MrTG__component_h2",
  "component_h3": "style-module__D3MrTG__component_h3",
  "component_h4": "style-module__D3MrTG__component_h4",
  "component_text": "style-module__D3MrTG__component_text",
  "gap": "style-module__D3MrTG__gap",
  "gap_l": "style-module__D3MrTG__gap_l",
  "gap_m": "style-module__D3MrTG__gap_m",
  "gap_s": "style-module__D3MrTG__gap_s",
  "gap_xs": "style-module__D3MrTG__gap_xs",
  "inheritWeight": "style-module__D3MrTG__inheritWeight",
  "responsive": "style-module__D3MrTG__responsive",
  "responsive_gap": "style-module__D3MrTG__responsive_gap",
  "responsive_l": "style-module__D3MrTG__responsive_l",
  "responsive_l_gap": "style-module__D3MrTG__responsive_l_gap",
  "responsive_m": "style-module__D3MrTG__responsive_m",
  "responsive_m_gap": "style-module__D3MrTG__responsive_m_gap",
  "responsive_s": "style-module__D3MrTG__responsive_s",
  "responsive_s_gap": "style-module__D3MrTG__responsive_s_gap",
  "responsive_xs": "style-module__D3MrTG__responsive_xs",
  "responsive_xs_gap": "style-module__D3MrTG__responsive_xs_gap",
  "size_l": "style-module__D3MrTG__size_l",
  "size_m": "style-module__D3MrTG__size_m",
  "size_s": "style-module__D3MrTG__size_s",
  "size_xs": "style-module__D3MrTG__size_xs",
});
}}),
"[project]/app/components/typography/h1/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component H1

	Description:
		Displays a Heading 1.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		gap
			Type: boolean
			Values: true, false
			Default: false
			Description: Add a default gap (padding) below this component.

		responsive
			Type: boolean
			Values: true, false
			Default: true
			Description: Make this component responsive.

		inheritWeight
			Type: boolean
			Values: true, false
			Default: false
			Description: Inherit the font weight from the parent element.

		useTag
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'
			Default: 'h1'
			Description: Use a different HTML tag for this text element.

		...rest
			All other props are passed to <h1> (or the tag you passed in with the "useTag" prop).
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/typography/h1/style.module.css [app-client] (css module)");
;
;
function H1({ id = '', className = '', gap = false, responsive = true, inheritWeight = false, useTag = 'h1', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_h1,
        className
    ];
    // Gap
    if (gap) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gap);
    }
    // Responsive
    if (responsive) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responsive);
        // Add a responsive gap
        if (gap) {
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responsive_gap);
        }
    }
    // Inherit weight
    if (inheritWeight) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inheritWeight);
    }
    // Use a custom HTML tag
    const TagName = useTag;
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagName, {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/typography/h1/index.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, this);
}
_c = H1;
const __TURBOPACK__default__export__ = H1;
var _c;
__turbopack_refresh__.register(_c, "H1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/typography/h2/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_h2": "style-module__RxKlaa__component_h2",
  "component_h3": "style-module__RxKlaa__component_h3",
  "component_h4": "style-module__RxKlaa__component_h4",
  "component_text": "style-module__RxKlaa__component_text",
  "gap": "style-module__RxKlaa__gap",
  "gap_l": "style-module__RxKlaa__gap_l",
  "gap_m": "style-module__RxKlaa__gap_m",
  "gap_s": "style-module__RxKlaa__gap_s",
  "gap_xs": "style-module__RxKlaa__gap_xs",
  "inheritWeight": "style-module__RxKlaa__inheritWeight",
  "responsive": "style-module__RxKlaa__responsive",
  "responsive_gap": "style-module__RxKlaa__responsive_gap",
  "responsive_l": "style-module__RxKlaa__responsive_l",
  "responsive_l_gap": "style-module__RxKlaa__responsive_l_gap",
  "responsive_m": "style-module__RxKlaa__responsive_m",
  "responsive_m_gap": "style-module__RxKlaa__responsive_m_gap",
  "responsive_s": "style-module__RxKlaa__responsive_s",
  "responsive_s_gap": "style-module__RxKlaa__responsive_s_gap",
  "responsive_xs": "style-module__RxKlaa__responsive_xs",
  "responsive_xs_gap": "style-module__RxKlaa__responsive_xs_gap",
  "size_l": "style-module__RxKlaa__size_l",
  "size_m": "style-module__RxKlaa__size_m",
  "size_s": "style-module__RxKlaa__size_s",
  "size_xs": "style-module__RxKlaa__size_xs",
});
}}),
"[project]/app/components/typography/h2/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component H2

	Description:
		Displays a Heading 2.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		gap
			Type: boolean
			Values: true, false
			Default: false
			Description: Add a default gap (padding) below this component.

		responsive
			Type: boolean
			Values: true, false
			Default: true
			Description: Make this component responsive.

		inheritWeight
			Type: boolean
			Values: true, false
			Default: false
			Description: Inherit the font weight from the parent element.

		useTag
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'
			Default: 'h2'
			Description: Use a different HTML tag for this text element.

		...rest
			All other props are passed to <h2> (or the tag you passed in with the "useTag" prop).
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/typography/h2/style.module.css [app-client] (css module)");
;
;
function H2({ id = '', className = '', gap = false, responsive = true, inheritWeight = false, useTag = 'h2', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_h2,
        className
    ];
    // Gap
    if (gap) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gap);
    }
    // Responsive
    if (responsive) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responsive);
        // Add a responsive gap
        if (gap) {
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responsive_gap);
        }
    }
    // Inherit weight
    if (inheritWeight) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inheritWeight);
    }
    // Use a custom HTML tag
    const TagName = useTag;
    /* Output the component
-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagName, {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/typography/h2/index.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, this);
}
_c = H2;
const __TURBOPACK__default__export__ = H2;
var _c;
__turbopack_refresh__.register(_c, "H2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/typography/h3/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_h3": "style-module__mVmpGa__component_h3",
  "component_h4": "style-module__mVmpGa__component_h4",
  "component_text": "style-module__mVmpGa__component_text",
  "gap": "style-module__mVmpGa__gap",
  "gap_l": "style-module__mVmpGa__gap_l",
  "gap_m": "style-module__mVmpGa__gap_m",
  "gap_s": "style-module__mVmpGa__gap_s",
  "gap_xs": "style-module__mVmpGa__gap_xs",
  "inheritWeight": "style-module__mVmpGa__inheritWeight",
  "responsive": "style-module__mVmpGa__responsive",
  "responsive_gap": "style-module__mVmpGa__responsive_gap",
  "responsive_l": "style-module__mVmpGa__responsive_l",
  "responsive_l_gap": "style-module__mVmpGa__responsive_l_gap",
  "responsive_m": "style-module__mVmpGa__responsive_m",
  "responsive_m_gap": "style-module__mVmpGa__responsive_m_gap",
  "responsive_s": "style-module__mVmpGa__responsive_s",
  "responsive_s_gap": "style-module__mVmpGa__responsive_s_gap",
  "responsive_xs": "style-module__mVmpGa__responsive_xs",
  "responsive_xs_gap": "style-module__mVmpGa__responsive_xs_gap",
  "size_l": "style-module__mVmpGa__size_l",
  "size_m": "style-module__mVmpGa__size_m",
  "size_s": "style-module__mVmpGa__size_s",
  "size_xs": "style-module__mVmpGa__size_xs",
});
}}),
"[project]/app/components/typography/h3/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component H3

	Description:
		Displays a Heading 3.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		gap
			Type: boolean
			Values: true, false
			Default: false
			Description: Add a default gap (padding) below this component.

		responsive
			Type: boolean
			Values: true, false
			Default: true
			Description: Make this component responsive.

		inheritWeight
			Type: boolean
			Values: true, false
			Default: false
			Description: Inherit the font weight from the parent element.

		useTag
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'
			Default: 'h3'
			Description: Use a different HTML tag for this text element.

		...rest
			All other props are passed to <h3> (or the tag you passed in with the "useTag" prop).
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/typography/h3/style.module.css [app-client] (css module)");
;
;
function H3({ id = '', className = '', gap = false, responsive = true, inheritWeight = false, useTag = 'h3', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_h3,
        className
    ];
    // Gap
    if (gap) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gap);
    }
    // Responsive
    if (responsive) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responsive);
        // Add a responsive gap
        if (gap) {
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responsive_gap);
        }
    }
    // Inherit weight
    if (inheritWeight) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inheritWeight);
    }
    // Use a custom HTML tag
    const TagName = useTag;
    /* Output the component
-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagName, {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/typography/h3/index.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, this);
}
_c = H3;
const __TURBOPACK__default__export__ = H3;
var _c;
__turbopack_refresh__.register(_c, "H3");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/typography/h4/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_h4": "style-module__zamm7a__component_h4",
  "component_text": "style-module__zamm7a__component_text",
  "gap": "style-module__zamm7a__gap",
  "gap_l": "style-module__zamm7a__gap_l",
  "gap_m": "style-module__zamm7a__gap_m",
  "gap_s": "style-module__zamm7a__gap_s",
  "gap_xs": "style-module__zamm7a__gap_xs",
  "inheritWeight": "style-module__zamm7a__inheritWeight",
  "responsive": "style-module__zamm7a__responsive",
  "responsive_gap": "style-module__zamm7a__responsive_gap",
  "responsive_l": "style-module__zamm7a__responsive_l",
  "responsive_l_gap": "style-module__zamm7a__responsive_l_gap",
  "responsive_m": "style-module__zamm7a__responsive_m",
  "responsive_m_gap": "style-module__zamm7a__responsive_m_gap",
  "responsive_s": "style-module__zamm7a__responsive_s",
  "responsive_s_gap": "style-module__zamm7a__responsive_s_gap",
  "responsive_xs": "style-module__zamm7a__responsive_xs",
  "responsive_xs_gap": "style-module__zamm7a__responsive_xs_gap",
  "size_l": "style-module__zamm7a__size_l",
  "size_m": "style-module__zamm7a__size_m",
  "size_s": "style-module__zamm7a__size_s",
  "size_xs": "style-module__zamm7a__size_xs",
});
}}),
"[project]/app/components/typography/h4/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component H4

	Description:
		Displays a Heading 4.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		gap
			Type: boolean
			Values: true, false
			Default: false
			Description: Add a default gap (padding) below this component.

		responsive
			Type: boolean
			Values: true, false
			Default: true
			Description: Make this component responsive.

		inheritWeight
			Type: boolean
			Values: true, false
			Default: false
			Description: Inherit the font weight from the parent element.

		useTag
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'
			Default: 'h4'
			Description: Use a different HTML tag for this text element.

		...rest
			All other props are passed to <h4> (or the tag you passed in with the "useTag" prop).
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/typography/h4/style.module.css [app-client] (css module)");
;
;
function H4({ id = '', className = '', gap = false, responsive = true, inheritWeight = false, useTag = 'h4', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_h4,
        className
    ];
    // Gap
    if (gap) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gap);
    }
    // Responsive
    if (responsive) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responsive);
        // Add a responsive gap
        if (gap) {
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].responsive_gap);
        }
    }
    // Inherit weight
    if (inheritWeight) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inheritWeight);
    }
    // Use a custom HTML tag
    const TagName = useTag;
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagName, {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/typography/h4/index.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, this);
}
_c = H4;
const __TURBOPACK__default__export__ = H4;
var _c;
__turbopack_refresh__.register(_c, "H4");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/typography/text/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_text": "style-module__YUg0mW__component_text",
  "gap_l": "style-module__YUg0mW__gap_l",
  "gap_m": "style-module__YUg0mW__gap_m",
  "gap_s": "style-module__YUg0mW__gap_s",
  "gap_xs": "style-module__YUg0mW__gap_xs",
  "inheritWeight": "style-module__YUg0mW__inheritWeight",
  "responsive_l": "style-module__YUg0mW__responsive_l",
  "responsive_l_gap": "style-module__YUg0mW__responsive_l_gap",
  "responsive_m": "style-module__YUg0mW__responsive_m",
  "responsive_m_gap": "style-module__YUg0mW__responsive_m_gap",
  "responsive_s": "style-module__YUg0mW__responsive_s",
  "responsive_s_gap": "style-module__YUg0mW__responsive_s_gap",
  "responsive_xs": "style-module__YUg0mW__responsive_xs",
  "responsive_xs_gap": "style-module__YUg0mW__responsive_xs_gap",
  "size_l": "style-module__YUg0mW__size_l",
  "size_m": "style-module__YUg0mW__size_m",
  "size_s": "style-module__YUg0mW__size_s",
  "size_xs": "style-module__YUg0mW__size_xs",
});
}}),
"[project]/app/components/link/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_link": "style-module__Qe3c8W__component_link",
  "link": "style-module__Qe3c8W__link",
  "text": "style-module__Qe3c8W__text",
});
}}),
"[project]/app/components/link/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Link

	Description:
		Displays a Link.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		size
			Type: string
			Values: 'inherit', 'h1', 'h2', 'h3', 'h4', 'l', 'm', 's', 'xs'
			Default: 'inherit'
			Description: Define the size for the link (use 'inherit' to inherit the size from a containing <Text> component).

		href
			Type: string
			Values: Any link
			Default: ''
			Description: Define the href for the link.

		target
			Type: string
			Values: '_blank', '_self', '_parent', '_top'
			Default: '_self'
			Description: Define the target for the link.

		gap
			Type: boolean
			Values: true, false
			Default: false
			Description: Add a default gap (padding) below this component based on the text size.

		...rest
			All other props are passed to <NextLink>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h1/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h2/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h3/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h4/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/link/style.module.css [app-client] (css module)");
;
;
;
;
;
;
;
;
function Link({ id = '', className = '', size = 'inherit', gap = false, href = '', target = '_self', children, // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onClick = ()=>{}, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_link,
        className
    ];
    /* Define the link
	-------------------------------------------------- */ let output = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: id,
        href: href,
        target: target,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
        onClick: handleClick,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/link/index.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this);
    /* Define the text size (as a wrapping element)
	-------------------------------------------------- */ if (size !== 'inherit') {
        if (size === 'h1') {
            output = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                gap: gap,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: output
            }, void 0, false, {
                fileName: "[project]/app/components/link/index.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this);
        } else if (size === 'h2') {
            output = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                gap: gap,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: output
            }, void 0, false, {
                fileName: "[project]/app/components/link/index.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this);
        } else if (size === 'h3') {
            output = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                gap: gap,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: output
            }, void 0, false, {
                fileName: "[project]/app/components/link/index.tsx",
                lineNumber: 122,
                columnNumber: 13
            }, this);
        } else if (size === 'h4') {
            output = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                gap: gap,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: output
            }, void 0, false, {
                fileName: "[project]/app/components/link/index.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this);
        } else {
            output = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: size,
                gap: gap,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: output
            }, void 0, false, {
                fileName: "[project]/app/components/link/index.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this);
        }
    }
    /* On click of the <NextLink> element
	-------------------------------------------------- */ function handleClick(event) {
        // If there's no href, prevent this from doing anything
        if (href === '') {
            event.preventDefault();
        }
        // Also call the event handler that could be passed in from the parent
        onClick(event);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        children: output
    }, void 0, false, {
        fileName: "[project]/app/components/link/index.tsx",
        lineNumber: 149,
        columnNumber: 3
    }, this);
}
_c = Link;
const __TURBOPACK__default__export__ = Link;
var _c;
__turbopack_refresh__.register(_c, "Link");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Text

	Description:
		Displays paragraph text.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		size
			Type: string
			Values: 'l', 'm', 's', 'xs'
			Default: true
			Description: Set the text size.

		gap
			Type: boolean
			Values: true, false
			Default: false
			Description: Add a default gap (padding) below this component.

		responsive
			Type: boolean
			Values: true, false
			Default: true
			Description: Make this component responsive.

		inheritWeight
			Type: boolean
			Values: true, false
			Default: false
			Description: Inherit the font weight from the parent element.

		useTag
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'
			Default: 'div'
			Description: Use a different HTML tag for this text element.

		truncate
			Type: number
			Values: Any number
			Default: 0
			Description: Set the number of characters to show before truncating the text (this automatically rounds to the nearest word).
									 It will then show "...read more" as a clickable link to expand / collapse the text.
									 Make sure that when you use this that you don't pass in any JSX elements as children (everything is converted to text)

		truncateCallback
			Type: Function
			Values: Any function
			Default: () => {}
			Description: A callback function that takes a single argument "expanded" which will either be true or false.

		...rest
			All other props are passed to <div> (or the tag you passed in with the "useTag" prop).
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/typography/text/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/link/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
// This must be done with a require in order for us to use the lib in other projects (https://github.com/vercel/next.js/discussions/69244)
// Previously this line was simply "import { renderToStaticMarkup } from 'react-dom/server';"
const ReactDOMServer = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react-dom/server.browser.js [app-client] (ecmascript)");
;
;
function Text({ id = '', className = '', size = 'm', gap = false, responsive = true, inheritWeight = false, useTag = 'div', truncate = 0, truncateCallback = ()=>{}, children, ...rest }) {
    _s();
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_text,
        className
    ];
    /* Size
	-------------------------------------------------- */ if (size) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['size_' + size]);
    }
    /* Gap
	-------------------------------------------------- */ if (gap) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['gap_' + size]);
    }
    /* Responsive
	-------------------------------------------------- */ if (responsive) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['responsive_' + size]);
        // Add a responsive gap
        if (gap) {
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['responsive_' + size + '_gap']);
        }
    }
    /* Inherit weight
	-------------------------------------------------- */ if (inheritWeight) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inheritWeight);
    }
    /* Use a custom HTML tag
	-------------------------------------------------- */ const TagName = useTag;
    /* Extract the text content from JSX
	-------------------------------------------------- */ function JSXTextContent(content) {
        // Convert the JSX to static HTML
        let textContent = ReactDOMServer.renderToStaticMarkup(content);
        // Remove all HTML tags
        textContent = textContent.replace(/(<([^>]+)>)/gi, "");
        // Return the text content
        return textContent;
    }
    /* Truncate
	-------------------------------------------------- */ // Expanded state (true, false)
    const [expandedState, setExpandedState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Truncate to nearest word function
    function truncateToNearestWord(string, maxLength) {
        const index = string.indexOf(" ", maxLength);
        return index === -1 ? string : string.substring(0, index);
    }
    // If we're truncating
    if (truncate > 0) {
        // Convert the JSX to static HTML
        let textContent = JSXTextContent(children);
        // If the text content is longer than our max truncation length
        if (textContent.length > truncate) {
            // If we're not expanded
            if (!expandedState) {
                // Truncate the text content
                textContent = truncateToNearestWord(textContent, truncate);
                // Update the children to show the truncated text and "read more" button
                children = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        textContent,
                        "...",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: size,
                            href: "",
                            onClick: ()=>{
                                // Update the expanded state to true
                                setExpandedState(true);
                                // Call the passed in truncate callback function (comes from the parent)
                                truncateCallback(true);
                            },
                            children: "read more"
                        }, void 0, false, {
                            fileName: "[project]/app/components/typography/text/index.tsx",
                            lineNumber: 197,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true);
            } else {
                // Update the children to show the full text and "read less" button
                children = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        children,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: size,
                            href: "",
                            onClick: ()=>{
                                // Update the expanded state to false
                                setExpandedState(false);
                                // Call the passed in truncate callback function (comes from the parent)
                                truncateCallback(true);
                            },
                            children: "read less"
                        }, void 0, false, {
                            fileName: "[project]/app/components/typography/text/index.tsx",
                            lineNumber: 219,
                            columnNumber: 18
                        }, this)
                    ]
                }, void 0, true);
            }
        }
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagName, {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/typography/text/index.tsx",
        lineNumber: 242,
        columnNumber: 3
    }, this);
}
_s(Text, "5ADm1+eqeq6r0kFPkTBMh5dS8p4=");
_c = Text;
const __TURBOPACK__default__export__ = Text;
var _c;
__turbopack_refresh__.register(_c, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/arrowButton/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrow": "style-module__E6fZMG__arrow",
  "arrowPosition_left": "style-module__E6fZMG__arrowPosition_left",
  "arrowPosition_right": "style-module__E6fZMG__arrowPosition_right",
  "component_arrowButton": "style-module__E6fZMG__component_arrowButton",
  "size_h1": "style-module__E6fZMG__size_h1",
  "size_h2": "style-module__E6fZMG__size_h2",
  "size_h3": "style-module__E6fZMG__size_h3",
  "size_h4": "style-module__E6fZMG__size_h4",
  "size_l": "style-module__E6fZMG__size_l",
  "size_m": "style-module__E6fZMG__size_m",
  "size_s": "style-module__E6fZMG__size_s",
  "size_xs": "style-module__E6fZMG__size_xs",
});
}}),
"[project]/app/components/arrowButton/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Arrow Button

	Description:
		Displays an Arrow Button.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		arrowPosition
			Type: string
			Values: 'left', 'right'
			Default: 'left'
			Description: Define the position of the arrow icon.

		size
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'l', 'm', 's', 'xs'
			Default: 'l'
			Description: Define the size for the arrow button.

		href
			Type: string
			Values: Any link
			Default: ''
			Description: Define the href for the arrow button.

		target
			Type: string
			Values: '_blank', '_self', '_parent', '_top'
			Default: '_self'
			Description: Define the target for the arrow button.

		...rest
			All other props are passed to <NextLink>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h1/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h2/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h3/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h4/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$arrowButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/arrowButton/style.module.css [app-client] (css module)");
;
;
;
;
;
;
;
;
function ArrowButton({ id = '', className = '', arrowPosition = 'left', size = 'l', href = '', target = '_self', children, // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onClick = ()=>{}, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$arrowButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_arrowButton,
        className
    ];
    // Arrow position
    if (arrowPosition) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$arrowButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['arrowPosition_' + arrowPosition]);
    }
    // Size
    if (size) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$arrowButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['size_' + size]);
    }
    /* Define the arrow icon (we use a custom SVG here - it comes from the "huge icon" pack but has the whitespace removed - this is required for accurate styling in the CSS)
	-------------------------------------------------- */ const icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$arrowButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 15 26",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M5.224 13 15 2.741 12.388 0 0 13l12.388 13L15 23.259z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/app/components/arrowButton/index.tsx",
                lineNumber: 111,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/arrowButton/index.tsx",
            lineNumber: 110,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/arrowButton/index.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, this);
    // Change the position of the arrow icon depending on the "arrowPosition" prop
    let iconLeft;
    let iconRight;
    if (arrowPosition === 'left') {
        iconLeft = icon;
    } else {
        iconRight = icon;
    }
    /* Define the text
	-------------------------------------------------- */ let text;
    if (size === 'h1') {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/arrowButton/index.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
    } else if (size === 'h2') {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/arrowButton/index.tsx",
            lineNumber: 135,
            columnNumber: 10
        }, this);
    } else if (size === 'h3') {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/arrowButton/index.tsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
    } else if (size === 'h4') {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/arrowButton/index.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
    } else {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: size,
            inheritWeight: true,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/arrowButton/index.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
    }
    /* On click of the <NextLink> element
	-------------------------------------------------- */ function handleClick(event) {
        // If there's no href, prevent this from doing anything
        if (href === '') {
            event.preventDefault();
        }
        // Also call the event handler that could be passed in from the parent
        onClick(event);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: classes.join(' '),
        id: id,
        href: href,
        target: target,
        onClick: handleClick,
        ...rest,
        children: [
            iconLeft,
            text,
            iconRight
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/arrowButton/index.tsx",
        lineNumber: 164,
        columnNumber: 3
    }, this);
}
_c = ArrowButton;
const __TURBOPACK__default__export__ = ArrowButton;
var _c;
__turbopack_refresh__.register(_c, "ArrowButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/breadcrumbs/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "breadcrumb": "style-module__eqrpsa__breadcrumb",
  "component_breadcrumbs": "style-module__eqrpsa__component_breadcrumbs",
  "divider": "style-module__eqrpsa__divider",
  "homeIcon": "style-module__eqrpsa__homeIcon",
  "label": "style-module__eqrpsa__label",
});
}}),
"[project]/app/components/icon/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "color_grey": "style-module__inT3VW__color_grey",
  "color_lightGrey": "style-module__inT3VW__color_lightGrey",
  "color_primary": "style-module__inT3VW__color_primary",
  "color_secondary": "style-module__inT3VW__color_secondary",
  "component_icon": "style-module__inT3VW__component_icon",
  "responsive": "style-module__inT3VW__responsive",
  "size_l": "style-module__inT3VW__size_l",
  "size_m": "style-module__inT3VW__size_m",
  "size_s": "style-module__inT3VW__size_s",
  "size_xl": "style-module__inT3VW__size_xl",
  "size_xs": "style-module__inT3VW__size_xs",
  "size_xxs": "style-module__inT3VW__size_xxs",
});
}}),
"[project]/app/components/icon/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Icon

	Description:
		Displays a Icon from the "Huge Icons" icon pack.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any "Huge Icon" name
			Default: ''
			Description: Select an icon by "Huge Icon" name (https://hugeicons.com/icons).

		size
			Type: string
			Values: 'xl', 'l', 'm', 's', 'xs', 'xxs'
			Default: ''
			Description: Define the icon size.

		color
			Type: string
			Values: 'primary', 'secondary', 'grey', 'lightGrey', 'white'
			Default: ''
			Description: Define the icon colour.

		style
			Type: string
			Values: 'stroke', 'duotone', 'solid', 'twotone', 'bulk'
			Default: 'stroke'
			Description: Define the icon style.

		strokeWidth
			Type: number
			Values: Any number
			Default: 2
			Description: Define the icon stroke width.

		type
			Type: string
			Values: 'rounded', 'sharp'
			Default: 'rounded'
			Description: Define the icon type.

		responsive
			Type: boolean
			Values: true, false
			Default: true
			Description: Make this icon responsive.

		...rest
			All other props are passed to <span>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/icon/style.module.css [app-client] (css module)");
;
;
function Icon({ id = '', className = '', name = '', size = 'm', color = 'grey', style = 'stroke', strokeWidth = 2, type = 'rounded', responsive = true, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_icon,
        className
    ];
    // Size
    if (size) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['size_' + size]);
    }
    // Colour
    if (color) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['color_' + color]);
    }
    // Responsive
    if (responsive) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['responsive']);
    }
    /* Dynamically import the icon from Huge Icons
	-------------------------------------------------- */ // Format the name for the import from "calendar-01" to "Calender01Icon"
    // Replace "Icon" if it's accidentally been passed in
    name = name.replace('Icon', '');
    // Split the name on "-"
    const bits = name.split('-');
    // For each bit
    bits.forEach((bit, index)=>{
        // Uppercase first letter
        bits[index] = String(bit).charAt(0).toUpperCase() + String(bit).slice(1);
    });
    // Join the bits together and add "Icon" to the end
    const formattedName = bits.join('') + 'Icon';
    // Import the icon
    const HugeIcon = __turbopack_require__("[project]/node_modules/.pnpm/@hugeicons+react@0.6.3_react@18.3.1/node_modules/@hugeicons/react/dist/cjs/hugeicons-pro-react.js [app-client] (ecmascript)")[formattedName];
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HugeIcon, {
            type: type,
            color: color,
            variant: style,
            strokeWidth: strokeWidth
        }, void 0, false, {
            fileName: "[project]/app/components/icon/index.tsx",
            lineNumber: 148,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/icon/index.tsx",
        lineNumber: 147,
        columnNumber: 3
    }, this);
}
_c = Icon;
const __TURBOPACK__default__export__ = Icon;
var _c;
__turbopack_refresh__.register(_c, "Icon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/breadcrumbs/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Breadcrumbs

	Description:
		Displays a Breadcrumbs.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		items
			Type: Array
			Values: An array of objects which define the breadcrumb items.
			Default: ''
			Description: Setup the items in the breadcrumbs with an array of objects. Example:
			[
				{
					// The label
					label: 'First breadcrumb',

					// The href (pass an empty string to make the breadcrumb not a link / not clickable)
					href: '/first-breadcrumb/'
				},
				...
			]

		...rest
			All other props are passed to <div>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/breadcrumbs/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/link/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
;
;
;
;
;
function Breadcrumbs({ id = '', className = '', items = [], ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_breadcrumbs,
        className
    ];
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumb,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        size: "xs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].homeIcon,
                            name: "home-05",
                            size: "xs",
                            type: "sharp"
                        }, void 0, false, {
                            fileName: "[project]/app/components/breadcrumbs/index.tsx",
                            lineNumber: 83,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/breadcrumbs/index.tsx",
                        lineNumber: 83,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "arrow-right-01",
                            size: "xxs",
                            type: "sharp"
                        }, void 0, false, {
                            fileName: "[project]/app/components/breadcrumbs/index.tsx",
                            lineNumber: 84,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/breadcrumbs/index.tsx",
                        lineNumber: 84,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/breadcrumbs/index.tsx",
                lineNumber: 82,
                columnNumber: 4
            }, this),
            items.map((item, index)=>{
                let breadcrumb;
                // Without link
                if (item.href === '') {
                    breadcrumb = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "s",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/app/components/breadcrumbs/index.tsx",
                        lineNumber: 94,
                        columnNumber: 20
                    }, this);
                } else {
                    breadcrumb = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$link$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        size: "s",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/app/components/breadcrumbs/index.tsx",
                        lineNumber: 98,
                        columnNumber: 20
                    }, this);
                }
                // Add a divider (but not for the last item)
                let divider;
                if (index !== items.length - 1) {
                    divider = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "arrow-right-01",
                            size: "xxs",
                            type: "sharp"
                        }, void 0, false, {
                            fileName: "[project]/app/components/breadcrumbs/index.tsx",
                            lineNumber: 104,
                            columnNumber: 49
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/breadcrumbs/index.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this);
                }
                // Return the breadcrumb and divider
                return(// This "key" attribute only exists to satisfy the requirements of React (we don't actually use it)
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$breadcrumbs$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumb,
                    children: [
                        breadcrumb,
                        divider
                    ]
                }, index, true, {
                    fileName: "[project]/app/components/breadcrumbs/index.tsx",
                    lineNumber: 110,
                    columnNumber: 7
                }, this));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/breadcrumbs/index.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this);
}
_c = Breadcrumbs;
const __TURBOPACK__default__export__ = Breadcrumbs;
var _c;
__turbopack_refresh__.register(_c, "Breadcrumbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/button/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_button": "style-module__n8fvSW__component_button",
  "icon": "style-module__n8fvSW__icon",
  "icon_left": "style-module__n8fvSW__icon_left",
  "icon_only": "style-module__n8fvSW__icon_only",
  "icon_right": "style-module__n8fvSW__icon_right",
  "size_l": "style-module__n8fvSW__size_l",
  "size_m": "style-module__n8fvSW__size_m",
  "size_s": "style-module__n8fvSW__size_s",
  "size_xs": "style-module__n8fvSW__size_xs",
  "text": "style-module__n8fvSW__text",
  "type_outline": "style-module__n8fvSW__type_outline",
  "type_primary": "style-module__n8fvSW__type_primary",
  "type_secondary": "style-module__n8fvSW__type_secondary",
});
}}),
"[project]/app/components/button/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Button

	Description:
		Displays a Button.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		type
			Type: string
			Values: 'primary', 'secondary', 'outline'
			Default: 'primary'
			Description: Define the button style.

		size
			Type: string
			Values: 'l', 'm', 's', 'xs'
			Default: 'm'
			Description: Define the button size.

		href
			Type: string
			Values: Any link
			Default: ''
			Description: Define the href for the button.

		target
			Type: string
			Values: '_blank', '_self', '_parent', '_top'
			Default: '_self'
			Description: Define the target for the button.

		iconName
			Type: string
			Values: Any "Huge Icon" name
			Default: ''
			Description: Select an icon by "Huge Icon" name (https://hugeicons.com/icons).

		iconStyle
			Type: string
			Values: 'stroke', 'duotone', 'solid', 'twotone', 'bulk'
			Default: 'stroke'
			Description: Define the icon style.

		iconType
			Type: string
			Values: 'rounded', 'sharp'
			Default: 'rounded'
			Description: Define the icon type.

		iconPosition
			Type: string
			Values: 'left', 'right'
			Default: 'left'
			Description: Define the icon position.

		...rest
			All other props are passed to <NextLink>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/button/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
;
;
;
;
;
function Button({ id = '', className = '', type = 'primary', size = 'm', href = '', target = '_self', iconName = '', iconStyle = 'stroke', iconType = 'rounded', iconPosition = 'left', children, // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onClick = ()=>{}, ...rest }) {
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* On click of the <NextLink> element
	-------------------------------------------------- */ function handleClick(event) {
        // If there's no href, prevent this from doing anything
        if (href === '') {
            event.preventDefault();
        }
        // Also call the event handler that could be passed in from the parent
        onClick(event);
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_button,
        className
    ];
    // Type
    if (type) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['type_' + type]);
    }
    // Size
    if (size) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['size_' + size]);
    }
    /* Icon
	-------------------------------------------------- */ let icon;
    // If an icon is set
    if (iconName) {
        // Create the icon
        icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            name: iconName,
            style: iconStyle,
            type: iconType,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
        }, void 0, false, {
            fileName: "[project]/app/components/button/index.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        // Add the position class to the top level of the component
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['icon_' + iconPosition]);
        // If there's no text, add a special class to handle an icon only button
        if (!children) {
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon_only);
        }
    }
    /* Setup the text size (this exists as the mapping may change)
	-------------------------------------------------- */ let textSize;
    if (size === 'l') {
        textSize = 'l';
    } else if (size === 'm') {
        textSize = 'm';
    } else if (size === 's') {
        textSize = 's';
    } else {
        textSize = 'xs';
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: classes.join(' '),
        id: id,
        href: href,
        target: target,
        onClick: handleClick,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: textSize,
            inheritWeight: true,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
            children: [
                icon,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/button/index.tsx",
            lineNumber: 194,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/button/index.tsx",
        lineNumber: 193,
        columnNumber: 3
    }, this);
}
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_refresh__.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/card/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "chartColor": "style-module__u-pcUa__chartColor",
  "chartColor_1": "style-module__u-pcUa__chartColor_1",
  "chartColor_1_dark": "style-module__u-pcUa__chartColor_1_dark",
  "chartColor_2": "style-module__u-pcUa__chartColor_2",
  "chartColor_2_dark": "style-module__u-pcUa__chartColor_2_dark",
  "chartColor_3": "style-module__u-pcUa__chartColor_3",
  "chartColor_3_dark": "style-module__u-pcUa__chartColor_3_dark",
  "chartColor_4": "style-module__u-pcUa__chartColor_4",
  "chartColor_4_dark": "style-module__u-pcUa__chartColor_4_dark",
  "chartColor_5": "style-module__u-pcUa__chartColor_5",
  "chartColor_5_dark": "style-module__u-pcUa__chartColor_5_dark",
  "chartColor_6": "style-module__u-pcUa__chartColor_6",
  "chartColor_6_dark": "style-module__u-pcUa__chartColor_6_dark",
  "chartColor_7": "style-module__u-pcUa__chartColor_7",
  "chartColor_7_dark": "style-module__u-pcUa__chartColor_7_dark",
  "chartColor_8": "style-module__u-pcUa__chartColor_8",
  "chartColor_8_dark": "style-module__u-pcUa__chartColor_8_dark",
  "component_card": "style-module__u-pcUa__component_card",
  "inner": "style-module__u-pcUa__inner",
  "schoolRatingContainer": "style-module__u-pcUa__schoolRatingContainer",
  "schoolRating_excellent": "style-module__u-pcUa__schoolRating_excellent",
  "schoolRating_fair": "style-module__u-pcUa__schoolRating_fair",
  "schoolRating_good": "style-module__u-pcUa__schoolRating_good",
  "schoolRating_great": "style-module__u-pcUa__schoolRating_great",
  "schoolRating_join": "style-module__u-pcUa__schoolRating_join",
  "schoolRating_poor": "style-module__u-pcUa__schoolRating_poor",
  "text": "style-module__u-pcUa__text",
  "title": "style-module__u-pcUa__title",
  "titleContainer": "style-module__u-pcUa__titleContainer",
  "type_chart": "style-module__u-pcUa__type_chart",
  "type_schoolRating": "style-module__u-pcUa__type_schoolRating",
});
}}),
"[project]/app/components/card/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Card

	Description:
		Displays a Card.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		type
			Type: string
			Values: 'overview', 'schoolRating', 'chart'
			Default: ''
			Description: Set the type of this card.

		chartColor
			Type: string
			Values: '1', '1_dark', '2', '2_dark', '3', '3_dark', '4', '4_dark', '5', '5_dark', '6', '6_dark', '7', '7_dark', '8', '8_dark'
			Default: '1'
			Description: Only for card type 'chart' - sets the color of the circle.

		schoolRatingFrom
			Type: string
			Values: '', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'
			Default: ''
			Description: Only for card type 'schoolRating' - sets the school rating from value.

		schoolRatingTo
			Type: string
			Values: '', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'
			Default: ''
			Description: Only for card type 'schoolRating' - sets the school rating to value.

		title
			Type: string, JSX
			Values: Any string, any JSX
			Default: ''
			Description: Set the title of this card.

		text
			Type: string, JSX
			Values: Any string, any JSX
			Default: ''
			Description: Set the text of this card.

		...rest
			All other props are passed to <div>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/card/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h4/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function Card({ id = '', className = '', type = 'overview', chartColor = '1', schoolRatingFrom = '', schoolRatingTo = '', title = '', text = '', ...rest }) {
    _s();
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_card,
        className
    ];
    // Type
    if (type) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['type_' + type]);
    }
    /* Create a ref for the chart color
	-------------------------------------------------- */ const chartColorRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* Title
	-------------------------------------------------- */ let titleOutput;
    /* Overview Card
	------------------------- */ if (type === 'overview') {
        titleOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
            children: title
        }, void 0, false, {
            fileName: "[project]/app/components/card/index.tsx",
            lineNumber: 120,
            columnNumber: 4
        }, this);
    } else if (type === 'schoolRating') {
        let schoolRatingFromOutput;
        if (schoolRatingFrom !== '') {
            schoolRatingFromOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['schoolRating_' + schoolRatingFrom.toLowerCase()],
                children: schoolRatingFrom
            }, void 0, false, {
                fileName: "[project]/app/components/card/index.tsx",
                lineNumber: 130,
                columnNumber: 29
            }, this);
        }
        let schoolRatingJoinOutput;
        if (schoolRatingFrom !== '' && schoolRatingTo !== '') {
            schoolRatingJoinOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].schoolRating_join,
                children: " to "
            }, void 0, false, {
                fileName: "[project]/app/components/card/index.tsx",
                lineNumber: 135,
                columnNumber: 29
            }, this);
        }
        let schoolRatingToOutput;
        if (schoolRatingTo !== '') {
            schoolRatingToOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['schoolRating_' + schoolRatingTo.toLowerCase()],
                children: schoolRatingTo
            }, void 0, false, {
                fileName: "[project]/app/components/card/index.tsx",
                lineNumber: 140,
                columnNumber: 27
            }, this);
        }
        titleOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].schoolRatingContainer,
                    children: [
                        schoolRatingFromOutput,
                        schoolRatingJoinOutput,
                        schoolRatingToOutput
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/card/index.tsx",
                    lineNumber: 145,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/app/components/card/index.tsx",
                    lineNumber: 150,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true);
    } else if (type === 'chart') {
        titleOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartColor} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['chartColor_' + chartColor]}`,
                    ref: chartColorRef
                }, void 0, false, {
                    fileName: "[project]/app/components/card/index.tsx",
                    lineNumber: 161,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/app/components/card/index.tsx",
                    lineNumber: 162,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleContainer,
                    children: titleOutput
                }, void 0, false, {
                    fileName: "[project]/app/components/card/index.tsx",
                    lineNumber: 173,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                    size: "s",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/app/components/card/index.tsx",
                    lineNumber: 174,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/card/index.tsx",
            lineNumber: 172,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/card/index.tsx",
        lineNumber: 171,
        columnNumber: 3
    }, this);
}
_s(Card, "L/BmSmo6E4b1FLHz/3XcYzBohuw=");
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_refresh__.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/charts/barChart/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_barChart": "style-module__684HpG__component_barChart",
  "loadingSpinner": "style-module__684HpG__loadingSpinner",
  "rotation": "style-module__684HpG__rotation",
});
}}),
"[project]/app/components/charts/barChart/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Bar Chart

	Description:
		Displays a Bar Chart using Apache eCharts (https://echarts.apache.org/examples/en/editor.html?c=bar-stack).

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		xAxis
			Type: Array
			Values: An array of objects which define the items on the X axis.
			Default: ''
			Description: Setup the X axis items. Example:
				[
					{
						// The label for this item
						'label': 'Week 1',

						// Set the type to 'regular', 'missingData' or 'empty' to change the color of this item's label
						'type': 'regular',

						// Is this an empty week? Set to true to display it in light grey and have no data.
						'emptyWeek': false
					}
					...
				]

		yAxis
			Type: Array
			Values: An object which defines the Y axis.
			Default: ''
			Description: Setup the Y axis. Example:
				{
					// The type ('percentage', 'number')
					'type': 'percentage',

					// The minimum (do not pass this to automatically set the minimum)
					'min': 0,

					// The maximum (do not pass this to automatically set the minimum)
					'max': 100,

					// The interval to output Y axis lines / measurements at (do not pass this to automatically set the interval)
					'interval': 10
				}

		data
			Type: Array
			Values: An array of objects which define the data in the chart.
			Default: ''
			Description: Setup the data in this chart. Example:
				[
					{
						// The label for this item
						'label': 'Teacher - Teaching Mastery',

						// The colour for this item ('1', '1_dark', '2', '2_dark', '3', '3_dark', '4', '4_dark', '5', '5_dark', '6', '6_dark', '7', '7_dark', '8', '8_dark')
						'color': '1',

						// The data for this item (this should have one value for each x axis item that is NOT type = empty)
						'data': [
							25,
							50,
							75,
							...
						]
					},
					...
				]

		...rest
			All other props are passed to <div>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$barChart$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/charts/barChart/style.module.css [app-client] (css module)");
/* Apache eCharts
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript) <export install as TooltipComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/grid/install.js [app-client] (ecmascript) <export install as GridComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript) <export install as LegendComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MarkLineComponent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkLine.js [app-client] (ecmascript) <export install as MarkLineComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/install.js [app-client] (ecmascript) <export install as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript) <export install as CanvasRenderer>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.use([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__["TooltipComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__["GridComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__["LegendComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__MarkLineComponent$3e$__["MarkLineComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__["BarChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__["CanvasRenderer"]
]);
function BarChart({ id = '', className = '', xAxis = [], yAxis = {
    'type': 'percentage'
}, data = [], ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create a ref to target the chart DOM element
	-------------------------------------------------- */ const chartRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* Get a variable from CSS
	-------------------------------------------------- */ function getCSSVariable(variable) {
        return window.getComputedStyle(document.documentElement).getPropertyValue('--' + variable);
    }
    /* Generate the chart options based on the props
	-------------------------------------------------- */ function generateOptions() {
        /* X Axis
		------------------------- */ // Create a variable to hold the x axis items
        const xAxis_items = [];
        // For each item in the xAxis prop
        xAxis.forEach((item)=>{
            // Add the label to the x axis items
            xAxis_items.push(item.label);
        });
        // Create a function to change the colour based on the type
        const xAxis_missingDataFunction = (value, index)=>{
            // Missing data
            if (xAxis[index].type === 'missingData') {
                // Make it red
                return getCSSVariable('color_error');
            } else if (xAxis[index].type === 'empty') {
                // Make it red
                return getCSSVariable('color_grey_20');
            } else {
                return getCSSVariable('color_grey');
            }
        };
        // Create the options for the x axis
        const xAxis_options = {
            type: 'category',
            data: xAxis_items,
            axisLine: {
                lineStyle: {
                    width: 0,
                    color: getCSSVariable('color_grey')
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: parseInt(getCSSVariable('gap_3').replace('px', '')),
                fontFamily: 'Open Sans',
                fontSize: 14,
                color: xAxis_missingDataFunction
            }
        };
        /* Y Axis
		------------------------- */ // Add % to the values if it's a percentage
        let yAxis_formatter = "{value}";
        if (yAxis.type === 'percentage') {
            yAxis_formatter = "{value}%";
        }
        // Apply the 'min' if it exists
        let yAxis_min = 'dataMin';
        if (typeof yAxis.min !== 'undefined') {
            yAxis_min = yAxis.min;
        }
        // Apply the 'max' if it exists
        let yAxis_max = 'dataMax';
        if (typeof yAxis.max !== 'undefined') {
            yAxis_max = yAxis.max;
        }
        // Create the options for the y axis
        const yAxis_options = [
            {
                type: "value",
                name: "",
                axisLabel: {
                    formatter: yAxis_formatter,
                    margin: parseInt(getCSSVariable('gap_3').replace('px', '')),
                    fontFamily: 'Open Sans',
                    fontSize: 14
                },
                min: yAxis_min,
                max: yAxis_max,
                axisLine: {
                    lineStyle: {
                        width: 1,
                        color: getCSSVariable('color_grey')
                    }
                }
            }
        ];
        // Apply the 'interval' if it exists
        if (typeof yAxis.interval !== 'undefined') {
            Object.assign(yAxis_options[0], {
                interval: yAxis.interval
            });
        }
        const data_options = [];
        data.forEach((item)=>{
            data_options.push({
                name: item.label,
                type: 'bar',
                stack: false,
                itemStyle: {
                    color: getCSSVariable('color_chart_' + item.color)
                },
                lineStyle: {
                    width: 3
                },
                symbol: 'circle',
                symbolSize: 10,
                emphasis: {
                    focus: 'series'
                },
                data: item.data
            });
        });
        /* Output the options for the chart
		------------------------- */ const options = {
            animationDuration: 600,
            tooltip: {
                confine: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        // We add '1A' below to turn this color into an 8 character HEX value - and give 10% opacity to this color.
                        // We need this because this overlay unfortunately always shows ontop of our bars
                        color: getCSSVariable('color_info') + '1A'
                    }
                },
                valueFormatter: (value)=>{
                    if (yAxis.type === 'percentage') {
                        return value + '%';
                    } else {
                        return value;
                    }
                },
                padding: parseInt(getCSSVariable('gap_2').replace('px', '')),
                backgroundColor: getCSSVariable('color_white'),
                borderColor: getCSSVariable('color_grey_10'),
                borderWidth: 1,
                extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);',
                textStyle: {
                    color: getCSSVariable('color_grey'),
                    fontFamily: 'Open Sans',
                    fontSize: 14
                }
            },
            grid: {
                left: '5px',
                right: '0',
                top: '6px',
                bottom: '0',
                containLabel: true
            },
            xAxis: xAxis_options,
            yAxis: yAxis_options,
            series: data_options
        };
        return options;
    }
    /* On mount and unmount
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "BarChart.useEffect": ()=>{
            /* Mount
		------------------------- */ // Configure Apache eCharts (we do this in here so that the getCSSVariable function always works)
            const options = generateOptions();
            // Target the chart DOM element
            const chartDom = chartRef?.current;
            // Init the chart
            const chart = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.init(chartDom);
            // Set the options for the chart
            chart.setOption(options);
            // Create a function to handle the window resize (this exists in to give it easy access to the local scope)
            let resizeDebounce = false;
            function handleWindowResize() {
                if (!resizeDebounce) {
                    chart.resize();
                    // Debounce by 1 animation frame
                    resizeDebounce = true;
                    window.requestAnimationFrame({
                        "BarChart.useEffect.handleWindowResize": ()=>{
                            resizeDebounce = false;
                        }
                    }["BarChart.useEffect.handleWindowResize"]);
                }
            }
            // Watch for window resize
            window.addEventListener('resize', handleWindowResize);
            /* Unmount
		------------------------- */ return ({
                "BarChart.useEffect": ()=>{
                    // Remove Apache eCharts
                    chart.dispose();
                    // Stop watching for window resize
                    window.removeEventListener('resize', handleWindowResize);
                }
            })["BarChart.useEffect"];
        }
    }["BarChart.useEffect"]);
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$barChart$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_barChart,
        className
    ];
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ref: chartRef,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$barChart$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
        }, void 0, false, {
            fileName: "[project]/app/components/charts/barChart/index.tsx",
            lineNumber: 410,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/charts/barChart/index.tsx",
        lineNumber: 409,
        columnNumber: 3
    }, this);
}
_s(BarChart, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c = BarChart;
const __TURBOPACK__default__export__ = BarChart;
var _c;
__turbopack_refresh__.register(_c, "BarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/charts/chartWrapper/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "card": "style-module__rqttDG__card",
  "cardGroup": "style-module__rqttDG__cardGroup",
  "cardGroupTitle": "style-module__rqttDG__cardGroupTitle",
  "cards": "style-module__rqttDG__cards",
  "cardsContainer": "style-module__rqttDG__cardsContainer",
  "chart": "style-module__rqttDG__chart",
  "chartAndCards": "style-module__rqttDG__chartAndCards",
  "component_chartWrapper": "style-module__rqttDG__component_chartWrapper",
  "options": "style-module__rqttDG__options",
  "selectChartType": "style-module__rqttDG__selectChartType",
  "singleGroup": "style-module__rqttDG__singleGroup",
});
}}),
"[project]/app/components/forms/select/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrowIcon": "style-module__Y_-zoG__arrowIcon",
  "component_select": "style-module__Y_-zoG__component_select",
  "errorText": "style-module__Y_-zoG__errorText",
  "fieldContainer": "style-module__Y_-zoG__fieldContainer",
  "hasArrowIcon": "style-module__Y_-zoG__hasArrowIcon",
  "hasIcon": "style-module__Y_-zoG__hasIcon",
  "helperText": "style-module__Y_-zoG__helperText",
  "icon": "style-module__Y_-zoG__icon",
  "label": "style-module__Y_-zoG__label",
  "placeholder": "style-module__Y_-zoG__placeholder",
  "prefix": "style-module__Y_-zoG__prefix",
  "suffix": "style-module__Y_-zoG__suffix",
});
}}),
"[project]/app/components/forms/select/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Select

	Description:
		Displays a select form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this select (e.g. <select name='XXX'>)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		placeholder
			Type: string
			Values: Any string
			Default: 'Please select'
			Description: Display a placeholder inside this field.

		value
			Type: string
			Values: Any string
			Default: ''
			Description: Define which option is selected by its "value".

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		options
			Type: Array
			Values: An array of objects which define the options.
			Default: ''
			Description: Setup the select options with an array of objects. Example:
			[
				{
					// The label
					label:  'First option',

					// The value
					value:  'first-option'
				},
				...
			]

		...rest
			All other props are passed to <select>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/select/style.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Select({ id = '', className = '', name = '', state = 'normal', disabled = false, label = '', placeholder = 'Please select', value = '', helperText = '', options = [], // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onFocus = ()=>{}, onChange = ()=>{}, onMouseDown = ()=>{}, onClick = ()=>{}, onBlur = ()=>{}, onKeyDown = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state
	-------------------------------------------------- */ // Focus state (true, false)
    const [focusState, setFocusState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Open state (true, false)
    const [openState, setOpenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Placeholder state (true, false)
    let placeholderStartingState = true;
    if (value) {
        placeholderStartingState = false;
    }
    const [placeholderState, setPlaceholderState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(placeholderStartingState);
    /* Create refs to target DOM elements
	-------------------------------------------------- */ // HTML <select> field
    const fieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* On change of the <select> element
	-------------------------------------------------- */ function handleChange(event) {
        if (event.currentTarget.value !== '') {
            setPlaceholderState(false);
        } else {
            setPlaceholderState(true);
        }
        // Also call the event handler that could be passed in from the parent
        onChange(event);
    }
    /* On click of the <select> element
	-------------------------------------------------- */ function handleClick(event) {
        if (fieldRef.current) {
            const rect = fieldRef.current.getBoundingClientRect();
            const { clientX, clientY } = event;
            const isInComponent = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
            if (!isInComponent) {
                setOpenState(false);
            }
        }
        // Also call the event handler that could be passed in from the parent
        onClick(event);
    }
    /* On blur of the <select> element
	-------------------------------------------------- */ function handleBlur(event) {
        setFocusState(false);
        setOpenState(false);
        // Also call the event handler that could be passed in from the parent
        onBlur(event);
    }
    /* On focus of the <select> element
	-------------------------------------------------- */ function handleFocus(event) {
        setFocusState(true);
        // Also call the event handler that could be passed in from the parent
        onFocus(event);
    }
    /* On key down of the <select> element
	-------------------------------------------------- */ function handleKeyDown(event) {
        if (event.key === 'Enter' || event.keyCode === 13 || event.key === ' ' || event.keyCode === 32) {
            setOpenState(true);
        }
        // Also call the event handler that could be passed in from the parent
        onKeyDown(event);
    }
    /* On mouse down of the <select> element
	-------------------------------------------------- */ function handleMouseDown(event) {
        setOpenState(!openState);
        // Also call the event handler that could be passed in from the parent
        onMouseDown(event);
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_select,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/select/index.tsx",
                lineNumber: 270,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/select/index.tsx",
            lineNumber: 269,
            columnNumber: 4
        }, this);
    }
    /* Placeholder
	-------------------------------------------------- */ // Output the placeholder (this is actually a hidden <option>)
    const placeholderOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: "",
        disabled: true,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].placeholder,
        children: placeholder
    }, void 0, false, {
        fileName: "[project]/app/components/forms/select/index.tsx",
        lineNumber: 279,
        columnNumber: 28
    }, this);
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/select/index.tsx",
                lineNumber: 288,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/select/index.tsx",
            lineNumber: 287,
            columnNumber: 4
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/select/index.tsx",
            lineNumber: 298,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/select/index.tsx",
        lineNumber: 297,
        columnNumber: 3
    }, this);
    /* Options
	-------------------------------------------------- */ const optionsOutput = options.map((option, index)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: option.value,
            children: option.label
        }, index, false, {
            fileName: "[project]/app/components/forms/select/index.tsx",
            lineNumber: 307,
            columnNumber: 4
        }, this);
    });
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            labelOutput,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldContainer} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hasArrowIcon}`,
                "data-focus": focusState,
                "data-open": openState,
                "data-disabled": disabled,
                "data-placeholder": placeholderState,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: name,
                        defaultValue: value,
                        ref: fieldRef,
                        disabled: disabled,
                        onFocus: handleFocus,
                        onChange: handleChange,
                        onMouseDown: handleMouseDown,
                        onClick: handleClick,
                        onBlur: handleBlur,
                        onKeyDown: handleKeyDown,
                        ...rest,
                        children: [
                            placeholderOutput,
                            optionsOutput
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/forms/select/index.tsx",
                        lineNumber: 321,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowIcon}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "arrow-down-01",
                            size: "s",
                            style: "stroke",
                            type: "sharp",
                            responsive: false
                        }, void 0, false, {
                            fileName: "[project]/app/components/forms/select/index.tsx",
                            lineNumber: 340,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/select/index.tsx",
                        lineNumber: 339,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/select/index.tsx",
                lineNumber: 319,
                columnNumber: 4
            }, this),
            errorTextOutput,
            helperTextOutput
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/select/index.tsx",
        lineNumber: 315,
        columnNumber: 3
    }, this);
}
_s(Select, "uo6tkk9bDxKYUlM5s246y4jVzuA=");
_c = Select;
const __TURBOPACK__default__export__ = Select;
var _c;
__turbopack_refresh__.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/charts/lineChart/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_lineChart": "style-module__WRuCBG__component_lineChart",
  "loadingSpinner": "style-module__WRuCBG__loadingSpinner",
  "rotation": "style-module__WRuCBG__rotation",
});
}}),
"[project]/app/components/charts/lineChart/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Line Chart

	Description:
		Displays a Line Chart using Apache eCharts (https://echarts.apache.org/examples/en/editor.html?c=line-stack).

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		xAxis
			Type: Array
			Values: An array of objects which define the items on the X axis.
			Default: ''
			Description: Setup the X axis items. Example:
				[
					{
						// The label for this item
						'label': 'Week 1',

						// Set the type to 'regular', 'missingData' or 'empty' to change the color of this item's label
						'type': 'regular',

						// Is this an empty week? Set to true to display it in light grey and have no data.
						'emptyWeek': false
					}
					...
				]

		yAxis
			Type: Array
			Values: An object which defines the Y axis.
			Default: ''
			Description: Setup the Y axis. Example:
				{
					// The type ('percentage', 'number')
					'type': 'percentage',

					// The minimum (do not pass this to automatically set the minimum)
					'min': 0,

					// The maximum (do not pass this to automatically set the minimum)
					'max': 100,

					// The interval to output Y axis lines / measurements at (do not pass this to automatically set the interval)
					'interval': 10
				}

		data
			Type: Array
			Values: An array of objects which define the data in the chart.
			Default: ''
			Description: Setup the data in this chart. Example:
				[
					{
						// The label for this item
						'label': 'Teacher - Teaching Mastery',

						// The colour for this item ('1', '1_dark', '2', '2_dark', '3', '3_dark', '4', '4_dark', '5', '5_dark', '6', '6_dark', '7', '7_dark', '8', '8_dark')
						'color': '1',

						// The data for this item (this should have one value for each x axis item that is NOT type = empty)
						'data': [
							25,
							50,
							75,
							...
						]
					},
					...
				]

		...rest
			All other props are passed to <div>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$lineChart$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/charts/lineChart/style.module.css [app-client] (css module)");
/* Apache eCharts
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/title/install.js [app-client] (ecmascript) <export install as TitleComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ToolboxComponent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/install.js [app-client] (ecmascript) <export install as ToolboxComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript) <export install as TooltipComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/grid/install.js [app-client] (ecmascript) <export install as GridComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript) <export install as LegendComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LineChart$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/install.js [app-client] (ecmascript) <export install as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/renderer/installCanvasRenderer.js [app-client] (ecmascript) <export install as CanvasRenderer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$universalTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installUniversalTransition__as__UniversalTransition$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/universalTransition.js [app-client] (ecmascript) <export installUniversalTransition as UniversalTransition>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.use([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TitleComponent$3e$__["TitleComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__ToolboxComponent$3e$__["ToolboxComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__TooltipComponent$3e$__["TooltipComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__GridComponent$3e$__["GridComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__["LegendComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__LineChart$3e$__["LineChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installCanvasRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__install__as__CanvasRenderer$3e$__["CanvasRenderer"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$universalTransition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__installUniversalTransition__as__UniversalTransition$3e$__["UniversalTransition"]
]);
function LineChart({ id = '', className = '', xAxis = [], yAxis = {
    'type': 'percentage'
}, data = [], ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create a ref to target the chart DOM element
	-------------------------------------------------- */ const chartRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* Get a variable from CSS
	-------------------------------------------------- */ function getCSSVariable(variable) {
        return window.getComputedStyle(document.documentElement).getPropertyValue('--' + variable);
    }
    /* Generate the chart options based on the props
	-------------------------------------------------- */ function generateOptions() {
        /* X Axis
		------------------------- */ // Create a variable to hold the x axis items
        const xAxis_items = [];
        // For each item in the xAxis prop
        xAxis.forEach((item)=>{
            // Add the label to the x axis items
            xAxis_items.push(item.label);
        });
        // Create a function to change the colour based on the type
        const xAxis_missingDataFunction = (value, index)=>{
            // Missing data
            if (xAxis[index].type === 'missingData') {
                // Make it red
                return getCSSVariable('color_error');
            } else if (xAxis[index].type === 'empty') {
                // Make it red
                return getCSSVariable('color_grey_20');
            } else {
                return getCSSVariable('color_grey');
            }
        };
        // Create the options for the x axis
        const xAxis_options = {
            type: 'category',
            data: xAxis_items,
            axisLine: {
                lineStyle: {
                    width: 0,
                    color: getCSSVariable('color_grey')
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                margin: parseInt(getCSSVariable('gap_3').replace('px', '')),
                fontFamily: 'Open Sans',
                fontSize: 14,
                color: xAxis_missingDataFunction
            }
        };
        /* Y Axis
		------------------------- */ // Add % to the values if it's a percentage
        let yAxis_formatter = "{value}";
        if (yAxis.type === 'percentage') {
            yAxis_formatter = "{value}%";
        }
        // Apply the 'min' if it exists
        let yAxis_min = 'dataMin';
        if (typeof yAxis.min !== 'undefined') {
            yAxis_min = yAxis.min;
        }
        // Apply the 'max' if it exists
        let yAxis_max = 'dataMax';
        if (typeof yAxis.max !== 'undefined') {
            yAxis_max = yAxis.max;
        }
        // Create the options for the y axis
        const yAxis_options = [
            {
                type: "value",
                name: "Percentage",
                axisLabel: {
                    formatter: yAxis_formatter,
                    margin: parseInt(getCSSVariable('gap_3').replace('px', '')),
                    fontFamily: 'Open Sans',
                    fontSize: 14
                },
                min: yAxis_min,
                max: yAxis_max,
                axisLine: {
                    lineStyle: {
                        width: 1,
                        color: getCSSVariable('color_grey')
                    }
                }
            }
        ];
        // Apply the 'interval' if it exists
        if (typeof yAxis.interval !== 'undefined') {
            Object.assign(yAxis_options[0], {
                interval: yAxis.interval
            });
        }
        const data_options = [];
        data.forEach((item)=>{
            data_options.push({
                name: item.label,
                type: 'line',
                stack: false,
                itemStyle: {
                    color: getCSSVariable('color_chart_' + item.color)
                },
                lineStyle: {
                    width: 3
                },
                symbol: 'circle',
                symbolSize: 10,
                data: item.data
            });
        });
        /* Output the options for the chart
		------------------------- */ const options = {
            animationDuration: 600,
            tooltip: {
                confine: true,
                trigger: 'axis',
                valueFormatter: (value)=>{
                    if (yAxis.type === 'percentage') {
                        return value + '%';
                    } else {
                        return value;
                    }
                },
                padding: parseInt(getCSSVariable('gap_2').replace('px', '')),
                backgroundColor: getCSSVariable('color_white'),
                borderColor: getCSSVariable('color_grey_10'),
                borderWidth: 1,
                extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);',
                textStyle: {
                    color: getCSSVariable('color_grey'),
                    fontFamily: 'Open Sans',
                    fontSize: 14
                }
            },
            grid: {
                left: '5px',
                right: '0',
                top: '6px',
                bottom: '0',
                containLabel: true
            },
            xAxis: xAxis_options,
            yAxis: yAxis_options,
            series: data_options
        };
        return options;
    }
    /* On mount and unmount
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LineChart.useEffect": ()=>{
            /* Mount
		------------------------- */ // Configure Apache eCharts (we do this in here so that the getCSSVariable function always works)
            const options = generateOptions();
            // Target the chart DOM element
            const chartDom = chartRef?.current;
            // Init the chart
            const chart = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.init(chartDom);
            // Set the options for the chart
            chart.setOption(options);
            // Create a function to handle the window resize (this exists in to give it easy access to the local scope)
            let resizeDebounce = false;
            function handleWindowResize() {
                if (!resizeDebounce) {
                    chart.resize();
                    // Debounce by 1 animation frame
                    resizeDebounce = true;
                    window.requestAnimationFrame({
                        "LineChart.useEffect.handleWindowResize": ()=>{
                            resizeDebounce = false;
                        }
                    }["LineChart.useEffect.handleWindowResize"]);
                }
            }
            // Watch for window resize
            window.addEventListener('resize', handleWindowResize);
            /* Unmount
		------------------------- */ return ({
                "LineChart.useEffect": ()=>{
                    // Remove Apache eCharts
                    chart.dispose();
                    // Stop watching for window resize
                    window.removeEventListener('resize', handleWindowResize);
                }
            })["LineChart.useEffect"];
        }
    }["LineChart.useEffect"]);
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$lineChart$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_lineChart,
        className
    ];
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ref: chartRef,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$lineChart$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
        }, void 0, false, {
            fileName: "[project]/app/components/charts/lineChart/index.tsx",
            lineNumber: 402,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/charts/lineChart/index.tsx",
        lineNumber: 401,
        columnNumber: 3
    }, this);
}
_s(LineChart, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c = LineChart;
const __TURBOPACK__default__export__ = LineChart;
var _c;
__turbopack_refresh__.register(_c, "LineChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/charts/chartWrapper/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Chart Wrapper

	Description:
		Displays a Chart Wrapper (includes an interchangeable line chart / bar chart with average cards)

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		defaultChart
			Type: string
			Values: 'line', 'bar'
			Default: 'line'
			Description: Select the default chart to display.

		xAxis
			Type: Array
			Values: An array of objects which define the items on the X axis of the charts.
			Default: ''
			Description: Setup the X axis items of the charts. Example:
				[
					{
						// The label for this item
						'label': 'Week 1',

						// Set the type to 'regular', 'missingData' or 'empty' to change the color of this item's label
						'type': 'regular',

						// Is this an empty week? Set to true to display it in light grey and have no data.
						'emptyWeek': false
					}
					...
				]

		yAxis
			Type: Array
			Values: An object which defines the Y axis of the charts.
			Default: ''
			Description: Setup the Y axis of the charts. Example:
				{
					// The type ('percentage', 'number')
					'type': 'percentage',

					// The minimum (do not pass this to automatically set the minimum)
					'min': 0,

					// The maximum (do not pass this to automatically set the minimum)
					'max': 100,

					// The interval to output Y axis lines / measurements at (do not pass this to automatically set the interval)
					'interval': 10
				}

		data
			Type: Array
			Values: An array of objects which define the data in the charts.
			Default: ''
			Description: Setup the data in the charts. Example:
				[
					{
						'title': 'Teacher Averages',
						'items': [
							{
								// The label for this item
								'label': 'Teacher - Teaching Mastery',

								// The colour for this item ('1', '1_dark', '2', '2_dark', '3', '3_dark', '4', '4_dark', '5', '5_dark', '6', '6_dark', '7', '7_dark', '8', '8_dark')
								'color': '1',

								// The data for this item (this should have one value for each x axis item that is NOT type = empty)
								'data': [
									25,
									50,
									75,
									...
								]
							},
							...
						]
					},
					...
				]

		cardDisplay
			Type: string
			Values: 'average', 'sum', 'none'
			Default: 'average'
			Description: Display the 'average', 'sum' of values on the cards (or don't display them with 'none')

		...rest
			All other props are passed to <div>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/charts/chartWrapper/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/forms/select/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$barChart$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/charts/barChart/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$lineChart$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/charts/lineChart/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/card/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h4/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
function ChartWrapper({ id = '', className = '', defaultChart = 'line', xAxis = [], yAxis = {
    'type': 'percentage'
}, data = [], cardDisplay = 'average', ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Format the data for the charts
	-------------------------------------------------- */ const chartData = [];
    data.forEach((group)=>{
        group.items.forEach((item)=>{
            chartData.push(item);
        });
    });
    // Setup the chart data state
    const [chartDataState, setChartDataState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(chartData);
    /* Change the chart
	-------------------------------------------------- */ const [chartState, setChartState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(defaultChart);
    function changeChart(event) {
        const chartType = event.target.value;
        if (chartType === 'bar' || chartType === 'line') {
            setChartState(chartType);
        }
    }
    /* Create state for the cards to enable / disable
	-------------------------------------------------- */ const cardEnabledState_initial = [];
    data.forEach((group)=>{
        group.items.forEach(()=>{
            cardEnabledState_initial.push(true);
        });
    });
    const [cardEnabledState, setEnabledCardState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(cardEnabledState_initial);
    /* Enable / disable cards
	-------------------------------------------------- */ function enableDisableCard(index) {
        /* Update the cards to be enabled / disabled
		------------------------- */ // Clone the card enabled state
        // Please note:
        // The "cardEnabledState" array must be cloned using the spread operator.
        // This creates a clone of the "cardEnabledState" array, so when we update the state with this new array a re-render is triggered.
        const newCardEnabledState = [
            ...cardEnabledState
        ];
        // If all cards are enabled
        if (!newCardEnabledState.includes(false)) {
            // Disable all cards except the one that was clicked
            for(let i = 0; i < newCardEnabledState.length; i++){
                if (i !== index) {
                    newCardEnabledState[i] = false;
                }
            }
        } else {
            // Toggle the clicked card's state
            newCardEnabledState[index] = !newCardEnabledState[index];
        }
        // If all cards are now disabled, enable them all
        if (!newCardEnabledState.includes(true)) {
            for(let i = 0; i < newCardEnabledState.length; i++){
                newCardEnabledState[i] = true;
            }
        }
        // Update the card enabled state
        setEnabledCardState(newCardEnabledState);
        /* Update the chart data to only show data for enabled cards
		------------------------- */ // Create a variable to hold the new data state
        const newChartDataState = [];
        // For each card's enabled state
        newCardEnabledState.forEach((dataItem, dataItemIndex)=>{
            // If it's enabled
            if (dataItem) {
                // Add the original passed in chartData item to the new data state
                newChartDataState.push(chartData[dataItemIndex]);
            }
        });
        // Update the chart data state
        setChartDataState(newChartDataState);
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_chartWrapper,
        className
    ];
    /* Create the chart
	-------------------------------------------------- */ let chartOutput;
    if (chartState === 'line') {
        chartOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$lineChart$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            xAxis: xAxis,
            yAxis: yAxis,
            data: chartDataState
        }, void 0, false, {
            fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
            lineNumber: 273,
            columnNumber: 4
        }, this);
    } else if (chartState === 'bar') {
        chartOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$barChart$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            xAxis: xAxis,
            yAxis: yAxis,
            data: chartDataState
        }, void 0, false, {
            fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
            lineNumber: 282,
            columnNumber: 4
        }, this);
    }
    /* Create the cards
	-------------------------------------------------- */ let cardsOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false);
    if (cardDisplay !== 'none') {
        // Keep track of the card index (used for enabling / disabling the card)
        let cardIndex = 0;
        // For each data group
        const cardsInner = data.map((group, groupIndex)=>{
            // Add a "single group" class if there's only one data group
            let singleGroupClass = '';
            if (data.length === 1) {
                singleGroupClass = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].singleGroup;
            }
            // Output the data group
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardGroup} ${singleGroupClass}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardGroupTitle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            children: group.title
                        }, void 0, false, {
                            fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
                            lineNumber: 309,
                            columnNumber: 45
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
                        lineNumber: 309,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cards,
                        children: // For each item
                        group.items.map((item, itemIndex)=>{
                            // Add a percentage suffix if required
                            let suffix = '';
                            if (yAxis.type === 'percentage') {
                                suffix = '%';
                            }
                            // Calculate the card value
                            let cardValue = 0;
                            item.data.forEach((itemData)=>{
                                cardValue += itemData;
                            });
                            // Convert it to an average if required
                            if (cardDisplay === 'average') {
                                cardValue = Math.round(cardValue / item.data.length);
                            }
                            // Increment the card index (used for enabling / disabling the card)
                            cardIndex++;
                            // Setup the card index for the output below
                            const cardIndexOutput = cardIndex - 1;
                            // Output the item
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$card$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                type: "chart",
                                chartColor: item.color,
                                title: cardValue + suffix,
                                text: item.label,
                                "data-enabled": cardEnabledState[cardIndexOutput],
                                "data-index": cardIndexOutput,
                                onClick: ()=>{
                                    enableDisableCard(cardIndexOutput);
                                }
                            }, itemIndex, false, {
                                fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
                                lineNumber: 340,
                                columnNumber: 10
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
                        lineNumber: 311,
                        columnNumber: 6
                    }, this)
                ]
            }, groupIndex, true, {
                fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
                lineNumber: 308,
                columnNumber: 5
            }, this);
        });
        cardsOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsContainer,
            children: cardsInner
        }, void 0, false, {
            fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
            lineNumber: 362,
            columnNumber: 4
        }, this);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].options,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectChartType,
                    label: "Chart type",
                    options: [
                        {
                            label: 'Line chart',
                            value: 'line'
                        },
                        {
                            label: 'Bar chart',
                            value: 'bar'
                        }
                    ],
                    value: defaultChart,
                    onChange: changeChart
                }, void 0, false, {
                    fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
                    lineNumber: 374,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
                lineNumber: 373,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartAndCards,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$charts$2f$chartWrapper$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chart,
                        children: chartOutput
                    }, void 0, false, {
                        fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
                        lineNumber: 393,
                        columnNumber: 5
                    }, this),
                    cardsOutput
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
                lineNumber: 392,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/charts/chartWrapper/index.tsx",
        lineNumber: 372,
        columnNumber: 3
    }, this);
}
_s(ChartWrapper, "av1iggjBrJlMiE5SrgxfxZGW3HI=");
_c = ChartWrapper;
const __TURBOPACK__default__export__ = ChartWrapper;
var _c;
__turbopack_refresh__.register(_c, "ChartWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/expandCollapseButton/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrow": "style-module__1TabEG__arrow",
  "component_expandCollapseButton": "style-module__1TabEG__component_expandCollapseButton",
  "expanded": "style-module__1TabEG__expanded",
  "size_h1": "style-module__1TabEG__size_h1",
  "size_h2": "style-module__1TabEG__size_h2",
  "size_h3": "style-module__1TabEG__size_h3",
  "size_h4": "style-module__1TabEG__size_h4",
  "size_l": "style-module__1TabEG__size_l",
  "size_m": "style-module__1TabEG__size_m",
  "size_s": "style-module__1TabEG__size_s",
  "size_xs": "style-module__1TabEG__size_xs",
});
}}),
"[project]/app/components/expandCollapseButton/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Expand Collapse Button

	Description:
		Displays an Expand Collapse Button.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		size
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'l', 'm', 's', 'xs'
			Default: 'l'
			Description: Define the size for the button.

		expanded
			Type: boolean
			Values: true, false
			Default: false
			Description: Is the button expanded?

		...rest
			All other props are passed to <button>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h1/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h2/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h3/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h4/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$expandCollapseButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/expandCollapseButton/style.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
function ExpandCollapseButton({ id = '', className = '', size = 'l', expanded = false, // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onClick = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state
	-------------------------------------------------- */ // Expanded state (true, false)
    const [expandedState, setExpandedState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(expanded);
    /* Toggle expanded / collapsed on click
	-------------------------------------------------- */ function handleClick(event) {
        // Toggle expanded state
        setExpandedState(!expandedState);
        // Also call the event handler that could be passed in from the parent
        onClick(event);
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$expandCollapseButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_expandCollapseButton,
        className
    ];
    // Size
    if (size) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$expandCollapseButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['size_' + size]);
    }
    // Add an expanded class if required
    if (expandedState) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$expandCollapseButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expanded);
    }
    /* Define the label
	-------------------------------------------------- */ let label = 'Show more';
    if (expandedState) {
        label = 'Show less';
    }
    /* Define the arrow icon (we use a custom SVG here - it comes from the "huge icon" pack but has the whitespace removed - this is required for accurate styling in the CSS)
	-------------------------------------------------- */ const icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$expandCollapseButton$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "-303.5 389.5 26 15",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "m-290.5 399.3-10.3-9.8-2.7 2.6 13 12.4 13-12.4-2.7-2.6z"
            }, void 0, false, {
                fileName: "[project]/app/components/expandCollapseButton/index.tsx",
                lineNumber: 124,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/expandCollapseButton/index.tsx",
            lineNumber: 123,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/expandCollapseButton/index.tsx",
        lineNumber: 122,
        columnNumber: 3
    }, this);
    /* Define the text size
	-------------------------------------------------- */ let text;
    if (size === 'h1') {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: label
        }, void 0, false, {
            fileName: "[project]/app/components/expandCollapseButton/index.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, this);
    } else if (size === 'h2') {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h2$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: label
        }, void 0, false, {
            fileName: "[project]/app/components/expandCollapseButton/index.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
    } else if (size === 'h3') {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h3$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: label
        }, void 0, false, {
            fileName: "[project]/app/components/expandCollapseButton/index.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
    } else if (size === 'h4') {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h4$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: label
        }, void 0, false, {
            fileName: "[project]/app/components/expandCollapseButton/index.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
    } else {
        text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: size,
            inheritWeight: true,
            children: label
        }, void 0, false, {
            fileName: "[project]/app/components/expandCollapseButton/index.tsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: classes.join(' '),
        id: id,
        onClick: handleClick,
        ...rest,
        children: [
            text,
            icon
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/expandCollapseButton/index.tsx",
        lineNumber: 153,
        columnNumber: 3
    }, this);
}
_s(ExpandCollapseButton, "xrN4HDFAo6sOmEi8QTjwTixcYB0=");
_c = ExpandCollapseButton;
const __TURBOPACK__default__export__ = ExpandCollapseButton;
var _c;
__turbopack_refresh__.register(_c, "ExpandCollapseButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/address/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrowIcon": "style-module__crsvyW__arrowIcon",
  "component_address": "style-module__crsvyW__component_address",
  "errorText": "style-module__crsvyW__errorText",
  "fieldContainer": "style-module__crsvyW__fieldContainer",
  "hasArrowIcon": "style-module__crsvyW__hasArrowIcon",
  "hasIcon": "style-module__crsvyW__hasIcon",
  "helperText": "style-module__crsvyW__helperText",
  "hiddenValueField": "style-module__crsvyW__hiddenValueField",
  "icon": "style-module__crsvyW__icon",
  "label": "style-module__crsvyW__label",
  "option": "style-module__crsvyW__option",
  "option_image": "style-module__crsvyW__option_image",
  "option_text": "style-module__crsvyW__option_text",
  "options": "style-module__crsvyW__options",
  "prefix": "style-module__crsvyW__prefix",
  "suffix": "style-module__crsvyW__suffix",
});
}}),
"[project]/app/components/forms/address/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Address

	Description:
		Displays an address form field (Google Maps lookup).

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this input (e.g. <input name='XXX'>)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		value
			Type: string
			Values: Any string
			Default: ''
			Description: Define the field value.

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		...rest
			All other props are passed to <input>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/address/style.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Address({ id = '', className = '', name = '', state = 'normal', disabled = false, label = '', value = '', helperText = '', // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onBlur = ()=>{}, onFocus = ()=>{}, onKeyDown = ()=>{}, onInput = ()=>{}, onClick = ()=>{}, onChange = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state
	-------------------------------------------------- */ // Focus state (true, false)
    const [focusState, setFocusState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Open state (true, false)
    const [openState, setOpenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Loading state (true, false)
    const [loadingHiddenState, setLoadingHiddenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(true);
    // No results state (true, false)
    const [noResultsHiddenState, setNoResultsHiddenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(true);
    // Initial field value (used to restore the value and field image on escape keypress or blur with no result)
    const [initialValueState, setInitialValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    // Options position state ('top', 'bottom')
    const [optionsPositionState, setOptionsPositionState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('bottom');
    // Value state
    const [valueState, setValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(value);
    // Create "options state" (used to render the options)
    const options = [];
    const [optionsState, setOptionsState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(options);
    /* Create refs to target DOM elements
	-------------------------------------------------- */ // HTML <input> field
    const fieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // The options
    const optionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* Support escape keypress to restore initial field value
	-------------------------------------------------- */ // Save initial value (on focus)
    function saveInitialValue() {
        // Get the value of the field
        let initialValue = fieldRef?.current?.value;
        // Make sure it's a string
        if (typeof initialValue !== 'string') {
            initialValue = '';
        }
        // Set the initial value state variable
        setInitialValueState(initialValue);
    }
    /* On change of the <input> element
	-------------------------------------------------- */ function handleChange(event) {
        // Get the input value
        const fieldValue = fieldRef?.current?.value;
        // Set the <input> value
        setValueState(fieldValue);
        // Also call the event handler that could be passed in from the parent
        onChange(event);
    }
    /* On key down of the <input> element
	-------------------------------------------------- */ function handleKeyDown(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Target the field
        const field = fieldRef.current;
        // Make sure the field exists
        if (!field) {
            return;
        }
        // Check for the escape keypress
        if (event.key === "Escape") {
            // Restore the initial <input> value
            setValueState(initialValueState);
            // Blur the currently focused element
            document.activeElement.blur();
        }
        // Also call the event handler that could be passed in from the parent
        onKeyDown(event);
    }
    /* On input of the <input> element
	-------------------------------------------------- */ // Create a timeout to debounce the search (this must use state to persist between re-renders)
    const [searchDebounceState, setSearchDebounceState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(setTimeout({
        "Address.useState": ()=>{}
    }["Address.useState"], 0));
    function handleInput(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Clear any existing timeouts
        clearTimeout(searchDebounceState);
        // Empty the options
        setOptionsState([]);
        // Hide no results text
        setNoResultsHiddenState(true);
        // Show loading state
        setLoadingHiddenState(false);
        // Get the value from the <input> field (state may not have updated yet)
        const fieldValue = fieldRef?.current?.value;
        // If there's no value, hide the options dropdown
        if (fieldValue === '') {
            setOpenState(false);
        } else {
            // Show the options dropdown
            setOpenState(true);
            // Timeout by 500ms (debounce)
            setSearchDebounceState(setTimeout(function() {
                // Query google maps and populate the options
                fetch('https://places.googleapis.com/v1/places:autocomplete/?key=AIzaSyC5tErfJM7oSMflTr4fImoBP2pg5h8vS1E', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        input: fieldValue,
                        includedPrimaryTypes: [
                            'street_address',
                            'premise',
                            'subpremise'
                        ]
                    })
                }).then((response)=>{
                    return response.json();
                }).then((data)=>{
                    const newOptions = [];
                    // Ensure we have returned suggestions
                    if (typeof data.suggestions !== 'undefined') {
                        // For each returned suggestion
                        data.suggestions.forEach((suggestion)=>{
                            // Add the option
                            newOptions.push(suggestion['placePrediction']['text']['text']);
                        });
                    }
                    // Update the options
                    setOptionsState(newOptions);
                    // Hide loading state
                    setLoadingHiddenState(true);
                    // If there's no results
                    if (newOptions.length <= 0) {
                        // Show no results text
                        setNoResultsHiddenState(false);
                    } else {
                        // Hide no results text
                        setNoResultsHiddenState(true);
                    }
                })// If an error occured
                .catch(()=>{
                    // Hide loading state
                    setLoadingHiddenState(true);
                    // Show no results text
                    setNoResultsHiddenState(false);
                });
            }, 500));
        }
        // Also call the event handler that could be passed in from the parent
        onInput(event);
    }
    /* On blur of the <input> element
	-------------------------------------------------- */ function handleBlur(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Wait one animation frame for focus to change
        window.requestAnimationFrame(()=>{
            // If we're not focused on the options
            if (!optionsFocus) {
                // Defocus the field
                setFocusState(false);
                // Close the options
                setOpenState(false);
                // Get the value of the field
                const fieldValue = fieldRef?.current?.value;
                // If there's no value in here
                if (fieldValue === '') {
                    // Remove the <input> value
                    setValueState('');
                } else {
                    setValueState(initialValueState);
                }
            }
            // Also call the event handler that could be passed in from the parent
            onBlur(event);
        });
    }
    /* On focus of the <input> element
	-------------------------------------------------- */ function handleFocus(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        window.requestAnimationFrame(()=>{
            saveInitialValue();
            setFocusState(true);
            // Also call the event handler that could be passed in from the parent
            onFocus(event);
        });
    }
    /* On click of the <input> element
	-------------------------------------------------- */ function handleClick(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Select the text of our <input> field
        fieldRef?.current?.select();
        // Open the options (if there's a value)
        if (!openState && valueState) {
            openOptions();
        }
        // Also call the event handler that could be passed in from the parent
        onClick(event);
    }
    /* On click of the window, show or hide the options
	-------------------------------------------------- */ function handleWindowClick(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Check if they clicked inside the options
        let isInOptions = false;
        if (optionsRef.current) {
            const rect = optionsRef.current.getBoundingClientRect();
            const { clientX, clientY } = event;
            isInOptions = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
        }
        // If they clicked in the options AND the options are open
        if (isInOptions && openState) {
            openOptions();
        }
    }
    /* Open the options
	-------------------------------------------------- */ function openOptions() {
        // Open the options
        setOpenState(true);
        // Show all options
        const hiddenOptions = optionsRef?.current?.querySelectorAll('button[data-hidden="true"]:not([data-decorative="true"])');
        if (hiddenOptions) {
            hiddenOptions.forEach((hiddenOption)=>{
                hiddenOption.removeAttribute('data-hidden');
            });
        }
        // Hide "no results" text
        optionsRef?.current?.querySelector('button[data-decorative="true"]')?.setAttribute('data-hidden', 'true');
        // Position the options
        positionOptions();
    }
    /* On scroll of the window, position the options
	-------------------------------------------------- */ const [scrollDebounceState, setScrollDebounceState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    function handleWindowScroll() {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Check debounce and make sure the options is open
        if (!scrollDebounceState && openState) {
            // Position the options
            positionOptions();
            // Debounce by 1 animation frame
            setScrollDebounceState(true);
            window.requestAnimationFrame(()=>{
                setScrollDebounceState(false);
            });
        }
    }
    /* On key down of the window, navigate the options
	-------------------------------------------------- */ function handleWindowKeydown(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Make sure the options is open first of all
        if (!openState) {
            return;
        }
        /* If they pressed ESCAPE
		------------------------- */ if (event.key === 'Escape') {
            // Blur the currently focused element
            document.activeElement.blur();
            // Close the options
            setOpenState(false);
            // Focus the <input> field
            window.requestAnimationFrame(()=>{
                fieldRef?.current?.focus();
            });
        }
        /* If they pressed DOWN
		------------------------- */ if (event.key === 'ArrowDown') {
            // Stop window scroll events
            event.preventDefault();
            event.stopPropagation();
            // Focus the NEXT option by default
            let focusNext = true;
            // If we're focused on the <input> field element
            if (fieldRef?.current === document.activeElement) {
                // Focus the first option
                optionsRef?.current?.querySelector('button:not([data-hidden="true"]):not([data-decorative="true"])')?.focus();
                // Do not focus the NEXT option
                focusNext = false;
            }
            // If we want to focus the NEXT option
            if (focusNext) {
                // Get the buttons
                const buttons = optionsRef?.current?.querySelectorAll('button:not([data-hidden="true"]):not([data-decorative="true"])');
                // For each button
                let focusNextButton = false;
                buttons?.forEach((button)=>{
                    // If we've found the currently focused button
                    if (document.activeElement === button) {
                        // Set the loop to focus the next button
                        focusNextButton = true;
                    } else if (focusNextButton) {
                        // Focus the next button
                        button?.focus();
                        // Turn off the focus next button hook
                        focusNextButton = false;
                    }
                });
            }
        }
        /* If they pressed UP
		------------------------- */ if (event.key === 'ArrowUp') {
            // Stop window scroll events
            event.preventDefault();
            event.stopPropagation();
            // If we're NOT focused on the <input> field element
            if (document.activeElement !== fieldRef?.current) {
                // Get the buttons
                const buttons = optionsRef?.current?.querySelectorAll('button:not([data-hidden="true"]):not([data-decorative="true"])');
                if (buttons) {
                    // If we're focused on the first button
                    if (document.activeElement === buttons[0]) {
                        // Focus the <input> field
                        fieldRef?.current?.focus();
                    } else {
                        // For each button (loop in reverse order)
                        let focusNextButton = false;
                        for(let i = buttons.length; i >= 0; i--){
                            // If we've found the currently focused button
                            if (document.activeElement === buttons[i]) {
                                // Set the loop to focus the next button
                                focusNextButton = true;
                            } else if (focusNextButton) {
                                // Focus the next button
                                buttons[i]?.focus();
                                // Turn off the focus next button hook
                                focusNextButton = false;
                            }
                        }
                    }
                }
            }
        }
    }
    /* Track if the options are in focus or not
	-------------------------------------------------- */ let optionsFocus = false;
    function optionsInFocus() {
        if (openState) {
            optionsFocus = true;
        }
    }
    function optionsOutOfFocus() {
        optionsFocus = false;
    }
    /* Position the options
	-------------------------------------------------- */ function canOptionsFitInViewportBelow() {
        // Get the <input> field element
        const fieldElement = fieldRef.current;
        // Get the options element
        const optionsElement = optionsRef.current;
        // Make sure the these elements exist
        if (!fieldElement || !optionsElement) {
            return true;
        }
        // Get the position and size of the <input> field element
        const fieldElementRect = fieldElement.getBoundingClientRect();
        if (fieldElementRect.bottom + optionsElement.offsetHeight > window.innerHeight) {
            return false;
        } else {
            return true;
        }
    }
    function positionOptions() {
        // If the options can fit in the viewport (displaying below the <input> field)
        if (canOptionsFitInViewportBelow()) {
            // Position it below
            setOptionsPositionState('bottom');
        } else {
            // Position it above
            setOptionsPositionState('top');
        }
    }
    /* Populate the value of the <input> field
	-------------------------------------------------- */ function populateValue(event) {
        // If the field isn't open, don't do anything (this stops onClick from firing when the element is hidden - thanks React for not respecting CSS pointer-events!)
        if (!openState) {
            return;
        }
        // Get the clicked option button (and make sure its not hidden)
        const clickedOption = event.target?.closest('button:not([data-hidden="true"])');
        // Make sure the clicked option exists
        if (clickedOption) {
            // Get the text of the clicked option
            let optionText = clickedOption?.querySelector('p')?.textContent;
            // Make sure the text is a string
            if (!optionText) {
                optionText = '';
            }
            // Update the value of the <input> field
            setValueState(optionText);
            // Close the options
            setOpenState(false);
            // Blur the <input> field
            fieldRef?.current?.blur();
            setFocusState(false);
        }
    }
    /* On mount and unmount
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Address.useEffect": ()=>{
            // Watch for window clicks
            window.addEventListener('click', handleWindowClick);
            // Watch for window scroll
            window.addEventListener('scroll', handleWindowScroll);
            // Watch for keyboard events
            window.addEventListener('keydown', handleWindowKeydown);
            return ({
                "Address.useEffect": ()=>{
                    // Stop watching for window clicks
                    window.removeEventListener('click', handleWindowClick);
                    // Stop watching for window scroll
                    window.removeEventListener('scroll', handleWindowScroll);
                    // Stop watching for keyboard events
                    window.removeEventListener('keydown', handleWindowKeydown);
                }
            })["Address.useEffect"];
        }
    }["Address.useEffect"]);
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_address,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/address/index.tsx",
                lineNumber: 710,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/address/index.tsx",
            lineNumber: 709,
            columnNumber: 4
        }, this);
    }
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/address/index.tsx",
                lineNumber: 722,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/address/index.tsx",
            lineNumber: 721,
            columnNumber: 4
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/address/index.tsx",
            lineNumber: 732,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/address/index.tsx",
        lineNumber: 731,
        columnNumber: 3
    }, this);
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            labelOutput,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldContainer,
                "data-open": openState,
                "data-focus": focusState,
                "data-disabled": disabled,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fieldRef,
                        name: name,
                        disabled: disabled,
                        onBlur: handleBlur,
                        onFocus: handleFocus,
                        onKeyDown: handleKeyDown,
                        onInput: handleInput,
                        onClick: handleClick,
                        onChange: handleChange,
                        value: valueState,
                        ...rest
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/address/index.tsx",
                        lineNumber: 746,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].options,
                        ref: optionsRef,
                        "data-position": optionsPositionState,
                        onFocus: optionsInFocus,
                        onBlur: optionsOutOfFocus,
                        children: [
                            optionsState.map((option, index)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    tabIndex: -1,
                                    "data-hidden": false,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option,
                                    onClick: populateValue,
                                    onFocus: optionsInFocus,
                                    onBlur: optionsOutOfFocus,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        size: "s",
                                        responsive: false,
                                        useTag: "p",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_text,
                                        children: option
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/forms/address/index.tsx",
                                        lineNumber: 774,
                                        columnNumber: 10
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/app/components/forms/address/index.tsx",
                                    lineNumber: 765,
                                    columnNumber: 9
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                tabIndex: -1,
                                "data-hidden": noResultsHiddenState,
                                "data-decorative": true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    size: "s",
                                    responsive: false,
                                    useTag: "p",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_text,
                                    children: "No results"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/forms/address/index.tsx",
                                    lineNumber: 781,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/forms/address/index.tsx",
                                lineNumber: 780,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                tabIndex: -1,
                                "data-hidden": loadingHiddenState,
                                "data-decorative": true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    size: "s",
                                    responsive: false,
                                    useTag: "p",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$address$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_text,
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/forms/address/index.tsx",
                                    lineNumber: 785,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/forms/address/index.tsx",
                                lineNumber: 784,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/forms/address/index.tsx",
                        lineNumber: 761,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/address/index.tsx",
                lineNumber: 744,
                columnNumber: 4
            }, this),
            errorTextOutput,
            helperTextOutput
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/address/index.tsx",
        lineNumber: 740,
        columnNumber: 3
    }, this);
}
_s(Address, "q6NThXv1b/azuBEnew+1bDmlw4Y=");
_c = Address;
const __TURBOPACK__default__export__ = Address;
var _c;
__turbopack_refresh__.register(_c, "Address");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/autoComplete/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrowIcon": "style-module__6fQUzW__arrowIcon",
  "component_autoComplete": "style-module__6fQUzW__component_autoComplete",
  "errorText": "style-module__6fQUzW__errorText",
  "fieldContainer": "style-module__6fQUzW__fieldContainer",
  "fieldImage": "style-module__6fQUzW__fieldImage",
  "hasArrowIcon": "style-module__6fQUzW__hasArrowIcon",
  "hasIcon": "style-module__6fQUzW__hasIcon",
  "helperText": "style-module__6fQUzW__helperText",
  "hiddenValueField": "style-module__6fQUzW__hiddenValueField",
  "icon": "style-module__6fQUzW__icon",
  "label": "style-module__6fQUzW__label",
  "option": "style-module__6fQUzW__option",
  "option_image": "style-module__6fQUzW__option_image",
  "option_text": "style-module__6fQUzW__option_text",
  "options": "style-module__6fQUzW__options",
  "prefix": "style-module__6fQUzW__prefix",
  "suffix": "style-module__6fQUzW__suffix",
});
}}),
"[project]/app/components/forms/autoComplete/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component AutoComplete

	Description:
		Displays an autoComplete form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this input (e.g. <input name='XXX'>)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		value
			Type: string
			Values: Any string
			Default: ''
			Description: Define which option is selected by its "value".

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		icon
			Type: string
			Values: Any "Huge Icon" name
			Default: ''
			Description: Add an icon to the left of the field. Use any "Huge Icon" name (https://hugeicons.com/icons).

		options
			Type: Array
			Values: An array of objects which define the options.
			Default: ''
			Description: Setup the autoComplete options with an array of objects. Example:
			[
				{
					// The label
					label:  'First option',

					// The value
					value:  'first-option',

					// (Optional) Add an image using a relative to "/public/img/"
					image: 'image.jpg'
				},
				...
			]

		...rest
			All other props are passed to <input>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/autoComplete/style.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function AutoComplete({ id = '', className = '', name = '', state = 'normal', disabled = false, label = '', value = '', helperText = '', icon = '', options = [], // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onBlur = ()=>{}, onFocus = ()=>{}, onKeyDown = ()=>{}, onInput = ()=>{}, onClick = ()=>{}, onChange = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state
	-------------------------------------------------- */ /* Focus state (true, false)
	------------------------- */ const [focusState, setFocusState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    /* Open state (true, false)
	------------------------- */ const [openState, setOpenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    /* Initial field value (used to restore the value and field image on escape keypress or blur with no result)
	------------------------- */ const [initialValueState, setInitialValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    /* Options position state ('top', 'bottom')
	------------------------- */ const [optionsPositionState, setOptionsPositionState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('bottom');
    /* Create "value state" (used for the hidden <input> field, which actually controls the value for the form submit)
	------------------------- */ const [valueState, setValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(value);
    /* Create "visible value state" (used for the visible <input> field, which is only for display purposes)
	------------------------- */ // Find the label of the default selected option
    let defaultSelectedOptionLabel = '';
    if (value) {
        options.forEach((option)=>{
            if (option.value === value) {
                defaultSelectedOptionLabel = option.label;
            }
        });
    }
    // Create the state
    const [visibleValueState, setVisibleValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(defaultSelectedOptionLabel);
    /* Create "field image" states (used to show an selected option's image inside the field)
	------------------------- */ // Find the image src of the default selected option
    let defaultSelectedOptionImage = '';
    if (value) {
        options.forEach((option)=>{
            if (option.value === value && option.image) {
                defaultSelectedOptionImage = '/img/' + option.image;
            }
        });
    }
    // If there's a default selected image, show the image in the field on load
    let defaultImageVisible = false;
    if (defaultSelectedOptionImage) {
        defaultImageVisible = true;
    }
    // Create the state
    const [fieldImageVisibleState, setFieldImageVisibleState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(defaultImageVisible);
    const [fieldImageSrcState, setFieldImageSrcState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(defaultSelectedOptionImage);
    /* Create refs to target DOM elements
	-------------------------------------------------- */ // HTML <input> field
    const fieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // HTML <input> hidden field to hold the value
    const valueFieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // The field image
    const fieldImageRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // The options
    const optionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* Support escape keypress to restore initial field value
	-------------------------------------------------- */ // Save initial value (on focus)
    function saveInitialValue() {
        // Get the value of the field
        let initialValue = fieldRef?.current?.value;
        // Make sure it's a string
        if (typeof initialValue !== 'string') {
            initialValue = '';
        }
        // Set the initial value state variable
        setInitialValueState(initialValue);
    }
    /* On change of the <input> element
	-------------------------------------------------- */ function handleChange(event) {
        // Get the input value
        const fieldValue = fieldRef?.current?.value;
        // Set the visible value state
        setVisibleValueState(fieldValue);
        // Also call the event handler that could be passed in from the parent
        onChange(event);
    }
    /* On key down of the <input> element
	-------------------------------------------------- */ function handleKeyDown(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Target the field
        const field = fieldRef.current;
        // Make sure the field exists
        if (!field) {
            return;
        }
        // Check for the escape keypress
        if (event.key === "Escape") {
            // Restore the initial value
            field.value = initialValueState;
            // Blur the currently focused element
            document.activeElement.blur();
        }
        // If they press an arrow key or enter
        if (event.key === 'Enter' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            // Open the options
            setOpenState(true);
            // Position the options
            positionOptions();
        }
        // Also call the event handler that could be passed in from the parent
        onKeyDown(event);
    }
    /* On input of the <input> element
	-------------------------------------------------- */ function handleInput(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Open the options
        setOpenState(true);
        // Position the options
        positionOptions();
        // Wait one animation frame to ensure the value of the <input> field has updated
        window.requestAnimationFrame(()=>{
            // Search the options
            searchOptions();
            // Get the value of the field
            const fieldValue = fieldRef?.current?.value;
            // If there's no value in here
            if (fieldValue === '') {
                // De-select any selected options
                optionsRef?.current?.querySelector('button[data-selected="true"]')?.removeAttribute('data-selected');
                // Remove the <input> field value
                setVisibleValueState('');
                // Remove the hidden field value
                setValueState('');
            }
        });
        // Also call the event handler that could be passed in from the parent
        onInput(event);
    }
    /* On blur of the <input> element
	-------------------------------------------------- */ function handleBlur(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Wait one animation frame for focus to change
        window.requestAnimationFrame(()=>{
            // If we're not focused on the options
            if (!optionsFocus) {
                // Defocus the field
                setFocusState(false);
                // Close the options
                setOpenState(false);
                // Get the value of the field
                const fieldValue = fieldRef?.current?.value;
                // If there's no value in here
                if (fieldValue === '') {
                    // De-select any selected options
                    optionsRef?.current?.querySelector('button[data-selected="true"]')?.removeAttribute('data-selected');
                    // Remove the <input> field value
                    setVisibleValueState('');
                    // Remove the hidden field value
                    setValueState('');
                } else {
                    let restoreValue = '';
                    options.forEach((option)=>{
                        if (option.value === valueState) {
                            restoreValue = option.label;
                        }
                    });
                    setVisibleValueState(restoreValue);
                }
            }
            // Also call the event handler that could be passed in from the parent
            onBlur(event);
        });
    }
    /* On focus of the <input> element
	-------------------------------------------------- */ function handleFocus(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        window.requestAnimationFrame(()=>{
            saveInitialValue();
            setFocusState(true);
            // Also call the event handler that could be passed in from the parent
            onFocus(event);
        });
    }
    /* On click of the <input> element
	-------------------------------------------------- */ function handleClick(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Select the text of our <input> field
        fieldRef?.current?.select();
        // Toggle the options open state
        if (!openState) {
            openOptions();
        } else {
            setOpenState(false);
        }
        // Also call the event handler that could be passed in from the parent
        onClick(event);
    }
    /* Search the options
	-------------------------------------------------- */ function searchOptions() {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Get the field value
        let search = fieldRef?.current?.value.toLowerCase().trim();
        // Ensure a string for search
        if (!search) {
            search = '';
        }
        // Get the option buttons
        const buttons = optionsRef?.current?.querySelectorAll('button');
        // For each button
        let foundResults = false;
        buttons?.forEach((button)=>{
            // Get the text
            const buttonText = button.querySelector('p')?.textContent?.toLowerCase().trim();
            // Make sure the text was found
            if (buttonText) {
                // If the text matches the search
                if (buttonText.indexOf(search) !== -1) {
                    // Show the button
                    button.removeAttribute('data-hidden');
                    // We found some results
                    foundResults = true;
                } else {
                    // Hide the button
                    button.setAttribute('data-hidden', 'true');
                }
            }
        });
        // Target the no results text
        const noResultsText = optionsRef?.current?.querySelector('button[data-decorative="true"]');
        if (noResultsText) {
            // If we didn't find any results
            if (!foundResults) {
                // Show the no results text
                noResultsText.removeAttribute('data-hidden');
            } else {
                // Hide the no results text
                noResultsText.setAttribute('data-hidden', 'true');
            }
        }
    }
    /* On click of the window, show or hide the options
	-------------------------------------------------- */ function handleWindowClick(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        let isInOptions = false;
        // Check if they clicked inside the options
        if (optionsRef.current) {
            const rect = optionsRef.current.getBoundingClientRect();
            const { clientX, clientY } = event;
            isInOptions = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
        }
        // If they clicked in the options AND the options are open
        if (isInOptions && openState) {
            openOptions();
        }
    }
    /* Open the options
	-------------------------------------------------- */ function openOptions() {
        // Open the options
        setOpenState(true);
        // Show all options
        const hiddenOptions = optionsRef?.current?.querySelectorAll('button[data-hidden="true"]:not([data-decorative="true"])');
        if (hiddenOptions) {
            hiddenOptions.forEach((hiddenOption)=>{
                hiddenOption.removeAttribute('data-hidden');
            });
        }
        // Hide "no results" text
        optionsRef?.current?.querySelector('button[data-decorative="true"]')?.setAttribute('data-hidden', 'true');
        // Position the options
        positionOptions();
    }
    /* On scroll of the window, position the options
	-------------------------------------------------- */ const [scrollDebounceState, setScrollDebounceState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    function handleWindowScroll() {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Check debounce and make sure the options is open
        if (!scrollDebounceState && openState) {
            // Position the options
            positionOptions();
            // Debounce by 1 animation frame
            setScrollDebounceState(true);
            window.requestAnimationFrame(()=>{
                setScrollDebounceState(false);
            });
        }
    }
    /* On key down of the window, navigate the options
	-------------------------------------------------- */ function handleWindowKeydown(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Make sure the options is open first of all
        if (!openState) {
            return;
        }
        /* If they pressed ESCAPE
		------------------------- */ if (event.key === 'Escape') {
            // Blur the currently focused element
            document.activeElement.blur();
            // Hide the dropdown
            setOpenState(false);
            // Focus the <input> field
            window.requestAnimationFrame(()=>{
                fieldRef?.current?.focus();
            });
        }
        /* If they pressed DOWN
		------------------------- */ if (event.key === 'ArrowDown') {
            // Stop window scroll events
            event.preventDefault();
            event.stopPropagation();
            // Focus the NEXT option by default
            let focusNext = true;
            // If we're focused on the <input> field element
            if (fieldRef?.current === document.activeElement) {
                // If there's a selected option (that isn't hidden)
                if (valueState && optionsRef?.current?.querySelector('button[data-selected="true"]:not([data-hidden="true"]):not([data-decorative="true"])')) {
                    // Focus the selected option
                    optionsRef?.current?.querySelector('button[data-selected="true"]:not([data-decorative="true"])')?.focus();
                } else {
                    // Focus the first option
                    optionsRef?.current?.querySelector('button:not([data-hidden="true"]):not([data-decorative="true"])')?.focus();
                    // Do not focus the NEXT option
                    focusNext = false;
                }
            }
            // If we want to focus the NEXT option
            if (focusNext) {
                // Get the buttons
                const buttons = optionsRef?.current?.querySelectorAll('button:not([data-hidden="true"]):not([data-decorative="true"])');
                // For each button
                let focusNextButton = false;
                buttons?.forEach((button)=>{
                    // If we've found the currently focused button
                    if (document.activeElement === button) {
                        // Set the loop to focus the next button
                        focusNextButton = true;
                    } else if (focusNextButton) {
                        // Focus the next button
                        button?.focus();
                        // Turn off the focus next button hook
                        focusNextButton = false;
                    }
                });
            }
        }
        /* If they pressed UP
		------------------------- */ if (event.key === 'ArrowUp') {
            // Stop window scroll events
            event.preventDefault();
            event.stopPropagation();
            // Focus the PREV option by default
            let focusPrev = true;
            // If we're focused on the <input> field element
            if (fieldRef?.current === document.activeElement) {
                // If there's a selected option (that isn't hidden)
                if (valueState && optionsRef?.current?.querySelector('button[data-selected="true"]:not([data-hidden="true"]:not([data-decorative="true"])')) {
                    // Focus the selected option
                    optionsRef?.current?.querySelector('button[data-selected="true"]:not([data-decorative="true"])')?.focus();
                } else {
                    // Do not focus the NEXT option
                    focusPrev = false;
                }
            }
            // If we want to focus the PREV option
            if (focusPrev) {
                // Get the buttons
                const buttons = optionsRef?.current?.querySelectorAll('button:not([data-hidden="true"]):not([data-decorative="true"])');
                if (buttons) {
                    // If we're focused on the first button
                    if (document.activeElement === buttons[0]) {
                        // Focus the <input> field
                        fieldRef?.current?.focus();
                        // Keep the options open
                        window.requestAnimationFrame(()=>{
                            setOpenState(true);
                            positionOptions();
                        });
                    } else {
                        // For each button (loop in reverse order)
                        let focusNextButton = false;
                        for(let i = buttons.length; i >= 0; i--){
                            // If we've found the currently focused button
                            if (document.activeElement === buttons[i]) {
                                // Set the loop to focus the next button
                                focusNextButton = true;
                            } else if (focusNextButton) {
                                // Focus the next button
                                buttons[i]?.focus();
                                // Turn off the focus next button hook
                                focusNextButton = false;
                            }
                        }
                    }
                }
            }
        }
    }
    /* Track if the options are in focus or not
	-------------------------------------------------- */ let optionsFocus = false;
    function optionsInFocus() {
        if (openState) {
            optionsFocus = true;
        }
    }
    function optionsOutOfFocus() {
        optionsFocus = false;
    }
    /* Position the options
	-------------------------------------------------- */ function canOptionsFitInViewportBelow() {
        // Get the <input> field element
        const fieldElement = fieldRef.current;
        // Get the options element
        const optionsElement = optionsRef.current;
        // Make sure the these elements exist
        if (!fieldElement || !optionsElement) {
            return true;
        }
        // Get the position and size of the <input> field element
        const fieldElementRect = fieldElement.getBoundingClientRect();
        if (fieldElementRect.bottom + optionsElement.offsetHeight > window.innerHeight) {
            return false;
        } else {
            return true;
        }
    }
    function positionOptions() {
        // If the options can fit in the viewport (displaying below the <input> field)
        if (canOptionsFitInViewportBelow()) {
            // Position it below
            setOptionsPositionState('bottom');
        } else {
            // Position it above
            setOptionsPositionState('top');
        }
    }
    /* Populate the value of the <input> field
	-------------------------------------------------- */ function populateValue(event) {
        // If the field isn't open, don't do anything (this stops onClick from firing when the element is hidden - thanks React for not respecting CSS pointer-events!)
        if (!openState) {
            return;
        }
        // Get the clicked option button (and make sure its not hidden)
        const clickedOption = event.target?.closest('button:not([data-hidden="true"])');
        // Make sure the option exists
        if (clickedOption) {
            // Remove selected state from any existing options
            optionsRef?.current?.querySelector('button[data-selected="true"]')?.removeAttribute('data-selected');
            // Set the selected state of this option
            clickedOption.setAttribute('data-selected', 'true');
            /* Populate the hidden field value
			------------------------- */ // Get the value
            let optionValue = clickedOption.getAttribute('data-value');
            // Make sure the value is a string
            if (!optionValue) {
                optionValue = '';
            }
            // Update the value of the hidden value field
            setValueState(optionValue);
            /* Populate the <input> field value
			------------------------- */ // Get the text of the option
            let optionText = clickedOption?.querySelector('p')?.textContent;
            // Make sure the value is a string
            if (!optionText) {
                optionText = '';
            }
            // Update the value of the <input> field
            setVisibleValueState(optionText);
            /* Close the options
			------------------------- */ setOpenState(false);
            /* Blur the <input> field
			------------------------- */ fieldRef?.current?.blur();
            setFocusState(false);
        }
    }
    /* When the visible field value changes, update the field image to match
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AutoComplete.useEffect": ()=>{
            // Loop through the options
            let showImage = '';
            options.forEach({
                "AutoComplete.useEffect": (option)=>{
                    // If the option is selected AND has an image
                    if (option.label === visibleValueState && option.image) {
                        // Show the image
                        showImage = option.image;
                    }
                }
            }["AutoComplete.useEffect"]);
            // Show the field image
            if (showImage) {
                setFieldImageSrcState('/img/' + showImage);
                setFieldImageVisibleState(true);
            } else {
                setFieldImageSrcState('');
                setFieldImageVisibleState(false);
            }
        }
    }["AutoComplete.useEffect"], [
        visibleValueState,
        options
    ]);
    /* On mount and unmount
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "AutoComplete.useEffect": ()=>{
            // Watch for window clicks
            window.addEventListener('click', handleWindowClick);
            // Watch for window scroll
            window.addEventListener('scroll', handleWindowScroll);
            // Watch for keyboard events
            window.addEventListener('keydown', handleWindowKeydown);
            return ({
                "AutoComplete.useEffect": ()=>{
                    // Stop watching for window clicks
                    window.removeEventListener('click', handleWindowClick);
                    // Stop watching for window scroll
                    window.removeEventListener('scroll', handleWindowScroll);
                    // Stop watching for keyboard events
                    window.removeEventListener('keydown', handleWindowKeydown);
                }
            })["AutoComplete.useEffect"];
        }
    }["AutoComplete.useEffect"]);
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_autoComplete,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                lineNumber: 902,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/autoComplete/index.tsx",
            lineNumber: 901,
            columnNumber: 4
        }, this);
    }
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                lineNumber: 914,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/autoComplete/index.tsx",
            lineNumber: 913,
            columnNumber: 4
        }, this);
    }
    /* Icon
	-------------------------------------------------- */ let iconOutput;
    let iconClass = '';
    if (icon) {
        iconOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            "data-visible": !fieldImageVisibleState,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: icon,
                size: "xs",
                responsive: false
            }, void 0, false, {
                fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                lineNumber: 927,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/autoComplete/index.tsx",
            lineNumber: 926,
            columnNumber: 4
        }, this);
        iconClass = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hasIcon;
    }
    /* Image
	-------------------------------------------------- */ let imageOutput;
    if (fieldImageSrcState) {
        imageOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: fieldImageSrcState,
            alt: "",
            width: 24,
            height: 24
        }, void 0, false, {
            fileName: "[project]/app/components/forms/autoComplete/index.tsx",
            lineNumber: 938,
            columnNumber: 17
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/autoComplete/index.tsx",
            lineNumber: 946,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/autoComplete/index.tsx",
        lineNumber: 945,
        columnNumber: 3
    }, this);
    /* Options
	-------------------------------------------------- */ // Loop through the options
    const optionsOutput = options.map((option, index)=>{
        // Add an image if there is one
        let optionImageOutput;
        if (option.image) {
            optionImageOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_image,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: '/img/' + option.image,
                    alt: "",
                    width: 24,
                    height: 24
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                    lineNumber: 960,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                lineNumber: 959,
                columnNumber: 5
            }, this);
        }
        // Is this option pre-selected?
        let selected = false;
        if (option.value === value) {
            selected = true;
        }
        // Output the option
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "data-value": option.value,
            tabIndex: -1,
            "data-hidden": false,
            "data-selected": selected,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option,
            onClick: populateValue,
            onFocus: optionsInFocus,
            onBlur: optionsOutOfFocus,
            children: [
                optionImageOutput,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "s",
                    responsive: false,
                    useTag: "p",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_text,
                    children: option.label
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                    lineNumber: 985,
                    columnNumber: 5
                }, this)
            ]
        }, index, true, {
            fileName: "[project]/app/components/forms/autoComplete/index.tsx",
            lineNumber: 973,
            columnNumber: 4
        }, this);
    });
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            labelOutput,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldContainer} ${iconClass} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hasArrowIcon}`,
                "data-open": openState,
                "data-focus": focusState,
                "data-disabled": disabled,
                children: [
                    iconOutput,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldImage,
                        ref: fieldImageRef,
                        "data-visible": fieldImageVisibleState,
                        children: imageOutput
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                        lineNumber: 1003,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fieldRef,
                        disabled: disabled,
                        onBlur: handleBlur,
                        onFocus: handleFocus,
                        onKeyDown: handleKeyDown,
                        onInput: handleInput,
                        onClick: handleClick,
                        onChange: handleChange,
                        value: visibleValueState,
                        ...rest
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                        lineNumber: 1008,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hiddenValueField,
                        name: name,
                        ref: valueFieldRef,
                        value: valueState,
                        onChange: ()=>{
                            setValueState(valueFieldRef?.current?.value);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                        lineNumber: 1022,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowIcon}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "arrow-down-01",
                            size: "s",
                            style: "stroke",
                            type: "sharp",
                            responsive: false
                        }, void 0, false, {
                            fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                            lineNumber: 1034,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                        lineNumber: 1033,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].options,
                        ref: optionsRef,
                        "data-position": optionsPositionState,
                        onFocus: optionsInFocus,
                        onBlur: optionsOutOfFocus,
                        children: [
                            optionsOutput,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                tabIndex: -1,
                                "data-hidden": true,
                                "data-decorative": true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    size: "s",
                                    responsive: false,
                                    useTag: "p",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$autoComplete$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_text,
                                    children: "No results"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                                    lineNumber: 1041,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                                lineNumber: 1040,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                        lineNumber: 1038,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/autoComplete/index.tsx",
                lineNumber: 998,
                columnNumber: 4
            }, this),
            errorTextOutput,
            helperTextOutput
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/autoComplete/index.tsx",
        lineNumber: 994,
        columnNumber: 3
    }, this);
}
_s(AutoComplete, "26w6XUq29KUYnMRb+FlnU/V/tUY=");
_c = AutoComplete;
const __TURBOPACK__default__export__ = AutoComplete;
var _c;
__turbopack_refresh__.register(_c, "AutoComplete");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/checkbox/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "checkboxContainer": "style-module__Ao0wcG__checkboxContainer",
  "component_checkbox": "style-module__Ao0wcG__component_checkbox",
  "errorText": "style-module__Ao0wcG__errorText",
  "helperText": "style-module__Ao0wcG__helperText",
  "icon": "style-module__Ao0wcG__icon",
  "label": "style-module__Ao0wcG__label",
  "textContainer": "style-module__Ao0wcG__textContainer",
});
}}),
"[project]/app/components/forms/checkbox/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Checkbox

	Description:
		Displays a checkbox form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this checkbox (e.g. <input name='XXX'>)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		selected
			Type: boolean
			Values: true, false
			Default: false
			Description: Is this checkbox selected?

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		...rest
			All other props are passed to <input>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$checkbox$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/checkbox/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Checkbox({ id = '', className = '', name = '', state = 'normal', disabled = false, selected = false, label = '', helperText = '', // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onChange = ()=>{}, ...rest }) {
    _s();
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$checkbox$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_checkbox,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: name,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/checkbox/index.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/checkbox/index.tsx",
            lineNumber: 125,
            columnNumber: 4
        }, this);
    }
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$checkbox$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/checkbox/index.tsx",
                lineNumber: 138,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/checkbox/index.tsx",
            lineNumber: 137,
            columnNumber: 4
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$checkbox$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/checkbox/index.tsx",
            lineNumber: 148,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/checkbox/index.tsx",
        lineNumber: 147,
        columnNumber: 3
    }, this);
    /* Selected
	-------------------------------------------------- */ // Create the selected state
    const [selectedState, setSelectedState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(selected);
    // Handle field change
    function handleChange(event) {
        setSelectedState(event.currentTarget.checked);
        // Also call the event handler that could be passed in from the parent
        onChange(event);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$checkbox$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxContainer,
                "data-selected": selectedState,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        name: name,
                        checked: selectedState,
                        id: name,
                        disabled: disabled,
                        onChange: handleChange,
                        ...rest
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/checkbox/index.tsx",
                        lineNumber: 173,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "tick-02",
                        size: "xxs",
                        style: "stroke",
                        type: "sharp",
                        strokeWidth: 4,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$checkbox$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/checkbox/index.tsx",
                        lineNumber: 182,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/checkbox/index.tsx",
                lineNumber: 172,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$checkbox$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textContainer,
                children: [
                    labelOutput,
                    helperTextOutput,
                    errorTextOutput
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/checkbox/index.tsx",
                lineNumber: 185,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/checkbox/index.tsx",
        lineNumber: 170,
        columnNumber: 3
    }, this);
}
_s(Checkbox, "N1YHqJs8TvQukL/62qNPxaItRSc=");
_c = Checkbox;
const __TURBOPACK__default__export__ = Checkbox;
var _c;
__turbopack_refresh__.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/datePicker/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrowIcon": "style-module__BIsipa__arrowIcon",
  "component_datePicker": "style-module__BIsipa__component_datePicker",
  "errorText": "style-module__BIsipa__errorText",
  "fieldContainer": "style-module__BIsipa__fieldContainer",
  "hasArrowIcon": "style-module__BIsipa__hasArrowIcon",
  "hasIcon": "style-module__BIsipa__hasIcon",
  "helperText": "style-module__BIsipa__helperText",
  "icon": "style-module__BIsipa__icon",
  "label": "style-module__BIsipa__label",
  "muiField": "style-module__BIsipa__muiField",
  "pickerIcon": "style-module__BIsipa__pickerIcon",
  "prefix": "style-module__BIsipa__prefix",
  "suffix": "style-module__BIsipa__suffix",
});
}}),
"[project]/app/components/forms/datePicker/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Date Picker

	Description:
		Displays a date picker form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this input (e.g. <input name='XXX'>)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		date
			Type: string
			Values: A date string in the following format: DD/MM/YYYY
			Default: ''
			Description: Set the date of this field.

		...rest
			All other props are passed to <input>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$datePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/datePicker/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-date-pickers@7.23.3__a73e7a7390665a4946a3aff58ebf52b6/node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$AdapterDayjs$2f$AdapterDayjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-date-pickers@7.23.3__a73e7a7390665a4946a3aff58ebf52b6/node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-date-pickers@7.23.3__a73e7a7390665a4946a3aff58ebf52b6/node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
function DatePicker({ id = '', className = '', name = '', state = 'normal', disabled = false, label = '', helperText = '', date = '', // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onBlur = ()=>{}, onFocus = ()=>{}, onChange = ()=>{}, onKeyDown = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state
	-------------------------------------------------- */ // Focus state (true, false)
    const [focusState, setFocusState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Initial field value (used to restore the value on escape keypress)
    const [initialValueState, setInitialValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    // Value state for our <input> field
    const [valueState, setValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(date);
    // Value state for Material UI <input> field
    let formattedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date, 'DD/MM/YYYY');
    if (formattedDate && !formattedDate.isValid()) {
        formattedDate = null;
    }
    const [mui_valueState, mui_setValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(formattedDate);
    /* Create refs to target DOM elements
	-------------------------------------------------- */ // Our HTML <input> field
    const fieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // Material UI date picker
    const muiDatePickerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* Support escape keypress to restore initial field value
	-------------------------------------------------- */ // Save initial value (on focus)
    function saveInitialValue() {
        // Get the value of the field
        let localValue = fieldRef?.current?.value;
        // Make sure it's a string
        if (typeof localValue !== 'string') {
            localValue = '';
        }
        // Set the initial value state variable
        setInitialValueState(localValue);
    }
    // Check for the escape keypress (on key down)
    function handleKeyDown(event) {
        // Target the field
        const field = fieldRef.current;
        // Make sure the field exists
        if (!field) {
            return;
        }
        // If escape was pressed
        if (event.key === "Escape") {
            // Restore the initial value
            field.value = initialValueState;
            // Blur the field
            field.blur();
        }
        // Also call the event handler that could be passed in from the parent
        onKeyDown(event);
    }
    /* Show date picker (on click of date picker icon)
	-------------------------------------------------- */ function showDatePicker() {
        const button = muiDatePickerRef?.current?.querySelector('button');
        if (button) {
            button.click();
        } else {
            muiDatePickerRef?.current?.click();
        }
    }
    /* On change of our field
	-------------------------------------------------- */ function handleChange(event) {
        // Get our input field's value
        const value = event.target.value;
        // Get the field value as a "Dayjs" style date
        const dateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, 'DD/MM/YYYY');
        // If it's valid
        if (dateValue.isValid()) {
            // Set the value of the material ui field
            mui_setValueState(dateValue);
        } else {
            // Set the value of the material ui field to null
            mui_setValueState(null);
        }
        // Set the value of our input field (string)
        setValueState(value);
        // Also call the event handler that could be passed in from the parent
        onChange(event);
    }
    /* On blur of our field, automatically format the date for ease of use
	-------------------------------------------------- */ function formatDate(event) {
        // Get our input field's value
        let value = event.target.value;
        // If there's a value
        if (value) {
            /* Entire date formatting
			------------------------- */ // Replace dashes with slashes
            value = value.replace(/-/g, '/');
            // Replace dots with slashes
            value = value.replace(/\./g, '/');
            // Replace spaces with slashes
            value = value.replace(/ /g, '/');
            // If there's no slashes
            if (value.indexOf('/') === -1) {
                // If it's 4 digits long, add slashes
                if (value.length === 4) {
                    const day = value.substr(0, 2);
                    const month = value.substr(2, 2);
                    value = day + '/' + month;
                }
                // If it's 6 digits long, add slashes
                if (value.length === 6) {
                    const day = value.substr(0, 2);
                    const month = value.substr(2, 2);
                    const year = value.substr(4, 2);
                    value = day + '/' + month + '/' + year;
                }
                // If it's 8 digits long, add slashes
                if (value.length === 6) {
                    const day = value.substr(0, 2);
                    const month = value.substr(2, 2);
                    const year = value.substr(4, 4);
                    value = day + '/' + month + '/' + year;
                }
            }
            // Split on slashes
            let bits = value.split('/');
            // If we've got 1 slash
            if (bits.length === 2) {
                // Add this year
                value = bits.join('/') + '/' + new Date().getFullYear();
                // Re-split on slashes
                bits = value.split('/');
            }
            // If we've got 2 slashes
            if (bits.length === 3) {
                /* Year formatting
				------------------------- */ // If year is less than 0, make it 0000
                if (parseFloat(bits[2]) < 0) {
                    bits[2] = '0000';
                }
                // If year is two digits long
                if (bits[2].length === 2) {
                    // Add '20' if it's less than 50
                    if (parseFloat(bits[2]) < 50) {
                        bits[2] = '20' + bits[2];
                    } else {
                        bits[2] = '19' + bits[2];
                    }
                }
                /* Month formatting
				------------------------- */ // If month is less than 1, make it 1
                if (parseFloat(bits[1]) < 1) {
                    bits[1] = '01';
                }
                // If month is greater than 12, make it 12
                if (parseFloat(bits[1]) > 12) {
                    bits[1] = '12';
                }
                // Add leading zero to month
                if (bits[1].length === 0) {
                    bits[1] = '0' + bits[1];
                }
                /* Day formatting
				------------------------- */ // If day is less than 1, make it 1
                if (parseFloat(bits[0]) < 1) {
                    bits[0] = '01';
                }
                // Work out the last day of the month (taking into account leap years)
                let lastDayOfMonth = 30;
                if (parseFloat(bits[1]) === 1 || parseFloat(bits[1]) === 3 || parseFloat(bits[1]) === 5 || parseFloat(bits[1]) === 7 || parseFloat(bits[1]) === 8 || parseFloat(bits[1]) === 10 || parseFloat(bits[1]) === 12) {
                    lastDayOfMonth = 31;
                } else if (parseFloat(bits[1]) === 2) {
                    // Leap year (divisible by 4)
                    if (parseFloat(bits[2]) % 4 === 0) {
                        lastDayOfMonth = 29;
                    } else {
                        lastDayOfMonth = 28;
                    }
                }
                // If day is greater than last day of month
                if (parseFloat(bits[0]) > lastDayOfMonth) {
                    bits[0] = lastDayOfMonth.toString();
                }
                // Add leading zero to day
                if (bits[0].length === 0) {
                    bits[0] = '0' + bits[0];
                }
                /* Output the modified date
				------------------------- */ value = bits.join('/');
            }
        }
        // Get the field value as a "Dayjs" style time
        const dateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, 'DD/MM/YYYY');
        // If it's valid
        if (dateValue.isValid()) {
            // Set the value of our input field (string)
            setValueState(dateValue.format('DD/MM/YYYY'));
            // Set the value of the material ui field
            mui_setValueState(dateValue);
        } else {
            // Set the value of our input field (string)
            setValueState('');
            // Set the value of the material ui field to null
            mui_setValueState(null);
        }
    }
    /* On change of the material ui field
	-------------------------------------------------- */ function mui_handleChange(newDate) {
        // Set the value of the material ui field
        mui_setValueState(newDate);
        // Get the material ui's field value as a string
        let newDateString = '';
        if (newDate && newDate.isValid()) {
            newDateString = newDate.format('DD/MM/YYYY');
        }
        // Set the value of our input field (string)
        setValueState(newDateString);
    }
    /* On focus of the <input> element
	-------------------------------------------------- */ function handleFocus(event) {
        saveInitialValue();
        setFocusState(true);
        // Also call the event handler that could be passed in from the parent
        onFocus(event);
    }
    /* On blur of the <input> element
	-------------------------------------------------- */ function handleBlur(event) {
        setFocusState(false);
        formatDate(event);
        // Also call the event handler that could be passed in from the parent
        onBlur(event);
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$datePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_datePicker,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$datePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/datePicker/index.tsx",
                lineNumber: 462,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/datePicker/index.tsx",
            lineNumber: 461,
            columnNumber: 4
        }, this);
    }
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$datePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/datePicker/index.tsx",
                lineNumber: 474,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/datePicker/index.tsx",
            lineNumber: 473,
            columnNumber: 4
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$datePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/datePicker/index.tsx",
            lineNumber: 484,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/datePicker/index.tsx",
        lineNumber: 483,
        columnNumber: 3
    }, this);
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            labelOutput,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$datePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldContainer,
                "data-focus": focusState,
                "data-disabled": disabled,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalizationProvider"], {
                        dateAdapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$AdapterDayjs$2f$AdapterDayjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdapterDayjs"],
                        adapterLocale: "en",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePicker"], {
                            format: "DD/MM/YYYY",
                            disabled: disabled,
                            value: mui_valueState,
                            onChange: mui_handleChange,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$datePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].muiField,
                            ref: muiDatePickerRef,
                            showDaysOutsideCurrentMonth: true
                        }, void 0, false, {
                            fileName: "[project]/app/components/forms/datePicker/index.tsx",
                            lineNumber: 499,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/datePicker/index.tsx",
                        lineNumber: 498,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: name,
                        ref: fieldRef,
                        disabled: disabled,
                        onBlur: handleBlur,
                        onFocus: handleFocus,
                        onChange: handleChange,
                        onKeyDown: handleKeyDown,
                        value: valueState,
                        ...rest
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/datePicker/index.tsx",
                        lineNumber: 511,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$datePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pickerIcon,
                        onClick: showDatePicker,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "calendar-03",
                            size: "s",
                            style: "solid",
                            type: "sharp",
                            responsive: false
                        }, void 0, false, {
                            fileName: "[project]/app/components/forms/datePicker/index.tsx",
                            lineNumber: 525,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/datePicker/index.tsx",
                        lineNumber: 524,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/datePicker/index.tsx",
                lineNumber: 496,
                columnNumber: 4
            }, this),
            errorTextOutput,
            helperTextOutput
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/datePicker/index.tsx",
        lineNumber: 492,
        columnNumber: 3
    }, this);
}
_s(DatePicker, "MNrhxxvZE3MjyEvZVj2j5wCUisc=");
_c = DatePicker;
const __TURBOPACK__default__export__ = DatePicker;
var _c;
__turbopack_refresh__.register(_c, "DatePicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/input/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrowIcon": "style-module__vlXCNa__arrowIcon",
  "component_input": "style-module__vlXCNa__component_input",
  "errorText": "style-module__vlXCNa__errorText",
  "fieldContainer": "style-module__vlXCNa__fieldContainer",
  "hasArrowIcon": "style-module__vlXCNa__hasArrowIcon",
  "hasIcon": "style-module__vlXCNa__hasIcon",
  "helperText": "style-module__vlXCNa__helperText",
  "icon": "style-module__vlXCNa__icon",
  "label": "style-module__vlXCNa__label",
  "prefix": "style-module__vlXCNa__prefix",
  "suffix": "style-module__vlXCNa__suffix",
});
}}),
"[project]/app/components/forms/input/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Input

	Description:
		Displays an input form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this input (e.g. <input name='XXX'>)

		fieldType
			Type: string
			Values: 'text', 'number', 'float', 'phone', 'email', 'url'
			Default: 'text'
			Description: Set the field type. Use this instead of passing "type" directly.

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		prefix
			Type: string
			Values: Any string
			Default: ''
			Description: Display a prefix inside the field.

		suffix
			Type: string
			Values: Any string
			Default: ''
			Description: Display a suffix inside the field.

		icon
			Type: string
			Values: Any "Huge Icon" name
			Default: ''
			Description: Add an icon to the left of the field. Use any "Huge Icon" name (https://hugeicons.com/icons).

		...rest
			All other props are passed to <input>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/input/style.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Input({ id = '', className = '', name = '', fieldType = 'text', state = 'normal', disabled = false, label = '', helperText = '', prefix = '', suffix = '', icon = '', // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onBlur = ()=>{}, onFocus = ()=>{}, onKeyDown = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state
	-------------------------------------------------- */ // Focus state (true, false)
    const [focusState, setFocusState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Initial field value (used to restore the value on escape keypress)
    const [initialValueState, setInitialValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    /* Create refs to target DOM elements
	-------------------------------------------------- */ // HTML <input> field
    const fieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* Focus the field (triggered on click of the suffix, prefix)
	-------------------------------------------------- */ function focusField() {
        // Don't focus disabled fields
        if (disabled) {
            return;
        }
        // Focus the field
        fieldRef?.current?.focus();
        // Set the focus state
        setFocusState(true);
    }
    /* On blur of the <input> element
	-------------------------------------------------- */ function handleBlur(event) {
        setFocusState(false);
        // Also call the event handler that could be passed in from the parent
        onBlur(event);
    }
    /* On focus of the <input> element
	-------------------------------------------------- */ function handleFocus(event) {
        saveInitialValue();
        setFocusState(true);
        // Also call the event handler that could be passed in from the parent
        onFocus(event);
    }
    /* Support escape keypress to restore initial field value
	-------------------------------------------------- */ // Save initial value (on focus)
    function saveInitialValue() {
        // Get the value of the field
        let value = fieldRef?.current?.value;
        // Make sure it's a string
        if (typeof value !== 'string') {
            value = '';
        }
        // Set the initial value state variable
        setInitialValueState(value);
    }
    // Check for the escape keypress (on key down)
    function handleKeyDown(event) {
        // Target the field
        const field = fieldRef.current;
        // Make sure the field exists
        if (!field) {
            return;
        }
        // If escape was pressed
        if (event.key === "Escape") {
            // Restore the initial value
            field.value = initialValueState;
            // Blur the field
            field.blur();
        }
        // Also call the event handler that could be passed in from the parent
        onKeyDown(event);
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_input,
        className
    ];
    /* Setup the field type
	-------------------------------------------------- */ /* Text (default)
	------------------------- */ let inputType = 'text';
    let inputStep = '';
    // If a field type prop has been passed in
    if (fieldType) {
        /* Number
		------------------------- */ if (fieldType === 'number') {
            inputType = 'number';
            // Allow whole numbers only
            inputStep = '1';
        } else if (fieldType === 'float') {
            inputType = 'number';
            // Allow any decimal places
            inputStep = 'any';
        } else if (fieldType === 'phone') {
            inputType = 'tel';
            // Add an icon
            icon = 'call-02';
        } else if (fieldType === 'email') {
            inputType = 'email';
            // Add an icon
            icon = 'mail-01';
        } else if (fieldType === 'url') {
            inputType = 'url';
        }
    }
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/input/index.tsx",
                lineNumber: 302,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/input/index.tsx",
            lineNumber: 301,
            columnNumber: 4
        }, this);
    }
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/input/index.tsx",
                lineNumber: 314,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/input/index.tsx",
            lineNumber: 313,
            columnNumber: 4
        }, this);
    }
    /* Prefix
	-------------------------------------------------- */ let prefixOutput;
    if (prefix) {
        prefixOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prefix,
            onClick: focusField,
            children: prefix
        }, void 0, false, {
            fileName: "[project]/app/components/forms/input/index.tsx",
            lineNumber: 324,
            columnNumber: 18
        }, this);
    }
    /* Suffix
	-------------------------------------------------- */ let suffixOutput;
    if (suffix) {
        suffixOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].suffix,
            onClick: focusField,
            children: suffix
        }, void 0, false, {
            fileName: "[project]/app/components/forms/input/index.tsx",
            lineNumber: 332,
            columnNumber: 18
        }, this);
    }
    /* Icon
	-------------------------------------------------- */ let iconOutput;
    let iconClass = '';
    if (icon) {
        iconOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: icon,
                size: "xs",
                responsive: false
            }, void 0, false, {
                fileName: "[project]/app/components/forms/input/index.tsx",
                lineNumber: 341,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/input/index.tsx",
            lineNumber: 341,
            columnNumber: 16
        }, this);
        iconClass = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hasIcon;
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/input/index.tsx",
            lineNumber: 350,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/input/index.tsx",
        lineNumber: 349,
        columnNumber: 3
    }, this);
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            labelOutput,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$input$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldContainer} ${iconClass}`,
                "data-focus": focusState,
                "data-disabled": disabled,
                children: [
                    iconOutput,
                    prefixOutput,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: name,
                        ref: fieldRef,
                        disabled: disabled,
                        type: inputType,
                        step: inputStep,
                        onBlur: handleBlur,
                        onFocus: handleFocus,
                        onKeyDown: handleKeyDown,
                        ...rest
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/input/index.tsx",
                        lineNumber: 370,
                        columnNumber: 5
                    }, this),
                    suffixOutput
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/input/index.tsx",
                lineNumber: 362,
                columnNumber: 4
            }, this),
            errorTextOutput,
            helperTextOutput
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/input/index.tsx",
        lineNumber: 358,
        columnNumber: 3
    }, this);
}
_s(Input, "Mj9hA821Yx75vcbJb1s4VKm3EGc=");
_c = Input;
const __TURBOPACK__default__export__ = Input;
var _c;
__turbopack_refresh__.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/multiSelect/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrowIcon": "style-module__bx3e9q__arrowIcon",
  "clickableArea": "style-module__bx3e9q__clickableArea",
  "component_multiSelect": "style-module__bx3e9q__component_multiSelect",
  "errorText": "style-module__bx3e9q__errorText",
  "fieldContainer": "style-module__bx3e9q__fieldContainer",
  "hasArrowIcon": "style-module__bx3e9q__hasArrowIcon",
  "hasIcon": "style-module__bx3e9q__hasIcon",
  "helperText": "style-module__bx3e9q__helperText",
  "hiddenValueField": "style-module__bx3e9q__hiddenValueField",
  "icon": "style-module__bx3e9q__icon",
  "label": "style-module__bx3e9q__label",
  "option": "style-module__bx3e9q__option",
  "option_image": "style-module__bx3e9q__option_image",
  "option_text": "style-module__bx3e9q__option_text",
  "options": "style-module__bx3e9q__options",
  "prefix": "style-module__bx3e9q__prefix",
  "removeOption": "style-module__bx3e9q__removeOption",
  "selectedOption": "style-module__bx3e9q__selectedOption",
  "selectedOptions": "style-module__bx3e9q__selectedOptions",
  "suffix": "style-module__bx3e9q__suffix",
});
}}),
"[project]/app/components/forms/multiSelect/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component MultiSelect

	Description:
		Displays a multiSelect form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this input (e.g. <input name='XXX'>)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		value
			Type: string
			Values: Option values as a comma separated list
			Default: ''
			Description: Define which options are selected by their "value". Example:
			"first-option,second-option"

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		options
			Type: Array
			Values: An array of objects which define the options.
			Default: ''
			Description: Setup the multiSelect options with an array of objects. Example:
			[
				{
					// The label
					label:  'First option',

					// The value
					value:  'first-option',

					// (Optional) Add an image using a relative to "/public/img/"
					image: 'image.jpg'
				},
				...
			]

		...rest
			All other props are passed to <input>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/multiSelect/style.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function MultiSelect({ id = '', className = '', name = '', state = 'normal', disabled = false, label = '', value = '', helperText = '', options = [], // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onClick = ()=>{}, onBlur = ()=>{}, onFocus = ()=>{}, onKeyDown = ()=>{}, onInput = ()=>{}, onChange = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state
	-------------------------------------------------- */ /* Focus state (true, false)
	------------------------- */ const [focusState, setFocusState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    /* Open state (true, false)
	------------------------- */ const [openState, setOpenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    /* Options position state ('top', 'bottom')
	------------------------- */ const [optionsPositionState, setOptionsPositionState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('bottom');
    /* Create "selected options state" (used to manage the selected options)
	------------------------- */ // Create the default selected options, based on the "value" prop
    const selectedOptions = [];
    // For each values in the "value" prop
    const valueArr = value.split(',');
    valueArr.forEach((val)=>{
        // For each option
        options.forEach((option)=>{
            // If the option's value matches this value
            if (option.value === val) {
                // Add it to the default selected options
                selectedOptions.push(option);
            }
        });
    });
    // Create the state to manage the selected options
    const [selectedOptionsState, setSelectedOptionsState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(selectedOptions);
    /* Create "value state" (used for the hidden <input> field, which actually controls the value for the form submit)
	------------------------- */ const [valueState, setValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(value);
    /* Create "visible value state" (used for the visible <input> field, which is not submitted with the form)
	------------------------- */ const [visibleValueState, setVisibleValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    /* Create "field hidden state" (used to manage the <input> hidden state)
	------------------------- */ // Is the <input> field hidden initally?
    let initialFieldHiddenState = false;
    if (value.length > 0) {
        initialFieldHiddenState = true;
    }
    // Create state
    const [fieldHiddenState, setFieldHiddenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(initialFieldHiddenState);
    /* Create refs to target DOM elements
	-------------------------------------------------- */ // Clickable area ref (for when the <input> is hidden)
    const clickableAreaRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // HTML <input> field
    const fieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // HTML <input> hidden field to hold the value
    const valueFieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // The options
    const optionsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* On change of the <input> element
	-------------------------------------------------- */ function handleChange(event) {
        // Get the input value
        const fieldValue = fieldRef?.current?.value;
        // Set the visible value state
        setVisibleValueState(fieldValue);
        // Also call the event handler that could be passed in from the parent
        onChange(event);
    }
    /* On key down of the <input> element
	-------------------------------------------------- */ function handleKeyDown(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Target the field
        const field = fieldRef.current;
        // Make sure the field exists
        if (!field) {
            return;
        }
        // Check for the escape keypress
        if (event.key === "Escape") {
            // Blur the currently focused element
            document.activeElement.blur();
        }
        // If they press an arrow key or enter
        if (event.key === 'Enter' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            // Search the options
            searchOptions();
            // Open the options
            setOpenState(true);
            // Position the options
            positionOptions();
        }
        // Also call the event handler that could be passed in from the parent
        onKeyDown(event);
    }
    /* On input of the <input> element
	-------------------------------------------------- */ function handleInput(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Search the options
        searchOptions();
        // Open the options
        setOpenState(true);
        // Position the options
        positionOptions();
        // Wait one animation frame to ensure the value of the <input> field has updated
        window.requestAnimationFrame(()=>{
            // Search the options
            searchOptions();
            // Also call the event handler that could be passed in from the parent
            onInput(event);
        });
    }
    /* On blur of the <input> element
	-------------------------------------------------- */ // This variable is used to track if the clickable area is in focus
    let clickableAreaFocus = false;
    function handleBlur(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Wait one animation frame for focus to change
        window.requestAnimationFrame(()=>{
            // If the options are not in focus AND the clickable area is not in focus
            if (!optionsFocus && !clickableAreaFocus) {
                // Remove the visible field value
                setVisibleValueState('');
                // Defocus the field
                setFocusState(false);
                // Close the options
                setOpenState(false);
                // Hide the input field (only if some options have been selected)
                if (selectedOptionsState.length > 0) {
                    setFieldHiddenState(true);
                }
            }
            // Also call the event handler that could be passed in from the parent
            onBlur(event);
        });
    }
    /* On focus of the <input> element
	-------------------------------------------------- */ function handleFocus(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        window.requestAnimationFrame(()=>{
            // Turn on the focus state
            setFocusState(true);
            // Show the input field
            setFieldHiddenState(false);
            // Also call the event handler that could be passed in from the parent
            onFocus(event);
        });
    }
    /* On click of the <input> element
	-------------------------------------------------- */ function handleClick(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Select the text of our <input> field
        fieldRef?.current?.select();
        // Toggle the options open state
        if (!openState) {
            openOptions();
        } else {
            setOpenState(false);
        }
        // Also call the event handler that could be passed in from the parent
        onClick(event);
    }
    /* Search the options
	-------------------------------------------------- */ function searchOptions() {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Get the field value
        let search = fieldRef?.current?.value.toLowerCase().trim();
        // Ensure a string for search
        if (!search) {
            search = '';
        }
        // Get the option buttons
        const buttons = optionsRef?.current?.querySelectorAll('button');
        // For each button
        let foundResults = false;
        buttons?.forEach((button)=>{
            // Get the text
            const buttonText = button.querySelector('p')?.textContent?.toLowerCase().trim();
            // Make sure the text was found
            if (buttonText) {
                // If the text matches the search
                if (buttonText.indexOf(search) !== -1) {
                    // Show the button
                    button.removeAttribute('data-hidden');
                    // We found some results
                    foundResults = true;
                } else {
                    // Hide the button
                    button.setAttribute('data-hidden', 'true');
                }
            }
        });
        // Target the no results text
        const noResultsText = optionsRef?.current?.querySelector('button[data-decorative="true"]');
        if (noResultsText) {
            // If we didn't find any results
            if (!foundResults) {
                // Show the no results text
                noResultsText.removeAttribute('data-hidden');
            } else {
                // Hide the no results text
                noResultsText.setAttribute('data-hidden', 'true');
            }
        }
    }
    /* On click of the window, show or hide the options
	-------------------------------------------------- */ function handleWindowClick(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Check if they clicked inside the options
        let isInOptions = false;
        if (optionsRef.current) {
            const rect = optionsRef.current.getBoundingClientRect();
            const { clientX, clientY } = event;
            isInOptions = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
        }
        // If they clicked in the options AND the options are open
        if (isInOptions && openState) {
            openOptions();
        }
    }
    /* Open the options
	-------------------------------------------------- */ function openOptions() {
        // Open the options
        setOpenState(true);
        // Show all options
        const hiddenOptions = optionsRef?.current?.querySelectorAll('button[data-hidden="true"]:not([data-decorative="true"])');
        if (hiddenOptions) {
            hiddenOptions.forEach((hiddenOption)=>{
                hiddenOption.removeAttribute('data-hidden');
            });
        }
        // Hide "no results" text
        optionsRef?.current?.querySelector('button[data-decorative="true"]')?.setAttribute('data-hidden', 'true');
        // Position the options
        positionOptions();
    }
    /* On scroll of the window, position the options
	-------------------------------------------------- */ const [scrollDebounceState, setScrollDebounceState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    function handleWindowScroll() {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Check debounce and make sure the options is open
        if (!scrollDebounceState && openState) {
            // Position the options
            positionOptions();
            // Debounce by 1 animation frame
            setScrollDebounceState(true);
            window.requestAnimationFrame(()=>{
                setScrollDebounceState(false);
            });
        }
    }
    /* On key down of the window, navigate the options
	-------------------------------------------------- */ function handleWindowKeydown(event) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Make sure the options is open first of all
        if (!openState) {
            return;
        }
        /* If they pressed ESCAPE
		------------------------- */ if (event.key === 'Escape') {
            // Blur the currently focused element
            document.activeElement.blur();
            // Hide the dropdown
            setOpenState(false);
            // Focus the <input> field
            window.requestAnimationFrame(()=>{
                fieldRef?.current?.focus();
            });
        }
        /* If they pressed DOWN
		------------------------- */ if (event.key === 'ArrowDown') {
            // Stop window scroll events
            event.preventDefault();
            event.stopPropagation();
            // Focus the NEXT option by default
            let focusNext = true;
            // If we're focused on the <input> field element
            if (fieldRef?.current === document.activeElement) {
                // Focus the first option
                optionsRef?.current?.querySelector('button:not([data-hidden="true"]):not([data-decorative="true"])')?.focus();
                // Do not focus the NEXT option
                focusNext = false;
            }
            // If we want to focus the NEXT option
            if (focusNext) {
                // Get the buttons
                const buttons = optionsRef?.current?.querySelectorAll('button:not([data-hidden="true"]):not([data-decorative="true"])');
                // For each button
                let focusNextButton = false;
                buttons?.forEach((button)=>{
                    // If we've found the currently focused button
                    if (document.activeElement === button) {
                        // Set the loop to focus the next button
                        focusNextButton = true;
                    } else if (focusNextButton) {
                        // Focus the next button
                        button?.focus();
                        // Turn off the focus next button hook
                        focusNextButton = false;
                    }
                });
            }
        }
        /* If they pressed UP
		------------------------- */ if (event.key === 'ArrowUp') {
            // Stop window scroll events
            event.preventDefault();
            event.stopPropagation();
            // Focus the PREV option by default
            let focusPrev = true;
            // If we're focused on the <input> field element
            if (fieldRef?.current === document.activeElement) {
                // Do not focus the NEXT option
                focusPrev = false;
            }
            // If we want to focus the PREV option
            if (focusPrev) {
                // Get the buttons
                const buttons = optionsRef?.current?.querySelectorAll('button:not([data-hidden="true"]):not([data-decorative="true"])');
                if (buttons) {
                    // If we're focused on the first button
                    if (document.activeElement === buttons[0]) {
                        // Focus the <input> field
                        fieldRef?.current?.focus();
                        // Keep the options open
                        window.requestAnimationFrame(()=>{
                            // Search the options
                            searchOptions();
                            // Open the options
                            setOpenState(true);
                            // Position the options
                            positionOptions();
                        });
                    } else {
                        // For each button (loop in reverse order)
                        let focusNextButton = false;
                        for(let i = buttons.length; i >= 0; i--){
                            // If we've found the currently focused button
                            if (document.activeElement === buttons[i]) {
                                // Set the loop to focus the next button
                                focusNextButton = true;
                            } else if (focusNextButton) {
                                // Focus the next button
                                buttons[i]?.focus();
                                // Turn off the focus next button hook
                                focusNextButton = false;
                            }
                        }
                    }
                }
            }
        }
    }
    /* Track if the options are in focus or not
	-------------------------------------------------- */ let optionsFocus = false;
    function optionsInFocus() {
        if (openState) {
            optionsFocus = true;
        }
    }
    function optionsOutOfFocus() {
        optionsFocus = false;
    }
    /* Position the options
	-------------------------------------------------- */ function canOptionsFitInViewportBelow() {
        // Get the <input> field element
        const fieldElement = fieldRef.current;
        // Get the options element
        const optionsElement = optionsRef.current;
        // Make sure the these elements exist
        if (!fieldElement || !optionsElement) {
            return true;
        }
        // Get the position and size of the <input> field element
        const fieldElementRect = fieldElement.getBoundingClientRect();
        if (fieldElementRect.bottom + optionsElement.offsetHeight > window.innerHeight) {
            return false;
        } else {
            return true;
        }
    }
    function positionOptions() {
        // If the options can fit in the viewport (displaying below the <input> field)
        if (canOptionsFitInViewportBelow()) {
            // Position it below
            setOptionsPositionState('bottom');
        } else {
            // Position it above
            setOptionsPositionState('top');
        }
    }
    /* Remove a selected option
	-------------------------------------------------- */ function removeSelectedOption(removeValue) {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Filter out the option we want to remove from the selected options
        setSelectedOptionsState(selectedOptionsState.filter((option)=>{
            return option.value !== removeValue;
        }));
        window.requestAnimationFrame(()=>{
            // Focus the <input> field
            fieldRef?.current?.focus();
            // Open the dropdown
            setOpenState(true);
        });
    }
    /* Add a selected option
	-------------------------------------------------- */ function addSelectedOption(addValue) {
        // Make sure the field is not disabled and the options are open
        if (fieldRef?.current?.disabled || !openState) {
            return;
        }
        // For each option
        options.forEach((option)=>{
            // If the value matches the one we passed in
            if (option.value === addValue) {
                // Add it to the selected options state (we need to use .slice() here as this ensures React understands we've updated the array by making a copy of it and re-assigning it to state)
                const newOptions = selectedOptionsState.slice();
                newOptions.push(option);
                setSelectedOptionsState(newOptions);
            }
        });
        window.requestAnimationFrame(()=>{
            // Focus the <input> field
            fieldRef?.current?.focus();
            // Open the dropdown
            setOpenState(true);
        });
        // If we've selected all of the options
        if (selectedOptionsState.length !== options.length) {
            // Remove the field's focus state
            setFocusState(false);
        }
    }
    /* Update the value of the hidden <input> field whenever the selected options change
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MultiSelect.useEffect": ()=>{
            let newValue = '';
            // For each selected option
            selectedOptionsState.forEach({
                "MultiSelect.useEffect": (option)=>{
                    // Add it to the value
                    newValue += option.value + ',';
                }
            }["MultiSelect.useEffect"]);
            // Remove trailing comma from the value
            if (newValue !== '') {
                newValue = newValue.slice(0, -1);
            }
            // Apply the value to the hidden <input> field
            setValueState(newValue);
        }
    }["MultiSelect.useEffect"], [
        selectedOptionsState
    ]);
    /* On mount and unmount
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MultiSelect.useEffect": ()=>{
            // Watch for window clicks
            window.addEventListener('click', handleWindowClick);
            // Watch for window scroll
            window.addEventListener('scroll', handleWindowScroll);
            // Watch for keyboard events
            window.addEventListener('keydown', handleWindowKeydown);
            return ({
                "MultiSelect.useEffect": ()=>{
                    // Stop watching for window clicks
                    window.removeEventListener('click', handleWindowClick);
                    // Stop watching for window scroll
                    window.removeEventListener('scroll', handleWindowScroll);
                    // Stop watching for keyboard events
                    window.removeEventListener('keydown', handleWindowKeydown);
                }
            })["MultiSelect.useEffect"];
        }
    }["MultiSelect.useEffect"]);
    /* On mouse down of the clickable area
	-------------------------------------------------- */ function handleMouseDown_clickableArea() {
        clickableAreaFocus = true;
        fieldRef?.current?.focus();
    }
    /* On mouse down of the clickable area
	-------------------------------------------------- */ function handleMouseUp_clickableArea() {
        clickableAreaFocus = false;
        fieldRef?.current?.focus();
    }
    /* On touch start of the clickable area
	-------------------------------------------------- */ function handleTouchStart_clickableArea() {
        clickableAreaFocus = true;
        fieldRef?.current?.focus();
    }
    /* On touch end of the clickable area
	-------------------------------------------------- */ function handleTouchEnd_clickableArea() {
        clickableAreaFocus = false;
        fieldRef?.current?.focus();
    }
    /* On click of the clickable area
	-------------------------------------------------- */ function handleClick_clickableArea() {
        // Make sure the field is not disabled
        if (fieldRef?.current?.disabled) {
            return;
        }
        // Toggle the options open state
        if (!openState) {
            // Open the options after the focus has changed
            window.requestAnimationFrame(openOptions);
        } else {
            setOpenState(false);
        }
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_multiSelect,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                lineNumber: 881,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/multiSelect/index.tsx",
            lineNumber: 880,
            columnNumber: 4
        }, this);
    }
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                lineNumber: 893,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/multiSelect/index.tsx",
            lineNumber: 892,
            columnNumber: 4
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/multiSelect/index.tsx",
            lineNumber: 903,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/multiSelect/index.tsx",
        lineNumber: 902,
        columnNumber: 3
    }, this);
    /* Selected options
	-------------------------------------------------- */ // Map the selected options for the DOM
    const selectedOptionsMapped = selectedOptionsState.map((option, index)=>{
        // Add an image if there is one
        let imageOutput;
        if (option.image) {
            imageOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_image,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: '/img/' + option.image,
                    alt: "",
                    width: 24,
                    height: 24
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                    lineNumber: 917,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                lineNumber: 916,
                columnNumber: 5
            }, this);
        }
        // Output the option
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-value": option.value,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedOption,
            children: [
                imageOutput,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "s",
                    responsive: false,
                    useTag: "p",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_text,
                    children: option.label
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                    lineNumber: 930,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeOption,
                    onClick: ()=>{
                        removeSelectedOption(option.value);
                    },
                    tabIndex: -1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "multiplication-sign",
                        size: "xxs",
                        responsive: false
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                        lineNumber: 938,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                    lineNumber: 931,
                    columnNumber: 5
                }, this)
            ]
        }, index, true, {
            fileName: "[project]/app/components/forms/multiSelect/index.tsx",
            lineNumber: 924,
            columnNumber: 4
        }, this);
    });
    // Create the DOM output (with a container) - only if selected options actually exist
    let selectedOptionsOutput;
    if (selectedOptionsState.length > 0) {
        selectedOptionsOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectedOptions,
            children: selectedOptionsMapped
        }, void 0, false, {
            fileName: "[project]/app/components/forms/multiSelect/index.tsx",
            lineNumber: 948,
            columnNumber: 4
        }, this);
    }
    /* Options
	-------------------------------------------------- */ // Loop through the options
    const optionsMappedOutput = options.map((option, index)=>{
        // If this option is already selected, don't include it
        let includeOption = true;
        selectedOptionsState.forEach((selectedOption)=>{
            if (selectedOption.value === option.value) {
                includeOption = false;
            }
        });
        // If we are including the option
        if (includeOption) {
            // Add an image if there is one
            let imageOutput;
            if (option.image) {
                imageOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_image,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: '/img/' + option.image,
                        alt: "",
                        width: 24,
                        height: 24
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                        lineNumber: 974,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                    lineNumber: 973,
                    columnNumber: 6
                }, this);
            }
            // Output the option
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "data-value": option.value,
                tabIndex: -1,
                "data-hidden": false,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option,
                onClick: ()=>{
                    addSelectedOption(option.value);
                },
                onFocus: optionsInFocus,
                onBlur: optionsOutOfFocus,
                children: [
                    imageOutput,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "s",
                        responsive: false,
                        useTag: "p",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_text,
                        children: option.label
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                        lineNumber: 994,
                        columnNumber: 6
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                lineNumber: 981,
                columnNumber: 5
            }, this);
        }
        searchOptions();
    });
    // Create the DOM output (with a container) - only if options actually exist / are not all selected
    let optionsOutput;
    if (selectedOptionsState.length !== options.length) {
        optionsOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].options,
            ref: optionsRef,
            "data-position": optionsPositionState,
            onFocus: optionsInFocus,
            onBlur: optionsOutOfFocus,
            children: [
                optionsMappedOutput,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    tabIndex: -1,
                    "data-hidden": true,
                    "data-decorative": true,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "s",
                        responsive: false,
                        useTag: "p",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option_text,
                        children: "No results"
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                        lineNumber: 1009,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                    lineNumber: 1008,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/forms/multiSelect/index.tsx",
            lineNumber: 1006,
            columnNumber: 4
        }, this);
    }
    /* Input field
	-------------------------------------------------- */ let fieldOutput;
    // If we haven't selected all of the available options
    if (selectedOptionsState.length !== options.length) {
        // Show the field
        fieldOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: fieldRef,
                    disabled: disabled,
                    onBlur: handleBlur,
                    onFocus: handleFocus,
                    onKeyDown: handleKeyDown,
                    onInput: handleInput,
                    onClick: handleClick,
                    onChange: handleChange,
                    value: visibleValueState,
                    "data-hidden": fieldHiddenState,
                    ...rest
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                    lineNumber: 1026,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowIcon}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "arrow-down-01",
                        size: "s",
                        style: "stroke",
                        type: "sharp",
                        responsive: false
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                        lineNumber: 1042,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                    lineNumber: 1041,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            labelOutput,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldContainer} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hasArrowIcon}`,
                "data-open": openState,
                "data-focus": focusState,
                "data-disabled": disabled,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].clickableArea,
                        ref: clickableAreaRef,
                        onMouseDown: handleMouseDown_clickableArea,
                        onMouseUp: handleMouseUp_clickableArea,
                        onTouchStart: handleTouchStart_clickableArea,
                        onTouchEnd: handleTouchEnd_clickableArea,
                        onClick: handleClick_clickableArea,
                        children: [
                            selectedOptionsOutput,
                            fieldOutput
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                        lineNumber: 1063,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$multiSelect$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hiddenValueField,
                        name: name,
                        ref: valueFieldRef,
                        value: valueState,
                        onChange: ()=>{
                            setValueState(valueFieldRef?.current?.value);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                        lineNumber: 1080,
                        columnNumber: 5
                    }, this),
                    optionsOutput
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/multiSelect/index.tsx",
                lineNumber: 1056,
                columnNumber: 4
            }, this),
            errorTextOutput,
            helperTextOutput
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/multiSelect/index.tsx",
        lineNumber: 1052,
        columnNumber: 3
    }, this);
}
_s(MultiSelect, "lKwcPQ0y3N39pUaxvO+g9A/IQnI=");
_c = MultiSelect;
const __TURBOPACK__default__export__ = MultiSelect;
var _c;
__turbopack_refresh__.register(_c, "MultiSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/radio/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "checkboxContainer": "style-module__NGToFq__checkboxContainer",
  "component_radio": "style-module__NGToFq__component_radio",
  "errorText": "style-module__NGToFq__errorText",
  "helperText": "style-module__NGToFq__helperText",
  "icon": "style-module__NGToFq__icon",
  "label": "style-module__NGToFq__label",
  "option": "style-module__NGToFq__option",
  "options": "style-module__NGToFq__options",
  "textContainer": "style-module__NGToFq__textContainer",
});
}}),
"[project]/app/components/forms/radio/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Radio

	Description:
		Displays a radio form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of the radio input elements (e.g. <input name='XXX'>)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		value
			Type: string
			Values: Any string
			Default: ''
			Description: Define which option is selected by its "value".

		options
			Type: Array
			Values: An array of objects which define the options.
			Default: ''
			Description: Setup the radio options with an array of objects. Example:
			[
				{
					// The label
					label:  'First option',

					// The value
					value:  'first-option',

					// Add helper text to this option
					helperText: 'Helper text'
				},
				...
			]

		...rest
			All other props are passed to <div>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/radio/style.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Radio({ id = '', className = '', name = '', state = 'normal', disabled = false, label = '', value = '', options = [], // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onChange = ()=>{}, ...rest }) {
    _s();
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_radio,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/radio/index.tsx",
                lineNumber: 145,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/radio/index.tsx",
            lineNumber: 144,
            columnNumber: 4
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/radio/index.tsx",
            lineNumber: 155,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/radio/index.tsx",
        lineNumber: 154,
        columnNumber: 3
    }, this);
    /* On change of the <input> element
	-------------------------------------------------- */ function handleChange(event) {
        setSelectedState(event.currentTarget.value);
        // Also call the event handler that could be passed in from the parent
        onChange(event);
    }
    /* Options
	-------------------------------------------------- */ // Create the selected state (starting with the default selected option)
    const [selectedState, setSelectedState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(value);
    // Output the options
    const optionsOutput = options.map((option, index)=>{
        // Helper text
        let helperTextOutput;
        if (option.helperText) {
            helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "xs",
                    children: option.helperText
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/radio/index.tsx",
                    lineNumber: 182,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/forms/radio/index.tsx",
                lineNumber: 181,
                columnNumber: 5
            }, this);
        }
        // Selected
        let optionSelected = false;
        if (option.value === selectedState) {
            optionSelected = true;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxContainer,
                    "data-selected": optionSelected,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "radio",
                            disabled: disabled,
                            name: name,
                            value: option.value,
                            id: name + '_' + index,
                            checked: optionSelected,
                            onChange: handleChange
                        }, void 0, false, {
                            fileName: "[project]/app/components/forms/radio/index.tsx",
                            lineNumber: 197,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "tick-02",
                            size: "xxs",
                            style: "stroke",
                            type: "sharp",
                            strokeWidth: 4,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
                        }, void 0, false, {
                            fileName: "[project]/app/components/forms/radio/index.tsx",
                            lineNumber: 206,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/forms/radio/index.tsx",
                    lineNumber: 196,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: name + '_' + index,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: "s",
                                responsive: false,
                                inheritWeight: true,
                                children: option.label
                            }, void 0, false, {
                                fileName: "[project]/app/components/forms/radio/index.tsx",
                                lineNumber: 211,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/forms/radio/index.tsx",
                            lineNumber: 210,
                            columnNumber: 6
                        }, this),
                        helperTextOutput
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/forms/radio/index.tsx",
                    lineNumber: 209,
                    columnNumber: 5
                }, this)
            ]
        }, index, true, {
            fileName: "[project]/app/components/forms/radio/index.tsx",
            lineNumber: 194,
            columnNumber: 4
        }, this);
    });
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        ...rest,
        children: [
            labelOutput,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$radio$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].options,
                children: optionsOutput
            }, void 0, false, {
                fileName: "[project]/app/components/forms/radio/index.tsx",
                lineNumber: 229,
                columnNumber: 4
            }, this),
            errorTextOutput
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/radio/index.tsx",
        lineNumber: 224,
        columnNumber: 3
    }, this);
}
_s(Radio, "XRp8Reh15ho8OEx9o2PVjpvIrLE=");
_c = Radio;
const __TURBOPACK__default__export__ = Radio;
var _c;
__turbopack_refresh__.register(_c, "Radio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/textarea/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrowIcon": "style-module__BPJKIq__arrowIcon",
  "component_textarea": "style-module__BPJKIq__component_textarea",
  "errorText": "style-module__BPJKIq__errorText",
  "fieldContainer": "style-module__BPJKIq__fieldContainer",
  "hasArrowIcon": "style-module__BPJKIq__hasArrowIcon",
  "hasIcon": "style-module__BPJKIq__hasIcon",
  "helperText": "style-module__BPJKIq__helperText",
  "icon": "style-module__BPJKIq__icon",
  "label": "style-module__BPJKIq__label",
  "prefix": "style-module__BPJKIq__prefix",
  "suffix": "style-module__BPJKIq__suffix",
});
}}),
"[project]/app/components/forms/textarea/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Textarea

	Description:
		Displays a textarea form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this textarea (e.g. <textarea name='XXX' />)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		...rest
			All other props are passed to <textarea>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$textarea$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/textarea/style.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Textarea({ id = '', className = '', name = '', state = 'normal', disabled = false, label = '', helperText = '', // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onBlur = ()=>{}, onFocus = ()=>{}, onKeyDown = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state
	-------------------------------------------------- */ // Focus state (true, false)
    const [focusState, setFocusState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Initial field value (used to restore the value on escape keypress)
    const [initialValueState, setInitialValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    /* Create refs to target DOM elements
	-------------------------------------------------- */ // HTML <textarea> field
    const fieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* Support escape keypress to restore initial field value
	-------------------------------------------------- */ // Save initial value (on focus)
    function saveInitialValue() {
        // Get the value of the field
        let value = fieldRef?.current?.value;
        // Make sure it's a string
        if (typeof value !== 'string') {
            value = '';
        }
        // Set the initial value state variable
        setInitialValueState(value);
    }
    // Check for the escape keypress (on key down)
    function handleKeyDown(event) {
        // Target the field
        const field = fieldRef.current;
        // Make sure the field exists
        if (!field) {
            return;
        }
        // If escape was pressed
        if (event.key === "Escape") {
            // Restore the initial value
            field.value = initialValueState;
            // Blur the field
            field.blur();
        }
        // Also call the event handler that could be passed in from the parent
        onKeyDown(event);
    }
    /* On blur of the <textarea> element
	-------------------------------------------------- */ function handleBlur(event) {
        setFocusState(false);
        // Also call the event handler that could be passed in from the parent
        onBlur(event);
    }
    /* On focus of the <textarea> element
	-------------------------------------------------- */ function handleFocus(event) {
        saveInitialValue();
        setFocusState(true);
        // Also call the event handler that could be passed in from the parent
        onFocus(event);
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$textarea$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_textarea,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$textarea$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/textarea/index.tsx",
                lineNumber: 200,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/textarea/index.tsx",
            lineNumber: 199,
            columnNumber: 4
        }, this);
    }
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$textarea$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/textarea/index.tsx",
                lineNumber: 212,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/textarea/index.tsx",
            lineNumber: 211,
            columnNumber: 4
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$textarea$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/textarea/index.tsx",
            lineNumber: 222,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/textarea/index.tsx",
        lineNumber: 221,
        columnNumber: 3
    }, this);
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            labelOutput,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$textarea$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldContainer,
                "data-focus": focusState,
                "data-disabled": disabled,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: name,
                    ref: fieldRef,
                    disabled: disabled,
                    onBlur: handleBlur,
                    onFocus: handleFocus,
                    onKeyDown: handleKeyDown,
                    ...rest
                }, void 0, false, {
                    fileName: "[project]/app/components/forms/textarea/index.tsx",
                    lineNumber: 236,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/forms/textarea/index.tsx",
                lineNumber: 234,
                columnNumber: 4
            }, this),
            errorTextOutput,
            helperTextOutput
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/textarea/index.tsx",
        lineNumber: 230,
        columnNumber: 3
    }, this);
}
_s(Textarea, "Mj9hA821Yx75vcbJb1s4VKm3EGc=");
_c = Textarea;
const __TURBOPACK__default__export__ = Textarea;
var _c;
__turbopack_refresh__.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/timePicker/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "arrowIcon": "style-module__2gth1q__arrowIcon",
  "component_timePicker": "style-module__2gth1q__component_timePicker",
  "errorText": "style-module__2gth1q__errorText",
  "fieldContainer": "style-module__2gth1q__fieldContainer",
  "hasArrowIcon": "style-module__2gth1q__hasArrowIcon",
  "hasIcon": "style-module__2gth1q__hasIcon",
  "helperText": "style-module__2gth1q__helperText",
  "icon": "style-module__2gth1q__icon",
  "label": "style-module__2gth1q__label",
  "muiField": "style-module__2gth1q__muiField",
  "pickerIcon": "style-module__2gth1q__pickerIcon",
  "prefix": "style-module__2gth1q__prefix",
  "suffix": "style-module__2gth1q__suffix",
});
}}),
"[project]/app/components/forms/timePicker/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Time Picker

	Description:
		Displays a time picker form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this input (e.g. <input name='XXX'>)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		time
			Type: string
			Values: A time string in 12 hour format: "h:mm A" (e.g. "3:30 PM")
			Default: ''
			Description: Set the time of this field.

		...rest
			All other props are passed to <input>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$timePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/timePicker/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-date-pickers@7.23.3__a73e7a7390665a4946a3aff58ebf52b6/node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$AdapterDayjs$2f$AdapterDayjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-date-pickers@7.23.3__a73e7a7390665a4946a3aff58ebf52b6/node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DesktopTimePicker$2f$DesktopTimePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-date-pickers@7.23.3__a73e7a7390665a4946a3aff58ebf52b6/node_modules/@mui/x-date-pickers/DesktopTimePicker/DesktopTimePicker.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
function TimePicker({ id = '', className = '', name = '', state = 'normal', disabled = false, label = '', helperText = '', time = '', // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onBlur = ()=>{}, onFocus = ()=>{}, onChange = ()=>{}, onKeyDown = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state
	-------------------------------------------------- */ // Focus state (true, false)
    const [focusState, setFocusState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // Initial field value (used to restore the value on escape keypress)
    const [initialValueState, setInitialValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('');
    /* A little bit of helpful formatting for the time value passed in
	------------------------- */ if (time) {
        // To uppercase
        time = time.toUpperCase();
        // Add a space before 'PM' if there isn't one
        if (time.indexOf('PM') !== -1 && time.indexOf(' PM') === -1) {
            time = time.replace('PM', ' PM');
        }
        // Add a space before 'AM' if there isn't one
        if (time.indexOf('AM') !== -1 && time.indexOf(' AM') === -1) {
            time = time.replace('AM', ' AM');
        }
    }
    /* Value state for our <input> field
	------------------------- */ let timeString = '';
    if (time) {
        timeString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(time, 'h:mm A');
        if (timeString && timeString.isValid()) {
            timeString = timeString.format('h:mm A');
        }
    }
    const [valueState, setValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(timeString.toString());
    /* Value state for Material UI <input> field
	------------------------- */ let formattedTime = null;
    if (time) {
        formattedTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(time, 'h:mm A');
        if (formattedTime && !formattedTime.isValid()) {
            formattedTime = null;
        }
    }
    const [mui_valueState, mui_setValueState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(formattedTime);
    /* Create refs to target DOM elements
	-------------------------------------------------- */ // Our HTML <input> field
    const fieldRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // Material UI time picker
    const muiTimePickerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* Support escape keypress to restore initial field value
	-------------------------------------------------- */ // Save initial value (on focus)
    function saveInitialValue() {
        // Get the value of the field
        let localValue = fieldRef?.current?.value;
        // Make sure it's a string
        if (typeof localValue !== 'string') {
            localValue = '';
        }
        // Set the initial value state variable
        setInitialValueState(localValue);
    }
    // Check for the escape keypress (on key down)
    function handleKeyDown(event) {
        // Target the field
        const field = fieldRef.current;
        // Make sure the field exists
        if (!field) {
            return;
        }
        // If escape was pressed
        if (event.key === "Escape") {
            // Restore the initial value
            field.value = initialValueState;
            // Blur the field
            field.blur();
        }
        // Also call the event handler that could be passed in from the parent
        onKeyDown(event);
    }
    /* Show time picker (on click of time picker icon)
	-------------------------------------------------- */ function showTimePicker() {
        const button = muiTimePickerRef?.current?.querySelector('button');
        if (button) {
            button.click();
        } else {
            muiTimePickerRef?.current?.click();
        }
    }
    /* On change of our field
	-------------------------------------------------- */ function handleChange(event) {
        // Get our input field's value
        const value = event.target.value;
        // Get the field value as a "Dayjs" style time
        const timeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, 'h:mm A');
        // If it's valid
        if (timeValue.isValid()) {
            // Set the value of the material ui field
            mui_setValueState(timeValue);
        } else {
            // Set the value of the material ui field to null
            mui_setValueState(null);
        }
        // Set the value of our input field (string)
        setValueState(value);
        // Also call the event handler that could be passed in from the parent
        onChange(event);
    }
    /* On blur of our field, automatically format the time for ease of use
	-------------------------------------------------- */ function formatTime(event) {
        // Get our input field's value
        let value = event.target.value;
        // If there's a value
        if (value) {
            // Convert to uppercase
            value = value.toUpperCase();
            // Remove all spaces
            value = value.replace(/ /g, '');
            // Replace dashes with colons
            value = value.replace(/-/g, ':');
            // Replace dots with colons
            value = value.replace(/\./g, ':');
            // If it's 3 digits long and a number, add a colon
            if (value.length === 3 && Number(value)) {
                const hours = value.substr(0, 1);
                const minutes = value.substr(1, 2);
                value = hours + ':' + minutes;
            }
            // If it's 4 digits long and a number, add a colon
            if (value.length === 4 && Number(value)) {
                const hours = value.substr(0, 2);
                const minutes = value.substr(2, 2);
                value = hours + ':' + minutes;
            }
            // If there's no am or pm
            if (value.indexOf('AM') === -1 && value.indexOf('PM') === -1) {
                const bits = value.split(':');
                // If the hour is less than 6 or 12 make it automatically PM
                if (Number(bits[0]) < 6 || Number(bits[0]) === 12) {
                    value = bits.join(':') + ' PM';
                }
            }
            // Convert to 24 hour time
            value = value.replace('AM', '');
            if (value.indexOf('PM') !== -1) {
                value = value.replace('PM', '');
                const bits = value.split(':');
                if (Number(bits[0]) <= 12) {
                    bits[0] = (Number(bits[0]) + 12).toString();
                }
                value = bits.join(':');
            }
            // If we've got no ":" add ":00"
            if (value.indexOf(':') === -1) {
                value = value + ':00';
            }
            // Ensure hours and mins are 2 digits
            const bits = value.split(':');
            if (bits[0].length === 1) {
                bits[0] = '0' + bits[0];
            }
            if (bits[1].length === 1) {
                bits[1] = '0' + bits[1];
            }
            // Convert back to 12 hour time
            let amPm = 'AM';
            if (Number(bits[0]) > 12) {
                bits[0] = (Number(bits[0]) - 12).toString();
                // Ensure the hour can't be greater than 12
                if (Number(bits[0]) > 12) {
                    bits[0] = '12';
                }
                amPm = 'PM';
            }
            // Ensure the minute can't be greater than 59
            if (Number(bits[1]) > 59) {
                bits[1] = '59';
            }
            // Change the value
            value = bits.join(':') + ' ' + amPm;
        }
        // Get the field value as a "Dayjs" style time
        const timeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(value, 'h:mm A');
        // If it's valid
        if (timeValue.isValid()) {
            // Set the value of our input field (string)
            setValueState(timeValue.format('h:mm A'));
            // Set the value of the material ui field
            mui_setValueState(timeValue);
        } else {
            // Set the value of our input field (string)
            setValueState('');
            // Set the value of the material ui field to null
            mui_setValueState(null);
        }
    }
    /* On change of the material ui field
	-------------------------------------------------- */ function mui_handleChange(newTime) {
        // Set the value of the material ui field
        mui_setValueState(newTime);
        // Get the material ui's field value as a string
        let newTimeString = '';
        if (newTime && newTime.isValid()) {
            newTimeString = newTime.format('h:mm A');
        }
        // Set the value of our input field (string)
        setValueState(newTimeString);
    }
    /* On blur of the <input> element
	-------------------------------------------------- */ function handleBlur(event) {
        setFocusState(false);
        formatTime(event);
        // Also call the event handler that could be passed in from the parent
        onBlur(event);
    }
    /* On focus of the <input> element
	-------------------------------------------------- */ function handleFocus(event) {
        saveInitialValue();
        setFocusState(true);
        // Also call the event handler that could be passed in from the parent
        onFocus(event);
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$timePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_timePicker,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$timePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/timePicker/index.tsx",
                lineNumber: 436,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/timePicker/index.tsx",
            lineNumber: 435,
            columnNumber: 4
        }, this);
    }
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$timePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/timePicker/index.tsx",
                lineNumber: 448,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/timePicker/index.tsx",
            lineNumber: 447,
            columnNumber: 4
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$timePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/timePicker/index.tsx",
            lineNumber: 458,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/timePicker/index.tsx",
        lineNumber: 457,
        columnNumber: 3
    }, this);
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            labelOutput,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$timePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fieldContainer,
                "data-focus": focusState,
                "data-disabled": disabled,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalizationProvider"], {
                        dateAdapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$AdapterDayjs$2f$AdapterDayjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdapterDayjs"],
                        adapterLocale: "en",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$date$2d$pickers$40$7$2e$23$2e$3_$5f$a73e7a7390665a4946a3aff58ebf52b6$2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$DesktopTimePicker$2f$DesktopTimePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesktopTimePicker"], {
                            disabled: disabled,
                            value: mui_valueState,
                            onChange: mui_handleChange,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$timePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].muiField,
                            ref: muiTimePickerRef
                        }, void 0, false, {
                            fileName: "[project]/app/components/forms/timePicker/index.tsx",
                            lineNumber: 473,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/timePicker/index.tsx",
                        lineNumber: 472,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: name,
                        ref: fieldRef,
                        disabled: disabled,
                        onBlur: handleBlur,
                        onFocus: handleFocus,
                        onChange: handleChange,
                        onKeyDown: handleKeyDown,
                        value: valueState,
                        ...rest
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/timePicker/index.tsx",
                        lineNumber: 483,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$timePicker$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pickerIcon,
                        onClick: showTimePicker,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "clock-01",
                            size: "s",
                            style: "stroke",
                            strokeWidth: 2,
                            type: "sharp",
                            responsive: false
                        }, void 0, false, {
                            fileName: "[project]/app/components/forms/timePicker/index.tsx",
                            lineNumber: 497,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/forms/timePicker/index.tsx",
                        lineNumber: 496,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/timePicker/index.tsx",
                lineNumber: 470,
                columnNumber: 4
            }, this),
            errorTextOutput,
            helperTextOutput
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/timePicker/index.tsx",
        lineNumber: 466,
        columnNumber: 3
    }, this);
}
_s(TimePicker, "rmkM5EQuol8izX7AP+JVAUREQ7o=");
_c = TimePicker;
const __TURBOPACK__default__export__ = TimePicker;
var _c;
__turbopack_refresh__.register(_c, "TimePicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/forms/toggle/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_toggle": "style-module__2oPkpG__component_toggle",
  "errorText": "style-module__2oPkpG__errorText",
  "helperText": "style-module__2oPkpG__helperText",
  "label": "style-module__2oPkpG__label",
  "textContainer": "style-module__2oPkpG__textContainer",
});
}}),
"[project]/app/components/forms/toggle/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Toggle

	Description:
		Displays a toggle form field.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this toggle (e.g. <input name='XXX'>)

		state
			Type: string
			Values: 'normal', 'success', 'error'
			Default: ''
			Description: Set the visual state of this component.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Disable the field.

		selected
			Type: boolean
			Values: true, false
			Default: false
			Description: Is this toggle on?

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		helperText
			Type: string
			Values: Any string
			Default: ''
			Description: Display helper text below this field.

		...rest
			All other props are passed to <input>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$toggle$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/forms/toggle/style.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Toggle({ id = '', className = '', name = '', state = 'normal', disabled = false, selected = false, label = '', helperText = '', // Support passing in event listeners from the parent
// This ensures we don't override these as they're also used within this component
onChange = ()=>{}, ...rest }) {
    _s();
    /* If there's no name prop generate a unique id
	-------------------------------------------------- */ const uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    if (!name) {
        name = uniqueId;
    }
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$toggle$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_toggle,
        className
    ];
    /* Label
	-------------------------------------------------- */ let labelOutput;
    if (label) {
        labelOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: name,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                responsive: false,
                inheritWeight: true,
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/forms/toggle/index.tsx",
                lineNumber: 125,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/toggle/index.tsx",
            lineNumber: 124,
            columnNumber: 4
        }, this);
    }
    /* Helper text
	-------------------------------------------------- */ let helperTextOutput;
    if (helperText) {
        helperTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$toggle$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].helperText,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "xs",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/app/components/forms/toggle/index.tsx",
                lineNumber: 137,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/forms/toggle/index.tsx",
            lineNumber: 136,
            columnNumber: 4
        }, this);
    }
    /* Error text
	-------------------------------------------------- */ const errorTextOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$toggle$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "xs",
            children: "Error text"
        }, void 0, false, {
            fileName: "[project]/app/components/forms/toggle/index.tsx",
            lineNumber: 147,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/forms/toggle/index.tsx",
        lineNumber: 146,
        columnNumber: 3
    }, this);
    /* Selected state
	-------------------------------------------------- */ const [selectedState, setSelectedState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(selected);
    /* On change of the <input> element
	-------------------------------------------------- */ function handleChange(event) {
        setSelectedState(event.currentTarget.checked);
        // Also call the event handler that could be passed in from the parent
        onChange(event);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-state": state,
        "data-disabled": disabled,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                name: name,
                checked: selectedState,
                id: name,
                disabled: disabled,
                onChange: handleChange,
                ...rest
            }, void 0, false, {
                fileName: "[project]/app/components/forms/toggle/index.tsx",
                lineNumber: 172,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$toggle$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textContainer,
                children: [
                    labelOutput,
                    helperTextOutput,
                    errorTextOutput
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/forms/toggle/index.tsx",
                lineNumber: 182,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/forms/toggle/index.tsx",
        lineNumber: 170,
        columnNumber: 3
    }, this);
}
_s(Toggle, "N1YHqJs8TvQukL/62qNPxaItRSc=");
_c = Toggle;
const __TURBOPACK__default__export__ = Toggle;
var _c;
__turbopack_refresh__.register(_c, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/grid/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "align_center": "style-module__pZsena__align_center",
  "align_l_center": "style-module__pZsena__align_l_center",
  "align_l_left": "style-module__pZsena__align_l_left",
  "align_l_right": "style-module__pZsena__align_l_right",
  "align_left": "style-module__pZsena__align_left",
  "align_m_center": "style-module__pZsena__align_m_center",
  "align_m_left": "style-module__pZsena__align_m_left",
  "align_m_right": "style-module__pZsena__align_m_right",
  "align_right": "style-module__pZsena__align_right",
  "align_s_center": "style-module__pZsena__align_s_center",
  "align_s_left": "style-module__pZsena__align_s_left",
  "align_s_right": "style-module__pZsena__align_s_right",
  "align_xl_center": "style-module__pZsena__align_xl_center",
  "align_xl_left": "style-module__pZsena__align_xl_left",
  "align_xl_right": "style-module__pZsena__align_xl_right",
  "align_xs_center": "style-module__pZsena__align_xs_center",
  "align_xs_left": "style-module__pZsena__align_xs_left",
  "align_xs_right": "style-module__pZsena__align_xs_right",
  "align_xxl_center": "style-module__pZsena__align_xxl_center",
  "align_xxl_left": "style-module__pZsena__align_xxl_left",
  "align_xxl_right": "style-module__pZsena__align_xxl_right",
  "align_xxs_center": "style-module__pZsena__align_xxs_center",
  "align_xxs_left": "style-module__pZsena__align_xxs_left",
  "align_xxs_right": "style-module__pZsena__align_xxs_right",
  "align_xxxl_center": "style-module__pZsena__align_xxxl_center",
  "align_xxxl_left": "style-module__pZsena__align_xxxl_left",
  "align_xxxl_right": "style-module__pZsena__align_xxxl_right",
  "align_xxxs_center": "style-module__pZsena__align_xxxs_center",
  "align_xxxs_left": "style-module__pZsena__align_xxxs_left",
  "align_xxxs_right": "style-module__pZsena__align_xxxs_right",
  "colGap_l": "style-module__pZsena__colGap_l",
  "colGap_l_l": "style-module__pZsena__colGap_l_l",
  "colGap_l_m": "style-module__pZsena__colGap_l_m",
  "colGap_l_s": "style-module__pZsena__colGap_l_s",
  "colGap_l_xl": "style-module__pZsena__colGap_l_xl",
  "colGap_l_xs": "style-module__pZsena__colGap_l_xs",
  "colGap_m": "style-module__pZsena__colGap_m",
  "colGap_m_l": "style-module__pZsena__colGap_m_l",
  "colGap_m_m": "style-module__pZsena__colGap_m_m",
  "colGap_m_s": "style-module__pZsena__colGap_m_s",
  "colGap_m_xl": "style-module__pZsena__colGap_m_xl",
  "colGap_m_xs": "style-module__pZsena__colGap_m_xs",
  "colGap_s": "style-module__pZsena__colGap_s",
  "colGap_s_l": "style-module__pZsena__colGap_s_l",
  "colGap_s_m": "style-module__pZsena__colGap_s_m",
  "colGap_s_s": "style-module__pZsena__colGap_s_s",
  "colGap_s_xl": "style-module__pZsena__colGap_s_xl",
  "colGap_s_xs": "style-module__pZsena__colGap_s_xs",
  "colGap_xl": "style-module__pZsena__colGap_xl",
  "colGap_xl_l": "style-module__pZsena__colGap_xl_l",
  "colGap_xl_m": "style-module__pZsena__colGap_xl_m",
  "colGap_xl_s": "style-module__pZsena__colGap_xl_s",
  "colGap_xl_xl": "style-module__pZsena__colGap_xl_xl",
  "colGap_xl_xs": "style-module__pZsena__colGap_xl_xs",
  "colGap_xs": "style-module__pZsena__colGap_xs",
  "colGap_xs_l": "style-module__pZsena__colGap_xs_l",
  "colGap_xs_m": "style-module__pZsena__colGap_xs_m",
  "colGap_xs_s": "style-module__pZsena__colGap_xs_s",
  "colGap_xs_xl": "style-module__pZsena__colGap_xs_xl",
  "colGap_xs_xs": "style-module__pZsena__colGap_xs_xs",
  "colGap_xxl_l": "style-module__pZsena__colGap_xxl_l",
  "colGap_xxl_m": "style-module__pZsena__colGap_xxl_m",
  "colGap_xxl_s": "style-module__pZsena__colGap_xxl_s",
  "colGap_xxl_xl": "style-module__pZsena__colGap_xxl_xl",
  "colGap_xxl_xs": "style-module__pZsena__colGap_xxl_xs",
  "colGap_xxs_l": "style-module__pZsena__colGap_xxs_l",
  "colGap_xxs_m": "style-module__pZsena__colGap_xxs_m",
  "colGap_xxs_s": "style-module__pZsena__colGap_xxs_s",
  "colGap_xxs_xl": "style-module__pZsena__colGap_xxs_xl",
  "colGap_xxs_xs": "style-module__pZsena__colGap_xxs_xs",
  "colGap_xxxl_l": "style-module__pZsena__colGap_xxxl_l",
  "colGap_xxxl_m": "style-module__pZsena__colGap_xxxl_m",
  "colGap_xxxl_s": "style-module__pZsena__colGap_xxxl_s",
  "colGap_xxxl_xl": "style-module__pZsena__colGap_xxxl_xl",
  "colGap_xxxl_xs": "style-module__pZsena__colGap_xxxl_xs",
  "colGap_xxxs_l": "style-module__pZsena__colGap_xxxs_l",
  "colGap_xxxs_m": "style-module__pZsena__colGap_xxxs_m",
  "colGap_xxxs_s": "style-module__pZsena__colGap_xxxs_s",
  "colGap_xxxs_xl": "style-module__pZsena__colGap_xxxs_xl",
  "colGap_xxxs_xs": "style-module__pZsena__colGap_xxxs_xs",
  "component_grid": "style-module__pZsena__component_grid",
  "rowGap_l": "style-module__pZsena__rowGap_l",
  "rowGap_l_l": "style-module__pZsena__rowGap_l_l",
  "rowGap_l_m": "style-module__pZsena__rowGap_l_m",
  "rowGap_l_s": "style-module__pZsena__rowGap_l_s",
  "rowGap_l_xl": "style-module__pZsena__rowGap_l_xl",
  "rowGap_l_xs": "style-module__pZsena__rowGap_l_xs",
  "rowGap_m": "style-module__pZsena__rowGap_m",
  "rowGap_m_l": "style-module__pZsena__rowGap_m_l",
  "rowGap_m_m": "style-module__pZsena__rowGap_m_m",
  "rowGap_m_s": "style-module__pZsena__rowGap_m_s",
  "rowGap_m_xl": "style-module__pZsena__rowGap_m_xl",
  "rowGap_m_xs": "style-module__pZsena__rowGap_m_xs",
  "rowGap_s": "style-module__pZsena__rowGap_s",
  "rowGap_s_l": "style-module__pZsena__rowGap_s_l",
  "rowGap_s_m": "style-module__pZsena__rowGap_s_m",
  "rowGap_s_s": "style-module__pZsena__rowGap_s_s",
  "rowGap_s_xl": "style-module__pZsena__rowGap_s_xl",
  "rowGap_s_xs": "style-module__pZsena__rowGap_s_xs",
  "rowGap_xl": "style-module__pZsena__rowGap_xl",
  "rowGap_xl_l": "style-module__pZsena__rowGap_xl_l",
  "rowGap_xl_m": "style-module__pZsena__rowGap_xl_m",
  "rowGap_xl_s": "style-module__pZsena__rowGap_xl_s",
  "rowGap_xl_xl": "style-module__pZsena__rowGap_xl_xl",
  "rowGap_xl_xs": "style-module__pZsena__rowGap_xl_xs",
  "rowGap_xs": "style-module__pZsena__rowGap_xs",
  "rowGap_xs_l": "style-module__pZsena__rowGap_xs_l",
  "rowGap_xs_m": "style-module__pZsena__rowGap_xs_m",
  "rowGap_xs_s": "style-module__pZsena__rowGap_xs_s",
  "rowGap_xs_xl": "style-module__pZsena__rowGap_xs_xl",
  "rowGap_xs_xs": "style-module__pZsena__rowGap_xs_xs",
  "rowGap_xxl_l": "style-module__pZsena__rowGap_xxl_l",
  "rowGap_xxl_m": "style-module__pZsena__rowGap_xxl_m",
  "rowGap_xxl_s": "style-module__pZsena__rowGap_xxl_s",
  "rowGap_xxl_xl": "style-module__pZsena__rowGap_xxl_xl",
  "rowGap_xxl_xs": "style-module__pZsena__rowGap_xxl_xs",
  "rowGap_xxs_l": "style-module__pZsena__rowGap_xxs_l",
  "rowGap_xxs_m": "style-module__pZsena__rowGap_xxs_m",
  "rowGap_xxs_s": "style-module__pZsena__rowGap_xxs_s",
  "rowGap_xxs_xl": "style-module__pZsena__rowGap_xxs_xl",
  "rowGap_xxs_xs": "style-module__pZsena__rowGap_xxs_xs",
  "rowGap_xxxl_l": "style-module__pZsena__rowGap_xxxl_l",
  "rowGap_xxxl_m": "style-module__pZsena__rowGap_xxxl_m",
  "rowGap_xxxl_s": "style-module__pZsena__rowGap_xxxl_s",
  "rowGap_xxxl_xl": "style-module__pZsena__rowGap_xxxl_xl",
  "rowGap_xxxl_xs": "style-module__pZsena__rowGap_xxxl_xs",
  "rowGap_xxxs_l": "style-module__pZsena__rowGap_xxxs_l",
  "rowGap_xxxs_m": "style-module__pZsena__rowGap_xxxs_m",
  "rowGap_xxxs_s": "style-module__pZsena__rowGap_xxxs_s",
  "rowGap_xxxs_xl": "style-module__pZsena__rowGap_xxxs_xl",
  "rowGap_xxxs_xs": "style-module__pZsena__rowGap_xxxs_xs",
  "size_1": "style-module__pZsena__size_1",
  "size_10": "style-module__pZsena__size_10",
  "size_11": "style-module__pZsena__size_11",
  "size_12": "style-module__pZsena__size_12",
  "size_2": "style-module__pZsena__size_2",
  "size_3": "style-module__pZsena__size_3",
  "size_4": "style-module__pZsena__size_4",
  "size_5": "style-module__pZsena__size_5",
  "size_6": "style-module__pZsena__size_6",
  "size_7": "style-module__pZsena__size_7",
  "size_8": "style-module__pZsena__size_8",
  "size_9": "style-module__pZsena__size_9",
  "size_even": "style-module__pZsena__size_even",
  "size_grow": "style-module__pZsena__size_grow",
  "size_l_1": "style-module__pZsena__size_l_1",
  "size_l_10": "style-module__pZsena__size_l_10",
  "size_l_11": "style-module__pZsena__size_l_11",
  "size_l_12": "style-module__pZsena__size_l_12",
  "size_l_2": "style-module__pZsena__size_l_2",
  "size_l_3": "style-module__pZsena__size_l_3",
  "size_l_4": "style-module__pZsena__size_l_4",
  "size_l_5": "style-module__pZsena__size_l_5",
  "size_l_6": "style-module__pZsena__size_l_6",
  "size_l_7": "style-module__pZsena__size_l_7",
  "size_l_8": "style-module__pZsena__size_l_8",
  "size_l_9": "style-module__pZsena__size_l_9",
  "size_l_even": "style-module__pZsena__size_l_even",
  "size_l_grow": "style-module__pZsena__size_l_grow",
  "size_l_shrink": "style-module__pZsena__size_l_shrink",
  "size_m_1": "style-module__pZsena__size_m_1",
  "size_m_10": "style-module__pZsena__size_m_10",
  "size_m_11": "style-module__pZsena__size_m_11",
  "size_m_12": "style-module__pZsena__size_m_12",
  "size_m_2": "style-module__pZsena__size_m_2",
  "size_m_3": "style-module__pZsena__size_m_3",
  "size_m_4": "style-module__pZsena__size_m_4",
  "size_m_5": "style-module__pZsena__size_m_5",
  "size_m_6": "style-module__pZsena__size_m_6",
  "size_m_7": "style-module__pZsena__size_m_7",
  "size_m_8": "style-module__pZsena__size_m_8",
  "size_m_9": "style-module__pZsena__size_m_9",
  "size_m_even": "style-module__pZsena__size_m_even",
  "size_m_grow": "style-module__pZsena__size_m_grow",
  "size_m_shrink": "style-module__pZsena__size_m_shrink",
  "size_s_1": "style-module__pZsena__size_s_1",
  "size_s_10": "style-module__pZsena__size_s_10",
  "size_s_11": "style-module__pZsena__size_s_11",
  "size_s_12": "style-module__pZsena__size_s_12",
  "size_s_2": "style-module__pZsena__size_s_2",
  "size_s_3": "style-module__pZsena__size_s_3",
  "size_s_4": "style-module__pZsena__size_s_4",
  "size_s_5": "style-module__pZsena__size_s_5",
  "size_s_6": "style-module__pZsena__size_s_6",
  "size_s_7": "style-module__pZsena__size_s_7",
  "size_s_8": "style-module__pZsena__size_s_8",
  "size_s_9": "style-module__pZsena__size_s_9",
  "size_s_even": "style-module__pZsena__size_s_even",
  "size_s_grow": "style-module__pZsena__size_s_grow",
  "size_s_shrink": "style-module__pZsena__size_s_shrink",
  "size_shrink": "style-module__pZsena__size_shrink",
  "size_xl_1": "style-module__pZsena__size_xl_1",
  "size_xl_10": "style-module__pZsena__size_xl_10",
  "size_xl_11": "style-module__pZsena__size_xl_11",
  "size_xl_12": "style-module__pZsena__size_xl_12",
  "size_xl_2": "style-module__pZsena__size_xl_2",
  "size_xl_3": "style-module__pZsena__size_xl_3",
  "size_xl_4": "style-module__pZsena__size_xl_4",
  "size_xl_5": "style-module__pZsena__size_xl_5",
  "size_xl_6": "style-module__pZsena__size_xl_6",
  "size_xl_7": "style-module__pZsena__size_xl_7",
  "size_xl_8": "style-module__pZsena__size_xl_8",
  "size_xl_9": "style-module__pZsena__size_xl_9",
  "size_xl_even": "style-module__pZsena__size_xl_even",
  "size_xl_grow": "style-module__pZsena__size_xl_grow",
  "size_xl_shrink": "style-module__pZsena__size_xl_shrink",
  "size_xs_1": "style-module__pZsena__size_xs_1",
  "size_xs_10": "style-module__pZsena__size_xs_10",
  "size_xs_11": "style-module__pZsena__size_xs_11",
  "size_xs_12": "style-module__pZsena__size_xs_12",
  "size_xs_2": "style-module__pZsena__size_xs_2",
  "size_xs_3": "style-module__pZsena__size_xs_3",
  "size_xs_4": "style-module__pZsena__size_xs_4",
  "size_xs_5": "style-module__pZsena__size_xs_5",
  "size_xs_6": "style-module__pZsena__size_xs_6",
  "size_xs_7": "style-module__pZsena__size_xs_7",
  "size_xs_8": "style-module__pZsena__size_xs_8",
  "size_xs_9": "style-module__pZsena__size_xs_9",
  "size_xs_even": "style-module__pZsena__size_xs_even",
  "size_xs_grow": "style-module__pZsena__size_xs_grow",
  "size_xs_shrink": "style-module__pZsena__size_xs_shrink",
  "size_xxl_1": "style-module__pZsena__size_xxl_1",
  "size_xxl_10": "style-module__pZsena__size_xxl_10",
  "size_xxl_11": "style-module__pZsena__size_xxl_11",
  "size_xxl_12": "style-module__pZsena__size_xxl_12",
  "size_xxl_2": "style-module__pZsena__size_xxl_2",
  "size_xxl_3": "style-module__pZsena__size_xxl_3",
  "size_xxl_4": "style-module__pZsena__size_xxl_4",
  "size_xxl_5": "style-module__pZsena__size_xxl_5",
  "size_xxl_6": "style-module__pZsena__size_xxl_6",
  "size_xxl_7": "style-module__pZsena__size_xxl_7",
  "size_xxl_8": "style-module__pZsena__size_xxl_8",
  "size_xxl_9": "style-module__pZsena__size_xxl_9",
  "size_xxl_even": "style-module__pZsena__size_xxl_even",
  "size_xxl_grow": "style-module__pZsena__size_xxl_grow",
  "size_xxl_shrink": "style-module__pZsena__size_xxl_shrink",
  "size_xxs_1": "style-module__pZsena__size_xxs_1",
  "size_xxs_10": "style-module__pZsena__size_xxs_10",
  "size_xxs_11": "style-module__pZsena__size_xxs_11",
  "size_xxs_12": "style-module__pZsena__size_xxs_12",
  "size_xxs_2": "style-module__pZsena__size_xxs_2",
  "size_xxs_3": "style-module__pZsena__size_xxs_3",
  "size_xxs_4": "style-module__pZsena__size_xxs_4",
  "size_xxs_5": "style-module__pZsena__size_xxs_5",
  "size_xxs_6": "style-module__pZsena__size_xxs_6",
  "size_xxs_7": "style-module__pZsena__size_xxs_7",
  "size_xxs_8": "style-module__pZsena__size_xxs_8",
  "size_xxs_9": "style-module__pZsena__size_xxs_9",
  "size_xxs_even": "style-module__pZsena__size_xxs_even",
  "size_xxs_grow": "style-module__pZsena__size_xxs_grow",
  "size_xxs_shrink": "style-module__pZsena__size_xxs_shrink",
  "size_xxxl_1": "style-module__pZsena__size_xxxl_1",
  "size_xxxl_10": "style-module__pZsena__size_xxxl_10",
  "size_xxxl_11": "style-module__pZsena__size_xxxl_11",
  "size_xxxl_12": "style-module__pZsena__size_xxxl_12",
  "size_xxxl_2": "style-module__pZsena__size_xxxl_2",
  "size_xxxl_3": "style-module__pZsena__size_xxxl_3",
  "size_xxxl_4": "style-module__pZsena__size_xxxl_4",
  "size_xxxl_5": "style-module__pZsena__size_xxxl_5",
  "size_xxxl_6": "style-module__pZsena__size_xxxl_6",
  "size_xxxl_7": "style-module__pZsena__size_xxxl_7",
  "size_xxxl_8": "style-module__pZsena__size_xxxl_8",
  "size_xxxl_9": "style-module__pZsena__size_xxxl_9",
  "size_xxxl_even": "style-module__pZsena__size_xxxl_even",
  "size_xxxl_grow": "style-module__pZsena__size_xxxl_grow",
  "size_xxxl_shrink": "style-module__pZsena__size_xxxl_shrink",
  "size_xxxs_1": "style-module__pZsena__size_xxxs_1",
  "size_xxxs_10": "style-module__pZsena__size_xxxs_10",
  "size_xxxs_11": "style-module__pZsena__size_xxxs_11",
  "size_xxxs_12": "style-module__pZsena__size_xxxs_12",
  "size_xxxs_2": "style-module__pZsena__size_xxxs_2",
  "size_xxxs_3": "style-module__pZsena__size_xxxs_3",
  "size_xxxs_4": "style-module__pZsena__size_xxxs_4",
  "size_xxxs_5": "style-module__pZsena__size_xxxs_5",
  "size_xxxs_6": "style-module__pZsena__size_xxxs_6",
  "size_xxxs_7": "style-module__pZsena__size_xxxs_7",
  "size_xxxs_8": "style-module__pZsena__size_xxxs_8",
  "size_xxxs_9": "style-module__pZsena__size_xxxs_9",
  "size_xxxs_even": "style-module__pZsena__size_xxxs_even",
  "size_xxxs_grow": "style-module__pZsena__size_xxxs_grow",
  "size_xxxs_shrink": "style-module__pZsena__size_xxxs_shrink",
});
}}),
"[project]/app/components/grid/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "Grid": (()=>Grid),
    "Item": (()=>Item)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/grid/style.module.css [app-client] (css module)");
;
;
;
function Grid({ id = '', className = '', align = 'left', rowGap = 'm', colGap = 'm', size = 'even', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_grid,
        className
    ];
    /* Column alignment
	------------------------- */ // String value
    if (typeof align === 'string') {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['align_' + align]);
    } else if (typeof align === 'object') {
        // Populate any missing breakpoints
        align = populateMissingBreakpoints(align);
        // Loop through the object
        Object.entries(align).forEach((item)=>{
            // Get the breakpoint
            const breakpoint = item[0];
            // Get the value
            const value = item[1];
            // Convert the value to a string for use in the class name
            let stringValue = 'false';
            if (value) {
                stringValue = 'true';
            }
            // Add this as a class name
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['align_' + breakpoint + '_' + stringValue]);
        });
    }
    /* Row gap
	------------------------- */ // String value
    if (typeof rowGap === 'string') {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['rowGap_' + rowGap]);
    } else if (typeof rowGap === 'object') {
        // Populate any missing breakpoints
        rowGap = populateMissingBreakpoints(rowGap);
        // Loop through the object
        Object.entries(rowGap).forEach((item)=>{
            // Get the breakpoint
            const breakpoint = item[0];
            // Get the value
            const value = item[1];
            // Add this as a class name
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['rowGap_' + breakpoint + '_' + value]);
        });
    }
    /* Column gap
	------------------------- */ // String value
    if (typeof colGap === 'string') {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['colGap_' + colGap]);
    } else if (typeof colGap === 'object') {
        // Populate any missing breakpoints
        colGap = populateMissingBreakpoints(colGap);
        // Loop through the object
        Object.entries(colGap).forEach((item)=>{
            // Get the breakpoint
            const breakpoint = item[0];
            // Get the value
            const value = item[1];
            // Add this as a class name
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['colGap_' + breakpoint + '_' + value]);
        });
    }
    /* Output the component
	-------------------------------------------------- */ // Get the children
    let mappedChildren = children;
    // If we have a size prop on the parent Grid component
    if (size) {
        // Loop through the children
        mappedChildren = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>{
            // Clone the child element
            let clonedChild = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child);
            // If it does not have a size prop
            if (typeof clonedChild.props.size === 'undefined' || !clonedChild.props.size) {
                // Add the size prop from the parent Grid component (we must re-clone the child element to do this)
                clonedChild = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                    size: size
                });
            }
            // Return the cloned child element
            return clonedChild;
        });
    }
    // Return the component
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: mappedChildren
    }, void 0, false, {
        fileName: "[project]/app/components/grid/index.tsx",
        lineNumber: 213,
        columnNumber: 3
    }, this);
}
_c = Grid;
function Item({ id = '', className = '', size = 'even', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_item,
        className
    ];
    /* Size
	------------------------- */ // String or number value
    if (typeof size === 'string' || typeof size === 'number') {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['size_' + size]);
    } else if (typeof size === 'object') {
        // Populate any missing breakpoints
        size = populateMissingBreakpoints(size);
        // Loop through the object
        Object.entries(size).forEach((item)=>{
            // Get the breakpoint
            const breakpoint = item[0];
            // Get the value
            const value = item[1];
            // Add this as a class name
            classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$grid$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['size_' + breakpoint + '_' + value]);
        });
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/grid/index.tsx",
        lineNumber: 301,
        columnNumber: 3
    }, this);
}
_c1 = Item;
/* Helper function to populate any missing breakpoints for a "responsive size object"
---------------------------------------------------------------------------------------------------- */ function populateMissingBreakpoints(obj) {
    // Populate XXXL
    if (typeof obj['xxxl'] === 'undefined') {
        if (typeof obj['xxxl'] !== 'undefined') {
            obj['xxxl'] = obj['xxl'];
        } else if (typeof obj['xl'] !== 'undefined') {
            obj['xxxl'] = obj['xl'];
        } else if (typeof obj['l'] !== 'undefined') {
            obj['xxxl'] = obj['l'];
        } else if (typeof obj['m'] !== 'undefined') {
            obj['xxxl'] = obj['m'];
        } else if (typeof obj['s'] !== 'undefined') {
            obj['xxxl'] = obj['s'];
        } else if (typeof obj['xs'] !== 'undefined') {
            obj['xxxl'] = obj['xs'];
        } else if (typeof obj['xxs'] !== 'undefined') {
            obj['xxxl'] = obj['xxs'];
        } else if (typeof obj['xxxs'] !== 'undefined') {
            obj['xxxl'] = obj['xxxs'];
        }
    }
    // Populate XXL
    if (typeof obj['xxl'] === 'undefined') {
        obj['xxl'] = obj['xxxl'];
    }
    // Populate XL
    if (typeof obj['xl'] === 'undefined') {
        obj['xl'] = obj['xxl'];
    }
    // Populate L
    if (typeof obj['l'] === 'undefined') {
        obj['l'] = obj['xl'];
    }
    // Populate M
    if (typeof obj['m'] === 'undefined') {
        obj['m'] = obj['l'];
    }
    // Populate S
    if (typeof obj['s'] === 'undefined') {
        obj['s'] = obj['m'];
    }
    // Populate XS
    if (typeof obj['xs'] === 'undefined') {
        obj['xs'] = obj['s'];
    }
    // Populate XXS
    if (typeof obj['xxs'] === 'undefined') {
        obj['xxs'] = obj['xs'];
    }
    // Populate XXXS
    if (typeof obj['xxxs'] === 'undefined') {
        obj['xxxs'] = obj['xxs'];
    }
    return obj;
}
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Grid");
__turbopack_refresh__.register(_c1, "Item");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/modal/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "buttons": "style-module__cED_-a__buttons",
  "closeButton": "style-module__cED_-a__closeButton",
  "component_modal": "style-module__cED_-a__component_modal",
  "modal": "style-module__cED_-a__modal",
  "overlay": "style-module__cED_-a__overlay",
});
}}),
"[project]/app/components/modal/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Modal

	Description:
		Displays a Modal.

		React must set the state in the parent where this modal is used and pass it down as props.

		Example usage:
			export default function examplePage() {
				// Create a state variable to manage the modal open state
				const [modalOpenState, setModalOpenState] = React.useState(false);

				return (
					// A button that opens the modal
					<button
						onClick={() => {
							setModalOpenState(true);
						}}
					>
						Click to open the modal
					</button>

					// Include the modal and pass down the state value / state setting function
					<Modal
						openState={modalOpenState}
						setOpenState={setModalOpenState}
						...
					>
						The modal content goes here
					</Modal>
				);
			};

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		openState
			Type: boolean
			Values: true / false
			Default: false
			Description: Is the modal open? Provide this as a React State variable from the parent where it's used.

		setOpenState
			Type: function
			Values: A React State setting function
			Default: false
			Description: The function which changes the open state. Provide this as a React State setting function from the parent where it's used.

		buttons
			Type: Array
			Values: An array of objects which define the buttons.
			Default: ''
			Description: Setup the buttons in the modal with an array of objects. Example:
			[
				{
					// The button type (primary, secondary, outline)
					type: 'primary',

					// The button text
					label: 'Submit',

					// The button href
					href: '#',

					// Should this button close the modal?
					closeModal: true
				},
				...
			]

		...rest
			All other props are passed to <div>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modal$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/modal/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/button/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Modal({ id = '', className = '', openState = false, setOpenState = ()=>{}, buttons = [], children, ...rest }) {
    _s();
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modal$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_modal,
        className
    ];
    /* Close the modal
	-------------------------------------------------- */ function closeModal(event) {
        // If the modal is open
        if (openState) {
            // Disable the button href default action for buttons or links that close the modal
            event?.preventDefault();
            event?.stopPropagation();
            // Close the modal
            setOpenState(false);
        }
    }
    /* Support escape keypress to close the modal
	-------------------------------------------------- */ function handleKeyDown(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }
    /* On mount and unmount
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Modal.useEffect": ()=>{
            // Watch for window key presses
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Modal.useEffect": ()=>{
                    // Stop watching for window key presses
                    window.addEventListener('keydown', handleKeyDown);
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"]);
    /* Create the buttons
	-------------------------------------------------- */ const buttonsOutput = buttons.map((button, index)=>{
        // If this button closes the modal, add an onClick to close the modal
        let buttonOnClick = ()=>{};
        if (button.closeModal) {
            buttonOnClick = closeModal;
        }
        // Output the button
        return(// This "key" attribute only exists to satisfy the requirements of React (we don't actually use it)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: button.href,
            type: button.type,
            size: "m",
            onClick: buttonOnClick,
            children: button.label
        }, index, false, {
            fileName: "[project]/app/components/modal/index.tsx",
            lineNumber: 185,
            columnNumber: 4
        }, this));
    });
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-open": openState,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modal$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                onClick: closeModal
            }, void 0, false, {
                fileName: "[project]/app/components/modal/index.tsx",
                lineNumber: 195,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modal$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modal$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                        onClick: closeModal,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "cancel-01",
                            size: "s",
                            strokeWidth: 3,
                            type: "sharp"
                        }, void 0, false, {
                            fileName: "[project]/app/components/modal/index.tsx",
                            lineNumber: 199,
                            columnNumber: 65
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/modal/index.tsx",
                        lineNumber: 199,
                        columnNumber: 5
                    }, this),
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$modal$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                        children: buttonsOutput
                    }, void 0, false, {
                        fileName: "[project]/app/components/modal/index.tsx",
                        lineNumber: 201,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/modal/index.tsx",
                lineNumber: 198,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/modal/index.tsx",
        lineNumber: 193,
        columnNumber: 3
    }, this);
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_refresh__.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/notice/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "closeButton": "style-module__Yi54Ba__closeButton",
  "component_notice": "style-module__Yi54Ba__component_notice",
  "icon": "style-module__Yi54Ba__icon",
  "text": "style-module__Yi54Ba__text",
  "type_error": "style-module__Yi54Ba__type_error",
  "type_info": "style-module__Yi54Ba__type_info",
  "type_success": "style-module__Yi54Ba__type_success",
  "type_warning": "style-module__Yi54Ba__type_warning",
});
}}),
"[project]/app/components/notice/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Notice

	Description:
		Displays a Notice.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		type
			Type: string
			Values: 'info', 'success', 'warning', 'error'
			Default: 'info'
			Description: Define the notice style.

		...rest
			All other props are passed to <div>.
*/ /* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* Imports
---------------------------------------------------------------------------------------------------- */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$notice$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/notice/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Notice({ id = '', className = '', type = 'info', children, ...rest }) {
    _s();
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$notice$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_notice,
        className
    ];
    // Type
    if (type) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$notice$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['type_' + type]);
    }
    /* Hidden state
	-------------------------------------------------- */ const [hiddenState, sethiddenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    /* On click of the close button
	-------------------------------------------------- */ function handleClick() {
        sethiddenState(true);
    }
    /* Define the icon
	-------------------------------------------------- */ let iconName = 'information-circle';
    if (type === 'success') {
        iconName = 'checkmark-circle-02';
    } else if (type === 'warning') {
        iconName = 'alert-circle';
    } else if (type === 'error') {
        iconName = 'multiplication-sign-circle';
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        "data-hidden": hiddenState,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                name: iconName,
                size: "s",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$notice$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
            }, void 0, false, {
                fileName: "[project]/app/components/notice/index.tsx",
                lineNumber: 104,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$notice$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: children
            }, void 0, false, {
                fileName: "[project]/app/components/notice/index.tsx",
                lineNumber: 105,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$notice$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                onClick: handleClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    name: "multiplication-sign",
                    size: "s",
                    type: "sharp"
                }, void 0, false, {
                    fileName: "[project]/app/components/notice/index.tsx",
                    lineNumber: 107,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/notice/index.tsx",
                lineNumber: 106,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/notice/index.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, this);
}
_s(Notice, "DXlj+VWO4dZQHkNCzlWoENyEcFg=");
_c = Notice;
const __TURBOPACK__default__export__ = Notice;
var _c;
__turbopack_refresh__.register(_c, "Notice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/pagination/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "button": "style-module__jX6bgG__button",
  "buttons": "style-module__jX6bgG__buttons",
  "component_pagination": "style-module__jX6bgG__component_pagination",
  "ellipsisButton": "style-module__jX6bgG__ellipsisButton",
  "nextButton": "style-module__jX6bgG__nextButton",
  "pageButton": "style-module__jX6bgG__pageButton",
  "pageButtons": "style-module__jX6bgG__pageButtons",
  "prevButton": "style-module__jX6bgG__prevButton",
  "resultsText": "style-module__jX6bgG__resultsText",
  "totalPages": "style-module__jX6bgG__totalPages",
});
}}),
"[project]/app/components/pagination/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Pagination

	Description:
		Displays Pagination.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		resultsPerPage
			Type: number
			Values: Any number
			Default: 10
			Description: Set the number of results per page.

		totalResults
			Type: number
			Values: Any number
			Default: 100
			Description: Set the number of total results.

		currentPage
			Type: number
			Values: Any number
			Default: 1
			Description: Set the current page.

		changePageFunction
			Type: number
			Values: Function
			Default: () => {}
			Description: A function which is defined in the parent area that uses this Pagination component.
									 This function should take a single argument (with a type of number) for the page.
									 Example -
										 function changePageFromParent(page:number) { ... }

										 <Pagination changePageFunction={changePageFromParent}

		...rest
			All other props are passed to <div>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/pagination/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function Pagination({ id = '', className = '', resultsPerPage = 10, totalResults = 100, currentPage = 1, changePageFunction = ()=>{}, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Calculate the total pages
	-------------------------------------------------- */ const totalPages = Math.ceil(totalResults / resultsPerPage);
    /* Ensure the current page prop isn't incorrect
	-------------------------------------------------- */ if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    /* Create state
	-------------------------------------------------- */ // Previous button enabled
    let prevButtonEnabledStarting = true;
    if (currentPage === 1) {
        prevButtonEnabledStarting = false;
    }
    const [prevButtonEnabledState, setPrevButtonEnabledState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(prevButtonEnabledStarting);
    // Next button enabled
    let nextButtonEnabledStarting = true;
    if (currentPage === totalPages) {
        nextButtonEnabledStarting = false;
    }
    const [nextButtonEnabledState, setNextButtonEnabledState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(nextButtonEnabledStarting);
    // Current page
    const [currentPageState, setCurrentPageState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(currentPage);
    // Update the current page if the prop changes (sometimes the parent controls this)
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Pagination.useEffect": ()=>{
            setCurrentPageState(currentPage);
        }
    }["Pagination.useEffect"], [
        currentPage
    ]);
    /* Change the page
	-------------------------------------------------- */ function changePage(page) {
        // Call the passed in change page function (comes from the parent)
        changePageFunction(page);
        // Change the current page
        setCurrentPageState(page);
        // Is the previous button enabled?
        setPrevButtonEnabledState(page > 1);
        // Is the next button enabled?
        setNextButtonEnabledState(page < totalPages);
    }
    /* Go to the previous page
	-------------------------------------------------- */ function prevPage() {
        if (prevButtonEnabledState) {
            changePage(currentPageState - 1);
        }
    }
    /* Go to the next page
	-------------------------------------------------- */ function nextPage() {
        if (nextButtonEnabledState) {
            changePage(currentPageState + 1);
        }
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_pagination,
        className
    ];
    /* Output the page buttons / ellipsis buttons
	-------------------------------------------------- */ const pageButtons = [
        ...Array(totalPages)
    ].map((page, index)=>{
        /*
			So there's some pretty confusing logic going on below. Basically it aims to do this:

			In the below example there are 30 pages.

			Start state (first 7 pages):
				1 2 (3) 4 5 6 7 ... 30

			Middle state (pages 8 to 30):
				1 ... 18 19 (20) 21 22 ... 30

			End state (pages 24 to 30):
				1 ... 24 (25) 26 27 28 29 30

			Additional info:
				- A maximum of 9 buttons are shown at any time (not including the next and prev buttons).
				- Pages are shown normally if there's 9 pages or less in total (i.e. all the page buttons simply show with no ellipsis).
				- There is no "middle state" if not required (i.e. the "start state" and "end state" cater for all use cases).
		*/ /* Setup
		------------------------- */ // Get the current page in the loop
        const currentPageInLoop = index + 1;
        // Create a variable to output the button for this loop
        let buttonOutput = false;
        /* Ellipsis buttons
		------------------------- */ let showEllipsis = false;
        if (totalPages > 9) {
            // Start state
            if (currentPageState < 8 && currentPageInLoop === totalPages - 1) {
                showEllipsis = true;
            } else if (currentPageState >= 8 && currentPageState <= totalPages - 7 && (currentPageInLoop === 2 || currentPageInLoop === totalPages - 1)) {
                showEllipsis = true;
            } else if (currentPageState >= 8 && currentPageState > totalPages - 7 && currentPageInLoop === 2) {
                showEllipsis = true;
            }
        }
        if (showEllipsis) {
            buttonOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ellipsisButton}`,
                "data-current-page": currentPageState === currentPageInLoop,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "s",
                    children: "..."
                }, void 0, false, {
                    fileName: "[project]/app/components/pagination/index.tsx",
                    lineNumber: 232,
                    columnNumber: 6
                }, this)
            }, index, false, {
                fileName: "[project]/app/components/pagination/index.tsx",
                lineNumber: 226,
                columnNumber: 5
            }, this);
        } else {
            let showPageButton = false;
            if (totalPages <= 9) {
                showPageButton = true;
            } else {
                // Start state
                if (currentPageState < 8 && (currentPageInLoop <= 7 || currentPageInLoop === totalPages)) {
                    showPageButton = true;
                } else if (currentPageState >= 8 && currentPageState <= totalPages - 7 && (currentPageInLoop === 1 || currentPageInLoop === totalPages || currentPageInLoop > currentPageState - 3 && currentPageInLoop < currentPageState + 3)) {
                    showPageButton = true;
                } else if (currentPageState >= 8 && currentPageState > totalPages - 7 && (currentPageInLoop >= totalPages - 6 || currentPageInLoop === 1)) {
                    showPageButton = true;
                }
            }
            if (showPageButton) {
                buttonOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageButton}`,
                    "data-current-page": currentPageState === currentPageInLoop,
                    onClick: ()=>{
                        changePage(currentPageInLoop);
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "s",
                        children: currentPageInLoop
                    }, void 0, false, {
                        fileName: "[project]/app/components/pagination/index.tsx",
                        lineNumber: 274,
                        columnNumber: 7
                    }, this)
                }, index, false, {
                    fileName: "[project]/app/components/pagination/index.tsx",
                    lineNumber: 265,
                    columnNumber: 6
                }, this);
            }
        }
        /* Output the button
		------------------------- */ return buttonOutput;
    });
    /* Setup the results text
	------------------------------------------------- */ // Results from
    let resultsTextStart = currentPageState * resultsPerPage - (resultsPerPage - 1);
    if (resultsTextStart < 0) {
        resultsTextStart = 0;
    }
    // Results to
    let resultsTextEnd = currentPageState * resultsPerPage;
    if (resultsTextEnd > totalResults) {
        resultsTextEnd = totalResults;
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prevButton}`,
                        "data-enabled": prevButtonEnabledState,
                        onClick: prevPage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "arrow-left-01",
                            size: "xxs",
                            type: "sharp"
                        }, void 0, false, {
                            fileName: "[project]/app/components/pagination/index.tsx",
                            lineNumber: 308,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/pagination/index.tsx",
                        lineNumber: 307,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageButtons,
                        children: pageButtons
                    }, void 0, false, {
                        fileName: "[project]/app/components/pagination/index.tsx",
                        lineNumber: 311,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nextButton}`,
                        "data-enabled": nextButtonEnabledState,
                        onClick: nextPage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            name: "arrow-right-01",
                            size: "xxs",
                            type: "sharp"
                        }, void 0, false, {
                            fileName: "[project]/app/components/pagination/index.tsx",
                            lineNumber: 316,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/pagination/index.tsx",
                        lineNumber: 315,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/pagination/index.tsx",
                lineNumber: 306,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultsText,
                size: "s",
                children: [
                    "Showing results ",
                    resultsTextStart,
                    " to ",
                    resultsTextEnd,
                    " of ",
                    totalResults
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/pagination/index.tsx",
                lineNumber: 320,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/pagination/index.tsx",
        lineNumber: 305,
        columnNumber: 3
    }, this);
}
_s(Pagination, "Eu+1e2rqI3zoRtUMFiUVbm12Mjk=");
_c = Pagination;
const __TURBOPACK__default__export__ = Pagination;
var _c;
__turbopack_refresh__.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/pill/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_pill": "style-module__OqQ9sG__component_pill",
  "size_l": "style-module__OqQ9sG__size_l",
  "size_m": "style-module__OqQ9sG__size_m",
  "size_s": "style-module__OqQ9sG__size_s",
  "size_xs": "style-module__OqQ9sG__size_xs",
  "type_error": "style-module__OqQ9sG__type_error",
  "type_info": "style-module__OqQ9sG__type_info",
  "type_primary": "style-module__OqQ9sG__type_primary",
  "type_secondary": "style-module__OqQ9sG__type_secondary",
  "type_success": "style-module__OqQ9sG__type_success",
  "type_warning": "style-module__OqQ9sG__type_warning",
});
}}),
"[project]/app/components/pill/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Pill

	Description:
		Displays a Pill.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		type
			Type: string
			Values: 'primary', 'secondary', 'info', 'success', 'warning', 'error'
			Default: 'primary'
			Description: Define the pill style.

		size
			Type: string
			Values: 'l', 'm', 's', 'xs'
			Default: 'm'
			Description: Define the pill size.

		...rest
			All other props are passed to <div>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pill$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/pill/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
;
;
;
function Pill({ id = '', className = '', type = 'primary', size = 'm', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pill$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_pill,
        className
    ];
    // Type
    if (type) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pill$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['type_' + type]);
    }
    // Size
    if (size) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pill$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['size_' + size]);
    }
    /* Setup the text size (this exists as the mapping may change)
	-------------------------------------------------- */ let textSize;
    if (size === 'l') {
        textSize = 'l';
    } else if (size === 'm') {
        textSize = 'm';
    } else if (size === 's') {
        textSize = 's';
    } else {
        textSize = 'xs';
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: textSize,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/pill/index.tsx",
            lineNumber: 101,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/pill/index.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, this);
}
_c = Pill;
const __TURBOPACK__default__export__ = Pill;
var _c;
__turbopack_refresh__.register(_c, "Pill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/scrollbar/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_scrollbar": "style-module__-75tiq__component_scrollbar",
});
}}),
"[project]/app/components/scrollbar/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Scrollbar

	Description:
		Displays a styled Scrollbar.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		...rest
			All other props are passed to <div>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$scrollbar$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/scrollbar/style.module.css [app-client] (css module)");
;
;
function Scrollbar({ id = '', className = '', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$scrollbar$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_scrollbar,
        className
    ];
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/scrollbar/index.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this);
}
_c = Scrollbar;
const __TURBOPACK__default__export__ = Scrollbar;
var _c;
__turbopack_refresh__.register(_c, "Scrollbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/table/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "cell": "style-module__bH12ya__cell",
  "cells": "style-module__bH12ya__cells",
  "colTitle": "style-module__bH12ya__colTitle",
  "component_table": "style-module__bH12ya__component_table",
  "divider": "style-module__bH12ya__divider",
  "expandCollapseButton": "style-module__bH12ya__expandCollapseButton",
  "group": "style-module__bH12ya__group",
  "groups": "style-module__bH12ya__groups",
  "headerGroups": "style-module__bH12ya__headerGroups",
  "headerGroupsContainer": "style-module__bH12ya__headerGroupsContainer",
  "icon": "style-module__bH12ya__icon",
  "listCard": "style-module__bH12ya__listCard",
  "listView": "style-module__bH12ya__listView",
  "missingData": "style-module__bH12ya__missingData",
  "pill": "style-module__bH12ya__pill",
  "pillContainer": "style-module__bH12ya__pillContainer",
  "resultsText": "style-module__bH12ya__resultsText",
  "scrollbar": "style-module__bH12ya__scrollbar",
  "sortBy": "style-module__bH12ya__sortBy",
  "table": "style-module__bH12ya__table",
  "tableView": "style-module__bH12ya__tableView",
  "title": "style-module__bH12ya__title",
  "toggle": "style-module__bH12ya__toggle",
  "top": "style-module__bH12ya__top",
  "value": "style-module__bH12ya__value",
});
}}),
"[project]/app/components/table/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Table

	Description:
		Displays a Table (with the option to swap to "List View").

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		title
			Type: string
			Values: Any string
			Default: ''
			Description: Add a title above the table.

		defaultView
			Type: string
			Values: 'table', 'list'
			Default: 'table'
			Description: Define which view to start in (table or list view).

		headers
			Type: Array
			Values: An array of objects which define the headers.
			Default: ''
			Description: Setup the headers in the table.

			Please note that headers can be two levels deep.
			If you don't wish to use multi-level headers, then simply leave the first label as an empty string.

			Example:
				headers = [
					// The first header group
					{
						// The label of the first header group (this can be a string or JSX, leave as an empty string to not use header groups)
						'label': 'First header group',

						// The columns within the header group
						'columns': [
							// The first column
							{
								// The label of the first column (this can be a string or JSX)
								'label': 'Column 1',

								// The default sorting order of the first column
								// This can be: 'desc', 'asc', or ''
								// Leave this as an empty string if you don't want to sort by this column
								// Remember - you can only sort by one column for the whole table!
								'sort': 'desc'
							},
							...
						]
					},
					...
				]

		data
			Type: Array
			Values: An array of arrays, with an object in each which defines the data.
			Default: ''
			Description: Setup the data in the table.

			Example:
				data = [
					[
						// Text
						{
							'value': 'Some text',
							'type': 'text'
						},

						// Truncate text
						{
							'value': 'Some very long text goes here which will be truncated if it's too long and get a read more link',
							'type': 'truncateText'
						},

						// Missing data
						{
							'value': '',
							'type': 'missingData'
						},

						// Pill info variation
						{
							'value': 'Pill text',
							'type': 'pill-info'
						},

						// Pill success variation
						{
							'value': 'Pill text',
							'type': 'pill-success'
						},

						// Pill warning variation
						{
							'value': 'Pill text',
							'type': 'pill-warning'
						},

						// Pill error variation
						{
							'value': 'Pill text',
							'type': 'pill-error'
						},

						// Use custom JSX
						{
							'value': <>Any JSX elements you like</>,
							'type': 'jsx'
						}
						...
					],
					...
				]

		...rest
			All other props are passed to <div>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/table/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$toggle$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/forms/toggle/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$scrollbar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/scrollbar/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/icon/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pill$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/pill/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/pagination/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/forms/select/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$expandCollapseButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/expandCollapseButton/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
// This must be done with a require in order for us to use the lib in other projects (https://github.com/vercel/next.js/discussions/69244)
// Previously this line was simply "import { renderToStaticMarkup } from 'react-dom/server';"
const ReactDOMServer = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react-dom/server.browser.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function Table({ id = '', className = '', title = '', defaultView = 'table', headers = [], data = [], ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Setup headers as state
	-------------------------------------------------- */ const [headersState, setHeadersState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(headers);
    /* Setup data as state
	-------------------------------------------------- */ /* Define a string version of each cell's value (We use this for sorting later on as it turns JSX into plain text)
	------------------------- */ const formattedData = data.map((row)=>{
        return row.map((cell)=>{
            if (cell.type === 'missingData') {
                cell.value = 'Missing data';
            }
            return {
                'text': JSXTextContent(cell.value),
                'value': cell.value,
                'type': cell.type
            };
        });
    });
    /* Do the initial sorting
	------------------------- */ // Loop through the header groups
    headers.forEach((headerGroup, headerGroupIndex)=>{
        // Loop through the columns within this header
        headers[headerGroupIndex]['columns'].forEach((headerColumn, headerColumnIndex)=>{
            // If we're sorting by this column
            if (headerColumn.sort !== '') {
                // Work out which column we're sorting by
                let orderColIndex = 0;
                headers.forEach((group, groupIndex)=>{
                    if (groupIndex < headerGroupIndex) {
                        orderColIndex += group['columns'].length;
                    }
                });
                orderColIndex += headerColumnIndex;
                // Sort the data DESC
                const sortedData = formattedData.sort((a, b)=>{
                    return a[orderColIndex].text.localeCompare(b[orderColIndex].text);
                });
                // If we're sorting ASC then reverse the data
                if (headerColumn.sort === 'asc') {
                    sortedData.reverse();
                }
                // Update the data
                data = sortedData;
            }
        });
    });
    /* Define the data state
	------------------------- */ const [dataState, setDataState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(formattedData);
    /* Extract the text content from JSX
	-------------------------------------------------- */ function JSXTextContent(content) {
        // Convert the JSX to static HTML
        let textContent = ReactDOMServer.renderToStaticMarkup(content);
        // Remove all HTML tags
        textContent = textContent.replace(/(<([^>]+)>)/gi, "");
        // Return the text content
        return textContent;
    }
    /* Sort by
	-------------------------------------------------- */ // We use this state variable to force a re-render (react doesn't automatically re-render when an object is changed because of shallow equality comparisons)
    const [renderState, setRenderState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    function sortBy(headerGroupIndex, headerColumnIndex, targetSort) {
        /* Change the header state
		------------------------- */ // Save the header state to a temporary variable
        const newHeaders = headersState;
        // Remove all existing sorting
        newHeaders.forEach((group, groupIndex)=>{
            group.columns.forEach((column, columnIndex)=>{
                newHeaders[groupIndex]['columns'][columnIndex].sort = '';
            });
        });
        // Make the clicked header sorted by the target sorting
        newHeaders[headerGroupIndex]['columns'][headerColumnIndex].sort = targetSort;
        // Update the header state
        setHeadersState(newHeaders);
        /* Change the data state
		------------------------- */ // Work out which column we're sorting by
        let orderColIndex = 0;
        newHeaders.forEach((group, groupIndex)=>{
            if (groupIndex < headerGroupIndex) {
                orderColIndex += group['columns'].length;
            }
        });
        orderColIndex += headerColumnIndex;
        // Sort the data DESC
        const sortedData = dataState.sort((a, b)=>{
            return a[orderColIndex].text.localeCompare(b[orderColIndex].text);
        });
        // If we're sorting ASC then reverse the data
        if (targetSort === 'asc') {
            sortedData.reverse();
        }
        // Update the data state to the sorted data
        setDataState(sortedData);
        /* Force a re-render (react doesn't automatically re-render when an object is changed because of shallow equality comparisons)
		------------------------- */ setRenderState(!renderState);
    }
    /* Generate the JSX for a cell's value (used in both "table view" and "list view")
	-------------------------------------------------- */ function generateCellValueJSX(cell) {
        // Text variation
        if (cell.type === 'text') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                children: cell.value
            }, void 0, false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 328,
                columnNumber: 11
            }, this);
        }
        // Truncate text variation
        if (cell.type === 'truncateText') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                truncate: 70,
                truncateCallback: ()=>{
                    // If we're in "list view"
                    if (viewState === 'list') {
                        // Force a re-render when truncated text is expanded or collapsed
                        setRenderState(!renderState);
                    }
                },
                children: cell.value
            }, void 0, false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 334,
                columnNumber: 5
            }, this);
        } else if (cell.type === 'missingData') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                children: "Missing data"
            }, void 0, false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 352,
                columnNumber: 11
            }, this);
        } else if (cell.type === 'pill-info') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pill$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "s",
                    type: "info",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                    children: cell.value
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 357,
                    columnNumber: 49
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 357,
                columnNumber: 11
            }, this);
        } else if (cell.type === 'pill-success') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pill$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "s",
                    type: "success",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                    children: cell.value
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 362,
                    columnNumber: 49
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 362,
                columnNumber: 11
            }, this);
        } else if (cell.type === 'pill-warning') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pill$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "s",
                    type: "warning",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                    children: cell.value
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 367,
                    columnNumber: 49
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 367,
                columnNumber: 11
            }, this);
        } else if (cell.type === 'pill-error') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pill$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "s",
                    type: "error",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                    children: cell.value
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 372,
                    columnNumber: 49
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 372,
                columnNumber: 11
            }, this);
        } else if (cell.type === 'jsx') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: cell.value
            }, void 0, false);
        }
    }
    /* Swap to list view
	-------------------------------------------------- */ const [viewState, setViewState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(defaultView);
    function swapView(event) {
        if (event.target.checked) {
            setViewState('list');
            // Update the group sizing
            hideOverflowingCardGroups();
        } else {
            setViewState('table');
        }
    }
    /* Table view
	---------------------------------------------------------------------------------------------------- */ /* Build the <table> class list
	-------------------------------------------------- */ const tableClasses = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table
    ];
    /* Header groups
	-------------------------------------------------- */ // Create a variable to hold the output of the header groups
    let headerGroupsOutput;
    // If we're using header groups (check that the first header has a label)
    if (typeof headersState[0] !== 'undefined' && typeof headersState[0].label !== 'undefined' && headersState[0].label !== '') {
        // Add the header groups class to the <table> element
        tableClasses.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerGroupsContainer);
        // Loop through and create the header groups
        const headerGroupsOutputInner = headersState.map((headerGroup, headerGroupIndex)=>{
            const headerGroupOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                colSpan: headerGroup.columns.length,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "s",
                    inheritWeight: true,
                    children: headerGroup.label
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 420,
                    columnNumber: 6
                }, this)
            }, headerGroupIndex + '_headerGroup_th', false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 419,
                columnNumber: 5
            }, this);
            // If it's not the last header group, add a divider
            let dividerOutput;
            if (headerGroupIndex !== headersState.length - 1) {
                dividerOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                }, headerGroupIndex + '_headerGroup_divider', false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 427,
                    columnNumber: 21
                }, this);
            }
            // Return the header group
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    headerGroupOutput,
                    dividerOutput
                ]
            }, headerGroupIndex + '_headerGroup', true, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 432,
                columnNumber: 5
            }, this);
        });
        // Output the header groups
        headerGroupsOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerGroups,
            children: headerGroupsOutputInner
        }, void 0, false, {
            fileName: "[project]/app/components/table/index.tsx",
            lineNumber: 441,
            columnNumber: 4
        }, this);
    }
    /* Header columns
	-------------------------------------------------- */ // Loop through the header groups
    const headerColumnsOutputInner = headersState.map((headerGroup, headerGroupIndex)=>{
        // Create a variable to output the header columns within this header group
        const headerColumnsWithinHeaderGroup = headerGroup.columns.map((headerColumn, headerColumnIndex)=>{
            // Return the header column
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                "data-sort": headerColumn.sort,
                onClick: ()=>{
                    // Setup the target sort order
                    let targetSortOrder = 'asc';
                    if (headerColumn.sort === '' || headerColumn.sort === 'asc') {
                        targetSortOrder = 'desc';
                    }
                    // Call the sort by function
                    sortBy(headerGroupIndex, headerColumnIndex, targetSortOrder);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "s",
                        inheritWeight: true,
                        children: headerColumn.label
                    }, void 0, false, {
                        fileName: "[project]/app/components/table/index.tsx",
                        lineNumber: 472,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$icon$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        name: "arrow-down-01",
                        size: "xs",
                        type: "sharp",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
                    }, void 0, false, {
                        fileName: "[project]/app/components/table/index.tsx",
                        lineNumber: 473,
                        columnNumber: 6
                    }, this)
                ]
            }, headerColumnIndex + '_headerColumn_th', true, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 456,
                columnNumber: 5
            }, this);
        });
        // If it's not the last header group, add a divider
        let dividerOutput;
        if (headerGroupIndex !== headersState.length - 1) {
            dividerOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
            }, headerGroupIndex + '_headerGroup_divider', false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 481,
                columnNumber: 20
            }, this);
        }
        // Return the header columns
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: [
                headerColumnsWithinHeaderGroup,
                dividerOutput
            ]
        }, headerGroupIndex + '_headerColumns', true, {
            fileName: "[project]/app/components/table/index.tsx",
            lineNumber: 486,
            columnNumber: 4
        }, this);
    });
    // Output the header columns
    const headerColumnsOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        children: headerColumnsOutputInner
    }, void 0, false, {
        fileName: "[project]/app/components/table/index.tsx",
        lineNumber: 495,
        columnNumber: 3
    }, this);
    /* Rows
	-------------------------------------------------- */ // Loop through the data and output the rows
    const rowsOutput = dataState.map((row, rowIndex)=>{
        /* Work out where we need dividers and which column to sort by - if any (both of these things are used when looping through the cells below)
		------------------------- */ const dividerPlacements = [];
        let columnSortBy_index = 0;
        let columnSortBy_type = '';
        // Loop through the header groups
        let colCount = 0;
        headersState.forEach((headerGroup)=>{
            // Loop through the columns and find out which one we're sorting by
            let colsInHeaderGroup = 0;
            headerGroup.columns.forEach((column)=>{
                if (column.sort !== '') {
                    columnSortBy_index = colsInHeaderGroup + colCount;
                    columnSortBy_type = column.sort;
                }
                colsInHeaderGroup++;
            });
            // Work out how many columns we've looped through
            colCount += colsInHeaderGroup;
            // Add this number to the array of dividerPlacements
            dividerPlacements.push(colCount);
        });
        /* Loop through the cells within this row
		------------------------- */ const rowOutput = row.map((cell, cellIndex)=>{
            /* Create the dividers
			------------------------- */ let dividerOutput;
            // Loop through the pre-calculated divider placements
            dividerPlacements.forEach((dividerPlacement)=>{
                // If we're on a divider placement (check the loop index)
                if (dividerPlacement === cellIndex) {
                    // Output a divider
                    dividerOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                    }, void 0, false, {
                        fileName: "[project]/app/components/table/index.tsx",
                        lineNumber: 545,
                        columnNumber: 22
                    }, this);
                }
            });
            /* Work out the sort attribute
			------------------------- */ let sortAttribute = '';
            if (cellIndex === columnSortBy_index) {
                sortAttribute = columnSortBy_type;
            }
            /* Create the cell content
			------------------------- */ // Generate the cell value JSX
            const cellValue = generateCellValueJSX(cell);
            // Generate the cell classes
            const cellClasses = [
                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cell
            ];
            // Add a missing data class if required
            if (cell.type === 'missingData') {
                cellClasses.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].missingData);
            }
            // Create the cell output
            const cellOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: cellClasses.join(' '),
                "data-sort": sortAttribute,
                children: cellValue
            }, void 0, false, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 573,
                columnNumber: 5
            }, this);
            /* Return the cell
			------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    dividerOutput,
                    cellOutput
                ]
            }, cellIndex, true, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 582,
                columnNumber: 5
            }, this);
        });
        /* Return the row
		------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: rowOutput
        }, rowIndex, false, {
            fileName: "[project]/app/components/table/index.tsx",
            lineNumber: 593,
            columnNumber: 4
        }, this);
    });
    /* List view
	--------------------------------------------------------------------------------------------------- */ /* Change page (list view)
	-------------------------------------------------- */ const [pageState, setPageState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(1);
    function changePage(page) {
        // Update the page state
        setPageState(page);
        // Scroll to the top of the cards area (plus 16 px for some visual padding at the top of the viewport)
        const listViewScrollTop = listViewRef?.current?.offsetTop;
        if (listViewScrollTop) {
            window.scrollTo(window.scrollX, listViewScrollTop - 16);
        }
    }
    /* Create a ref to target the list view
	-------------------------------------------------- */ const listViewRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* Generate the list cards
	-------------------------------------------------- */ // Get the data for the current page only
    const pageData = dataState.slice(pageState * 5 - 5, pageState * 5);
    // For each row in the current page's data
    const listViewCardsOutput = pageData.map((row, rowIndex)=>{
        // Setup a variable to keep track of the current column number
        let currentColIndex = 0;
        // For each header group
        const groupOutput = headersState.map((headerGroup, headerGroupIndex)=>{
            // Output a header group title if there is one
            let titleOutput;
            if (headerGroup.label) {
                titleOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].colTitle,
                    "data-group-title": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: "s",
                        inheritWeight: true,
                        children: headerGroup.label
                    }, void 0, false, {
                        fileName: "[project]/app/components/table/index.tsx",
                        lineNumber: 638,
                        columnNumber: 76
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 638,
                    columnNumber: 19
                }, this);
            }
            // Return the header group
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].group,
                "data-group": true,
                children: [
                    titleOutput,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cells,
                        children: // For each header column
                        headerGroup.columns.map((headerColumn, headerColumnIndex)=>{
                            // Generate the cell value JSX
                            const cellValue = generateCellValueJSX(row[currentColIndex]);
                            // Generate the cell classes
                            const cellClasses = [
                                __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cell
                            ];
                            // Add a missing data class if required
                            if (row[currentColIndex].type === 'missingData') {
                                cellClasses.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].missingData);
                            }
                            // Create the cell JSX
                            const cellOutput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: cellClasses.join(' '),
                                "data-cell": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "s",
                                            inheritWeight: true,
                                            children: headerColumn.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/table/index.tsx",
                                            lineNumber: 663,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/table/index.tsx",
                                        lineNumber: 663,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].value,
                                        children: cellValue
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/table/index.tsx",
                                        lineNumber: 664,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, headerColumnIndex, true, {
                                fileName: "[project]/app/components/table/index.tsx",
                                lineNumber: 662,
                                columnNumber: 10
                            }, this);
                            // Increment the current header column index
                            currentColIndex++;
                            // Return the cell JSX
                            return cellOutput;
                        })
                    }, headerGroupIndex, false, {
                        fileName: "[project]/app/components/table/index.tsx",
                        lineNumber: 645,
                        columnNumber: 6
                    }, this)
                ]
            }, headerGroupIndex, true, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 643,
                columnNumber: 5
            }, this);
        });
        // Are we using double headers?
        let doubleHeaders = false;
        if (headersState.length > 1) {
            doubleHeaders = true;
        }
        // Return the list card
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listCard,
            "data-double-headers": doubleHeaders,
            "data-list-card": true,
            "data-overflowing": false,
            "data-expanded": false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].groups,
                    "data-groups": true,
                    children: groupOutput
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 689,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$expandCollapseButton$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expandCollapseButton,
                    size: "s",
                    expanded: false,
                    onClick: expandCollapseListCard
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 693,
                    columnNumber: 5
                }, this)
            ]
        }, rowIndex, true, {
            fileName: "[project]/app/components/table/index.tsx",
            lineNumber: 688,
            columnNumber: 4
        }, this);
    });
    /* Expand or collapse the list card
	-------------------------------------------------- */ function expandCollapseListCard(event) {
        if (event.target instanceof HTMLElement) {
            // Target the list card
            const listCard = event.target.closest('[data-list-card="true"]');
            // If the list card exists
            if (listCard instanceof HTMLElement) {
                // Swap to collapsed or expanded
                if (listCard.getAttribute('data-expanded') === 'true') {
                    listCard.setAttribute('data-expanded', 'false');
                } else {
                    listCard.setAttribute('data-expanded', 'true');
                }
            }
        }
    }
    /* On window resize
	-------------------------------------------------- */ const [resizeDebounceState, setResizeDebounceState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    function handleWindowResize() {
        if (!resizeDebounceState) {
            // Hide overflowing card groups
            hideOverflowingCardGroups();
            // Debounce by 1 animation frame
            setResizeDebounceState(true);
            window.requestAnimationFrame(()=>{
                setResizeDebounceState(false);
            });
        }
    }
    /* Hide overflowing card groups
	-------------------------------------------------- */ function hideOverflowingCardGroups() {
        // Get the list cards
        const listCards = listViewRef?.current?.querySelectorAll('[data-list-card="true"]');
        // If we found the list cards
        if (listCards) {
            // For each list card
            listCards.forEach((listCard)=>{
                // Is this a double header list card?
                const doubleHeaders = listCard.getAttribute('data-double-headers');
                // Create a variable to check if the list card is overflowing
                let overflowing = false;
                // Get the group containers
                const groupContainers = listCard.querySelectorAll('[data-groups="true"]');
                // If we found the group containers
                if (groupContainers) {
                    // For each group container
                    groupContainers.forEach((groupContainer)=>{
                        // Get the groups within this container
                        const groups = groupContainer.querySelectorAll('[data-group="true"]');
                        // If we found the groups
                        if (groups) {
                            // Setup a variable to save the max height (of the first row of groups)
                            let maxHeight = 0;
                            // For each group
                            groups.forEach((group)=>{
                                if (group instanceof HTMLElement) {
                                    /* Double headers
									------------------------- */ if (doubleHeaders === 'true') {
                                        // Get the group height
                                        const groupHeight = group.offsetHeight;
                                        // If the group height is greater than the current max height
                                        // AND its in the first row (before flex wrapping)
                                        if (groupHeight > maxHeight && group.offsetTop === 0) {
                                            // Set the max height to the group height
                                            maxHeight = groupHeight;
                                        }
                                        // If this item has wrapped, the list card is overflowing
                                        if (group.offsetTop > 0) {
                                            overflowing = true;
                                        }
                                    } else {
                                        // Get the cells within this group
                                        const cells = group.querySelectorAll('[data-cell="true"]');
                                        // If we found the cells
                                        if (cells) {
                                            // For each cell
                                            cells.forEach((cell)=>{
                                                if (cell instanceof HTMLElement) {
                                                    // Get the cell height
                                                    const cellHeight = cell.offsetHeight;
                                                    // If the cell height is greater than the current max height
                                                    // AND its in the first row (before flex wrapping)
                                                    if (cellHeight > maxHeight && cell.offsetTop === 0) {
                                                        // Set the max height to the group height
                                                        maxHeight = cellHeight;
                                                    }
                                                    // If this item has wrapped, the list card is overflowing
                                                    if (cell.offsetTop > 0) {
                                                        overflowing = true;
                                                    }
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                            // Set the height of the group container to be the max height (of the first row of groups)
                            if (groupContainer instanceof HTMLElement) {
                                groupContainer.style.height = maxHeight + 3 + 'px';
                            }
                        }
                    });
                }
                // Set the overflowing attribute on the list card
                if (overflowing) {
                    listCard.setAttribute('data-overflowing', 'true');
                } else {
                    listCard.setAttribute('data-overflowing', 'false');
                }
            });
        }
    }
    /* On mount and unmount
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Table.useEffect": ()=>{
            // Watch for window resize
            window.addEventListener('resize', handleWindowResize);
            // Hide overflowing cards groups
            hideOverflowingCardGroups();
            return ({
                "Table.useEffect": ()=>{
                    // Stop watching for window resize
                    window.removeEventListener('resize', handleWindowResize);
                }
            })["Table.useEffect"];
        }
    }["Table.useEffect"]);
    const sortByOptions = [];
    let sortByDefault = '';
    // For each header group
    headers.forEach((headerGroup, headerGroupIndex)=>{
        // For each header column
        headerGroup.columns.forEach((headerColumn, headerColumnIndex)=>{
            // Add the options for this header column
            sortByOptions.push({
                label: headerColumn.label + ' (descending)',
                value: headerGroupIndex + ',' + headerColumnIndex + ',desc'
            });
            sortByOptions.push({
                label: headerColumn.label + ' (ascending)',
                value: headerGroupIndex + ',' + headerColumnIndex + ',asc'
            });
            // Add the default selected option if we've got sorting defined
            if (headerColumn.sort === 'desc') {
                sortByDefault = headerGroupIndex + ',' + headerColumnIndex + ',desc';
            } else if (headerColumn.sort === 'asc') {
                sortByDefault = headerGroupIndex + ',' + headerColumnIndex + ',asc';
            }
        });
    });
    /* Sort by (on change of select / dropdown)
	-------------------------------------------------- */ function sortByListView(event) {
        // Split the value of the select field into an array on ',' character
        const changeValueData = event.target.value.split(',');
        // If we've got the correct data
        if (changeValueData.length === 3) {
            // Format the data
            const headerGroupIndex = parseInt(changeValueData[0]);
            const headerColumnIndex = parseInt(changeValueData[1]);
            const targetSort = changeValueData[2].toString();
            // Ensure the sorting is the correct type
            if (targetSort === 'asc' || targetSort === 'desc') {
                // Call the actual sort by function
                sortBy(headerGroupIndex, headerColumnIndex, targetSort);
                // Set the page state back to 1 (go back to the first page)
                setPageState(1);
            }
        }
    }
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the component class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_table,
        className
    ];
    /* Table view JSX
	-------------------------------------------------- */ let tableView;
    if (viewState === 'table') {
        tableView = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableView,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: tableClasses.join(' '),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$scrollbar$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollbar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: [
                                        headerGroupsOutput,
                                        headerColumnsOutput
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/table/index.tsx",
                                    lineNumber: 944,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: rowsOutput
                                }, void 0, false, {
                                    fileName: "[project]/app/components/table/index.tsx",
                                    lineNumber: 952,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/table/index.tsx",
                            lineNumber: 941,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/table/index.tsx",
                        lineNumber: 940,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 939,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultsText,
                    size: "s",
                    children: [
                        "Showing ",
                        dataState.length,
                        " results"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 959,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/table/index.tsx",
            lineNumber: 938,
            columnNumber: 4
        }, this);
    }
    /* List view JSX
	-------------------------------------------------- */ let listView;
    if (viewState === 'list') {
        listView = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listView,
            ref: listViewRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$select$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: "Sort by",
                    options: sortByOptions,
                    value: sortByDefault,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortBy,
                    onChange: sortByListView
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 971,
                    columnNumber: 5
                }, this),
                listViewCardsOutput,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$pagination$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    resultsPerPage: 5,
                    totalResults: dataState.length,
                    currentPage: pageState,
                    changePageFunction: changePage
                }, void 0, false, {
                    fileName: "[project]/app/components/table/index.tsx",
                    lineNumber: 981,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/table/index.tsx",
            lineNumber: 970,
            columnNumber: 4
        }, this);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "l",
                            inheritWeight: true,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/components/table/index.tsx",
                            lineNumber: 1002,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/table/index.tsx",
                        lineNumber: 1001,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$table$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$forms$2f$toggle$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Swap to list view",
                            onChange: swapView
                        }, void 0, false, {
                            fileName: "[project]/app/components/table/index.tsx",
                            lineNumber: 1006,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/table/index.tsx",
                        lineNumber: 1005,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/table/index.tsx",
                lineNumber: 1000,
                columnNumber: 4
            }, this),
            tableView,
            listView
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/table/index.tsx",
        lineNumber: 995,
        columnNumber: 3
    }, this);
}
_s(Table, "tezX/D0Zh36E7xMYnMnzfa0aQSQ=");
_c = Table;
const __TURBOPACK__default__export__ = Table;
var _c;
__turbopack_refresh__.register(_c, "Table");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/tooltip/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "component_tooltip": "style-module__omPRCq__component_tooltip",
});
}}),
"[project]/app/components/tooltip/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/*
	Name:
		Component Tooltip

	Description:
		Displays an Tooltip using Material UI.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		title
			Type: string
			Values: Any string
			Default: ''
			Description: Define the text of the tooltip.

		placement
			Type: string
			Values: 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'
			Default: 'top'
			Description: Define the placement of the tooltip.

		...rest
			All props are passed to the <MUITooltip> (https://mui.com/material-ui/api/tooltip/).
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$tooltip$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/tooltip/style.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$3$2e$1_$40$emotio_1b375f441a47b91217730fcbcbfa5a4b$2f$node_modules$2f40$mui$2f$material$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+material@6.3.1_@emotio_1b375f441a47b91217730fcbcbfa5a4b/node_modules/@mui/material/Tooltip/Tooltip.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
function Tooltip({ id = '', className = '', title = '', placement = 'top', children, ...rest }) {
    _s();
    /* Functionality
	---------------------------------------------------------------------------------------------------- */ /* Create state to control when the tooltip is open
	-------------------------------------------------- */ const [openState, setOpenState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    /* Create refs to target the tooltip container
	-------------------------------------------------- */ const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    /* Are we using a touch device?
	-------------------------------------------------- */ function isTouchDevice() {
        return "ontouchstart" in document.documentElement;
    }
    /* On mouse over of the tooltip container
	-------------------------------------------------- */ function handleMouseOver() {
        if (!isTouchDevice()) {
            setOpenState(true);
        }
    }
    /* On mouse out of the tooltip container
	-------------------------------------------------- */ function handleMouseOut() {
        if (!isTouchDevice()) {
            setOpenState(false);
        }
    }
    /* On click of the window, show or hide the tooltip
	-------------------------------------------------- */ function handleWindowClick(event) {
        // Did we click inside the container?
        let isInContainer = false;
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const { clientX, clientY } = event;
            isInContainer = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
        }
        // We clicked inside the container
        if (isInContainer) {
            // Open the tooltip
            setOpenState(true);
        } else {
            // Hide the tooltip
            setOpenState(false);
        }
    }
    /* On mount and unmount
	-------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Tooltip.useEffect": ()=>{
            // Watch for window clicks (touch devices only)
            if (isTouchDevice()) {
                window.addEventListener('click', handleWindowClick);
            }
            return ({
                "Tooltip.useEffect": ()=>{
                    // Stop watching for window clicks (touch devices only)
                    if (isTouchDevice()) {
                        window.removeEventListener('click', handleWindowClick);
                    }
                }
            })["Tooltip.useEffect"];
        }
    }["Tooltip.useEffect"]);
    /* Layout
	---------------------------------------------------------------------------------------------------- */ /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$tooltip$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_tooltip,
        className
    ];
    /* Wrap the title with our local typography
	-------------------------------------------------- */ const wrappedTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        size: "xs",
        children: title
    }, void 0, false, {
        fileName: "[project]/app/components/tooltip/index.tsx",
        lineNumber: 160,
        columnNumber: 23
    }, this);
    /* Ensure that children are wrapped inside a React Fragment
	-------------------------------------------------- */ if (typeof children === 'string') {
        children = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$material$40$6$2e$3$2e$1_$40$emotio_1b375f441a47b91217730fcbcbfa5a4b$2f$node_modules$2f40$mui$2f$material$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        arrow: true,
        title: wrappedTitle,
        open: openState,
        placement: placement,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            onMouseOver: handleMouseOver,
            onMouseOut: handleMouseOut,
            className: classes.join(' '),
            id: id,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/tooltip/index.tsx",
            lineNumber: 180,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/tooltip/index.tsx",
        lineNumber: 173,
        columnNumber: 3
    }, this);
}
_s(Tooltip, "XBpV1R1Wc5875LtQYPjQbwwAgks=");
_c = Tooltip;
const __TURBOPACK__default__export__ = Tooltip;
var _c;
__turbopack_refresh__.register(_c, "Tooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_75a61c._.js.map