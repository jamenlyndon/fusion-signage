(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/91337_echarts_lib_component_343afb._.js", {

"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "TooltipMarkupStyleCreator": (()=>TooltipMarkupStyleCreator),
    "buildTooltipMarkup": (()=>buildTooltipMarkup),
    "createTooltipMarkup": (()=>createTooltipMarkup),
    "getPaddingFromTooltipModel": (()=>getPaddingFromTooltipModel),
    "retrieveVisualColorForTooltipMarker": (()=>retrieveVisualColorForTooltipMarker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataValueHelper.js [app-client] (ecmascript)");
;
;
;
;
var TOOLTIP_LINE_HEIGHT_CSS = 'line-height:1';
function getTooltipLineHeight(textStyle) {
    var lineHeight = textStyle.lineHeight;
    if (lineHeight == null) {
        return TOOLTIP_LINE_HEIGHT_CSS;
    } else {
        return "line-height:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(lineHeight + '') + "px";
    }
}
// TODO: more textStyle option
function getTooltipTextStyle(textStyle, renderMode) {
    var nameFontColor = textStyle.color || '#6e7079';
    var nameFontSize = textStyle.fontSize || 12;
    var nameFontWeight = textStyle.fontWeight || '400';
    var valueFontColor = textStyle.color || '#464646';
    var valueFontSize = textStyle.fontSize || 14;
    var valueFontWeight = textStyle.fontWeight || '900';
    if (renderMode === 'html') {
        // `textStyle` is probably from user input, should be encoded to reduce security risk.
        return {
            // eslint-disable-next-line max-len
            nameStyle: "font-size:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(nameFontSize + '') + "px;color:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(nameFontColor) + ";font-weight:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(nameFontWeight + ''),
            // eslint-disable-next-line max-len
            valueStyle: "font-size:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(valueFontSize + '') + "px;color:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(valueFontColor) + ";font-weight:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(valueFontWeight + '')
        };
    } else {
        return {
            nameStyle: {
                fontSize: nameFontSize,
                fill: nameFontColor,
                fontWeight: nameFontWeight
            },
            valueStyle: {
                fontSize: valueFontSize,
                fill: valueFontColor,
                fontWeight: valueFontWeight
            }
        };
    }
}
// See `TooltipMarkupLayoutIntent['innerGapLevel']`.
// (value from UI design)
var HTML_GAPS = [
    0,
    10,
    20,
    30
];
var RICH_TEXT_GAPS = [
    '',
    '\n',
    '\n\n',
    '\n\n\n'
];
function createTooltipMarkup(type, option) {
    option.type = type;
    return option;
}
function isSectionFragment(frag) {
    return frag.type === 'section';
}
function getBuilder(frag) {
    return isSectionFragment(frag) ? buildSection : buildNameValue;
}
function getBlockGapLevel(frag) {
    if (isSectionFragment(frag)) {
        var gapLevel_1 = 0;
        var subBlockLen = frag.blocks.length;
        var hasInnerGap_1 = subBlockLen > 1 || subBlockLen > 0 && !frag.noHeader;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(frag.blocks, function(subBlock) {
            var subGapLevel = getBlockGapLevel(subBlock);
            // If the some of the sub-blocks have some gaps (like 10px) inside, this block
            // should use a larger gap (like 20px) to distinguish those sub-blocks.
            if (subGapLevel >= gapLevel_1) {
                gapLevel_1 = subGapLevel + +(hasInnerGap_1 && (// 0 always can not be readable gap level.
                !subGapLevel || isSectionFragment(subBlock) && !subBlock.noHeader));
            }
        });
        return gapLevel_1;
    }
    return 0;
}
function buildSection(ctx, fragment, topMarginForOuterGap, toolTipTextStyle) {
    var noHeader = fragment.noHeader;
    var gaps = getGap(getBlockGapLevel(fragment));
    var subMarkupTextList = [];
    var subBlocks = fragment.blocks || [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!subBlocks || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(subBlocks));
    subBlocks = subBlocks || [];
    var orderMode = ctx.orderMode;
    if (fragment.sortBlocks && orderMode) {
        subBlocks = subBlocks.slice();
        var orderMap = {
            valueAsc: 'asc',
            valueDesc: 'desc'
        };
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(orderMap, orderMode)) {
            var comparator_1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortOrderComparator"](orderMap[orderMode], null);
            subBlocks.sort(function(a, b) {
                return comparator_1.evaluate(a.sortParam, b.sortParam);
            });
        } else if (orderMode === 'seriesDesc') {
            subBlocks.reverse();
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(subBlocks, function(subBlock, idx) {
        var valueFormatter = fragment.valueFormatter;
        var subMarkupText = getBuilder(subBlock)(// Inherit valueFormatter
        valueFormatter ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, ctx), {
            valueFormatter: valueFormatter
        }) : ctx, subBlock, idx > 0 ? gaps.html : 0, toolTipTextStyle);
        subMarkupText != null && subMarkupTextList.push(subMarkupText);
    });
    var subMarkupText = ctx.renderMode === 'richText' ? subMarkupTextList.join(gaps.richText) : wrapBlockHTML(toolTipTextStyle, subMarkupTextList.join(''), noHeader ? topMarginForOuterGap : gaps.html);
    if (noHeader) {
        return subMarkupText;
    }
    var displayableHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeValueReadable"])(fragment.header, 'ordinal', ctx.useUTC);
    var nameStyle = getTooltipTextStyle(toolTipTextStyle, ctx.renderMode).nameStyle;
    var tooltipLineHeight = getTooltipLineHeight(toolTipTextStyle);
    if (ctx.renderMode === 'richText') {
        return wrapInlineNameRichText(ctx, displayableHeader, nameStyle) + gaps.richText + subMarkupText;
    } else {
        return wrapBlockHTML(toolTipTextStyle, "<div style=\"" + nameStyle + ";" + tooltipLineHeight + ";\">" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(displayableHeader) + '</div>' + subMarkupText, topMarginForOuterGap);
    }
}
function buildNameValue(ctx, fragment, topMarginForOuterGap, toolTipTextStyle) {
    var renderMode = ctx.renderMode;
    var noName = fragment.noName;
    var noValue = fragment.noValue;
    var noMarker = !fragment.markerType;
    var name = fragment.name;
    var useUTC = ctx.useUTC;
    var valueFormatter = fragment.valueFormatter || ctx.valueFormatter || function(value) {
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(value) ? value : [
            value
        ];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(value, function(val, idx) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeValueReadable"])(val, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(valueTypeOption) ? valueTypeOption[idx] : valueTypeOption, useUTC);
        });
    };
    if (noName && noValue) {
        return;
    }
    var markerStr = noMarker ? '' : ctx.markupStyleCreator.makeTooltipMarker(fragment.markerType, fragment.markerColor || '#333', renderMode);
    var readableName = noName ? '' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["makeValueReadable"])(name, 'ordinal', useUTC);
    var valueTypeOption = fragment.valueType;
    var readableValueList = noValue ? [] : valueFormatter(fragment.value, fragment.dataIndex);
    var valueAlignRight = !noMarker || !noName;
    // It little weird if only value next to marker but far from marker.
    var valueCloseToMarker = !noMarker && noName;
    var _a = getTooltipTextStyle(toolTipTextStyle, renderMode), nameStyle = _a.nameStyle, valueStyle = _a.valueStyle;
    return renderMode === 'richText' ? (noMarker ? '' : markerStr) + (noName ? '' : wrapInlineNameRichText(ctx, readableName, nameStyle)) + (noValue ? '' : wrapInlineValueRichText(ctx, readableValueList, valueAlignRight, valueCloseToMarker, valueStyle)) : wrapBlockHTML(toolTipTextStyle, (noMarker ? '' : markerStr) + (noName ? '' : wrapInlineNameHTML(readableName, !noMarker, nameStyle)) + (noValue ? '' : wrapInlineValueHTML(readableValueList, valueAlignRight, valueCloseToMarker, valueStyle)), topMarginForOuterGap);
}
function buildTooltipMarkup(fragment, markupStyleCreator, renderMode, orderMode, useUTC, toolTipTextStyle) {
    if (!fragment) {
        return;
    }
    var builder = getBuilder(fragment);
    var ctx = {
        useUTC: useUTC,
        renderMode: renderMode,
        orderMode: orderMode,
        markupStyleCreator: markupStyleCreator,
        valueFormatter: fragment.valueFormatter
    };
    return builder(ctx, fragment, 0, toolTipTextStyle);
}
function getGap(gapLevel) {
    return {
        html: HTML_GAPS[gapLevel],
        richText: RICH_TEXT_GAPS[gapLevel]
    };
}
function wrapBlockHTML(textStyle, encodedContent, topGap) {
    var clearfix = '<div style="clear:both"></div>';
    var marginCSS = "margin: " + topGap + "px 0 0";
    var tooltipLineHeight = getTooltipLineHeight(textStyle);
    return "<div style=\"" + marginCSS + ";" + tooltipLineHeight + ";\">" + encodedContent + clearfix + '</div>';
}
function wrapInlineNameHTML(name, leftHasMarker, style) {
    var marginCss = leftHasMarker ? 'margin-left:2px' : '';
    return "<span style=\"" + style + ";" + marginCss + "\">" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(name) + '</span>';
}
function wrapInlineValueHTML(valueList, alignRight, valueCloseToMarker, style) {
    // Do not too close to marker, considering there are multiple values separated by spaces.
    var paddingStr = valueCloseToMarker ? '10px' : '20px';
    var alignCSS = alignRight ? "float:right;margin-left:" + paddingStr : '';
    valueList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(valueList) ? valueList : [
        valueList
    ];
    return "<span style=\"" + alignCSS + ";" + style + "\">" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(valueList, function(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(value);
    }).join('&nbsp;&nbsp;') + '</span>';
}
function wrapInlineNameRichText(ctx, name, style) {
    return ctx.markupStyleCreator.wrapRichTextStyle(name, style);
}
function wrapInlineValueRichText(ctx, values, alignRight, valueCloseToMarker, style) {
    var styles = [
        style
    ];
    var paddingLeft = valueCloseToMarker ? 10 : 20;
    alignRight && styles.push({
        padding: [
            0,
            0,
            0,
            paddingLeft
        ],
        align: 'right'
    });
    // Value has commas inside, so use '  ' as delimiter for multiple values.
    return ctx.markupStyleCreator.wrapRichTextStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(values) ? values.join('  ') : values, styles);
}
function retrieveVisualColorForTooltipMarker(series, dataIndex) {
    var style = series.getData().getItemVisual(dataIndex, 'style');
    var color = style[series.visualDrawType];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(color);
}
function getPaddingFromTooltipModel(model, renderMode) {
    var padding = model.get('padding');
    return padding != null ? padding : renderMode === 'richText' ? [
        8,
        10
    ] : 10;
}
/**
 * The major feature is generate styles for `renderMode: 'richText'`.
 * But it also serves `renderMode: 'html'` to provide
 * "renderMode-independent" API.
 */ var TooltipMarkupStyleCreator = /** @class */ function() {
    function TooltipMarkupStyleCreator() {
        this.richTextStyles = {};
        // Notice that "generate a style name" usually happens repeatedly when mouse is moving and
        // a tooltip is displayed. So we put the `_nextStyleNameId` as a member of each creator
        // rather than static shared by all creators (which will cause it increase to fast).
        this._nextStyleNameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRandomIdBase"])();
    }
    TooltipMarkupStyleCreator.prototype._generateStyleName = function() {
        return '__EC_aUTo_' + this._nextStyleNameId++;
    };
    TooltipMarkupStyleCreator.prototype.makeTooltipMarker = function(markerType, colorStr, renderMode) {
        var markerId = renderMode === 'richText' ? this._generateStyleName() : null;
        var marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTooltipMarker"])({
            color: colorStr,
            type: markerType,
            renderMode: renderMode,
            markerId: markerId
        });
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(marker)) {
            return marker;
        } else {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(markerId);
            }
            this.richTextStyles[markerId] = marker.style;
            return marker.content;
        }
    };
    /**
   * @usage
   * ```ts
   * const styledText = markupStyleCreator.wrapRichTextStyle([
   *     // The styles will be auto merged.
   *     {
   *         fontSize: 12,
   *         color: 'blue'
   *     },
   *     {
   *         padding: 20
   *     }
   * ]);
   * ```
   */ TooltipMarkupStyleCreator.prototype.wrapRichTextStyle = function(text, styles) {
        var finalStl = {};
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(styles)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(styles, function(stl) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(finalStl, stl);
            });
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(finalStl, styles);
        }
        var styleName = this._generateStyleName();
        this.richTextStyles[styleName] = finalStl;
        return "{" + styleName + "|" + text + "}";
    };
    return TooltipMarkupStyleCreator;
}();
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/seriesFormatTooltip.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "defaultSeriesFormatTooltip": (()=>defaultSeriesFormatTooltip)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
;
;
function defaultSeriesFormatTooltip(opt) {
    var series = opt.series;
    var dataIndex = opt.dataIndex;
    var multipleSeries = opt.multipleSeries;
    var data = series.getData();
    var tooltipDims = data.mapDimensionsAll('defaultedTooltip');
    var tooltipDimLen = tooltipDims.length;
    var value = series.getRawValue(dataIndex);
    var isValueArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(value);
    var markerColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveVisualColorForTooltipMarker"])(series, dataIndex);
    // Complicated rule for pretty tooltip.
    var inlineValue;
    var inlineValueType;
    var subBlocks;
    var sortParam;
    if (tooltipDimLen > 1 || isValueArr && !tooltipDimLen) {
        var formatArrResult = formatTooltipArrayValue(value, series, dataIndex, tooltipDims, markerColor);
        inlineValue = formatArrResult.inlineValues;
        inlineValueType = formatArrResult.inlineValueTypes;
        subBlocks = formatArrResult.blocks;
        // Only support tooltip sort by the first inline value. It's enough in most cases.
        sortParam = formatArrResult.inlineValues[0];
    } else if (tooltipDimLen) {
        var dimInfo = data.getDimensionInfo(tooltipDims[0]);
        sortParam = inlineValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveRawValue"])(data, dataIndex, tooltipDims[0]);
        inlineValueType = dimInfo.type;
    } else {
        sortParam = inlineValue = isValueArr ? value[0] : value;
    }
    // Do not show generated series name. It might not be readable.
    var seriesNameSpecified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNameSpecified"])(series);
    var seriesName = seriesNameSpecified && series.name || '';
    var itemName = data.getName(dataIndex);
    var inlineName = multipleSeries ? seriesName : itemName;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('section', {
        header: seriesName,
        // When series name is not specified, do not show a header line with only '-'.
        // This case always happens in tooltip.trigger: 'item'.
        noHeader: multipleSeries || !seriesNameSpecified,
        sortParam: sortParam,
        blocks: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
                markerType: 'item',
                markerColor: markerColor,
                // Do not mix display seriesName and itemName in one tooltip,
                // which might confuses users.
                name: inlineName,
                // name dimension might be auto assigned, where the name might
                // be not readable. So we check trim here.
                noName: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(inlineName),
                value: inlineValue,
                valueType: inlineValueType,
                dataIndex: dataIndex
            })
        ].concat(subBlocks || [])
    });
}
function formatTooltipArrayValue(value, series, dataIndex, tooltipDims, colorStr) {
    // check: category-no-encode-has-axis-data in dataset.html
    var data = series.getData();
    var isValueMultipleLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reduce"])(value, function(isValueMultipleLine, val, idx) {
        var dimItem = data.getDimensionInfo(idx);
        return isValueMultipleLine = isValueMultipleLine || dimItem && dimItem.tooltip !== false && dimItem.displayName != null;
    }, false);
    var inlineValues = [];
    var inlineValueTypes = [];
    var blocks = [];
    tooltipDims.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(tooltipDims, function(dim) {
        setEachItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieveRawValue"])(data, dataIndex, dim), dim);
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(value, setEachItem);
    function setEachItem(val, dim) {
        var dimInfo = data.getDimensionInfo(dim);
        // If `dimInfo.tooltip` is not set, show tooltip.
        if (!dimInfo || dimInfo.otherDims.tooltip === false) {
            return;
        }
        if (isValueMultipleLine) {
            blocks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
                markerType: 'subItem',
                markerColor: colorStr,
                name: dimInfo.displayName,
                value: val,
                valueType: dimInfo.type
            }));
        } else {
            inlineValues.push(val);
            inlineValueTypes.push(dimInfo.type);
        }
    }
    return {
        inlineValues: inlineValues,
        inlineValueTypes: inlineValueTypes,
        blocks: blocks
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "collect": (()=>collect),
    "fixValue": (()=>fixValue),
    "getAxisInfo": (()=>getAxisInfo),
    "getAxisPointerModel": (()=>getAxisPointerModel),
    "makeKey": (()=>makeKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
;
;
function collect(ecModel, api) {
    var result = {
        /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */ axesInfo: {},
        seriesInvolved: false,
        /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */ coordSysAxesInfo: {},
        coordSysMap: {}
    };
    collectAxesInfo(result, ecModel, api);
    // Check seriesInvolved for performance, in case too many series in some chart.
    result.seriesInvolved && collectSeriesInfo(result, ecModel);
    return result;
}
function collectAxesInfo(result, ecModel, api) {
    var globalTooltipModel = ecModel.getComponent('tooltip');
    var globalAxisPointerModel = ecModel.getComponent('axisPointer');
    // links can only be set on global.
    var linksOption = globalAxisPointerModel.get('link', true) || [];
    var linkGroups = [];
    // Collect axes info.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(api.getCoordinateSystems(), function(coordSys) {
        // Some coordinate system do not support axes, like geo.
        if (!coordSys.axisPointerEnabled) {
            return;
        }
        var coordSysKey = makeKey(coordSys.model);
        var axesInfoInCoordSys = result.coordSysAxesInfo[coordSysKey] = {};
        result.coordSysMap[coordSysKey] = coordSys;
        // Set tooltip (like 'cross') is a convenient way to show axisPointer
        // for user. So we enable setting tooltip on coordSys model.
        var coordSysModel = coordSys.model;
        var baseTooltipModel = coordSysModel.getModel('tooltip', globalTooltipModel);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(coordSys.getAxes(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(saveTooltipAxisInfo, false, null));
        // If axis tooltip used, choose tooltip axis for each coordSys.
        // Notice this case: coordSys is `grid` but not `cartesian2D` here.
        if (coordSys.getTooltipAxes && globalTooltipModel && baseTooltipModel.get('show')) {
            // Compatible with previous logic. But series.tooltip.trigger: 'axis'
            // or series.data[n].tooltip.trigger: 'axis' are not support any more.
            var triggerAxis = baseTooltipModel.get('trigger') === 'axis';
            var cross = baseTooltipModel.get([
                'axisPointer',
                'type'
            ]) === 'cross';
            var tooltipAxes = coordSys.getTooltipAxes(baseTooltipModel.get([
                'axisPointer',
                'axis'
            ]));
            if (triggerAxis || cross) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(tooltipAxes.baseAxes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(saveTooltipAxisInfo, cross ? 'cross' : true, triggerAxis));
            }
            if (cross) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(tooltipAxes.otherAxes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(saveTooltipAxisInfo, 'cross', false));
            }
        }
        // fromTooltip: true | false | 'cross'
        // triggerTooltip: true | false | null
        function saveTooltipAxisInfo(fromTooltip, triggerTooltip, axis) {
            var axisPointerModel = axis.model.getModel('axisPointer', globalAxisPointerModel);
            var axisPointerShow = axisPointerModel.get('show');
            if (!axisPointerShow || axisPointerShow === 'auto' && !fromTooltip && !isHandleTrigger(axisPointerModel)) {
                return;
            }
            if (triggerTooltip == null) {
                triggerTooltip = axisPointerModel.get('triggerTooltip');
            }
            axisPointerModel = fromTooltip ? makeAxisPointerModel(axis, baseTooltipModel, globalAxisPointerModel, ecModel, fromTooltip, triggerTooltip) : axisPointerModel;
            var snap = axisPointerModel.get('snap');
            var triggerEmphasis = axisPointerModel.get('triggerEmphasis');
            var axisKey = makeKey(axis.model);
            var involveSeries = triggerTooltip || snap || axis.type === 'category';
            // If result.axesInfo[key] exist, override it (tooltip has higher priority).
            var axisInfo = result.axesInfo[axisKey] = {
                key: axisKey,
                axis: axis,
                coordSys: coordSys,
                axisPointerModel: axisPointerModel,
                triggerTooltip: triggerTooltip,
                triggerEmphasis: triggerEmphasis,
                involveSeries: involveSeries,
                snap: snap,
                useHandle: isHandleTrigger(axisPointerModel),
                seriesModels: [],
                linkGroup: null
            };
            axesInfoInCoordSys[axisKey] = axisInfo;
            result.seriesInvolved = result.seriesInvolved || involveSeries;
            var groupIndex = getLinkGroupIndex(linksOption, axis);
            if (groupIndex != null) {
                var linkGroup = linkGroups[groupIndex] || (linkGroups[groupIndex] = {
                    axesInfo: {}
                });
                linkGroup.axesInfo[axisKey] = axisInfo;
                linkGroup.mapper = linksOption[groupIndex].mapper;
                axisInfo.linkGroup = linkGroup;
            }
        }
    });
}
function makeAxisPointerModel(axis, baseTooltipModel, globalAxisPointerModel, ecModel, fromTooltip, triggerTooltip) {
    var tooltipAxisPointerModel = baseTooltipModel.getModel('axisPointer');
    var fields = [
        'type',
        'snap',
        'lineStyle',
        'shadowStyle',
        'label',
        'animation',
        'animationDurationUpdate',
        'animationEasingUpdate',
        'z'
    ];
    var volatileOption = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(fields, function(field) {
        volatileOption[field] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(tooltipAxisPointerModel.get(field));
    });
    // category axis do not auto snap, otherwise some tick that do not
    // has value can not be hovered. value/time/log axis default snap if
    // triggered from tooltip and trigger tooltip.
    volatileOption.snap = axis.type !== 'category' && !!triggerTooltip;
    // Compatible with previous behavior, tooltip axis does not show label by default.
    // Only these properties can be overridden from tooltip to axisPointer.
    if (tooltipAxisPointerModel.get('type') === 'cross') {
        volatileOption.type = 'line';
    }
    var labelOption = volatileOption.label || (volatileOption.label = {});
    // Follow the convention, do not show label when triggered by tooltip by default.
    labelOption.show == null && (labelOption.show = false);
    if (fromTooltip === 'cross') {
        // When 'cross', both axes show labels.
        var tooltipAxisPointerLabelShow = tooltipAxisPointerModel.get([
            'label',
            'show'
        ]);
        labelOption.show = tooltipAxisPointerLabelShow != null ? tooltipAxisPointerLabelShow : true;
        // If triggerTooltip, this is a base axis, which should better not use cross style
        // (cross style is dashed by default)
        if (!triggerTooltip) {
            var crossStyle = volatileOption.lineStyle = tooltipAxisPointerModel.get('crossStyle');
            crossStyle && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])(labelOption, crossStyle.textStyle);
        }
    }
    return axis.model.getModel('axisPointer', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](volatileOption, globalAxisPointerModel, ecModel));
}
function collectSeriesInfo(result, ecModel) {
    // Prepare data for axis trigger
    ecModel.eachSeries(function(seriesModel) {
        // Notice this case: this coordSys is `cartesian2D` but not `grid`.
        var coordSys = seriesModel.coordinateSystem;
        var seriesTooltipTrigger = seriesModel.get([
            'tooltip',
            'trigger'
        ], true);
        var seriesTooltipShow = seriesModel.get([
            'tooltip',
            'show'
        ], true);
        if (!coordSys || seriesTooltipTrigger === 'none' || seriesTooltipTrigger === false || seriesTooltipTrigger === 'item' || seriesTooltipShow === false || seriesModel.get([
            'axisPointer',
            'show'
        ], true) === false) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(result.coordSysAxesInfo[makeKey(coordSys.model)], function(axisInfo) {
            var axis = axisInfo.axis;
            if (coordSys.getAxis(axis.dim) === axis) {
                axisInfo.seriesModels.push(seriesModel);
                axisInfo.seriesDataCount == null && (axisInfo.seriesDataCount = 0);
                axisInfo.seriesDataCount += seriesModel.getData().count();
            }
        });
    });
}
/**
 * For example:
 * {
 *     axisPointer: {
 *         links: [{
 *             xAxisIndex: [2, 4],
 *             yAxisIndex: 'all'
 *         }, {
 *             xAxisId: ['a5', 'a7'],
 *             xAxisName: 'xxx'
 *         }]
 *     }
 * }
 */ function getLinkGroupIndex(linksOption, axis) {
    var axisModel = axis.model;
    var dim = axis.dim;
    for(var i = 0; i < linksOption.length; i++){
        var linkOption = linksOption[i] || {};
        if (checkPropInLink(linkOption[dim + 'AxisId'], axisModel.id) || checkPropInLink(linkOption[dim + 'AxisIndex'], axisModel.componentIndex) || checkPropInLink(linkOption[dim + 'AxisName'], axisModel.name)) {
            return i;
        }
    }
}
function checkPropInLink(linkPropValue, axisPropValue) {
    return linkPropValue === 'all' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(linkPropValue) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(linkPropValue, axisPropValue) >= 0 || linkPropValue === axisPropValue;
}
function fixValue(axisModel) {
    var axisInfo = getAxisInfo(axisModel);
    if (!axisInfo) {
        return;
    }
    var axisPointerModel = axisInfo.axisPointerModel;
    var scale = axisInfo.axis.scale;
    var option = axisPointerModel.option;
    var status = axisPointerModel.get('status');
    var value = axisPointerModel.get('value');
    // Parse init value for category and time axis.
    if (value != null) {
        value = scale.parse(value);
    }
    var useHandle = isHandleTrigger(axisPointerModel);
    // If `handle` used, `axisPointer` will always be displayed, so value
    // and status should be initialized.
    if (status == null) {
        option.status = useHandle ? 'show' : 'hide';
    }
    var extent = scale.getExtent().slice();
    extent[0] > extent[1] && extent.reverse();
    if (// Pick a value on axis when initializing.
    value == null || value > extent[1]) {
        // Make handle displayed on the end of the axis when init, which looks better.
        value = extent[1];
    }
    if (value < extent[0]) {
        value = extent[0];
    }
    option.value = value;
    if (useHandle) {
        option.status = axisInfo.axis.scale.isBlank() ? 'hide' : 'show';
    }
}
function getAxisInfo(axisModel) {
    var coordSysAxesInfo = (axisModel.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo;
    return coordSysAxesInfo && coordSysAxesInfo.axesInfo[makeKey(axisModel)];
}
function getAxisPointerModel(axisModel) {
    var axisInfo = getAxisInfo(axisModel);
    return axisInfo && axisInfo.axisPointerModel;
}
function isHandleTrigger(axisPointerModel) {
    return !!axisPointerModel.get([
        'handle',
        'show'
    ]);
}
function makeKey(model) {
    return model.type + '||' + model.id;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
;
;
;
var axisPointerClazz = {};
/**
 * Base class of AxisView.
 */ var AxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AxisView, _super);
    function AxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AxisView.type;
        return _this;
    }
    /**
   * @override
   */ AxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        // FIXME
        // This process should proformed after coordinate systems updated
        // (axis scale updated), and should be performed each time update.
        // So put it here temporarily, although it is not appropriate to
        // put a model-writing procedure in `view`.
        this.axisPointerClass && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.fixValue(axisModel);
        _super.prototype.render.apply(this, arguments);
        this._doUpdateAxisPointerClass(axisModel, api, true);
    };
    /**
   * Action handler.
   */ AxisView.prototype.updateAxisPointer = function(axisModel, ecModel, api, payload) {
        this._doUpdateAxisPointerClass(axisModel, api, false);
    };
    /**
   * @override
   */ AxisView.prototype.remove = function(ecModel, api) {
        var axisPointer = this._axisPointer;
        axisPointer && axisPointer.remove(api);
    };
    /**
   * @override
   */ AxisView.prototype.dispose = function(ecModel, api) {
        this._disposeAxisPointer(api);
        _super.prototype.dispose.apply(this, arguments);
    };
    AxisView.prototype._doUpdateAxisPointerClass = function(axisModel, api, forceRender) {
        var Clazz = AxisView.getAxisPointerClass(this.axisPointerClass);
        if (!Clazz) {
            return;
        }
        var axisPointerModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getAxisPointerModel(axisModel);
        axisPointerModel ? (this._axisPointer || (this._axisPointer = new Clazz())).render(axisModel, axisPointerModel, api, forceRender) : this._disposeAxisPointer(api);
    };
    AxisView.prototype._disposeAxisPointer = function(api) {
        this._axisPointer && this._axisPointer.dispose(api);
        this._axisPointer = null;
    };
    AxisView.registerAxisPointerClass = function(type, clazz) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (axisPointerClazz[type]) {
                throw new Error('axisPointer ' + type + ' exists');
            }
        }
        axisPointerClazz[type] = clazz;
    };
    ;
    AxisView.getAxisPointerClass = function(type) {
        return type && axisPointerClazz[type];
    };
    ;
    AxisView.type = 'axis';
    return AxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = AxisView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelLayoutHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
var PI = Math.PI;
/**
 * A final axis is translated and rotated from a "standard axis".
 * So opt.position and opt.rotation is required.
 *
 * A standard axis is and axis from [0, 0] to [0, axisExtent[1]],
 * for example: (0, 0) ------------> (0, 50)
 *
 * nameDirection or tickDirection or labelDirection is 1 means tick
 * or label is below the standard axis, whereas is -1 means above
 * the standard axis. labelOffset means offset between label and axis,
 * which is useful when 'onZero', where axisLabel is in the grid and
 * label in outside grid.
 *
 * Tips: like always,
 * positive rotation represents anticlockwise, and negative rotation
 * represents clockwise.
 * The direction of position coordinate is the same as the direction
 * of screen coordinate.
 *
 * Do not need to consider axis 'inverse', which is auto processed by
 * axis extent.
 */ var AxisBuilder = /** @class */ function() {
    function AxisBuilder(axisModel, opt) {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
        this.opt = opt;
        this.axisModel = axisModel;
        // Default value
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])(opt, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: true,
            handleAutoShown: function() {
                return true;
            }
        });
        // FIXME Not use a separate text group?
        var transformGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group({
            x: opt.position[0],
            y: opt.position[1],
            rotation: opt.rotation
        });
        // this.group.add(transformGroup);
        // this._transformGroup = transformGroup;
        transformGroup.updateTransform();
        this._transformGroup = transformGroup;
    }
    AxisBuilder.prototype.hasBuilder = function(name) {
        return !!builders[name];
    };
    AxisBuilder.prototype.add = function(name) {
        builders[name](this.opt, this.axisModel, this.group, this._transformGroup);
    };
    AxisBuilder.prototype.getGroup = function() {
        return this.group;
    };
    AxisBuilder.innerTextLayout = function(axisRotation, textRotation, direction) {
        var rotationDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remRadian"])(textRotation - axisRotation);
        var textAlign;
        var textVerticalAlign;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff)) {
            // Label is parallel with axis line.
            textVerticalAlign = direction > 0 ? 'top' : 'bottom';
            textAlign = 'center';
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff - PI)) {
            // Label is inverse parallel with axis line.
            textVerticalAlign = direction > 0 ? 'bottom' : 'top';
            textAlign = 'center';
        } else {
            textVerticalAlign = 'middle';
            if (rotationDiff > 0 && rotationDiff < PI) {
                textAlign = direction > 0 ? 'right' : 'left';
            } else {
                textAlign = direction > 0 ? 'left' : 'right';
            }
        }
        return {
            rotation: rotationDiff,
            textAlign: textAlign,
            textVerticalAlign: textVerticalAlign
        };
    };
    AxisBuilder.makeAxisEventDataBase = function(axisModel) {
        var eventData = {
            componentType: axisModel.mainType,
            componentIndex: axisModel.componentIndex
        };
        eventData[axisModel.mainType + 'Index'] = axisModel.componentIndex;
        return eventData;
    };
    AxisBuilder.isLabelSilent = function(axisModel) {
        var tooltipOpt = axisModel.get('tooltip');
        return axisModel.get('silent') || !(axisModel.get('triggerEvent') || tooltipOpt && tooltipOpt.show);
    };
    return AxisBuilder;
}();
;
var builders = {
    axisLine: function(opt, axisModel, group, transformGroup) {
        var shown = axisModel.get([
            'axisLine',
            'show'
        ]);
        if (shown === 'auto' && opt.handleAutoShown) {
            shown = opt.handleAutoShown('axisLine');
        }
        if (!shown) {
            return;
        }
        var extent = axisModel.axis.getExtent();
        var matrix = transformGroup.transform;
        var pt1 = [
            extent[0],
            0
        ];
        var pt2 = [
            extent[1],
            0
        ];
        var inverse = pt1[0] > pt2[0];
        if (matrix) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])(pt1, pt1, matrix);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])(pt2, pt2, matrix);
        }
        var lineStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
            lineCap: 'round'
        }, axisModel.getModel([
            'axisLine',
            'lineStyle'
        ]).getLineStyle());
        var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Line({
            shape: {
                x1: pt1[0],
                y1: pt1[1],
                x2: pt2[0],
                y2: pt2[1]
            },
            style: lineStyle,
            strokeContainThreshold: opt.strokeContainThreshold || 5,
            silent: true,
            z2: 1
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.subPixelOptimizeLine(line.shape, line.style.lineWidth);
        line.anid = 'line';
        group.add(line);
        var arrows = axisModel.get([
            'axisLine',
            'symbol'
        ]);
        if (arrows != null) {
            var arrowSize = axisModel.get([
                'axisLine',
                'symbolSize'
            ]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(arrows)) {
                // Use the same arrow for start and end point
                arrows = [
                    arrows,
                    arrows
                ];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(arrowSize) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(arrowSize)) {
                // Use the same size for width and height
                arrowSize = [
                    arrowSize,
                    arrowSize
                ];
            }
            var arrowOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeSymbolOffset"])(axisModel.get([
                'axisLine',
                'symbolOffset'
            ]) || 0, arrowSize);
            var symbolWidth_1 = arrowSize[0];
            var symbolHeight_1 = arrowSize[1];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
                {
                    rotate: opt.rotation + Math.PI / 2,
                    offset: arrowOffset[0],
                    r: 0
                },
                {
                    rotate: opt.rotation - Math.PI / 2,
                    offset: arrowOffset[1],
                    r: Math.sqrt((pt1[0] - pt2[0]) * (pt1[0] - pt2[0]) + (pt1[1] - pt2[1]) * (pt1[1] - pt2[1]))
                }
            ], function(point, index) {
                if (arrows[index] !== 'none' && arrows[index] != null) {
                    var symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(arrows[index], -symbolWidth_1 / 2, -symbolHeight_1 / 2, symbolWidth_1, symbolHeight_1, lineStyle.stroke, true);
                    // Calculate arrow position with offset
                    var r = point.r + point.offset;
                    var pt = inverse ? pt2 : pt1;
                    symbol.attr({
                        rotation: point.rotate,
                        x: pt[0] + r * Math.cos(opt.rotation),
                        y: pt[1] - r * Math.sin(opt.rotation),
                        silent: true,
                        z2: 11
                    });
                    group.add(symbol);
                }
            });
        }
    },
    axisTickLabel: function(opt, axisModel, group, transformGroup) {
        var ticksEls = buildAxisMajorTicks(group, transformGroup, axisModel, opt);
        var labelEls = buildAxisLabel(group, transformGroup, axisModel, opt);
        fixMinMaxLabelShow(axisModel, labelEls, ticksEls);
        buildAxisMinorTicks(group, transformGroup, axisModel, opt.tickDirection);
        // This bit fixes the label overlap issue for the time chart.
        // See https://github.com/apache/echarts/issues/14266 for more.
        if (axisModel.get([
            'axisLabel',
            'hideOverlap'
        ])) {
            var labelList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareLayoutList"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(labelEls, function(label) {
                return {
                    label: label,
                    priority: label.z2,
                    defaultAttr: {
                        ignore: label.ignore
                    }
                };
            }));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelLayoutHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOverlap"])(labelList);
        }
    },
    axisName: function(opt, axisModel, group, transformGroup) {
        var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"])(opt.axisName, axisModel.get('name'));
        if (!name) {
            return;
        }
        var nameLocation = axisModel.get('nameLocation');
        var nameDirection = opt.nameDirection;
        var textStyleModel = axisModel.getModel('nameTextStyle');
        var gap = axisModel.get('nameGap') || 0;
        var extent = axisModel.axis.getExtent();
        var gapSignal = extent[0] > extent[1] ? -1 : 1;
        var pos = [
            nameLocation === 'start' ? extent[0] - gapSignal * gap : nameLocation === 'end' ? extent[1] + gapSignal * gap : (extent[0] + extent[1]) / 2,
            // Reuse labelOffset.
            isNameLocationCenter(nameLocation) ? opt.labelOffset + nameDirection * gap : 0
        ];
        var labelLayout;
        var nameRotation = axisModel.get('nameRotate');
        if (nameRotation != null) {
            nameRotation = nameRotation * PI / 180; // To radian.
        }
        var axisNameAvailableWidth;
        if (isNameLocationCenter(nameLocation)) {
            labelLayout = AxisBuilder.innerTextLayout(opt.rotation, nameRotation != null ? nameRotation : opt.rotation, // Adapt to axis.
            nameDirection);
        } else {
            labelLayout = endTextLayout(opt.rotation, nameLocation, nameRotation || 0, extent);
            axisNameAvailableWidth = opt.axisNameAvailableWidth;
            if (axisNameAvailableWidth != null) {
                axisNameAvailableWidth = Math.abs(axisNameAvailableWidth / Math.sin(labelLayout.rotation));
                !isFinite(axisNameAvailableWidth) && (axisNameAvailableWidth = null);
            }
        }
        var textFont = textStyleModel.getFont();
        var truncateOpt = axisModel.get('nameTruncate', true) || {};
        var ellipsis = truncateOpt.ellipsis;
        var maxWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"])(opt.nameTruncateMaxWidth, truncateOpt.maxWidth, axisNameAvailableWidth);
        var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Text({
            x: pos[0],
            y: pos[1],
            rotation: labelLayout.rotation,
            silent: AxisBuilder.isLabelSilent(axisModel),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                text: name,
                font: textFont,
                overflow: 'truncate',
                width: maxWidth,
                ellipsis: ellipsis,
                fill: textStyleModel.getTextColor() || axisModel.get([
                    'axisLine',
                    'lineStyle',
                    'color'
                ]),
                align: textStyleModel.get('align') || labelLayout.textAlign,
                verticalAlign: textStyleModel.get('verticalAlign') || labelLayout.textVerticalAlign
            }),
            z2: 1
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.setTooltipConfig({
            el: textEl,
            componentModel: axisModel,
            itemName: name
        });
        textEl.__fullText = name;
        // Id for animation
        textEl.anid = 'name';
        if (axisModel.get('triggerEvent')) {
            var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
            eventData.targetType = 'axisName';
            eventData.name = name;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = eventData;
        }
        // FIXME
        transformGroup.add(textEl);
        textEl.updateTransform();
        group.add(textEl);
        textEl.decomposeTransform();
    }
};
function endTextLayout(rotation, textPosition, textRotate, extent) {
    var rotationDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remRadian"])(textRotate - rotation);
    var textAlign;
    var textVerticalAlign;
    var inverse = extent[0] > extent[1];
    var onLeft = textPosition === 'start' && !inverse || textPosition !== 'start' && inverse;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff - PI / 2)) {
        textVerticalAlign = onLeft ? 'bottom' : 'top';
        textAlign = 'center';
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRadianAroundZero"])(rotationDiff - PI * 1.5)) {
        textVerticalAlign = onLeft ? 'top' : 'bottom';
        textAlign = 'center';
    } else {
        textVerticalAlign = 'middle';
        if (rotationDiff < PI * 1.5 && rotationDiff > PI / 2) {
            textAlign = onLeft ? 'left' : 'right';
        } else {
            textAlign = onLeft ? 'right' : 'left';
        }
    }
    return {
        rotation: rotationDiff,
        textAlign: textAlign,
        textVerticalAlign: textVerticalAlign
    };
}
function fixMinMaxLabelShow(axisModel, labelEls, tickEls) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowAllLabels"])(axisModel.axis)) {
        return;
    }
    // If min or max are user set, we need to check
    // If the tick on min(max) are overlap on their neighbour tick
    // If they are overlapped, we need to hide the min(max) tick label
    var showMinLabel = axisModel.get([
        'axisLabel',
        'showMinLabel'
    ]);
    var showMaxLabel = axisModel.get([
        'axisLabel',
        'showMaxLabel'
    ]);
    // FIXME
    // Have not consider onBand yet, where tick els is more than label els.
    labelEls = labelEls || [];
    tickEls = tickEls || [];
    var firstLabel = labelEls[0];
    var nextLabel = labelEls[1];
    var lastLabel = labelEls[labelEls.length - 1];
    var prevLabel = labelEls[labelEls.length - 2];
    var firstTick = tickEls[0];
    var nextTick = tickEls[1];
    var lastTick = tickEls[tickEls.length - 1];
    var prevTick = tickEls[tickEls.length - 2];
    if (showMinLabel === false) {
        ignoreEl(firstLabel);
        ignoreEl(firstTick);
    } else if (isTwoLabelOverlapped(firstLabel, nextLabel)) {
        if (showMinLabel) {
            ignoreEl(nextLabel);
            ignoreEl(nextTick);
        } else {
            ignoreEl(firstLabel);
            ignoreEl(firstTick);
        }
    }
    if (showMaxLabel === false) {
        ignoreEl(lastLabel);
        ignoreEl(lastTick);
    } else if (isTwoLabelOverlapped(prevLabel, lastLabel)) {
        if (showMaxLabel) {
            ignoreEl(prevLabel);
            ignoreEl(prevTick);
        } else {
            ignoreEl(lastLabel);
            ignoreEl(lastTick);
        }
    }
}
function ignoreEl(el) {
    el && (el.ignore = true);
}
function isTwoLabelOverlapped(current, next) {
    // current and next has the same rotation.
    var firstRect = current && current.getBoundingRect().clone();
    var nextRect = next && next.getBoundingRect().clone();
    if (!firstRect || !nextRect) {
        return;
    }
    // When checking intersect of two rotated labels, we use mRotationBack
    // to avoid that boundingRect is enlarge when using `boundingRect.applyTransform`.
    var mRotationBack = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.identity([]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.rotate(mRotationBack, mRotationBack, -current.rotation);
    firstRect.applyTransform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.mul([], mRotationBack, current.getLocalTransform()));
    nextRect.applyTransform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.mul([], mRotationBack, next.getLocalTransform()));
    return firstRect.intersect(nextRect);
}
function isNameLocationCenter(nameLocation) {
    return nameLocation === 'middle' || nameLocation === 'center';
}
function createTicks(ticksCoords, tickTransform, tickEndCoord, tickLineStyle, anidPrefix) {
    var tickEls = [];
    var pt1 = [];
    var pt2 = [];
    for(var i = 0; i < ticksCoords.length; i++){
        var tickCoord = ticksCoords[i].coord;
        pt1[0] = tickCoord;
        pt1[1] = 0;
        pt2[0] = tickCoord;
        pt2[1] = tickEndCoord;
        if (tickTransform) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])(pt1, pt1, tickTransform);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTransform"])(pt2, pt2, tickTransform);
        }
        // Tick line, Not use group transform to have better line draw
        var tickEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Line({
            shape: {
                x1: pt1[0],
                y1: pt1[1],
                x2: pt2[0],
                y2: pt2[1]
            },
            style: tickLineStyle,
            z2: 2,
            autoBatch: true,
            silent: true
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.subPixelOptimizeLine(tickEl.shape, tickEl.style.lineWidth);
        tickEl.anid = anidPrefix + '_' + ticksCoords[i].tickValue;
        tickEls.push(tickEl);
    }
    return tickEls;
}
function buildAxisMajorTicks(group, transformGroup, axisModel, opt) {
    var axis = axisModel.axis;
    var tickModel = axisModel.getModel('axisTick');
    var shown = tickModel.get('show');
    if (shown === 'auto' && opt.handleAutoShown) {
        shown = opt.handleAutoShown('axisTick');
    }
    if (!shown || axis.scale.isBlank()) {
        return;
    }
    var lineStyleModel = tickModel.getModel('lineStyle');
    var tickEndCoord = opt.tickDirection * tickModel.get('length');
    var ticksCoords = axis.getTicksCoords();
    var ticksEls = createTicks(ticksCoords, transformGroup.transform, tickEndCoord, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])(lineStyleModel.getLineStyle(), {
        stroke: axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ])
    }), 'ticks');
    for(var i = 0; i < ticksEls.length; i++){
        group.add(ticksEls[i]);
    }
    return ticksEls;
}
function buildAxisMinorTicks(group, transformGroup, axisModel, tickDirection) {
    var axis = axisModel.axis;
    var minorTickModel = axisModel.getModel('minorTick');
    if (!minorTickModel.get('show') || axis.scale.isBlank()) {
        return;
    }
    var minorTicksCoords = axis.getMinorTicksCoords();
    if (!minorTicksCoords.length) {
        return;
    }
    var lineStyleModel = minorTickModel.getModel('lineStyle');
    var tickEndCoord = tickDirection * minorTickModel.get('length');
    var minorTickLineStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])(lineStyleModel.getLineStyle(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])(axisModel.getModel('axisTick').getLineStyle(), {
        stroke: axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ])
    }));
    for(var i = 0; i < minorTicksCoords.length; i++){
        var minorTicksEls = createTicks(minorTicksCoords[i], transformGroup.transform, tickEndCoord, minorTickLineStyle, 'minorticks_' + i);
        for(var k = 0; k < minorTicksEls.length; k++){
            group.add(minorTicksEls[k]);
        }
    }
}
function buildAxisLabel(group, transformGroup, axisModel, opt) {
    var axis = axisModel.axis;
    var show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"])(opt.axisLabelShow, axisModel.get([
        'axisLabel',
        'show'
    ]));
    if (!show || axis.scale.isBlank()) {
        return;
    }
    var labelModel = axisModel.getModel('axisLabel');
    var labelMargin = labelModel.get('margin');
    var labels = axis.getViewLabels();
    // Special label rotate.
    var labelRotation = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"])(opt.labelRotate, labelModel.get('rotate')) || 0) * PI / 180;
    var labelLayout = AxisBuilder.innerTextLayout(opt.rotation, labelRotation, opt.labelDirection);
    var rawCategoryData = axisModel.getCategories && axisModel.getCategories(true);
    var labelEls = [];
    var silent = AxisBuilder.isLabelSilent(axisModel);
    var triggerEvent = axisModel.get('triggerEvent');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(labels, function(labelItem, index) {
        var tickValue = axis.scale.type === 'ordinal' ? axis.scale.getRawOrdinalNumber(labelItem.tickValue) : labelItem.tickValue;
        var formattedLabel = labelItem.formattedLabel;
        var rawLabel = labelItem.rawLabel;
        var itemLabelModel = labelModel;
        if (rawCategoryData && rawCategoryData[tickValue]) {
            var rawCategoryItem = rawCategoryData[tickValue];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(rawCategoryItem) && rawCategoryItem.textStyle) {
                itemLabelModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](rawCategoryItem.textStyle, labelModel, axisModel.ecModel);
            }
        }
        var textColor = itemLabelModel.getTextColor() || axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ]);
        var tickCoord = axis.dataToCoord(tickValue);
        var align = itemLabelModel.getShallow('align', true) || labelLayout.textAlign;
        var alignMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('alignMinLabel', true), align);
        var alignMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('alignMaxLabel', true), align);
        var verticalAlign = itemLabelModel.getShallow('verticalAlign', true) || itemLabelModel.getShallow('baseline', true) || labelLayout.textVerticalAlign;
        var verticalAlignMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('verticalAlignMinLabel', true), verticalAlign);
        var verticalAlignMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(itemLabelModel.getShallow('verticalAlignMaxLabel', true), verticalAlign);
        var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Text({
            x: tickCoord,
            y: opt.labelOffset + opt.labelDirection * labelMargin,
            rotation: labelLayout.rotation,
            silent: silent,
            z2: 10 + (labelItem.level || 0),
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(itemLabelModel, {
                text: formattedLabel,
                align: index === 0 ? alignMin : index === labels.length - 1 ? alignMax : align,
                verticalAlign: index === 0 ? verticalAlignMin : index === labels.length - 1 ? verticalAlignMax : verticalAlign,
                fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(textColor) ? textColor(// (1) In category axis with data zoom, tick is not the original
                // index of axis.data. So tick should not be exposed to user
                // in category axis.
                // (2) Compatible with previous version, which always use formatted label as
                // input. But in interval scale the formatted label is like '223,445', which
                // maked user replace ','. So we modify it to return original val but remain
                // it as 'string' to avoid error in replacing.
                axis.type === 'category' ? rawLabel : axis.type === 'value' ? tickValue + '' : tickValue, index) : textColor
            })
        });
        textEl.anid = 'label_' + tickValue;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.setTooltipConfig({
            el: textEl,
            componentModel: axisModel,
            itemName: formattedLabel,
            formatterParamsExtra: {
                isTruncated: function() {
                    return textEl.isTruncated;
                },
                value: rawLabel,
                tickIndex: index
            }
        });
        // Pack data for mouse event
        if (triggerEvent) {
            var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
            eventData.targetType = 'axisLabel';
            eventData.value = rawLabel;
            eventData.tickIndex = index;
            if (axis.type === 'category') {
                eventData.dataIndex = tickValue;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = eventData;
        }
        // FIXME
        transformGroup.add(textEl);
        textEl.updateTransform();
        labelEls.push(textEl);
        group.add(textEl);
        textEl.decomposeTransform();
    });
    return labelEls;
}
const __TURBOPACK__default__export__ = AxisBuilder;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "buildCartesianSingleLabelElOption": (()=>buildCartesianSingleLabelElOption),
    "buildElStyle": (()=>buildElStyle),
    "buildLabelElOption": (()=>buildLabelElOption),
    "getTransformedPosition": (()=>getTransformedPosition),
    "getValueLabel": (()=>getValueLabel),
    "makeLineShape": (()=>makeLineShape),
    "makeRectShape": (()=>makeRectShape),
    "makeSectorShape": (()=>makeSectorShape)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function buildElStyle(axisPointerModel) {
    var axisPointerType = axisPointerModel.get('type');
    var styleModel = axisPointerModel.getModel(axisPointerType + 'Style');
    var style;
    if (axisPointerType === 'line') {
        style = styleModel.getLineStyle();
        style.fill = null;
    } else if (axisPointerType === 'shadow') {
        style = styleModel.getAreaStyle();
        style.stroke = null;
    }
    return style;
}
function buildLabelElOption(elOption, axisModel, axisPointerModel, api, labelPos) {
    var value = axisPointerModel.get('value');
    var text = getValueLabel(value, axisModel.axis, axisModel.ecModel, axisPointerModel.get('seriesDataIndices'), {
        precision: axisPointerModel.get([
            'label',
            'precision'
        ]),
        formatter: axisPointerModel.get([
            'label',
            'formatter'
        ])
    });
    var labelModel = axisPointerModel.getModel('label');
    var paddings = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.normalizeCssArray(labelModel.get('padding') || 0);
    var font = labelModel.getFont();
    var textRect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getBoundingRect(text, font);
    var position = labelPos.position;
    var width = textRect.width + paddings[1] + paddings[3];
    var height = textRect.height + paddings[0] + paddings[2];
    // Adjust by align.
    var align = labelPos.align;
    align === 'right' && (position[0] -= width);
    align === 'center' && (position[0] -= width / 2);
    var verticalAlign = labelPos.verticalAlign;
    verticalAlign === 'bottom' && (position[1] -= height);
    verticalAlign === 'middle' && (position[1] -= height / 2);
    // Not overflow ec container
    confineInContainer(position, width, height, api);
    var bgColor = labelModel.get('backgroundColor');
    if (!bgColor || bgColor === 'auto') {
        bgColor = axisModel.get([
            'axisLine',
            'lineStyle',
            'color'
        ]);
    }
    elOption.label = {
        // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
        x: position[0],
        y: position[1],
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(labelModel, {
            text: text,
            font: font,
            fill: labelModel.getTextColor(),
            padding: paddings,
            backgroundColor: bgColor
        }),
        // Label should be over axisPointer.
        z2: 10
    };
}
// Do not overflow ec container
function confineInContainer(position, width, height, api) {
    var viewWidth = api.getWidth();
    var viewHeight = api.getHeight();
    position[0] = Math.min(position[0] + width, viewWidth) - width;
    position[1] = Math.min(position[1] + height, viewHeight) - height;
    position[0] = Math.max(position[0], 0);
    position[1] = Math.max(position[1], 0);
}
function getValueLabel(value, axis, ecModel, seriesDataIndices, opt) {
    value = axis.scale.parse(value);
    var text = axis.scale.getLabel({
        value: value
    }, {
        // If `precision` is set, width can be fixed (like '12.00500'), which
        // helps to debounce when when moving label.
        precision: opt.precision
    });
    var formatter = opt.formatter;
    if (formatter) {
        var params_1 = {
            value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getAxisRawValue(axis, {
                value: value
            }),
            axisDimension: axis.dim,
            axisIndex: axis.index,
            seriesData: []
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(seriesDataIndices, function(idxItem) {
            var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
            var dataIndex = idxItem.dataIndexInside;
            var dataParams = series && series.getDataParams(dataIndex);
            dataParams && params_1.seriesData.push(dataParams);
        });
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isString(formatter)) {
            text = formatter.replace('{value}', text);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isFunction(formatter)) {
            text = formatter(params_1);
        }
    }
    return text;
}
function getTransformedPosition(axis, value, layoutInfo) {
    var transform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.create();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.rotate(transform, transform, layoutInfo.rotation);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$matrix$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.translate(transform, transform, layoutInfo.position);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.applyTransform([
        axis.dataToCoord(value),
        (layoutInfo.labelOffset || 0) + (layoutInfo.labelDirection || 1) * (layoutInfo.labelMargin || 0)
    ], transform);
}
function buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api) {
    // @ts-ignore
    var textLayout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].innerTextLayout(layoutInfo.rotation, 0, layoutInfo.labelDirection);
    layoutInfo.labelMargin = axisPointerModel.get([
        'label',
        'margin'
    ]);
    buildLabelElOption(elOption, axisModel, axisPointerModel, api, {
        position: getTransformedPosition(axisModel.axis, value, layoutInfo),
        align: textLayout.textAlign,
        verticalAlign: textLayout.textVerticalAlign
    });
}
function makeLineShape(p1, p2, xDimIndex) {
    xDimIndex = xDimIndex || 0;
    return {
        x1: p1[xDimIndex],
        y1: p1[1 - xDimIndex],
        x2: p2[xDimIndex],
        y2: p2[1 - xDimIndex]
    };
}
function makeRectShape(xy, wh, xDimIndex) {
    xDimIndex = xDimIndex || 0;
    return {
        x: xy[xDimIndex],
        y: xy[1 - xDimIndex],
        width: wh[xDimIndex],
        height: wh[1 - xDimIndex]
    };
}
function makeSectorShape(cx, cy, r0, r, startAngle, endAngle) {
    return {
        cx: cx,
        cy: cy,
        r0: r0,
        r: r,
        startAngle: startAngle,
        endAngle: endAngle,
        clockwise: true
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/throttle.js [app-client] (ecmascript)");
;
;
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var clone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.clone;
var bind = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bind;
/**
 * Base axis pointer class in 2D.
 */ var BaseAxisPointer = /** @class */ function() {
    function BaseAxisPointer() {
        this._dragging = false;
        /**
     * In px, arbitrary value. Do not set too small,
     * no animation is ok for most cases.
     */ this.animationThreshold = 15;
    }
    /**
   * @implement
   */ BaseAxisPointer.prototype.render = function(axisModel, axisPointerModel, api, forceRender) {
        var value = axisPointerModel.get('value');
        var status = axisPointerModel.get('status');
        // Bind them to `this`, not in closure, otherwise they will not
        // be replaced when user calling setOption in not merge mode.
        this._axisModel = axisModel;
        this._axisPointerModel = axisPointerModel;
        this._api = api;
        // Optimize: `render` will be called repeatedly during mouse move.
        // So it is power consuming if performing `render` each time,
        // especially on mobile device.
        if (!forceRender && this._lastValue === value && this._lastStatus === status) {
            return;
        }
        this._lastValue = value;
        this._lastStatus = status;
        var group = this._group;
        var handle = this._handle;
        if (!status || status === 'hide') {
            // Do not clear here, for animation better.
            group && group.hide();
            handle && handle.hide();
            return;
        }
        group && group.show();
        handle && handle.show();
        // Otherwise status is 'show'
        var elOption = {};
        this.makeElOption(elOption, value, axisModel, axisPointerModel, api);
        // Enable change axis pointer type.
        var graphicKey = elOption.graphicKey;
        if (graphicKey !== this._lastGraphicKey) {
            this.clear(api);
        }
        this._lastGraphicKey = graphicKey;
        var moveAnimation = this._moveAnimation = this.determineAnimation(axisModel, axisPointerModel);
        if (!group) {
            group = this._group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
            this.createPointerEl(group, elOption, axisModel, axisPointerModel);
            this.createLabelEl(group, elOption, axisModel, axisPointerModel);
            api.getZr().add(group);
        } else {
            var doUpdateProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.curry(updateProps, axisPointerModel, moveAnimation);
            this.updatePointerEl(group, elOption, doUpdateProps);
            this.updateLabelEl(group, elOption, doUpdateProps, axisPointerModel);
        }
        updateMandatoryProps(group, axisPointerModel, true);
        this._renderHandle(value);
    };
    /**
   * @implement
   */ BaseAxisPointer.prototype.remove = function(api) {
        this.clear(api);
    };
    /**
   * @implement
   */ BaseAxisPointer.prototype.dispose = function(api) {
        this.clear(api);
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.determineAnimation = function(axisModel, axisPointerModel) {
        var animation = axisPointerModel.get('animation');
        var axis = axisModel.axis;
        var isCategoryAxis = axis.type === 'category';
        var useSnap = axisPointerModel.get('snap');
        // Value axis without snap always do not snap.
        if (!useSnap && !isCategoryAxis) {
            return false;
        }
        if (animation === 'auto' || animation == null) {
            var animationThreshold = this.animationThreshold;
            if (isCategoryAxis && axis.getBandWidth() > animationThreshold) {
                return true;
            }
            // It is important to auto animation when snap used. Consider if there is
            // a dataZoom, animation will be disabled when too many points exist, while
            // it will be enabled for better visual effect when little points exist.
            if (useSnap) {
                var seriesDataCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getAxisInfo(axisModel).seriesDataCount;
                var axisExtent = axis.getExtent();
                // Approximate band width
                return Math.abs(axisExtent[0] - axisExtent[1]) / seriesDataCount > animationThreshold;
            }
            return false;
        }
        return animation === true;
    };
    /**
   * add {pointer, label, graphicKey} to elOption
   * @protected
   */ BaseAxisPointer.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
    // Should be implemenented by sub-class.
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.createPointerEl = function(group, elOption, axisModel, axisPointerModel) {
        var pointerOption = elOption.pointer;
        if (pointerOption) {
            var pointerEl = inner(group).pointerEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[pointerOption.type](clone(elOption.pointer));
            group.add(pointerEl);
        }
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.createLabelEl = function(group, elOption, axisModel, axisPointerModel) {
        if (elOption.label) {
            var labelEl = inner(group).labelEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Text(clone(elOption.label));
            group.add(labelEl);
            updateLabelShowHide(labelEl, axisPointerModel);
        }
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.updatePointerEl = function(group, elOption, updateProps) {
        var pointerEl = inner(group).pointerEl;
        if (pointerEl && elOption.pointer) {
            pointerEl.setStyle(elOption.pointer.style);
            updateProps(pointerEl, {
                shape: elOption.pointer.shape
            });
        }
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.updateLabelEl = function(group, elOption, updateProps, axisPointerModel) {
        var labelEl = inner(group).labelEl;
        if (labelEl) {
            labelEl.setStyle(elOption.label.style);
            updateProps(labelEl, {
                // Consider text length change in vertical axis, animation should
                // be used on shape, otherwise the effect will be weird.
                // TODOTODO
                // shape: elOption.label.shape,
                x: elOption.label.x,
                y: elOption.label.y
            });
            updateLabelShowHide(labelEl, axisPointerModel);
        }
    };
    /**
   * @private
   */ BaseAxisPointer.prototype._renderHandle = function(value) {
        if (this._dragging || !this.updateHandleTransform) {
            return;
        }
        var axisPointerModel = this._axisPointerModel;
        var zr = this._api.getZr();
        var handle = this._handle;
        var handleModel = axisPointerModel.getModel('handle');
        var status = axisPointerModel.get('status');
        if (!handleModel.get('show') || !status || status === 'hide') {
            handle && zr.remove(handle);
            this._handle = null;
            return;
        }
        var isInit;
        if (!this._handle) {
            isInit = true;
            handle = this._handle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createIcon(handleModel.get('icon'), {
                cursor: 'move',
                draggable: true,
                onmousemove: function(e) {
                    // For mobile device, prevent screen slider on the button.
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.stop(e.event);
                },
                onmousedown: bind(this._onHandleDragMove, this, 0, 0),
                drift: bind(this._onHandleDragMove, this),
                ondragend: bind(this._onHandleDragEnd, this)
            });
            zr.add(handle);
        }
        updateMandatoryProps(handle, axisPointerModel, false);
        // update style
        handle.setStyle(handleModel.getItemStyle(null, [
            'color',
            'borderColor',
            'borderWidth',
            'opacity',
            'shadowColor',
            'shadowBlur',
            'shadowOffsetX',
            'shadowOffsetY'
        ]));
        // update position
        var handleSize = handleModel.get('size');
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isArray(handleSize)) {
            handleSize = [
                handleSize,
                handleSize
            ];
        }
        handle.scaleX = handleSize[0] / 2;
        handle.scaleY = handleSize[1] / 2;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createOrUpdate(this, '_doDispatchAxisPointer', handleModel.get('throttle') || 0, 'fixRate');
        this._moveHandleToValue(value, isInit);
    };
    BaseAxisPointer.prototype._moveHandleToValue = function(value, isInit) {
        updateProps(this._axisPointerModel, !isInit && this._moveAnimation, this._handle, getHandleTransProps(this.getHandleTransform(value, this._axisModel, this._axisPointerModel)));
    };
    BaseAxisPointer.prototype._onHandleDragMove = function(dx, dy) {
        var handle = this._handle;
        if (!handle) {
            return;
        }
        this._dragging = true;
        // Persistent for throttle.
        var trans = this.updateHandleTransform(getHandleTransProps(handle), [
            dx,
            dy
        ], this._axisModel, this._axisPointerModel);
        this._payloadInfo = trans;
        handle.stopAnimation();
        handle.attr(getHandleTransProps(trans));
        inner(handle).lastProp = null;
        this._doDispatchAxisPointer();
    };
    /**
   * Throttled method.
   */ BaseAxisPointer.prototype._doDispatchAxisPointer = function() {
        var handle = this._handle;
        if (!handle) {
            return;
        }
        var payloadInfo = this._payloadInfo;
        var axisModel = this._axisModel;
        this._api.dispatchAction({
            type: 'updateAxisPointer',
            x: payloadInfo.cursorPoint[0],
            y: payloadInfo.cursorPoint[1],
            tooltipOption: payloadInfo.tooltipOption,
            axesInfo: [
                {
                    axisDim: axisModel.axis.dim,
                    axisIndex: axisModel.componentIndex
                }
            ]
        });
    };
    BaseAxisPointer.prototype._onHandleDragEnd = function() {
        this._dragging = false;
        var handle = this._handle;
        if (!handle) {
            return;
        }
        var value = this._axisPointerModel.get('value');
        // Consider snap or categroy axis, handle may be not consistent with
        // axisPointer. So move handle to align the exact value position when
        // drag ended.
        this._moveHandleToValue(value);
        // For the effect: tooltip will be shown when finger holding on handle
        // button, and will be hidden after finger left handle button.
        this._api.dispatchAction({
            type: 'hideTip'
        });
    };
    /**
   * @private
   */ BaseAxisPointer.prototype.clear = function(api) {
        this._lastValue = null;
        this._lastStatus = null;
        var zr = api.getZr();
        var group = this._group;
        var handle = this._handle;
        if (zr && group) {
            this._lastGraphicKey = null;
            group && zr.remove(group);
            handle && zr.remove(handle);
            this._group = null;
            this._handle = null;
            this._payloadInfo = null;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.clear(this, '_doDispatchAxisPointer');
    };
    /**
   * @protected
   */ BaseAxisPointer.prototype.doClear = function() {
    // Implemented by sub-class if necessary.
    };
    BaseAxisPointer.prototype.buildLabel = function(xy, wh, xDimIndex) {
        xDimIndex = xDimIndex || 0;
        return {
            x: xy[xDimIndex],
            y: xy[1 - xDimIndex],
            width: wh[xDimIndex],
            height: wh[1 - xDimIndex]
        };
    };
    return BaseAxisPointer;
}();
function updateProps(animationModel, moveAnimation, el, props) {
    // Animation optimize.
    if (!propsEqual(inner(el).lastProp, props)) {
        inner(el).lastProp = props;
        moveAnimation ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.updateProps(el, props, animationModel) : (el.stopAnimation(), el.attr(props));
    }
}
function propsEqual(lastProps, newProps) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isObject(lastProps) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isObject(newProps)) {
        var equals_1 = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(newProps, function(item, key) {
            equals_1 = equals_1 && propsEqual(lastProps[key], item);
        });
        return !!equals_1;
    } else {
        return lastProps === newProps;
    }
}
function updateLabelShowHide(labelEl, axisPointerModel) {
    labelEl[axisPointerModel.get([
        'label',
        'show'
    ]) ? 'show' : 'hide']();
}
function getHandleTransProps(trans) {
    return {
        x: trans.x || 0,
        y: trans.y || 0,
        rotation: trans.rotation || 0
    };
}
function updateMandatoryProps(group, axisPointerModel, silent) {
    var z = axisPointerModel.get('z');
    var zlevel = axisPointerModel.get('zlevel');
    group && group.traverse(function(el) {
        if (el.type !== 'group') {
            z != null && (el.z = z);
            zlevel != null && (el.zlevel = zlevel);
            el.silent = silent;
        }
    });
}
const __TURBOPACK__default__export__ = BaseAxisPointer;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$BaseAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js [app-client] (ecmascript)");
;
;
;
;
var CartesianAxisPointer = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CartesianAxisPointer, _super);
    function CartesianAxisPointer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
   * @override
   */ CartesianAxisPointer.prototype.makeElOption = function(elOption, value, axisModel, axisPointerModel, api) {
        var axis = axisModel.axis;
        var grid = axis.grid;
        var axisPointerType = axisPointerModel.get('type');
        var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
        var pixelValue = axis.toGlobalCoord(axis.dataToCoord(value, true));
        if (axisPointerType && axisPointerType !== 'none') {
            var elStyle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.buildElStyle(axisPointerModel);
            var pointerOption = pointerShapeBuilder[axisPointerType](axis, pixelValue, otherExtent);
            pointerOption.style = elStyle;
            elOption.graphicKey = pointerOption.type;
            elOption.pointer = pointerOption;
        }
        var layoutInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.layout(grid.model, axisModel);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.buildCartesianSingleLabelElOption(// @ts-ignore
        value, elOption, layoutInfo, axisModel, axisPointerModel, api);
    };
    /**
   * @override
   */ CartesianAxisPointer.prototype.getHandleTransform = function(value, axisModel, axisPointerModel) {
        var layoutInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.layout(axisModel.axis.grid.model, axisModel, {
            labelInside: false
        });
        // @ts-ignore
        layoutInfo.labelMargin = axisPointerModel.get([
            'handle',
            'margin'
        ]);
        var pos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getTransformedPosition(axisModel.axis, value, layoutInfo);
        return {
            x: pos[0],
            y: pos[1],
            rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
        };
    };
    /**
   * @override
   */ CartesianAxisPointer.prototype.updateHandleTransform = function(transform, delta, axisModel, axisPointerModel) {
        var axis = axisModel.axis;
        var grid = axis.grid;
        var axisExtent = axis.getGlobalExtent(true);
        var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
        var dimIndex = axis.dim === 'x' ? 0 : 1;
        var currPosition = [
            transform.x,
            transform.y
        ];
        currPosition[dimIndex] += delta[dimIndex];
        currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
        currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
        var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
        var cursorPoint = [
            cursorOtherValue,
            cursorOtherValue
        ];
        cursorPoint[dimIndex] = currPosition[dimIndex];
        // Make tooltip do not overlap axisPointer and in the middle of the grid.
        var tooltipOptions = [
            {
                verticalAlign: 'middle'
            },
            {
                align: 'center'
            }
        ];
        return {
            x: currPosition[0],
            y: currPosition[1],
            rotation: transform.rotation,
            cursorPoint: cursorPoint,
            tooltipOption: tooltipOptions[dimIndex]
        };
    };
    return CartesianAxisPointer;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$BaseAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function getCartesian(grid, axis) {
    var opt = {};
    opt[axis.dim + 'AxisIndex'] = axis.index;
    return grid.getCartesian(opt);
}
var pointerShapeBuilder = {
    line: function(axis, pixelValue, otherExtent) {
        var targetShape = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeLineShape([
            pixelValue,
            otherExtent[0]
        ], [
            pixelValue,
            otherExtent[1]
        ], getAxisDimIndex(axis));
        return {
            type: 'Line',
            subPixelOptimize: true,
            shape: targetShape
        };
    },
    shadow: function(axis, pixelValue, otherExtent) {
        var bandWidth = Math.max(1, axis.getBandWidth());
        var span = otherExtent[1] - otherExtent[0];
        return {
            type: 'Rect',
            shape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeRectShape([
                pixelValue - bandWidth / 2,
                otherExtent[0]
            ], [
                bandWidth,
                span
            ], getAxisDimIndex(axis))
        };
    }
};
function getAxisDimIndex(axis) {
    return axis.dim === 'x' ? 0 : 1;
}
const __TURBOPACK__default__export__ = CartesianAxisPointer;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
var AxisPointerModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AxisPointerModel, _super);
    function AxisPointerModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AxisPointerModel.type;
        return _this;
    }
    AxisPointerModel.type = 'axisPointer';
    AxisPointerModel.defaultOption = {
        // 'auto' means that show when triggered by tooltip or handle.
        show: 'auto',
        // zlevel: 0,
        z: 50,
        type: 'line',
        // axispointer triggered by tootip determine snap automatically,
        // see `modelHelper`.
        snap: false,
        triggerTooltip: true,
        triggerEmphasis: true,
        value: null,
        status: null,
        link: [],
        // Do not set 'auto' here, otherwise global animation: false
        // will not effect at this axispointer.
        animation: null,
        animationDurationUpdate: 200,
        lineStyle: {
            color: '#B9BEC9',
            width: 1,
            type: 'dashed'
        },
        shadowStyle: {
            color: 'rgba(210,219,238,0.2)'
        },
        label: {
            show: true,
            formatter: null,
            precision: 'auto',
            margin: 3,
            color: '#fff',
            padding: [
                5,
                7,
                5,
                7
            ],
            backgroundColor: 'auto',
            borderColor: null,
            borderWidth: 0,
            borderRadius: 3
        },
        handle: {
            show: false,
            // eslint-disable-next-line
            icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
            size: 45,
            // handle margin is from symbol center to axis, which is stable when circular move.
            margin: 50,
            // color: '#1b8bbd'
            // color: '#2f4554'
            color: '#333',
            shadowBlur: 3,
            shadowColor: '#aaa',
            shadowOffsetX: 0,
            shadowOffsetY: 2,
            // For mobile performance
            throttle: 40
        }
    };
    return AxisPointerModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = AxisPointerModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/globalListener.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "register": (()=>register),
    "unregister": (()=>unregister)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/env.js [app-client] (ecmascript)");
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each;
function register(key, api, handler) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node) {
        return;
    }
    var zr = api.getZr();
    inner(zr).records || (inner(zr).records = {});
    initGlobalListeners(zr, api);
    var record = inner(zr).records[key] || (inner(zr).records[key] = {});
    record.handler = handler;
}
function initGlobalListeners(zr, api) {
    if (inner(zr).initialized) {
        return;
    }
    inner(zr).initialized = true;
    useHandler('click', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.curry(doEnter, 'click'));
    useHandler('mousemove', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.curry(doEnter, 'mousemove'));
    // useHandler('mouseout', onLeave);
    useHandler('globalout', onLeave);
    function useHandler(eventType, cb) {
        zr.on(eventType, function(e) {
            var dis = makeDispatchAction(api);
            each(inner(zr).records, function(record) {
                record && cb(record, e, dis.dispatchAction);
            });
            dispatchTooltipFinally(dis.pendings, api);
        });
    }
}
function dispatchTooltipFinally(pendings, api) {
    var showLen = pendings.showTip.length;
    var hideLen = pendings.hideTip.length;
    var actuallyPayload;
    if (showLen) {
        actuallyPayload = pendings.showTip[showLen - 1];
    } else if (hideLen) {
        actuallyPayload = pendings.hideTip[hideLen - 1];
    }
    if (actuallyPayload) {
        actuallyPayload.dispatchAction = null;
        api.dispatchAction(actuallyPayload);
    }
}
function onLeave(record, e, dispatchAction) {
    record.handler('leave', null, dispatchAction);
}
function doEnter(currTrigger, record, e, dispatchAction) {
    record.handler(currTrigger, e, dispatchAction);
}
function makeDispatchAction(api) {
    var pendings = {
        showTip: [],
        hideTip: []
    };
    // FIXME
    // better approach?
    // 'showTip' and 'hideTip' can be triggered by axisPointer and tooltip,
    // which may be conflict, (axisPointer call showTip but tooltip call hideTip);
    // So we have to add "final stage" to merge those dispatched actions.
    var dispatchAction = function(payload) {
        var pendingList = pendings[payload.type];
        if (pendingList) {
            pendingList.push(payload);
        } else {
            payload.dispatchAction = dispatchAction;
            api.dispatchAction(payload);
        }
    };
    return {
        dispatchAction: dispatchAction,
        pendings: pendings
    };
}
function unregister(key, api) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node) {
        return;
    }
    var zr = api.getZr();
    var record = (inner(zr).records || {})[key];
    if (record) {
        inner(zr).records[key] = null;
    }
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/AxisPointerView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/globalListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
;
;
;
var AxisPointerView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AxisPointerView, _super);
    function AxisPointerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = AxisPointerView.type;
        return _this;
    }
    AxisPointerView.prototype.render = function(globalAxisPointerModel, ecModel, api) {
        var globalTooltipModel = ecModel.getComponent('tooltip');
        var triggerOn = globalAxisPointerModel.get('triggerOn') || globalTooltipModel && globalTooltipModel.get('triggerOn') || 'mousemove|click';
        // Register global listener in AxisPointerView to enable
        // AxisPointerView to be independent to Tooltip.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.register('axisPointer', api, function(currTrigger, e, dispatchAction) {
            // If 'none', it is not controlled by mouse totally.
            if (triggerOn !== 'none' && (currTrigger === 'leave' || triggerOn.indexOf(currTrigger) >= 0)) {
                dispatchAction({
                    type: 'updateAxisPointer',
                    currTrigger: currTrigger,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                });
            }
        });
    };
    AxisPointerView.prototype.remove = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.unregister('axisPointer', api);
    };
    AxisPointerView.prototype.dispose = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.unregister('axisPointer', api);
    };
    AxisPointerView.type = 'axisPointer';
    return AxisPointerView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = AxisPointerView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>findPointFromSeries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
function findPointFromSeries(finder, ecModel) {
    var point = [];
    var seriesIndex = finder.seriesIndex;
    var seriesModel;
    if (seriesIndex == null || !(seriesModel = ecModel.getSeriesByIndex(seriesIndex))) {
        return {
            point: []
        };
    }
    var data = seriesModel.getData();
    var dataIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.queryDataIndex(data, finder);
    if (dataIndex == null || dataIndex < 0 || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isArray(dataIndex)) {
        return {
            point: []
        };
    }
    var el = data.getItemGraphicEl(dataIndex);
    var coordSys = seriesModel.coordinateSystem;
    if (seriesModel.getTooltipPosition) {
        point = seriesModel.getTooltipPosition(dataIndex) || [];
    } else if (coordSys && coordSys.dataToPoint) {
        if (finder.isStacked) {
            var baseAxis = coordSys.getBaseAxis();
            var valueAxis = coordSys.getOtherAxis(baseAxis);
            var valueAxisDim = valueAxis.dim;
            var baseAxisDim = baseAxis.dim;
            var baseDataOffset = valueAxisDim === 'x' || valueAxisDim === 'radius' ? 1 : 0;
            var baseDim = data.mapDimension(baseAxisDim);
            var stackedData = [];
            stackedData[baseDataOffset] = data.get(baseDim, dataIndex);
            stackedData[1 - baseDataOffset] = data.get(data.getCalculationInfo('stackResultDimension'), dataIndex);
            point = coordSys.dataToPoint(stackedData) || [];
        } else {
            point = coordSys.dataToPoint(data.getValues(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(coordSys.dimensions, function(dim) {
                return data.mapDimension(dim);
            }), dataIndex)) || [];
        }
    } else if (el) {
        // Use graphic bounding rect
        var rect = el.getBoundingRect().clone();
        rect.applyTransform(el.transform);
        point = [
            rect.x + rect.width / 2,
            rect.y + rect.height / 2
        ];
    }
    return {
        point: point,
        el: el
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/axisTrigger.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>axisTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$findPointFromSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-client] (ecmascript)");
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function axisTrigger(payload, ecModel, api) {
    var currTrigger = payload.currTrigger;
    var point = [
        payload.x,
        payload.y
    ];
    var finder = payload;
    var dispatchAction = payload.dispatchAction || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(api.dispatchAction, api);
    var coordSysAxesInfo = ecModel.getComponent('axisPointer').coordSysAxesInfo;
    // Pending
    // See #6121. But we are not able to reproduce it yet.
    if (!coordSysAxesInfo) {
        return;
    }
    if (illegalPoint(point)) {
        // Used in the default behavior of `connection`: use the sample seriesIndex
        // and dataIndex. And also used in the tooltipView trigger.
        point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$findPointFromSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            seriesIndex: finder.seriesIndex,
            // Do not use dataIndexInside from other ec instance.
            // FIXME: auto detect it?
            dataIndex: finder.dataIndex
        }, ecModel).point;
    }
    var isIllegalPoint = illegalPoint(point);
    // Axis and value can be specified when calling dispatchAction({type: 'updateAxisPointer'}).
    // Notice: In this case, it is difficult to get the `point` (which is necessary to show
    // tooltip, so if point is not given, we just use the point found by sample seriesIndex
    // and dataIndex.
    var inputAxesInfo = finder.axesInfo;
    var axesInfo = coordSysAxesInfo.axesInfo;
    var shouldHide = currTrigger === 'leave' || illegalPoint(point);
    var outputPayload = {};
    var showValueMap = {};
    var dataByCoordSys = {
        list: [],
        map: {}
    };
    var updaters = {
        showPointer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(showPointer, showValueMap),
        showTooltip: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(showTooltip, dataByCoordSys)
    };
    // Process for triggered axes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(coordSysAxesInfo.coordSysMap, function(coordSys, coordSysKey) {
        // If a point given, it must be contained by the coordinate system.
        var coordSysContainsPoint = isIllegalPoint || coordSys.containPoint(point);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(coordSysAxesInfo.coordSysAxesInfo[coordSysKey], function(axisInfo, key) {
            var axis = axisInfo.axis;
            var inputAxisInfo = findInputAxisInfo(inputAxesInfo, axisInfo);
            // If no inputAxesInfo, no axis is restricted.
            if (!shouldHide && coordSysContainsPoint && (!inputAxesInfo || inputAxisInfo)) {
                var val = inputAxisInfo && inputAxisInfo.value;
                if (val == null && !isIllegalPoint) {
                    val = axis.pointToData(point);
                }
                val != null && processOnAxis(axisInfo, val, updaters, false, outputPayload);
            }
        });
    });
    // Process for linked axes.
    var linkTriggers = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesInfo, function(tarAxisInfo, tarKey) {
        var linkGroup = tarAxisInfo.linkGroup;
        // If axis has been triggered in the previous stage, it should not be triggered by link.
        if (linkGroup && !showValueMap[tarKey]) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(linkGroup.axesInfo, function(srcAxisInfo, srcKey) {
                var srcValItem = showValueMap[srcKey];
                // If srcValItem exist, source axis is triggered, so link to target axis.
                if (srcAxisInfo !== tarAxisInfo && srcValItem) {
                    var val = srcValItem.value;
                    linkGroup.mapper && (val = tarAxisInfo.axis.scale.parse(linkGroup.mapper(val, makeMapperParam(srcAxisInfo), makeMapperParam(tarAxisInfo))));
                    linkTriggers[tarAxisInfo.key] = val;
                }
            });
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(linkTriggers, function(val, tarKey) {
        processOnAxis(axesInfo[tarKey], val, updaters, true, outputPayload);
    });
    updateModelActually(showValueMap, axesInfo, outputPayload);
    dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction);
    dispatchHighDownActually(axesInfo, dispatchAction, api);
    return outputPayload;
}
function processOnAxis(axisInfo, newValue, updaters, noSnap, outputFinder) {
    var axis = axisInfo.axis;
    if (axis.scale.isBlank() || !axis.containData(newValue)) {
        return;
    }
    if (!axisInfo.involveSeries) {
        updaters.showPointer(axisInfo, newValue);
        return;
    }
    // Heavy calculation. So put it after axis.containData checking.
    var payloadInfo = buildPayloadsBySeries(newValue, axisInfo);
    var payloadBatch = payloadInfo.payloadBatch;
    var snapToValue = payloadInfo.snapToValue;
    // Fill content of event obj for echarts.connect.
    // By default use the first involved series data as a sample to connect.
    if (payloadBatch[0] && outputFinder.seriesIndex == null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(outputFinder, payloadBatch[0]);
    }
    // If no linkSource input, this process is for collecting link
    // target, where snap should not be accepted.
    if (!noSnap && axisInfo.snap) {
        if (axis.containData(snapToValue) && snapToValue != null) {
            newValue = snapToValue;
        }
    }
    updaters.showPointer(axisInfo, newValue, payloadBatch);
    // Tooltip should always be snapToValue, otherwise there will be
    // incorrect "axis value ~ series value" mapping displayed in tooltip.
    updaters.showTooltip(axisInfo, payloadInfo, snapToValue);
}
function buildPayloadsBySeries(value, axisInfo) {
    var axis = axisInfo.axis;
    var dim = axis.dim;
    var snapToValue = value;
    var payloadBatch = [];
    var minDist = Number.MAX_VALUE;
    var minDiff = -1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axisInfo.seriesModels, function(series, idx) {
        var dataDim = series.getData().mapDimensionsAll(dim);
        var seriesNestestValue;
        var dataIndices;
        if (series.getAxisTooltipData) {
            var result = series.getAxisTooltipData(dataDim, value, axis);
            dataIndices = result.dataIndices;
            seriesNestestValue = result.nestestValue;
        } else {
            dataIndices = series.getData().indicesOfNearest(dataDim[0], value, // Add a threshold to avoid find the wrong dataIndex
            // when data length is not same.
            // false,
            axis.type === 'category' ? 0.5 : null);
            if (!dataIndices.length) {
                return;
            }
            seriesNestestValue = series.getData().get(dataDim[0], dataIndices[0]);
        }
        if (seriesNestestValue == null || !isFinite(seriesNestestValue)) {
            return;
        }
        var diff = value - seriesNestestValue;
        var dist = Math.abs(diff);
        // Consider category case
        if (dist <= minDist) {
            if (dist < minDist || diff >= 0 && minDiff < 0) {
                minDist = dist;
                minDiff = diff;
                snapToValue = seriesNestestValue;
                payloadBatch.length = 0;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(dataIndices, function(dataIndex) {
                payloadBatch.push({
                    seriesIndex: series.seriesIndex,
                    dataIndexInside: dataIndex,
                    dataIndex: series.getData().getRawIndex(dataIndex)
                });
            });
        }
    });
    return {
        payloadBatch: payloadBatch,
        snapToValue: snapToValue
    };
}
function showPointer(showValueMap, axisInfo, value, payloadBatch) {
    showValueMap[axisInfo.key] = {
        value: value,
        payloadBatch: payloadBatch
    };
}
function showTooltip(dataByCoordSys, axisInfo, payloadInfo, value) {
    var payloadBatch = payloadInfo.payloadBatch;
    var axis = axisInfo.axis;
    var axisModel = axis.model;
    var axisPointerModel = axisInfo.axisPointerModel;
    // If no data, do not create anything in dataByCoordSys,
    // whose length will be used to judge whether dispatch action.
    if (!axisInfo.triggerTooltip || !payloadBatch.length) {
        return;
    }
    var coordSysModel = axisInfo.coordSys.model;
    var coordSysKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeKey(coordSysModel);
    var coordSysItem = dataByCoordSys.map[coordSysKey];
    if (!coordSysItem) {
        coordSysItem = dataByCoordSys.map[coordSysKey] = {
            coordSysId: coordSysModel.id,
            coordSysIndex: coordSysModel.componentIndex,
            coordSysType: coordSysModel.type,
            coordSysMainType: coordSysModel.mainType,
            dataByAxis: []
        };
        dataByCoordSys.list.push(coordSysItem);
    }
    coordSysItem.dataByAxis.push({
        axisDim: axis.dim,
        axisIndex: axisModel.componentIndex,
        axisType: axisModel.type,
        axisId: axisModel.id,
        value: value,
        // Caustion: viewHelper.getValueLabel is actually on "view stage", which
        // depends that all models have been updated. So it should not be performed
        // here. Considering axisPointerModel used here is volatile, which is hard
        // to be retrieve in TooltipView, we prepare parameters here.
        valueLabelOpt: {
            precision: axisPointerModel.get([
                'label',
                'precision'
            ]),
            formatter: axisPointerModel.get([
                'label',
                'formatter'
            ])
        },
        seriesDataIndices: payloadBatch.slice()
    });
}
function updateModelActually(showValueMap, axesInfo, outputPayload) {
    var outputAxesInfo = outputPayload.axesInfo = [];
    // Basic logic: If no 'show' required, 'hide' this axisPointer.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesInfo, function(axisInfo, key) {
        var option = axisInfo.axisPointerModel.option;
        var valItem = showValueMap[key];
        if (valItem) {
            !axisInfo.useHandle && (option.status = 'show');
            option.value = valItem.value;
            // For label formatter param and highlight.
            option.seriesDataIndices = (valItem.payloadBatch || []).slice();
        } else {
            // If hide, value still need to be set, consider
            // click legend to toggle axis blank.
            !axisInfo.useHandle && (option.status = 'hide');
        }
        // If status is 'hide', should be no info in payload.
        option.status === 'show' && outputAxesInfo.push({
            axisDim: axisInfo.axis.dim,
            axisIndex: axisInfo.axis.model.componentIndex,
            value: option.value
        });
    });
}
function dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction) {
    // Basic logic: If no showTip required, hideTip will be dispatched.
    if (illegalPoint(point) || !dataByCoordSys.list.length) {
        dispatchAction({
            type: 'hideTip'
        });
        return;
    }
    // In most case only one axis (or event one series is used). It is
    // convenient to fetch payload.seriesIndex and payload.dataIndex
    // directly. So put the first seriesIndex and dataIndex of the first
    // axis on the payload.
    var sampleItem = ((dataByCoordSys.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    dispatchAction({
        type: 'showTip',
        escapeConnect: true,
        x: point[0],
        y: point[1],
        tooltipOption: payload.tooltipOption,
        position: payload.position,
        dataIndexInside: sampleItem.dataIndexInside,
        dataIndex: sampleItem.dataIndex,
        seriesIndex: sampleItem.seriesIndex,
        dataByCoordSys: dataByCoordSys.list
    });
}
function dispatchHighDownActually(axesInfo, dispatchAction, api) {
    // FIXME
    // highlight status modification should be a stage of main process?
    // (Consider confilct (e.g., legend and axisPointer) and setOption)
    var zr = api.getZr();
    var highDownKey = 'axisPointerLastHighlights';
    var lastHighlights = inner(zr)[highDownKey] || {};
    var newHighlights = inner(zr)[highDownKey] = {};
    // Update highlight/downplay status according to axisPointer model.
    // Build hash map and remove duplicate incidentally.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axesInfo, function(axisInfo, key) {
        var option = axisInfo.axisPointerModel.option;
        option.status === 'show' && axisInfo.triggerEmphasis && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(option.seriesDataIndices, function(batchItem) {
            var key = batchItem.seriesIndex + ' | ' + batchItem.dataIndex;
            newHighlights[key] = batchItem;
        });
    });
    // Diff.
    var toHighlight = [];
    var toDownplay = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(lastHighlights, function(batchItem, key) {
        !newHighlights[key] && toDownplay.push(batchItem);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(newHighlights, function(batchItem, key) {
        !lastHighlights[key] && toHighlight.push(batchItem);
    });
    toDownplay.length && api.dispatchAction({
        type: 'downplay',
        escapeConnect: true,
        // Not blur others when highlight in axisPointer.
        notBlur: true,
        batch: toDownplay
    });
    toHighlight.length && api.dispatchAction({
        type: 'highlight',
        escapeConnect: true,
        // Not blur others when highlight in axisPointer.
        notBlur: true,
        batch: toHighlight
    });
}
function findInputAxisInfo(inputAxesInfo, axisInfo) {
    for(var i = 0; i < (inputAxesInfo || []).length; i++){
        var inputAxisInfo = inputAxesInfo[i];
        if (axisInfo.axis.dim === inputAxisInfo.axisDim && axisInfo.axis.model.componentIndex === inputAxisInfo.axisIndex) {
            return inputAxisInfo;
        }
    }
}
function makeMapperParam(axisInfo) {
    var axisModel = axisInfo.axis.model;
    var item = {};
    var dim = item.axisDim = axisInfo.axis.dim;
    item.axisIndex = item[dim + 'AxisIndex'] = axisModel.componentIndex;
    item.axisName = item[dim + 'AxisName'] = axisModel.name;
    item.axisId = item[dim + 'AxisId'] = axisModel.id;
    return item;
}
function illegalPoint(point) {
    return !point || point[0] == null || isNaN(point[0]) || point[1] == null || isNaN(point[1]);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/install.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$CartesianAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$AxisPointerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$AxisPointerView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/AxisPointerView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$axisTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/axisTrigger.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function install(registers) {
    // CartesianAxisPointer is not supposed to be required here. But consider
    // echarts.simple.js and online build tooltip, which only require gridSimple,
    // CartesianAxisPointer should be able to required somewhere.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].registerAxisPointerClass('CartesianAxisPointer', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$CartesianAxisPointer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$AxisPointerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$AxisPointerView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerPreprocessor(function(option) {
        // Always has a global axisPointerModel for default setting.
        if (option) {
            (!option.axisPointer || option.axisPointer.length === 0) && (option.axisPointer = {});
            var link = option.axisPointer.link;
            // Normalize to array to avoid object mergin. But if link
            // is not set, remain null/undefined, otherwise it will
            // override existent link setting.
            if (link && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(link)) {
                option.axisPointer.link = [
                    link
                ];
            }
        }
    });
    // This process should proformed after coordinate systems created
    // and series data processed. So put it on statistic processing stage.
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, function(ecModel, api) {
        // Build axisPointerModel, mergin tooltip.axisPointer model for each axis.
        // allAxesInfo should be updated when setOption performed.
        ecModel.getComponent('axisPointer').coordSysAxesInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$modelHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collect"])(ecModel, api);
    });
    // Broadcast to all views.
    registers.registerAction({
        type: 'updateAxisPointer',
        event: 'updateAxisPointer',
        update: ':updateAxisPointer'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$axisTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/TooltipModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
var TooltipModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TooltipModel, _super);
    function TooltipModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TooltipModel.type;
        return _this;
    }
    TooltipModel.type = 'tooltip';
    TooltipModel.dependencies = [
        'axisPointer'
    ];
    TooltipModel.defaultOption = {
        // zlevel: 0,
        z: 60,
        show: true,
        // tooltip main content
        showContent: true,
        // 'trigger' only works on coordinate system.
        // 'item' | 'axis' | 'none'
        trigger: 'item',
        // 'click' | 'mousemove' | 'none'
        triggerOn: 'mousemove|click',
        alwaysShowContent: false,
        displayMode: 'single',
        renderMode: 'auto',
        // whether restraint content inside viewRect.
        // If renderMode: 'richText', default true.
        // If renderMode: 'html', defaut false (for backward compat).
        confine: null,
        showDelay: 0,
        hideDelay: 100,
        // Animation transition time, unit is second
        transitionDuration: 0.4,
        enterable: false,
        backgroundColor: '#fff',
        // box shadow
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, .2)',
        shadowOffsetX: 1,
        shadowOffsetY: 2,
        // tooltip border radius, unit is px, default is 4
        borderRadius: 4,
        // tooltip border width, unit is px, default is 0 (no border)
        borderWidth: 1,
        // Tooltip inside padding, default is 5 for all direction
        // Array is allowed to set up, right, bottom, left, same with css
        // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
        padding: null,
        // Extra css text
        extraCssText: '',
        // axis indicator, trigger by axis
        axisPointer: {
            // default is line
            // legal values: 'line' | 'shadow' | 'cross'
            type: 'line',
            // Valid when type is line, appoint tooltip line locate on which line. Optional
            // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
            // default is 'auto', chose the axis which type is category.
            // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
            axis: 'auto',
            animation: 'auto',
            animationDurationUpdate: 200,
            animationEasingUpdate: 'exponentialOut',
            crossStyle: {
                color: '#999',
                width: 1,
                type: 'dashed',
                // TODO formatter
                textStyle: {}
            }
        },
        textStyle: {
            color: '#666',
            fontSize: 14
        }
    };
    return TooltipModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = TooltipModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/helper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "TRANSFORM_VENDOR": (()=>TRANSFORM_VENDOR),
    "TRANSITION_VENDOR": (()=>TRANSITION_VENDOR),
    "getComputedStyle": (()=>getComputedStyle),
    "shouldTooltipConfine": (()=>shouldTooltipConfine),
    "toCSSVendorPrefix": (()=>toCSSVendorPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
;
;
function shouldTooltipConfine(tooltipModel) {
    var confineOption = tooltipModel.get('confine');
    return confineOption != null ? !!confineOption : tooltipModel.get('renderMode') === 'richText';
}
function testStyle(styleProps) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].domSupported) {
        return;
    }
    var style = document.documentElement.style;
    for(var i = 0, len = styleProps.length; i < len; i++){
        if (styleProps[i] in style) {
            return styleProps[i];
        }
    }
}
var TRANSFORM_VENDOR = testStyle([
    'transform',
    'webkitTransform',
    'OTransform',
    'MozTransform',
    'msTransform'
]);
var TRANSITION_VENDOR = testStyle([
    'webkitTransition',
    'transition',
    'OTransition',
    'MozTransition',
    'msTransition'
]);
function toCSSVendorPrefix(styleVendor, styleProp) {
    if (!styleVendor) {
        return styleProp;
    }
    styleProp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toCamelCase"])(styleProp, true);
    var idx = styleVendor.indexOf(styleProp);
    styleVendor = idx === -1 ? styleProp : "-" + styleVendor.slice(0, idx) + "-" + styleProp;
    return styleVendor.toLowerCase();
}
function getComputedStyle(el, style) {
    var stl = el.currentStyle || document.defaultView && document.defaultView.getComputedStyle(el);
    return stl ? style ? stl[style] : stl : null;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/event.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/dom.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
/* global document, window */ var CSS_TRANSITION_VENDOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCSSVendorPrefix"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSITION_VENDOR"], 'transition');
var CSS_TRANSFORM_VENDOR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toCSSVendorPrefix"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFORM_VENDOR"], 'transform');
// eslint-disable-next-line
var gCssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].transform3dSupported ? 'will-change:transform;' : '');
function mirrorPos(pos) {
    pos = pos === 'left' ? 'right' : pos === 'right' ? 'left' : pos === 'top' ? 'bottom' : 'top';
    return pos;
}
function assembleArrow(tooltipModel, borderColor, arrowPosition) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(arrowPosition) || arrowPosition === 'inside') {
        return '';
    }
    var backgroundColor = tooltipModel.get('backgroundColor');
    var borderWidth = tooltipModel.get('borderWidth');
    borderColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(borderColor);
    var arrowPos = mirrorPos(arrowPosition);
    var arrowSize = Math.max(Math.round(borderWidth) * 1.5, 6);
    var positionStyle = '';
    var transformStyle = CSS_TRANSFORM_VENDOR + ':';
    var rotateDeg;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])([
        'left',
        'right'
    ], arrowPos) > -1) {
        positionStyle += 'top:50%';
        transformStyle += "translateY(-50%) rotate(" + (rotateDeg = arrowPos === 'left' ? -225 : -45) + "deg)";
    } else {
        positionStyle += 'left:50%';
        transformStyle += "translateX(-50%) rotate(" + (rotateDeg = arrowPos === 'top' ? 225 : 45) + "deg)";
    }
    var rotateRadian = rotateDeg * Math.PI / 180;
    var arrowWH = arrowSize + borderWidth;
    var rotatedWH = arrowWH * Math.abs(Math.cos(rotateRadian)) + arrowWH * Math.abs(Math.sin(rotateRadian));
    var arrowOffset = Math.round(((rotatedWH - Math.SQRT2 * borderWidth) / 2 + Math.SQRT2 * borderWidth - (rotatedWH - arrowWH) / 2) * 100) / 100;
    positionStyle += ";" + arrowPos + ":-" + arrowOffset + "px";
    var borderStyle = borderColor + " solid " + borderWidth + "px;";
    var styleCss = [
        "position:absolute;width:" + arrowSize + "px;height:" + arrowSize + "px;z-index:-1;",
        positionStyle + ";" + transformStyle + ";",
        "border-bottom:" + borderStyle,
        "border-right:" + borderStyle,
        "background-color:" + backgroundColor + ";"
    ];
    return "<div style=\"" + styleCss.join('') + "\"></div>";
}
function assembleTransition(duration, onlyFade) {
    var transitionCurve = 'cubic-bezier(0.23,1,0.32,1)';
    var transitionOption = " " + duration / 2 + "s " + transitionCurve;
    var transitionText = "opacity" + transitionOption + ",visibility" + transitionOption;
    if (!onlyFade) {
        transitionOption = " " + duration + "s " + transitionCurve;
        transitionText += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].transformSupported ? "," + CSS_TRANSFORM_VENDOR + transitionOption : ",left" + transitionOption + ",top" + transitionOption;
    }
    return CSS_TRANSITION_VENDOR + ':' + transitionText;
}
function assembleTransform(x, y, toString) {
    // If using float on style, the final width of the dom might
    // keep changing slightly while mouse move. So `toFixed(0)` them.
    var x0 = x.toFixed(0) + 'px';
    var y0 = y.toFixed(0) + 'px';
    // not support transform, use `left` and `top` instead.
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].transformSupported) {
        return toString ? "top:" + y0 + ";left:" + x0 + ";" : [
            [
                'top',
                y0
            ],
            [
                'left',
                x0
            ]
        ];
    }
    // support transform
    var is3d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].transform3dSupported;
    var translate = "translate" + (is3d ? '3d' : '') + "(" + x0 + "," + y0 + (is3d ? ',0' : '') + ")";
    return toString ? 'top:0;left:0;' + CSS_TRANSFORM_VENDOR + ':' + translate + ';' : [
        [
            'top',
            0
        ],
        [
            'left',
            0
        ],
        [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFORM_VENDOR"],
            translate
        ]
    ];
}
/**
 * @param {Object} textStyle
 * @return {string}
 * @inner
 */ function assembleFont(textStyleModel) {
    var cssText = [];
    var fontSize = textStyleModel.get('fontSize');
    var color = textStyleModel.getTextColor();
    color && cssText.push('color:' + color);
    cssText.push('font:' + textStyleModel.getFont());
    // @ts-ignore, leave it to the tooltip refactor.
    var lineHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(textStyleModel.get('lineHeight'), Math.round(fontSize * 3 / 2));
    fontSize && cssText.push('line-height:' + lineHeight + 'px');
    var shadowColor = textStyleModel.get('textShadowColor');
    var shadowBlur = textStyleModel.get('textShadowBlur') || 0;
    var shadowOffsetX = textStyleModel.get('textShadowOffsetX') || 0;
    var shadowOffsetY = textStyleModel.get('textShadowOffsetY') || 0;
    shadowColor && shadowBlur && cssText.push('text-shadow:' + shadowOffsetX + 'px ' + shadowOffsetY + 'px ' + shadowBlur + 'px ' + shadowColor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
        'decoration',
        'align'
    ], function(name) {
        var val = textStyleModel.get(name);
        val && cssText.push('text-' + name + ':' + val);
    });
    return cssText.join(';');
}
function assembleCssText(tooltipModel, enableTransition, onlyFade) {
    var cssText = [];
    var transitionDuration = tooltipModel.get('transitionDuration');
    var backgroundColor = tooltipModel.get('backgroundColor');
    var shadowBlur = tooltipModel.get('shadowBlur');
    var shadowColor = tooltipModel.get('shadowColor');
    var shadowOffsetX = tooltipModel.get('shadowOffsetX');
    var shadowOffsetY = tooltipModel.get('shadowOffsetY');
    var textStyleModel = tooltipModel.getModel('textStyle');
    var padding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingFromTooltipModel"])(tooltipModel, 'html');
    var boxShadow = shadowOffsetX + "px " + shadowOffsetY + "px " + shadowBlur + "px " + shadowColor;
    cssText.push('box-shadow:' + boxShadow);
    // Animation transition. Do not animate when transitionDuration is 0.
    enableTransition && transitionDuration && cssText.push(assembleTransition(transitionDuration, onlyFade));
    if (backgroundColor) {
        cssText.push('background-color:' + backgroundColor);
    }
    // Border style
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
        'width',
        'color',
        'radius'
    ], function(name) {
        var borderName = 'border-' + name;
        var camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toCamelCase"])(borderName);
        var val = tooltipModel.get(camelCase);
        val != null && cssText.push(borderName + ':' + val + (name === 'color' ? '' : 'px'));
    });
    // Text style
    cssText.push(assembleFont(textStyleModel));
    // Padding
    if (padding != null) {
        cssText.push('padding:' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeCssArray"])(padding).join('px ') + 'px');
    }
    return cssText.join(';') + ';';
}
// If not able to make, do not modify the input `out`.
function makeStyleCoord(out, zr, container, zrX, zrY) {
    var zrPainter = zr && zr.painter;
    if (container) {
        var zrViewportRoot = zrPainter && zrPainter.getViewportRoot();
        if (zrViewportRoot) {
            // Some APPs might use scale on body, so we support CSS transform here.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformLocalCoord"])(out, zrViewportRoot, container, zrX, zrY);
        }
    } else {
        out[0] = zrX;
        out[1] = zrY;
        // xy should be based on canvas root. But tooltipContent is
        // the sibling of canvas root. So padding of ec container
        // should be considered here.
        var viewportRootOffset = zrPainter && zrPainter.getViewportRootOffset();
        if (viewportRootOffset) {
            out[0] += viewportRootOffset.offsetLeft;
            out[1] += viewportRootOffset.offsetTop;
        }
    }
    out[2] = out[0] / zr.getWidth();
    out[3] = out[1] / zr.getHeight();
}
var TooltipHTMLContent = /** @class */ function() {
    function TooltipHTMLContent(api, opt) {
        this._show = false;
        this._styleCoord = [
            0,
            0,
            0,
            0
        ];
        this._enterable = true;
        this._alwaysShowContent = false;
        this._firstShow = true;
        this._longHide = true;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].wxa) {
            return null;
        }
        var el = document.createElement('div');
        // TODO: TYPE
        el.domBelongToZr = true;
        this.el = el;
        var zr = this._zr = api.getZr();
        var appendTo = opt.appendTo;
        var container = appendTo && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(appendTo) ? document.querySelector(appendTo) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDom"])(appendTo) ? appendTo : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(appendTo) && appendTo(api.getDom()));
        makeStyleCoord(this._styleCoord, zr, container, api.getWidth() / 2, api.getHeight() / 2);
        (container || api.getDom()).appendChild(el);
        this._api = api;
        this._container = container;
        // FIXME
        // Is it needed to trigger zr event manually if
        // the browser do not support `pointer-events: none`.
        var self = this;
        el.onmouseenter = function() {
            // clear the timeout in hideLater and keep showing tooltip
            if (self._enterable) {
                clearTimeout(self._hideTimeout);
                self._show = true;
            }
            self._inContent = true;
        };
        el.onmousemove = function(e) {
            e = e || window.event;
            if (!self._enterable) {
                // `pointer-events: none` is set to tooltip content div
                // if `enterable` is set as `false`, and `el.onmousemove`
                // can not be triggered. But in browser that do not
                // support `pointer-events`, we need to do this:
                // Try trigger zrender event to avoid mouse
                // in and out shape too frequently
                var handler = zr.handler;
                var zrViewportRoot = zr.painter.getViewportRoot();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["normalizeEvent"])(zrViewportRoot, e, true);
                handler.dispatch('mousemove', e);
            }
        };
        el.onmouseleave = function() {
            // set `_inContent` to `false` before `hideLater`
            self._inContent = false;
            if (self._enterable) {
                if (self._show) {
                    self.hideLater(self._hideDelay);
                }
            }
        };
    }
    /**
   * Update when tooltip is rendered
   */ TooltipHTMLContent.prototype.update = function(tooltipModel) {
        // FIXME
        // Move this logic to ec main?
        if (!this._container) {
            var container = this._api.getDom();
            var position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComputedStyle"])(container, 'position');
            var domStyle = container.style;
            if (domStyle.position !== 'absolute' && position !== 'absolute') {
                domStyle.position = 'relative';
            }
        }
        // move tooltip if chart resized
        var alwaysShowContent = tooltipModel.get('alwaysShowContent');
        alwaysShowContent && this._moveIfResized();
        // update alwaysShowContent
        this._alwaysShowContent = alwaysShowContent;
        // update className
        this.el.className = tooltipModel.get('className') || '';
    // Hide the tooltip
    // PENDING
    // this.hide();
    };
    TooltipHTMLContent.prototype.show = function(tooltipModel, nearPointColor) {
        clearTimeout(this._hideTimeout);
        clearTimeout(this._longHideTimeout);
        var el = this.el;
        var style = el.style;
        var styleCoord = this._styleCoord;
        if (!el.innerHTML) {
            style.display = 'none';
        } else {
            style.cssText = gCssText + assembleCssText(tooltipModel, !this._firstShow, this._longHide) + assembleTransform(styleCoord[0], styleCoord[1], true) + ("border-color:" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(nearPointColor) + ";") + (tooltipModel.get('extraCssText') || '') + (";pointer-events:" + (this._enterable ? 'auto' : 'none'));
        }
        this._show = true;
        this._firstShow = false;
        this._longHide = false;
    };
    TooltipHTMLContent.prototype.setContent = function(content, markers, tooltipModel, borderColor, arrowPosition) {
        var el = this.el;
        if (content == null) {
            el.innerHTML = '';
            return;
        }
        var arrow = '';
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(arrowPosition) && tooltipModel.get('trigger') === 'item' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldTooltipConfine"])(tooltipModel)) {
            arrow = assembleArrow(tooltipModel, borderColor, arrowPosition);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(content)) {
            el.innerHTML = content + arrow;
        } else if (content) {
            // Clear previous
            el.innerHTML = '';
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(content)) {
                content = [
                    content
                ];
            }
            for(var i = 0; i < content.length; i++){
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDom"])(content[i]) && content[i].parentNode !== el) {
                    el.appendChild(content[i]);
                }
            }
            // no arrow if empty
            if (arrow && el.childNodes.length) {
                // no need to create a new parent element, but it's not supported by IE 10 and older.
                // const arrowEl = document.createRange().createContextualFragment(arrow);
                var arrowEl = document.createElement('div');
                arrowEl.innerHTML = arrow;
                el.appendChild(arrowEl);
            }
        }
    };
    TooltipHTMLContent.prototype.setEnterable = function(enterable) {
        this._enterable = enterable;
    };
    TooltipHTMLContent.prototype.getSize = function() {
        var el = this.el;
        return el ? [
            el.offsetWidth,
            el.offsetHeight
        ] : [
            0,
            0
        ];
    };
    TooltipHTMLContent.prototype.moveTo = function(zrX, zrY) {
        if (!this.el) {
            return;
        }
        var styleCoord = this._styleCoord;
        makeStyleCoord(styleCoord, this._zr, this._container, zrX, zrY);
        if (styleCoord[0] != null && styleCoord[1] != null) {
            var style_1 = this.el.style;
            var transforms = assembleTransform(styleCoord[0], styleCoord[1]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(transforms, function(transform) {
                style_1[transform[0]] = transform[1];
            });
        }
    };
    /**
   * when `alwaysShowContent` is true,
   * move the tooltip after chart resized
   */ TooltipHTMLContent.prototype._moveIfResized = function() {
        // The ratio of left to width
        var ratioX = this._styleCoord[2];
        // The ratio of top to height
        var ratioY = this._styleCoord[3];
        this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
    };
    TooltipHTMLContent.prototype.hide = function() {
        var _this = this;
        var style = this.el.style;
        style.visibility = 'hidden';
        style.opacity = '0';
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].transform3dSupported && (style.willChange = '');
        this._show = false;
        this._longHideTimeout = setTimeout(function() {
            return _this._longHide = true;
        }, 500);
    };
    TooltipHTMLContent.prototype.hideLater = function(time) {
        if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
            if (time) {
                this._hideDelay = time;
                // Set show false to avoid invoke hideLater multiple times
                this._show = false;
                this._hideTimeout = setTimeout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(this.hide, this), time);
            } else {
                this.hide();
            }
        }
    };
    TooltipHTMLContent.prototype.isShow = function() {
        return this._show;
    };
    TooltipHTMLContent.prototype.dispose = function() {
        clearTimeout(this._hideTimeout);
        clearTimeout(this._longHideTimeout);
        var parentNode = this.el.parentNode;
        parentNode && parentNode.removeChild(this.el);
        this.el = this._container = null;
    };
    return TooltipHTMLContent;
}();
const __TURBOPACK__default__export__ = TooltipHTMLContent;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/TooltipRichContent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-client] (ecmascript)");
;
;
;
;
var TooltipRichContent = /** @class */ function() {
    function TooltipRichContent(api) {
        this._show = false;
        this._styleCoord = [
            0,
            0,
            0,
            0
        ];
        this._alwaysShowContent = false;
        this._enterable = true;
        this._zr = api.getZr();
        makeStyleCoord(this._styleCoord, this._zr, api.getWidth() / 2, api.getHeight() / 2);
    }
    /**
   * Update when tooltip is rendered
   */ TooltipRichContent.prototype.update = function(tooltipModel) {
        var alwaysShowContent = tooltipModel.get('alwaysShowContent');
        alwaysShowContent && this._moveIfResized();
        // update alwaysShowContent
        this._alwaysShowContent = alwaysShowContent;
    };
    TooltipRichContent.prototype.show = function() {
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
        }
        this.el.show();
        this._show = true;
    };
    /**
   * Set tooltip content
   */ TooltipRichContent.prototype.setContent = function(content, markupStyleCreator, tooltipModel, borderColor, arrowPosition) {
        var _this = this;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isObject(content)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["throwError"])(("TURBOPACK compile-time truthy", 1) ? 'Passing DOM nodes as content is not supported in richText tooltip!' : ("TURBOPACK unreachable", undefined));
        }
        if (this.el) {
            this._zr.remove(this.el);
        }
        var textStyleModel = tooltipModel.getModel('textStyle');
        this.el = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
            style: {
                rich: markupStyleCreator.richTextStyles,
                text: content,
                lineHeight: 22,
                borderWidth: 1,
                borderColor: borderColor,
                textShadowColor: textStyleModel.get('textShadowColor'),
                fill: tooltipModel.get([
                    'textStyle',
                    'color'
                ]),
                padding: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaddingFromTooltipModel"])(tooltipModel, 'richText'),
                verticalAlign: 'top',
                align: 'left'
            },
            z: tooltipModel.get('z')
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each([
            'backgroundColor',
            'borderRadius',
            'shadowColor',
            'shadowBlur',
            'shadowOffsetX',
            'shadowOffsetY'
        ], function(propName) {
            _this.el.style[propName] = tooltipModel.get(propName);
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each([
            'textShadowBlur',
            'textShadowOffsetX',
            'textShadowOffsetY'
        ], function(propName) {
            _this.el.style[propName] = textStyleModel.get(propName) || 0;
        });
        this._zr.add(this.el);
        var self = this;
        this.el.on('mouseover', function() {
            // clear the timeout in hideLater and keep showing tooltip
            if (self._enterable) {
                clearTimeout(self._hideTimeout);
                self._show = true;
            }
            self._inContent = true;
        });
        this.el.on('mouseout', function() {
            if (self._enterable) {
                if (self._show) {
                    self.hideLater(self._hideDelay);
                }
            }
            self._inContent = false;
        });
    };
    TooltipRichContent.prototype.setEnterable = function(enterable) {
        this._enterable = enterable;
    };
    TooltipRichContent.prototype.getSize = function() {
        var el = this.el;
        var bounding = this.el.getBoundingRect();
        // bounding rect does not include shadow. For renderMode richText,
        // if overflow, it will be cut. So calculate them accurately.
        var shadowOuterSize = calcShadowOuterSize(el.style);
        return [
            bounding.width + shadowOuterSize.left + shadowOuterSize.right,
            bounding.height + shadowOuterSize.top + shadowOuterSize.bottom
        ];
    };
    TooltipRichContent.prototype.moveTo = function(x, y) {
        var el = this.el;
        if (el) {
            var styleCoord = this._styleCoord;
            makeStyleCoord(styleCoord, this._zr, x, y);
            x = styleCoord[0];
            y = styleCoord[1];
            var style = el.style;
            var borderWidth = mathMaxWith0(style.borderWidth || 0);
            var shadowOuterSize = calcShadowOuterSize(style);
            // rich text x, y do not include border.
            el.x = x + borderWidth + shadowOuterSize.left;
            el.y = y + borderWidth + shadowOuterSize.top;
            el.markRedraw();
        }
    };
    /**
   * when `alwaysShowContent` is true,
   * move the tooltip after chart resized
   */ TooltipRichContent.prototype._moveIfResized = function() {
        // The ratio of left to width
        var ratioX = this._styleCoord[2];
        // The ratio of top to height
        var ratioY = this._styleCoord[3];
        this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
    };
    TooltipRichContent.prototype.hide = function() {
        if (this.el) {
            this.el.hide();
        }
        this._show = false;
    };
    TooltipRichContent.prototype.hideLater = function(time) {
        if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
            if (time) {
                this._hideDelay = time;
                // Set show false to avoid invoke hideLater multiple times
                this._show = false;
                this._hideTimeout = setTimeout(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bind(this.hide, this), time);
            } else {
                this.hide();
            }
        }
    };
    TooltipRichContent.prototype.isShow = function() {
        return this._show;
    };
    TooltipRichContent.prototype.dispose = function() {
        this._zr.remove(this.el);
    };
    return TooltipRichContent;
}();
function mathMaxWith0(val) {
    return Math.max(0, val);
}
function calcShadowOuterSize(style) {
    var shadowBlur = mathMaxWith0(style.shadowBlur || 0);
    var shadowOffsetX = mathMaxWith0(style.shadowOffsetX || 0);
    var shadowOffsetY = mathMaxWith0(style.shadowOffsetY || 0);
    return {
        left: mathMaxWith0(shadowBlur - shadowOffsetX),
        right: mathMaxWith0(shadowBlur + shadowOffsetX),
        top: mathMaxWith0(shadowBlur - shadowOffsetY),
        bottom: mathMaxWith0(shadowBlur + shadowOffsetY)
    };
}
function makeStyleCoord(out, zr, zrX, zrY) {
    out[0] = zrX;
    out[1] = zrY;
    out[2] = out[0] / zr.getWidth();
    out[3] = out[1] / zr.getHeight();
}
const __TURBOPACK__default__export__ = TooltipRichContent;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/TooltipView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipHTMLContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipRichContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/TooltipRichContent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/globalListener.js [app-client] (ecmascript)");
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$findPointFromSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/mixin/dataFormat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/dom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var proxyRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
    shape: {
        x: -1,
        y: -1,
        width: 2,
        height: 2
    }
});
var TooltipView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TooltipView, _super);
    function TooltipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TooltipView.type;
        return _this;
    }
    TooltipView.prototype.init = function(ecModel, api) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node || !api.getDom()) {
            return;
        }
        var tooltipModel = ecModel.getComponent('tooltip');
        var renderMode = this._renderMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTooltipRenderMode"])(tooltipModel.get('renderMode'));
        this._tooltipContent = renderMode === 'richText' ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipRichContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](api) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipHTMLContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](api, {
            appendTo: tooltipModel.get('appendToBody', true) ? 'body' : tooltipModel.get('appendTo', true)
        });
    };
    TooltipView.prototype.render = function(tooltipModel, ecModel, api) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node || !api.getDom()) {
            return;
        }
        // Reset
        this.group.removeAll();
        this._tooltipModel = tooltipModel;
        this._ecModel = ecModel;
        this._api = api;
        var tooltipContent = this._tooltipContent;
        tooltipContent.update(tooltipModel);
        tooltipContent.setEnterable(tooltipModel.get('enterable'));
        this._initGlobalListener();
        this._keepShow();
        // PENDING
        // `mousemove` event will be triggered very frequently when the mouse moves fast,
        // which causes that the `updatePosition` function was also called frequently.
        // In Chrome with devtools open and Firefox, tooltip looks laggy and shakes. See #14695 #16101
        // To avoid frequent triggering,
        // consider throttling it in 50ms when transition is enabled
        if (this._renderMode !== 'richText' && tooltipModel.get('transitionDuration')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrUpdate"])(this, '_updatePosition', 50, 'fixRate');
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clear"])(this, '_updatePosition');
        }
    };
    TooltipView.prototype._initGlobalListener = function() {
        var tooltipModel = this._tooltipModel;
        var triggerOn = tooltipModel.get('triggerOn');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.register('itemTooltip', this._api, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(function(currTrigger, e, dispatchAction) {
            // If 'none', it is not controlled by mouse totally.
            if (triggerOn !== 'none') {
                if (triggerOn.indexOf(currTrigger) >= 0) {
                    this._tryShow(e, dispatchAction);
                } else if (currTrigger === 'leave') {
                    this._hide(dispatchAction);
                }
            }
        }, this));
    };
    TooltipView.prototype._keepShow = function() {
        var tooltipModel = this._tooltipModel;
        var ecModel = this._ecModel;
        var api = this._api;
        var triggerOn = tooltipModel.get('triggerOn');
        // Try to keep the tooltip show when refreshing
        if (this._lastX != null && this._lastY != null && triggerOn !== 'none' && triggerOn !== 'click') {
            var self_1 = this;
            clearTimeout(this._refreshUpdateTimeout);
            this._refreshUpdateTimeout = setTimeout(function() {
                // Show tip next tick after other charts are rendered
                // In case highlight action has wrong result
                // FIXME
                !api.isDisposed() && self_1.manuallyShowTip(tooltipModel, ecModel, api, {
                    x: self_1._lastX,
                    y: self_1._lastY,
                    dataByCoordSys: self_1._lastDataByCoordSys
                });
            });
        }
    };
    /**
   * Show tip manually by
   * dispatchAction({
   *     type: 'showTip',
   *     x: 10,
   *     y: 10
   * });
   * Or
   * dispatchAction({
   *      type: 'showTip',
   *      seriesIndex: 0,
   *      dataIndex or dataIndexInside or name
   * });
   *
   *  TODO Batch
   */ TooltipView.prototype.manuallyShowTip = function(tooltipModel, ecModel, api, payload) {
        if (payload.from === this.uid || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node || !api.getDom()) {
            return;
        }
        var dispatchAction = makeDispatchAction(payload, api);
        // Reset ticket
        this._ticket = '';
        // When triggered from axisPointer.
        var dataByCoordSys = payload.dataByCoordSys;
        var cmptRef = findComponentReference(payload, ecModel, api);
        if (cmptRef) {
            var rect = cmptRef.el.getBoundingRect().clone();
            rect.applyTransform(cmptRef.el.transform);
            this._tryShow({
                offsetX: rect.x + rect.width / 2,
                offsetY: rect.y + rect.height / 2,
                target: cmptRef.el,
                position: payload.position,
                // When manully trigger, the mouse is not on the el, so we'd better to
                // position tooltip on the bottom of the el and display arrow is possible.
                positionDefault: 'bottom'
            }, dispatchAction);
        } else if (payload.tooltip && payload.x != null && payload.y != null) {
            var el = proxyRect;
            el.x = payload.x;
            el.y = payload.y;
            el.update();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el).tooltipConfig = {
                name: null,
                option: payload.tooltip
            };
            // Manually show tooltip while view is not using zrender elements.
            this._tryShow({
                offsetX: payload.x,
                offsetY: payload.y,
                target: el
            }, dispatchAction);
        } else if (dataByCoordSys) {
            this._tryShow({
                offsetX: payload.x,
                offsetY: payload.y,
                position: payload.position,
                dataByCoordSys: dataByCoordSys,
                tooltipOption: payload.tooltipOption
            }, dispatchAction);
        } else if (payload.seriesIndex != null) {
            if (this._manuallyAxisShowTip(tooltipModel, ecModel, api, payload)) {
                return;
            }
            var pointInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$findPointFromSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(payload, ecModel);
            var cx = pointInfo.point[0];
            var cy = pointInfo.point[1];
            if (cx != null && cy != null) {
                this._tryShow({
                    offsetX: cx,
                    offsetY: cy,
                    target: pointInfo.el,
                    position: payload.position,
                    // When manully trigger, the mouse is not on the el, so we'd better to
                    // position tooltip on the bottom of the el and display arrow is possible.
                    positionDefault: 'bottom'
                }, dispatchAction);
            }
        } else if (payload.x != null && payload.y != null) {
            // FIXME
            // should wrap dispatchAction like `axisPointer/globalListener` ?
            api.dispatchAction({
                type: 'updateAxisPointer',
                x: payload.x,
                y: payload.y
            });
            this._tryShow({
                offsetX: payload.x,
                offsetY: payload.y,
                position: payload.position,
                target: api.getZr().findHover(payload.x, payload.y).target
            }, dispatchAction);
        }
    };
    TooltipView.prototype.manuallyHideTip = function(tooltipModel, ecModel, api, payload) {
        var tooltipContent = this._tooltipContent;
        if (this._tooltipModel) {
            tooltipContent.hideLater(this._tooltipModel.get('hideDelay'));
        }
        this._lastX = this._lastY = this._lastDataByCoordSys = null;
        if (payload.from !== this.uid) {
            this._hide(makeDispatchAction(payload, api));
        }
    };
    // Be compatible with previous design, that is, when tooltip.type is 'axis' and
    // dispatchAction 'showTip' with seriesIndex and dataIndex will trigger axis pointer
    // and tooltip.
    TooltipView.prototype._manuallyAxisShowTip = function(tooltipModel, ecModel, api, payload) {
        var seriesIndex = payload.seriesIndex;
        var dataIndex = payload.dataIndex;
        // @ts-ignore
        var coordSysAxesInfo = ecModel.getComponent('axisPointer').coordSysAxesInfo;
        if (seriesIndex == null || dataIndex == null || coordSysAxesInfo == null) {
            return;
        }
        var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
        if (!seriesModel) {
            return;
        }
        var data = seriesModel.getData();
        var tooltipCascadedModel = buildTooltipModel([
            data.getItemModel(dataIndex),
            seriesModel,
            (seriesModel.coordinateSystem || {}).model
        ], this._tooltipModel);
        if (tooltipCascadedModel.get('trigger') !== 'axis') {
            return;
        }
        api.dispatchAction({
            type: 'updateAxisPointer',
            seriesIndex: seriesIndex,
            dataIndex: dataIndex,
            position: payload.position
        });
        return true;
    };
    TooltipView.prototype._tryShow = function(e, dispatchAction) {
        var el = e.target;
        var tooltipModel = this._tooltipModel;
        if (!tooltipModel) {
            return;
        }
        // Save mouse x, mouse y. So we can try to keep showing the tip if chart is refreshed
        this._lastX = e.offsetX;
        this._lastY = e.offsetY;
        var dataByCoordSys = e.dataByCoordSys;
        if (dataByCoordSys && dataByCoordSys.length) {
            this._showAxisTooltip(dataByCoordSys, e);
        } else if (el) {
            var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el);
            if (ecData.ssrType === 'legend') {
                // Don't trigger tooltip for legend tooltip item
                return;
            }
            this._lastDataByCoordSys = null;
            var seriesDispatcher_1;
            var cmptDispatcher_1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findEventDispatcher"])(el, function(target) {
                // Always show item tooltip if mouse is on the element with dataIndex
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(target).dataIndex != null) {
                    seriesDispatcher_1 = target;
                    return true;
                }
                // Tooltip provided directly. Like legend.
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(target).tooltipConfig != null) {
                    cmptDispatcher_1 = target;
                    return true;
                }
            }, true);
            if (seriesDispatcher_1) {
                this._showSeriesItemTooltip(e, seriesDispatcher_1, dispatchAction);
            } else if (cmptDispatcher_1) {
                this._showComponentItemTooltip(e, cmptDispatcher_1, dispatchAction);
            } else {
                this._hide(dispatchAction);
            }
        } else {
            this._lastDataByCoordSys = null;
            this._hide(dispatchAction);
        }
    };
    TooltipView.prototype._showOrMove = function(tooltipModel, cb) {
        // showDelay is used in this case: tooltip.enterable is set
        // as true. User intent to move mouse into tooltip and click
        // something. `showDelay` makes it easier to enter the content
        // but tooltip do not move immediately.
        var delay = tooltipModel.get('showDelay');
        cb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(cb, this);
        clearTimeout(this._showTimout);
        delay > 0 ? this._showTimout = setTimeout(cb, delay) : cb();
    };
    TooltipView.prototype._showAxisTooltip = function(dataByCoordSys, e) {
        var ecModel = this._ecModel;
        var globalTooltipModel = this._tooltipModel;
        var point = [
            e.offsetX,
            e.offsetY
        ];
        var singleTooltipModel = buildTooltipModel([
            e.tooltipOption
        ], globalTooltipModel);
        var renderMode = this._renderMode;
        var cbParamsList = [];
        var articleMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('section', {
            blocks: [],
            noHeader: true
        });
        // Only for legacy: `Serise['formatTooltip']` returns a string.
        var markupTextArrLegacy = [];
        var markupStyleCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipMarkupStyleCreator"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(dataByCoordSys, function(itemCoordSys) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(itemCoordSys.dataByAxis, function(axisItem) {
                var axisModel = ecModel.getComponent(axisItem.axisDim + 'Axis', axisItem.axisIndex);
                var axisValue = axisItem.value;
                if (!axisModel || axisValue == null) {
                    return;
                }
                var axisValueLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$viewHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getValueLabel(axisValue, axisModel.axis, ecModel, axisItem.seriesDataIndices, axisItem.valueLabelOpt);
                var axisSectionMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('section', {
                    header: axisValueLabel,
                    noHeader: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(axisValueLabel),
                    sortBlocks: true,
                    blocks: []
                });
                articleMarkup.blocks.push(axisSectionMarkup);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axisItem.seriesDataIndices, function(idxItem) {
                    var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
                    var dataIndex = idxItem.dataIndexInside;
                    var cbParams = series.getDataParams(dataIndex);
                    // Can't find data.
                    if (cbParams.dataIndex < 0) {
                        return;
                    }
                    cbParams.axisDim = axisItem.axisDim;
                    cbParams.axisIndex = axisItem.axisIndex;
                    cbParams.axisType = axisItem.axisType;
                    cbParams.axisId = axisItem.axisId;
                    cbParams.axisValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getAxisRawValue(axisModel.axis, {
                        value: axisValue
                    });
                    cbParams.axisValueLabel = axisValueLabel;
                    // Pre-create marker style for makers. Users can assemble richText
                    // text in `formatter` callback and use those markers style.
                    cbParams.marker = markupStyleCreator.makeTooltipMarker('item', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(cbParams.color), renderMode);
                    var seriesTooltipResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeTooltipFormatResult"])(series.formatTooltip(dataIndex, true, null));
                    var frag = seriesTooltipResult.frag;
                    if (frag) {
                        var valueFormatter = buildTooltipModel([
                            series
                        ], globalTooltipModel).get('valueFormatter');
                        axisSectionMarkup.blocks.push(valueFormatter ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
                            valueFormatter: valueFormatter
                        }, frag) : frag);
                    }
                    if (seriesTooltipResult.text) {
                        markupTextArrLegacy.push(seriesTooltipResult.text);
                    }
                    cbParamsList.push(cbParams);
                });
            });
        });
        // In most cases, the second axis is displays upper on the first one.
        // So we reverse it to look better.
        articleMarkup.blocks.reverse();
        markupTextArrLegacy.reverse();
        var positionExpr = e.position;
        var orderMode = singleTooltipModel.get('order');
        var builtMarkupText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTooltipMarkup"])(articleMarkup, markupStyleCreator, renderMode, orderMode, ecModel.get('useUTC'), singleTooltipModel.get('textStyle'));
        builtMarkupText && markupTextArrLegacy.unshift(builtMarkupText);
        var blockBreak = renderMode === 'richText' ? '\n\n' : '<br/>';
        var allMarkupText = markupTextArrLegacy.join(blockBreak);
        this._showOrMove(singleTooltipModel, function() {
            if (this._updateContentNotChangedOnAxis(dataByCoordSys, cbParamsList)) {
                this._updatePosition(singleTooltipModel, positionExpr, point[0], point[1], this._tooltipContent, cbParamsList);
            } else {
                this._showTooltipContent(singleTooltipModel, allMarkupText, cbParamsList, Math.random() + '', point[0], point[1], positionExpr, null, markupStyleCreator);
            }
        });
    // Do not trigger events here, because this branch only be entered
    // from dispatchAction.
    };
    TooltipView.prototype._showSeriesItemTooltip = function(e, dispatcher, dispatchAction) {
        var ecModel = this._ecModel;
        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(dispatcher);
        // Use dataModel in element if possible
        // Used when mouseover on a element like markPoint or edge
        // In which case, the data is not main data in series.
        var seriesIndex = ecData.seriesIndex;
        var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
        // For example, graph link.
        var dataModel = ecData.dataModel || seriesModel;
        var dataIndex = ecData.dataIndex;
        var dataType = ecData.dataType;
        var data = dataModel.getData(dataType);
        var renderMode = this._renderMode;
        var positionDefault = e.positionDefault;
        var tooltipModel = buildTooltipModel([
            data.getItemModel(dataIndex),
            dataModel,
            seriesModel && (seriesModel.coordinateSystem || {}).model
        ], this._tooltipModel, positionDefault ? {
            position: positionDefault
        } : null);
        var tooltipTrigger = tooltipModel.get('trigger');
        if (tooltipTrigger != null && tooltipTrigger !== 'item') {
            return;
        }
        var params = dataModel.getDataParams(dataIndex, dataType);
        var markupStyleCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipMarkupStyleCreator"]();
        // Pre-create marker style for makers. Users can assemble richText
        // text in `formatter` callback and use those markers style.
        params.marker = markupStyleCreator.makeTooltipMarker('item', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(params.color), renderMode);
        var seriesTooltipResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeTooltipFormatResult"])(dataModel.formatTooltip(dataIndex, false, dataType));
        var orderMode = tooltipModel.get('order');
        var valueFormatter = tooltipModel.get('valueFormatter');
        var frag = seriesTooltipResult.frag;
        var markupText = frag ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTooltipMarkup"])(valueFormatter ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
            valueFormatter: valueFormatter
        }, frag) : frag, markupStyleCreator, renderMode, orderMode, ecModel.get('useUTC'), tooltipModel.get('textStyle')) : seriesTooltipResult.text;
        var asyncTicket = 'item_' + dataModel.name + '_' + dataIndex;
        this._showOrMove(tooltipModel, function() {
            this._showTooltipContent(tooltipModel, markupText, params, asyncTicket, e.offsetX, e.offsetY, e.position, e.target, markupStyleCreator);
        });
        // FIXME
        // duplicated showtip if manuallyShowTip is called from dispatchAction.
        dispatchAction({
            type: 'showTip',
            dataIndexInside: dataIndex,
            dataIndex: data.getRawIndex(dataIndex),
            seriesIndex: seriesIndex,
            from: this.uid
        });
    };
    TooltipView.prototype._showComponentItemTooltip = function(e, el, dispatchAction) {
        var isHTMLRenderMode = this._renderMode === 'html';
        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el);
        var tooltipConfig = ecData.tooltipConfig;
        var tooltipOpt = tooltipConfig.option || {};
        var encodeHTMLContent = tooltipOpt.encodeHTMLContent;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(tooltipOpt)) {
            var content = tooltipOpt;
            tooltipOpt = {
                content: content,
                // Fixed formatter
                formatter: content
            };
            // when `tooltipConfig.option` is a string rather than an object,
            // we can't know if the content needs to be encoded
            // for the sake of security, encode it by default.
            encodeHTMLContent = true;
        }
        if (encodeHTMLContent && isHTMLRenderMode && tooltipOpt.content) {
            // clone might be unnecessary?
            tooltipOpt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(tooltipOpt);
            tooltipOpt.content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$dom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeHTML"])(tooltipOpt.content);
        }
        var tooltipModelCascade = [
            tooltipOpt
        ];
        var cmpt = this._ecModel.getComponent(ecData.componentMainType, ecData.componentIndex);
        if (cmpt) {
            tooltipModelCascade.push(cmpt);
        }
        // In most cases, component tooltip formatter has different params with series tooltip formatter,
        // so that they cannot share the same formatter. Since the global tooltip formatter is used for series
        // by convention, we do not use it as the default formatter for component.
        tooltipModelCascade.push({
            formatter: tooltipOpt.content
        });
        var positionDefault = e.positionDefault;
        var subTooltipModel = buildTooltipModel(tooltipModelCascade, this._tooltipModel, positionDefault ? {
            position: positionDefault
        } : null);
        var defaultHtml = subTooltipModel.get('content');
        var asyncTicket = Math.random() + '';
        // PENDING: this case do not support richText style yet.
        var markupStyleCreator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipMarkupStyleCreator"]();
        // Do not check whether `trigger` is 'none' here, because `trigger`
        // only works on coordinate system. In fact, we have not found case
        // that requires setting `trigger` nothing on component yet.
        this._showOrMove(subTooltipModel, function() {
            // Use formatterParams from element defined in component
            // Avoid users modify it.
            var formatterParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(subTooltipModel.get('formatterParams') || {});
            this._showTooltipContent(subTooltipModel, defaultHtml, formatterParams, asyncTicket, e.offsetX, e.offsetY, e.position, el, markupStyleCreator);
        });
        // If not dispatch showTip, tip may be hide triggered by axis.
        dispatchAction({
            type: 'showTip',
            from: this.uid
        });
    };
    TooltipView.prototype._showTooltipContent = function(// Use Model<TooltipOption> insteadof TooltipModel because this model may be from series or other options.
    // Instead of top level tooltip.
    tooltipModel, defaultHtml, params, asyncTicket, x, y, positionExpr, el, markupStyleCreator) {
        // Reset ticket
        this._ticket = '';
        if (!tooltipModel.get('showContent') || !tooltipModel.get('show')) {
            return;
        }
        var tooltipContent = this._tooltipContent;
        tooltipContent.setEnterable(tooltipModel.get('enterable'));
        var formatter = tooltipModel.get('formatter');
        positionExpr = positionExpr || tooltipModel.get('position');
        var html = defaultHtml;
        var nearPoint = this._getNearestPoint([
            x,
            y
        ], params, tooltipModel.get('trigger'), tooltipModel.get('borderColor'));
        var nearPointColor = nearPoint.color;
        if (formatter) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(formatter)) {
                var useUTC = tooltipModel.ecModel.get('useUTC');
                var params0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(params) ? params[0] : params;
                var isTimeAxis = params0 && params0.axisType && params0.axisType.indexOf('time') >= 0;
                html = formatter;
                if (isTimeAxis) {
                    html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["format"])(params0.axisValue, html, useUTC);
                }
                html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatTpl"])(html, params, true);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(formatter)) {
                var callback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(function(cbTicket, html) {
                    if (cbTicket === this._ticket) {
                        tooltipContent.setContent(html, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
                        this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
                    }
                }, this);
                this._ticket = asyncTicket;
                html = formatter(params, asyncTicket, callback);
            } else {
                html = formatter;
            }
        }
        tooltipContent.setContent(html, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
        tooltipContent.show(tooltipModel, nearPointColor);
        this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
    };
    TooltipView.prototype._getNearestPoint = function(point, tooltipDataParams, trigger, borderColor) {
        if (trigger === 'axis' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(tooltipDataParams)) {
            return {
                color: borderColor || (this._renderMode === 'html' ? '#fff' : 'none')
            };
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(tooltipDataParams)) {
            return {
                color: borderColor || tooltipDataParams.color || tooltipDataParams.borderColor
            };
        }
    };
    TooltipView.prototype._updatePosition = function(tooltipModel, positionExpr, x, // Mouse x
    y, // Mouse y
    content, params, el) {
        var viewWidth = this._api.getWidth();
        var viewHeight = this._api.getHeight();
        positionExpr = positionExpr || tooltipModel.get('position');
        var contentSize = content.getSize();
        var align = tooltipModel.get('align');
        var vAlign = tooltipModel.get('verticalAlign');
        var rect = el && el.getBoundingRect().clone();
        el && rect.applyTransform(el.transform);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(positionExpr)) {
            // Callback of position can be an array or a string specify the position
            positionExpr = positionExpr([
                x,
                y
            ], params, content.el, rect, {
                viewSize: [
                    viewWidth,
                    viewHeight
                ],
                contentSize: contentSize.slice()
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(positionExpr)) {
            x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(positionExpr[0], viewWidth);
            y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePercent"])(positionExpr[1], viewHeight);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(positionExpr)) {
            var boxLayoutPosition = positionExpr;
            boxLayoutPosition.width = contentSize[0];
            boxLayoutPosition.height = contentSize[1];
            var layoutRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])(boxLayoutPosition, {
                width: viewWidth,
                height: viewHeight
            });
            x = layoutRect.x;
            y = layoutRect.y;
            align = null;
            // When positionExpr is left/top/right/bottom,
            // align and verticalAlign will not work.
            vAlign = null;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(positionExpr) && el) {
            var pos = calcTooltipPosition(positionExpr, rect, contentSize, tooltipModel.get('borderWidth'));
            x = pos[0];
            y = pos[1];
        } else {
            var pos = refixTooltipPosition(x, y, content, viewWidth, viewHeight, align ? null : 20, vAlign ? null : 20);
            x = pos[0];
            y = pos[1];
        }
        align && (x -= isCenterAlign(align) ? contentSize[0] / 2 : align === 'right' ? contentSize[0] : 0);
        vAlign && (y -= isCenterAlign(vAlign) ? contentSize[1] / 2 : vAlign === 'bottom' ? contentSize[1] : 0);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldTooltipConfine"])(tooltipModel)) {
            var pos = confineTooltipPosition(x, y, content, viewWidth, viewHeight);
            x = pos[0];
            y = pos[1];
        }
        content.moveTo(x, y);
    };
    // FIXME
    // Should we remove this but leave this to user?
    TooltipView.prototype._updateContentNotChangedOnAxis = function(dataByCoordSys, cbParamsList) {
        var lastCoordSys = this._lastDataByCoordSys;
        var lastCbParamsList = this._cbParamsList;
        var contentNotChanged = !!lastCoordSys && lastCoordSys.length === dataByCoordSys.length;
        contentNotChanged && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(lastCoordSys, function(lastItemCoordSys, indexCoordSys) {
            var lastDataByAxis = lastItemCoordSys.dataByAxis || [];
            var thisItemCoordSys = dataByCoordSys[indexCoordSys] || {};
            var thisDataByAxis = thisItemCoordSys.dataByAxis || [];
            contentNotChanged = contentNotChanged && lastDataByAxis.length === thisDataByAxis.length;
            contentNotChanged && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(lastDataByAxis, function(lastItem, indexAxis) {
                var thisItem = thisDataByAxis[indexAxis] || {};
                var lastIndices = lastItem.seriesDataIndices || [];
                var newIndices = thisItem.seriesDataIndices || [];
                contentNotChanged = contentNotChanged && lastItem.value === thisItem.value && lastItem.axisType === thisItem.axisType && lastItem.axisId === thisItem.axisId && lastIndices.length === newIndices.length;
                contentNotChanged && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(lastIndices, function(lastIdxItem, j) {
                    var newIdxItem = newIndices[j];
                    contentNotChanged = contentNotChanged && lastIdxItem.seriesIndex === newIdxItem.seriesIndex && lastIdxItem.dataIndex === newIdxItem.dataIndex;
                });
                // check is cbParams data value changed
                lastCbParamsList && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(lastItem.seriesDataIndices, function(idxItem) {
                    var seriesIdx = idxItem.seriesIndex;
                    var cbParams = cbParamsList[seriesIdx];
                    var lastCbParams = lastCbParamsList[seriesIdx];
                    if (cbParams && lastCbParams && lastCbParams.data !== cbParams.data) {
                        contentNotChanged = false;
                    }
                });
            });
        });
        this._lastDataByCoordSys = dataByCoordSys;
        this._cbParamsList = cbParamsList;
        return !!contentNotChanged;
    };
    TooltipView.prototype._hide = function(dispatchAction) {
        // Do not directly hideLater here, because this behavior may be prevented
        // in dispatchAction when showTip is dispatched.
        // FIXME
        // duplicated hideTip if manuallyHideTip is called from dispatchAction.
        this._lastDataByCoordSys = null;
        dispatchAction({
            type: 'hideTip',
            from: this.uid
        });
    };
    TooltipView.prototype.dispose = function(ecModel, api) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node || !api.getDom()) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clear"])(this, '_updatePosition');
        this._tooltipContent.dispose();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$globalListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.unregister('itemTooltip', api);
    };
    TooltipView.type = 'tooltip';
    return TooltipView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
/**
 * From top to bottom. (the last one should be globalTooltipModel);
 */ function buildTooltipModel(modelCascade, globalTooltipModel, defaultTooltipOption) {
    // Last is always tooltip model.
    var ecModel = globalTooltipModel.ecModel;
    var resultModel;
    if (defaultTooltipOption) {
        resultModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](defaultTooltipOption, ecModel, ecModel);
        resultModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](globalTooltipModel.option, resultModel, ecModel);
    } else {
        resultModel = globalTooltipModel;
    }
    for(var i = modelCascade.length - 1; i >= 0; i--){
        var tooltipOpt = modelCascade[i];
        if (tooltipOpt) {
            if (tooltipOpt instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]) {
                tooltipOpt = tooltipOpt.get('tooltip', true);
            }
            // In each data item tooltip can be simply write:
            // {
            //  value: 10,
            //  tooltip: 'Something you need to know'
            // }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(tooltipOpt)) {
                tooltipOpt = {
                    formatter: tooltipOpt
                };
            }
            if (tooltipOpt) {
                resultModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](tooltipOpt, resultModel, ecModel);
            }
        }
    }
    return resultModel;
}
function makeDispatchAction(payload, api) {
    return payload.dispatchAction || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(api.dispatchAction, api);
}
function refixTooltipPosition(x, y, content, viewWidth, viewHeight, gapH, gapV) {
    var size = content.getSize();
    var width = size[0];
    var height = size[1];
    if (gapH != null) {
        // Add extra 2 pixels for this case:
        // At present the "values" in default tooltip are using CSS `float: right`.
        // When the right edge of the tooltip box is on the right side of the
        // viewport, the `float` layout might push the "values" to the second line.
        if (x + width + gapH + 2 > viewWidth) {
            x -= width + gapH;
        } else {
            x += gapH;
        }
    }
    if (gapV != null) {
        if (y + height + gapV > viewHeight) {
            y -= height + gapV;
        } else {
            y += gapV;
        }
    }
    return [
        x,
        y
    ];
}
function confineTooltipPosition(x, y, content, viewWidth, viewHeight) {
    var size = content.getSize();
    var width = size[0];
    var height = size[1];
    x = Math.min(x + width, viewWidth) - width;
    y = Math.min(y + height, viewHeight) - height;
    x = Math.max(x, 0);
    y = Math.max(y, 0);
    return [
        x,
        y
    ];
}
function calcTooltipPosition(position, rect, contentSize, borderWidth) {
    var domWidth = contentSize[0];
    var domHeight = contentSize[1];
    var offset = Math.ceil(Math.SQRT2 * borderWidth) + 8;
    var x = 0;
    var y = 0;
    var rectWidth = rect.width;
    var rectHeight = rect.height;
    switch(position){
        case 'inside':
            x = rect.x + rectWidth / 2 - domWidth / 2;
            y = rect.y + rectHeight / 2 - domHeight / 2;
            break;
        case 'top':
            x = rect.x + rectWidth / 2 - domWidth / 2;
            y = rect.y - domHeight - offset;
            break;
        case 'bottom':
            x = rect.x + rectWidth / 2 - domWidth / 2;
            y = rect.y + rectHeight + offset;
            break;
        case 'left':
            x = rect.x - domWidth - offset;
            y = rect.y + rectHeight / 2 - domHeight / 2;
            break;
        case 'right':
            x = rect.x + rectWidth + offset;
            y = rect.y + rectHeight / 2 - domHeight / 2;
    }
    return [
        x,
        y
    ];
}
function isCenterAlign(align) {
    return align === 'center' || align === 'middle';
}
/**
 * Find target component by payload like:
 * ```js
 * { legendId: 'some_id', name: 'xxx' }
 * { toolboxIndex: 1, name: 'xxx' }
 * { geoName: 'some_name', name: 'xxx' }
 * ```
 * PENDING: at present only
 *
 * If not found, return null/undefined.
 */ function findComponentReference(payload, ecModel, api) {
    var queryOptionMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preParseFinder"])(payload).queryOptionMap;
    var componentMainType = queryOptionMap.keys()[0];
    if (!componentMainType || componentMainType === 'series') {
        return;
    }
    var queryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryReferringComponents"])(ecModel, componentMainType, queryOptionMap.get(componentMainType), {
        useDefault: false,
        enableAll: false,
        enableNone: false
    });
    var model = queryResult.models[0];
    if (!model) {
        return;
    }
    var view = api.getViewOfComponentModel(model);
    var el;
    view.group.traverse(function(subEl) {
        var tooltipConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(subEl).tooltipConfig;
        if (tooltipConfig && tooltipConfig.name === payload.name) {
            el = subEl;
            return true; // stop
        }
    });
    if (el) {
        return {
            componentMainType: componentMainType,
            componentIndex: model.componentIndex,
            el: el
        };
    }
}
const __TURBOPACK__default__export__ = TooltipView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/install.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/TooltipModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/TooltipView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$TooltipView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    /**
   * @action
   * @property {string} type
   * @property {number} seriesIndex
   * @property {number} dataIndex
   * @property {number} [x]
   * @property {number} [y]
   */ registers.registerAction({
        type: 'showTip',
        event: 'showTip',
        update: 'tooltip:manuallyShowTip'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    registers.registerAction({
        type: 'hideTip',
        event: 'hideTip',
        update: 'tooltip:manuallyHideTip'
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript) <export install as TooltipComponent>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "TooltipComponent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/install.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/axisSplitHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "rectCoordAxisBuildSplitArea": (()=>rectCoordAxisBuildSplitArea),
    "rectCoordAxisHandleRemove": (()=>rectCoordAxisHandleRemove)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function rectCoordAxisBuildSplitArea(axisView, axisGroup, axisModel, gridModel) {
    var axis = axisModel.axis;
    if (axis.scale.isBlank()) {
        return;
    }
    // TODO: TYPE
    var splitAreaModel = axisModel.getModel('splitArea');
    var areaStyleModel = splitAreaModel.getModel('areaStyle');
    var areaColors = areaStyleModel.get('color');
    var gridRect = gridModel.coordinateSystem.getRect();
    var ticksCoords = axis.getTicksCoords({
        tickModel: splitAreaModel,
        clamp: true
    });
    if (!ticksCoords.length) {
        return;
    }
    // For Making appropriate splitArea animation, the color and anid
    // should be corresponding to previous one if possible.
    var areaColorsLen = areaColors.length;
    var lastSplitAreaColors = inner(axisView).splitAreaColors;
    var newSplitAreaColors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createHashMap();
    var colorIndex = 0;
    if (lastSplitAreaColors) {
        for(var i = 0; i < ticksCoords.length; i++){
            var cIndex = lastSplitAreaColors.get(ticksCoords[i].tickValue);
            if (cIndex != null) {
                colorIndex = (cIndex + (areaColorsLen - 1) * i) % areaColorsLen;
                break;
            }
        }
    }
    var prev = axis.toGlobalCoord(ticksCoords[0].coord);
    var areaStyle = areaStyleModel.getAreaStyle();
    areaColors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isArray(areaColors) ? areaColors : [
        areaColors
    ];
    for(var i = 1; i < ticksCoords.length; i++){
        var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
        var x = void 0;
        var y = void 0;
        var width = void 0;
        var height = void 0;
        if (axis.isHorizontal()) {
            x = prev;
            y = gridRect.y;
            width = tickCoord - x;
            height = gridRect.height;
            prev = x + width;
        } else {
            x = gridRect.x;
            y = prev;
            width = gridRect.width;
            height = tickCoord - y;
            prev = y + height;
        }
        var tickValue = ticksCoords[i - 1].tickValue;
        tickValue != null && newSplitAreaColors.set(tickValue, colorIndex);
        axisGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Rect({
            anid: tickValue != null ? 'area_' + tickValue : null,
            shape: {
                x: x,
                y: y,
                width: width,
                height: height
            },
            style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.defaults({
                fill: areaColors[colorIndex]
            }, areaStyle),
            autoBatch: true,
            silent: true
        }));
        colorIndex = (colorIndex + 1) % areaColorsLen;
    }
    inner(axisView).splitAreaColors = newSplitAreaColors;
}
function rectCoordAxisHandleRemove(axisView) {
    inner(axisView).splitAreaColors = null;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/CartesianAxisView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "CartesianXAxisView": (()=>CartesianXAxisView),
    "CartesianYAxisView": (()=>CartesianYAxisView),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/axisSplitHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisView.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var axisBuilderAttrs = [
    'axisLine',
    'axisTickLabel',
    'axisName'
];
var selfBuilderAttrs = [
    'splitArea',
    'splitLine',
    'minorSplitLine'
];
var CartesianAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CartesianAxisView, _super);
    function CartesianAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CartesianAxisView.type;
        _this.axisPointerClass = 'CartesianAxisPointer';
        return _this;
    }
    /**
   * @override
   */ CartesianAxisView.prototype.render = function(axisModel, ecModel, api, payload) {
        this.group.removeAll();
        var oldAxisGroup = this._axisGroup;
        this._axisGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
        this.group.add(this._axisGroup);
        if (!axisModel.get('show')) {
            return;
        }
        var gridModel = axisModel.getCoordSysModel();
        var layout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$cartesianAxisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.layout(gridModel, axisModel);
        var axisBuilder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](axisModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.extend({
            handleAutoShown: function(elementType) {
                var cartesians = gridModel.coordinateSystem.getCartesians();
                for(var i = 0; i < cartesians.length; i++){
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$scale$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIntervalOrLogScale"])(cartesians[i].getOtherAxis(axisModel.axis).scale)) {
                        // Still show axis tick or axisLine if other axis is value / log
                        return true;
                    }
                }
                // Not show axisTick or axisLine if other axis is category / time
                return false;
            }
        }, layout));
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(axisBuilderAttrs, axisBuilder.add, axisBuilder);
        this._axisGroup.add(axisBuilder.getGroup());
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(selfBuilderAttrs, function(name) {
            if (axisModel.get([
                name,
                'show'
            ])) {
                axisElementBuilders[name](this, this._axisGroup, axisModel, gridModel);
            }
        }, this);
        // THIS is a special case for bar racing chart.
        // Update the axis label from the natural initial layout to
        // sorted layout should has no animation.
        var isInitialSortFromBarRacing = payload && payload.type === 'changeAxisOrder' && payload.isInitSort;
        if (!isInitialSortFromBarRacing) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.groupTransition(oldAxisGroup, this._axisGroup, axisModel);
        }
        _super.prototype.render.call(this, axisModel, ecModel, api, payload);
    };
    CartesianAxisView.prototype.remove = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectCoordAxisHandleRemove"])(this);
    };
    CartesianAxisView.type = 'cartesianAxis';
    return CartesianAxisView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$AxisView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
var axisElementBuilders = {
    splitLine: function(axisView, axisGroup, axisModel, gridModel) {
        var axis = axisModel.axis;
        if (axis.scale.isBlank()) {
            return;
        }
        var splitLineModel = axisModel.getModel('splitLine');
        var lineStyleModel = splitLineModel.getModel('lineStyle');
        var lineColors = lineStyleModel.get('color');
        var showMinLine = splitLineModel.get('showMinLine') !== false;
        var showMaxLine = splitLineModel.get('showMaxLine') !== false;
        lineColors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isArray(lineColors) ? lineColors : [
            lineColors
        ];
        var gridRect = gridModel.coordinateSystem.getRect();
        var isHorizontal = axis.isHorizontal();
        var lineCount = 0;
        var ticksCoords = axis.getTicksCoords({
            tickModel: splitLineModel
        });
        var p1 = [];
        var p2 = [];
        var lineStyle = lineStyleModel.getLineStyle();
        for(var i = 0; i < ticksCoords.length; i++){
            var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
            if (i === 0 && !showMinLine || i === ticksCoords.length - 1 && !showMaxLine) {
                continue;
            }
            var tickValue = ticksCoords[i].tickValue;
            if (isHorizontal) {
                p1[0] = tickCoord;
                p1[1] = gridRect.y;
                p2[0] = tickCoord;
                p2[1] = gridRect.y + gridRect.height;
            } else {
                p1[0] = gridRect.x;
                p1[1] = tickCoord;
                p2[0] = gridRect.x + gridRect.width;
                p2[1] = tickCoord;
            }
            var colorIndex = lineCount++ % lineColors.length;
            var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Line({
                anid: tickValue != null ? 'line_' + tickValue : null,
                autoBatch: true,
                shape: {
                    x1: p1[0],
                    y1: p1[1],
                    x2: p2[0],
                    y2: p2[1]
                },
                style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.defaults({
                    stroke: lineColors[colorIndex]
                }, lineStyle),
                silent: true
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.subPixelOptimizeLine(line.shape, lineStyle.lineWidth);
            axisGroup.add(line);
        }
    },
    minorSplitLine: function(axisView, axisGroup, axisModel, gridModel) {
        var axis = axisModel.axis;
        var minorSplitLineModel = axisModel.getModel('minorSplitLine');
        var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
        var gridRect = gridModel.coordinateSystem.getRect();
        var isHorizontal = axis.isHorizontal();
        var minorTicksCoords = axis.getMinorTicksCoords();
        if (!minorTicksCoords.length) {
            return;
        }
        var p1 = [];
        var p2 = [];
        var lineStyle = lineStyleModel.getLineStyle();
        for(var i = 0; i < minorTicksCoords.length; i++){
            for(var k = 0; k < minorTicksCoords[i].length; k++){
                var tickCoord = axis.toGlobalCoord(minorTicksCoords[i][k].coord);
                if (isHorizontal) {
                    p1[0] = tickCoord;
                    p1[1] = gridRect.y;
                    p2[0] = tickCoord;
                    p2[1] = gridRect.y + gridRect.height;
                } else {
                    p1[0] = gridRect.x;
                    p1[1] = tickCoord;
                    p2[0] = gridRect.x + gridRect.width;
                    p2[1] = tickCoord;
                }
                var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Line({
                    anid: 'minor_line_' + minorTicksCoords[i][k].tickValue,
                    autoBatch: true,
                    shape: {
                        x1: p1[0],
                        y1: p1[1],
                        x2: p2[0],
                        y2: p2[1]
                    },
                    style: lineStyle,
                    silent: true
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.subPixelOptimizeLine(line.shape, lineStyle.lineWidth);
                axisGroup.add(line);
            }
        }
    },
    splitArea: function(axisView, axisGroup, axisModel, gridModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$axisSplitHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectCoordAxisBuildSplitArea"])(axisView, axisGroup, axisModel, gridModel);
    }
};
var CartesianXAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CartesianXAxisView, _super);
    function CartesianXAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CartesianXAxisView.type;
        return _this;
    }
    CartesianXAxisView.type = 'xAxis';
    return CartesianXAxisView;
}(CartesianAxisView);
;
var CartesianYAxisView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(CartesianYAxisView, _super);
    function CartesianYAxisView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = CartesianXAxisView.type;
        return _this;
    }
    CartesianYAxisView.type = 'yAxis';
    return CartesianYAxisView;
}(CartesianAxisView);
;
const __TURBOPACK__default__export__ = CartesianAxisView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/grid/installSimple.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js [app-client] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$GridModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/GridModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/Grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCreator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$AxisModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/AxisModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$CartesianAxisView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/CartesianAxisView.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
// Grid view
var GridView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(GridView, _super);
    function GridView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'grid';
        return _this;
    }
    GridView.prototype.render = function(gridModel, ecModel) {
        this.group.removeAll();
        if (gridModel.get('show')) {
            this.group.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
                shape: gridModel.coordinateSystem.getRect(),
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
                    fill: gridModel.get('backgroundColor')
                }, gridModel.getItemStyle()),
                silent: true,
                z2: -1
            }));
        }
    };
    GridView.type = 'grid';
    return GridView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
var extraOption = {
    // gridIndex: 0,
    // gridId: '',
    offset: 0
};
function install(registers) {
    registers.registerComponentView(GridView);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$GridModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerCoordinateSystem('cartesian2d', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(registers, 'x', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$AxisModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianAxisModel"], extraOption);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisModelCreator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(registers, 'y', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$cartesian$2f$AxisModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianAxisModel"], extraOption);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$CartesianAxisView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianXAxisView"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axis$2f$CartesianAxisView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianYAxisView"]);
    registers.registerPreprocessor(function(option) {
        // Only create grid when need
        if (option.xAxis && option.yAxis && !option.grid) {
            option.grid = {};
        }
    });
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/grid/install.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$installSimple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/grid/installSimple.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axisPointer/install.js [app-client] (ecmascript)");
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$installSimple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$axisPointer$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/grid/install.js [app-client] (ecmascript) <export install as GridComponent>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "GridComponent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$grid$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/grid/install.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/LegendModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
;
;
;
var getDefaultSelectorOptions = function(ecModel, type) {
    if (type === 'all') {
        return {
            type: 'all',
            title: ecModel.getLocaleModel().get([
                'legend',
                'selector',
                'all'
            ])
        };
    } else if (type === 'inverse') {
        return {
            type: 'inverse',
            title: ecModel.getLocaleModel().get([
                'legend',
                'selector',
                'inverse'
            ])
        };
    }
};
var LegendModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LegendModel, _super);
    function LegendModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = LegendModel.type;
        _this.layoutMode = {
            type: 'box',
            // legend.width/height are maxWidth/maxHeight actually,
            // whereas real width/height is calculated by its content.
            // (Setting {left: 10, right: 10} does not make sense).
            // So consider the case:
            // `setOption({legend: {left: 10});`
            // then `setOption({legend: {right: 10});`
            // The previous `left` should be cleared by setting `ignoreSize`.
            ignoreSize: true
        };
        return _this;
    }
    LegendModel.prototype.init = function(option, parentModel, ecModel) {
        this.mergeDefaultAndTheme(option, ecModel);
        option.selected = option.selected || {};
        this._updateSelector(option);
    };
    LegendModel.prototype.mergeOption = function(option, ecModel) {
        _super.prototype.mergeOption.call(this, option, ecModel);
        this._updateSelector(option);
    };
    LegendModel.prototype._updateSelector = function(option) {
        var selector = option.selector;
        var ecModel = this.ecModel;
        if (selector === true) {
            selector = option.selector = [
                'all',
                'inverse'
            ];
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isArray(selector)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(selector, function(item, index) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isString(item) && (item = {
                    type: item
                });
                selector[index] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.merge(item, getDefaultSelectorOptions(ecModel, item.type));
            });
        }
    };
    LegendModel.prototype.optionUpdated = function() {
        this._updateData(this.ecModel);
        var legendData = this._data;
        // If selectedMode is single, try to select one
        if (legendData[0] && this.get('selectedMode') === 'single') {
            var hasSelected = false;
            // If has any selected in option.selected
            for(var i = 0; i < legendData.length; i++){
                var name_1 = legendData[i].get('name');
                if (this.isSelected(name_1)) {
                    // Force to unselect others
                    this.select(name_1);
                    hasSelected = true;
                    break;
                }
            }
            // Try select the first if selectedMode is single
            !hasSelected && this.select(legendData[0].get('name'));
        }
    };
    LegendModel.prototype._updateData = function(ecModel) {
        var potentialData = [];
        var availableNames = [];
        ecModel.eachRawSeries(function(seriesModel) {
            var seriesName = seriesModel.name;
            availableNames.push(seriesName);
            var isPotential;
            if (seriesModel.legendVisualProvider) {
                var provider = seriesModel.legendVisualProvider;
                var names = provider.getAllNames();
                if (!ecModel.isSeriesFiltered(seriesModel)) {
                    availableNames = availableNames.concat(names);
                }
                if (names.length) {
                    potentialData = potentialData.concat(names);
                } else {
                    isPotential = true;
                }
            } else {
                isPotential = true;
            }
            if (isPotential && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNameSpecified"])(seriesModel)) {
                potentialData.push(seriesModel.name);
            }
        });
        /**
     * @type {Array.<string>}
     * @private
     */ this._availableNames = availableNames;
        // If legend.data is not specified in option, use availableNames as data,
        // which is convenient for user preparing option.
        var rawData = this.get('data') || potentialData;
        var legendNameMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createHashMap();
        var legendData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(rawData, function(dataItem) {
            // Can be string or number
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isString(dataItem) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isNumber(dataItem)) {
                dataItem = {
                    name: dataItem
                };
            }
            if (legendNameMap.get(dataItem.name)) {
                // remove legend name duplicate
                return null;
            }
            legendNameMap.set(dataItem.name, true);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](dataItem, this, this.ecModel);
        }, this);
        /**
     * @type {Array.<module:echarts/model/Model>}
     * @private
     */ this._data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.filter(legendData, function(item) {
            return !!item;
        });
    };
    LegendModel.prototype.getData = function() {
        return this._data;
    };
    LegendModel.prototype.select = function(name) {
        var selected = this.option.selected;
        var selectedMode = this.get('selectedMode');
        if (selectedMode === 'single') {
            var data = this._data;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(data, function(dataItem) {
                selected[dataItem.get('name')] = false;
            });
        }
        selected[name] = true;
    };
    LegendModel.prototype.unSelect = function(name) {
        if (this.get('selectedMode') !== 'single') {
            this.option.selected[name] = false;
        }
    };
    LegendModel.prototype.toggleSelected = function(name) {
        var selected = this.option.selected;
        // Default is true
        if (!selected.hasOwnProperty(name)) {
            selected[name] = true;
        }
        this[selected[name] ? 'unSelect' : 'select'](name);
    };
    LegendModel.prototype.allSelect = function() {
        var data = this._data;
        var selected = this.option.selected;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(data, function(dataItem) {
            selected[dataItem.get('name', true)] = true;
        });
    };
    LegendModel.prototype.inverseSelect = function() {
        var data = this._data;
        var selected = this.option.selected;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(data, function(dataItem) {
            var name = dataItem.get('name', true);
            // Initially, default value is true
            if (!selected.hasOwnProperty(name)) {
                selected[name] = true;
            }
            selected[name] = !selected[name];
        });
    };
    LegendModel.prototype.isSelected = function(name) {
        var selected = this.option.selected;
        return !(selected.hasOwnProperty(name) && !selected[name]) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.indexOf(this._availableNames, name) >= 0;
    };
    LegendModel.prototype.getOrient = function() {
        return this.get('orient') === 'vertical' ? {
            index: 1,
            name: 'vertical'
        } : {
            index: 0,
            name: 'horizontal'
        };
    };
    LegendModel.type = 'legend.plain';
    LegendModel.dependencies = [
        'series'
    ];
    LegendModel.defaultOption = {
        // zlevel: 0,
        z: 4,
        show: true,
        orient: 'horizontal',
        left: 'center',
        // right: 'center',
        top: 0,
        // bottom: null,
        align: 'auto',
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        symbolRotate: 'inherit',
        symbolKeepAspect: true,
        inactiveColor: '#ccc',
        inactiveBorderColor: '#ccc',
        inactiveBorderWidth: 'auto',
        itemStyle: {
            color: 'inherit',
            opacity: 'inherit',
            borderColor: 'inherit',
            borderWidth: 'auto',
            borderCap: 'inherit',
            borderJoin: 'inherit',
            borderDashOffset: 'inherit',
            borderMiterLimit: 'inherit'
        },
        lineStyle: {
            width: 'auto',
            color: 'inherit',
            inactiveColor: '#ccc',
            inactiveWidth: 2,
            opacity: 'inherit',
            type: 'inherit',
            cap: 'inherit',
            join: 'inherit',
            dashOffset: 'inherit',
            miterLimit: 'inherit'
        },
        textStyle: {
            color: '#333'
        },
        selectedMode: true,
        selector: false,
        selectorLabel: {
            show: true,
            borderRadius: 10,
            padding: [
                3,
                5,
                3,
                5
            ],
            fontSize: 12,
            fontFamily: 'sans-serif',
            color: '#666',
            borderWidth: 1,
            borderColor: '#666'
        },
        emphasis: {
            selectorLabel: {
                show: true,
                color: '#eee',
                backgroundColor: '#666'
            }
        },
        selectorPosition: 'auto',
        selectorItemGap: 7,
        selectorButtonGap: 10,
        tooltip: {
            show: false
        }
    };
    return LegendModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = LegendModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/listComponent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ // @ts-nocheck
__turbopack_esm__({
    "layout": (()=>layout),
    "makeBackground": (()=>makeBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
;
;
;
function layout(group, componentModel, api) {
    var boxLayoutParams = componentModel.getBoxLayoutParams();
    var padding = componentModel.get('padding');
    var viewportSize = {
        width: api.getWidth(),
        height: api.getHeight()
    };
    var rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])(boxLayoutParams, viewportSize, padding);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["box"])(componentModel.get('orient'), group, componentModel.get('itemGap'), rect.width, rect.height);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["positionElement"])(group, boxLayoutParams, viewportSize, padding);
}
function makeBackground(rect, componentModel) {
    var padding = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.normalizeCssArray(componentModel.get('padding'));
    var style = componentModel.getItemStyle([
        'color',
        'opacity'
    ]);
    style.fill = componentModel.get('backgroundColor');
    rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Rect({
        shape: {
            x: rect.x - padding[3],
            y: rect.y - padding[0],
            width: rect.width + padding[1] + padding[3],
            height: rect.height + padding[0] + padding[2],
            r: componentModel.get('borderRadius')
        },
        style: style,
        silent: true,
        z2: -1
    });
    // FIXME
    // `subPixelOptimizeRect` may bring some gap between edge of viewpart
    // and background rect when setting like `left: 0`, `top: 0`.
    // graphic.subPixelOptimizeRect(rect);
    return rect;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/LegendView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$listComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/listComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$decal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/decal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
var curry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.curry;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each;
var Group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group;
var LegendView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LegendView, _super);
    function LegendView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = LegendView.type;
        _this.newlineDisabled = false;
        return _this;
    }
    LegendView.prototype.init = function() {
        this.group.add(this._contentGroup = new Group());
        this.group.add(this._selectorGroup = new Group());
        this._isFirstRender = true;
    };
    /**
   * @protected
   */ LegendView.prototype.getContentGroup = function() {
        return this._contentGroup;
    };
    /**
   * @protected
   */ LegendView.prototype.getSelectorGroup = function() {
        return this._selectorGroup;
    };
    /**
   * @override
   */ LegendView.prototype.render = function(legendModel, ecModel, api) {
        var isFirstRender = this._isFirstRender;
        this._isFirstRender = false;
        this.resetInner();
        if (!legendModel.get('show', true)) {
            return;
        }
        var itemAlign = legendModel.get('align');
        var orient = legendModel.get('orient');
        if (!itemAlign || itemAlign === 'auto') {
            itemAlign = legendModel.get('left') === 'right' && orient === 'vertical' ? 'right' : 'left';
        }
        // selector has been normalized to an array in model
        var selector = legendModel.get('selector', true);
        var selectorPosition = legendModel.get('selectorPosition', true);
        if (selector && (!selectorPosition || selectorPosition === 'auto')) {
            selectorPosition = orient === 'horizontal' ? 'end' : 'start';
        }
        this.renderInner(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
        // Perform layout.
        var positionInfo = legendModel.getBoxLayoutParams();
        var viewportSize = {
            width: api.getWidth(),
            height: api.getHeight()
        };
        var padding = legendModel.get('padding');
        var maxSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getLayoutRect(positionInfo, viewportSize, padding);
        var mainRect = this.layoutInner(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition);
        // Place mainGroup, based on the calculated `mainRect`.
        var layoutRect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getLayoutRect(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.defaults({
            width: mainRect.width,
            height: mainRect.height
        }, positionInfo), viewportSize, padding);
        this.group.x = layoutRect.x - mainRect.x;
        this.group.y = layoutRect.y - mainRect.y;
        this.group.markRedraw();
        // Render background after group is layout.
        this.group.add(this._backgroundEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$listComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeBackground"])(mainRect, legendModel));
    };
    LegendView.prototype.resetInner = function() {
        this.getContentGroup().removeAll();
        this._backgroundEl && this.group.remove(this._backgroundEl);
        this.getSelectorGroup().removeAll();
    };
    LegendView.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
        var contentGroup = this.getContentGroup();
        var legendDrawnMap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createHashMap();
        var selectMode = legendModel.get('selectedMode');
        var excludeSeriesId = [];
        ecModel.eachRawSeries(function(seriesModel) {
            !seriesModel.get('legendHoverLink') && excludeSeriesId.push(seriesModel.id);
        });
        each(legendModel.getData(), function(legendItemModel, dataIndex) {
            var name = legendItemModel.get('name');
            // Use empty string or \n as a newline string
            if (!this.newlineDisabled && (name === '' || name === '\n')) {
                var g = new Group();
                // @ts-ignore
                g.newline = true;
                contentGroup.add(g);
                return;
            }
            // Representitive series.
            var seriesModel = ecModel.getSeriesByName(name)[0];
            if (legendDrawnMap.get(name)) {
                // Have been drawn
                return;
            }
            // Legend to control series.
            if (seriesModel) {
                var data = seriesModel.getData();
                var lineVisualStyle = data.getVisual('legendLineStyle') || {};
                var legendIcon = data.getVisual('legendIcon');
                /**
         * `data.getVisual('style')` may be the color from the register
         * in series. For example, for line series,
         */ var style = data.getVisual('style');
                var itemGroup = this._createItem(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, style, legendIcon, selectMode, api);
                itemGroup.on('click', curry(dispatchSelectAction, name, null, api, excludeSeriesId)).on('mouseover', curry(dispatchHighlightAction, seriesModel.name, null, api, excludeSeriesId)).on('mouseout', curry(dispatchDownplayAction, seriesModel.name, null, api, excludeSeriesId));
                if (ecModel.ssr) {
                    itemGroup.eachChild(function(child) {
                        var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(child);
                        ecData.seriesIndex = seriesModel.seriesIndex;
                        ecData.dataIndex = dataIndex;
                        ecData.ssrType = 'legend';
                    });
                }
                legendDrawnMap.set(name, true);
            } else {
                // Legend to control data. In pie and funnel.
                ecModel.eachRawSeries(function(seriesModel) {
                    // In case multiple series has same data name
                    if (legendDrawnMap.get(name)) {
                        return;
                    }
                    if (seriesModel.legendVisualProvider) {
                        var provider = seriesModel.legendVisualProvider;
                        if (!provider.containName(name)) {
                            return;
                        }
                        var idx = provider.indexOfName(name);
                        var style = provider.getItemVisual(idx, 'style');
                        var legendIcon = provider.getItemVisual(idx, 'legendIcon');
                        var colorArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(style.fill);
                        // Color may be set to transparent in visualMap when data is out of range.
                        // Do not show nothing.
                        if (colorArr && colorArr[3] === 0) {
                            colorArr[3] = 0.2;
                            // TODO color is set to 0, 0, 0, 0. Should show correct RGBA
                            style = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.extend({}, style), {
                                fill: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(colorArr, 'rgba')
                            });
                        }
                        var itemGroup = this._createItem(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, {}, style, legendIcon, selectMode, api);
                        // FIXME: consider different series has items with the same name.
                        itemGroup.on('click', curry(dispatchSelectAction, null, name, api, excludeSeriesId))// Should not specify the series name, consider legend controls
                        // more than one pie series.
                        .on('mouseover', curry(dispatchHighlightAction, null, name, api, excludeSeriesId)).on('mouseout', curry(dispatchDownplayAction, null, name, api, excludeSeriesId));
                        if (ecModel.ssr) {
                            itemGroup.eachChild(function(child) {
                                var ecData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(child);
                                ecData.seriesIndex = seriesModel.seriesIndex;
                                ecData.dataIndex = dataIndex;
                                ecData.ssrType = 'legend';
                            });
                        }
                        legendDrawnMap.set(name, true);
                    }
                }, this);
            }
            if ("TURBOPACK compile-time truthy", 1) {
                if (!legendDrawnMap.get(name)) {
                    console.warn(name + ' series not exists. Legend data should be same with series name or data name.');
                }
            }
        }, this);
        if (selector) {
            this._createSelector(selector, legendModel, api, orient, selectorPosition);
        }
    };
    LegendView.prototype._createSelector = function(selector, legendModel, api, orient, selectorPosition) {
        var selectorGroup = this.getSelectorGroup();
        each(selector, function createSelectorButton(selectorItem) {
            var type = selectorItem.type;
            var labelText = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Text({
                style: {
                    x: 0,
                    y: 0,
                    align: 'center',
                    verticalAlign: 'middle'
                },
                onclick: function() {
                    api.dispatchAction({
                        type: type === 'all' ? 'legendAllSelect' : 'legendInverseSelect',
                        legendId: legendModel.id
                    });
                }
            });
            selectorGroup.add(labelText);
            var labelModel = legendModel.getModel('selectorLabel');
            var emphasisLabelModel = legendModel.getModel([
                'emphasis',
                'selectorLabel'
            ]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLabelStyle"])(labelText, {
                normal: labelModel,
                emphasis: emphasisLabelModel
            }, {
                defaultText: selectorItem.title
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableHoverEmphasis"])(labelText);
        });
    };
    LegendView.prototype._createItem = function(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, itemVisualStyle, legendIcon, selectMode, api) {
        var drawType = seriesModel.visualDrawType;
        var itemWidth = legendModel.get('itemWidth');
        var itemHeight = legendModel.get('itemHeight');
        var isSelected = legendModel.isSelected(name);
        var iconRotate = legendItemModel.get('symbolRotate');
        var symbolKeepAspect = legendItemModel.get('symbolKeepAspect');
        var legendIconType = legendItemModel.get('icon');
        legendIcon = legendIconType || legendIcon || 'roundRect';
        var style = getLegendStyle(legendIcon, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api);
        var itemGroup = new Group();
        var textStyleModel = legendItemModel.getModel('textStyle');
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isFunction(seriesModel.getLegendIcon) && (!legendIconType || legendIconType === 'inherit')) {
            // Series has specific way to define legend icon
            itemGroup.add(seriesModel.getLegendIcon({
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                icon: legendIcon,
                iconRotate: iconRotate,
                itemStyle: style.itemStyle,
                lineStyle: style.lineStyle,
                symbolKeepAspect: symbolKeepAspect
            }));
        } else {
            // Use default legend icon policy for most series
            var rotate = legendIconType === 'inherit' && seriesModel.getData().getVisual('symbol') ? iconRotate === 'inherit' ? seriesModel.getData().getVisual('symbolRotate') : iconRotate : 0; // No rotation for no icon
            itemGroup.add(getDefaultLegendIcon({
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                icon: legendIcon,
                iconRotate: rotate,
                itemStyle: style.itemStyle,
                lineStyle: style.lineStyle,
                symbolKeepAspect: symbolKeepAspect
            }));
        }
        var textX = itemAlign === 'left' ? itemWidth + 5 : -5;
        var textAlign = itemAlign;
        var formatter = legendModel.get('formatter');
        var content = name;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isString(formatter) && formatter) {
            content = formatter.replace('{name}', name != null ? name : '');
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isFunction(formatter)) {
            content = formatter(name);
        }
        var textColor = isSelected ? textStyleModel.getTextColor() : legendItemModel.get('inactiveColor');
        itemGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Text({
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                text: content,
                x: textX,
                y: itemHeight / 2,
                fill: textColor,
                align: textAlign,
                verticalAlign: 'middle'
            }, {
                inheritColor: textColor
            })
        }));
        // Add a invisible rect to increase the area of mouse hover
        var hitRect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Rect({
            shape: itemGroup.getBoundingRect(),
            style: {
                // Cannot use 'invisible' because SVG SSR will miss the node
                fill: 'transparent'
            }
        });
        var tooltipModel = legendItemModel.getModel('tooltip');
        if (tooltipModel.get('show')) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.setTooltipConfig({
                el: hitRect,
                componentModel: legendModel,
                itemName: name,
                itemTooltipOption: tooltipModel.option
            });
        }
        itemGroup.add(hitRect);
        itemGroup.eachChild(function(child) {
            child.silent = true;
        });
        hitRect.silent = !selectMode;
        this.getContentGroup().add(itemGroup);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableHoverEmphasis"])(itemGroup);
        // @ts-ignore
        itemGroup.__legendDataIndex = dataIndex;
        return itemGroup;
    };
    LegendView.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
        var contentGroup = this.getContentGroup();
        var selectorGroup = this.getSelectorGroup();
        // Place items in contentGroup.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.box(legendModel.get('orient'), contentGroup, legendModel.get('itemGap'), maxSize.width, maxSize.height);
        var contentRect = contentGroup.getBoundingRect();
        var contentPos = [
            -contentRect.x,
            -contentRect.y
        ];
        selectorGroup.markRedraw();
        contentGroup.markRedraw();
        if (selector) {
            // Place buttons in selectorGroup
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.box(// Buttons in selectorGroup always layout horizontally
            'horizontal', selectorGroup, legendModel.get('selectorItemGap', true));
            var selectorRect = selectorGroup.getBoundingRect();
            var selectorPos = [
                -selectorRect.x,
                -selectorRect.y
            ];
            var selectorButtonGap = legendModel.get('selectorButtonGap', true);
            var orientIdx = legendModel.getOrient().index;
            var wh = orientIdx === 0 ? 'width' : 'height';
            var hw = orientIdx === 0 ? 'height' : 'width';
            var yx = orientIdx === 0 ? 'y' : 'x';
            if (selectorPosition === 'end') {
                selectorPos[orientIdx] += contentRect[wh] + selectorButtonGap;
            } else {
                contentPos[orientIdx] += selectorRect[wh] + selectorButtonGap;
            }
            // Always align selector to content as 'middle'
            selectorPos[1 - orientIdx] += contentRect[hw] / 2 - selectorRect[hw] / 2;
            selectorGroup.x = selectorPos[0];
            selectorGroup.y = selectorPos[1];
            contentGroup.x = contentPos[0];
            contentGroup.y = contentPos[1];
            var mainRect = {
                x: 0,
                y: 0
            };
            mainRect[wh] = contentRect[wh] + selectorButtonGap + selectorRect[wh];
            mainRect[hw] = Math.max(contentRect[hw], selectorRect[hw]);
            mainRect[yx] = Math.min(0, selectorRect[yx] + selectorPos[1 - orientIdx]);
            return mainRect;
        } else {
            contentGroup.x = contentPos[0];
            contentGroup.y = contentPos[1];
            return this.group.getBoundingRect();
        }
    };
    /**
   * @protected
   */ LegendView.prototype.remove = function() {
        this.getContentGroup().removeAll();
        this._isFirstRender = true;
    };
    LegendView.type = 'legend.plain';
    return LegendView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function getLegendStyle(iconType, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api) {
    /**
   * Use series style if is inherit;
   * elsewise, use legend style
   */ function handleCommonProps(style, visualStyle) {
        // If lineStyle.width is 'auto', it is set to be 2 if series has border
        if (style.lineWidth === 'auto') {
            style.lineWidth = visualStyle.lineWidth > 0 ? 2 : 0;
        }
        each(style, function(propVal, propName) {
            style[propName] === 'inherit' && (style[propName] = visualStyle[propName]);
        });
    }
    // itemStyle
    var itemStyleModel = legendItemModel.getModel('itemStyle');
    var itemStyle = itemStyleModel.getItemStyle();
    var iconBrushType = iconType.lastIndexOf('empty', 0) === 0 ? 'fill' : 'stroke';
    var decalStyle = itemStyleModel.getShallow('decal');
    itemStyle.decal = !decalStyle || decalStyle === 'inherit' ? itemVisualStyle.decal : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$decal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOrUpdatePatternFromDecal"])(decalStyle, api);
    if (itemStyle.fill === 'inherit') {
        /**
     * Series with visualDrawType as 'stroke' should have
     * series stroke as legend fill
     */ itemStyle.fill = itemVisualStyle[drawType];
    }
    if (itemStyle.stroke === 'inherit') {
        /**
     * icon type with "emptyXXX" should use fill color
     * in visual style
     */ itemStyle.stroke = itemVisualStyle[iconBrushType];
    }
    if (itemStyle.opacity === 'inherit') {
        /**
     * Use lineStyle.opacity if drawType is stroke
     */ itemStyle.opacity = (drawType === 'fill' ? itemVisualStyle : lineVisualStyle).opacity;
    }
    handleCommonProps(itemStyle, itemVisualStyle);
    // lineStyle
    var legendLineModel = legendItemModel.getModel('lineStyle');
    var lineStyle = legendLineModel.getLineStyle();
    handleCommonProps(lineStyle, lineVisualStyle);
    // Fix auto color to real color
    itemStyle.fill === 'auto' && (itemStyle.fill = itemVisualStyle.fill);
    itemStyle.stroke === 'auto' && (itemStyle.stroke = itemVisualStyle.fill);
    lineStyle.stroke === 'auto' && (lineStyle.stroke = itemVisualStyle.fill);
    if (!isSelected) {
        var borderWidth = legendItemModel.get('inactiveBorderWidth');
        /**
     * Since stroke is set to be inactiveBorderColor, it may occur that
     * there is no border in series but border in legend, so we need to
     * use border only when series has border if is set to be auto
     */ var visualHasBorder = itemStyle[iconBrushType];
        itemStyle.lineWidth = borderWidth === 'auto' ? itemVisualStyle.lineWidth > 0 && visualHasBorder ? 2 : 0 : itemStyle.lineWidth;
        itemStyle.fill = legendItemModel.get('inactiveColor');
        itemStyle.stroke = legendItemModel.get('inactiveBorderColor');
        lineStyle.stroke = legendLineModel.get('inactiveColor');
        lineStyle.lineWidth = legendLineModel.get('inactiveWidth');
    }
    return {
        itemStyle: itemStyle,
        lineStyle: lineStyle
    };
}
function getDefaultLegendIcon(opt) {
    var symboType = opt.icon || 'roundRect';
    var icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSymbol"])(symboType, 0, 0, opt.itemWidth, opt.itemHeight, opt.itemStyle.fill, opt.symbolKeepAspect);
    icon.setStyle(opt.itemStyle);
    icon.rotation = (opt.iconRotate || 0) * Math.PI / 180;
    icon.setOrigin([
        opt.itemWidth / 2,
        opt.itemHeight / 2
    ]);
    if (symboType.indexOf('empty') > -1) {
        icon.style.stroke = icon.style.fill;
        icon.style.fill = '#fff';
        icon.style.lineWidth = 2;
    }
    return icon;
}
function dispatchSelectAction(seriesName, dataName, api, excludeSeriesId) {
    // downplay before unselect
    dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId);
    api.dispatchAction({
        type: 'legendToggleSelect',
        name: seriesName != null ? seriesName : dataName
    });
    // highlight after select
    // TODO highlight immediately may cause animation loss.
    dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId);
}
function isUseHoverLayer(api) {
    var list = api.getZr().storage.getDisplayList();
    var emphasisState;
    var i = 0;
    var len = list.length;
    while(i < len && !(emphasisState = list[i].states.emphasis)){
        i++;
    }
    return emphasisState && emphasisState.hoverLayer;
}
function dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId) {
    // If element hover will move to a hoverLayer.
    if (!isUseHoverLayer(api)) {
        api.dispatchAction({
            type: 'highlight',
            seriesName: seriesName,
            name: dataName,
            excludeSeriesId: excludeSeriesId
        });
    }
}
function dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId) {
    // If element hover will move to a hoverLayer.
    if (!isUseHoverLayer(api)) {
        api.dispatchAction({
            type: 'downplay',
            seriesName: seriesName,
            name: dataName,
            excludeSeriesId: excludeSeriesId
        });
    }
}
const __TURBOPACK__default__export__ = LegendView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/legendFilter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>legendFilter)
});
function legendFilter(ecModel) {
    var legendModels = ecModel.findComponents({
        mainType: 'legend'
    });
    if (legendModels && legendModels.length) {
        ecModel.filterSeries(function(series) {
            // If in any legend component the status is not selected.
            // Because in legend series is assumed selected when it is not in the legend data.
            for(var i = 0; i < legendModels.length; i++){
                if (!legendModels[i].isSelected(series.name)) {
                    return false;
                }
            }
            return true;
        });
    }
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/legendAction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "installLegendAction": (()=>installLegendAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
function legendSelectActionHandler(methodName, payload, ecModel) {
    var isAllSelect = methodName === 'allSelect' || methodName === 'inverseSelect';
    var selectedMap = {};
    var actionLegendIndices = [];
    ecModel.eachComponent({
        mainType: 'legend',
        query: payload
    }, function(legendModel) {
        if (isAllSelect) {
            legendModel[methodName]();
        } else {
            legendModel[methodName](payload.name);
        }
        makeSelectedMap(legendModel, selectedMap);
        actionLegendIndices.push(legendModel.componentIndex);
    });
    var allSelectedMap = {};
    // make selectedMap from all legend components
    ecModel.eachComponent('legend', function(legendModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(selectedMap, function(isSelected, name) {
            // Force other legend has same selected status
            // Or the first is toggled to true and other are toggled to false
            // In the case one legend has some item unSelected in option. And if other legend
            // doesn't has the item, they will assume it is selected.
            legendModel[isSelected ? 'select' : 'unSelect'](name);
        });
        makeSelectedMap(legendModel, allSelectedMap);
    });
    // Return the event explicitly
    return isAllSelect ? {
        selected: allSelectedMap,
        // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
        legendIndex: actionLegendIndices
    } : {
        name: payload.name,
        selected: allSelectedMap
    };
}
function makeSelectedMap(legendModel, out) {
    var selectedMap = out || {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(legendModel.getData(), function(model) {
        var name = model.get('name');
        // Wrap element
        if (name === '\n' || name === '') {
            return;
        }
        var isItemSelected = legendModel.isSelected(name);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(selectedMap, name)) {
            // Unselected if any legend is unselected
            selectedMap[name] = selectedMap[name] && isItemSelected;
        } else {
            selectedMap[name] = isItemSelected;
        }
    });
    return selectedMap;
}
function installLegendAction(registers) {
    /**
   * @event legendToggleSelect
   * @type {Object}
   * @property {string} type 'legendToggleSelect'
   * @property {string} [from]
   * @property {string} name Series name or data item name
   */ registers.registerAction('legendToggleSelect', 'legendselectchanged', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'toggleSelected'));
    registers.registerAction('legendAllSelect', 'legendselectall', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'allSelect'));
    registers.registerAction('legendInverseSelect', 'legendinverseselect', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'inverseSelect'));
    /**
   * @event legendSelect
   * @type {Object}
   * @property {string} type 'legendSelect'
   * @property {string} name Series name or data item name
   */ registers.registerAction('legendSelect', 'legendselected', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'select'));
    /**
   * @event legendUnSelect
   * @type {Object}
   * @property {string} type 'legendUnSelect'
   * @property {string} name Series name or data item name
   */ registers.registerAction('legendUnSelect', 'legendunselected', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(legendSelectActionHandler, 'unSelect'));
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/installLegendPlain.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/LegendModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/LegendView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$legendFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/legendFilter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$legendAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/legendAction.js [app-client] (ecmascript)");
;
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.SERIES_FILTER, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$legendFilter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSubTypeDefaulter('legend', function() {
        return 'plain';
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$legendAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installLegendAction"])(registers);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/ScrollableLegendModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/LegendModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
;
;
;
;
var ScrollableLegendModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ScrollableLegendModel, _super);
    function ScrollableLegendModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ScrollableLegendModel.type;
        return _this;
    }
    /**
   * @param {number} scrollDataIndex
   */ ScrollableLegendModel.prototype.setScrollDataIndex = function(scrollDataIndex) {
        this.option.scrollDataIndex = scrollDataIndex;
    };
    ScrollableLegendModel.prototype.init = function(option, parentModel, ecModel) {
        var inputPositionParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutParams"])(option);
        _super.prototype.init.call(this, option, parentModel, ecModel);
        mergeAndNormalizeLayoutParams(this, option, inputPositionParams);
    };
    /**
   * @override
   */ ScrollableLegendModel.prototype.mergeOption = function(option, ecModel) {
        _super.prototype.mergeOption.call(this, option, ecModel);
        mergeAndNormalizeLayoutParams(this, this.option, option);
    };
    ScrollableLegendModel.type = 'legend.scroll';
    ScrollableLegendModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        scrollDataIndex: 0,
        pageButtonItemGap: 5,
        pageButtonGap: null,
        pageButtonPosition: 'end',
        pageFormatter: '{current}/{total}',
        pageIcons: {
            horizontal: [
                'M0,0L12,-10L12,10z',
                'M0,0L-12,-10L-12,10z'
            ],
            vertical: [
                'M0,0L20,0L10,-20z',
                'M0,0L20,0L10,20z'
            ]
        },
        pageIconColor: '#2f4554',
        pageIconInactiveColor: '#aaa',
        pageIconSize: 15,
        pageTextStyle: {
            color: '#333'
        },
        animationDurationUpdate: 800
    });
    return ScrollableLegendModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
;
// Do not `ignoreSize` to enable setting {left: 10, right: 10}.
function mergeAndNormalizeLayoutParams(legendModel, target, raw) {
    var orient = legendModel.getOrient();
    var ignoreSize = [
        1,
        1
    ];
    ignoreSize[orient.index] = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeLayoutParam"])(target, raw, {
        type: 'box',
        ignoreSize: !!ignoreSize
    });
}
const __TURBOPACK__default__export__ = ScrollableLegendModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/ScrollableLegendView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
/**
 * Separate legend and scrollable legend to reduce package size.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/LegendView.js [app-client] (ecmascript)");
;
;
;
;
;
var Group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group;
var WH = [
    'width',
    'height'
];
var XY = [
    'x',
    'y'
];
var ScrollableLegendView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ScrollableLegendView, _super);
    function ScrollableLegendView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ScrollableLegendView.type;
        _this.newlineDisabled = true;
        _this._currentIndex = 0;
        return _this;
    }
    ScrollableLegendView.prototype.init = function() {
        _super.prototype.init.call(this);
        this.group.add(this._containerGroup = new Group());
        this._containerGroup.add(this.getContentGroup());
        this.group.add(this._controllerGroup = new Group());
    };
    /**
   * @override
   */ ScrollableLegendView.prototype.resetInner = function() {
        _super.prototype.resetInner.call(this);
        this._controllerGroup.removeAll();
        this._containerGroup.removeClipPath();
        this._containerGroup.__rectSize = null;
    };
    /**
   * @override
   */ ScrollableLegendView.prototype.renderInner = function(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
        var self = this;
        // Render content items.
        _super.prototype.renderInner.call(this, itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
        var controllerGroup = this._controllerGroup;
        // FIXME: support be 'auto' adapt to size number text length,
        // e.g., '3/12345' should not overlap with the control arrow button.
        var pageIconSize = legendModel.get('pageIconSize', true);
        var pageIconSizeArr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isArray(pageIconSize) ? pageIconSize : [
            pageIconSize,
            pageIconSize
        ];
        createPageButton('pagePrev', 0);
        var pageTextStyleModel = legendModel.getModel('pageTextStyle');
        controllerGroup.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Text({
            name: 'pageText',
            style: {
                // Placeholder to calculate a proper layout.
                text: 'xx/xx',
                fill: pageTextStyleModel.getTextColor(),
                font: pageTextStyleModel.getFont(),
                verticalAlign: 'middle',
                align: 'center'
            },
            silent: true
        }));
        createPageButton('pageNext', 1);
        function createPageButton(name, iconIdx) {
            var pageDataIndexName = name + 'DataIndex';
            var icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createIcon(legendModel.get('pageIcons', true)[legendModel.getOrient().name][iconIdx], {
                // Buttons will be created in each render, so we do not need
                // to worry about avoiding using legendModel kept in scope.
                onclick: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bind(self._pageGo, self, pageDataIndexName, legendModel, api)
            }, {
                x: -pageIconSizeArr[0] / 2,
                y: -pageIconSizeArr[1] / 2,
                width: pageIconSizeArr[0],
                height: pageIconSizeArr[1]
            });
            icon.name = name;
            controllerGroup.add(icon);
        }
    };
    /**
   * @override
   */ ScrollableLegendView.prototype.layoutInner = function(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
        var selectorGroup = this.getSelectorGroup();
        var orientIdx = legendModel.getOrient().index;
        var wh = WH[orientIdx];
        var xy = XY[orientIdx];
        var hw = WH[1 - orientIdx];
        var yx = XY[1 - orientIdx];
        selector && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.box(// Buttons in selectorGroup always layout horizontally
        'horizontal', selectorGroup, legendModel.get('selectorItemGap', true));
        var selectorButtonGap = legendModel.get('selectorButtonGap', true);
        var selectorRect = selectorGroup.getBoundingRect();
        var selectorPos = [
            -selectorRect.x,
            -selectorRect.y
        ];
        var processMaxSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.clone(maxSize);
        selector && (processMaxSize[wh] = maxSize[wh] - selectorRect[wh] - selectorButtonGap);
        var mainRect = this._layoutContentAndController(legendModel, isFirstRender, processMaxSize, orientIdx, wh, hw, yx, xy);
        if (selector) {
            if (selectorPosition === 'end') {
                selectorPos[orientIdx] += mainRect[wh] + selectorButtonGap;
            } else {
                var offset = selectorRect[wh] + selectorButtonGap;
                selectorPos[orientIdx] -= offset;
                mainRect[xy] -= offset;
            }
            mainRect[wh] += selectorRect[wh] + selectorButtonGap;
            selectorPos[1 - orientIdx] += mainRect[yx] + mainRect[hw] / 2 - selectorRect[hw] / 2;
            mainRect[hw] = Math.max(mainRect[hw], selectorRect[hw]);
            mainRect[yx] = Math.min(mainRect[yx], selectorRect[yx] + selectorPos[1 - orientIdx]);
            selectorGroup.x = selectorPos[0];
            selectorGroup.y = selectorPos[1];
            selectorGroup.markRedraw();
        }
        return mainRect;
    };
    ScrollableLegendView.prototype._layoutContentAndController = function(legendModel, isFirstRender, maxSize, orientIdx, wh, hw, yx, xy) {
        var contentGroup = this.getContentGroup();
        var containerGroup = this._containerGroup;
        var controllerGroup = this._controllerGroup;
        // Place items in contentGroup.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.box(legendModel.get('orient'), contentGroup, legendModel.get('itemGap'), !orientIdx ? null : maxSize.width, orientIdx ? null : maxSize.height);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.box(// Buttons in controller are layout always horizontally.
        'horizontal', controllerGroup, legendModel.get('pageButtonItemGap', true));
        var contentRect = contentGroup.getBoundingRect();
        var controllerRect = controllerGroup.getBoundingRect();
        var showController = this._showController = contentRect[wh] > maxSize[wh];
        // In case that the inner elements of contentGroup layout do not based on [0, 0]
        var contentPos = [
            -contentRect.x,
            -contentRect.y
        ];
        // Remain contentPos when scroll animation perfroming.
        // If first rendering, `contentGroup.position` is [0, 0], which
        // does not make sense and may cause unexepcted animation if adopted.
        if (!isFirstRender) {
            contentPos[orientIdx] = contentGroup[xy];
        }
        // Layout container group based on 0.
        var containerPos = [
            0,
            0
        ];
        var controllerPos = [
            -controllerRect.x,
            -controllerRect.y
        ];
        var pageButtonGap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.retrieve2(legendModel.get('pageButtonGap', true), legendModel.get('itemGap', true));
        // Place containerGroup and controllerGroup and contentGroup.
        if (showController) {
            var pageButtonPosition = legendModel.get('pageButtonPosition', true);
            // controller is on the right / bottom.
            if (pageButtonPosition === 'end') {
                controllerPos[orientIdx] += maxSize[wh] - controllerRect[wh];
            } else {
                containerPos[orientIdx] += controllerRect[wh] + pageButtonGap;
            }
        }
        // Always align controller to content as 'middle'.
        controllerPos[1 - orientIdx] += contentRect[hw] / 2 - controllerRect[hw] / 2;
        contentGroup.setPosition(contentPos);
        containerGroup.setPosition(containerPos);
        controllerGroup.setPosition(controllerPos);
        // Calculate `mainRect` and set `clipPath`.
        // mainRect should not be calculated by `this.group.getBoundingRect()`
        // for sake of the overflow.
        var mainRect = {
            x: 0,
            y: 0
        };
        // Consider content may be overflow (should be clipped).
        mainRect[wh] = showController ? maxSize[wh] : contentRect[wh];
        mainRect[hw] = Math.max(contentRect[hw], controllerRect[hw]);
        // `containerRect[yx] + containerPos[1 - orientIdx]` is 0.
        mainRect[yx] = Math.min(0, controllerRect[yx] + controllerPos[1 - orientIdx]);
        containerGroup.__rectSize = maxSize[wh];
        if (showController) {
            var clipShape = {
                x: 0,
                y: 0
            };
            clipShape[wh] = Math.max(maxSize[wh] - controllerRect[wh] - pageButtonGap, 0);
            clipShape[hw] = mainRect[hw];
            containerGroup.setClipPath(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Rect({
                shape: clipShape
            }));
            // Consider content may be larger than container, container rect
            // can not be obtained from `containerGroup.getBoundingRect()`.
            containerGroup.__rectSize = clipShape[wh];
        } else {
            // Do not remove or ignore controller. Keep them set as placeholders.
            controllerGroup.eachChild(function(child) {
                child.attr({
                    invisible: true,
                    silent: true
                });
            });
        }
        // Content translate animation.
        var pageInfo = this._getPageInfo(legendModel);
        pageInfo.pageIndex != null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.updateProps(contentGroup, {
            x: pageInfo.contentPosition[0],
            y: pageInfo.contentPosition[1]
        }, // When switch from "show controller" to "not show controller", view should be
        // updated immediately without animation, otherwise causes weird effect.
        showController ? legendModel : null);
        this._updatePageInfoView(legendModel, pageInfo);
        return mainRect;
    };
    ScrollableLegendView.prototype._pageGo = function(to, legendModel, api) {
        var scrollDataIndex = this._getPageInfo(legendModel)[to];
        scrollDataIndex != null && api.dispatchAction({
            type: 'legendScroll',
            scrollDataIndex: scrollDataIndex,
            legendId: legendModel.id
        });
    };
    ScrollableLegendView.prototype._updatePageInfoView = function(legendModel, pageInfo) {
        var controllerGroup = this._controllerGroup;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each([
            'pagePrev',
            'pageNext'
        ], function(name) {
            var key = name + 'DataIndex';
            var canJump = pageInfo[key] != null;
            var icon = controllerGroup.childOfName(name);
            if (icon) {
                icon.setStyle('fill', canJump ? legendModel.get('pageIconColor', true) : legendModel.get('pageIconInactiveColor', true));
                icon.cursor = canJump ? 'pointer' : 'default';
            }
        });
        var pageText = controllerGroup.childOfName('pageText');
        var pageFormatter = legendModel.get('pageFormatter');
        var pageIndex = pageInfo.pageIndex;
        var current = pageIndex != null ? pageIndex + 1 : 0;
        var total = pageInfo.pageCount;
        pageText && pageFormatter && pageText.setStyle('text', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isString(pageFormatter) ? pageFormatter.replace('{current}', current == null ? '' : current + '').replace('{total}', total == null ? '' : total + '') : pageFormatter({
            current: current,
            total: total
        }));
    };
    /**
   *  contentPosition: Array.<number>, null when data item not found.
   *  pageIndex: number, null when data item not found.
   *  pageCount: number, always be a number, can be 0.
   *  pagePrevDataIndex: number, null when no previous page.
   *  pageNextDataIndex: number, null when no next page.
   * }
   */ ScrollableLegendView.prototype._getPageInfo = function(legendModel) {
        var scrollDataIndex = legendModel.get('scrollDataIndex', true);
        var contentGroup = this.getContentGroup();
        var containerRectSize = this._containerGroup.__rectSize;
        var orientIdx = legendModel.getOrient().index;
        var wh = WH[orientIdx];
        var xy = XY[orientIdx];
        var targetItemIndex = this._findTargetItemIndex(scrollDataIndex);
        var children = contentGroup.children();
        var targetItem = children[targetItemIndex];
        var itemCount = children.length;
        var pCount = !itemCount ? 0 : 1;
        var result = {
            contentPosition: [
                contentGroup.x,
                contentGroup.y
            ],
            pageCount: pCount,
            pageIndex: pCount - 1,
            pagePrevDataIndex: null,
            pageNextDataIndex: null
        };
        if (!targetItem) {
            return result;
        }
        var targetItemInfo = getItemInfo(targetItem);
        result.contentPosition[orientIdx] = -targetItemInfo.s;
        // Strategy:
        // (1) Always align based on the left/top most item.
        // (2) It is user-friendly that the last item shown in the
        // current window is shown at the begining of next window.
        // Otherwise if half of the last item is cut by the window,
        // it will have no chance to display entirely.
        // (3) Consider that item size probably be different, we
        // have calculate pageIndex by size rather than item index,
        // and we can not get page index directly by division.
        // (4) The window is to narrow to contain more than
        // one item, we should make sure that the page can be fliped.
        for(var i = targetItemIndex + 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i <= itemCount; ++i){
            currItemInfo = getItemInfo(children[i]);
            if (// Half of the last item is out of the window.
            !currItemInfo && winEndItemInfo.e > winStartItemInfo.s + containerRectSize || currItemInfo && !intersect(currItemInfo, winStartItemInfo.s)) {
                if (winEndItemInfo.i > winStartItemInfo.i) {
                    winStartItemInfo = winEndItemInfo;
                } else {
                    // e.g., when page size is smaller than item size.
                    winStartItemInfo = currItemInfo;
                }
                if (winStartItemInfo) {
                    if (result.pageNextDataIndex == null) {
                        result.pageNextDataIndex = winStartItemInfo.i;
                    }
                    ++result.pageCount;
                }
            }
            winEndItemInfo = currItemInfo;
        }
        for(var i = targetItemIndex - 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i >= -1; --i){
            currItemInfo = getItemInfo(children[i]);
            if (// If the the end item does not intersect with the window started
            // from the current item, a page can be settled.
            (!currItemInfo || !intersect(winEndItemInfo, currItemInfo.s)) && winStartItemInfo.i < winEndItemInfo.i) {
                winEndItemInfo = winStartItemInfo;
                if (result.pagePrevDataIndex == null) {
                    result.pagePrevDataIndex = winStartItemInfo.i;
                }
                ++result.pageCount;
                ++result.pageIndex;
            }
            winStartItemInfo = currItemInfo;
        }
        return result;
        "TURBOPACK unreachable";
        function getItemInfo(el) {
            if (el) {
                var itemRect = el.getBoundingRect();
                var start = itemRect[xy] + el[xy];
                return {
                    s: start,
                    e: start + itemRect[wh],
                    i: el.__legendDataIndex
                };
            }
        }
        function intersect(itemInfo, winStart) {
            return itemInfo.e >= winStart && itemInfo.s <= winStart + containerRectSize;
        }
    };
    ScrollableLegendView.prototype._findTargetItemIndex = function(targetDataIndex) {
        if (!this._showController) {
            return 0;
        }
        var index;
        var contentGroup = this.getContentGroup();
        var defaultIndex;
        contentGroup.eachChild(function(child, idx) {
            var legendDataIdx = child.__legendDataIndex;
            // FIXME
            // If the given targetDataIndex (from model) is illegal,
            // we use defaultIndex. But the index on the legend model and
            // action payload is still illegal. That case will not be
            // changed until some scenario requires.
            if (defaultIndex == null && legendDataIdx != null) {
                defaultIndex = idx;
            }
            if (legendDataIdx === targetDataIndex) {
                index = idx;
            }
        });
        return index != null ? index : defaultIndex;
    };
    ScrollableLegendView.type = 'legend.scroll';
    return ScrollableLegendView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$LegendView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = ScrollableLegendView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/scrollableLegendAction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>installScrollableLegendAction)
});
function installScrollableLegendAction(registers) {
    /**
   * @event legendScroll
   * @type {Object}
   * @property {string} type 'legendScroll'
   * @property {string} scrollDataIndex
   */ registers.registerAction('legendScroll', 'legendscroll', function(payload, ecModel) {
        var scrollDataIndex = payload.scrollDataIndex;
        scrollDataIndex != null && ecModel.eachComponent({
            mainType: 'legend',
            subType: 'scroll',
            query: payload
        }, function(legendModel) {
            legendModel.setScrollDataIndex(scrollDataIndex);
        });
    });
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/installLegendScroll.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendPlain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/installLegendPlain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$ScrollableLegendModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/ScrollableLegendModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$ScrollableLegendView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/ScrollableLegendView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$scrollableLegendAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/scrollableLegendAction.js [app-client] (ecmascript)");
;
;
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendPlain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$ScrollableLegendModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$ScrollableLegendView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$scrollableLegendAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(registers);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendPlain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/installLegendPlain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/installLegendScroll.js [app-client] (ecmascript)");
;
;
;
function install(registers) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendPlain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$installLegendScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript) <export install as LegendComponent>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "LegendComponent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/install.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/mixin/dataFormat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function fillLabel(opt) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEmphasis"])(opt, 'label', [
        'show'
    ]);
}
// { [componentType]: MarkerModel }
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var MarkerModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MarkerModel, _super);
    function MarkerModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkerModel.type;
        /**
     * If marker model is created by self from series
     */ _this.createdBySelf = false;
        return _this;
    }
    /**
   * @overrite
   */ MarkerModel.prototype.init = function(option, parentModel, ecModel) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.type === 'marker') {
                throw new Error('Marker component is abstract component. Use markLine, markPoint, markArea instead.');
            }
        }
        this.mergeDefaultAndTheme(option, ecModel);
        this._mergeOption(option, ecModel, false, true);
    };
    MarkerModel.prototype.isAnimationEnabled = function() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node) {
            return false;
        }
        var hostSeries = this.__hostSeries;
        return this.getShallow('animation') && hostSeries && hostSeries.isAnimationEnabled();
    };
    /**
   * @overrite
   */ MarkerModel.prototype.mergeOption = function(newOpt, ecModel) {
        this._mergeOption(newOpt, ecModel, false, false);
    };
    MarkerModel.prototype._mergeOption = function(newOpt, ecModel, createdBySelf, isInit) {
        var componentType = this.mainType;
        if (!createdBySelf) {
            ecModel.eachSeries(function(seriesModel) {
                // mainType can be markPoint, markLine, markArea
                var markerOpt = seriesModel.get(this.mainType, true);
                var markerModel = inner(seriesModel)[componentType];
                if (!markerOpt || !markerOpt.data) {
                    inner(seriesModel)[componentType] = null;
                    return;
                }
                if (!markerModel) {
                    if (isInit) {
                        // Default label emphasis `position` and `show`
                        fillLabel(markerOpt);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(markerOpt.data, function(item) {
                        // FIXME Overwrite fillLabel method ?
                        if (item instanceof Array) {
                            fillLabel(item[0]);
                            fillLabel(item[1]);
                        } else {
                            fillLabel(item);
                        }
                    });
                    markerModel = this.createMarkerModelFromSeries(markerOpt, this, ecModel);
                    // markerModel = new ImplementedMarkerModel(
                    //     markerOpt, this, ecModel
                    // );
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.extend(markerModel, {
                        mainType: this.mainType,
                        // Use the same series index and name
                        seriesIndex: seriesModel.seriesIndex,
                        name: seriesModel.name,
                        createdBySelf: true
                    });
                    markerModel.__hostSeries = seriesModel;
                } else {
                    markerModel._mergeOption(markerOpt, ecModel, true);
                }
                inner(seriesModel)[componentType] = markerModel;
            }, this);
        }
    };
    MarkerModel.prototype.formatTooltip = function(dataIndex, multipleSeries, dataType) {
        var data = this.getData();
        var value = this.getRawValue(dataIndex);
        var itemName = data.getName(dataIndex);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('section', {
            header: this.name,
            blocks: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$tooltip$2f$tooltipMarkup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTooltipMarkup"])('nameValue', {
                    name: itemName,
                    value: value,
                    noName: !itemName,
                    noValue: value == null
                })
            ]
        });
    };
    MarkerModel.prototype.getData = function() {
        return this._data;
    };
    MarkerModel.prototype.setData = function(data) {
        this._data = data;
    };
    MarkerModel.prototype.getDataParams = function(dataIndex, dataType) {
        var params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataFormatMixin"].prototype.getDataParams.call(this, dataIndex, dataType);
        var hostSeries = this.__hostSeries;
        if (hostSeries) {
            params.seriesId = hostSeries.id;
            params.seriesName = hostSeries.name;
            params.seriesType = hostSeries.subType;
        }
        return params;
    };
    MarkerModel.getMarkerModelFromSeries = function(seriesModel, // Support three types of markers. Strict check.
    componentType) {
        return inner(seriesModel)[componentType];
    };
    MarkerModel.type = 'marker';
    MarkerModel.dependencies = [
        'series',
        'grid',
        'polar',
        'geo'
    ];
    return MarkerModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.mixin(MarkerModel, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$mixin$2f$dataFormat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataFormatMixin"].prototype);
const __TURBOPACK__default__export__ = MarkerModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkLineModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-client] (ecmascript)");
;
;
var MarkLineModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MarkLineModel, _super);
    function MarkLineModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkLineModel.type;
        return _this;
    }
    MarkLineModel.prototype.createMarkerModelFromSeries = function(markerOpt, masterMarkerModel, ecModel) {
        return new MarkLineModel(markerOpt, masterMarkerModel, ecModel);
    };
    MarkLineModel.type = 'markLine';
    MarkLineModel.defaultOption = {
        // zlevel: 0,
        z: 5,
        symbol: [
            'circle',
            'arrow'
        ],
        symbolSize: [
            8,
            16
        ],
        // symbolRotate: 0,
        symbolOffset: 0,
        precision: 2,
        tooltip: {
            trigger: 'item'
        },
        label: {
            show: true,
            position: 'end',
            distance: 5
        },
        lineStyle: {
            type: 'dashed'
        },
        emphasis: {
            label: {
                show: true
            },
            lineStyle: {
                width: 3
            }
        },
        animationEasing: 'linear'
    };
    return MarkLineModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = MarkLineModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/markerHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "createMarkerDimValueGetter": (()=>createMarkerDimValueGetter),
    "dataFilter": (()=>dataFilter),
    "dataTransform": (()=>dataTransform),
    "getAxisInfo": (()=>getAxisInfo),
    "numCalculate": (()=>numCalculate),
    "zoneFilter": (()=>zoneFilter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataValueHelper.js [app-client] (ecmascript)");
;
;
;
;
function hasXOrY(item) {
    return !(isNaN(parseFloat(item.x)) && isNaN(parseFloat(item.y)));
}
function hasXAndY(item) {
    return !isNaN(parseFloat(item.x)) && !isNaN(parseFloat(item.y));
}
function markerTypeCalculatorWithExtent(markerType, data, otherDataDim, targetDataDim, otherCoordIndex, targetCoordIndex) {
    var coordArr = [];
    var stacked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, targetDataDim /* , otherDataDim */ );
    var calcDataDim = stacked ? data.getCalculationInfo('stackResultDimension') : targetDataDim;
    var value = numCalculate(data, calcDataDim, markerType);
    var dataIndex = data.indicesOfNearest(calcDataDim, value)[0];
    coordArr[otherCoordIndex] = data.get(otherDataDim, dataIndex);
    coordArr[targetCoordIndex] = data.get(calcDataDim, dataIndex);
    var coordArrValue = data.get(targetDataDim, dataIndex);
    // Make it simple, do not visit all stacked value to count precision.
    var precision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getPrecision(data.get(targetDataDim, dataIndex));
    precision = Math.min(precision, 20);
    if (precision >= 0) {
        coordArr[targetCoordIndex] = +coordArr[targetCoordIndex].toFixed(precision);
    }
    return [
        coordArr,
        coordArrValue
    ];
}
// TODO Specified percent
var markerTypeCalculator = {
    min: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(markerTypeCalculatorWithExtent, 'min'),
    max: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(markerTypeCalculatorWithExtent, 'max'),
    average: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(markerTypeCalculatorWithExtent, 'average'),
    median: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(markerTypeCalculatorWithExtent, 'median')
};
function dataTransform(seriesModel, item) {
    if (!item) {
        return;
    }
    var data = seriesModel.getData();
    var coordSys = seriesModel.coordinateSystem;
    var dims = coordSys && coordSys.dimensions;
    // 1. If not specify the position with pixel directly
    // 2. If `coord` is not a data array. Which uses `xAxis`,
    // `yAxis` to specify the coord on each dimension
    // parseFloat first because item.x and item.y can be percent string like '20%'
    if (!hasXAndY(item) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(item.coord) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(dims)) {
        var axisInfo = getAxisInfo(item, data, coordSys, seriesModel);
        // Clone the option
        // Transform the properties xAxis, yAxis, radiusAxis, angleAxis, geoCoord to value
        item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(item);
        if (item.type && markerTypeCalculator[item.type] && axisInfo.baseAxis && axisInfo.valueAxis) {
            var otherCoordIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(dims, axisInfo.baseAxis.dim);
            var targetCoordIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(dims, axisInfo.valueAxis.dim);
            var coordInfo = markerTypeCalculator[item.type](data, axisInfo.baseDataDim, axisInfo.valueDataDim, otherCoordIndex, targetCoordIndex);
            item.coord = coordInfo[0];
            // Force to use the value of calculated value.
            // let item use the value without stack.
            item.value = coordInfo[1];
        } else {
            // FIXME Only has one of xAxis and yAxis.
            item.coord = [
                item.xAxis != null ? item.xAxis : item.radiusAxis,
                item.yAxis != null ? item.yAxis : item.angleAxis
            ];
        }
    }
    // x y is provided
    if (item.coord == null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(dims)) {
        item.coord = [];
    } else {
        // Each coord support max, min, average
        var coord = item.coord;
        for(var i = 0; i < 2; i++){
            if (markerTypeCalculator[coord[i]]) {
                coord[i] = numCalculate(data, data.mapDimension(dims[i]), coord[i]);
            }
        }
    }
    return item;
}
function getAxisInfo(item, data, coordSys, seriesModel) {
    var ret = {};
    if (item.valueIndex != null || item.valueDim != null) {
        ret.valueDataDim = item.valueIndex != null ? data.getDimension(item.valueIndex) : item.valueDim;
        ret.valueAxis = coordSys.getAxis(dataDimToCoordDim(seriesModel, ret.valueDataDim));
        ret.baseAxis = coordSys.getOtherAxis(ret.valueAxis);
        ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
    } else {
        ret.baseAxis = seriesModel.getBaseAxis();
        ret.valueAxis = coordSys.getOtherAxis(ret.baseAxis);
        ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
        ret.valueDataDim = data.mapDimension(ret.valueAxis.dim);
    }
    return ret;
}
function dataDimToCoordDim(seriesModel, dataDim) {
    var dimItem = seriesModel.getData().getDimensionInfo(dataDim);
    return dimItem && dimItem.coordDim;
}
function dataFilter(// Currently only polar and cartesian has containData.
coordSys, item) {
    // Always return true if there is no coordSys
    return coordSys && coordSys.containData && item.coord && !hasXOrY(item) ? coordSys.containData(item.coord) : true;
}
function zoneFilter(// Currently only polar and cartesian has containData.
coordSys, item1, item2) {
    // Always return true if there is no coordSys
    return coordSys && coordSys.containZone && item1.coord && item2.coord && !hasXOrY(item1) && !hasXOrY(item2) ? coordSys.containZone(item1.coord, item2.coord) : true;
}
function createMarkerDimValueGetter(inCoordSys, dims) {
    return inCoordSys ? function(item, dimName, dataIndex, dimIndex) {
        var rawVal = dimIndex < 2 ? item.coord && item.coord[dimIndex] : item.value;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDataValue"])(rawVal, dims[dimIndex]);
    } : function(item, dimName, dataIndex, dimIndex) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataValueHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseDataValue"])(item.value, dims[dimIndex]);
    };
}
function numCalculate(data, valueDataDim, type) {
    if (type === 'average') {
        var sum_1 = 0;
        var count_1 = 0;
        data.each(valueDataDim, function(val, idx) {
            if (!isNaN(val)) {
                sum_1 += val;
                count_1++;
            }
        });
        return sum_1 / count_1;
    } else if (type === 'median') {
        return data.getMedian(valueDataDim);
    } else {
        // max & min
        return data.getDataExtent(valueDataDim)[type === 'max' ? 1 : 0];
    }
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
;
;
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var MarkerView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MarkerView, _super);
    function MarkerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkerView.type;
        return _this;
    }
    MarkerView.prototype.init = function() {
        this.markerGroupMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    };
    MarkerView.prototype.render = function(markerModel, ecModel, api) {
        var _this = this;
        var markerGroupMap = this.markerGroupMap;
        markerGroupMap.each(function(item) {
            inner(item).keep = false;
        });
        ecModel.eachSeries(function(seriesModel) {
            var markerModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getMarkerModelFromSeries(seriesModel, _this.type);
            markerModel && _this.renderSeries(seriesModel, markerModel, ecModel, api);
        });
        markerGroupMap.each(function(item) {
            !inner(item).keep && _this.group.remove(item.group);
        });
    };
    MarkerView.prototype.markKeep = function(drawGroup) {
        inner(drawGroup).keep = true;
    };
    MarkerView.prototype.toggleBlurSeries = function(seriesModelList, isBlur) {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(seriesModelList, function(seriesModel) {
            var markerModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getMarkerModelFromSeries(seriesModel, _this.type);
            if (markerModel) {
                var data = markerModel.getData();
                data.eachItemGraphicEl(function(el) {
                    if (el) {
                        isBlur ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterBlur"])(el) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveBlur"])(el);
                    }
                });
            }
        });
    };
    MarkerView.type = 'marker';
    return MarkerView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = MarkerView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkLineView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/markerHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LineDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LineDraw.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
var markLineTransform = function(seriesModel, coordSys, mlModel, item) {
    var data = seriesModel.getData();
    var itemArray;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(item)) {
        // Special type markLine like 'min', 'max', 'average', 'median'
        var mlType = item.type;
        if (mlType === 'min' || mlType === 'max' || mlType === 'average' || mlType === 'median' || item.xAxis != null || item.yAxis != null) {
            var valueAxis = void 0;
            var value = void 0;
            if (item.yAxis != null || item.xAxis != null) {
                valueAxis = coordSys.getAxis(item.yAxis != null ? 'y' : 'x');
                value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve"])(item.yAxis, item.xAxis);
            } else {
                var axisInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getAxisInfo(item, data, coordSys, seriesModel);
                valueAxis = axisInfo.valueAxis;
                var valueDataDim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStackedDimension"])(data, axisInfo.valueDataDim);
                value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.numCalculate(data, valueDataDim, mlType);
            }
            var valueIndex = valueAxis.dim === 'x' ? 0 : 1;
            var baseIndex = 1 - valueIndex;
            // Normized to 2d data with start and end point
            var mlFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(item);
            var mlTo = {
                coord: []
            };
            mlFrom.type = null;
            mlFrom.coord = [];
            mlFrom.coord[baseIndex] = -Infinity;
            mlTo.coord[baseIndex] = Infinity;
            var precision = mlModel.get('precision');
            if (precision >= 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"])(value)) {
                value = +value.toFixed(Math.min(precision, 20));
            }
            mlFrom.coord[valueIndex] = mlTo.coord[valueIndex] = value;
            itemArray = [
                mlFrom,
                mlTo,
                {
                    type: mlType,
                    valueIndex: item.valueIndex,
                    // Force to use the value of calculated value.
                    value: value
                }
            ];
        } else {
            // Invalid data
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logError"])('Invalid markLine data.');
            }
            itemArray = [];
        }
    } else {
        itemArray = item;
    }
    var normalizedItem = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.dataTransform(seriesModel, itemArray[0]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.dataTransform(seriesModel, itemArray[1]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, itemArray[2])
    ];
    // Avoid line data type is extended by from(to) data type
    normalizedItem[2].type = normalizedItem[2].type || null;
    // Merge from option and to option into line option
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(normalizedItem[2], normalizedItem[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(normalizedItem[2], normalizedItem[1]);
    return normalizedItem;
};
function isInfinity(val) {
    return !isNaN(val) && !isFinite(val);
}
// If a markLine has one dim
function ifMarkLineHasOnlyDim(dimIndex, fromCoord, toCoord, coordSys) {
    var otherDimIndex = 1 - dimIndex;
    var dimName = coordSys.dimensions[dimIndex];
    return isInfinity(fromCoord[otherDimIndex]) && isInfinity(toCoord[otherDimIndex]) && fromCoord[dimIndex] === toCoord[dimIndex] && coordSys.getAxis(dimName).containData(fromCoord[dimIndex]);
}
function markLineFilter(coordSys, item) {
    if (coordSys.type === 'cartesian2d') {
        var fromCoord = item[0].coord;
        var toCoord = item[1].coord;
        // In case
        // {
        //  markLine: {
        //    data: [{ yAxis: 2 }]
        //  }
        // }
        if (fromCoord && toCoord && (ifMarkLineHasOnlyDim(1, fromCoord, toCoord, coordSys) || ifMarkLineHasOnlyDim(0, fromCoord, toCoord, coordSys))) {
            return true;
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.dataFilter(coordSys, item[0]) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.dataFilter(coordSys, item[1]);
}
function updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var itemModel = data.getItemModel(idx);
    var point;
    var xPx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.parsePercent(itemModel.get('x'), api.getWidth());
    var yPx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.parsePercent(itemModel.get('y'), api.getHeight());
    if (!isNaN(xPx) && !isNaN(yPx)) {
        point = [
            xPx,
            yPx
        ];
    } else {
        // Chart like bar may have there own marker positioning logic
        if (seriesModel.getMarkerPosition) {
            // Use the getMarkerPosition
            point = seriesModel.getMarkerPosition(data.getValues(data.dimensions, idx));
        } else {
            var dims = coordSys.dimensions;
            var x = data.get(dims[0], idx);
            var y = data.get(dims[1], idx);
            point = coordSys.dataToPoint([
                x,
                y
            ]);
        }
        // Expand line to the edge of grid if value on one axis is Inifnity
        // In case
        //  markLine: {
        //    data: [{
        //      yAxis: 2
        //      // or
        //      type: 'average'
        //    }]
        //  }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coordSys, 'cartesian2d')) {
            // TODO: TYPE ts@4.1 may still infer it as Axis instead of Axis2D. Not sure if it's a bug
            var xAxis = coordSys.getAxis('x');
            var yAxis = coordSys.getAxis('y');
            var dims = coordSys.dimensions;
            if (isInfinity(data.get(dims[0], idx))) {
                point[0] = xAxis.toGlobalCoord(xAxis.getExtent()[isFrom ? 0 : 1]);
            } else if (isInfinity(data.get(dims[1], idx))) {
                point[1] = yAxis.toGlobalCoord(yAxis.getExtent()[isFrom ? 0 : 1]);
            }
        }
        // Use x, y if has any
        if (!isNaN(xPx)) {
            point[0] = xPx;
        }
        if (!isNaN(yPx)) {
            point[1] = yPx;
        }
    }
    data.setItemLayout(idx, point);
}
var MarkLineView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MarkLineView, _super);
    function MarkLineView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = MarkLineView.type;
        return _this;
    }
    MarkLineView.prototype.updateTransform = function(markLineModel, ecModel, api) {
        ecModel.eachSeries(function(seriesModel) {
            var mlModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getMarkerModelFromSeries(seriesModel, 'markLine');
            if (mlModel) {
                var mlData_1 = mlModel.getData();
                var fromData_1 = inner(mlModel).from;
                var toData_1 = inner(mlModel).to;
                // Update visual and layout of from symbol and to symbol
                fromData_1.each(function(idx) {
                    updateSingleMarkerEndLayout(fromData_1, idx, true, seriesModel, api);
                    updateSingleMarkerEndLayout(toData_1, idx, false, seriesModel, api);
                });
                // Update layout of line
                mlData_1.each(function(idx) {
                    mlData_1.setItemLayout(idx, [
                        fromData_1.getItemLayout(idx),
                        toData_1.getItemLayout(idx)
                    ]);
                });
                this.markerGroupMap.get(seriesModel.id).updateLayout();
            }
        }, this);
    };
    MarkLineView.prototype.renderSeries = function(seriesModel, mlModel, ecModel, api) {
        var coordSys = seriesModel.coordinateSystem;
        var seriesId = seriesModel.id;
        var seriesData = seriesModel.getData();
        var lineDrawMap = this.markerGroupMap;
        var lineDraw = lineDrawMap.get(seriesId) || lineDrawMap.set(seriesId, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LineDraw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]());
        this.group.add(lineDraw.group);
        var mlData = createList(coordSys, seriesModel, mlModel);
        var fromData = mlData.from;
        var toData = mlData.to;
        var lineData = mlData.line;
        inner(mlModel).from = fromData;
        inner(mlModel).to = toData;
        // Line data for tooltip and formatter
        mlModel.setData(lineData);
        // TODO
        // Functionally, `symbolSize` & `symbolOffset` can also be 2D array now.
        // But the related logic and type definition are not finished yet.
        // Finish it if required
        var symbolType = mlModel.get('symbol');
        var symbolSize = mlModel.get('symbolSize');
        var symbolRotate = mlModel.get('symbolRotate');
        var symbolOffset = mlModel.get('symbolOffset');
        // TODO: support callback function like markPoint
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(symbolType)) {
            symbolType = [
                symbolType,
                symbolType
            ];
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(symbolSize)) {
            symbolSize = [
                symbolSize,
                symbolSize
            ];
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(symbolRotate)) {
            symbolRotate = [
                symbolRotate,
                symbolRotate
            ];
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(symbolOffset)) {
            symbolOffset = [
                symbolOffset,
                symbolOffset
            ];
        }
        // Update visual and layout of from symbol and to symbol
        mlData.from.each(function(idx) {
            updateDataVisualAndLayout(fromData, idx, true);
            updateDataVisualAndLayout(toData, idx, false);
        });
        // Update visual and layout of line
        lineData.each(function(idx) {
            var lineStyle = lineData.getItemModel(idx).getModel('lineStyle').getLineStyle();
            // lineData.setItemVisual(idx, {
            //     color: lineColor || fromData.getItemVisual(idx, 'color')
            // });
            lineData.setItemLayout(idx, [
                fromData.getItemLayout(idx),
                toData.getItemLayout(idx)
            ]);
            if (lineStyle.stroke == null) {
                lineStyle.stroke = fromData.getItemVisual(idx, 'style').fill;
            }
            lineData.setItemVisual(idx, {
                fromSymbolKeepAspect: fromData.getItemVisual(idx, 'symbolKeepAspect'),
                fromSymbolOffset: fromData.getItemVisual(idx, 'symbolOffset'),
                fromSymbolRotate: fromData.getItemVisual(idx, 'symbolRotate'),
                fromSymbolSize: fromData.getItemVisual(idx, 'symbolSize'),
                fromSymbol: fromData.getItemVisual(idx, 'symbol'),
                toSymbolKeepAspect: toData.getItemVisual(idx, 'symbolKeepAspect'),
                toSymbolOffset: toData.getItemVisual(idx, 'symbolOffset'),
                toSymbolRotate: toData.getItemVisual(idx, 'symbolRotate'),
                toSymbolSize: toData.getItemVisual(idx, 'symbolSize'),
                toSymbol: toData.getItemVisual(idx, 'symbol'),
                style: lineStyle
            });
        });
        lineDraw.updateData(lineData);
        // Set host model for tooltip
        // FIXME
        mlData.line.eachItemGraphicEl(function(el) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(el).dataModel = mlModel;
            el.traverse(function(child) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(child).dataModel = mlModel;
            });
        });
        function updateDataVisualAndLayout(data, idx, isFrom) {
            var itemModel = data.getItemModel(idx);
            updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api);
            var style = itemModel.getModel('itemStyle').getItemStyle();
            if (style.fill == null) {
                style.fill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$visual$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisualFromData"])(seriesData, 'color');
            }
            data.setItemVisual(idx, {
                symbolKeepAspect: itemModel.get('symbolKeepAspect'),
                // `0` should be considered as a valid value, so use `retrieve2` instead of `||`
                symbolOffset: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(itemModel.get('symbolOffset', true), symbolOffset[isFrom ? 0 : 1]),
                symbolRotate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(itemModel.get('symbolRotate', true), symbolRotate[isFrom ? 0 : 1]),
                // TODO: when 2d array is supported, it should ignore parent
                symbolSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(itemModel.get('symbolSize'), symbolSize[isFrom ? 0 : 1]),
                symbol: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["retrieve2"])(itemModel.get('symbol', true), symbolType[isFrom ? 0 : 1]),
                style: style
            });
        }
        this.markKeep(lineDraw);
        lineDraw.group.silent = mlModel.get('silent') || seriesModel.get('silent');
    };
    MarkLineView.type = 'markLine';
    return MarkLineView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkerView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function createList(coordSys, seriesModel, mlModel) {
    var coordDimsInfos;
    if (coordSys) {
        coordDimsInfos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(coordSys && coordSys.dimensions, function(coordDim) {
            var info = seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim)) || {};
            // In map series data don't have lng and lat dimension. Fallback to same with coordSys
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({}, info), {
                name: coordDim,
                // DON'T use ordinalMeta to parse and collect ordinal.
                ordinalMeta: null
            });
        });
    } else {
        coordDimsInfos = [
            {
                name: 'value',
                type: 'float'
            }
        ];
    }
    var fromData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](coordDimsInfos, mlModel);
    var toData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](coordDimsInfos, mlModel);
    // No dimensions
    var lineData = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]([], mlModel);
    var optData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(mlModel.get('data'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(markLineTransform, seriesModel, coordSys, mlModel));
    if (coordSys) {
        optData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(optData, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(markLineFilter, coordSys));
    }
    var dimValueGetter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$markerHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createMarkerDimValueGetter(!!coordSys, coordDimsInfos);
    fromData.initData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(optData, function(item) {
        return item[0];
    }), null, dimValueGetter);
    toData.initData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(optData, function(item) {
        return item[1];
    }), null, dimValueGetter);
    lineData.initData((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(optData, function(item) {
        return item[2];
    }));
    lineData.hasItemOption = true;
    return {
        from: fromData,
        to: toData,
        line: lineData
    };
}
const __TURBOPACK__default__export__ = MarkLineView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>checkMarkerInSeries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
function checkMarkerInSeries(seriesOpts, markerType) {
    if (!seriesOpts) {
        return false;
    }
    var seriesOptArr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(seriesOpts) ? seriesOpts : [
        seriesOpts
    ];
    for(var idx = 0; idx < seriesOptArr.length; idx++){
        if (seriesOptArr[idx] && seriesOptArr[idx][markerType]) {
            return true;
        }
    }
    return false;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkLine.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkLineModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkLineModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkLineView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkLineView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$checkMarkerInSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js [app-client] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkLineModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$MarkLineView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerPreprocessor(function(opt) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$checkMarkerInSeries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(opt.series, 'markLine')) {
            // Make sure markLine component is enabled
            opt.markLine = opt.markLine || {};
        }
    });
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkLine.js [app-client] (ecmascript) <export install as MarkLineComponent>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "MarkLineComponent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$marker$2f$installMarkLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkLine.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/title/install.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var TitleModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TitleModel, _super);
    function TitleModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TitleModel.type;
        _this.layoutMode = {
            type: 'box',
            ignoreSize: true
        };
        return _this;
    }
    TitleModel.type = 'title';
    TitleModel.defaultOption = {
        // zlevel: 0,
        z: 6,
        show: true,
        text: '',
        target: 'blank',
        subtext: '',
        subtarget: 'blank',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#464646'
        },
        subtextStyle: {
            fontSize: 12,
            color: '#6E7079'
        }
    };
    return TitleModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
// View
var TitleView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TitleView, _super);
    function TitleView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = TitleView.type;
        return _this;
    }
    TitleView.prototype.render = function(titleModel, ecModel, api) {
        this.group.removeAll();
        if (!titleModel.get('show')) {
            return;
        }
        var group = this.group;
        var textStyleModel = titleModel.getModel('textStyle');
        var subtextStyleModel = titleModel.getModel('subtextStyle');
        var textAlign = titleModel.get('textAlign');
        var textVerticalAlign = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.retrieve2(titleModel.get('textBaseline'), titleModel.get('textVerticalAlign'));
        var textEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Text({
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(textStyleModel, {
                text: titleModel.get('text'),
                fill: textStyleModel.getTextColor()
            }, {
                disableBox: true
            }),
            z2: 10
        });
        var textRect = textEl.getBoundingRect();
        var subText = titleModel.get('subtext');
        var subTextEl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Text({
            style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextStyle"])(subtextStyleModel, {
                text: subText,
                fill: subtextStyleModel.getTextColor(),
                y: textRect.height + titleModel.get('itemGap'),
                verticalAlign: 'top'
            }, {
                disableBox: true
            }),
            z2: 10
        });
        var link = titleModel.get('link');
        var sublink = titleModel.get('sublink');
        var triggerEvent = titleModel.get('triggerEvent', true);
        textEl.silent = !link && !triggerEvent;
        subTextEl.silent = !sublink && !triggerEvent;
        if (link) {
            textEl.on('click', function() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["windowOpen"])(link, '_' + titleModel.get('target'));
            });
        }
        if (sublink) {
            subTextEl.on('click', function() {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["windowOpen"])(sublink, '_' + titleModel.get('subtarget'));
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(textEl).eventData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getECData"])(subTextEl).eventData = triggerEvent ? {
            componentType: 'title',
            componentIndex: titleModel.componentIndex
        } : null;
        group.add(textEl);
        subText && group.add(subTextEl);
        // If no subText, but add subTextEl, there will be an empty line.
        var groupRect = group.getBoundingRect();
        var layoutOption = titleModel.getBoxLayoutParams();
        layoutOption.width = groupRect.width;
        layoutOption.height = groupRect.height;
        var layoutRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutRect"])(layoutOption, {
            width: api.getWidth(),
            height: api.getHeight()
        }, titleModel.get('padding'));
        // Adjust text align based on position
        if (!textAlign) {
            // Align left if title is on the left. center and right is same
            textAlign = titleModel.get('left') || titleModel.get('right');
            // @ts-ignore
            if (textAlign === 'middle') {
                textAlign = 'center';
            }
            // Adjust layout by text align
            if (textAlign === 'right') {
                layoutRect.x += layoutRect.width;
            } else if (textAlign === 'center') {
                layoutRect.x += layoutRect.width / 2;
            }
        }
        if (!textVerticalAlign) {
            textVerticalAlign = titleModel.get('top') || titleModel.get('bottom');
            // @ts-ignore
            if (textVerticalAlign === 'center') {
                textVerticalAlign = 'middle';
            }
            if (textVerticalAlign === 'bottom') {
                layoutRect.y += layoutRect.height;
            } else if (textVerticalAlign === 'middle') {
                layoutRect.y += layoutRect.height / 2;
            }
            textVerticalAlign = textVerticalAlign || 'top';
        }
        group.x = layoutRect.x;
        group.y = layoutRect.y;
        group.markRedraw();
        var alignStyle = {
            align: textAlign,
            verticalAlign: textVerticalAlign
        };
        textEl.setStyle(alignStyle);
        subTextEl.setStyle(alignStyle);
        // Render background
        // Get groupRect again because textAlign has been changed
        groupRect = group.getBoundingRect();
        var padding = layoutRect.margin;
        var style = titleModel.getItemStyle([
            'color',
            'opacity'
        ]);
        style.fill = titleModel.get('backgroundColor');
        var rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Rect({
            shape: {
                x: groupRect.x - padding[3],
                y: groupRect.y - padding[0],
                width: groupRect.width + padding[1] + padding[3],
                height: groupRect.height + padding[0] + padding[2],
                r: titleModel.get('borderRadius')
            },
            style: style,
            subPixelOptimize: true,
            silent: true
        });
        group.add(rect);
    };
    TitleView.type = 'title';
    return TitleView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function install(registers) {
    registers.registerComponentModel(TitleModel);
    registers.registerComponentView(TitleView);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/title/install.js [app-client] (ecmascript) <export install as TitleComponent>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "TitleComponent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$title$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/title/install.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ __turbopack_esm__({
    "ToolboxFeature": (()=>ToolboxFeature),
    "getFeature": (()=>getFeature),
    "registerFeature": (()=>registerFeature)
});
var ToolboxFeature = /** @class */ function() {
    function ToolboxFeature() {}
    return ToolboxFeature;
}();
;
var features = {};
function registerFeature(name, ctor) {
    features[name] = ctor;
}
function getFeature(name) {
    return features[name];
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/ToolboxModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
;
;
var ToolboxModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ToolboxModel, _super);
    function ToolboxModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = ToolboxModel.type;
        return _this;
    }
    ToolboxModel.prototype.optionUpdated = function() {
        _super.prototype.optionUpdated.apply(this, arguments);
        var ecModel = this.ecModel;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(this.option.feature, function(featureOpt, featureName) {
            var Feature = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getFeature(featureName);
            if (Feature) {
                if (Feature.getDefaultOption) {
                    Feature.defaultOption = Feature.getDefaultOption(ecModel);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.merge(featureOpt, Feature.defaultOption);
            }
        });
    };
    ToolboxModel.type = 'toolbox';
    ToolboxModel.layoutMode = {
        type: 'box',
        ignoreSize: true
    };
    ToolboxModel.defaultOption = {
        show: true,
        z: 6,
        // zlevel: 0,
        orient: 'horizontal',
        left: 'right',
        top: 'top',
        // right
        // bottom
        backgroundColor: 'transparent',
        borderColor: '#ccc',
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        itemSize: 15,
        itemGap: 8,
        showTitle: true,
        iconStyle: {
            borderColor: '#666',
            color: 'none'
        },
        emphasis: {
            iconStyle: {
                borderColor: '#3E98C5'
            }
        },
        // textStyle: {},
        // feature
        tooltip: {
            show: false,
            position: 'bottom'
        }
    };
    return ToolboxModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = ToolboxModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/ToolboxView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$listComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/listComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/DataDiffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/component.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
var ToolboxView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ToolboxView, _super);
    function ToolboxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolboxView.prototype.render = function(toolboxModel, ecModel, api, payload) {
        var group = this.group;
        group.removeAll();
        if (!toolboxModel.get('show')) {
            return;
        }
        var itemSize = +toolboxModel.get('itemSize');
        var isVertical = toolboxModel.get('orient') === 'vertical';
        var featureOpts = toolboxModel.get('feature') || {};
        var features = this._features || (this._features = {});
        var featureNames = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(featureOpts, function(opt, name) {
            featureNames.push(name);
        });
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](this._featureNames || [], featureNames).add(processFeature).update(processFeature).remove(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.curry(processFeature, null)).execute();
        // Keep for diff.
        this._featureNames = featureNames;
        function processFeature(newIndex, oldIndex) {
            var featureName = featureNames[newIndex];
            var oldName = featureNames[oldIndex];
            var featureOpt = featureOpts[featureName];
            var featureModel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](featureOpt, toolboxModel, toolboxModel.ecModel);
            var feature;
            // FIX#11236, merge feature title from MagicType newOption. TODO: consider seriesIndex ?
            if (payload && payload.newTitle != null && payload.featureName === featureName) {
                featureOpt.title = payload.newTitle;
            }
            if (featureName && !oldName) {
                // Create
                if (isUserFeatureName(featureName)) {
                    feature = {
                        onclick: featureModel.option.onclick,
                        featureName: featureName
                    };
                } else {
                    var Feature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeature"])(featureName);
                    if (!Feature) {
                        return;
                    }
                    feature = new Feature();
                }
                features[featureName] = feature;
            } else {
                feature = features[oldName];
                // If feature does not exist.
                if (!feature) {
                    return;
                }
            }
            feature.uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUID"])('toolbox-feature');
            feature.model = featureModel;
            feature.ecModel = ecModel;
            feature.api = api;
            var isToolboxFeature = feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"];
            if (!featureName && oldName) {
                isToolboxFeature && feature.dispose && feature.dispose(ecModel, api);
                return;
            }
            if (!featureModel.get('show') || isToolboxFeature && feature.unusable) {
                isToolboxFeature && feature.remove && feature.remove(ecModel, api);
                return;
            }
            createIconPaths(featureModel, feature, featureName);
            featureModel.setIconStatus = function(iconName, status) {
                var option = this.option;
                var iconPaths = this.iconPaths;
                option.iconStatus = option.iconStatus || {};
                option.iconStatus[iconName] = status;
                if (iconPaths[iconName]) {
                    (status === 'emphasis' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterEmphasis"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveEmphasis"])(iconPaths[iconName]);
                }
            };
            if (feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]) {
                if (feature.render) {
                    feature.render(featureModel, ecModel, api, payload);
                }
            }
        }
        function createIconPaths(featureModel, feature, featureName) {
            var iconStyleModel = featureModel.getModel('iconStyle');
            var iconStyleEmphasisModel = featureModel.getModel([
                'emphasis',
                'iconStyle'
            ]);
            // If one feature has multiple icons, they are organized as
            // {
            //     icon: {
            //         foo: '',
            //         bar: ''
            //     },
            //     title: {
            //         foo: '',
            //         bar: ''
            //     }
            // }
            var icons = feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"] && feature.getIcons ? feature.getIcons() : featureModel.get('icon');
            var titles = featureModel.get('title') || {};
            var iconsMap;
            var titlesMap;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isString(icons)) {
                iconsMap = {};
                iconsMap[featureName] = icons;
            } else {
                iconsMap = icons;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isString(titles)) {
                titlesMap = {};
                titlesMap[featureName] = titles;
            } else {
                titlesMap = titles;
            }
            var iconPaths = featureModel.iconPaths = {};
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(iconsMap, function(iconStr, iconName) {
                var path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createIcon(iconStr, {}, {
                    x: -itemSize / 2,
                    y: -itemSize / 2,
                    width: itemSize,
                    height: itemSize
                }); // TODO handling image
                path.setStyle(iconStyleModel.getItemStyle());
                var pathEmphasisState = path.ensureState('emphasis');
                pathEmphasisState.style = iconStyleEmphasisModel.getItemStyle();
                // Text position calculation
                // TODO: extract `textStyle` from `iconStyle` and use `createTextStyle`
                var textContent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    style: {
                        text: titlesMap[iconName],
                        align: iconStyleEmphasisModel.get('textAlign'),
                        borderRadius: iconStyleEmphasisModel.get('textBorderRadius'),
                        padding: iconStyleEmphasisModel.get('textPadding'),
                        fill: null,
                        font: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFont"])({
                            fontStyle: iconStyleEmphasisModel.get('textFontStyle'),
                            fontFamily: iconStyleEmphasisModel.get('textFontFamily'),
                            fontSize: iconStyleEmphasisModel.get('textFontSize'),
                            fontWeight: iconStyleEmphasisModel.get('textFontWeight')
                        }, ecModel)
                    },
                    ignore: true
                });
                path.setTextContent(textContent);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.setTooltipConfig({
                    el: path,
                    componentModel: toolboxModel,
                    itemName: iconName,
                    formatterParamsExtra: {
                        title: titlesMap[iconName]
                    }
                });
                path.__title = titlesMap[iconName];
                path.on('mouseover', function() {
                    // Should not reuse above hoverStyle, which might be modified.
                    var hoverStyle = iconStyleEmphasisModel.getItemStyle();
                    var defaultTextPosition = isVertical ? toolboxModel.get('right') == null && toolboxModel.get('left') !== 'right' ? 'right' : 'left' : toolboxModel.get('bottom') == null && toolboxModel.get('top') !== 'bottom' ? 'bottom' : 'top';
                    textContent.setStyle({
                        fill: iconStyleEmphasisModel.get('textFill') || hoverStyle.fill || hoverStyle.stroke || '#000',
                        backgroundColor: iconStyleEmphasisModel.get('textBackgroundColor')
                    });
                    path.setTextConfig({
                        position: iconStyleEmphasisModel.get('textPosition') || defaultTextPosition
                    });
                    textContent.ignore = !toolboxModel.get('showTitle');
                    // Use enterEmphasis and leaveEmphasis provide by ec.
                    // There are flags managed by the echarts.
                    api.enterEmphasis(this);
                }).on('mouseout', function() {
                    if (featureModel.get([
                        'iconStatus',
                        iconName
                    ]) !== 'emphasis') {
                        api.leaveEmphasis(this);
                    }
                    textContent.hide();
                });
                (featureModel.get([
                    'iconStatus',
                    iconName
                ]) === 'emphasis' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enterEmphasis"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaveEmphasis"])(path);
                group.add(path);
                path.on('click', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bind(feature.onclick, feature, ecModel, api, iconName));
                iconPaths[iconName] = path;
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$listComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.layout(group, toolboxModel, api);
        // Render background after group is layout
        // FIXME
        group.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$listComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeBackground(group.getBoundingRect(), toolboxModel));
        // Adjust icon title positions to avoid them out of screen
        isVertical || group.eachChild(function(icon) {
            var titleText = icon.__title;
            // const hoverStyle = icon.hoverStyle;
            // TODO simplify code?
            var emphasisState = icon.ensureState('emphasis');
            var emphasisTextConfig = emphasisState.textConfig || (emphasisState.textConfig = {});
            var textContent = icon.getTextContent();
            var emphasisTextState = textContent && textContent.ensureState('emphasis');
            // May be background element
            if (emphasisTextState && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isFunction(emphasisTextState) && titleText) {
                var emphasisTextStyle = emphasisTextState.style || (emphasisTextState.style = {});
                var rect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getBoundingRect(titleText, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].makeFont(emphasisTextStyle));
                var offsetX = icon.x + group.x;
                var offsetY = icon.y + group.y + itemSize;
                var needPutOnTop = false;
                if (offsetY + rect.height > api.getHeight()) {
                    emphasisTextConfig.position = 'top';
                    needPutOnTop = true;
                }
                var topOffset = needPutOnTop ? -5 - rect.height : itemSize + 10;
                if (offsetX + rect.width / 2 > api.getWidth()) {
                    emphasisTextConfig.position = [
                        '100%',
                        topOffset
                    ];
                    emphasisTextStyle.align = 'right';
                } else if (offsetX - rect.width / 2 < 0) {
                    emphasisTextConfig.position = [
                        0,
                        topOffset
                    ];
                    emphasisTextStyle.align = 'left';
                }
            }
        });
    };
    ToolboxView.prototype.updateView = function(toolboxModel, ecModel, api, payload) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(this._features, function(feature) {
            feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"] && feature.updateView && feature.updateView(feature.model, ecModel, api, payload);
        });
    };
    // updateLayout(toolboxModel, ecModel, api, payload) {
    //     zrUtil.each(this._features, function (feature) {
    //         feature.updateLayout && feature.updateLayout(feature.model, ecModel, api, payload);
    //     });
    // },
    ToolboxView.prototype.remove = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(this._features, function(feature) {
            feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"] && feature.remove && feature.remove(ecModel, api);
        });
        this.group.removeAll();
    };
    ToolboxView.prototype.dispose = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(this._features, function(feature) {
            feature instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"] && feature.dispose && feature.dispose(ecModel, api);
        });
    };
    ToolboxView.type = 'toolbox';
    return ToolboxView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function isUserFeatureName(featureName) {
    return featureName.indexOf('my') === 0;
}
const __TURBOPACK__default__export__ = ToolboxView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/SaveAsImage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
/* global window, Uint8Array, document */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
;
;
;
var SaveAsImage = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(SaveAsImage, _super);
    function SaveAsImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveAsImage.prototype.onclick = function(ecModel, api) {
        var model = this.model;
        var title = model.get('name') || ecModel.get('title.0.text') || 'echarts';
        var isSvg = api.getZr().painter.getType() === 'svg';
        var type = isSvg ? 'svg' : model.get('type', true) || 'png';
        var url = api.getConnectedDataURL({
            type: type,
            backgroundColor: model.get('backgroundColor', true) || ecModel.get('backgroundColor') || '#fff',
            connectedBackgroundColor: model.get('connectedBackgroundColor'),
            excludeComponents: model.get('excludeComponents'),
            pixelRatio: model.get('pixelRatio')
        });
        var browser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].browser;
        // Chrome, Firefox, New Edge
        if (typeof MouseEvent === 'function' && (browser.newEdge || !browser.ie && !browser.edge)) {
            var $a = document.createElement('a');
            $a.download = title + '.' + type;
            $a.target = '_blank';
            $a.href = url;
            var evt = new MouseEvent('click', {
                // some micro front-end framework， window maybe is a Proxy
                view: document.defaultView,
                bubbles: true,
                cancelable: false
            });
            $a.dispatchEvent(evt);
        } else {
            // @ts-ignore
            if (window.navigator.msSaveOrOpenBlob || isSvg) {
                var parts = url.split(',');
                // data:[<mime type>][;charset=<charset>][;base64],<encoded data>
                var base64Encoded = parts[0].indexOf('base64') > -1;
                var bstr = isSvg ? decodeURIComponent(parts[1]) : parts[1];
                // only `atob` when the data uri is encoded with base64
                // otherwise, like `svg` data uri exported by zrender,
                // there will be an error, for it's not encoded with base64.
                // (just a url-encoded string through `encodeURIComponent`)
                base64Encoded && (bstr = window.atob(bstr));
                var filename = title + '.' + type;
                // @ts-ignore
                if (window.navigator.msSaveOrOpenBlob) {
                    var n = bstr.length;
                    var u8arr = new Uint8Array(n);
                    while(n--){
                        u8arr[n] = bstr.charCodeAt(n);
                    }
                    var blob = new Blob([
                        u8arr
                    ]); // @ts-ignore
                    window.navigator.msSaveOrOpenBlob(blob, filename);
                } else {
                    var frame = document.createElement('iframe');
                    document.body.appendChild(frame);
                    var cw = frame.contentWindow;
                    var doc = cw.document;
                    doc.open('image/svg+xml', 'replace');
                    doc.write(bstr);
                    doc.close();
                    cw.focus();
                    doc.execCommand('SaveAs', true, filename);
                    document.body.removeChild(frame);
                }
            } else {
                var lang = model.get('lang');
                var html = '' + '<body style="margin:0;">' + '<img src="' + url + '" style="max-width:100%;" title="' + (lang && lang[0] || '') + '" />' + '</body>';
                var tab = window.open();
                tab.document.write(html);
                tab.document.title = title;
            }
        }
    };
    SaveAsImage.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            icon: 'M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0',
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'saveAsImage',
                'title'
            ]),
            type: 'png',
            // Default use option.backgroundColor
            // backgroundColor: '#fff',
            connectedBackgroundColor: '#fff',
            name: '',
            excludeComponents: [
                'toolbox'
            ],
            // use current pixel ratio of device by default
            // pixelRatio: 1,
            lang: ecModel.getLocaleModel().get([
                'toolbox',
                'saveAsImage',
                'lang'
            ])
        };
        return defaultOption;
    };
    return SaveAsImage;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
const __TURBOPACK__default__export__ = SaveAsImage;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/MagicType.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript)");
;
;
;
;
;
var INNER_STACK_KEYWORD = '__ec_magicType_stack__';
var ICON_TYPES = [
    'line',
    'bar',
    'stack'
];
// stack and tiled appears in pair for the title
var TITLE_TYPES = [
    'line',
    'bar',
    'stack',
    'tiled'
];
var radioTypes = [
    [
        'line',
        'bar'
    ],
    [
        'stack'
    ]
];
var MagicType = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MagicType, _super);
    function MagicType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MagicType.prototype.getIcons = function() {
        var model = this.model;
        var availableIcons = model.get('icon');
        var icons = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(model.get('type'), function(type) {
            if (availableIcons[type]) {
                icons[type] = availableIcons[type];
            }
        });
        return icons;
    };
    MagicType.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            type: [],
            // Icon group
            icon: {
                line: 'M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4',
                bar: 'M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7',
                // eslint-disable-next-line
                stack: 'M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z' // jshint ignore:line
            },
            // `line`, `bar`, `stack`, `tiled`
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'magicType',
                'title'
            ]),
            option: {},
            seriesIndex: {}
        };
        return defaultOption;
    };
    MagicType.prototype.onclick = function(ecModel, api, type) {
        var model = this.model;
        var seriesIndex = model.get([
            'seriesIndex',
            type
        ]);
        // Not supported magicType
        if (!seriesOptGenreator[type]) {
            return;
        }
        var newOption = {
            series: []
        };
        var generateNewSeriesTypes = function(seriesModel) {
            var seriesType = seriesModel.subType;
            var seriesId = seriesModel.id;
            var newSeriesOpt = seriesOptGenreator[type](seriesType, seriesId, seriesModel, model);
            if (newSeriesOpt) {
                // PENDING If merge original option?
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.defaults(newSeriesOpt, seriesModel.option);
                newOption.series.push(newSeriesOpt);
            }
            // Modify boundaryGap
            var coordSys = seriesModel.coordinateSystem;
            if (coordSys && coordSys.type === 'cartesian2d' && (type === 'line' || type === 'bar')) {
                var categoryAxis = coordSys.getAxesByScale('ordinal')[0];
                if (categoryAxis) {
                    var axisDim = categoryAxis.dim;
                    var axisType = axisDim + 'Axis';
                    var axisModel = seriesModel.getReferringComponents(axisType, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
                    var axisIndex = axisModel.componentIndex;
                    newOption[axisType] = newOption[axisType] || [];
                    for(var i = 0; i <= axisIndex; i++){
                        newOption[axisType][axisIndex] = newOption[axisType][axisIndex] || {};
                    }
                    newOption[axisType][axisIndex].boundaryGap = type === 'bar';
                }
            }
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(radioTypes, function(radio) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.indexOf(radio, type) >= 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(radio, function(item) {
                    model.setIconStatus(item, 'normal');
                });
            }
        });
        model.setIconStatus(type, 'emphasis');
        ecModel.eachComponent({
            mainType: 'series',
            query: seriesIndex == null ? null : {
                seriesIndex: seriesIndex
            }
        }, generateNewSeriesTypes);
        var newTitle;
        var currentType = type;
        // Change title of stack
        if (type === 'stack') {
            // use titles in model instead of ecModel
            // as stack and tiled appears in pair, just flip them
            // no need of checking stack state
            newTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.merge({
                stack: model.option.title.tiled,
                tiled: model.option.title.stack
            }, model.option.title);
            if (model.get([
                'iconStatus',
                type
            ]) !== 'emphasis') {
                currentType = 'tiled';
            }
        }
        api.dispatchAction({
            type: 'changeMagicType',
            currentType: currentType,
            newOption: newOption,
            newTitle: newTitle,
            featureName: 'magicType'
        });
    };
    return MagicType;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
var seriesOptGenreator = {
    'line': function(seriesType, seriesId, seriesModel, model) {
        if (seriesType === 'bar') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.merge({
                id: seriesId,
                type: 'line',
                // Preserve data related option
                data: seriesModel.get('data'),
                stack: seriesModel.get('stack'),
                markPoint: seriesModel.get('markPoint'),
                markLine: seriesModel.get('markLine')
            }, model.get([
                'option',
                'line'
            ]) || {}, true);
        }
    },
    'bar': function(seriesType, seriesId, seriesModel, model) {
        if (seriesType === 'line') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.merge({
                id: seriesId,
                type: 'bar',
                // Preserve data related option
                data: seriesModel.get('data'),
                stack: seriesModel.get('stack'),
                markPoint: seriesModel.get('markPoint'),
                markLine: seriesModel.get('markLine')
            }, model.get([
                'option',
                'bar'
            ]) || {}, true);
        }
    },
    'stack': function(seriesType, seriesId, seriesModel, model) {
        var isStack = seriesModel.get('stack') === INNER_STACK_KEYWORD;
        if (seriesType === 'line' || seriesType === 'bar') {
            model.setIconStatus('stack', isStack ? 'normal' : 'emphasis');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.merge({
                id: seriesId,
                stack: isStack ? '' : INNER_STACK_KEYWORD
            }, model.get([
                'option',
                'stack'
            ]) || {}, true);
        }
    }
};
// TODO: SELF REGISTERED.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.registerAction({
    type: 'changeMagicType',
    event: 'magicTypeChanged',
    update: 'prepareAndUpdate'
}, function(payload, ecModel) {
    ecModel.mergeOption(payload.newOption);
});
const __TURBOPACK__default__export__ = MagicType;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/DataView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
/* global document */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/event.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/log.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
;
;
;
;
;
;
/* global document */ var BLOCK_SPLITER = new Array(60).join('-');
var ITEM_SPLITER = '\t';
/**
 * Group series into two types
 *  1. on category axis, like line, bar
 *  2. others, like scatter, pie
 */ function groupSeries(ecModel) {
    var seriesGroupByCategoryAxis = {};
    var otherSeries = [];
    var meta = [];
    ecModel.eachRawSeries(function(seriesModel) {
        var coordSys = seriesModel.coordinateSystem;
        if (coordSys && (coordSys.type === 'cartesian2d' || coordSys.type === 'polar')) {
            // TODO: TYPE Consider polar? Include polar may increase unecessary bundle size.
            var baseAxis = coordSys.getBaseAxis();
            if (baseAxis.type === 'category') {
                var key = baseAxis.dim + '_' + baseAxis.index;
                if (!seriesGroupByCategoryAxis[key]) {
                    seriesGroupByCategoryAxis[key] = {
                        categoryAxis: baseAxis,
                        valueAxis: coordSys.getOtherAxis(baseAxis),
                        series: []
                    };
                    meta.push({
                        axisDim: baseAxis.dim,
                        axisIndex: baseAxis.index
                    });
                }
                seriesGroupByCategoryAxis[key].series.push(seriesModel);
            } else {
                otherSeries.push(seriesModel);
            }
        } else {
            otherSeries.push(seriesModel);
        }
    });
    return {
        seriesGroupByCategoryAxis: seriesGroupByCategoryAxis,
        other: otherSeries,
        meta: meta
    };
}
/**
 * Assemble content of series on cateogory axis
 * @inner
 */ function assembleSeriesWithCategoryAxis(groups) {
    var tables = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(groups, function(group, key) {
        var categoryAxis = group.categoryAxis;
        var valueAxis = group.valueAxis;
        var valueAxisDim = valueAxis.dim;
        var headers = [
            ' '
        ].concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(group.series, function(series) {
            return series.name;
        }));
        // @ts-ignore TODO Polar
        var columns = [
            categoryAxis.model.getCategories()
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(group.series, function(series) {
            var rawData = series.getRawData();
            columns.push(series.getRawData().mapArray(rawData.mapDimension(valueAxisDim), function(val) {
                return val;
            }));
        });
        // Assemble table content
        var lines = [
            headers.join(ITEM_SPLITER)
        ];
        for(var i = 0; i < columns[0].length; i++){
            var items = [];
            for(var j = 0; j < columns.length; j++){
                items.push(columns[j][i]);
            }
            lines.push(items.join(ITEM_SPLITER));
        }
        tables.push(lines.join('\n'));
    });
    return tables.join('\n\n' + BLOCK_SPLITER + '\n\n');
}
/**
 * Assemble content of other series
 */ function assembleOtherSeries(series) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(series, function(series) {
        var data = series.getRawData();
        var lines = [
            series.name
        ];
        var vals = [];
        data.each(data.dimensions, function() {
            var argLen = arguments.length;
            var dataIndex = arguments[argLen - 1];
            var name = data.getName(dataIndex);
            for(var i = 0; i < argLen - 1; i++){
                vals[i] = arguments[i];
            }
            lines.push((name ? name + ITEM_SPLITER : '') + vals.join(ITEM_SPLITER));
        });
        return lines.join('\n');
    }).join('\n\n' + BLOCK_SPLITER + '\n\n');
}
function getContentFromModel(ecModel) {
    var result = groupSeries(ecModel);
    return {
        value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.filter([
            assembleSeriesWithCategoryAxis(result.seriesGroupByCategoryAxis),
            assembleOtherSeries(result.other)
        ], function(str) {
            return !!str.replace(/[\n\t\s]/g, '');
        }).join('\n\n' + BLOCK_SPLITER + '\n\n'),
        meta: result.meta
    };
}
function trim(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
/**
 * If a block is tsv format
 */ function isTSVFormat(block) {
    // Simple method to find out if a block is tsv format
    var firstLine = block.slice(0, block.indexOf('\n'));
    if (firstLine.indexOf(ITEM_SPLITER) >= 0) {
        return true;
    }
}
var itemSplitRegex = new RegExp('[' + ITEM_SPLITER + ']+', 'g');
/**
 * @param {string} tsv
 * @return {Object}
 */ function parseTSVContents(tsv) {
    var tsvLines = tsv.split(/\n+/g);
    var headers = trim(tsvLines.shift()).split(itemSplitRegex);
    var categories = [];
    var series = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(headers, function(header) {
        return {
            name: header,
            data: []
        };
    });
    for(var i = 0; i < tsvLines.length; i++){
        var items = trim(tsvLines[i]).split(itemSplitRegex);
        categories.push(items.shift());
        for(var j = 0; j < items.length; j++){
            series[j] && (series[j].data[i] = items[j]);
        }
    }
    return {
        series: series,
        categories: categories
    };
}
function parseListContents(str) {
    var lines = str.split(/\n+/g);
    var seriesName = trim(lines.shift());
    var data = [];
    for(var i = 0; i < lines.length; i++){
        // if line is empty, ignore it.
        // there is a case that a user forgot to delete `\n`.
        var line = trim(lines[i]);
        if (!line) {
            continue;
        }
        var items = line.split(itemSplitRegex);
        var name_1 = '';
        var value = void 0;
        var hasName = false;
        if (isNaN(items[0])) {
            // First item is name
            hasName = true;
            name_1 = items[0];
            items = items.slice(1);
            data[i] = {
                name: name_1,
                value: []
            };
            value = data[i].value;
        } else {
            value = data[i] = [];
        }
        for(var j = 0; j < items.length; j++){
            value.push(+items[j]);
        }
        if (value.length === 1) {
            hasName ? data[i].value = value[0] : data[i] = value[0];
        }
    }
    return {
        name: seriesName,
        data: data
    };
}
function parseContents(str, blockMetaList) {
    var blocks = str.split(new RegExp('\n*' + BLOCK_SPLITER + '\n*', 'g'));
    var newOption = {
        series: []
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(blocks, function(block, idx) {
        if (isTSVFormat(block)) {
            var result = parseTSVContents(block);
            var blockMeta = blockMetaList[idx];
            var axisKey = blockMeta.axisDim + 'Axis';
            if (blockMeta) {
                newOption[axisKey] = newOption[axisKey] || [];
                newOption[axisKey][blockMeta.axisIndex] = {
                    data: result.categories
                };
                newOption.series = newOption.series.concat(result.series);
            }
        } else {
            var result = parseListContents(block);
            newOption.series.push(result);
        }
    });
    return newOption;
}
var DataView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DataView, _super);
    function DataView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataView.prototype.onclick = function(ecModel, api) {
        // FIXME: better way?
        setTimeout(function() {
            api.dispatchAction({
                type: 'hideTip'
            });
        });
        var container = api.getDom();
        var model = this.model;
        if (this._dom) {
            container.removeChild(this._dom);
        }
        var root = document.createElement('div');
        // use padding to avoid 5px whitespace
        root.style.cssText = 'position:absolute;top:0;bottom:0;left:0;right:0;padding:5px';
        root.style.backgroundColor = model.get('backgroundColor') || '#fff';
        // Create elements
        var header = document.createElement('h4');
        var lang = model.get('lang') || [];
        header.innerHTML = lang[0] || model.get('title');
        header.style.cssText = 'margin:10px 20px';
        header.style.color = model.get('textColor');
        var viewMain = document.createElement('div');
        var textarea = document.createElement('textarea');
        viewMain.style.cssText = 'overflow:auto';
        var optionToContent = model.get('optionToContent');
        var contentToOption = model.get('contentToOption');
        var result = getContentFromModel(ecModel);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isFunction(optionToContent)) {
            var htmlOrDom = optionToContent(api.getOption());
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isString(htmlOrDom)) {
                viewMain.innerHTML = htmlOrDom;
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isDom(htmlOrDom)) {
                viewMain.appendChild(htmlOrDom);
            }
        } else {
            // Use default textarea
            textarea.readOnly = model.get('readOnly');
            var style = textarea.style;
            // eslint-disable-next-line max-len
            style.cssText = 'display:block;width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;resize:none;box-sizing:border-box;outline:none';
            style.color = model.get('textColor');
            style.borderColor = model.get('textareaBorderColor');
            style.backgroundColor = model.get('textareaColor');
            textarea.value = result.value;
            viewMain.appendChild(textarea);
        }
        var blockMetaList = result.meta;
        var buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = 'position:absolute;bottom:5px;left:0;right:0';
        // eslint-disable-next-line max-len
        var buttonStyle = 'float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px';
        var closeButton = document.createElement('div');
        var refreshButton = document.createElement('div');
        buttonStyle += ';background-color:' + model.get('buttonColor');
        buttonStyle += ';color:' + model.get('buttonTextColor');
        var self = this;
        function close() {
            container.removeChild(root);
            self._dom = null;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addEventListener"])(closeButton, 'click', close);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addEventListener"])(refreshButton, 'click', function() {
            if (contentToOption == null && optionToContent != null || contentToOption != null && optionToContent == null) {
                if ("TURBOPACK compile-time truthy", 1) {
                    // eslint-disable-next-line
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"])('It seems you have just provided one of `contentToOption` and `optionToContent` functions but missed the other one. Data change is ignored.');
                }
                close();
                return;
            }
            var newOption;
            try {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isFunction(contentToOption)) {
                    newOption = contentToOption(viewMain, api.getOption());
                } else {
                    newOption = parseContents(textarea.value, blockMetaList);
                }
            } catch (e) {
                close();
                throw new Error('Data view format error ' + e);
            }
            if (newOption) {
                api.dispatchAction({
                    type: 'changeDataView',
                    newOption: newOption
                });
            }
            close();
        });
        closeButton.innerHTML = lang[1];
        refreshButton.innerHTML = lang[2];
        refreshButton.style.cssText = closeButton.style.cssText = buttonStyle;
        !model.get('readOnly') && buttonContainer.appendChild(refreshButton);
        buttonContainer.appendChild(closeButton);
        root.appendChild(header);
        root.appendChild(viewMain);
        root.appendChild(buttonContainer);
        viewMain.style.height = container.clientHeight - 80 + 'px';
        container.appendChild(root);
        this._dom = root;
    };
    DataView.prototype.remove = function(ecModel, api) {
        this._dom && api.getDom().removeChild(this._dom);
    };
    DataView.prototype.dispose = function(ecModel, api) {
        this.remove(ecModel, api);
    };
    DataView.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            readOnly: false,
            optionToContent: null,
            contentToOption: null,
            // eslint-disable-next-line
            icon: 'M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28',
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'dataView',
                'title'
            ]),
            lang: ecModel.getLocaleModel().get([
                'toolbox',
                'dataView',
                'lang'
            ]),
            backgroundColor: '#fff',
            textColor: '#000',
            textareaColor: '#fff',
            textareaBorderColor: '#333',
            buttonColor: '#c23531',
            buttonTextColor: '#fff'
        };
        return defaultOption;
    };
    return DataView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
/**
 * @inner
 */ function tryMergeDataOption(newData, originalData) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(newData, function(newVal, idx) {
        var original = originalData && originalData[idx];
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isObject(original) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isArray(original)) {
            var newValIsObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isObject(newVal) && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.isArray(newVal);
            if (!newValIsObject) {
                newVal = {
                    value: newVal
                };
            }
            // original data has name but new data has no name
            var shouldDeleteName = original.name != null && newVal.name == null;
            // Original data has option
            newVal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.defaults(newVal, original);
            shouldDeleteName && delete newVal.name;
            return newVal;
        } else {
            return newVal;
        }
    });
}
// TODO: SELF REGISTERED.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.registerAction({
    type: 'changeDataView',
    event: 'dataViewChanged',
    update: 'prepareAndUpdate'
}, function(payload, ecModel) {
    var newSeriesOptList = [];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each(payload.newOption.series, function(seriesOpt) {
        var seriesModel = ecModel.getSeriesByName(seriesOpt.name)[0];
        if (!seriesModel) {
            // New created series
            // Geuss the series type
            newSeriesOptList.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.extend({
                // Default is scatter
                type: 'scatter'
            }, seriesOpt));
        } else {
            var originalData = seriesModel.get('data');
            newSeriesOptList.push({
                name: seriesOpt.name,
                data: tryMergeDataOption(seriesOpt.data, originalData)
            });
        }
    });
    ecModel.mergeOption(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.defaults({
        series: newSeriesOptList
    }, payload.newOption));
});
const __TURBOPACK__default__export__ = DataView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/interactionMutex.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ // @ts-nocheck
__turbopack_esm__({
    "isTaken": (()=>isTaken),
    "release": (()=>release),
    "take": (()=>take)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
var ATTR = '\0_ec_interaction_mutex';
function take(zr, resourceKey, userKey) {
    var store = getStore(zr);
    store[resourceKey] = userKey;
}
function release(zr, resourceKey, userKey) {
    var store = getStore(zr);
    var uKey = store[resourceKey];
    if (uKey === userKey) {
        store[resourceKey] = null;
    }
}
function isTaken(zr, resourceKey) {
    return !!getStore(zr)[resourceKey];
}
function getStore(zr) {
    return zr[ATTR] || (zr[ATTR] = {});
}
/**
 * payload: {
 *     type: 'takeGlobalCursor',
 *     key: 'dataZoomSelect', or 'brush', or ...,
 *         If no userKey, release global cursor.
 * }
 */ // TODO: SELF REGISTERED.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.registerAction({
    type: 'takeGlobalCursor',
    event: 'globalCursorTaken',
    update: 'update'
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/BrushController.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$interactionMutex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/interactionMutex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/DataDiffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Eventful$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Eventful.js [app-client] (ecmascript)");
;
;
;
;
;
;
var BRUSH_PANEL_GLOBAL = true;
var mathMin = Math.min;
var mathMax = Math.max;
var mathPow = Math.pow;
var COVER_Z = 10000;
var UNSELECT_THRESHOLD = 6;
var MIN_RESIZE_LINE_WIDTH = 6;
var MUTEX_RESOURCE_KEY = 'globalPan';
var DIRECTION_MAP = {
    w: [
        0,
        0
    ],
    e: [
        0,
        1
    ],
    n: [
        1,
        0
    ],
    s: [
        1,
        1
    ]
};
var CURSOR_MAP = {
    w: 'ew',
    e: 'ew',
    n: 'ns',
    s: 'ns',
    ne: 'nesw',
    sw: 'nesw',
    nw: 'nwse',
    se: 'nwse'
};
var DEFAULT_BRUSH_OPT = {
    brushStyle: {
        lineWidth: 2,
        stroke: 'rgba(210,219,238,0.3)',
        fill: '#D2DBEE'
    },
    transformable: true,
    brushMode: 'single',
    removeOnClick: false
};
var baseUID = 0;
/**
 * params:
 *     areas: Array.<Array>, coord relates to container group,
 *                             If no container specified, to global.
 *     opt {
 *         isEnd: boolean,
 *         removeOnClick: boolean
 *     }
 */ var BrushController = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BrushController, _super);
    function BrushController(zr) {
        var _this = _super.call(this) || this;
        /**
     * @internal
     */ _this._track = [];
        /**
     * @internal
     */ _this._covers = [];
        _this._handlers = {};
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(zr);
        }
        _this._zr = zr;
        _this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
        _this._uid = 'brushController_' + baseUID++;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(pointerHandlers, function(handler, eventName) {
            this._handlers[eventName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bind"])(handler, this);
        }, _this);
        return _this;
    }
    /**
   * If set to `false`, select disabled.
   */ BrushController.prototype.enableBrush = function(brushOption) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._mounted);
        }
        this._brushType && this._doDisableBrush();
        brushOption.brushType && this._doEnableBrush(brushOption);
        return this;
    };
    BrushController.prototype._doEnableBrush = function(brushOption) {
        var zr = this._zr;
        // Consider roam, which takes globalPan too.
        if (!this._enableGlobalPan) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$interactionMutex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.take(zr, MUTEX_RESOURCE_KEY, this._uid);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this._handlers, function(handler, eventName) {
            zr.on(eventName, handler);
        });
        this._brushType = brushOption.brushType;
        this._brushOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(DEFAULT_BRUSH_OPT), brushOption, true);
    };
    BrushController.prototype._doDisableBrush = function() {
        var zr = this._zr;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$interactionMutex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.release(zr, MUTEX_RESOURCE_KEY, this._uid);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(this._handlers, function(handler, eventName) {
            zr.off(eventName, handler);
        });
        this._brushType = this._brushOption = null;
    };
    /**
   * @param panelOpts If not pass, it is global brush.
   */ BrushController.prototype.setPanels = function(panelOpts) {
        if (panelOpts && panelOpts.length) {
            var panels_1 = this._panels = {};
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(panelOpts, function(panelOpts) {
                panels_1[panelOpts.panelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(panelOpts);
            });
        } else {
            this._panels = null;
        }
        return this;
    };
    BrushController.prototype.mount = function(opt) {
        opt = opt || {};
        if ("TURBOPACK compile-time truthy", 1) {
            this._mounted = true; // should be at first.
        }
        this._enableGlobalPan = opt.enableGlobalPan;
        var thisGroup = this.group;
        this._zr.add(thisGroup);
        thisGroup.attr({
            x: opt.x || 0,
            y: opt.y || 0,
            rotation: opt.rotation || 0,
            scaleX: opt.scaleX || 1,
            scaleY: opt.scaleY || 1
        });
        this._transform = thisGroup.getLocalTransform();
        return this;
    };
    // eachCover(cb, context): void {
    //     each(this._covers, cb, context);
    // }
    /**
   * Update covers.
   * @param coverConfigList
   *        If coverConfigList is null/undefined, all covers removed.
   */ BrushController.prototype.updateCovers = function(coverConfigList) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._mounted);
        }
        coverConfigList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(coverConfigList, function(coverConfig) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(DEFAULT_BRUSH_OPT), coverConfig, true);
        });
        var tmpIdPrefix = '\0-brush-index-';
        var oldCovers = this._covers;
        var newCovers = this._covers = [];
        var controller = this;
        var creatingCover = this._creatingCover;
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$DataDiffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](oldCovers, coverConfigList, oldGetKey, getKey).add(addOrUpdate).update(addOrUpdate).remove(remove).execute();
        return this;
        "TURBOPACK unreachable";
        function getKey(brushOption, index) {
            return (brushOption.id != null ? brushOption.id : tmpIdPrefix + index) + '-' + brushOption.brushType;
        }
        function oldGetKey(cover, index) {
            return getKey(cover.__brushOption, index);
        }
        function addOrUpdate(newIndex, oldIndex) {
            var newBrushInternal = coverConfigList[newIndex];
            // Consider setOption in event listener of brushSelect,
            // where updating cover when creating should be forbidden.
            if (oldIndex != null && oldCovers[oldIndex] === creatingCover) {
                newCovers[newIndex] = oldCovers[oldIndex];
            } else {
                var cover = newCovers[newIndex] = oldIndex != null ? (oldCovers[oldIndex].__brushOption = newBrushInternal, oldCovers[oldIndex]) : endCreating(controller, createCover(controller, newBrushInternal));
                updateCoverAfterCreation(controller, cover);
            }
        }
        function remove(oldIndex) {
            if (oldCovers[oldIndex] !== creatingCover) {
                controller.group.remove(oldCovers[oldIndex]);
            }
        }
    };
    BrushController.prototype.unmount = function() {
        if ("TURBOPACK compile-time truthy", 1) {
            if (!this._mounted) {
                return;
            }
        }
        this.enableBrush(false);
        // container may 'removeAll' outside.
        clearCovers(this);
        this._zr.remove(this.group);
        if ("TURBOPACK compile-time truthy", 1) {
            this._mounted = false; // should be at last.
        }
        return this;
    };
    BrushController.prototype.dispose = function() {
        this.unmount();
        this.off();
    };
    return BrushController;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$Eventful$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function createCover(controller, brushOption) {
    var cover = coverRenderers[brushOption.brushType].createCover(controller, brushOption);
    cover.__brushOption = brushOption;
    updateZ(cover, brushOption);
    controller.group.add(cover);
    return cover;
}
function endCreating(controller, creatingCover) {
    var coverRenderer = getCoverRenderer(creatingCover);
    if (coverRenderer.endCreating) {
        coverRenderer.endCreating(controller, creatingCover);
        updateZ(creatingCover, creatingCover.__brushOption);
    }
    return creatingCover;
}
function updateCoverShape(controller, cover) {
    var brushOption = cover.__brushOption;
    getCoverRenderer(cover).updateCoverShape(controller, cover, brushOption.range, brushOption);
}
function updateZ(cover, brushOption) {
    var z = brushOption.z;
    z == null && (z = COVER_Z);
    cover.traverse(function(el) {
        el.z = z;
        el.z2 = z; // Consider in given container.
    });
}
function updateCoverAfterCreation(controller, cover) {
    getCoverRenderer(cover).updateCommon(controller, cover);
    updateCoverShape(controller, cover);
}
function getCoverRenderer(cover) {
    return coverRenderers[cover.__brushOption.brushType];
}
// return target panel or `true` (means global panel)
function getPanelByPoint(controller, e, localCursorPoint) {
    var panels = controller._panels;
    if (!panels) {
        return BRUSH_PANEL_GLOBAL; // Global panel
    }
    var panel;
    var transform = controller._transform;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(panels, function(pn) {
        pn.isTargetByCursor(e, localCursorPoint, transform) && (panel = pn);
    });
    return panel;
}
// Return a panel or true
function getPanelByCover(controller, cover) {
    var panels = controller._panels;
    if (!panels) {
        return BRUSH_PANEL_GLOBAL; // Global panel
    }
    var panelId = cover.__brushOption.panelId;
    // User may give cover without coord sys info,
    // which is then treated as global panel.
    return panelId != null ? panels[panelId] : BRUSH_PANEL_GLOBAL;
}
function clearCovers(controller) {
    var covers = controller._covers;
    var originalLength = covers.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(covers, function(cover) {
        controller.group.remove(cover);
    }, controller);
    covers.length = 0;
    return !!originalLength;
}
function trigger(controller, opt) {
    var areas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(controller._covers, function(cover) {
        var brushOption = cover.__brushOption;
        var range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(brushOption.range);
        return {
            brushType: brushOption.brushType,
            panelId: brushOption.panelId,
            range: range
        };
    });
    controller.trigger('brush', {
        areas: areas,
        isEnd: !!opt.isEnd,
        removeOnClick: !!opt.removeOnClick
    });
}
function shouldShowCover(controller) {
    var track = controller._track;
    if (!track.length) {
        return false;
    }
    var p2 = track[track.length - 1];
    var p1 = track[0];
    var dx = p2[0] - p1[0];
    var dy = p2[1] - p1[1];
    var dist = mathPow(dx * dx + dy * dy, 0.5);
    return dist > UNSELECT_THRESHOLD;
}
function getTrackEnds(track) {
    var tail = track.length - 1;
    tail < 0 && (tail = 0);
    return [
        track[0],
        track[tail]
    ];
}
;
function createBaseRectCover(rectRangeConverter, controller, brushOption, edgeNameSequences) {
    var cover = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
    cover.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Rect({
        name: 'main',
        style: makeStyle(brushOption),
        silent: true,
        draggable: true,
        cursor: 'move',
        drift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(driftRect, rectRangeConverter, controller, cover, [
            'n',
            's',
            'w',
            'e'
        ]),
        ondragend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(trigger, controller, {
            isEnd: true
        })
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(edgeNameSequences, function(nameSequence) {
        cover.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Rect({
            name: nameSequence.join(''),
            style: {
                opacity: 0
            },
            draggable: true,
            silent: true,
            invisible: true,
            drift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(driftRect, rectRangeConverter, controller, cover, nameSequence),
            ondragend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(trigger, controller, {
                isEnd: true
            })
        }));
    });
    return cover;
}
function updateBaseRect(controller, cover, localRange, brushOption) {
    var lineWidth = brushOption.brushStyle.lineWidth || 0;
    var handleSize = mathMax(lineWidth, MIN_RESIZE_LINE_WIDTH);
    var x = localRange[0][0];
    var y = localRange[1][0];
    var xa = x - lineWidth / 2;
    var ya = y - lineWidth / 2;
    var x2 = localRange[0][1];
    var y2 = localRange[1][1];
    var x2a = x2 - handleSize + lineWidth / 2;
    var y2a = y2 - handleSize + lineWidth / 2;
    var width = x2 - x;
    var height = y2 - y;
    var widtha = width + lineWidth;
    var heighta = height + lineWidth;
    updateRectShape(controller, cover, 'main', x, y, width, height);
    if (brushOption.transformable) {
        updateRectShape(controller, cover, 'w', xa, ya, handleSize, heighta);
        updateRectShape(controller, cover, 'e', x2a, ya, handleSize, heighta);
        updateRectShape(controller, cover, 'n', xa, ya, widtha, handleSize);
        updateRectShape(controller, cover, 's', xa, y2a, widtha, handleSize);
        updateRectShape(controller, cover, 'nw', xa, ya, handleSize, handleSize);
        updateRectShape(controller, cover, 'ne', x2a, ya, handleSize, handleSize);
        updateRectShape(controller, cover, 'sw', xa, y2a, handleSize, handleSize);
        updateRectShape(controller, cover, 'se', x2a, y2a, handleSize, handleSize);
    }
}
function updateCommon(controller, cover) {
    var brushOption = cover.__brushOption;
    var transformable = brushOption.transformable;
    var mainEl = cover.childAt(0);
    mainEl.useStyle(makeStyle(brushOption));
    mainEl.attr({
        silent: !transformable,
        cursor: transformable ? 'move' : 'default'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
        [
            'w'
        ],
        [
            'e'
        ],
        [
            'n'
        ],
        [
            's'
        ],
        [
            's',
            'e'
        ],
        [
            's',
            'w'
        ],
        [
            'n',
            'e'
        ],
        [
            'n',
            'w'
        ]
    ], function(nameSequence) {
        var el = cover.childOfName(nameSequence.join(''));
        var globalDir = nameSequence.length === 1 ? getGlobalDirection1(controller, nameSequence[0]) : getGlobalDirection2(controller, nameSequence);
        el && el.attr({
            silent: !transformable,
            invisible: !transformable,
            cursor: transformable ? CURSOR_MAP[globalDir] + '-resize' : null
        });
    });
}
function updateRectShape(controller, cover, name, x, y, w, h) {
    var el = cover.childOfName(name);
    el && el.setShape(pointsToRect(clipByPanel(controller, cover, [
        [
            x,
            y
        ],
        [
            x + w,
            y + h
        ]
    ])));
}
function makeStyle(brushOption) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
        strokeNoScale: true
    }, brushOption.brushStyle);
}
function formatRectRange(x, y, x2, y2) {
    var min = [
        mathMin(x, x2),
        mathMin(y, y2)
    ];
    var max = [
        mathMax(x, x2),
        mathMax(y, y2)
    ];
    return [
        [
            min[0],
            max[0]
        ],
        [
            min[1],
            max[1]
        ] // y range
    ];
}
function getTransform(controller) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getTransform(controller.group);
}
function getGlobalDirection1(controller, localDirName) {
    var map = {
        w: 'left',
        e: 'right',
        n: 'top',
        s: 'bottom'
    };
    var inverseMap = {
        left: 'w',
        right: 'e',
        top: 'n',
        bottom: 's'
    };
    var dir = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.transformDirection(map[localDirName], getTransform(controller));
    return inverseMap[dir];
}
function getGlobalDirection2(controller, localDirNameSeq) {
    var globalDir = [
        getGlobalDirection1(controller, localDirNameSeq[0]),
        getGlobalDirection1(controller, localDirNameSeq[1])
    ];
    (globalDir[0] === 'e' || globalDir[0] === 'w') && globalDir.reverse();
    return globalDir.join('');
}
function driftRect(rectRangeConverter, controller, cover, dirNameSequence, dx, dy) {
    var brushOption = cover.__brushOption;
    var rectRange = rectRangeConverter.toRectRange(brushOption.range);
    var localDelta = toLocalDelta(controller, dx, dy);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(dirNameSequence, function(dirName) {
        var ind = DIRECTION_MAP[dirName];
        rectRange[ind[0]][ind[1]] += localDelta[ind[0]];
    });
    brushOption.range = rectRangeConverter.fromRectRange(formatRectRange(rectRange[0][0], rectRange[1][0], rectRange[0][1], rectRange[1][1]));
    updateCoverAfterCreation(controller, cover);
    trigger(controller, {
        isEnd: false
    });
}
function driftPolygon(controller, cover, dx, dy) {
    var range = cover.__brushOption.range;
    var localDelta = toLocalDelta(controller, dx, dy);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(range, function(point) {
        point[0] += localDelta[0];
        point[1] += localDelta[1];
    });
    updateCoverAfterCreation(controller, cover);
    trigger(controller, {
        isEnd: false
    });
}
function toLocalDelta(controller, dx, dy) {
    var thisGroup = controller.group;
    var localD = thisGroup.transformCoordToLocal(dx, dy);
    var localZero = thisGroup.transformCoordToLocal(0, 0);
    return [
        localD[0] - localZero[0],
        localD[1] - localZero[1]
    ];
}
function clipByPanel(controller, cover, data) {
    var panel = getPanelByCover(controller, cover);
    return panel && panel !== BRUSH_PANEL_GLOBAL ? panel.clipPath(data, controller._transform) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(data);
}
function pointsToRect(points) {
    var xmin = mathMin(points[0][0], points[1][0]);
    var ymin = mathMin(points[0][1], points[1][1]);
    var xmax = mathMax(points[0][0], points[1][0]);
    var ymax = mathMax(points[0][1], points[1][1]);
    return {
        x: xmin,
        y: ymin,
        width: xmax - xmin,
        height: ymax - ymin
    };
}
function resetCursor(controller, e, localCursorPoint) {
    if (// Check active
    !controller._brushType || isOutsideZrArea(controller, e.offsetX, e.offsetY)) {
        return;
    }
    var zr = controller._zr;
    var covers = controller._covers;
    var currPanel = getPanelByPoint(controller, e, localCursorPoint);
    // Check whether in covers.
    if (!controller._dragging) {
        for(var i = 0; i < covers.length; i++){
            var brushOption = covers[i].__brushOption;
            if (currPanel && (currPanel === BRUSH_PANEL_GLOBAL || brushOption.panelId === currPanel.panelId) && coverRenderers[brushOption.brushType].contain(covers[i], localCursorPoint[0], localCursorPoint[1])) {
                // Use cursor style set on cover.
                return;
            }
        }
    }
    currPanel && zr.setCursorStyle('crosshair');
}
function preventDefault(e) {
    var rawE = e.event;
    rawE.preventDefault && rawE.preventDefault();
}
function mainShapeContain(cover, x, y) {
    return cover.childOfName('main').contain(x, y);
}
function updateCoverByMouse(controller, e, localCursorPoint, isEnd) {
    var creatingCover = controller._creatingCover;
    var panel = controller._creatingPanel;
    var thisBrushOption = controller._brushOption;
    var eventParams;
    controller._track.push(localCursorPoint.slice());
    if (shouldShowCover(controller) || creatingCover) {
        if (panel && !creatingCover) {
            thisBrushOption.brushMode === 'single' && clearCovers(controller);
            var brushOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clone"])(thisBrushOption);
            brushOption.brushType = determineBrushType(brushOption.brushType, panel);
            brushOption.panelId = panel === BRUSH_PANEL_GLOBAL ? null : panel.panelId;
            creatingCover = controller._creatingCover = createCover(controller, brushOption);
            controller._covers.push(creatingCover);
        }
        if (creatingCover) {
            var coverRenderer = coverRenderers[determineBrushType(controller._brushType, panel)];
            var coverBrushOption = creatingCover.__brushOption;
            coverBrushOption.range = coverRenderer.getCreatingRange(clipByPanel(controller, creatingCover, controller._track));
            if (isEnd) {
                endCreating(controller, creatingCover);
                coverRenderer.updateCommon(controller, creatingCover);
            }
            updateCoverShape(controller, creatingCover);
            eventParams = {
                isEnd: isEnd
            };
        }
    } else if (isEnd && thisBrushOption.brushMode === 'single' && thisBrushOption.removeOnClick) {
        // Help user to remove covers easily, only by a tiny drag, in 'single' mode.
        // But a single click do not clear covers, because user may have casual
        // clicks (for example, click on other component and do not expect covers
        // disappear).
        // Only some cover removed, trigger action, but not every click trigger action.
        if (getPanelByPoint(controller, e, localCursorPoint) && clearCovers(controller)) {
            eventParams = {
                isEnd: isEnd,
                removeOnClick: true
            };
        }
    }
    return eventParams;
}
function determineBrushType(brushType, panel) {
    if (brushType === 'auto') {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(panel && panel.defaultBrushType, 'MUST have defaultBrushType when brushType is "atuo"');
        }
        return panel.defaultBrushType;
    }
    return brushType;
}
var pointerHandlers = {
    mousedown: function(e) {
        if (this._dragging) {
            // In case some browser do not support globalOut,
            // and release mouse out side the browser.
            handleDragEnd(this, e);
        } else if (!e.target || !e.target.draggable) {
            preventDefault(e);
            var localCursorPoint = this.group.transformCoordToLocal(e.offsetX, e.offsetY);
            this._creatingCover = null;
            var panel = this._creatingPanel = getPanelByPoint(this, e, localCursorPoint);
            if (panel) {
                this._dragging = true;
                this._track = [
                    localCursorPoint.slice()
                ];
            }
        }
    },
    mousemove: function(e) {
        var x = e.offsetX;
        var y = e.offsetY;
        var localCursorPoint = this.group.transformCoordToLocal(x, y);
        resetCursor(this, e, localCursorPoint);
        if (this._dragging) {
            preventDefault(e);
            var eventParams = updateCoverByMouse(this, e, localCursorPoint, false);
            eventParams && trigger(this, eventParams);
        }
    },
    mouseup: function(e) {
        handleDragEnd(this, e);
    }
};
function handleDragEnd(controller, e) {
    if (controller._dragging) {
        preventDefault(e);
        var x = e.offsetX;
        var y = e.offsetY;
        var localCursorPoint = controller.group.transformCoordToLocal(x, y);
        var eventParams = updateCoverByMouse(controller, e, localCursorPoint, true);
        controller._dragging = false;
        controller._track = [];
        controller._creatingCover = null;
        // trigger event should be at final, after procedure will be nested.
        eventParams && trigger(controller, eventParams);
    }
}
function isOutsideZrArea(controller, x, y) {
    var zr = controller._zr;
    return x < 0 || x > zr.getWidth() || y < 0 || y > zr.getHeight();
}
/**
 * key: brushType
 */ var coverRenderers = {
    lineX: getLineRenderer(0),
    lineY: getLineRenderer(1),
    rect: {
        createCover: function(controller, brushOption) {
            function returnInput(range) {
                return range;
            }
            return createBaseRectCover({
                toRectRange: returnInput,
                fromRectRange: returnInput
            }, controller, brushOption, [
                [
                    'w'
                ],
                [
                    'e'
                ],
                [
                    'n'
                ],
                [
                    's'
                ],
                [
                    's',
                    'e'
                ],
                [
                    's',
                    'w'
                ],
                [
                    'n',
                    'e'
                ],
                [
                    'n',
                    'w'
                ]
            ]);
        },
        getCreatingRange: function(localTrack) {
            var ends = getTrackEnds(localTrack);
            return formatRectRange(ends[1][0], ends[1][1], ends[0][0], ends[0][1]);
        },
        updateCoverShape: function(controller, cover, localRange, brushOption) {
            updateBaseRect(controller, cover, localRange, brushOption);
        },
        updateCommon: updateCommon,
        contain: mainShapeContain
    },
    polygon: {
        createCover: function(controller, brushOption) {
            var cover = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Group();
            // Do not use graphic.Polygon because graphic.Polyline do not close the
            // border of the shape when drawing, which is a better experience for user.
            cover.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Polyline({
                name: 'main',
                style: makeStyle(brushOption),
                silent: true
            }));
            return cover;
        },
        getCreatingRange: function(localTrack) {
            return localTrack;
        },
        endCreating: function(controller, cover) {
            cover.remove(cover.childAt(0));
            // Use graphic.Polygon close the shape.
            cover.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Polygon({
                name: 'main',
                draggable: true,
                drift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(driftPolygon, controller, cover),
                ondragend: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(trigger, controller, {
                    isEnd: true
                })
            }));
        },
        updateCoverShape: function(controller, cover, localRange, brushOption) {
            cover.childAt(0).setShape({
                points: clipByPanel(controller, cover, localRange)
            });
        },
        updateCommon: updateCommon,
        contain: mainShapeContain
    }
};
function getLineRenderer(xyIndex) {
    return {
        createCover: function(controller, brushOption) {
            return createBaseRectCover({
                toRectRange: function(range) {
                    var rectRange = [
                        range,
                        [
                            0,
                            100
                        ]
                    ];
                    xyIndex && rectRange.reverse();
                    return rectRange;
                },
                fromRectRange: function(rectRange) {
                    return rectRange[xyIndex];
                }
            }, controller, brushOption, [
                [
                    [
                        'w'
                    ],
                    [
                        'e'
                    ]
                ],
                [
                    [
                        'n'
                    ],
                    [
                        's'
                    ]
                ]
            ][xyIndex]);
        },
        getCreatingRange: function(localTrack) {
            var ends = getTrackEnds(localTrack);
            var min = mathMin(ends[0][xyIndex], ends[1][xyIndex]);
            var max = mathMax(ends[0][xyIndex], ends[1][xyIndex]);
            return [
                min,
                max
            ];
        },
        updateCoverShape: function(controller, cover, localRange, brushOption) {
            var otherExtent;
            // If brushWidth not specified, fit the panel.
            var panel = getPanelByCover(controller, cover);
            if (panel !== BRUSH_PANEL_GLOBAL && panel.getLinearBrushOtherExtent) {
                otherExtent = panel.getLinearBrushOtherExtent(xyIndex);
            } else {
                var zr = controller._zr;
                otherExtent = [
                    0,
                    [
                        zr.getWidth(),
                        zr.getHeight()
                    ][1 - xyIndex]
                ];
            }
            var rectRange = [
                localRange,
                otherExtent
            ];
            xyIndex && rectRange.reverse();
            updateBaseRect(controller, cover, rectRange, brushOption);
        },
        updateCommon: updateCommon,
        contain: mainShapeContain
    };
}
const __TURBOPACK__default__export__ = BrushController;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/cursorHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "onIrrelevantElement": (()=>onIrrelevantElement)
});
var IRRELEVANT_EXCLUDES = {
    'axisPointer': 1,
    'tooltip': 1,
    'brush': 1
};
function onIrrelevantElement(e, api, targetCoordSysModel) {
    var model = api.getComponentByElement(e.topTarget);
    // If model is axisModel, it works only if it is injected with coordinateSystem.
    var coordSys = model && model.coordinateSystem;
    return model && model !== targetCoordSysModel && !IRRELEVANT_EXCLUDES.hasOwnProperty(model.mainType) && coordSys && coordSys.model !== targetCoordSysModel;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/brushHelper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "makeLinearBrushOtherExtent": (()=>makeLinearBrushOtherExtent),
    "makeRectIsTargetByCursor": (()=>makeRectIsTargetByCursor),
    "makeRectPanelClipPath": (()=>makeRectPanelClipPath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$cursorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/cursorHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js [app-client] (ecmascript)");
;
;
;
function makeRectPanelClipPath(rect) {
    rect = normalizeRect(rect);
    return function(localPoints) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.clipPointsByRect(localPoints, rect);
    };
}
function makeLinearBrushOtherExtent(rect, specifiedXYIndex) {
    rect = normalizeRect(rect);
    return function(xyIndex) {
        var idx = specifiedXYIndex != null ? specifiedXYIndex : xyIndex;
        var brushWidth = idx ? rect.width : rect.height;
        var base = idx ? rect.x : rect.y;
        return [
            base,
            base + (brushWidth || 0)
        ];
    };
}
function makeRectIsTargetByCursor(rect, api, targetModel) {
    var boundingRect = normalizeRect(rect);
    return function(e, localCursorPoint) {
        return boundingRect.contain(localCursorPoint[0], localCursorPoint[1]) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$cursorHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onIrrelevantElement"])(e, api, targetModel);
    };
}
// Consider width/height is negative.
function normalizeRect(rect) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$BoundingRect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(rect);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/BrushTargetManager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/brushHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-client] (ecmascript)");
;
;
;
;
// FIXME
// how to genarialize to more coordinate systems.
var INCLUDE_FINDER_MAIN_TYPES = [
    'grid',
    'xAxis',
    'yAxis',
    'geo',
    'graph',
    'polar',
    'radiusAxis',
    'angleAxis',
    'bmap'
];
var BrushTargetManager = /** @class */ function() {
    /**
   * @param finder contains Index/Id/Name of xAxis/yAxis/geo/grid
   *        Each can be {number|Array.<number>}. like: {xAxisIndex: [3, 4]}
   * @param opt.include include coordinate system types.
   */ function BrushTargetManager(finder, ecModel, opt) {
        var _this = this;
        this._targetInfoList = [];
        var foundCpts = parseFinder(ecModel, finder);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(targetInfoBuilders, function(builder, type) {
            if (!opt || !opt.include || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(opt.include, type) >= 0) {
                builder(foundCpts, _this._targetInfoList);
            }
        });
    }
    BrushTargetManager.prototype.setOutputRanges = function(areas, ecModel) {
        this.matchOutputRanges(areas, ecModel, function(area, coordRange, coordSys) {
            (area.coordRanges || (area.coordRanges = [])).push(coordRange);
            // area.coordRange is the first of area.coordRanges
            if (!area.coordRange) {
                area.coordRange = coordRange;
                // In 'category' axis, coord to pixel is not reversible, so we can not
                // rebuild range by coordRange accrately, which may bring trouble when
                // brushing only one item. So we use __rangeOffset to rebuilding range
                // by coordRange. And this it only used in brush component so it is no
                // need to be adapted to coordRanges.
                var result = coordConvert[area.brushType](0, coordSys, coordRange);
                area.__rangeOffset = {
                    offset: diffProcessor[area.brushType](result.values, area.range, [
                        1,
                        1
                    ]),
                    xyMinMax: result.xyMinMax
                };
            }
        });
        return areas;
    };
    BrushTargetManager.prototype.matchOutputRanges = function(areas, ecModel, cb) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(areas, function(area) {
            var targetInfo = this.findTargetInfo(area, ecModel);
            if (targetInfo && targetInfo !== true) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(targetInfo.coordSyses, function(coordSys) {
                    var result = coordConvert[area.brushType](1, coordSys, area.range, true);
                    cb(area, result.values, coordSys, ecModel);
                });
            }
        }, this);
    };
    /**
   * the `areas` is `BrushModel.areas`.
   * Called in layout stage.
   * convert `area.coordRange` to global range and set panelId to `area.range`.
   */ BrushTargetManager.prototype.setInputRanges = function(areas, ecModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(areas, function(area) {
            var targetInfo = this.findTargetInfo(area, ecModel);
            if ("TURBOPACK compile-time truthy", 1) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!targetInfo || targetInfo === true || area.coordRange, 'coordRange must be specified when coord index specified.');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(!targetInfo || targetInfo !== true || area.range, 'range must be specified in global brush.');
            }
            area.range = area.range || [];
            // convert coordRange to global range and set panelId.
            if (targetInfo && targetInfo !== true) {
                area.panelId = targetInfo.panelId;
                // (1) area.range should always be calculate from coordRange but does
                // not keep its original value, for the sake of the dataZoom scenario,
                // where area.coordRange remains unchanged but area.range may be changed.
                // (2) Only support converting one coordRange to pixel range in brush
                // component. So do not consider `coordRanges`.
                // (3) About __rangeOffset, see comment above.
                var result = coordConvert[area.brushType](0, targetInfo.coordSys, area.coordRange);
                var rangeOffset = area.__rangeOffset;
                area.range = rangeOffset ? diffProcessor[area.brushType](result.values, rangeOffset.offset, getScales(result.xyMinMax, rangeOffset.xyMinMax)) : result.values;
            }
        }, this);
    };
    BrushTargetManager.prototype.makePanelOpts = function(api, getDefaultBrushType) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(this._targetInfoList, function(targetInfo) {
            var rect = targetInfo.getPanelRect();
            return {
                panelId: targetInfo.panelId,
                defaultBrushType: getDefaultBrushType ? getDefaultBrushType(targetInfo) : null,
                clipPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeRectPanelClipPath(rect),
                isTargetByCursor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeRectIsTargetByCursor(rect, api, targetInfo.coordSysModel),
                getLinearBrushOtherExtent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$brushHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.makeLinearBrushOtherExtent(rect)
            };
        });
    };
    BrushTargetManager.prototype.controlSeries = function(area, seriesModel, ecModel) {
        // Check whether area is bound in coord, and series do not belong to that coord.
        // If do not do this check, some brush (like lineX) will controll all axes.
        var targetInfo = this.findTargetInfo(area, ecModel);
        return targetInfo === true || targetInfo && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(targetInfo.coordSyses, seriesModel.coordinateSystem) >= 0;
    };
    /**
   * If return Object, a coord found.
   * If return true, global found.
   * Otherwise nothing found.
   */ BrushTargetManager.prototype.findTargetInfo = function(area, ecModel) {
        var targetInfoList = this._targetInfoList;
        var foundCpts = parseFinder(ecModel, area);
        for(var i = 0; i < targetInfoList.length; i++){
            var targetInfo = targetInfoList[i];
            var areaPanelId = area.panelId;
            if (areaPanelId) {
                if (targetInfo.panelId === areaPanelId) {
                    return targetInfo;
                }
            } else {
                for(var j = 0; j < targetInfoMatchers.length; j++){
                    if (targetInfoMatchers[j](foundCpts, targetInfo)) {
                        return targetInfo;
                    }
                }
            }
        }
        return true;
    };
    return BrushTargetManager;
}();
function formatMinMax(minMax) {
    minMax[0] > minMax[1] && minMax.reverse();
    return minMax;
}
function parseFinder(ecModel, finder) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFinder"])(ecModel, finder, {
        includeMainTypes: INCLUDE_FINDER_MAIN_TYPES
    });
}
var targetInfoBuilders = {
    grid: function(foundCpts, targetInfoList) {
        var xAxisModels = foundCpts.xAxisModels;
        var yAxisModels = foundCpts.yAxisModels;
        var gridModels = foundCpts.gridModels;
        // Remove duplicated.
        var gridModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        var xAxesHas = {};
        var yAxesHas = {};
        if (!xAxisModels && !yAxisModels && !gridModels) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(xAxisModels, function(axisModel) {
            var gridModel = axisModel.axis.grid.model;
            gridModelMap.set(gridModel.id, gridModel);
            xAxesHas[gridModel.id] = true;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(yAxisModels, function(axisModel) {
            var gridModel = axisModel.axis.grid.model;
            gridModelMap.set(gridModel.id, gridModel);
            yAxesHas[gridModel.id] = true;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(gridModels, function(gridModel) {
            gridModelMap.set(gridModel.id, gridModel);
            xAxesHas[gridModel.id] = true;
            yAxesHas[gridModel.id] = true;
        });
        gridModelMap.each(function(gridModel) {
            var grid = gridModel.coordinateSystem;
            var cartesians = [];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(grid.getCartesians(), function(cartesian, index) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(xAxisModels, cartesian.getAxis('x').model) >= 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(yAxisModels, cartesian.getAxis('y').model) >= 0) {
                    cartesians.push(cartesian);
                }
            });
            targetInfoList.push({
                panelId: 'grid--' + gridModel.id,
                gridModel: gridModel,
                coordSysModel: gridModel,
                // Use the first one as the representitive coordSys.
                coordSys: cartesians[0],
                coordSyses: cartesians,
                getPanelRect: panelRectBuilders.grid,
                xAxisDeclared: xAxesHas[gridModel.id],
                yAxisDeclared: yAxesHas[gridModel.id]
            });
        });
    },
    geo: function(foundCpts, targetInfoList) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(foundCpts.geoModels, function(geoModel) {
            var coordSys = geoModel.coordinateSystem;
            targetInfoList.push({
                panelId: 'geo--' + geoModel.id,
                geoModel: geoModel,
                coordSysModel: geoModel,
                coordSys: coordSys,
                coordSyses: [
                    coordSys
                ],
                getPanelRect: panelRectBuilders.geo
            });
        });
    }
};
var targetInfoMatchers = [
    // grid
    function(foundCpts, targetInfo) {
        var xAxisModel = foundCpts.xAxisModel;
        var yAxisModel = foundCpts.yAxisModel;
        var gridModel = foundCpts.gridModel;
        !gridModel && xAxisModel && (gridModel = xAxisModel.axis.grid.model);
        !gridModel && yAxisModel && (gridModel = yAxisModel.axis.grid.model);
        return gridModel && gridModel === targetInfo.gridModel;
    },
    // geo
    function(foundCpts, targetInfo) {
        var geoModel = foundCpts.geoModel;
        return geoModel && geoModel === targetInfo.geoModel;
    }
];
var panelRectBuilders = {
    grid: function() {
        // grid is not Transformable.
        return this.coordSys.master.getRect().clone();
    },
    geo: function() {
        var coordSys = this.coordSys;
        var rect = coordSys.getBoundingRect().clone();
        // geo roam and zoom transform
        rect.applyTransform(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getTransform(coordSys));
        return rect;
    }
};
var coordConvert = {
    lineX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(axisConvert, 0),
    lineY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(axisConvert, 1),
    rect: function(to, coordSys, rangeOrCoordRange, clamp) {
        var xminymin = to ? coordSys.pointToData([
            rangeOrCoordRange[0][0],
            rangeOrCoordRange[1][0]
        ], clamp) : coordSys.dataToPoint([
            rangeOrCoordRange[0][0],
            rangeOrCoordRange[1][0]
        ], clamp);
        var xmaxymax = to ? coordSys.pointToData([
            rangeOrCoordRange[0][1],
            rangeOrCoordRange[1][1]
        ], clamp) : coordSys.dataToPoint([
            rangeOrCoordRange[0][1],
            rangeOrCoordRange[1][1]
        ], clamp);
        var values = [
            formatMinMax([
                xminymin[0],
                xmaxymax[0]
            ]),
            formatMinMax([
                xminymin[1],
                xmaxymax[1]
            ])
        ];
        return {
            values: values,
            xyMinMax: values
        };
    },
    polygon: function(to, coordSys, rangeOrCoordRange, clamp) {
        var xyMinMax = [
            [
                Infinity,
                -Infinity
            ],
            [
                Infinity,
                -Infinity
            ]
        ];
        var values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(rangeOrCoordRange, function(item) {
            var p = to ? coordSys.pointToData(item, clamp) : coordSys.dataToPoint(item, clamp);
            xyMinMax[0][0] = Math.min(xyMinMax[0][0], p[0]);
            xyMinMax[1][0] = Math.min(xyMinMax[1][0], p[1]);
            xyMinMax[0][1] = Math.max(xyMinMax[0][1], p[0]);
            xyMinMax[1][1] = Math.max(xyMinMax[1][1], p[1]);
            return p;
        });
        return {
            values: values,
            xyMinMax: xyMinMax
        };
    }
};
function axisConvert(axisNameIndex, to, coordSys, rangeOrCoordRange) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(coordSys.type === 'cartesian2d', 'lineX/lineY brush is available only in cartesian2d.');
    }
    var axis = coordSys.getAxis([
        'x',
        'y'
    ][axisNameIndex]);
    var values = formatMinMax((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])([
        0,
        1
    ], function(i) {
        return to ? axis.coordToData(axis.toLocalCoord(rangeOrCoordRange[i]), true) : axis.toGlobalCoord(axis.dataToCoord(rangeOrCoordRange[i]));
    }));
    var xyMinMax = [];
    xyMinMax[axisNameIndex] = values;
    xyMinMax[1 - axisNameIndex] = [
        NaN,
        NaN
    ];
    return {
        values: values,
        xyMinMax: xyMinMax
    };
}
var diffProcessor = {
    lineX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(axisDiffProcessor, 0),
    lineY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["curry"])(axisDiffProcessor, 1),
    rect: function(values, refer, scales) {
        return [
            [
                values[0][0] - scales[0] * refer[0][0],
                values[0][1] - scales[0] * refer[0][1]
            ],
            [
                values[1][0] - scales[1] * refer[1][0],
                values[1][1] - scales[1] * refer[1][1]
            ]
        ];
    },
    polygon: function(values, refer, scales) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["map"])(values, function(item, idx) {
            return [
                item[0] - scales[0] * refer[idx][0],
                item[1] - scales[1] * refer[idx][1]
            ];
        });
    }
};
function axisDiffProcessor(axisNameIndex, values, refer, scales) {
    return [
        values[0] - scales[axisNameIndex] * refer[0],
        values[1] - scales[axisNameIndex] * refer[1]
    ];
}
// We have to process scale caused by dataZoom manually,
// although it might be not accurate.
// Return [0~1, 0~1]
function getScales(xyMinMaxCurr, xyMinMaxOrigin) {
    var sizeCurr = getSize(xyMinMaxCurr);
    var sizeOrigin = getSize(xyMinMaxOrigin);
    var scales = [
        sizeCurr[0] / sizeOrigin[0],
        sizeCurr[1] / sizeOrigin[1]
    ];
    isNaN(scales[0]) && (scales[0] = 1);
    isNaN(scales[1]) && (scales[1] = 1);
    return scales;
}
function getSize(xyMinMax) {
    return xyMinMax ? [
        xyMinMax[0][1] - xyMinMax[0][0],
        xyMinMax[1][1] - xyMinMax[1][0]
    ] : [
        NaN,
        NaN
    ];
}
const __TURBOPACK__default__export__ = BrushTargetManager;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/history.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "clear": (()=>clear),
    "count": (()=>count),
    "pop": (()=>pop),
    "push": (()=>push)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
;
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each;
var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInner"])();
function push(ecModel, newSnapshot) {
    var storedSnapshots = getStoreSnapshots(ecModel);
    // If previous dataZoom can not be found,
    // complete an range with current range.
    each(newSnapshot, function(batchItem, dataZoomId) {
        var i = storedSnapshots.length - 1;
        for(; i >= 0; i--){
            var snapshot = storedSnapshots[i];
            if (snapshot[dataZoomId]) {
                break;
            }
        }
        if (i < 0) {
            // No origin range set, create one by current range.
            var dataZoomModel = ecModel.queryComponents({
                mainType: 'dataZoom',
                subType: 'select',
                id: dataZoomId
            })[0];
            if (dataZoomModel) {
                var percentRange = dataZoomModel.getPercentRange();
                storedSnapshots[0][dataZoomId] = {
                    dataZoomId: dataZoomId,
                    start: percentRange[0],
                    end: percentRange[1]
                };
            }
        }
    });
    storedSnapshots.push(newSnapshot);
}
function pop(ecModel) {
    var storedSnapshots = getStoreSnapshots(ecModel);
    var head = storedSnapshots[storedSnapshots.length - 1];
    storedSnapshots.length > 1 && storedSnapshots.pop();
    // Find top for all dataZoom.
    var snapshot = {};
    each(head, function(batchItem, dataZoomId) {
        for(var i = storedSnapshots.length - 1; i >= 0; i--){
            batchItem = storedSnapshots[i][dataZoomId];
            if (batchItem) {
                snapshot[dataZoomId] = batchItem;
                break;
            }
        }
    });
    return snapshot;
}
function clear(ecModel) {
    inner(ecModel).snapshots = null;
}
function count(ecModel) {
    return getStoreSnapshots(ecModel).length;
}
/**
 * History length of each dataZoom may be different.
 * this._history[0] is used to store origin range.
 */ function getStoreSnapshots(ecModel) {
    var store = inner(ecModel);
    if (!store.snapshots) {
        store.snapshots = [
            {}
        ];
    }
    return store.snapshots;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * Calculate slider move result.
 * Usage:
 * (1) If both handle0 and handle1 are needed to be moved, set minSpan the same as
 * maxSpan and the same as `Math.abs(handleEnd[1] - handleEnds[0])`.
 * (2) If handle0 is forbidden to cross handle1, set minSpan as `0`.
 *
 * @param delta Move length.
 * @param handleEnds handleEnds[0] can be bigger then handleEnds[1].
 *              handleEnds will be modified in this method.
 * @param extent handleEnds is restricted by extent.
 *              extent[0] should less or equals than extent[1].
 * @param handleIndex Can be 'all', means that both move the two handleEnds.
 * @param minSpan The range of dataZoom can not be smaller than that.
 *              If not set, handle0 and cross handle1. If set as a non-negative
 *              number (including `0`), handles will push each other when reaching
 *              the minSpan.
 * @param maxSpan The range of dataZoom can not be larger than that.
 * @return The input handleEnds.
 */ __turbopack_esm__({
    "default": (()=>sliderMove)
});
function sliderMove(delta, handleEnds, extent, handleIndex, minSpan, maxSpan) {
    delta = delta || 0;
    var extentSpan = extent[1] - extent[0];
    // Notice maxSpan and minSpan can be null/undefined.
    if (minSpan != null) {
        minSpan = restrict(minSpan, [
            0,
            extentSpan
        ]);
    }
    if (maxSpan != null) {
        maxSpan = Math.max(maxSpan, minSpan != null ? minSpan : 0);
    }
    if (handleIndex === 'all') {
        var handleSpan = Math.abs(handleEnds[1] - handleEnds[0]);
        handleSpan = restrict(handleSpan, [
            0,
            extentSpan
        ]);
        minSpan = maxSpan = restrict(handleSpan, [
            minSpan,
            maxSpan
        ]);
        handleIndex = 0;
    }
    handleEnds[0] = restrict(handleEnds[0], extent);
    handleEnds[1] = restrict(handleEnds[1], extent);
    var originalDistSign = getSpanSign(handleEnds, handleIndex);
    handleEnds[handleIndex] += delta;
    // Restrict in extent.
    var extentMinSpan = minSpan || 0;
    var realExtent = extent.slice();
    originalDistSign.sign < 0 ? realExtent[0] += extentMinSpan : realExtent[1] -= extentMinSpan;
    handleEnds[handleIndex] = restrict(handleEnds[handleIndex], realExtent);
    // Expand span.
    var currDistSign;
    currDistSign = getSpanSign(handleEnds, handleIndex);
    if (minSpan != null && (currDistSign.sign !== originalDistSign.sign || currDistSign.span < minSpan)) {
        // If minSpan exists, 'cross' is forbidden.
        handleEnds[1 - handleIndex] = handleEnds[handleIndex] + originalDistSign.sign * minSpan;
    }
    // Shrink span.
    currDistSign = getSpanSign(handleEnds, handleIndex);
    if (maxSpan != null && currDistSign.span > maxSpan) {
        handleEnds[1 - handleIndex] = handleEnds[handleIndex] + currDistSign.sign * maxSpan;
    }
    return handleEnds;
}
function getSpanSign(handleEnds, handleIndex) {
    var dist = handleEnds[handleIndex] - handleEnds[1 - handleIndex];
    // If `handleEnds[0] === handleEnds[1]`, always believe that handleEnd[0]
    // is at left of handleEnds[1] for non-cross case.
    return {
        span: Math.abs(dist),
        sign: dist > 0 ? -1 : dist < 0 ? 1 : handleIndex ? -1 : 1
    };
}
function restrict(value, extend) {
    return Math.min(extend[1] != null ? extend[1] : Infinity, Math.max(extend[0] != null ? extend[0] : -Infinity, value));
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/DataZoom.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$internalComponentCreator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/internalComponentCreator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
// TODO depends on DataZoom and Brush
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/BrushController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushTargetManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/BrushTargetManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each;
var DATA_ZOOM_ID_BASE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeInternalComponentId"])('toolbox-dataZoom_');
var ICON_TYPES = [
    'zoom',
    'back'
];
var DataZoomFeature = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DataZoomFeature, _super);
    function DataZoomFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataZoomFeature.prototype.render = function(featureModel, ecModel, api, payload) {
        if (!this._brushController) {
            this._brushController = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](api.getZr());
            this._brushController.on('brush', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bind(this._onBrush, this)).mount();
        }
        updateZoomBtnStatus(featureModel, ecModel, this, payload, api);
        updateBackBtnStatus(featureModel, ecModel);
    };
    DataZoomFeature.prototype.onclick = function(ecModel, api, type) {
        handlers[type].call(this);
    };
    DataZoomFeature.prototype.remove = function(ecModel, api) {
        this._brushController && this._brushController.unmount();
    };
    DataZoomFeature.prototype.dispose = function(ecModel, api) {
        this._brushController && this._brushController.dispose();
    };
    DataZoomFeature.prototype._onBrush = function(eventParam) {
        var areas = eventParam.areas;
        if (!eventParam.isEnd || !areas.length) {
            return;
        }
        var snapshot = {};
        var ecModel = this.ecModel;
        this._brushController.updateCovers([]); // remove cover
        var brushTargetManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushTargetManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](makeAxisFinder(this.model), ecModel, {
            include: [
                'grid'
            ]
        });
        brushTargetManager.matchOutputRanges(areas, ecModel, function(area, coordRange, coordSys) {
            if (coordSys.type !== 'cartesian2d') {
                return;
            }
            var brushType = area.brushType;
            if (brushType === 'rect') {
                setBatch('x', coordSys, coordRange[0]);
                setBatch('y', coordSys, coordRange[1]);
            } else {
                setBatch({
                    lineX: 'x',
                    lineY: 'y'
                }[brushType], coordSys, coordRange);
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.push(ecModel, snapshot);
        this._dispatchZoomAction(snapshot);
        function setBatch(dimName, coordSys, minMax) {
            var axis = coordSys.getAxis(dimName);
            var axisModel = axis.model;
            var dataZoomModel = findDataZoom(dimName, axisModel, ecModel);
            // Restrict range.
            var minMaxSpan = dataZoomModel.findRepresentativeAxisProxy(axisModel).getMinMaxSpan();
            if (minMaxSpan.minValueSpan != null || minMaxSpan.maxValueSpan != null) {
                minMax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0, minMax.slice(), axis.scale.getExtent(), 0, minMaxSpan.minValueSpan, minMaxSpan.maxValueSpan);
            }
            dataZoomModel && (snapshot[dataZoomModel.id] = {
                dataZoomId: dataZoomModel.id,
                startValue: minMax[0],
                endValue: minMax[1]
            });
        }
        function findDataZoom(dimName, axisModel, ecModel) {
            var found;
            ecModel.eachComponent({
                mainType: 'dataZoom',
                subType: 'select'
            }, function(dzModel) {
                var has = dzModel.getAxisModel(dimName, axisModel.componentIndex);
                has && (found = dzModel);
            });
            return found;
        }
    };
    ;
    DataZoomFeature.prototype._dispatchZoomAction = function(snapshot) {
        var batch = [];
        // Convert from hash map to array.
        each(snapshot, function(batchItem, dataZoomId) {
            batch.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.clone(batchItem));
        });
        batch.length && this.api.dispatchAction({
            type: 'dataZoom',
            from: this.uid,
            batch: batch
        });
    };
    DataZoomFeature.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            filterMode: 'filter',
            // Icon group
            icon: {
                zoom: 'M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1',
                back: 'M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26'
            },
            // `zoom`, `back`
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'dataZoom',
                'title'
            ]),
            brushStyle: {
                borderWidth: 0,
                color: 'rgba(210,219,238,0.2)'
            }
        };
        return defaultOption;
    };
    return DataZoomFeature;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
var handlers = {
    zoom: function() {
        var nextActive = !this._isZoomActive;
        this.api.dispatchAction({
            type: 'takeGlobalCursor',
            key: 'dataZoomSelect',
            dataZoomSelectActive: nextActive
        });
    },
    back: function() {
        this._dispatchZoomAction(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.pop(this.ecModel));
    }
};
function makeAxisFinder(dzFeatureModel) {
    var setting = {
        xAxisIndex: dzFeatureModel.get('xAxisIndex', true),
        yAxisIndex: dzFeatureModel.get('yAxisIndex', true),
        xAxisId: dzFeatureModel.get('xAxisId', true),
        yAxisId: dzFeatureModel.get('yAxisId', true)
    };
    // If both `xAxisIndex` `xAxisId` not set, it means 'all'.
    // If both `yAxisIndex` `yAxisId` not set, it means 'all'.
    // Some old cases set like this below to close yAxis control but leave xAxis control:
    // `{ feature: { dataZoom: { yAxisIndex: false } }`.
    if (setting.xAxisIndex == null && setting.xAxisId == null) {
        setting.xAxisIndex = 'all';
    }
    if (setting.yAxisIndex == null && setting.yAxisId == null) {
        setting.yAxisIndex = 'all';
    }
    return setting;
}
function updateBackBtnStatus(featureModel, ecModel) {
    featureModel.setIconStatus('back', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.count(ecModel) > 1 ? 'emphasis' : 'normal');
}
function updateZoomBtnStatus(featureModel, ecModel, view, payload, api) {
    var zoomActive = view._isZoomActive;
    if (payload && payload.type === 'takeGlobalCursor') {
        zoomActive = payload.key === 'dataZoomSelect' ? payload.dataZoomSelectActive : false;
    }
    view._isZoomActive = zoomActive;
    featureModel.setIconStatus('zoom', zoomActive ? 'emphasis' : 'normal');
    var brushTargetManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$BrushTargetManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](makeAxisFinder(featureModel), ecModel, {
        include: [
            'grid'
        ]
    });
    var panels = brushTargetManager.makePanelOpts(api, function(targetInfo) {
        return targetInfo.xAxisDeclared && !targetInfo.yAxisDeclared ? 'lineX' : !targetInfo.xAxisDeclared && targetInfo.yAxisDeclared ? 'lineY' : 'rect';
    });
    view._brushController.setPanels(panels).enableBrush(zoomActive && panels.length ? {
        brushType: 'auto',
        brushStyle: featureModel.getModel('brushStyle').getItemStyle()
    } : false);
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$internalComponentCreator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerInternalOptionCreator"])('dataZoom', function(ecModel) {
    var toolboxModel = ecModel.getComponent('toolbox', 0);
    var featureDataZoomPath = [
        'feature',
        'dataZoom'
    ];
    if (!toolboxModel || toolboxModel.get(featureDataZoomPath) == null) {
        return;
    }
    var dzFeatureModel = toolboxModel.getModel(featureDataZoomPath);
    var dzOptions = [];
    var finder = makeAxisFinder(dzFeatureModel);
    var finderResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseFinder"])(ecModel, finder);
    each(finderResult.xAxisModels, function(axisModel) {
        return buildInternalOptions(axisModel, 'xAxis', 'xAxisIndex');
    });
    each(finderResult.yAxisModels, function(axisModel) {
        return buildInternalOptions(axisModel, 'yAxis', 'yAxisIndex');
    });
    function buildInternalOptions(axisModel, axisMainType, axisIndexPropName) {
        var axisIndex = axisModel.componentIndex;
        var newOpt = {
            type: 'select',
            $fromToolbox: true,
            // Default to be filter
            filterMode: dzFeatureModel.get('filterMode', true) || 'filter',
            // Id for merge mapping.
            id: DATA_ZOOM_ID_BASE + axisMainType + axisIndex
        };
        newOpt[axisIndexPropName] = axisIndex;
        dzOptions.push(newOpt);
    }
    return dzOptions;
});
const __TURBOPACK__default__export__ = DataZoomFeature;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/Restore.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/history.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/core/echarts.js [app-client] (ecmascript)");
;
;
;
;
var RestoreOption = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(RestoreOption, _super);
    function RestoreOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RestoreOption.prototype.onclick = function(ecModel, api) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.clear(ecModel);
        api.dispatchAction({
            type: 'restore',
            from: this.uid
        });
    };
    RestoreOption.getDefaultOption = function(ecModel) {
        var defaultOption = {
            show: true,
            // eslint-disable-next-line
            icon: 'M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5',
            title: ecModel.getLocaleModel().get([
                'toolbox',
                'restore',
                'title'
            ])
        };
        return defaultOption;
    };
    return RestoreOption;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolboxFeature"]);
// TODO: SELF REGISTERED.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.registerAction({
    type: 'restore',
    event: 'restore',
    update: 'prepareAndUpdate'
}, function(payload, ecModel) {
    ecModel.resetOption('recreate');
});
const __TURBOPACK__default__export__ = RestoreOption;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "DATA_ZOOM_AXIS_DIMENSIONS": (()=>DATA_ZOOM_AXIS_DIMENSIONS),
    "collectReferCoordSysModelInfo": (()=>collectReferCoordSysModelInfo),
    "findEffectedDataZooms": (()=>findEffectedDataZooms),
    "getAxisIdPropName": (()=>getAxisIdPropName),
    "getAxisIndexPropName": (()=>getAxisIndexPropName),
    "getAxisMainType": (()=>getAxisMainType),
    "isCoordSupported": (()=>isCoordSupported)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
var DATA_ZOOM_AXIS_DIMENSIONS = [
    'x',
    'y',
    'radius',
    'angle',
    'single'
];
// Supported coords.
// FIXME: polar has been broken (but rarely used).
var SERIES_COORDS = [
    'cartesian2d',
    'polar',
    'singleAxis'
];
function isCoordSupported(seriesModel) {
    var coordType = seriesModel.get('coordinateSystem');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexOf"])(SERIES_COORDS, coordType) >= 0;
}
function getAxisMainType(axisDim) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(axisDim);
    }
    return axisDim + 'Axis';
}
function getAxisIndexPropName(axisDim) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(axisDim);
    }
    return axisDim + 'AxisIndex';
}
function getAxisIdPropName(axisDim) {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(axisDim);
    }
    return axisDim + 'AxisId';
}
function findEffectedDataZooms(ecModel, payload) {
    // Key: `DataZoomAxisDimension`
    var axisRecords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    var effectedModels = [];
    // Key: uid of dataZoomModel
    var effectedModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
    // Find the dataZooms specified by payload.
    ecModel.eachComponent({
        mainType: 'dataZoom',
        query: payload
    }, function(dataZoomModel) {
        if (!effectedModelMap.get(dataZoomModel.uid)) {
            addToEffected(dataZoomModel);
        }
    });
    // Start from the given dataZoomModels, travel the graph to find
    // all of the linked dataZoom models.
    var foundNewLink;
    do {
        foundNewLink = false;
        ecModel.eachComponent('dataZoom', processSingle);
    }while (foundNewLink)
    function processSingle(dataZoomModel) {
        if (!effectedModelMap.get(dataZoomModel.uid) && isLinked(dataZoomModel)) {
            addToEffected(dataZoomModel);
            foundNewLink = true;
        }
    }
    function addToEffected(dataZoom) {
        effectedModelMap.set(dataZoom.uid, true);
        effectedModels.push(dataZoom);
        markAxisControlled(dataZoom);
    }
    function isLinked(dataZoomModel) {
        var isLink = false;
        dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
            var axisIdxArr = axisRecords.get(axisDim);
            if (axisIdxArr && axisIdxArr[axisIndex]) {
                isLink = true;
            }
        });
        return isLink;
    }
    function markAxisControlled(dataZoomModel) {
        dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
            (axisRecords.get(axisDim) || axisRecords.set(axisDim, []))[axisIndex] = true;
        });
    }
    return effectedModels;
}
function collectReferCoordSysModelInfo(dataZoomModel) {
    var ecModel = dataZoomModel.ecModel;
    var coordSysInfoWrap = {
        infoList: [],
        infoMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])()
    };
    dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
        var axisModel = ecModel.getComponent(getAxisMainType(axisDim), axisIndex);
        if (!axisModel) {
            return;
        }
        var coordSysModel = axisModel.getCoordSysModel();
        if (!coordSysModel) {
            return;
        }
        var coordSysUid = coordSysModel.uid;
        var coordSysInfo = coordSysInfoWrap.infoMap.get(coordSysUid);
        if (!coordSysInfo) {
            coordSysInfo = {
                model: coordSysModel,
                axisModels: []
            };
            coordSysInfoWrap.infoList.push(coordSysInfo);
            coordSysInfoWrap.infoMap.set(coordSysUid, coordSysInfo);
        }
        coordSysInfo.axisModels.push(axisModel);
    });
    return coordSysInfoWrap;
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/DataZoomModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_$40$babel$2b$core$40$7$2e$2_dc1c4a015253be62c4bda95c4762f79e$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_@babel+core@7.2_dc1c4a015253be62c4bda95c4762f79e/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js [app-client] (ecmascript)");
;
;
;
;
;
var DataZoomAxisInfo = /** @class */ function() {
    function DataZoomAxisInfo() {
        this.indexList = [];
        this.indexMap = [];
    }
    DataZoomAxisInfo.prototype.add = function(axisCmptIdx) {
        // Remove duplication.
        if (!this.indexMap[axisCmptIdx]) {
            this.indexList.push(axisCmptIdx);
            this.indexMap[axisCmptIdx] = true;
        }
    };
    return DataZoomAxisInfo;
}();
var DataZoomModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DataZoomModel, _super);
    function DataZoomModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataZoomModel.type;
        _this._autoThrottle = true;
        _this._noTarget = true;
        /**
     * It is `[rangeModeForMin, rangeModeForMax]`.
     * The optional values for `rangeMode`:
     * + `'value'` mode: the axis extent will always be determined by
     *     `dataZoom.startValue` and `dataZoom.endValue`, despite
     *     how data like and how `axis.min` and `axis.max` are.
     * + `'percent'` mode: `100` represents 100% of the `[dMin, dMax]`,
     *     where `dMin` is `axis.min` if `axis.min` specified, otherwise `data.extent[0]`,
     *     and `dMax` is `axis.max` if `axis.max` specified, otherwise `data.extent[1]`.
     *     Axis extent will be determined by the result of the percent of `[dMin, dMax]`.
     *
     * For example, when users are using dynamic data (update data periodically via `setOption`),
     * if in `'value`' mode, the window will be kept in a fixed value range despite how
     * data are appended, while if in `'percent'` mode, whe window range will be changed alone with
     * the appended data (suppose `axis.min` and `axis.max` are not specified).
     */ _this._rangePropMode = [
            'percent',
            'percent'
        ];
        return _this;
    }
    DataZoomModel.prototype.init = function(option, parentModel, ecModel) {
        var inputRawOption = retrieveRawOption(option);
        /**
     * Suppose a "main process" start at the point that model prepared (that is,
     * model initialized or merged or method called in `action`).
     * We should keep the `main process` idempotent, that is, given a set of values
     * on `option`, we get the same result.
     *
     * But sometimes, values on `option` will be updated for providing users
     * a "final calculated value" (`dataZoomProcessor` will do that). Those value
     * should not be the base/input of the `main process`.
     *
     * So in that case we should save and keep the input of the `main process`
     * separately, called `settledOption`.
     *
     * For example, consider the case:
     * (Step_1) brush zoom the grid by `toolbox.dataZoom`,
     *     where the original input `option.startValue`, `option.endValue` are earsed by
     *     calculated value.
     * (Step)2) click the legend to hide and show a series,
     *     where the new range is calculated by the earsed `startValue` and `endValue`,
     *     which brings incorrect result.
     */ this.settledOption = inputRawOption;
        this.mergeDefaultAndTheme(option, ecModel);
        this._doInit(inputRawOption);
    };
    DataZoomModel.prototype.mergeOption = function(newOption) {
        var inputRawOption = retrieveRawOption(newOption);
        // FIX #2591
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(this.option, newOption, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(this.settledOption, inputRawOption, true);
        this._doInit(inputRawOption);
    };
    DataZoomModel.prototype._doInit = function(inputRawOption) {
        var thisOption = this.option;
        this._setDefaultThrottle(inputRawOption);
        this._updateRangeUse(inputRawOption);
        var settledOption = this.settledOption;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
            [
                'start',
                'startValue'
            ],
            [
                'end',
                'endValue'
            ]
        ], function(names, index) {
            // start/end has higher priority over startValue/endValue if they
            // both set, but we should make chart.setOption({endValue: 1000})
            // effective, rather than chart.setOption({endValue: 1000, end: null}).
            if (this._rangePropMode[index] === 'value') {
                thisOption[names[0]] = settledOption[names[0]] = null;
            }
        // Otherwise do nothing and use the merge result.
        }, this);
        this._resetTarget();
    };
    DataZoomModel.prototype._resetTarget = function() {
        var optionOrient = this.get('orient', true);
        var targetAxisIndexMap = this._targetAxisInfoMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        var hasAxisSpecified = this._fillSpecifiedTargetAxis(targetAxisIndexMap);
        if (hasAxisSpecified) {
            this._orient = optionOrient || this._makeAutoOrientByTargetAxis();
        } else {
            this._orient = optionOrient || 'horizontal';
            this._fillAutoTargetAxisByOrient(targetAxisIndexMap, this._orient);
        }
        this._noTarget = true;
        targetAxisIndexMap.each(function(axisInfo) {
            if (axisInfo.indexList.length) {
                this._noTarget = false;
            }
        }, this);
    };
    DataZoomModel.prototype._fillSpecifiedTargetAxis = function(targetAxisIndexMap) {
        var hasAxisSpecified = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_ZOOM_AXIS_DIMENSIONS"], function(axisDim) {
            var refering = this.getReferringComponents((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MULTIPLE_REFERRING"]);
            // When user set axisIndex as a empty array, we think that user specify axisIndex
            // but do not want use auto mode. Because empty array may be encountered when
            // some error occurred.
            if (!refering.specified) {
                return;
            }
            hasAxisSpecified = true;
            var axisInfo = new DataZoomAxisInfo();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(refering.models, function(axisModel) {
                axisInfo.add(axisModel.componentIndex);
            });
            targetAxisIndexMap.set(axisDim, axisInfo);
        }, this);
        return hasAxisSpecified;
    };
    DataZoomModel.prototype._fillAutoTargetAxisByOrient = function(targetAxisIndexMap, orient) {
        var ecModel = this.ecModel;
        var needAuto = true;
        // Find axis that parallel to dataZoom as default.
        if (needAuto) {
            var axisDim = orient === 'vertical' ? 'y' : 'x';
            var axisModels = ecModel.findComponents({
                mainType: axisDim + 'Axis'
            });
            setParallelAxis(axisModels, axisDim);
        }
        // Find axis that parallel to dataZoom as default.
        if (needAuto) {
            var axisModels = ecModel.findComponents({
                mainType: 'singleAxis',
                filter: function(axisModel) {
                    return axisModel.get('orient', true) === orient;
                }
            });
            setParallelAxis(axisModels, 'single');
        }
        function setParallelAxis(axisModels, axisDim) {
            // At least use the first parallel axis as the target axis.
            var axisModel = axisModels[0];
            if (!axisModel) {
                return;
            }
            var axisInfo = new DataZoomAxisInfo();
            axisInfo.add(axisModel.componentIndex);
            targetAxisIndexMap.set(axisDim, axisInfo);
            needAuto = false;
            // Find parallel axes in the same grid.
            if (axisDim === 'x' || axisDim === 'y') {
                var gridModel_1 = axisModel.getReferringComponents('grid', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
                gridModel_1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axisModels, function(axModel) {
                    if (axisModel.componentIndex !== axModel.componentIndex && gridModel_1 === axModel.getReferringComponents('grid', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0]) {
                        axisInfo.add(axModel.componentIndex);
                    }
                });
            }
        }
        if (needAuto) {
            // If no parallel axis, find the first category axis as default. (Also consider polar).
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATA_ZOOM_AXIS_DIMENSIONS"], function(axisDim) {
                if (!needAuto) {
                    return;
                }
                var axisModels = ecModel.findComponents({
                    mainType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim),
                    filter: function(axisModel) {
                        return axisModel.get('type', true) === 'category';
                    }
                });
                if (axisModels[0]) {
                    var axisInfo = new DataZoomAxisInfo();
                    axisInfo.add(axisModels[0].componentIndex);
                    targetAxisIndexMap.set(axisDim, axisInfo);
                    needAuto = false;
                }
            }, this);
        }
    };
    DataZoomModel.prototype._makeAutoOrientByTargetAxis = function() {
        var dim;
        // Find the first axis
        this.eachTargetAxis(function(axisDim) {
            !dim && (dim = axisDim);
        }, this);
        return dim === 'y' ? 'vertical' : 'horizontal';
    };
    DataZoomModel.prototype._setDefaultThrottle = function(inputRawOption) {
        // When first time user set throttle, auto throttle ends.
        if (inputRawOption.hasOwnProperty('throttle')) {
            this._autoThrottle = false;
        }
        if (this._autoThrottle) {
            var globalOption = this.ecModel.option;
            this.option.throttle = globalOption.animation && globalOption.animationDurationUpdate > 0 ? 100 : 20;
        }
    };
    DataZoomModel.prototype._updateRangeUse = function(inputRawOption) {
        var rangePropMode = this._rangePropMode;
        var rangeModeInOption = this.get('rangeMode');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
            [
                'start',
                'startValue'
            ],
            [
                'end',
                'endValue'
            ]
        ], function(names, index) {
            var percentSpecified = inputRawOption[names[0]] != null;
            var valueSpecified = inputRawOption[names[1]] != null;
            if (percentSpecified && !valueSpecified) {
                rangePropMode[index] = 'percent';
            } else if (!percentSpecified && valueSpecified) {
                rangePropMode[index] = 'value';
            } else if (rangeModeInOption) {
                rangePropMode[index] = rangeModeInOption[index];
            } else if (percentSpecified) {
                // percentSpecified && valueSpecified
                rangePropMode[index] = 'percent';
            }
        // else remain its original setting.
        });
    };
    DataZoomModel.prototype.noTarget = function() {
        return this._noTarget;
    };
    DataZoomModel.prototype.getFirstTargetAxisModel = function() {
        var firstAxisModel;
        this.eachTargetAxis(function(axisDim, axisIndex) {
            if (firstAxisModel == null) {
                firstAxisModel = this.ecModel.getComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim), axisIndex);
            }
        }, this);
        return firstAxisModel;
    };
    /**
   * @param {Function} callback param: axisModel, dimNames, axisIndex, dataZoomModel, ecModel
   */ DataZoomModel.prototype.eachTargetAxis = function(callback, context) {
        this._targetAxisInfoMap.each(function(axisInfo, axisDim) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axisInfo.indexList, function(axisIndex) {
                callback.call(context, axisDim, axisIndex);
            });
        });
    };
    /**
   * @return If not found, return null/undefined.
   */ DataZoomModel.prototype.getAxisProxy = function(axisDim, axisIndex) {
        var axisModel = this.getAxisModel(axisDim, axisIndex);
        if (axisModel) {
            return axisModel.__dzAxisProxy;
        }
    };
    /**
   * @return If not found, return null/undefined.
   */ DataZoomModel.prototype.getAxisModel = function(axisDim, axisIndex) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(axisDim && axisIndex != null);
        }
        var axisInfo = this._targetAxisInfoMap.get(axisDim);
        if (axisInfo && axisInfo.indexMap[axisIndex]) {
            return this.ecModel.getComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim), axisIndex);
        }
    };
    /**
   * If not specified, set to undefined.
   */ DataZoomModel.prototype.setRawRange = function(opt) {
        var thisOption = this.option;
        var settledOption = this.settledOption;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
            [
                'start',
                'startValue'
            ],
            [
                'end',
                'endValue'
            ]
        ], function(names) {
            // Consider the pair <start, startValue>:
            // If one has value and the other one is `null/undefined`, we both set them
            // to `settledOption`. This strategy enables the feature to clear the original
            // value in `settledOption` to `null/undefined`.
            // But if both of them are `null/undefined`, we do not set them to `settledOption`
            // and keep `settledOption` with the original value. This strategy enables users to
            // only set <end or endValue> but not set <start or startValue> when calling
            // `dispatchAction`.
            // The pair <end, endValue> is treated in the same way.
            if (opt[names[0]] != null || opt[names[1]] != null) {
                thisOption[names[0]] = settledOption[names[0]] = opt[names[0]];
                thisOption[names[1]] = settledOption[names[1]] = opt[names[1]];
            }
        }, this);
        this._updateRangeUse(opt);
    };
    DataZoomModel.prototype.setCalculatedRange = function(opt) {
        var option = this.option;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
            'start',
            'startValue',
            'end',
            'endValue'
        ], function(name) {
            option[name] = opt[name];
        });
    };
    DataZoomModel.prototype.getPercentRange = function() {
        var axisProxy = this.findRepresentativeAxisProxy();
        if (axisProxy) {
            return axisProxy.getDataPercentWindow();
        }
    };
    /**
   * For example, chart.getModel().getComponent('dataZoom').getValueRange('y', 0);
   *
   * @return [startValue, endValue] value can only be '-' or finite number.
   */ DataZoomModel.prototype.getValueRange = function(axisDim, axisIndex) {
        if (axisDim == null && axisIndex == null) {
            var axisProxy = this.findRepresentativeAxisProxy();
            if (axisProxy) {
                return axisProxy.getDataValueWindow();
            }
        } else {
            return this.getAxisProxy(axisDim, axisIndex).getDataValueWindow();
        }
    };
    /**
   * @param axisModel If axisModel given, find axisProxy
   *      corresponding to the axisModel
   */ DataZoomModel.prototype.findRepresentativeAxisProxy = function(axisModel) {
        if (axisModel) {
            return axisModel.__dzAxisProxy;
        }
        // Find the first hosted axisProxy
        var firstProxy;
        var axisDimList = this._targetAxisInfoMap.keys();
        for(var i = 0; i < axisDimList.length; i++){
            var axisDim = axisDimList[i];
            var axisInfo = this._targetAxisInfoMap.get(axisDim);
            for(var j = 0; j < axisInfo.indexList.length; j++){
                var proxy = this.getAxisProxy(axisDim, axisInfo.indexList[j]);
                if (proxy.hostedBy(this)) {
                    return proxy;
                }
                if (!firstProxy) {
                    firstProxy = proxy;
                }
            }
        }
        // If no hosted proxy found, still need to return a proxy.
        // This case always happens in toolbox dataZoom, where axes are all hosted by
        // other dataZooms.
        return firstProxy;
    };
    DataZoomModel.prototype.getRangePropMode = function() {
        return this._rangePropMode.slice();
    };
    DataZoomModel.prototype.getOrient = function() {
        if ("TURBOPACK compile-time truthy", 1) {
            // Should not be called before initialized.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assert"])(this._orient);
        }
        return this._orient;
    };
    DataZoomModel.type = 'dataZoom';
    DataZoomModel.dependencies = [
        'xAxis',
        'yAxis',
        'radiusAxis',
        'angleAxis',
        'singleAxis',
        'series',
        'toolbox'
    ];
    DataZoomModel.defaultOption = {
        // zlevel: 0,
        z: 4,
        filterMode: 'filter',
        start: 0,
        end: 100
    };
    return DataZoomModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
/**
 * Retrieve those raw params from option, which will be cached separately,
 * because they will be overwritten by normalized/calculated values in the main
 * process.
 */ function retrieveRawOption(option) {
    var ret = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])([
        'start',
        'end',
        'startValue',
        'endValue',
        'throttle'
    ], function(name) {
        option.hasOwnProperty(name) && (ret[name] = option[name]);
    });
    return ret;
}
const __TURBOPACK__default__export__ = DataZoomModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/SelectZoomModel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/DataZoomModel.js [app-client] (ecmascript)");
;
;
var SelectDataZoomModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(SelectDataZoomModel, _super);
    function SelectDataZoomModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SelectDataZoomModel.type;
        return _this;
    }
    SelectDataZoomModel.type = 'dataZoom.select';
    return SelectDataZoomModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = SelectDataZoomModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/DataZoomView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js [app-client] (ecmascript)");
;
;
var DataZoomView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DataZoomView, _super);
    function DataZoomView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DataZoomView.type;
        return _this;
    }
    DataZoomView.prototype.render = function(dataZoomModel, ecModel, api, payload) {
        this.dataZoomModel = dataZoomModel;
        this.ecModel = ecModel;
        this.api = api;
    };
    DataZoomView.type = 'dataZoom';
    return DataZoomView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = DataZoomView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/SelectZoomView.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/DataZoomView.js [app-client] (ecmascript)");
;
;
var SelectDataZoomView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(SelectDataZoomView, _super);
    function SelectDataZoomView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = SelectDataZoomView.type;
        return _this;
    }
    SelectDataZoomView.type = 'dataZoom.select';
    return SelectDataZoomView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$DataZoomView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = SelectDataZoomView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/AxisProxy.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/sliderMove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$scaleRawExtentInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var each = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.each;
var asc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.asc;
/**
 * Operate single axis.
 * One axis can only operated by one axis operator.
 * Different dataZoomModels may be defined to operate the same axis.
 * (i.e. 'inside' data zoom and 'slider' data zoom components)
 * So dataZoomModels share one axisProxy in that case.
 */ var AxisProxy = /** @class */ function() {
    function AxisProxy(dimName, axisIndex, dataZoomModel, ecModel) {
        this._dimName = dimName;
        this._axisIndex = axisIndex;
        this.ecModel = ecModel;
        this._dataZoomModel = dataZoomModel;
    // /**
    //  * @readOnly
    //  * @private
    //  */
    // this.hasSeriesStacked;
    }
    /**
   * Whether the axisProxy is hosted by dataZoomModel.
   */ AxisProxy.prototype.hostedBy = function(dataZoomModel) {
        return this._dataZoomModel === dataZoomModel;
    };
    /**
   * @return Value can only be NaN or finite value.
   */ AxisProxy.prototype.getDataValueWindow = function() {
        return this._valueWindow.slice();
    };
    /**
   * @return {Array.<number>}
   */ AxisProxy.prototype.getDataPercentWindow = function() {
        return this._percentWindow.slice();
    };
    AxisProxy.prototype.getTargetSeriesModels = function() {
        var seriesModels = [];
        this.ecModel.eachSeries(function(seriesModel) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCoordSupported"])(seriesModel)) {
                var axisMainType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisMainType"])(this._dimName);
                var axisModel = seriesModel.getReferringComponents(axisMainType, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLE_REFERRING"]).models[0];
                if (axisModel && this._axisIndex === axisModel.componentIndex) {
                    seriesModels.push(seriesModel);
                }
            }
        }, this);
        return seriesModels;
    };
    AxisProxy.prototype.getAxisModel = function() {
        return this.ecModel.getComponent(this._dimName + 'Axis', this._axisIndex);
    };
    AxisProxy.prototype.getMinMaxSpan = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.clone(this._minMaxSpan);
    };
    /**
   * Only calculate by given range and this._dataExtent, do not change anything.
   */ AxisProxy.prototype.calculateDataWindow = function(opt) {
        var dataExtent = this._dataExtent;
        var axisModel = this.getAxisModel();
        var scale = axisModel.axis.scale;
        var rangePropMode = this._dataZoomModel.getRangePropMode();
        var percentExtent = [
            0,
            100
        ];
        var percentWindow = [];
        var valueWindow = [];
        var hasPropModeValue;
        each([
            'start',
            'end'
        ], function(prop, idx) {
            var boundPercent = opt[prop];
            var boundValue = opt[prop + 'Value'];
            // Notice: dataZoom is based either on `percentProp` ('start', 'end') or
            // on `valueProp` ('startValue', 'endValue'). (They are based on the data extent
            // but not min/max of axis, which will be calculated by data window then).
            // The former one is suitable for cases that a dataZoom component controls multiple
            // axes with different unit or extent, and the latter one is suitable for accurate
            // zoom by pixel (e.g., in dataZoomSelect).
            // we use `getRangePropMode()` to mark which prop is used. `rangePropMode` is updated
            // only when setOption or dispatchAction, otherwise it remains its original value.
            // (Why not only record `percentProp` and always map to `valueProp`? Because
            // the map `valueProp` -> `percentProp` -> `valueProp` probably not the original
            // `valueProp`. consider two axes constrolled by one dataZoom. They have different
            // data extent. All of values that are overflow the `dataExtent` will be calculated
            // to percent '100%').
            if (rangePropMode[idx] === 'percent') {
                boundPercent == null && (boundPercent = percentExtent[idx]);
                // Use scale.parse to math round for category or time axis.
                boundValue = scale.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.linearMap(boundPercent, percentExtent, dataExtent));
            } else {
                hasPropModeValue = true;
                boundValue = boundValue == null ? dataExtent[idx] : scale.parse(boundValue);
                // Calculating `percent` from `value` may be not accurate, because
                // This calculation can not be inversed, because all of values that
                // are overflow the `dataExtent` will be calculated to percent '100%'
                boundPercent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.linearMap(boundValue, dataExtent, percentExtent);
            }
            // valueWindow[idx] = round(boundValue);
            // percentWindow[idx] = round(boundPercent);
            // fallback to extent start/end when parsed value or percent is invalid
            valueWindow[idx] = boundValue == null || isNaN(boundValue) ? dataExtent[idx] : boundValue;
            percentWindow[idx] = boundPercent == null || isNaN(boundPercent) ? percentExtent[idx] : boundPercent;
        });
        asc(valueWindow);
        asc(percentWindow);
        // The windows from user calling of `dispatchAction` might be out of the extent,
        // or do not obey the `min/maxSpan`, `min/maxValueSpan`. But we don't restrict window
        // by `zoomLock` here, because we see `zoomLock` just as a interaction constraint,
        // where API is able to initialize/modify the window size even though `zoomLock`
        // specified.
        var spans = this._minMaxSpan;
        hasPropModeValue ? restrictSet(valueWindow, percentWindow, dataExtent, percentExtent, false) : restrictSet(percentWindow, valueWindow, percentExtent, dataExtent, true);
        function restrictSet(fromWindow, toWindow, fromExtent, toExtent, toValue) {
            var suffix = toValue ? 'Span' : 'ValueSpan';
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$helper$2f$sliderMove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0, fromWindow, fromExtent, 'all', spans['min' + suffix], spans['max' + suffix]);
            for(var i = 0; i < 2; i++){
                toWindow[i] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.linearMap(fromWindow[i], fromExtent, toExtent, true);
                toValue && (toWindow[i] = scale.parse(toWindow[i]));
            }
        }
        return {
            valueWindow: valueWindow,
            percentWindow: percentWindow
        };
    };
    /**
   * Notice: reset should not be called before series.restoreData() is called,
   * so it is recommended to be called in "process stage" but not "model init
   * stage".
   */ AxisProxy.prototype.reset = function(dataZoomModel) {
        if (dataZoomModel !== this._dataZoomModel) {
            return;
        }
        var targetSeries = this.getTargetSeriesModels();
        // Culculate data window and data extent, and record them.
        this._dataExtent = calculateDataExtent(this, this._dimName, targetSeries);
        // `calculateDataWindow` uses min/maxSpan.
        this._updateMinMaxSpan();
        var dataWindow = this.calculateDataWindow(dataZoomModel.settledOption);
        this._valueWindow = dataWindow.valueWindow;
        this._percentWindow = dataWindow.percentWindow;
        // Update axis setting then.
        this._setAxisModel();
    };
    AxisProxy.prototype.filterData = function(dataZoomModel, api) {
        if (dataZoomModel !== this._dataZoomModel) {
            return;
        }
        var axisDim = this._dimName;
        var seriesModels = this.getTargetSeriesModels();
        var filterMode = dataZoomModel.get('filterMode');
        var valueWindow = this._valueWindow;
        if (filterMode === 'none') {
            return;
        }
        // FIXME
        // Toolbox may has dataZoom injected. And if there are stacked bar chart
        // with NaN data, NaN will be filtered and stack will be wrong.
        // So we need to force the mode to be set empty.
        // In fect, it is not a big deal that do not support filterMode-'filter'
        // when using toolbox#dataZoom, utill tooltip#dataZoom support "single axis
        // selection" some day, which might need "adapt to data extent on the
        // otherAxis", which is disabled by filterMode-'empty'.
        // But currently, stack has been fixed to based on value but not index,
        // so this is not an issue any more.
        // let otherAxisModel = this.getOtherAxisModel();
        // if (dataZoomModel.get('$fromToolbox')
        //     && otherAxisModel
        //     && otherAxisModel.hasSeriesStacked
        // ) {
        //     filterMode = 'empty';
        // }
        // TODO
        // filterMode 'weakFilter' and 'empty' is not optimized for huge data yet.
        each(seriesModels, function(seriesModel) {
            var seriesData = seriesModel.getData();
            var dataDims = seriesData.mapDimensionsAll(axisDim);
            if (!dataDims.length) {
                return;
            }
            if (filterMode === 'weakFilter') {
                var store_1 = seriesData.getStore();
                var dataDimIndices_1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.map(dataDims, function(dim) {
                    return seriesData.getDimensionIndex(dim);
                }, seriesData);
                seriesData.filterSelf(function(dataIndex) {
                    var leftOut;
                    var rightOut;
                    var hasValue;
                    for(var i = 0; i < dataDims.length; i++){
                        var value = store_1.get(dataDimIndices_1[i], dataIndex);
                        var thisHasValue = !isNaN(value);
                        var thisLeftOut = value < valueWindow[0];
                        var thisRightOut = value > valueWindow[1];
                        if (thisHasValue && !thisLeftOut && !thisRightOut) {
                            return true;
                        }
                        thisHasValue && (hasValue = true);
                        thisLeftOut && (leftOut = true);
                        thisRightOut && (rightOut = true);
                    }
                    // If both left out and right out, do not filter.
                    return hasValue && leftOut && rightOut;
                });
            } else {
                each(dataDims, function(dim) {
                    if (filterMode === 'empty') {
                        seriesModel.setData(seriesData = seriesData.map(dim, function(value) {
                            return !isInWindow(value) ? NaN : value;
                        }));
                    } else {
                        var range = {};
                        range[dim] = valueWindow;
                        // console.time('select');
                        seriesData.selectRange(range);
                    // console.timeEnd('select');
                    }
                });
            }
            each(dataDims, function(dim) {
                seriesData.setApproximateExtent(valueWindow, dim);
            });
        });
        function isInWindow(value) {
            return value >= valueWindow[0] && value <= valueWindow[1];
        }
    };
    AxisProxy.prototype._updateMinMaxSpan = function() {
        var minMaxSpan = this._minMaxSpan = {};
        var dataZoomModel = this._dataZoomModel;
        var dataExtent = this._dataExtent;
        each([
            'min',
            'max'
        ], function(minMax) {
            var percentSpan = dataZoomModel.get(minMax + 'Span');
            var valueSpan = dataZoomModel.get(minMax + 'ValueSpan');
            valueSpan != null && (valueSpan = this.getAxisModel().axis.scale.parse(valueSpan));
            // minValueSpan and maxValueSpan has higher priority than minSpan and maxSpan
            if (valueSpan != null) {
                percentSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.linearMap(dataExtent[0] + valueSpan, dataExtent, [
                    0,
                    100
                ], true);
            } else if (percentSpan != null) {
                valueSpan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.linearMap(percentSpan, [
                    0,
                    100
                ], dataExtent, true) - dataExtent[0];
            }
            minMaxSpan[minMax + 'Span'] = percentSpan;
            minMaxSpan[minMax + 'ValueSpan'] = valueSpan;
        }, this);
    };
    AxisProxy.prototype._setAxisModel = function() {
        var axisModel = this.getAxisModel();
        var percentWindow = this._percentWindow;
        var valueWindow = this._valueWindow;
        if (!percentWindow) {
            return;
        }
        // [0, 500]: arbitrary value, guess axis extent.
        var precision = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.getPixelPrecision(valueWindow, [
            0,
            500
        ]);
        precision = Math.min(precision, 20);
        // For value axis, if min/max/scale are not set, we just use the extent obtained
        // by series data, which may be a little different from the extent calculated by
        // `axisHelper.getScaleExtent`. But the different just affects the experience a
        // little when zooming. So it will not be fixed until some users require it strongly.
        var rawExtentInfo = axisModel.axis.scale.rawExtentInfo;
        if (percentWindow[0] !== 0) {
            rawExtentInfo.setDeterminedMinMax('min', +valueWindow[0].toFixed(precision));
        }
        if (percentWindow[1] !== 100) {
            rawExtentInfo.setDeterminedMinMax('max', +valueWindow[1].toFixed(precision));
        }
        rawExtentInfo.freeze();
    };
    return AxisProxy;
}();
function calculateDataExtent(axisProxy, axisDim, seriesModels) {
    var dataExtent = [
        Infinity,
        -Infinity
    ];
    each(seriesModels, function(seriesModel) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$axisHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unionAxisExtentFromData"])(dataExtent, seriesModel.getData(), axisDim);
    });
    // It is important to get "consistent" extent when more then one axes is
    // controlled by a `dataZoom`, otherwise those axes will not be synchronized
    // when zooming. But it is difficult to know what is "consistent", considering
    // axes have different type or even different meanings (For example, two
    // time axes are used to compare data of the same date in different years).
    // So basically dataZoom just obtains extent by series.data (in category axis
    // extent can be obtained from axis.data).
    // Nevertheless, user can set min/max/scale on axes to make extent of axes
    // consistent.
    var axisModel = axisProxy.getAxisModel();
    var rawExtentResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$scaleRawExtentInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureScaleRawExtentInfo"])(axisModel.axis.scale, axisModel, dataExtent).calculate();
    return [
        rawExtentResult.min,
        rawExtentResult.max
    ];
}
const __TURBOPACK__default__export__ = AxisProxy;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/dataZoomProcessor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$AxisProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/AxisProxy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-client] (ecmascript)");
;
;
;
var dataZoomProcessor = {
    // `dataZoomProcessor` will only be performed in needed series. Consider if
    // there is a line series and a pie series, it is better not to update the
    // line series if only pie series is needed to be updated.
    getTargetSeries: function(ecModel) {
        function eachAxisModel(cb) {
            ecModel.eachComponent('dataZoom', function(dataZoomModel) {
                dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
                    var axisModel = ecModel.getComponent((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAxisMainType"])(axisDim), axisIndex);
                    cb(axisDim, axisIndex, axisModel, dataZoomModel);
                });
            });
        }
        // FIXME: it brings side-effect to `getTargetSeries`.
        // Prepare axis proxies.
        eachAxisModel(function(axisDim, axisIndex, axisModel, dataZoomModel) {
            // dispose all last axis proxy, in case that some axis are deleted.
            axisModel.__dzAxisProxy = null;
        });
        var proxyList = [];
        eachAxisModel(function(axisDim, axisIndex, axisModel, dataZoomModel) {
            // Different dataZooms may constrol the same axis. In that case,
            // an axisProxy serves both of them.
            if (!axisModel.__dzAxisProxy) {
                // Use the first dataZoomModel as the main model of axisProxy.
                axisModel.__dzAxisProxy = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$AxisProxy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](axisDim, axisIndex, dataZoomModel, ecModel);
                proxyList.push(axisModel.__dzAxisProxy);
            }
        });
        var seriesModelMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHashMap"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(proxyList, function(axisProxy) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(axisProxy.getTargetSeriesModels(), function(seriesModel) {
                seriesModelMap.set(seriesModel.uid, seriesModel);
            });
        });
        return seriesModelMap;
    },
    // Consider appendData, where filter should be performed. Because data process is
    // in block mode currently, it is not need to worry about that the overallProgress
    // execute every frame.
    overallReset: function(ecModel, api) {
        ecModel.eachComponent('dataZoom', function(dataZoomModel) {
            // We calculate window and reset axis here but not in model
            // init stage and not after action dispatch handler, because
            // reset should be called after seriesData.restoreData.
            dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
                dataZoomModel.getAxisProxy(axisDim, axisIndex).reset(dataZoomModel);
            });
            // Caution: data zoom filtering is order sensitive when using
            // percent range and no min/max/scale set on axis.
            // For example, we have dataZoom definition:
            // [
            //      {xAxisIndex: 0, start: 30, end: 70},
            //      {yAxisIndex: 0, start: 20, end: 80}
            // ]
            // In this case, [20, 80] of y-dataZoom should be based on data
            // that have filtered by x-dataZoom using range of [30, 70],
            // but should not be based on full raw data. Thus sliding
            // x-dataZoom will change both ranges of xAxis and yAxis,
            // while sliding y-dataZoom will only change the range of yAxis.
            // So we should filter x-axis after reset x-axis immediately,
            // and then reset y-axis and filter y-axis.
            dataZoomModel.eachTargetAxis(function(axisDim, axisIndex) {
                dataZoomModel.getAxisProxy(axisDim, axisIndex).filterData(dataZoomModel, api);
            });
        });
        ecModel.eachComponent('dataZoom', function(dataZoomModel) {
            // Fullfill all of the range props so that user
            // is able to get them from chart.getOption().
            var axisProxy = dataZoomModel.findRepresentativeAxisProxy();
            if (axisProxy) {
                var percentRange = axisProxy.getDataPercentWindow();
                var valueRange = axisProxy.getDataValueWindow();
                dataZoomModel.setCalculatedRange({
                    start: percentRange[0],
                    end: percentRange[1],
                    startValue: valueRange[0],
                    endValue: valueRange[1]
                });
            }
        });
    }
};
const __TURBOPACK__default__export__ = dataZoomProcessor;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/dataZoomAction.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>installDataZoomAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/helper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-client] (ecmascript)");
;
;
function installDataZoomAction(registers) {
    registers.registerAction('dataZoom', function(payload, ecModel) {
        var effectedModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findEffectedDataZooms"])(ecModel, payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["each"])(effectedModels, function(dataZoomModel) {
            dataZoomModel.setRawRange({
                start: payload.start,
                end: payload.end,
                startValue: payload.startValue,
                endValue: payload.endValue
            });
        });
    });
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/installCommon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "default": (()=>installCommon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$dataZoomProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/dataZoomProcessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$dataZoomAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/dataZoomAction.js [app-client] (ecmascript)");
;
;
var installed = false;
function installCommon(registers) {
    if (installed) {
        return;
    }
    installed = true;
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.FILTER, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$dataZoomProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$dataZoomAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(registers);
    registers.registerSubTypeDefaulter('dataZoom', function() {
        // Default 'slider' when no type specified.
        return 'slider';
    });
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSelect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SelectZoomModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/SelectZoomModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SelectZoomView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/SelectZoomView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/installCommon.js [app-client] (ecmascript)");
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SelectZoomModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$SelectZoomView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installCommon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(registers);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/install.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ /**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */ /*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/ __turbopack_esm__({
    "install": (()=>install)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$ToolboxModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/ToolboxModel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$ToolboxView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/ToolboxView.js [app-client] (ecmascript)");
// TODOD: REGISTER IN INSTALL
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/featureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$SaveAsImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/SaveAsImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$MagicType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/MagicType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$DataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/DataView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$DataZoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/DataZoom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$Restore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/feature/Restore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSelect.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function install(registers) {
    registers.registerComponentModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$ToolboxModel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    registers.registerComponentView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$ToolboxView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('saveAsImage', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$SaveAsImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('magicType', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$MagicType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('dataView', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$DataView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('dataZoom', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$DataZoom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$featureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerFeature"])('restore', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$feature$2f$Restore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$dataZoom$2f$installDataZoomSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"]);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/install.js [app-client] (ecmascript) <export install as ToolboxComponent>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ToolboxComponent": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["install"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$toolbox$2f$install$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/toolbox/install.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=91337_echarts_lib_component_343afb._.js.map