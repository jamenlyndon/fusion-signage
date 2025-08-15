(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_123ed2._.js", {

"[project]/app/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "divider": "style-module__hlQ3RG__divider",
  "page_designSystem": "style-module__hlQ3RG__page_designSystem",
});
}}),
"[project]/app/components/typography/text/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
  "bold": "style-module__YUg0mW__bold",
  "component_text": "style-module__YUg0mW__component_text",
  "size_l": "style-module__YUg0mW__size_l",
  "size_m": "style-module__YUg0mW__size_m",
  "size_s": "style-module__YUg0mW__size_s",
});
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

		bold
			Type: boolean
			Values: true, false
			Default: false
			Description: Set the text to bold.

		useTag
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'
			Default: 'div'
			Description: Use a different HTML tag for this text element.

		...rest
			All other props are passed to <div> (or the tag you passed in with the "useTag" prop).
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/typography/text/style.module.css [app-client] (css module)");
;
;
function Text({ id = '', className = '', size = 'm', bold = false, useTag = 'div', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_text,
        className
    ];
    /* Size
	-------------------------------------------------- */ if (size) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['size_' + size]);
    }
    /* Bold
	-------------------------------------------------- */ if (bold) {
        classes.push(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]['bold']);
    }
    /* Use a custom HTML tag
	-------------------------------------------------- */ const TagName = useTag;
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagName, {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/typography/text/index.tsx",
        lineNumber: 98,
        columnNumber: 3
    }, this);
}
_c = Text;
const __TURBOPACK__default__export__ = Text;
var _c;
__turbopack_refresh__.register(_c, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/button/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
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

		...rest
			All other props are passed to <NextLink>.
*/ /* Imports
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/components/button/style.module.css [app-client] (css module)");
;
;
;
;
function Button({ id = '', className = '', href = '', target = '_self', children, // Support passing in event listeners from the parent
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
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: classes.join(' '),
        id: id,
        href: href,
        target: target,
        onClick: handleClick,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            size: "l",
            bold: true,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/components/button/index.tsx",
            lineNumber: 98,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/button/index.tsx",
        lineNumber: 97,
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
"[project]/app/components/forms/checkbox/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
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
(()=>{
    const e = new Error("Cannot find module '../../icon'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
"[project]/app/components/forms/input/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
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
(()=>{
    const e = new Error("Cannot find module '../../icon'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
"[project]/app/components/forms/timePicker/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
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
(()=>{
    const e = new Error("Cannot find module '../../icon'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
"[project]/app/components/typography/h1/style.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__({
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
function H1({ id = '', className = '', useTag = 'h1', children, ...rest }) {
    /* Build the class list
	-------------------------------------------------- */ const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].component_h1,
        className
    ];
    /* Use a custom HTML tag
	-------------------------------------------------- */ const TagName = useTag;
    /* Output the component
	-------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TagName, {
        className: classes.join(' '),
        id: id,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/typography/h1/index.tsx",
        lineNumber: 69,
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
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
/* Config
---------------------------------------------------------------------------------------------------- */ __turbopack_esm__({
    "default": (()=>DesignSystem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// Styles
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/app/style.module.css [app-client] (css module)");
// Button
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/button/index.tsx [app-client] (ecmascript)");
// Forms
// import Checkbox from './components/forms/checkbox';
// import Input from './components/forms/input';
// import TimePicker from './components/forms/timePicker';
// import Toggle from './components/forms/toggle';
// Typography
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/h1/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/typography/text/index.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function DesignSystem() {
    /* Layout
	---------------------------------------------------------------------------------------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page_designSystem,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                useTag: "h2",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Typography"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 41,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 43,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    "Heading 1 - the quick brown",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 44,
                        columnNumber: 35
                    }, this),
                    "fox jumps over the lazy dog"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 44,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 45,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 47,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "l",
                children: [
                    "Text large - the quick brown",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 48,
                        columnNumber: 47
                    }, this),
                    "fox jumps over the lazy dog"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 48,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 49,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 51,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "m",
                children: [
                    "Text medium - the quick brown",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 52,
                        columnNumber: 48
                    }, this),
                    "fox jumps over the lazy dog"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 52,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 53,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 55,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$text$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "s",
                children: [
                    "Text small - the quick brown",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 56,
                        columnNumber: 47
                    }, this),
                    "fox jumps over the lazy dog"
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 56,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 57,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                useTag: "h2",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Buttons"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 62,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$button$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "",
                children: "Primary"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 64,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$typography$2f$h1$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                useTag: "h2",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$style$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Forms"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 69,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this);
}
_c = DesignSystem;
var _c;
__turbopack_refresh__.register(_c, "DesignSystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_123ed2._.js.map