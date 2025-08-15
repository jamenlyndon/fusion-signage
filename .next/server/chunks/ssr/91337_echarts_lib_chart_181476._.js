module.exports = {

"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createRenderPlanner.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
    "default": (()=>createRenderPlanner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
;
function createRenderPlanner() {
    var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeInner"])();
    return function(seriesModel) {
        var fields = inner(seriesModel);
        var pipelineContext = seriesModel.pipelineContext;
        var originalLarge = !!fields.large;
        var originalProgressive = !!fields.progressiveRender;
        // FIXME: if the planner works on a filtered series, `pipelineContext` does not
        // exists. See #11611 . Probably we need to modify this structure, see the comment
        // on `performRawSeries` in `Schedular.js`.
        var large = fields.large = !!(pipelineContext && pipelineContext.large);
        var progressive = fields.progressiveRender = !!(pipelineContext && pipelineContext.progressiveRender);
        return !!(originalLarge !== large || originalProgressive !== progressive) && 'reset';
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/core/CoordinateSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dimensionHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dimensionHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$Source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/Source.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$referHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/referHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/sourceHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/createDimensions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
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
function getCoordSysDimDefs(seriesModel, coordSysInfo) {
    var coordSysName = seriesModel.get('coordinateSystem');
    var registeredCoordSys = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(coordSysName);
    var coordSysDimDefs;
    if (coordSysInfo && coordSysInfo.coordSysDims) {
        coordSysDimDefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(coordSysInfo.coordSysDims, function(dim) {
            var dimInfo = {
                name: dim
            };
            var axisModel = coordSysInfo.axisMap.get(dim);
            if (axisModel) {
                var axisType = axisModel.get('type');
                dimInfo.type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dimensionHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDimensionTypeByAxis"])(axisType);
            }
            return dimInfo;
        });
    }
    if (!coordSysDimDefs) {
        // Get dimensions from registered coordinate system
        coordSysDimDefs = registeredCoordSys && (registeredCoordSys.getDimensionsInfo ? registeredCoordSys.getDimensionsInfo() : registeredCoordSys.dimensions.slice()) || [
            'x',
            'y'
        ];
    }
    return coordSysDimDefs;
}
function injectOrdinalMeta(dimInfoList, createInvertedIndices, coordSysInfo) {
    var firstCategoryDimIndex;
    var hasNameEncode;
    coordSysInfo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(dimInfoList, function(dimInfo, dimIndex) {
        var coordDim = dimInfo.coordDim;
        var categoryAxisModel = coordSysInfo.categoryAxisMap.get(coordDim);
        if (categoryAxisModel) {
            if (firstCategoryDimIndex == null) {
                firstCategoryDimIndex = dimIndex;
            }
            dimInfo.ordinalMeta = categoryAxisModel.getOrdinalMeta();
            if (createInvertedIndices) {
                dimInfo.createInvertedIndices = true;
            }
        }
        if (dimInfo.otherDims.itemName != null) {
            hasNameEncode = true;
        }
    });
    if (!hasNameEncode && firstCategoryDimIndex != null) {
        dimInfoList[firstCategoryDimIndex].otherDims.itemName = 0;
    }
    return firstCategoryDimIndex;
}
/**
 * Caution: there are side effects to `sourceManager` in this method.
 * Should better only be called in `Series['getInitialData']`.
 */ function createSeriesData(sourceRaw, seriesModel, opt) {
    opt = opt || {};
    var sourceManager = seriesModel.getSourceManager();
    var source;
    var isOriginalSource = false;
    if (sourceRaw) {
        isOriginalSource = true;
        source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$Source$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSourceFromSeriesDataOption"])(sourceRaw);
    } else {
        source = sourceManager.getSource();
        // Is series.data. not dataset.
        isOriginalSource = source.sourceFormat === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOURCE_FORMAT_ORIGINAL"];
    }
    var coordSysInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$referHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCoordSysInfoBySeries"])(seriesModel);
    var coordSysDimDefs = getCoordSysDimDefs(seriesModel, coordSysInfo);
    var useEncodeDefaulter = opt.useEncodeDefaulter;
    var encodeDefaulter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isFunction(useEncodeDefaulter) ? useEncodeDefaulter : useEncodeDefaulter ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.curry(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$sourceHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeSeriesEncodeForAxisCoordSys"], coordSysDimDefs, seriesModel) : null;
    var createDimensionOptions = {
        coordDimensions: coordSysDimDefs,
        generateCoord: opt.generateCoord,
        encodeDefine: seriesModel.getEncode(),
        encodeDefaulter: encodeDefaulter,
        canOmitUnusedDimensions: !isOriginalSource
    };
    var schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$createDimensions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(source, createDimensionOptions);
    var firstCategoryDimIndex = injectOrdinalMeta(schema.dimensions, opt.createInvertedIndices, coordSysInfo);
    var store = !isOriginalSource ? sourceManager.getSharedDataStore(schema) : null;
    var stackCalculationInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enableDataStack"])(seriesModel, {
        schema: schema,
        store: store
    });
    var data = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$SeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](schema, seriesModel);
    data.setCalculationInfo(stackCalculationInfo);
    var dimValueGetter = firstCategoryDimIndex != null && isNeedCompleteOrdinalData(source) ? function(itemOpt, dimName, dataIndex, dimIndex) {
        // Use dataIndex as ordinal value in categoryAxis
        return dimIndex === firstCategoryDimIndex ? dataIndex : this.defaultDimValueGetter(itemOpt, dimName, dataIndex, dimIndex);
    } : null;
    data.hasItemOption = false;
    data.initData(// Try to reuse the data store in sourceManager if using dataset.
    isOriginalSource ? source : store, null, dimValueGetter);
    return data;
}
function isNeedCompleteOrdinalData(source) {
    if (source.sourceFormat === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOURCE_FORMAT_ORIGINAL"]) {
        var sampleItem = firstDataNotNull(source.data || []);
        return !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isArray((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDataItemValue"])(sampleItem));
    }
}
function firstDataNotNull(arr) {
    var i = 0;
    while(i < arr.length && arr[i] == null){
        i++;
    }
    return arr[i];
}
const __TURBOPACK__default__export__ = createSeriesData;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LinePath.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
/**
 * Line path for bezier and straight line draw
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
;
;
;
var straightLineProto = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Line.prototype;
var bezierCurveProto = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.BezierCurve.prototype;
var StraightLineShape = /** @class */ function() {
    function StraightLineShape() {
        // Start point
        this.x1 = 0;
        this.y1 = 0;
        // End point
        this.x2 = 0;
        this.y2 = 0;
        this.percent = 1;
    }
    return StraightLineShape;
}();
var CurveShape = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(CurveShape, _super);
    function CurveShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CurveShape;
}(StraightLineShape);
function isStraightLine(shape) {
    return isNaN(+shape.cpx1) || isNaN(+shape.cpy1);
}
var ECLinePath = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ECLinePath, _super);
    function ECLinePath(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'ec-line';
        return _this;
    }
    ECLinePath.prototype.getDefaultStyle = function() {
        return {
            stroke: '#000',
            fill: null
        };
    };
    ECLinePath.prototype.getDefaultShape = function() {
        return new StraightLineShape();
    };
    ECLinePath.prototype.buildPath = function(ctx, shape) {
        if (isStraightLine(shape)) {
            straightLineProto.buildPath.call(this, ctx, shape);
        } else {
            bezierCurveProto.buildPath.call(this, ctx, shape);
        }
    };
    ECLinePath.prototype.pointAt = function(t) {
        if (isStraightLine(this.shape)) {
            return straightLineProto.pointAt.call(this, t);
        } else {
            return bezierCurveProto.pointAt.call(this, t);
        }
    };
    ECLinePath.prototype.tangentAt = function(t) {
        var shape = this.shape;
        var p = isStraightLine(shape) ? [
            shape.x2 - shape.x1,
            shape.y2 - shape.y1
        ] : bezierCurveProto.tangentAt.call(this, t);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalize(p, p);
    };
    return ECLinePath;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Path);
const __TURBOPACK__default__export__ = ECLinePath;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Line.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LinePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LinePath.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
var SYMBOL_CATEGORIES = [
    'fromSymbol',
    'toSymbol'
];
function makeSymbolTypeKey(symbolCategory) {
    return '_' + symbolCategory + 'Type';
}
function makeSymbolTypeValue(name, lineData, idx) {
    var symbolType = lineData.getItemVisual(idx, name);
    if (!symbolType || symbolType === 'none') {
        return symbolType;
    }
    var symbolSize = lineData.getItemVisual(idx, name + 'Size');
    var symbolRotate = lineData.getItemVisual(idx, name + 'Rotate');
    var symbolOffset = lineData.getItemVisual(idx, name + 'Offset');
    var symbolKeepAspect = lineData.getItemVisual(idx, name + 'KeepAspect');
    var symbolSizeArr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalizeSymbolSize(symbolSize);
    var symbolOffsetArr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalizeSymbolOffset(symbolOffset || 0, symbolSizeArr);
    return symbolType + symbolSizeArr + symbolOffsetArr + (symbolRotate || '') + (symbolKeepAspect || '');
}
/**
 * @inner
 */ function createSymbol(name, lineData, idx) {
    var symbolType = lineData.getItemVisual(idx, name);
    if (!symbolType || symbolType === 'none') {
        return;
    }
    var symbolSize = lineData.getItemVisual(idx, name + 'Size');
    var symbolRotate = lineData.getItemVisual(idx, name + 'Rotate');
    var symbolOffset = lineData.getItemVisual(idx, name + 'Offset');
    var symbolKeepAspect = lineData.getItemVisual(idx, name + 'KeepAspect');
    var symbolSizeArr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalizeSymbolSize(symbolSize);
    var symbolOffsetArr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalizeSymbolOffset(symbolOffset || 0, symbolSizeArr);
    var symbolPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createSymbol(symbolType, -symbolSizeArr[0] / 2 + symbolOffsetArr[0], -symbolSizeArr[1] / 2 + symbolOffsetArr[1], symbolSizeArr[0], symbolSizeArr[1], null, symbolKeepAspect);
    symbolPath.__specifiedRotation = symbolRotate == null || isNaN(symbolRotate) ? void 0 : +symbolRotate * Math.PI / 180 || 0;
    symbolPath.name = name;
    return symbolPath;
}
function createLine(points) {
    var line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$LinePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
        name: 'line',
        subPixelOptimize: true
    });
    setLinePoints(line.shape, points);
    return line;
}
function setLinePoints(targetShape, points) {
    targetShape.x1 = points[0][0];
    targetShape.y1 = points[0][1];
    targetShape.x2 = points[1][0];
    targetShape.y2 = points[1][1];
    targetShape.percent = 1;
    var cp1 = points[2];
    if (cp1) {
        targetShape.cpx1 = cp1[0];
        targetShape.cpy1 = cp1[1];
    } else {
        targetShape.cpx1 = NaN;
        targetShape.cpy1 = NaN;
    }
}
var Line = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(Line, _super);
    function Line(lineData, idx, seriesScope) {
        var _this = _super.call(this) || this;
        _this._createLine(lineData, idx, seriesScope);
        return _this;
    }
    Line.prototype._createLine = function(lineData, idx, seriesScope) {
        var seriesModel = lineData.hostModel;
        var linePoints = lineData.getItemLayout(idx);
        var line = createLine(linePoints);
        line.shape.percent = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.initProps(line, {
            shape: {
                percent: 1
            }
        }, seriesModel, idx);
        this.add(line);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(SYMBOL_CATEGORIES, function(symbolCategory) {
            var symbol = createSymbol(symbolCategory, lineData, idx);
            // symbols must added after line to make sure
            // it will be updated after line#update.
            // Or symbol position and rotation update in line#beforeUpdate will be one frame slow
            this.add(symbol);
            this[makeSymbolTypeKey(symbolCategory)] = makeSymbolTypeValue(symbolCategory, lineData, idx);
        }, this);
        this._updateCommonStl(lineData, idx, seriesScope);
    };
    // TODO More strict on the List type in parameters?
    Line.prototype.updateData = function(lineData, idx, seriesScope) {
        var seriesModel = lineData.hostModel;
        var line = this.childOfName('line');
        var linePoints = lineData.getItemLayout(idx);
        var target = {
            shape: {}
        };
        setLinePoints(target.shape, linePoints);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.updateProps(line, target, seriesModel, idx);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(SYMBOL_CATEGORIES, function(symbolCategory) {
            var symbolType = makeSymbolTypeValue(symbolCategory, lineData, idx);
            var key = makeSymbolTypeKey(symbolCategory);
            // Symbol changed
            if (this[key] !== symbolType) {
                this.remove(this.childOfName(symbolCategory));
                var symbol = createSymbol(symbolCategory, lineData, idx);
                this.add(symbol);
            }
            this[key] = symbolType;
        }, this);
        this._updateCommonStl(lineData, idx, seriesScope);
    };
    ;
    Line.prototype.getLinePath = function() {
        return this.childAt(0);
    };
    Line.prototype._updateCommonStl = function(lineData, idx, seriesScope) {
        var seriesModel = lineData.hostModel;
        var line = this.childOfName('line');
        var emphasisLineStyle = seriesScope && seriesScope.emphasisLineStyle;
        var blurLineStyle = seriesScope && seriesScope.blurLineStyle;
        var selectLineStyle = seriesScope && seriesScope.selectLineStyle;
        var labelStatesModels = seriesScope && seriesScope.labelStatesModels;
        var emphasisDisabled = seriesScope && seriesScope.emphasisDisabled;
        var focus = seriesScope && seriesScope.focus;
        var blurScope = seriesScope && seriesScope.blurScope;
        // Optimization for large dataset
        if (!seriesScope || lineData.hasItemOption) {
            var itemModel = lineData.getItemModel(idx);
            var emphasisModel = itemModel.getModel('emphasis');
            emphasisLineStyle = emphasisModel.getModel('lineStyle').getLineStyle();
            blurLineStyle = itemModel.getModel([
                'blur',
                'lineStyle'
            ]).getLineStyle();
            selectLineStyle = itemModel.getModel([
                'select',
                'lineStyle'
            ]).getLineStyle();
            emphasisDisabled = emphasisModel.get('disabled');
            focus = emphasisModel.get('focus');
            blurScope = emphasisModel.get('blurScope');
            labelStatesModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel);
        }
        var lineStyle = lineData.getItemVisual(idx, 'style');
        var visualColor = lineStyle.stroke;
        line.useStyle(lineStyle);
        line.style.fill = null;
        line.style.strokeNoScale = true;
        line.ensureState('emphasis').style = emphasisLineStyle;
        line.ensureState('blur').style = blurLineStyle;
        line.ensureState('select').style = selectLineStyle;
        // Update symbol
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(SYMBOL_CATEGORIES, function(symbolCategory) {
            var symbol = this.childOfName(symbolCategory);
            if (symbol) {
                // Share opacity and color with line.
                symbol.setColor(visualColor);
                symbol.style.opacity = lineStyle.opacity;
                for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECIAL_STATES"].length; i++){
                    var stateName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECIAL_STATES"][i];
                    var lineState = line.getState(stateName);
                    if (lineState) {
                        var lineStateStyle = lineState.style || {};
                        var state = symbol.ensureState(stateName);
                        var stateStyle = state.style || (state.style = {});
                        if (lineStateStyle.stroke != null) {
                            stateStyle[symbol.__isEmptyBrush ? 'stroke' : 'fill'] = lineStateStyle.stroke;
                        }
                        if (lineStateStyle.opacity != null) {
                            stateStyle.opacity = lineStateStyle.opacity;
                        }
                    }
                }
                symbol.markRedraw();
            }
        }, this);
        var rawVal = seriesModel.getRawValue(idx);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelStyle"])(this, labelStatesModels, {
            labelDataIndex: idx,
            labelFetcher: {
                getFormattedLabel: function(dataIndex, stateName) {
                    return seriesModel.getFormattedLabel(dataIndex, stateName, lineData.dataType);
                }
            },
            inheritColor: visualColor || '#000',
            defaultOpacity: lineStyle.opacity,
            defaultText: (rawVal == null ? lineData.getName(idx) : isFinite(rawVal) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(rawVal) : rawVal) + ''
        });
        var label = this.getTextContent();
        // Always set `textStyle` even if `normalStyle.text` is null, because default
        // values have to be set on `normalStyle`.
        if (label) {
            var labelNormalModel = labelStatesModels.normal;
            label.__align = label.style.align;
            label.__verticalAlign = label.style.verticalAlign;
            // 'start', 'middle', 'end'
            label.__position = labelNormalModel.get('position') || 'middle';
            var distance = labelNormalModel.get('distance');
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(distance)) {
                distance = [
                    distance,
                    distance
                ];
            }
            label.__labelDistance = distance;
        }
        this.setTextConfig({
            position: null,
            local: true,
            inside: false // Can't be inside for stroke element.
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(this, focus, blurScope, emphasisDisabled);
    };
    Line.prototype.highlight = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enterEmphasis"])(this);
    };
    Line.prototype.downplay = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leaveEmphasis"])(this);
    };
    Line.prototype.updateLayout = function(lineData, idx) {
        this.setLinePoints(lineData.getItemLayout(idx));
    };
    Line.prototype.setLinePoints = function(points) {
        var linePath = this.childOfName('line');
        setLinePoints(linePath.shape, points);
        linePath.dirty();
    };
    Line.prototype.beforeUpdate = function() {
        var lineGroup = this;
        var symbolFrom = lineGroup.childOfName('fromSymbol');
        var symbolTo = lineGroup.childOfName('toSymbol');
        var label = lineGroup.getTextContent();
        // Quick reject
        if (!symbolFrom && !symbolTo && (!label || label.ignore)) {
            return;
        }
        var invScale = 1;
        var parentNode = this.parent;
        while(parentNode){
            if (parentNode.scaleX) {
                invScale /= parentNode.scaleX;
            }
            parentNode = parentNode.parent;
        }
        var line = lineGroup.childOfName('line');
        // If line not changed
        // FIXME Parent scale changed
        if (!this.__dirty && !line.__dirty) {
            return;
        }
        var percent = line.shape.percent;
        var fromPos = line.pointAt(0);
        var toPos = line.pointAt(percent);
        var d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.sub([], toPos, fromPos);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.normalize(d, d);
        function setSymbolRotation(symbol, percent) {
            // Fix #12388
            // when symbol is set to be 'arrow' in markLine,
            // symbolRotate value will be ignored, and compulsively use tangent angle.
            // rotate by default if symbol rotation is not specified
            var specifiedRotation = symbol.__specifiedRotation;
            if (specifiedRotation == null) {
                var tangent = line.tangentAt(percent);
                symbol.attr('rotation', (percent === 1 ? -1 : 1) * Math.PI / 2 - Math.atan2(tangent[1], tangent[0]));
            } else {
                symbol.attr('rotation', specifiedRotation);
            }
        }
        if (symbolFrom) {
            symbolFrom.setPosition(fromPos);
            setSymbolRotation(symbolFrom, 0);
            symbolFrom.scaleX = symbolFrom.scaleY = invScale * percent;
            symbolFrom.markRedraw();
        }
        if (symbolTo) {
            symbolTo.setPosition(toPos);
            setSymbolRotation(symbolTo, 1);
            symbolTo.scaleX = symbolTo.scaleY = invScale * percent;
            symbolTo.markRedraw();
        }
        if (label && !label.ignore) {
            label.x = label.y = 0;
            label.originX = label.originY = 0;
            var textAlign = void 0;
            var textVerticalAlign = void 0;
            var distance = label.__labelDistance;
            var distanceX = distance[0] * invScale;
            var distanceY = distance[1] * invScale;
            var halfPercent = percent / 2;
            var tangent = line.tangentAt(halfPercent);
            var n = [
                tangent[1],
                -tangent[0]
            ];
            var cp = line.pointAt(halfPercent);
            if (n[1] > 0) {
                n[0] = -n[0];
                n[1] = -n[1];
            }
            var dir = tangent[0] < 0 ? -1 : 1;
            if (label.__position !== 'start' && label.__position !== 'end') {
                var rotation = -Math.atan2(tangent[1], tangent[0]);
                if (toPos[0] < fromPos[0]) {
                    rotation = Math.PI + rotation;
                }
                label.rotation = rotation;
            }
            var dy = void 0;
            switch(label.__position){
                case 'insideStartTop':
                case 'insideMiddleTop':
                case 'insideEndTop':
                case 'middle':
                    dy = -distanceY;
                    textVerticalAlign = 'bottom';
                    break;
                case 'insideStartBottom':
                case 'insideMiddleBottom':
                case 'insideEndBottom':
                    dy = distanceY;
                    textVerticalAlign = 'top';
                    break;
                default:
                    dy = 0;
                    textVerticalAlign = 'middle';
            }
            switch(label.__position){
                case 'end':
                    label.x = d[0] * distanceX + toPos[0];
                    label.y = d[1] * distanceY + toPos[1];
                    textAlign = d[0] > 0.8 ? 'left' : d[0] < -0.8 ? 'right' : 'center';
                    textVerticalAlign = d[1] > 0.8 ? 'top' : d[1] < -0.8 ? 'bottom' : 'middle';
                    break;
                case 'start':
                    label.x = -d[0] * distanceX + fromPos[0];
                    label.y = -d[1] * distanceY + fromPos[1];
                    textAlign = d[0] > 0.8 ? 'right' : d[0] < -0.8 ? 'left' : 'center';
                    textVerticalAlign = d[1] > 0.8 ? 'bottom' : d[1] < -0.8 ? 'top' : 'middle';
                    break;
                case 'insideStartTop':
                case 'insideStart':
                case 'insideStartBottom':
                    label.x = distanceX * dir + fromPos[0];
                    label.y = fromPos[1] + dy;
                    textAlign = tangent[0] < 0 ? 'right' : 'left';
                    label.originX = -distanceX * dir;
                    label.originY = -dy;
                    break;
                case 'insideMiddleTop':
                case 'insideMiddle':
                case 'insideMiddleBottom':
                case 'middle':
                    label.x = cp[0];
                    label.y = cp[1] + dy;
                    textAlign = 'center';
                    label.originY = -dy;
                    break;
                case 'insideEndTop':
                case 'insideEnd':
                case 'insideEndBottom':
                    label.x = -distanceX * dir + toPos[0];
                    label.y = toPos[1] + dy;
                    textAlign = tangent[0] >= 0 ? 'right' : 'left';
                    label.originX = distanceX * dir;
                    label.originY = -dy;
                    break;
            }
            label.scaleX = label.scaleY = invScale;
            label.setStyle({
                // Use the user specified text align and baseline first
                verticalAlign: label.__verticalAlign || textVerticalAlign,
                align: label.__align || textAlign
            });
        }
    };
    return Line;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Group);
const __TURBOPACK__default__export__ = Line;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LineDraw.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
;
;
;
var LineDraw = /** @class */ function() {
    function LineDraw(LineCtor) {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Group();
        this._LineCtor = LineCtor || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    }
    LineDraw.prototype.updateData = function(lineData) {
        var _this = this;
        // Remove progressive els.
        this._progressiveEls = null;
        var lineDraw = this;
        var group = lineDraw.group;
        var oldLineData = lineDraw._lineData;
        lineDraw._lineData = lineData;
        // There is no oldLineData only when first rendering or switching from
        // stream mode to normal mode, where previous elements should be removed.
        if (!oldLineData) {
            group.removeAll();
        }
        var seriesScope = makeSeriesScope(lineData);
        lineData.diff(oldLineData).add(function(idx) {
            _this._doAdd(lineData, idx, seriesScope);
        }).update(function(newIdx, oldIdx) {
            _this._doUpdate(oldLineData, lineData, oldIdx, newIdx, seriesScope);
        }).remove(function(idx) {
            group.remove(oldLineData.getItemGraphicEl(idx));
        }).execute();
    };
    ;
    LineDraw.prototype.updateLayout = function() {
        var lineData = this._lineData;
        // Do not support update layout in incremental mode.
        if (!lineData) {
            return;
        }
        lineData.eachItemGraphicEl(function(el, idx) {
            el.updateLayout(lineData, idx);
        }, this);
    };
    ;
    LineDraw.prototype.incrementalPrepareUpdate = function(lineData) {
        this._seriesScope = makeSeriesScope(lineData);
        this._lineData = null;
        this.group.removeAll();
    };
    ;
    LineDraw.prototype.incrementalUpdate = function(taskParams, lineData) {
        this._progressiveEls = [];
        function updateIncrementalAndHover(el) {
            if (!el.isGroup && !isEffectObject(el)) {
                el.incremental = true;
                el.ensureState('emphasis').hoverLayer = true;
            }
        }
        for(var idx = taskParams.start; idx < taskParams.end; idx++){
            var itemLayout = lineData.getItemLayout(idx);
            if (lineNeedsDraw(itemLayout)) {
                var el = new this._LineCtor(lineData, idx, this._seriesScope);
                el.traverse(updateIncrementalAndHover);
                this.group.add(el);
                lineData.setItemGraphicEl(idx, el);
                this._progressiveEls.push(el);
            }
        }
    };
    ;
    LineDraw.prototype.remove = function() {
        this.group.removeAll();
    };
    ;
    LineDraw.prototype.eachRendered = function(cb) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.traverseElements(this._progressiveEls || this.group, cb);
    };
    LineDraw.prototype._doAdd = function(lineData, idx, seriesScope) {
        var itemLayout = lineData.getItemLayout(idx);
        if (!lineNeedsDraw(itemLayout)) {
            return;
        }
        var el = new this._LineCtor(lineData, idx, seriesScope);
        lineData.setItemGraphicEl(idx, el);
        this.group.add(el);
    };
    LineDraw.prototype._doUpdate = function(oldLineData, newLineData, oldIdx, newIdx, seriesScope) {
        var itemEl = oldLineData.getItemGraphicEl(oldIdx);
        if (!lineNeedsDraw(newLineData.getItemLayout(newIdx))) {
            this.group.remove(itemEl);
            return;
        }
        if (!itemEl) {
            itemEl = new this._LineCtor(newLineData, newIdx, seriesScope);
        } else {
            itemEl.updateData(newLineData, newIdx, seriesScope);
        }
        newLineData.setItemGraphicEl(newIdx, itemEl);
        this.group.add(itemEl);
    };
    return LineDraw;
}();
function isEffectObject(el) {
    return el.animators && el.animators.length > 0;
}
function makeSeriesScope(lineData) {
    var hostModel = lineData.hostModel;
    var emphasisModel = hostModel.getModel('emphasis');
    return {
        lineStyle: hostModel.getModel('lineStyle').getLineStyle(),
        emphasisLineStyle: emphasisModel.getModel([
            'lineStyle'
        ]).getLineStyle(),
        blurLineStyle: hostModel.getModel([
            'blur',
            'lineStyle'
        ]).getLineStyle(),
        selectLineStyle: hostModel.getModel([
            'select',
            'lineStyle'
        ]).getLineStyle(),
        emphasisDisabled: emphasisModel.get('disabled'),
        blurScope: emphasisModel.get('blurScope'),
        focus: emphasisModel.get('focus'),
        labelStatesModels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(hostModel)
    };
}
function isPointNaN(pt) {
    return isNaN(pt[0]) || isNaN(pt[1]);
}
function lineNeedsDraw(pts) {
    return pts && !isPointNaN(pts[0]) && !isPointNaN(pts[1]);
}
const __TURBOPACK__default__export__ = LineDraw;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
    "createClipPath": (()=>createClipPath),
    "createGridClipPath": (()=>createGridClipPath),
    "createPolarClipPath": (()=>createPolarClipPath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js [app-ssr] (ecmascript)");
;
;
;
function createGridClipPath(cartesian, hasAnimation, seriesModel, done, during) {
    var rect = cartesian.getArea();
    var x = rect.x;
    var y = rect.y;
    var width = rect.width;
    var height = rect.height;
    var lineWidth = seriesModel.get([
        'lineStyle',
        'width'
    ]) || 0;
    // Expand the clip path a bit to avoid the border is clipped and looks thinner
    x -= lineWidth / 2;
    y -= lineWidth / 2;
    width += lineWidth;
    height += lineWidth;
    // fix: https://github.com/apache/incubator-echarts/issues/11369
    width = Math.ceil(width);
    if (x !== Math.floor(x)) {
        x = Math.floor(x);
        // if no extra 1px on `width`, it will still be clipped since `x` is floored
        width++;
    }
    var clipPath = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Rect({
        shape: {
            x: x,
            y: y,
            width: width,
            height: height
        }
    });
    if (hasAnimation) {
        var baseAxis = cartesian.getBaseAxis();
        var isHorizontal = baseAxis.isHorizontal();
        var isAxisInversed = baseAxis.inverse;
        if (isHorizontal) {
            if (isAxisInversed) {
                clipPath.shape.x += width;
            }
            clipPath.shape.width = 0;
        } else {
            if (!isAxisInversed) {
                clipPath.shape.y += height;
            }
            clipPath.shape.height = 0;
        }
        var duringCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFunction"])(during) ? function(percent) {
            during(percent, clipPath);
        } : null;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.initProps(clipPath, {
            shape: {
                width: width,
                height: height,
                x: x,
                y: y
            }
        }, seriesModel, null, done, duringCb);
    }
    return clipPath;
}
function createPolarClipPath(polar, hasAnimation, seriesModel) {
    var sectorArea = polar.getArea();
    // Avoid float number rounding error for symbol on the edge of axis extent.
    var r0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(sectorArea.r0, 1);
    var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(sectorArea.r, 1);
    var clipPath = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Sector({
        shape: {
            cx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(polar.cx, 1),
            cy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$number$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["round"])(polar.cy, 1),
            r0: r0,
            r: r,
            startAngle: sectorArea.startAngle,
            endAngle: sectorArea.endAngle,
            clockwise: sectorArea.clockwise
        }
    });
    if (hasAnimation) {
        var isRadial = polar.getBaseAxis().dim === 'angle';
        if (isRadial) {
            clipPath.shape.endAngle = sectorArea.startAngle;
        } else {
            clipPath.shape.r = r0;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.initProps(clipPath, {
            shape: {
                endAngle: sectorArea.endAngle,
                r: r
            }
        }, seriesModel);
    }
    return clipPath;
}
function createClipPath(coordSys, hasAnimation, seriesModel, done, during) {
    if (!coordSys) {
        return null;
    } else if (coordSys.type === 'polar') {
        return createPolarClipPath(coordSys, hasAnimation, seriesModel);
    } else if (coordSys.type === 'cartesian2d') {
        return createGridClipPath(coordSys, hasAnimation, seriesModel, done, during);
    }
    return null;
}
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/sectorHelper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
    "getSectorCornerRadius": (()=>getSectorCornerRadius)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/text.js [app-ssr] (ecmascript)");
;
;
function getSectorCornerRadius(model, shape, zeroIfNull) {
    var cornerRadius = model.get('borderRadius');
    if (cornerRadius == null) {
        return zeroIfNull ? {
            cornerRadius: 0
        } : null;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(cornerRadius)) {
        cornerRadius = [
            cornerRadius,
            cornerRadius,
            cornerRadius,
            cornerRadius
        ];
    }
    var dr = Math.abs(shape.r || 0 - shape.r0 || 0);
    return {
        cornerRadius: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(cornerRadius, function(cr) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$contain$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePercent"])(cr, dr);
        })
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
    "getDefaultInterpolatedLabel": (()=>getDefaultInterpolatedLabel),
    "getDefaultLabel": (()=>getDefaultLabel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
;
;
function getDefaultLabel(data, dataIndex) {
    var labelDims = data.mapDimensionsAll('defaultedLabel');
    var len = labelDims.length;
    // Simple optimization (in lots of cases, label dims length is 1)
    if (len === 1) {
        var rawVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveRawValue"])(data, dataIndex, labelDims[0]);
        return rawVal != null ? rawVal + '' : null;
    } else if (len) {
        var vals = [];
        for(var i = 0; i < labelDims.length; i++){
            vals.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retrieveRawValue"])(data, dataIndex, labelDims[i]));
        }
        return vals.join(' ');
    }
}
function getDefaultInterpolatedLabel(data, interpolatedValue) {
    var labelDims = data.mapDimensionsAll('defaultedLabel');
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArray"])(interpolatedValue)) {
        return interpolatedValue + '';
    }
    var vals = [];
    for(var i = 0; i < labelDims.length; i++){
        var dimIndex = data.getDimensionIndex(labelDims[i]);
        if (dimIndex >= 0) {
            vals.push(interpolatedValue[dimIndex]);
        }
    }
    return vals.join(' ');
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/BarView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/log.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js [app-ssr] (ecmascript) <export default as Rect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Sector.js [app-ssr] (ecmascript) <export default as Sector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$shape$2f$sausage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/shape/sausage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$sectorLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/sectorLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/sectorHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/throttle.js [app-ssr] (ecmascript)");
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
var mathMax = Math.max;
var mathMin = Math.min;
function getClipArea(coord, data) {
    var coordSysClipArea = coord.getArea && coord.getArea();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coord, 'cartesian2d')) {
        var baseAxis = coord.getBaseAxis();
        // When boundaryGap is false or using time axis. bar may exceed the grid.
        // We should not clip this part.
        // See test/bar2.html
        if (baseAxis.type !== 'category' || !baseAxis.onBand) {
            var expandWidth = data.getLayout('bandWidth');
            if (baseAxis.isHorizontal()) {
                coordSysClipArea.x -= expandWidth;
                coordSysClipArea.width += expandWidth * 2;
            } else {
                coordSysClipArea.y -= expandWidth;
                coordSysClipArea.height += expandWidth * 2;
            }
        }
    }
    return coordSysClipArea;
}
var BarView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(BarView, _super);
    function BarView() {
        var _this = _super.call(this) || this;
        _this.type = BarView.type;
        _this._isFirstFrame = true;
        return _this;
    }
    BarView.prototype.render = function(seriesModel, ecModel, api, payload) {
        this._model = seriesModel;
        this._removeOnRenderedListener(api);
        this._updateDrawMode(seriesModel);
        var coordinateSystemType = seriesModel.get('coordinateSystem');
        if (coordinateSystemType === 'cartesian2d' || coordinateSystemType === 'polar') {
            // Clear previously rendered progressive elements.
            this._progressiveEls = null;
            this._isLargeDraw ? this._renderLarge(seriesModel, ecModel, api) : this._renderNormal(seriesModel, ecModel, api, payload);
        } else if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])('Only cartesian2d and polar supported for bar.');
        }
    };
    BarView.prototype.incrementalPrepareRender = function(seriesModel) {
        this._clear();
        this._updateDrawMode(seriesModel);
        // incremental also need to clip, otherwise might be overlow.
        // But must not set clip in each frame, otherwise all of the children will be marked redraw.
        this._updateLargeClip(seriesModel);
    };
    BarView.prototype.incrementalRender = function(params, seriesModel) {
        // Reset
        this._progressiveEls = [];
        // Do not support progressive in normal mode.
        this._incrementalRenderLarge(params, seriesModel);
    };
    BarView.prototype.eachRendered = function(cb) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["traverseElements"])(this._progressiveEls || this.group, cb);
    };
    BarView.prototype._updateDrawMode = function(seriesModel) {
        var isLargeDraw = seriesModel.pipelineContext.large;
        if (this._isLargeDraw == null || isLargeDraw !== this._isLargeDraw) {
            this._isLargeDraw = isLargeDraw;
            this._clear();
        }
    };
    BarView.prototype._renderNormal = function(seriesModel, ecModel, api, payload) {
        var group = this.group;
        var data = seriesModel.getData();
        var oldData = this._data;
        var coord = seriesModel.coordinateSystem;
        var baseAxis = coord.getBaseAxis();
        var isHorizontalOrRadial;
        if (coord.type === 'cartesian2d') {
            isHorizontalOrRadial = baseAxis.isHorizontal();
        } else if (coord.type === 'polar') {
            isHorizontalOrRadial = baseAxis.dim === 'angle';
        }
        var animationModel = seriesModel.isAnimationEnabled() ? seriesModel : null;
        var realtimeSortCfg = shouldRealtimeSort(seriesModel, coord);
        if (realtimeSortCfg) {
            this._enableRealtimeSort(realtimeSortCfg, data, api);
        }
        var needsClip = seriesModel.get('clip', true) || realtimeSortCfg;
        var coordSysClipArea = getClipArea(coord, data);
        // If there is clipPath created in large mode. Remove it.
        group.removeClipPath();
        // We don't use clipPath in normal mode because we needs a perfect animation
        // And don't want the label are clipped.
        var roundCap = seriesModel.get('roundCap', true);
        var drawBackground = seriesModel.get('showBackground', true);
        var backgroundModel = seriesModel.getModel('backgroundStyle');
        var barBorderRadius = backgroundModel.get('borderRadius') || 0;
        var bgEls = [];
        var oldBgEls = this._backgroundEls;
        var isInitSort = payload && payload.isInitSort;
        var isChangeOrder = payload && payload.type === 'changeAxisOrder';
        function createBackground(dataIndex) {
            var bgLayout = getLayout[coord.type](data, dataIndex);
            var bgEl = createBackgroundEl(coord, isHorizontalOrRadial, bgLayout);
            bgEl.useStyle(backgroundModel.getItemStyle());
            // Only cartesian2d support borderRadius.
            if (coord.type === 'cartesian2d') {
                bgEl.setShape('r', barBorderRadius);
            } else {
                bgEl.setShape('cornerRadius', barBorderRadius);
            }
            bgEls[dataIndex] = bgEl;
            return bgEl;
        }
        ;
        data.diff(oldData).add(function(dataIndex) {
            var itemModel = data.getItemModel(dataIndex);
            var layout = getLayout[coord.type](data, dataIndex, itemModel);
            if (drawBackground) {
                createBackground(dataIndex);
            }
            // If dataZoom in filteMode: 'empty', the baseValue can be set as NaN in "axisProxy".
            if (!data.hasValue(dataIndex) || !isValidLayout[coord.type](layout)) {
                return;
            }
            var isClipped = false;
            if (needsClip) {
                // Clip will modify the layout params.
                // And return a boolean to determine if the shape are fully clipped.
                isClipped = clip[coord.type](coordSysClipArea, layout);
            }
            var el = elementCreator[coord.type](seriesModel, data, dataIndex, layout, isHorizontalOrRadial, animationModel, baseAxis.model, false, roundCap);
            if (realtimeSortCfg) {
                /**
         * Force label animation because even if the element is
         * ignored because it's clipped, it may not be clipped after
         * changing order. Then, if not using forceLabelAnimation,
         * the label animation was never started, in which case,
         * the label will be the final value and doesn't have label
         * animation.
         */ el.forceLabelAnimation = true;
            }
            updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
            if (isInitSort) {
                el.attr({
                    shape: layout
                });
            } else if (realtimeSortCfg) {
                updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout, dataIndex, isHorizontalOrRadial, false, false);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initProps"])(el, {
                    shape: layout
                }, seriesModel, dataIndex);
            }
            data.setItemGraphicEl(dataIndex, el);
            group.add(el);
            el.ignore = isClipped;
        }).update(function(newIndex, oldIndex) {
            var itemModel = data.getItemModel(newIndex);
            var layout = getLayout[coord.type](data, newIndex, itemModel);
            if (drawBackground) {
                var bgEl = void 0;
                if (oldBgEls.length === 0) {
                    bgEl = createBackground(oldIndex);
                } else {
                    bgEl = oldBgEls[oldIndex];
                    bgEl.useStyle(backgroundModel.getItemStyle());
                    // Only cartesian2d support borderRadius.
                    if (coord.type === 'cartesian2d') {
                        bgEl.setShape('r', barBorderRadius);
                    } else {
                        bgEl.setShape('cornerRadius', barBorderRadius);
                    }
                    bgEls[newIndex] = bgEl;
                }
                var bgLayout = getLayout[coord.type](data, newIndex);
                var shape = createBackgroundShape(isHorizontalOrRadial, bgLayout, coord);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"])(bgEl, {
                    shape: shape
                }, animationModel, newIndex);
            }
            var el = oldData.getItemGraphicEl(oldIndex);
            if (!data.hasValue(newIndex) || !isValidLayout[coord.type](layout)) {
                group.remove(el);
                return;
            }
            var isClipped = false;
            if (needsClip) {
                isClipped = clip[coord.type](coordSysClipArea, layout);
                if (isClipped) {
                    group.remove(el);
                }
            }
            if (!el) {
                el = elementCreator[coord.type](seriesModel, data, newIndex, layout, isHorizontalOrRadial, animationModel, baseAxis.model, !!el, roundCap);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveOldStyle"])(el);
            }
            if (realtimeSortCfg) {
                el.forceLabelAnimation = true;
            }
            if (isChangeOrder) {
                var textEl = el.getTextContent();
                if (textEl) {
                    var labelInnerStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelInner"])(textEl);
                    if (labelInnerStore.prevValue != null) {
                        /**
             * Set preValue to be value so that no new label
             * should be started, otherwise, it will take a full
             * `animationDurationUpdate` time to finish the
             * animation, which is not expected.
             */ labelInnerStore.prevValue = labelInnerStore.value;
                    }
                }
            } else {
                updateStyle(el, data, newIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, coord.type === 'polar');
            }
            if (isInitSort) {
                el.attr({
                    shape: layout
                });
            } else if (realtimeSortCfg) {
                updateRealtimeAnimation(realtimeSortCfg, animationModel, el, layout, newIndex, isHorizontalOrRadial, true, isChangeOrder);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"])(el, {
                    shape: layout
                }, seriesModel, newIndex, null);
            }
            data.setItemGraphicEl(newIndex, el);
            el.ignore = isClipped;
            group.add(el);
        }).remove(function(dataIndex) {
            var el = oldData.getItemGraphicEl(dataIndex);
            el && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeElementWithFadeOut"])(el, seriesModel, dataIndex);
        }).execute();
        var bgGroup = this._backgroundGroup || (this._backgroundGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]());
        bgGroup.removeAll();
        for(var i = 0; i < bgEls.length; ++i){
            bgGroup.add(bgEls[i]);
        }
        group.add(bgGroup);
        this._backgroundEls = bgEls;
        this._data = data;
    };
    BarView.prototype._renderLarge = function(seriesModel, ecModel, api) {
        this._clear();
        createLarge(seriesModel, this.group);
        this._updateLargeClip(seriesModel);
    };
    BarView.prototype._incrementalRenderLarge = function(params, seriesModel) {
        this._removeBackground();
        createLarge(seriesModel, this.group, this._progressiveEls, true);
    };
    BarView.prototype._updateLargeClip = function(seriesModel) {
        // Use clipPath in large mode.
        var clipPath = seriesModel.get('clip', true) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClipPath"])(seriesModel.coordinateSystem, false, seriesModel);
        var group = this.group;
        if (clipPath) {
            group.setClipPath(clipPath);
        } else {
            group.removeClipPath();
        }
    };
    BarView.prototype._enableRealtimeSort = function(realtimeSortCfg, data, api) {
        var _this = this;
        // If no data in the first frame, wait for data to initSort
        if (!data.count()) {
            return;
        }
        var baseAxis = realtimeSortCfg.baseAxis;
        if (this._isFirstFrame) {
            this._dispatchInitSort(data, realtimeSortCfg, api);
            this._isFirstFrame = false;
        } else {
            var orderMapping_1 = function(idx) {
                var el = data.getItemGraphicEl(idx);
                var shape = el && el.shape;
                return shape && // The result should be consistent with the initial sort by data value.
                // Do not support the case that both positive and negative exist.
                Math.abs(baseAxis.isHorizontal() ? shape.height : shape.width) || 0;
            };
            this._onRendered = function() {
                _this._updateSortWithinSameData(data, orderMapping_1, baseAxis, api);
            };
            api.getZr().on('rendered', this._onRendered);
        }
    };
    BarView.prototype._dataSort = function(data, baseAxis, orderMapping) {
        var info = [];
        data.each(data.mapDimension(baseAxis.dim), function(ordinalNumber, dataIdx) {
            var mappedValue = orderMapping(dataIdx);
            mappedValue = mappedValue == null ? NaN : mappedValue;
            info.push({
                dataIndex: dataIdx,
                mappedValue: mappedValue,
                ordinalNumber: ordinalNumber
            });
        });
        info.sort(function(a, b) {
            // If NaN, it will be treated as min val.
            return b.mappedValue - a.mappedValue;
        });
        return {
            ordinalNumbers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(info, function(item) {
                return item.ordinalNumber;
            })
        };
    };
    BarView.prototype._isOrderChangedWithinSameData = function(data, orderMapping, baseAxis) {
        var scale = baseAxis.scale;
        var ordinalDataDim = data.mapDimension(baseAxis.dim);
        var lastValue = Number.MAX_VALUE;
        for(var tickNum = 0, len = scale.getOrdinalMeta().categories.length; tickNum < len; ++tickNum){
            var rawIdx = data.rawIndexOf(ordinalDataDim, scale.getRawOrdinalNumber(tickNum));
            var value = rawIdx < 0 ? Number.MIN_VALUE : orderMapping(data.indexOfRawIndex(rawIdx));
            if (value > lastValue) {
                return true;
            }
            lastValue = value;
        }
        return false;
    };
    /*
   * Consider the case when A and B changed order, whose representing
   * bars are both out of sight, we don't wish to trigger reorder action
   * as long as the order in the view doesn't change.
   */ BarView.prototype._isOrderDifferentInView = function(orderInfo, baseAxis) {
        var scale = baseAxis.scale;
        var extent = scale.getExtent();
        var tickNum = Math.max(0, extent[0]);
        var tickMax = Math.min(extent[1], scale.getOrdinalMeta().categories.length - 1);
        for(; tickNum <= tickMax; ++tickNum){
            if (orderInfo.ordinalNumbers[tickNum] !== scale.getRawOrdinalNumber(tickNum)) {
                return true;
            }
        }
    };
    BarView.prototype._updateSortWithinSameData = function(data, orderMapping, baseAxis, api) {
        if (!this._isOrderChangedWithinSameData(data, orderMapping, baseAxis)) {
            return;
        }
        var sortInfo = this._dataSort(data, baseAxis, orderMapping);
        if (this._isOrderDifferentInView(sortInfo, baseAxis)) {
            this._removeOnRenderedListener(api);
            api.dispatchAction({
                type: 'changeAxisOrder',
                componentType: baseAxis.dim + 'Axis',
                axisId: baseAxis.index,
                sortInfo: sortInfo
            });
        }
    };
    BarView.prototype._dispatchInitSort = function(data, realtimeSortCfg, api) {
        var baseAxis = realtimeSortCfg.baseAxis;
        var sortResult = this._dataSort(data, baseAxis, function(dataIdx) {
            return data.get(data.mapDimension(realtimeSortCfg.otherAxis.dim), dataIdx);
        });
        api.dispatchAction({
            type: 'changeAxisOrder',
            componentType: baseAxis.dim + 'Axis',
            isInitSort: true,
            axisId: baseAxis.index,
            sortInfo: sortResult
        });
    };
    BarView.prototype.remove = function(ecModel, api) {
        this._clear(this._model);
        this._removeOnRenderedListener(api);
    };
    BarView.prototype.dispose = function(ecModel, api) {
        this._removeOnRenderedListener(api);
    };
    BarView.prototype._removeOnRenderedListener = function(api) {
        if (this._onRendered) {
            api.getZr().off('rendered', this._onRendered);
            this._onRendered = null;
        }
    };
    BarView.prototype._clear = function(model) {
        var group = this.group;
        var data = this._data;
        if (model && model.isAnimationEnabled() && data && !this._isLargeDraw) {
            this._removeBackground();
            this._backgroundEls = [];
            data.eachItemGraphicEl(function(el) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeElementWithFadeOut"])(el, model, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).dataIndex);
            });
        } else {
            group.removeAll();
        }
        this._data = null;
        this._isFirstFrame = true;
    };
    BarView.prototype._removeBackground = function() {
        this.group.remove(this._backgroundGroup);
        this._backgroundGroup = null;
    };
    BarView.type = 'bar';
    return BarView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
var clip = {
    cartesian2d: function(coordSysBoundingRect, layout) {
        var signWidth = layout.width < 0 ? -1 : 1;
        var signHeight = layout.height < 0 ? -1 : 1;
        // Needs positive width and height
        if (signWidth < 0) {
            layout.x += layout.width;
            layout.width = -layout.width;
        }
        if (signHeight < 0) {
            layout.y += layout.height;
            layout.height = -layout.height;
        }
        var coordSysX2 = coordSysBoundingRect.x + coordSysBoundingRect.width;
        var coordSysY2 = coordSysBoundingRect.y + coordSysBoundingRect.height;
        var x = mathMax(layout.x, coordSysBoundingRect.x);
        var x2 = mathMin(layout.x + layout.width, coordSysX2);
        var y = mathMax(layout.y, coordSysBoundingRect.y);
        var y2 = mathMin(layout.y + layout.height, coordSysY2);
        var xClipped = x2 < x;
        var yClipped = y2 < y;
        // When xClipped or yClipped, the element will be marked as `ignore`.
        // But we should also place the element at the edge of the coord sys bounding rect.
        // Because if data changed and the bar shows again, its transition animation
        // will begin at this place.
        layout.x = xClipped && x > coordSysX2 ? x2 : x;
        layout.y = yClipped && y > coordSysY2 ? y2 : y;
        layout.width = xClipped ? 0 : x2 - x;
        layout.height = yClipped ? 0 : y2 - y;
        // Reverse back
        if (signWidth < 0) {
            layout.x += layout.width;
            layout.width = -layout.width;
        }
        if (signHeight < 0) {
            layout.y += layout.height;
            layout.height = -layout.height;
        }
        return xClipped || yClipped;
    },
    polar: function(coordSysClipArea, layout) {
        var signR = layout.r0 <= layout.r ? 1 : -1;
        // Make sure r is larger than r0
        if (signR < 0) {
            var tmp = layout.r;
            layout.r = layout.r0;
            layout.r0 = tmp;
        }
        var r = mathMin(layout.r, coordSysClipArea.r);
        var r0 = mathMax(layout.r0, coordSysClipArea.r0);
        layout.r = r;
        layout.r0 = r0;
        var clipped = r - r0 < 0;
        // Reverse back
        if (signR < 0) {
            var tmp = layout.r;
            layout.r = layout.r0;
            layout.r0 = tmp;
        }
        return clipped;
    }
};
var elementCreator = {
    cartesian2d: function(seriesModel, data, newIndex, layout, isHorizontal, animationModel, axisModel, isUpdate, roundCap) {
        var rect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"]({
            shape: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, layout),
            z2: 1
        });
        rect.__dataIndex = newIndex;
        rect.name = 'item';
        if (animationModel) {
            var rectShape = rect.shape;
            var animateProperty = isHorizontal ? 'height' : 'width';
            rectShape[animateProperty] = 0;
        }
        return rect;
    },
    polar: function(seriesModel, data, newIndex, layout, isRadial, animationModel, axisModel, isUpdate, roundCap) {
        var ShapeClass = !isRadial && roundCap ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$shape$2f$sausage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"];
        var sector = new ShapeClass({
            shape: layout,
            z2: 1
        });
        sector.name = 'item';
        var positionMap = createPolarPositionMapping(isRadial);
        sector.calculateTextPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$sectorLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSectorCalculateTextPosition"])(positionMap, {
            isRoundCap: ShapeClass === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$shape$2f$sausage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
        });
        // Animation
        if (animationModel) {
            var sectorShape = sector.shape;
            var animateProperty = isRadial ? 'r' : 'endAngle';
            var animateTarget = {};
            sectorShape[animateProperty] = isRadial ? layout.r0 : layout.startAngle;
            animateTarget[animateProperty] = layout[animateProperty];
            (isUpdate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initProps"])(sector, {
                shape: animateTarget
            }, animationModel);
        }
        return sector;
    }
};
function shouldRealtimeSort(seriesModel, coordSys) {
    var realtimeSortOption = seriesModel.get('realtimeSort', true);
    var baseAxis = coordSys.getBaseAxis();
    if ("TURBOPACK compile-time truthy", 1) {
        if (realtimeSortOption) {
            if (baseAxis.type !== 'category') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])('`realtimeSort` will not work because this bar series is not based on a category axis.');
            }
            if (coordSys.type !== 'cartesian2d') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$log$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])('`realtimeSort` will not work because this bar series is not on cartesian2d.');
            }
        }
    }
    if (realtimeSortOption && baseAxis.type === 'category' && coordSys.type === 'cartesian2d') {
        return {
            baseAxis: baseAxis,
            otherAxis: coordSys.getOtherAxis(baseAxis)
        };
    }
}
function updateRealtimeAnimation(realtimeSortCfg, seriesAnimationModel, el, layout, newIndex, isHorizontal, isUpdate, isChangeOrder) {
    var seriesTarget;
    var axisTarget;
    if (isHorizontal) {
        axisTarget = {
            x: layout.x,
            width: layout.width
        };
        seriesTarget = {
            y: layout.y,
            height: layout.height
        };
    } else {
        axisTarget = {
            y: layout.y,
            height: layout.height
        };
        seriesTarget = {
            x: layout.x,
            width: layout.width
        };
    }
    if (!isChangeOrder) {
        // Keep the original growth animation if only axis order changed.
        // Not start a new animation.
        (isUpdate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initProps"])(el, {
            shape: seriesTarget
        }, seriesAnimationModel, newIndex, null);
    }
    var axisAnimationModel = seriesAnimationModel ? realtimeSortCfg.baseAxis.model : null;
    (isUpdate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProps"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initProps"])(el, {
        shape: axisTarget
    }, axisAnimationModel, newIndex);
}
function checkPropertiesNotValid(obj, props) {
    for(var i = 0; i < props.length; i++){
        if (!isFinite(obj[props[i]])) {
            return true;
        }
    }
    return false;
}
var rectPropties = [
    'x',
    'y',
    'width',
    'height'
];
var polarPropties = [
    'cx',
    'cy',
    'r',
    'startAngle',
    'endAngle'
];
var isValidLayout = {
    cartesian2d: function(layout) {
        return !checkPropertiesNotValid(layout, rectPropties);
    },
    polar: function(layout) {
        return !checkPropertiesNotValid(layout, polarPropties);
    }
};
var getLayout = {
    // itemModel is only used to get borderWidth, which is not needed
    // when calculating bar background layout.
    cartesian2d: function(data, dataIndex, itemModel) {
        var layout = data.getItemLayout(dataIndex);
        var fixedLineWidth = itemModel ? getLineWidth(itemModel, layout) : 0;
        // fix layout with lineWidth
        var signX = layout.width > 0 ? 1 : -1;
        var signY = layout.height > 0 ? 1 : -1;
        return {
            x: layout.x + signX * fixedLineWidth / 2,
            y: layout.y + signY * fixedLineWidth / 2,
            width: layout.width - signX * fixedLineWidth,
            height: layout.height - signY * fixedLineWidth
        };
    },
    polar: function(data, dataIndex, itemModel) {
        var layout = data.getItemLayout(dataIndex);
        return {
            cx: layout.cx,
            cy: layout.cy,
            r0: layout.r0,
            r: layout.r,
            startAngle: layout.startAngle,
            endAngle: layout.endAngle,
            clockwise: layout.clockwise
        };
    }
};
function isZeroOnPolar(layout) {
    return layout.startAngle != null && layout.endAngle != null && layout.startAngle === layout.endAngle;
}
function createPolarPositionMapping(isRadial) {
    return function(isRadial) {
        var arcOrAngle = isRadial ? 'Arc' : 'Angle';
        return function(position) {
            switch(position){
                case 'start':
                case 'insideStart':
                case 'end':
                case 'insideEnd':
                    return position + arcOrAngle;
                default:
                    return position;
            }
        };
    }(isRadial);
}
function updateStyle(el, data, dataIndex, itemModel, layout, seriesModel, isHorizontalOrRadial, isPolar) {
    var style = data.getItemVisual(dataIndex, 'style');
    if (!isPolar) {
        var borderRadius = itemModel.get([
            'itemStyle',
            'borderRadius'
        ]) || 0;
        el.setShape('r', borderRadius);
    } else if (!seriesModel.get('roundCap')) {
        var sectorShape = el.shape;
        var cornerRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$sectorHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSectorCornerRadius"])(itemModel.getModel('itemStyle'), sectorShape, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])(sectorShape, cornerRadius);
        el.setShape(sectorShape);
    }
    el.useStyle(style);
    var cursorStyle = itemModel.getShallow('cursor');
    cursorStyle && el.attr('cursor', cursorStyle);
    var labelPositionOutside = isPolar ? isHorizontalOrRadial ? layout.r >= layout.r0 ? 'endArc' : 'startArc' : layout.endAngle >= layout.startAngle ? 'endAngle' : 'startAngle' : isHorizontalOrRadial ? layout.height >= 0 ? 'bottom' : 'top' : layout.width >= 0 ? 'right' : 'left';
    var labelStatesModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelStyle"])(el, labelStatesModels, {
        labelFetcher: seriesModel,
        labelDataIndex: dataIndex,
        defaultText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultLabel"])(seriesModel.getData(), dataIndex),
        inheritColor: style.fill,
        defaultOpacity: style.opacity,
        defaultOutsidePosition: labelPositionOutside
    });
    var label = el.getTextContent();
    if (isPolar && label) {
        var position = itemModel.get([
            'label',
            'position'
        ]);
        el.textConfig.inside = position === 'middle' ? true : null;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$sectorLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSectorTextRotation"])(el, position === 'outside' ? labelPositionOutside : position, createPolarPositionMapping(isHorizontalOrRadial), itemModel.get([
            'label',
            'rotate'
        ]));
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelValueAnimation"])(label, labelStatesModels, seriesModel.getRawValue(dataIndex), function(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultInterpolatedLabel"])(data, value);
    });
    var emphasisModel = itemModel.getModel([
        'emphasis'
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(el, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(el, itemModel);
    if (isZeroOnPolar(layout)) {
        el.style.fill = 'none';
        el.style.stroke = 'none';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(el.states, function(state) {
            if (state.style) {
                state.style.fill = state.style.stroke = 'none';
            }
        });
    }
}
// In case width or height are too small.
function getLineWidth(itemModel, rawLayout) {
    // Has no border.
    var borderColor = itemModel.get([
        'itemStyle',
        'borderColor'
    ]);
    if (!borderColor || borderColor === 'none') {
        return 0;
    }
    var lineWidth = itemModel.get([
        'itemStyle',
        'borderWidth'
    ]) || 0;
    // width or height may be NaN for empty data
    var width = isNaN(rawLayout.width) ? Number.MAX_VALUE : Math.abs(rawLayout.width);
    var height = isNaN(rawLayout.height) ? Number.MAX_VALUE : Math.abs(rawLayout.height);
    return Math.min(lineWidth, width, height);
}
var LagePathShape = /** @class */ function() {
    function LagePathShape() {}
    return LagePathShape;
}();
var LargePath = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(LargePath, _super);
    function LargePath(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'largeBar';
        return _this;
    }
    LargePath.prototype.getDefaultShape = function() {
        return new LagePathShape();
    };
    LargePath.prototype.buildPath = function(ctx, shape) {
        // Drawing lines is more efficient than drawing
        // a whole line or drawing rects.
        var points = shape.points;
        var baseDimIdx = this.baseDimIdx;
        var valueDimIdx = 1 - this.baseDimIdx;
        var startPoint = [];
        var size = [];
        var barWidth = this.barWidth;
        for(var i = 0; i < points.length; i += 3){
            size[baseDimIdx] = barWidth;
            size[valueDimIdx] = points[i + 2];
            startPoint[baseDimIdx] = points[i + baseDimIdx];
            startPoint[valueDimIdx] = points[i + valueDimIdx];
            ctx.rect(startPoint[0], startPoint[1], size[0], size[1]);
        }
    };
    return LargePath;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
function createLarge(seriesModel, group, progressiveEls, incremental) {
    // TODO support polar
    var data = seriesModel.getData();
    var baseDimIdx = data.getLayout('valueAxisHorizontal') ? 1 : 0;
    var largeDataIndices = data.getLayout('largeDataIndices');
    var barWidth = data.getLayout('size');
    var backgroundModel = seriesModel.getModel('backgroundStyle');
    var bgPoints = data.getLayout('largeBackgroundPoints');
    if (bgPoints) {
        var bgEl = new LargePath({
            shape: {
                points: bgPoints
            },
            incremental: !!incremental,
            silent: true,
            z2: 0
        });
        bgEl.baseDimIdx = baseDimIdx;
        bgEl.largeDataIndices = largeDataIndices;
        bgEl.barWidth = barWidth;
        bgEl.useStyle(backgroundModel.getItemStyle());
        group.add(bgEl);
        progressiveEls && progressiveEls.push(bgEl);
    }
    var el = new LargePath({
        shape: {
            points: data.getLayout('largePoints')
        },
        incremental: !!incremental,
        ignoreCoarsePointer: true,
        z2: 1
    });
    el.baseDimIdx = baseDimIdx;
    el.largeDataIndices = largeDataIndices;
    el.barWidth = barWidth;
    group.add(el);
    el.useStyle(data.getVisual('style'));
    // Stroke is rendered first to avoid overlapping with fill
    el.style.stroke = null;
    // Enable tooltip and user mouse/touch event handlers.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).seriesIndex = seriesModel.seriesIndex;
    if (!seriesModel.get('silent')) {
        el.on('mousedown', largePathUpdateDataIndex);
        el.on('mousemove', largePathUpdateDataIndex);
    }
    progressiveEls && progressiveEls.push(el);
}
// Use throttle to avoid frequently traverse to find dataIndex.
var largePathUpdateDataIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$throttle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["throttle"])(function(event) {
    var largePath = this;
    var dataIndex = largePathFindDataIndex(largePath, event.offsetX, event.offsetY);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(largePath).dataIndex = dataIndex >= 0 ? dataIndex : null;
}, 30, false);
function largePathFindDataIndex(largePath, x, y) {
    var baseDimIdx = largePath.baseDimIdx;
    var valueDimIdx = 1 - baseDimIdx;
    var points = largePath.shape.points;
    var largeDataIndices = largePath.largeDataIndices;
    var startPoint = [];
    var size = [];
    var barWidth = largePath.barWidth;
    for(var i = 0, len = points.length / 3; i < len; i++){
        var ii = i * 3;
        size[baseDimIdx] = barWidth;
        size[valueDimIdx] = points[ii + 2];
        startPoint[baseDimIdx] = points[ii + baseDimIdx];
        startPoint[valueDimIdx] = points[ii + valueDimIdx];
        if (size[valueDimIdx] < 0) {
            startPoint[valueDimIdx] += size[valueDimIdx];
            size[valueDimIdx] = -size[valueDimIdx];
        }
        if (x >= startPoint[0] && x <= startPoint[0] + size[0] && y >= startPoint[1] && y <= startPoint[1] + size[1]) {
            return largeDataIndices[i];
        }
    }
    return -1;
}
function createBackgroundShape(isHorizontalOrRadial, layout, coord) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coord, 'cartesian2d')) {
        var rectShape = layout;
        var coordLayout = coord.getArea();
        return {
            x: isHorizontalOrRadial ? rectShape.x : coordLayout.x,
            y: isHorizontalOrRadial ? coordLayout.y : rectShape.y,
            width: isHorizontalOrRadial ? rectShape.width : coordLayout.width,
            height: isHorizontalOrRadial ? coordLayout.height : rectShape.height
        };
    } else {
        var coordLayout = coord.getArea();
        var sectorShape = layout;
        return {
            cx: coordLayout.cx,
            cy: coordLayout.cy,
            r0: isHorizontalOrRadial ? coordLayout.r0 : sectorShape.r0,
            r: isHorizontalOrRadial ? coordLayout.r : sectorShape.r,
            startAngle: isHorizontalOrRadial ? sectorShape.startAngle : 0,
            endAngle: isHorizontalOrRadial ? sectorShape.endAngle : Math.PI * 2
        };
    }
}
function createBackgroundEl(coord, isHorizontalOrRadial, layout) {
    var ElementClz = coord.type === 'polar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sector$3e$__["Sector"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$shape$2f$Rect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rect$3e$__["Rect"];
    return new ElementClz({
        shape: createBackgroundShape(isHorizontalOrRadial, layout, coord),
        silent: true,
        z2: 0
    });
}
const __TURBOPACK__default__export__ = BarView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/BaseBarSeries.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js [app-ssr] (ecmascript)");
;
;
;
;
var BaseBarSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(BaseBarSeriesModel, _super);
    function BaseBarSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BaseBarSeriesModel.type;
        return _this;
    }
    BaseBarSeriesModel.prototype.getInitialData = function(option, ecModel) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true
        });
    };
    BaseBarSeriesModel.prototype.getMarkerPosition = function(value, dims, startingAtTick) {
        var coordSys = this.coordinateSystem;
        if (coordSys && coordSys.clampData) {
            // PENDING if clamp ?
            var clampData_1 = coordSys.clampData(value);
            var pt_1 = coordSys.dataToPoint(clampData_1);
            if (startingAtTick) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["each"])(coordSys.getAxes(), function(axis, idx) {
                    // If axis type is category, use tick coords instead
                    if (axis.type === 'category' && dims != null) {
                        var tickCoords = axis.getTicksCoords();
                        var alignTicksWithLabel = axis.getTickModel().get('alignWithLabel');
                        var targetTickId = clampData_1[idx];
                        // The index of rightmost tick of markArea is 1 larger than x1/y1 index
                        var isEnd = dims[idx] === 'x1' || dims[idx] === 'y1';
                        if (isEnd && !alignTicksWithLabel) {
                            targetTickId += 1;
                        }
                        // The only contains one tick, tickCoords is
                        // like [{coord: 0, tickValue: 0}, {coord: 0}]
                        // to the length should always be larger than 1
                        if (tickCoords.length < 2) {
                            return;
                        } else if (tickCoords.length === 2) {
                            // The left value and right value of the axis are
                            // the same. coord is 0 in both items. Use the max
                            // value of the axis as the coord
                            pt_1[idx] = axis.toGlobalCoord(axis.getExtent()[isEnd ? 1 : 0]);
                            return;
                        }
                        var leftCoord = void 0;
                        var coord = void 0;
                        var stepTickValue = 1;
                        for(var i = 0; i < tickCoords.length; i++){
                            var tickCoord = tickCoords[i].coord;
                            // The last item of tickCoords doesn't contain
                            // tickValue
                            var tickValue = i === tickCoords.length - 1 ? tickCoords[i - 1].tickValue + stepTickValue : tickCoords[i].tickValue;
                            if (tickValue === targetTickId) {
                                coord = tickCoord;
                                break;
                            } else if (tickValue < targetTickId) {
                                leftCoord = tickCoord;
                            } else if (leftCoord != null && tickValue > targetTickId) {
                                coord = (tickCoord + leftCoord) / 2;
                                break;
                            }
                            if (i === 1) {
                                // Here we assume the step of category axes is
                                // the same
                                stepTickValue = tickValue - tickCoords[0].tickValue;
                            }
                        }
                        if (coord == null) {
                            if (!leftCoord) {
                                // targetTickId is smaller than all tick ids in the
                                // visible area, use the leftmost tick coord
                                coord = tickCoords[0].coord;
                            } else if (leftCoord) {
                                // targetTickId is larger than all tick ids in the
                                // visible area, use the rightmost tick coord
                                coord = tickCoords[tickCoords.length - 1].coord;
                            }
                        }
                        pt_1[idx] = axis.toGlobalCoord(coord);
                    }
                });
            } else {
                var data = this.getData();
                var offset = data.getLayout('offset');
                var size = data.getLayout('size');
                var offsetIndex = coordSys.getBaseAxis().isHorizontal() ? 0 : 1;
                pt_1[offsetIndex] += offset + size / 2;
            }
            return pt_1;
        }
        return [
            NaN,
            NaN
        ];
    };
    BaseBarSeriesModel.type = 'series.__base_bar__';
    BaseBarSeriesModel.defaultOption = {
        // zlevel: 0,
        z: 2,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: true,
        // stack: null
        // Cartesian coordinate system
        // xAxisIndex: 0,
        // yAxisIndex: 0,
        barMinHeight: 0,
        barMinAngle: 0,
        // cursor: null,
        large: false,
        largeThreshold: 400,
        progressive: 3e3,
        progressiveChunkMode: 'mod'
    };
    return BaseBarSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].registerClass(BaseBarSeriesModel);
const __TURBOPACK__default__export__ = BaseBarSeriesModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/BarSeries.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/component.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/BaseBarSeries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
;
;
;
;
var BarSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(BarSeriesModel, _super);
    function BarSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = BarSeriesModel.type;
        return _this;
    }
    BarSeriesModel.prototype.getInitialData = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true,
            createInvertedIndices: !!this.get('realtimeSort', true) || null
        });
    };
    /**
   * @override
   */ BarSeriesModel.prototype.getProgressive = function() {
        // Do not support progressive in normal mode.
        return this.get('large') ? this.get('progressive') : false;
    };
    /**
   * @override
   */ BarSeriesModel.prototype.getProgressiveThreshold = function() {
        // Do not support progressive in normal mode.
        var progressiveThreshold = this.get('progressiveThreshold');
        var largeThreshold = this.get('largeThreshold');
        if (largeThreshold > progressiveThreshold) {
            progressiveThreshold = largeThreshold;
        }
        return progressiveThreshold;
    };
    BarSeriesModel.prototype.brushSelector = function(dataIndex, data, selectors) {
        return selectors.rect(data.getItemLayout(dataIndex));
    };
    BarSeriesModel.type = 'series.bar';
    BarSeriesModel.dependencies = [
        'grid',
        'polar'
    ];
    BarSeriesModel.defaultOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$component$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inheritDefaultOption"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].defaultOption, {
        // If clipped
        // Only available on cartesian2d
        clip: true,
        roundCap: false,
        showBackground: false,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
            borderColor: null,
            borderWidth: 0,
            borderType: 'solid',
            borderRadius: 0,
            shadowBlur: 0,
            shadowColor: null,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 1
        },
        select: {
            itemStyle: {
                borderColor: '#212121'
            }
        },
        realtimeSort: false
    });
    return BarSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BaseBarSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = BarSeriesModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/install.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/BarView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/BarSeries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/layout/barGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/dataSample.js [app-ssr] (ecmascript)");
;
;
;
;
;
function install(registers) {
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$BarSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout(registers.PRIORITY.VISUAL.LAYOUT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.curry(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layout"], 'bar'));
    // Do layout after other overall layout, which can prepare some information.
    registers.registerLayout(registers.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$barGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProgressiveLayout"])('bar'));
    // Down sample after filter
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('bar'));
    /**
   * @payload
   * @property {string} [componentType=series]
   * @property {number} [dx]
   * @property {number} [dy]
   * @property {number} [zoom]
   * @property {number} [originX]
   * @property {number} [originY]
   */ registers.registerAction({
        type: 'changeAxisOrder',
        event: 'changeAxisOrder',
        update: 'update'
    }, function(payload, ecModel) {
        var componentType = payload.componentType || 'series';
        ecModel.eachComponent({
            mainType: componentType,
            query: payload
        }, function(componentModel) {
            if (payload.sortInfo) {
                componentModel.axis.setCategorySortInfo(payload.sortInfo);
            }
        });
    });
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/install.js [app-ssr] (ecmascript) <export install as BarChart>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "BarChart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/bar/install.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Symbol.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
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
var Symbol = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(Symbol, _super);
    function Symbol(data, idx, seriesScope, opts) {
        var _this = _super.call(this) || this;
        _this.updateData(data, idx, seriesScope, opts);
        return _this;
    }
    Symbol.prototype._createSymbol = function(symbolType, data, idx, symbolSize, keepAspect) {
        // Remove paths created before
        this.removeAll();
        // let symbolPath = createSymbol(
        //     symbolType, -0.5, -0.5, 1, 1, color
        // );
        // If width/height are set too small (e.g., set to 1) on ios10
        // and macOS Sierra, a circle stroke become a rect, no matter what
        // the scale is set. So we set width/height as 2. See #4150.
        var symbolPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"])(symbolType, -1, -1, 2, 2, null, keepAspect);
        symbolPath.attr({
            z2: 100,
            culling: true,
            scaleX: symbolSize[0] / 2,
            scaleY: symbolSize[1] / 2
        });
        // Rewrite drift method
        symbolPath.drift = driftSymbol;
        this._symbolType = symbolType;
        this.add(symbolPath);
    };
    /**
   * Stop animation
   * @param {boolean} toLastFrame
   */ Symbol.prototype.stopSymbolAnimation = function(toLastFrame) {
        this.childAt(0).stopAnimation(null, toLastFrame);
    };
    Symbol.prototype.getSymbolType = function() {
        return this._symbolType;
    };
    /**
   * FIXME:
   * Caution: This method breaks the encapsulation of this module,
   * but it indeed brings convenience. So do not use the method
   * unless you detailedly know all the implements of `Symbol`,
   * especially animation.
   *
   * Get symbol path element.
   */ Symbol.prototype.getSymbolPath = function() {
        return this.childAt(0);
    };
    /**
   * Highlight symbol
   */ Symbol.prototype.highlight = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enterEmphasis"])(this.childAt(0));
    };
    /**
   * Downplay symbol
   */ Symbol.prototype.downplay = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leaveEmphasis"])(this.childAt(0));
    };
    /**
   * @param {number} zlevel
   * @param {number} z
   */ Symbol.prototype.setZ = function(zlevel, z) {
        var symbolPath = this.childAt(0);
        symbolPath.zlevel = zlevel;
        symbolPath.z = z;
    };
    Symbol.prototype.setDraggable = function(draggable, hasCursorOption) {
        var symbolPath = this.childAt(0);
        symbolPath.draggable = draggable;
        symbolPath.cursor = !hasCursorOption && draggable ? 'move' : symbolPath.cursor;
    };
    /**
   * Update symbol properties
   */ Symbol.prototype.updateData = function(data, idx, seriesScope, opts) {
        this.silent = false;
        var symbolType = data.getItemVisual(idx, 'symbol') || 'circle';
        var seriesModel = data.hostModel;
        var symbolSize = Symbol.getSymbolSize(data, idx);
        var isInit = symbolType !== this._symbolType;
        var disableAnimation = opts && opts.disableAnimation;
        if (isInit) {
            var keepAspect = data.getItemVisual(idx, 'symbolKeepAspect');
            this._createSymbol(symbolType, data, idx, symbolSize, keepAspect);
        } else {
            var symbolPath = this.childAt(0);
            symbolPath.silent = false;
            var target = {
                scaleX: symbolSize[0] / 2,
                scaleY: symbolSize[1] / 2
            };
            disableAnimation ? symbolPath.attr(target) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.updateProps(symbolPath, target, seriesModel, idx);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$animation$2f$basicTransition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveOldStyle"])(symbolPath);
        }
        this._updateCommon(data, idx, symbolSize, seriesScope, opts);
        if (isInit) {
            var symbolPath = this.childAt(0);
            if (!disableAnimation) {
                var target = {
                    scaleX: this._sizeX,
                    scaleY: this._sizeY,
                    style: {
                        // Always fadeIn. Because it has fadeOut animation when symbol is removed..
                        opacity: symbolPath.style.opacity
                    }
                };
                symbolPath.scaleX = symbolPath.scaleY = 0;
                symbolPath.style.opacity = 0;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.initProps(symbolPath, target, seriesModel, idx);
            }
        }
        if (disableAnimation) {
            // Must stop leave transition manually if don't call initProps or updateProps.
            this.childAt(0).stopAnimation('leave');
        }
    };
    Symbol.prototype._updateCommon = function(data, idx, symbolSize, seriesScope, opts) {
        var symbolPath = this.childAt(0);
        var seriesModel = data.hostModel;
        var emphasisItemStyle;
        var blurItemStyle;
        var selectItemStyle;
        var focus;
        var blurScope;
        var emphasisDisabled;
        var labelStatesModels;
        var hoverScale;
        var cursorStyle;
        if (seriesScope) {
            emphasisItemStyle = seriesScope.emphasisItemStyle;
            blurItemStyle = seriesScope.blurItemStyle;
            selectItemStyle = seriesScope.selectItemStyle;
            focus = seriesScope.focus;
            blurScope = seriesScope.blurScope;
            labelStatesModels = seriesScope.labelStatesModels;
            hoverScale = seriesScope.hoverScale;
            cursorStyle = seriesScope.cursorStyle;
            emphasisDisabled = seriesScope.emphasisDisabled;
        }
        if (!seriesScope || data.hasItemOption) {
            var itemModel = seriesScope && seriesScope.itemModel ? seriesScope.itemModel : data.getItemModel(idx);
            var emphasisModel = itemModel.getModel('emphasis');
            emphasisItemStyle = emphasisModel.getModel('itemStyle').getItemStyle();
            selectItemStyle = itemModel.getModel([
                'select',
                'itemStyle'
            ]).getItemStyle();
            blurItemStyle = itemModel.getModel([
                'blur',
                'itemStyle'
            ]).getItemStyle();
            focus = emphasisModel.get('focus');
            blurScope = emphasisModel.get('blurScope');
            emphasisDisabled = emphasisModel.get('disabled');
            labelStatesModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(itemModel);
            hoverScale = emphasisModel.getShallow('scale');
            cursorStyle = itemModel.getShallow('cursor');
        }
        var symbolRotate = data.getItemVisual(idx, 'symbolRotate');
        symbolPath.attr('rotation', (symbolRotate || 0) * Math.PI / 180 || 0);
        var symbolOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSymbolOffset"])(data.getItemVisual(idx, 'symbolOffset'), symbolSize);
        if (symbolOffset) {
            symbolPath.x = symbolOffset[0];
            symbolPath.y = symbolOffset[1];
        }
        cursorStyle && symbolPath.attr('cursor', cursorStyle);
        var symbolStyle = data.getItemVisual(idx, 'style');
        var visualColor = symbolStyle.fill;
        if (symbolPath instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
            var pathStyle = symbolPath.style;
            symbolPath.useStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({
                // TODO other properties like x, y ?
                image: pathStyle.image,
                x: pathStyle.x,
                y: pathStyle.y,
                width: pathStyle.width,
                height: pathStyle.height
            }, symbolStyle));
        } else {
            if (symbolPath.__isEmptyBrush) {
                // fill and stroke will be swapped if it's empty.
                // So we cloned a new style to avoid it affecting the original style in visual storage.
                // TODO Better implementation. No empty logic!
                symbolPath.useStyle((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extend"])({}, symbolStyle));
            } else {
                symbolPath.useStyle(symbolStyle);
            }
            // Disable decal because symbol scale will been applied on the decal.
            symbolPath.style.decal = null;
            symbolPath.setColor(visualColor, opts && opts.symbolInnerColor);
            symbolPath.style.strokeNoScale = true;
        }
        var liftZ = data.getItemVisual(idx, 'liftZ');
        var z2Origin = this._z2;
        if (liftZ != null) {
            if (z2Origin == null) {
                this._z2 = symbolPath.z2;
                symbolPath.z2 += liftZ;
            }
        } else if (z2Origin != null) {
            symbolPath.z2 = z2Origin;
            this._z2 = null;
        }
        var useNameLabel = opts && opts.useNameLabel;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelStyle"])(symbolPath, labelStatesModels, {
            labelFetcher: seriesModel,
            labelDataIndex: idx,
            defaultText: getLabelDefaultText,
            inheritColor: visualColor,
            defaultOpacity: symbolStyle.opacity
        });
        // Do not execute util needed.
        function getLabelDefaultText(idx) {
            return useNameLabel ? data.getName(idx) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultLabel"])(data, idx);
        }
        this._sizeX = symbolSize[0] / 2;
        this._sizeY = symbolSize[1] / 2;
        var emphasisState = symbolPath.ensureState('emphasis');
        emphasisState.style = emphasisItemStyle;
        symbolPath.ensureState('select').style = selectItemStyle;
        symbolPath.ensureState('blur').style = blurItemStyle;
        // null / undefined / true means to use default strategy.
        // 0 / false / negative number / NaN / Infinity means no scale.
        var scaleRatio = hoverScale == null || hoverScale === true ? Math.max(1.1, 3 / this._sizeY) : isFinite(hoverScale) && hoverScale > 0 ? +hoverScale : 1;
        // always set scale to allow resetting
        emphasisState.scaleX = this._sizeX * scaleRatio;
        emphasisState.scaleY = this._sizeY * scaleRatio;
        this.setSymbolScale(1);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(this, focus, blurScope, emphasisDisabled);
    };
    Symbol.prototype.setSymbolScale = function(scale) {
        this.scaleX = this.scaleY = scale;
    };
    Symbol.prototype.fadeOut = function(cb, seriesModel, opt) {
        var symbolPath = this.childAt(0);
        var dataIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(this).dataIndex;
        var animationOpt = opt && opt.animation;
        // Avoid mistaken hover when fading out
        this.silent = symbolPath.silent = true;
        // Not show text when animating
        if (opt && opt.fadeLabel) {
            var textContent = symbolPath.getTextContent();
            if (textContent) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.removeElement(textContent, {
                    style: {
                        opacity: 0
                    }
                }, seriesModel, {
                    dataIndex: dataIndex,
                    removeOpt: animationOpt,
                    cb: function() {
                        symbolPath.removeTextContent();
                    }
                });
            }
        } else {
            symbolPath.removeTextContent();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.removeElement(symbolPath, {
            style: {
                opacity: 0
            },
            scaleX: 0,
            scaleY: 0
        }, seriesModel, {
            dataIndex: dataIndex,
            cb: cb,
            removeOpt: animationOpt
        });
    };
    Symbol.getSymbolSize = function(data, idx) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeSymbolSize"])(data.getItemVisual(idx, 'symbolSize'));
    };
    return Symbol;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Group);
function driftSymbol(dx, dy) {
    this.parent.drift(dx, dy);
}
const __TURBOPACK__default__export__ = Symbol;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
;
;
;
;
function symbolNeedsDraw(data, point, idx, opt) {
    return point && !isNaN(point[0]) && !isNaN(point[1]) && !(opt.isIgnore && opt.isIgnore(idx)) && !(opt.clipShape && !opt.clipShape.contain(point[0], point[1])) && data.getItemVisual(idx, 'symbol') !== 'none';
}
function normalizeUpdateOpt(opt) {
    if (opt != null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(opt)) {
        opt = {
            isIgnore: opt
        };
    }
    return opt || {};
}
function makeSeriesScope(data) {
    var seriesModel = data.hostModel;
    var emphasisModel = seriesModel.getModel('emphasis');
    return {
        emphasisItemStyle: emphasisModel.getModel('itemStyle').getItemStyle(),
        blurItemStyle: seriesModel.getModel([
            'blur',
            'itemStyle'
        ]).getItemStyle(),
        selectItemStyle: seriesModel.getModel([
            'select',
            'itemStyle'
        ]).getItemStyle(),
        focus: emphasisModel.get('focus'),
        blurScope: emphasisModel.get('blurScope'),
        emphasisDisabled: emphasisModel.get('disabled'),
        hoverScale: emphasisModel.get('scale'),
        labelStatesModels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(seriesModel),
        cursorStyle: seriesModel.get('cursor')
    };
}
var SymbolDraw = /** @class */ function() {
    function SymbolDraw(SymbolCtor) {
        this.group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Group();
        this._SymbolCtor = SymbolCtor || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    }
    /**
   * Update symbols draw by new data
   */ SymbolDraw.prototype.updateData = function(data, opt) {
        // Remove progressive els.
        this._progressiveEls = null;
        opt = normalizeUpdateOpt(opt);
        var group = this.group;
        var seriesModel = data.hostModel;
        var oldData = this._data;
        var SymbolCtor = this._SymbolCtor;
        var disableAnimation = opt.disableAnimation;
        var seriesScope = makeSeriesScope(data);
        var symbolUpdateOpt = {
            disableAnimation: disableAnimation
        };
        var getSymbolPoint = opt.getSymbolPoint || function(idx) {
            return data.getItemLayout(idx);
        };
        // There is no oldLineData only when first rendering or switching from
        // stream mode to normal mode, where previous elements should be removed.
        if (!oldData) {
            group.removeAll();
        }
        data.diff(oldData).add(function(newIdx) {
            var point = getSymbolPoint(newIdx);
            if (symbolNeedsDraw(data, point, newIdx, opt)) {
                var symbolEl = new SymbolCtor(data, newIdx, seriesScope, symbolUpdateOpt);
                symbolEl.setPosition(point);
                data.setItemGraphicEl(newIdx, symbolEl);
                group.add(symbolEl);
            }
        }).update(function(newIdx, oldIdx) {
            var symbolEl = oldData.getItemGraphicEl(oldIdx);
            var point = getSymbolPoint(newIdx);
            if (!symbolNeedsDraw(data, point, newIdx, opt)) {
                group.remove(symbolEl);
                return;
            }
            var newSymbolType = data.getItemVisual(newIdx, 'symbol') || 'circle';
            var oldSymbolType = symbolEl && symbolEl.getSymbolType && symbolEl.getSymbolType();
            if (!symbolEl || oldSymbolType && oldSymbolType !== newSymbolType) {
                group.remove(symbolEl);
                symbolEl = new SymbolCtor(data, newIdx, seriesScope, symbolUpdateOpt);
                symbolEl.setPosition(point);
            } else {
                symbolEl.updateData(data, newIdx, seriesScope, symbolUpdateOpt);
                var target = {
                    x: point[0],
                    y: point[1]
                };
                disableAnimation ? symbolEl.attr(target) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.updateProps(symbolEl, target, seriesModel);
            }
            // Add back
            group.add(symbolEl);
            data.setItemGraphicEl(newIdx, symbolEl);
        }).remove(function(oldIdx) {
            var el = oldData.getItemGraphicEl(oldIdx);
            el && el.fadeOut(function() {
                group.remove(el);
            }, seriesModel);
        }).execute();
        this._getSymbolPoint = getSymbolPoint;
        this._data = data;
    };
    ;
    SymbolDraw.prototype.updateLayout = function() {
        var _this = this;
        var data = this._data;
        if (data) {
            // Not use animation
            data.eachItemGraphicEl(function(el, idx) {
                var point = _this._getSymbolPoint(idx);
                el.setPosition(point);
                el.markRedraw();
            });
        }
    };
    ;
    SymbolDraw.prototype.incrementalPrepareUpdate = function(data) {
        this._seriesScope = makeSeriesScope(data);
        this._data = null;
        this.group.removeAll();
    };
    ;
    /**
   * Update symbols draw by new data
   */ SymbolDraw.prototype.incrementalUpdate = function(taskParams, data, opt) {
        // Clear
        this._progressiveEls = [];
        opt = normalizeUpdateOpt(opt);
        function updateIncrementalAndHover(el) {
            if (!el.isGroup) {
                el.incremental = true;
                el.ensureState('emphasis').hoverLayer = true;
            }
        }
        for(var idx = taskParams.start; idx < taskParams.end; idx++){
            var point = data.getItemLayout(idx);
            if (symbolNeedsDraw(data, point, idx, opt)) {
                var el = new this._SymbolCtor(data, idx, this._seriesScope);
                el.traverse(updateIncrementalAndHover);
                el.setPosition(point);
                this.group.add(el);
                data.setItemGraphicEl(idx, el);
                this._progressiveEls.push(el);
            }
        }
    };
    ;
    SymbolDraw.prototype.eachRendered = function(cb) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.traverseElements(this._progressiveEls || this.group, cb);
    };
    SymbolDraw.prototype.remove = function(enableAnimation) {
        var group = this.group;
        var data = this._data;
        // Incremental model do not have this._data.
        if (data && enableAnimation) {
            data.eachItemGraphicEl(function(el) {
                el.fadeOut(function() {
                    group.remove(el);
                }, data.hostModel);
            });
        } else {
            group.removeAll();
        }
    };
    ;
    return SymbolDraw;
}();
const __TURBOPACK__default__export__ = SymbolDraw;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/helper.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
    "getStackedOnPoint": (()=>getStackedOnPoint),
    "prepareDataCoordInfo": (()=>prepareDataCoordInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataStackHelper.js [app-ssr] (ecmascript)");
;
;
function prepareDataCoordInfo(coordSys, data, valueOrigin) {
    var baseAxis = coordSys.getBaseAxis();
    var valueAxis = coordSys.getOtherAxis(baseAxis);
    var valueStart = getValueStart(valueAxis, valueOrigin);
    var baseAxisDim = baseAxis.dim;
    var valueAxisDim = valueAxis.dim;
    var valueDim = data.mapDimension(valueAxisDim);
    var baseDim = data.mapDimension(baseAxisDim);
    var baseDataOffset = valueAxisDim === 'x' || valueAxisDim === 'radius' ? 1 : 0;
    var dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["map"])(coordSys.dimensions, function(coordDim) {
        return data.mapDimension(coordDim);
    });
    var stacked = false;
    var stackResultDim = data.getCalculationInfo('stackResultDimension');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, dims[0])) {
        // jshint ignore:line
        stacked = true;
        dims[0] = stackResultDim;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$data$2f$helper$2f$dataStackHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDimensionStacked"])(data, dims[1])) {
        // jshint ignore:line
        stacked = true;
        dims[1] = stackResultDim;
    }
    return {
        dataDimsForPoint: dims,
        valueStart: valueStart,
        valueAxisDim: valueAxisDim,
        baseAxisDim: baseAxisDim,
        stacked: !!stacked,
        valueDim: valueDim,
        baseDim: baseDim,
        baseDataOffset: baseDataOffset,
        stackedOverDimension: data.getCalculationInfo('stackedOverDimension')
    };
}
function getValueStart(valueAxis, valueOrigin) {
    var valueStart = 0;
    var extent = valueAxis.scale.getExtent();
    if (valueOrigin === 'start') {
        valueStart = extent[0];
    } else if (valueOrigin === 'end') {
        valueStart = extent[1];
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(valueOrigin) && !isNaN(valueOrigin)) {
        valueStart = valueOrigin;
    } else {
        // Both positive
        if (extent[0] > 0) {
            valueStart = extent[0];
        } else if (extent[1] < 0) {
            valueStart = extent[1];
        }
    // If is one positive, and one negative, onZero shall be true
    }
    return valueStart;
}
function getStackedOnPoint(dataCoordInfo, coordSys, data, idx) {
    var value = NaN;
    if (dataCoordInfo.stacked) {
        value = data.get(data.getCalculationInfo('stackedOverDimension'), idx);
    }
    if (isNaN(value)) {
        value = dataCoordInfo.valueStart;
    }
    var baseDataOffset = dataCoordInfo.baseDataOffset;
    var stackedData = [];
    stackedData[baseDataOffset] = data.get(dataCoordInfo.baseDim, idx);
    stackedData[1 - baseDataOffset] = value;
    return coordSys.dataToPoint(stackedData);
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/poly.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
    "ECPolygon": (()=>ECPolygon),
    "ECPolyline": (()=>ECPolyline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/PathProxy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/curve.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
// Poly path support NaN point
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js [app-ssr] (ecmascript)");
;
;
;
;
var mathMin = Math.min;
var mathMax = Math.max;
function isPointNull(x, y) {
    return isNaN(x) || isNaN(y);
}
/**
 * Draw smoothed line in non-monotone, in may cause undesired curve in extreme
 * situations. This should be used when points are non-monotone neither in x or
 * y dimension.
 */ function drawSegment(ctx, points, start, segLen, allLen, dir, smooth, smoothMonotone, connectNulls) {
    var prevX;
    var prevY;
    var cpx0;
    var cpy0;
    var cpx1;
    var cpy1;
    var idx = start;
    var k = 0;
    for(; k < segLen; k++){
        var x = points[idx * 2];
        var y = points[idx * 2 + 1];
        if (idx >= allLen || idx < 0) {
            break;
        }
        if (isPointNull(x, y)) {
            if (connectNulls) {
                idx += dir;
                continue;
            }
            break;
        }
        if (idx === start) {
            ctx[dir > 0 ? 'moveTo' : 'lineTo'](x, y);
            cpx0 = x;
            cpy0 = y;
        } else {
            var dx = x - prevX;
            var dy = y - prevY;
            // Ignore tiny segment.
            if (dx * dx + dy * dy < 0.5) {
                idx += dir;
                continue;
            }
            if (smooth > 0) {
                var nextIdx = idx + dir;
                var nextX = points[nextIdx * 2];
                var nextY = points[nextIdx * 2 + 1];
                // Ignore duplicate point
                while(nextX === x && nextY === y && k < segLen){
                    k++;
                    nextIdx += dir;
                    idx += dir;
                    nextX = points[nextIdx * 2];
                    nextY = points[nextIdx * 2 + 1];
                    x = points[idx * 2];
                    y = points[idx * 2 + 1];
                    dx = x - prevX;
                    dy = y - prevY;
                }
                var tmpK = k + 1;
                if (connectNulls) {
                    // Find next point not null
                    while(isPointNull(nextX, nextY) && tmpK < segLen){
                        tmpK++;
                        nextIdx += dir;
                        nextX = points[nextIdx * 2];
                        nextY = points[nextIdx * 2 + 1];
                    }
                }
                var ratioNextSeg = 0.5;
                var vx = 0;
                var vy = 0;
                var nextCpx0 = void 0;
                var nextCpy0 = void 0;
                // Is last point
                if (tmpK >= segLen || isPointNull(nextX, nextY)) {
                    cpx1 = x;
                    cpy1 = y;
                } else {
                    vx = nextX - prevX;
                    vy = nextY - prevY;
                    var dx0 = x - prevX;
                    var dx1 = nextX - x;
                    var dy0 = y - prevY;
                    var dy1 = nextY - y;
                    var lenPrevSeg = void 0;
                    var lenNextSeg = void 0;
                    if (smoothMonotone === 'x') {
                        lenPrevSeg = Math.abs(dx0);
                        lenNextSeg = Math.abs(dx1);
                        var dir_1 = vx > 0 ? 1 : -1;
                        cpx1 = x - dir_1 * lenPrevSeg * smooth;
                        cpy1 = y;
                        nextCpx0 = x + dir_1 * lenNextSeg * smooth;
                        nextCpy0 = y;
                    } else if (smoothMonotone === 'y') {
                        lenPrevSeg = Math.abs(dy0);
                        lenNextSeg = Math.abs(dy1);
                        var dir_2 = vy > 0 ? 1 : -1;
                        cpx1 = x;
                        cpy1 = y - dir_2 * lenPrevSeg * smooth;
                        nextCpx0 = x;
                        nextCpy0 = y + dir_2 * lenNextSeg * smooth;
                    } else {
                        lenPrevSeg = Math.sqrt(dx0 * dx0 + dy0 * dy0);
                        lenNextSeg = Math.sqrt(dx1 * dx1 + dy1 * dy1);
                        // Use ratio of seg length
                        ratioNextSeg = lenNextSeg / (lenNextSeg + lenPrevSeg);
                        cpx1 = x - vx * smooth * (1 - ratioNextSeg);
                        cpy1 = y - vy * smooth * (1 - ratioNextSeg);
                        // cp0 of next segment
                        nextCpx0 = x + vx * smooth * ratioNextSeg;
                        nextCpy0 = y + vy * smooth * ratioNextSeg;
                        // Smooth constraint between point and next point.
                        // Avoid exceeding extreme after smoothing.
                        nextCpx0 = mathMin(nextCpx0, mathMax(nextX, x));
                        nextCpy0 = mathMin(nextCpy0, mathMax(nextY, y));
                        nextCpx0 = mathMax(nextCpx0, mathMin(nextX, x));
                        nextCpy0 = mathMax(nextCpy0, mathMin(nextY, y));
                        // Reclaculate cp1 based on the adjusted cp0 of next seg.
                        vx = nextCpx0 - x;
                        vy = nextCpy0 - y;
                        cpx1 = x - vx * lenPrevSeg / lenNextSeg;
                        cpy1 = y - vy * lenPrevSeg / lenNextSeg;
                        // Smooth constraint between point and prev point.
                        // Avoid exceeding extreme after smoothing.
                        cpx1 = mathMin(cpx1, mathMax(prevX, x));
                        cpy1 = mathMin(cpy1, mathMax(prevY, y));
                        cpx1 = mathMax(cpx1, mathMin(prevX, x));
                        cpy1 = mathMax(cpy1, mathMin(prevY, y));
                        // Adjust next cp0 again.
                        vx = x - cpx1;
                        vy = y - cpy1;
                        nextCpx0 = x + vx * lenNextSeg / lenPrevSeg;
                        nextCpy0 = y + vy * lenNextSeg / lenPrevSeg;
                    }
                }
                ctx.bezierCurveTo(cpx0, cpy0, cpx1, cpy1, x, y);
                cpx0 = nextCpx0;
                cpy0 = nextCpy0;
            } else {
                ctx.lineTo(x, y);
            }
        }
        prevX = x;
        prevY = y;
        idx += dir;
    }
    return k;
}
var ECPolylineShape = /** @class */ function() {
    function ECPolylineShape() {
        this.smooth = 0;
        this.smoothConstraint = true;
    }
    return ECPolylineShape;
}();
var ECPolyline = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ECPolyline, _super);
    function ECPolyline(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'ec-polyline';
        return _this;
    }
    ECPolyline.prototype.getDefaultStyle = function() {
        return {
            stroke: '#000',
            fill: null
        };
    };
    ECPolyline.prototype.getDefaultShape = function() {
        return new ECPolylineShape();
    };
    ECPolyline.prototype.buildPath = function(ctx, shape) {
        var points = shape.points;
        var i = 0;
        var len = points.length / 2;
        // const result = getBoundingBox(points, shape.smoothConstraint);
        if (shape.connectNulls) {
            // Must remove first and last null values avoid draw error in polygon
            for(; len > 0; len--){
                if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
                    break;
                }
            }
            for(; i < len; i++){
                if (!isPointNull(points[i * 2], points[i * 2 + 1])) {
                    break;
                }
            }
        }
        while(i < len){
            i += drawSegment(ctx, points, i, len, len, 1, shape.smooth, shape.smoothMonotone, shape.connectNulls) + 1;
        }
    };
    ECPolyline.prototype.getPointOn = function(xOrY, dim) {
        if (!this.path) {
            this.createPathProxy();
            this.buildPath(this.path, this.shape);
        }
        var path = this.path;
        var data = path.data;
        var CMD = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$PathProxy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].CMD;
        var x0;
        var y0;
        var isDimX = dim === 'x';
        var roots = [];
        for(var i = 0; i < data.length;){
            var cmd = data[i++];
            var x = void 0;
            var y = void 0;
            var x2 = void 0;
            var y2 = void 0;
            var x3 = void 0;
            var y3 = void 0;
            var t = void 0;
            switch(cmd){
                case CMD.M:
                    x0 = data[i++];
                    y0 = data[i++];
                    break;
                case CMD.L:
                    x = data[i++];
                    y = data[i++];
                    t = isDimX ? (xOrY - x0) / (x - x0) : (xOrY - y0) / (y - y0);
                    if (t <= 1 && t >= 0) {
                        var val = isDimX ? (y - y0) * t + y0 : (x - x0) * t + x0;
                        return isDimX ? [
                            xOrY,
                            val
                        ] : [
                            val,
                            xOrY
                        ];
                    }
                    x0 = x;
                    y0 = y;
                    break;
                case CMD.C:
                    x = data[i++];
                    y = data[i++];
                    x2 = data[i++];
                    y2 = data[i++];
                    x3 = data[i++];
                    y3 = data[i++];
                    var nRoot = isDimX ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicRootAt"])(x0, x, x2, x3, xOrY, roots) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicRootAt"])(y0, y, y2, y3, xOrY, roots);
                    if (nRoot > 0) {
                        for(var i_1 = 0; i_1 < nRoot; i_1++){
                            var t_1 = roots[i_1];
                            if (t_1 <= 1 && t_1 >= 0) {
                                var val = isDimX ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicAt"])(y0, y, y2, y3, t_1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$curve$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicAt"])(x0, x, x2, x3, t_1);
                                return isDimX ? [
                                    xOrY,
                                    val
                                ] : [
                                    val,
                                    xOrY
                                ];
                            }
                        }
                    }
                    x0 = x3;
                    y0 = y3;
                    break;
            }
        }
    };
    return ECPolyline;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
var ECPolygonShape = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ECPolygonShape, _super);
    function ECPolygonShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ECPolygonShape;
}(ECPolylineShape);
var ECPolygon = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(ECPolygon, _super);
    function ECPolygon(opts) {
        var _this = _super.call(this, opts) || this;
        _this.type = 'ec-polygon';
        return _this;
    }
    ECPolygon.prototype.getDefaultShape = function() {
        return new ECPolygonShape();
    };
    ECPolygon.prototype.buildPath = function(ctx, shape) {
        var points = shape.points;
        var stackedOnPoints = shape.stackedOnPoints;
        var i = 0;
        var len = points.length / 2;
        var smoothMonotone = shape.smoothMonotone;
        if (shape.connectNulls) {
            // Must remove first and last null values avoid draw error in polygon
            for(; len > 0; len--){
                if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
                    break;
                }
            }
            for(; i < len; i++){
                if (!isPointNull(points[i * 2], points[i * 2 + 1])) {
                    break;
                }
            }
        }
        while(i < len){
            var k = drawSegment(ctx, points, i, len, len, 1, shape.smooth, smoothMonotone, shape.connectNulls);
            drawSegment(ctx, stackedOnPoints, i + k - 1, k, len, -1, shape.stackedOnSmooth, smoothMonotone, shape.connectNulls);
            i += k + 1;
            ctx.closePath();
        }
    };
    return ECPolygon;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/lineAnimationDiff.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
    "default": (()=>lineAnimationDiff)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/vendor.js [app-ssr] (ecmascript)");
;
;
function diffData(oldData, newData) {
    var diffResult = [];
    newData.diff(oldData).add(function(idx) {
        diffResult.push({
            cmd: '+',
            idx: idx
        });
    }).update(function(newIdx, oldIdx) {
        diffResult.push({
            cmd: '=',
            idx: oldIdx,
            idx1: newIdx
        });
    }).remove(function(idx) {
        diffResult.push({
            cmd: '-',
            idx: idx
        });
    }).execute();
    return diffResult;
}
function lineAnimationDiff(oldData, newData, oldStackedOnPoints, newStackedOnPoints, oldCoordSys, newCoordSys, oldValueOrigin, newValueOrigin) {
    var diff = diffData(oldData, newData);
    // let newIdList = newData.mapArray(newData.getId);
    // let oldIdList = oldData.mapArray(oldData.getId);
    // convertToIntId(newIdList, oldIdList);
    // // FIXME One data ?
    // diff = arrayDiff(oldIdList, newIdList);
    var currPoints = [];
    var nextPoints = [];
    // Points for stacking base line
    var currStackedPoints = [];
    var nextStackedPoints = [];
    var status = [];
    var sortedIndices = [];
    var rawIndices = [];
    var newDataOldCoordInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareDataCoordInfo"])(oldCoordSys, newData, oldValueOrigin);
    // const oldDataNewCoordInfo = prepareDataCoordInfo(newCoordSys, oldData, newValueOrigin);
    var oldPoints = oldData.getLayout('points') || [];
    var newPoints = newData.getLayout('points') || [];
    for(var i = 0; i < diff.length; i++){
        var diffItem = diff[i];
        var pointAdded = true;
        var oldIdx2 = void 0;
        var newIdx2 = void 0;
        // FIXME, animation is not so perfect when dataZoom window moves fast
        // Which is in case remvoing or add more than one data in the tail or head
        switch(diffItem.cmd){
            case '=':
                oldIdx2 = diffItem.idx * 2;
                newIdx2 = diffItem.idx1 * 2;
                var currentX = oldPoints[oldIdx2];
                var currentY = oldPoints[oldIdx2 + 1];
                var nextX = newPoints[newIdx2];
                var nextY = newPoints[newIdx2 + 1];
                // If previous data is NaN, use next point directly
                if (isNaN(currentX) || isNaN(currentY)) {
                    currentX = nextX;
                    currentY = nextY;
                }
                currPoints.push(currentX, currentY);
                nextPoints.push(nextX, nextY);
                currStackedPoints.push(oldStackedOnPoints[oldIdx2], oldStackedOnPoints[oldIdx2 + 1]);
                nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
                rawIndices.push(newData.getRawIndex(diffItem.idx1));
                break;
            case '+':
                var newIdx = diffItem.idx;
                var newDataDimsForPoint = newDataOldCoordInfo.dataDimsForPoint;
                var oldPt = oldCoordSys.dataToPoint([
                    newData.get(newDataDimsForPoint[0], newIdx),
                    newData.get(newDataDimsForPoint[1], newIdx)
                ]);
                newIdx2 = newIdx * 2;
                currPoints.push(oldPt[0], oldPt[1]);
                nextPoints.push(newPoints[newIdx2], newPoints[newIdx2 + 1]);
                var stackedOnPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStackedOnPoint"])(newDataOldCoordInfo, oldCoordSys, newData, newIdx);
                currStackedPoints.push(stackedOnPoint[0], stackedOnPoint[1]);
                nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
                rawIndices.push(newData.getRawIndex(newIdx));
                break;
            case '-':
                pointAdded = false;
        }
        // Original indices
        if (pointAdded) {
            status.push(diffItem);
            sortedIndices.push(sortedIndices.length);
        }
    }
    // Diff result may be crossed if all items are changed
    // Sort by data index
    sortedIndices.sort(function(a, b) {
        return rawIndices[a] - rawIndices[b];
    });
    var len = currPoints.length;
    var sortedCurrPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedNextPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedCurrStackedPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedNextStackedPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFloat32Array"])(len);
    var sortedStatus = [];
    for(var i = 0; i < sortedIndices.length; i++){
        var idx = sortedIndices[i];
        var i2 = i * 2;
        var idx2 = idx * 2;
        sortedCurrPoints[i2] = currPoints[idx2];
        sortedCurrPoints[i2 + 1] = currPoints[idx2 + 1];
        sortedNextPoints[i2] = nextPoints[idx2];
        sortedNextPoints[i2 + 1] = nextPoints[idx2 + 1];
        sortedCurrStackedPoints[i2] = currStackedPoints[idx2];
        sortedCurrStackedPoints[i2 + 1] = currStackedPoints[idx2 + 1];
        sortedNextStackedPoints[i2] = nextStackedPoints[idx2];
        sortedNextStackedPoints[i2 + 1] = nextStackedPoints[idx2 + 1];
        sortedStatus[i] = status[idx];
    }
    return {
        current: sortedCurrPoints,
        next: sortedNextPoints,
        stackedOnCurrent: sortedCurrStackedPoints,
        stackedOnNext: sortedNextStackedPoints,
        status: sortedStatus
    };
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/LineView.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js [app-ssr] (ecmascript)");
// FIXME step not support polar
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$poly$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/poly.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/labelHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$lineAnimationDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/lineAnimationDiff.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/vendor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/CoordinateSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js [app-ssr] (ecmascript)");
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
function isPointsSame(points1, points2) {
    if (points1.length !== points2.length) {
        return;
    }
    for(var i = 0; i < points1.length; i++){
        if (points1[i] !== points2[i]) {
            return;
        }
    }
    return true;
}
function bboxFromPoints(points) {
    var minX = Infinity;
    var minY = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    for(var i = 0; i < points.length;){
        var x = points[i++];
        var y = points[i++];
        if (!isNaN(x)) {
            minX = Math.min(x, minX);
            maxX = Math.max(x, maxX);
        }
        if (!isNaN(y)) {
            minY = Math.min(y, minY);
            maxY = Math.max(y, maxY);
        }
    }
    return [
        [
            minX,
            minY
        ],
        [
            maxX,
            maxY
        ]
    ];
}
function getBoundingDiff(points1, points2) {
    var _a = bboxFromPoints(points1), min1 = _a[0], max1 = _a[1];
    var _b = bboxFromPoints(points2), min2 = _b[0], max2 = _b[1];
    // Get a max value from each corner of two boundings.
    return Math.max(Math.abs(min1[0] - min2[0]), Math.abs(min1[1] - min2[1]), Math.abs(max1[0] - max2[0]), Math.abs(max1[1] - max2[1]));
}
function getSmooth(smooth) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isNumber(smooth) ? smooth : smooth ? 0.5 : 0;
}
function getStackedOnPoints(coordSys, data, dataCoordInfo) {
    if (!dataCoordInfo.valueDim) {
        return [];
    }
    var len = data.count();
    var points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$vendor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFloat32Array"])(len * 2);
    for(var idx = 0; idx < len; idx++){
        var pt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStackedOnPoint"])(dataCoordInfo, coordSys, data, idx);
        points[idx * 2] = pt[0];
        points[idx * 2 + 1] = pt[1];
    }
    return points;
}
/**
 * Filter the null data and extend data for step considering `stepTurnAt`
 *
 * @param points data to convert, that may containing null
 * @param basePoints base data to reference, used only for areaStyle points
 * @param coordSys coordinate system
 * @param stepTurnAt 'start' | 'end' | 'middle' | true
 * @param connectNulls whether to connect nulls
 * @returns converted point positions
 */ function turnPointsIntoStep(points, basePoints, coordSys, stepTurnAt, connectNulls) {
    var baseAxis = coordSys.getBaseAxis();
    var baseIndex = baseAxis.dim === 'x' || baseAxis.dim === 'radius' ? 0 : 1;
    var stepPoints = [];
    var i = 0;
    var stepPt = [];
    var pt = [];
    var nextPt = [];
    var filteredPoints = [];
    if (connectNulls) {
        for(i = 0; i < points.length; i += 2){
            /**
       * For areaStyle of stepped lines, `stackedOnPoints` should be
       * filtered the same as `points` so that the base axis values
       * should stay the same as the lines above. See #20021
       */ var reference = basePoints || points;
            if (!isNaN(reference[i]) && !isNaN(reference[i + 1])) {
                filteredPoints.push(points[i], points[i + 1]);
            }
        }
        points = filteredPoints;
    }
    for(i = 0; i < points.length - 2; i += 2){
        nextPt[0] = points[i + 2];
        nextPt[1] = points[i + 3];
        pt[0] = points[i];
        pt[1] = points[i + 1];
        stepPoints.push(pt[0], pt[1]);
        switch(stepTurnAt){
            case 'end':
                stepPt[baseIndex] = nextPt[baseIndex];
                stepPt[1 - baseIndex] = pt[1 - baseIndex];
                stepPoints.push(stepPt[0], stepPt[1]);
                break;
            case 'middle':
                var middle = (pt[baseIndex] + nextPt[baseIndex]) / 2;
                var stepPt2 = [];
                stepPt[baseIndex] = stepPt2[baseIndex] = middle;
                stepPt[1 - baseIndex] = pt[1 - baseIndex];
                stepPt2[1 - baseIndex] = nextPt[1 - baseIndex];
                stepPoints.push(stepPt[0], stepPt[1]);
                stepPoints.push(stepPt2[0], stepPt2[1]);
                break;
            default:
                // default is start
                stepPt[baseIndex] = pt[baseIndex];
                stepPt[1 - baseIndex] = nextPt[1 - baseIndex];
                stepPoints.push(stepPt[0], stepPt[1]);
        }
    }
    // Last points
    stepPoints.push(points[i++], points[i++]);
    return stepPoints;
}
/**
 * Clip color stops to edge. Avoid creating too large gradients.
 * Which may lead to blurry when GPU acceleration is enabled. See #15680
 *
 * The stops has been sorted from small to large.
 */ function clipColorStops(colorStops, maxSize) {
    var newColorStops = [];
    var len = colorStops.length;
    // coord will always < 0 in prevOutOfRangeColorStop.
    var prevOutOfRangeColorStop;
    var prevInRangeColorStop;
    function lerpStop(stop0, stop1, clippedCoord) {
        var coord0 = stop0.coord;
        var p = (clippedCoord - coord0) / (stop1.coord - coord0);
        var color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$tool$2f$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lerp"])(p, [
            stop0.color,
            stop1.color
        ]);
        return {
            coord: clippedCoord,
            color: color
        };
    }
    for(var i = 0; i < len; i++){
        var stop_1 = colorStops[i];
        var coord = stop_1.coord;
        if (coord < 0) {
            prevOutOfRangeColorStop = stop_1;
        } else if (coord > maxSize) {
            if (prevInRangeColorStop) {
                newColorStops.push(lerpStop(prevInRangeColorStop, stop_1, maxSize));
            } else if (prevOutOfRangeColorStop) {
                // If there are two stops and coord range is between these two stops
                newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0), lerpStop(prevOutOfRangeColorStop, stop_1, maxSize));
            }
            break;
        } else {
            if (prevOutOfRangeColorStop) {
                newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0));
                // Reset
                prevOutOfRangeColorStop = null;
            }
            newColorStops.push(stop_1);
            prevInRangeColorStop = stop_1;
        }
    }
    return newColorStops;
}
function getVisualGradient(data, coordSys, api) {
    var visualMetaList = data.getVisual('visualMeta');
    if (!visualMetaList || !visualMetaList.length || !data.count()) {
        // When data.count() is 0, gradient range can not be calculated.
        return;
    }
    if (coordSys.type !== 'cartesian2d') {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Visual map on line style is only supported on cartesian2d.');
        }
        return;
    }
    var coordDim;
    var visualMeta;
    for(var i = visualMetaList.length - 1; i >= 0; i--){
        var dimInfo = data.getDimensionInfo(visualMetaList[i].dimension);
        coordDim = dimInfo && dimInfo.coordDim;
        // Can only be x or y
        if (coordDim === 'x' || coordDim === 'y') {
            visualMeta = visualMetaList[i];
            break;
        }
    }
    if (!visualMeta) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Visual map on line style only support x or y dimension.');
        }
        return;
    }
    // If the area to be rendered is bigger than area defined by LinearGradient,
    // the canvas spec prescribes that the color of the first stop and the last
    // stop should be used. But if two stops are added at offset 0, in effect
    // browsers use the color of the second stop to render area outside
    // LinearGradient. So we can only infinitesimally extend area defined in
    // LinearGradient to render `outerColors`.
    var axis = coordSys.getAxis(coordDim);
    // dataToCoord mapping may not be linear, but must be monotonic.
    var colorStops = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.map(visualMeta.stops, function(stop) {
        // offset will be calculated later.
        return {
            coord: axis.toGlobalCoord(axis.dataToCoord(stop.value)),
            color: stop.color
        };
    });
    var stopLen = colorStops.length;
    var outerColors = visualMeta.outerColors.slice();
    if (stopLen && colorStops[0].coord > colorStops[stopLen - 1].coord) {
        colorStops.reverse();
        outerColors.reverse();
    }
    var colorStopsInRange = clipColorStops(colorStops, coordDim === 'x' ? api.getWidth() : api.getHeight());
    var inRangeStopLen = colorStopsInRange.length;
    if (!inRangeStopLen && stopLen) {
        // All stops are out of range. All will be the same color.
        return colorStops[0].coord < 0 ? outerColors[1] ? outerColors[1] : colorStops[stopLen - 1].color : outerColors[0] ? outerColors[0] : colorStops[0].color;
    }
    var tinyExtent = 10; // Arbitrary value: 10px
    var minCoord = colorStopsInRange[0].coord - tinyExtent;
    var maxCoord = colorStopsInRange[inRangeStopLen - 1].coord + tinyExtent;
    var coordSpan = maxCoord - minCoord;
    if (coordSpan < 1e-3) {
        return 'transparent';
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(colorStopsInRange, function(stop) {
        stop.offset = (stop.coord - minCoord) / coordSpan;
    });
    colorStopsInRange.push({
        // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
        offset: inRangeStopLen ? colorStopsInRange[inRangeStopLen - 1].offset : 0.5,
        color: outerColors[1] || 'transparent'
    });
    colorStopsInRange.unshift({
        offset: inRangeStopLen ? colorStopsInRange[0].offset : 0.5,
        color: outerColors[0] || 'transparent'
    });
    var gradient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.LinearGradient(0, 0, 0, 0, colorStopsInRange, true);
    gradient[coordDim] = minCoord;
    gradient[coordDim + '2'] = maxCoord;
    return gradient;
}
function getIsIgnoreFunc(seriesModel, data, coordSys) {
    var showAllSymbol = seriesModel.get('showAllSymbol');
    var isAuto = showAllSymbol === 'auto';
    if (showAllSymbol && !isAuto) {
        return;
    }
    var categoryAxis = coordSys.getAxesByScale('ordinal')[0];
    if (!categoryAxis) {
        return;
    }
    // Note that category label interval strategy might bring some weird effect
    // in some scenario: users may wonder why some of the symbols are not
    // displayed. So we show all symbols as possible as we can.
    if (isAuto && canShowAllSymbolForCategory(categoryAxis, data)) {
        return;
    }
    // Otherwise follow the label interval strategy on category axis.
    var categoryDataDim = data.mapDimension(categoryAxis.dim);
    var labelMap = {};
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.each(categoryAxis.getViewLabels(), function(labelItem) {
        var ordinalNumber = categoryAxis.scale.getRawOrdinalNumber(labelItem.tickValue);
        labelMap[ordinalNumber] = 1;
    });
    return function(dataIndex) {
        return !labelMap.hasOwnProperty(data.get(categoryDataDim, dataIndex));
    };
}
function canShowAllSymbolForCategory(categoryAxis, data) {
    // In most cases, line is monotonous on category axis, and the label size
    // is close with each other. So we check the symbol size and some of the
    // label size alone with the category axis to estimate whether all symbol
    // can be shown without overlap.
    var axisExtent = categoryAxis.getExtent();
    var availSize = Math.abs(axisExtent[1] - axisExtent[0]) / categoryAxis.scale.count();
    isNaN(availSize) && (availSize = 0); // 0/0 is NaN.
    // Sampling some points, max 5.
    var dataLen = data.count();
    var step = Math.max(1, Math.round(dataLen / 5));
    for(var dataIndex = 0; dataIndex < dataLen; dataIndex += step){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getSymbolSize(data, dataIndex)[categoryAxis.isHorizontal() ? 1 : 0] * 1.5 > availSize) {
            return false;
        }
    }
    return true;
}
function isPointNull(x, y) {
    return isNaN(x) || isNaN(y);
}
function getLastIndexNotNull(points) {
    var len = points.length / 2;
    for(; len > 0; len--){
        if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
            break;
        }
    }
    return len - 1;
}
function getPointAtIndex(points, idx) {
    return [
        points[idx * 2],
        points[idx * 2 + 1]
    ];
}
function getIndexRange(points, xOrY, dim) {
    var len = points.length / 2;
    var dimIdx = dim === 'x' ? 0 : 1;
    var a;
    var b;
    var prevIndex = 0;
    var nextIndex = -1;
    for(var i = 0; i < len; i++){
        b = points[i * 2 + dimIdx];
        if (isNaN(b) || isNaN(points[i * 2 + 1 - dimIdx])) {
            continue;
        }
        if (i === 0) {
            a = b;
            continue;
        }
        if (a <= xOrY && b >= xOrY || a >= xOrY && b <= xOrY) {
            nextIndex = i;
            break;
        }
        prevIndex = i;
        a = b;
    }
    return {
        range: [
            prevIndex,
            nextIndex
        ],
        t: (xOrY - a) / (b - a)
    };
}
function anyStateShowEndLabel(seriesModel) {
    if (seriesModel.get([
        'endLabel',
        'show'
    ])) {
        return true;
    }
    for(var i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECIAL_STATES"].length; i++){
        if (seriesModel.get([
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SPECIAL_STATES"][i],
            'endLabel',
            'show'
        ])) {
            return true;
        }
    }
    return false;
}
function createLineClipPath(lineView, coordSys, hasAnimation, seriesModel) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$coord$2f$CoordinateSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCoordinateSystemType"])(coordSys, 'cartesian2d')) {
        var endLabelModel_1 = seriesModel.getModel('endLabel');
        var valueAnimation_1 = endLabelModel_1.get('valueAnimation');
        var data_1 = seriesModel.getData();
        var labelAnimationRecord_1 = {
            lastFrameIndex: 0
        };
        var during = anyStateShowEndLabel(seriesModel) ? function(percent, clipRect) {
            lineView._endLabelOnDuring(percent, clipRect, data_1, labelAnimationRecord_1, valueAnimation_1, endLabelModel_1, coordSys);
        } : null;
        var isHorizontal = coordSys.getBaseAxis().isHorizontal();
        var clipPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createGridClipPath"])(coordSys, hasAnimation, seriesModel, function() {
            var endLabel = lineView._endLabel;
            if (endLabel && hasAnimation) {
                if (labelAnimationRecord_1.originalX != null) {
                    endLabel.attr({
                        x: labelAnimationRecord_1.originalX,
                        y: labelAnimationRecord_1.originalY
                    });
                }
            }
        }, during);
        // Expand clip shape to avoid clipping when line value exceeds axis
        if (!seriesModel.get('clip', true)) {
            var rectShape = clipPath.shape;
            var expandSize = Math.max(rectShape.width, rectShape.height);
            if (isHorizontal) {
                rectShape.y -= expandSize;
                rectShape.height += expandSize * 2;
            } else {
                rectShape.x -= expandSize;
                rectShape.width += expandSize * 2;
            }
        }
        // Set to the final frame. To make sure label layout is right.
        if (during) {
            during(1, clipPath);
        }
        return clipPath;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (seriesModel.get([
                'endLabel',
                'show'
            ])) {
                console.warn('endLabel is not supported for lines in polar systems.');
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createClipPathFromCoordSys$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPolarClipPath"])(coordSys, hasAnimation, seriesModel);
    }
}
function getEndLabelStateSpecified(endLabelModel, coordSys) {
    var baseAxis = coordSys.getBaseAxis();
    var isHorizontal = baseAxis.isHorizontal();
    var isBaseInversed = baseAxis.inverse;
    var align = isHorizontal ? isBaseInversed ? 'right' : 'left' : 'center';
    var verticalAlign = isHorizontal ? 'middle' : isBaseInversed ? 'top' : 'bottom';
    return {
        normal: {
            align: endLabelModel.get('align') || align,
            verticalAlign: endLabelModel.get('verticalAlign') || verticalAlign
        }
    };
}
var LineView = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(LineView, _super);
    function LineView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineView.prototype.init = function() {
        var lineGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Group();
        var symbolDraw = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$SymbolDraw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        this.group.add(symbolDraw.group);
        this._symbolDraw = symbolDraw;
        this._lineGroup = lineGroup;
        this._changePolyState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.bind(this._changePolyState, this);
    };
    LineView.prototype.render = function(seriesModel, ecModel, api) {
        var coordSys = seriesModel.coordinateSystem;
        var group = this.group;
        var data = seriesModel.getData();
        var lineStyleModel = seriesModel.getModel('lineStyle');
        var areaStyleModel = seriesModel.getModel('areaStyle');
        var points = data.getLayout('points') || [];
        var isCoordSysPolar = coordSys.type === 'polar';
        var prevCoordSys = this._coordSys;
        var symbolDraw = this._symbolDraw;
        var polyline = this._polyline;
        var polygon = this._polygon;
        var lineGroup = this._lineGroup;
        var hasAnimation = !ecModel.ssr && seriesModel.get('animation');
        var isAreaChart = !areaStyleModel.isEmpty();
        var valueOrigin = areaStyleModel.get('origin');
        var dataCoordInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareDataCoordInfo"])(coordSys, data, valueOrigin);
        var stackedOnPoints = isAreaChart && getStackedOnPoints(coordSys, data, dataCoordInfo);
        var showSymbol = seriesModel.get('showSymbol');
        var connectNulls = seriesModel.get('connectNulls');
        var isIgnoreFunc = showSymbol && !isCoordSysPolar && getIsIgnoreFunc(seriesModel, data, coordSys);
        // Remove temporary symbols
        var oldData = this._data;
        oldData && oldData.eachItemGraphicEl(function(el, idx) {
            if (el.__temp) {
                group.remove(el);
                oldData.setItemGraphicEl(idx, null);
            }
        });
        // Remove previous created symbols if showSymbol changed to false
        if (!showSymbol) {
            symbolDraw.remove();
        }
        group.add(lineGroup);
        // FIXME step not support polar
        var step = !isCoordSysPolar ? seriesModel.get('step') : false;
        var clipShapeForSymbol;
        if (coordSys && coordSys.getArea && seriesModel.get('clip', true)) {
            clipShapeForSymbol = coordSys.getArea();
            // Avoid float number rounding error for symbol on the edge of axis extent.
            // See #7913 and `test/dataZoom-clip.html`.
            if (clipShapeForSymbol.width != null) {
                clipShapeForSymbol.x -= 0.1;
                clipShapeForSymbol.y -= 0.1;
                clipShapeForSymbol.width += 0.2;
                clipShapeForSymbol.height += 0.2;
            } else if (clipShapeForSymbol.r0) {
                clipShapeForSymbol.r0 -= 0.5;
                clipShapeForSymbol.r += 0.5;
            }
        }
        this._clipShapeForSymbol = clipShapeForSymbol;
        var visualColor = getVisualGradient(data, coordSys, api) || data.getVisual('style')[data.getVisual('drawType')];
        // Initialization animation or coordinate system changed
        if (!(polyline && prevCoordSys.type === coordSys.type && step === this._step)) {
            showSymbol && symbolDraw.updateData(data, {
                isIgnore: isIgnoreFunc,
                clipShape: clipShapeForSymbol,
                disableAnimation: true,
                getSymbolPoint: function(idx) {
                    return [
                        points[idx * 2],
                        points[idx * 2 + 1]
                    ];
                }
            });
            hasAnimation && this._initSymbolLabelAnimation(data, coordSys, clipShapeForSymbol);
            if (step) {
                if (stackedOnPoints) {
                    stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
                }
                // TODO If stacked series is not step
                points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
            }
            polyline = this._newPolyline(points);
            if (isAreaChart) {
                polygon = this._newPolygon(points, stackedOnPoints);
            } else if (polygon) {
                lineGroup.remove(polygon);
                polygon = this._polygon = null;
            }
            // NOTE: Must update _endLabel before setClipPath.
            if (!isCoordSysPolar) {
                this._initOrUpdateEndLabel(seriesModel, coordSys, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(visualColor));
            }
            lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
        } else {
            if (isAreaChart && !polygon) {
                // If areaStyle is added
                polygon = this._newPolygon(points, stackedOnPoints);
            } else if (polygon && !isAreaChart) {
                // If areaStyle is removed
                lineGroup.remove(polygon);
                polygon = this._polygon = null;
            }
            // NOTE: Must update _endLabel before setClipPath.
            if (!isCoordSysPolar) {
                this._initOrUpdateEndLabel(seriesModel, coordSys, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["convertToColorString"])(visualColor));
            }
            // Update clipPath
            var oldClipPath = lineGroup.getClipPath();
            if (oldClipPath) {
                var newClipPath = createLineClipPath(this, coordSys, false, seriesModel);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.initProps(oldClipPath, {
                    shape: newClipPath.shape
                }, seriesModel);
            } else {
                lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
            }
            // Always update, or it is wrong in the case turning on legend
            // because points are not changed.
            showSymbol && symbolDraw.updateData(data, {
                isIgnore: isIgnoreFunc,
                clipShape: clipShapeForSymbol,
                disableAnimation: true,
                getSymbolPoint: function(idx) {
                    return [
                        points[idx * 2],
                        points[idx * 2 + 1]
                    ];
                }
            });
            // In the case data zoom triggered refreshing frequently
            // Data may not change if line has a category axis. So it should animate nothing.
            if (!isPointsSame(this._stackedOnPoints, stackedOnPoints) || !isPointsSame(this._points, points)) {
                if (hasAnimation) {
                    this._doUpdateAnimation(data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls);
                } else {
                    // Not do it in update with animation
                    if (step) {
                        if (stackedOnPoints) {
                            stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
                        }
                        // TODO If stacked series is not step
                        points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
                    }
                    polyline.setShape({
                        points: points
                    });
                    polygon && polygon.setShape({
                        points: points,
                        stackedOnPoints: stackedOnPoints
                    });
                }
            }
        }
        var emphasisModel = seriesModel.getModel('emphasis');
        var focus = emphasisModel.get('focus');
        var blurScope = emphasisModel.get('blurScope');
        var emphasisDisabled = emphasisModel.get('disabled');
        polyline.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.defaults(// Use color in lineStyle first
        lineStyleModel.getLineStyle(), {
            fill: 'none',
            stroke: visualColor,
            lineJoin: 'bevel'
        }));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(polyline, seriesModel, 'lineStyle');
        if (polyline.style.lineWidth > 0 && seriesModel.get([
            'emphasis',
            'lineStyle',
            'width'
        ]) === 'bolder') {
            var emphasisLineStyle = polyline.getState('emphasis').style;
            emphasisLineStyle.lineWidth = +polyline.style.lineWidth + 1;
        }
        // Needs seriesIndex for focus
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(polyline).seriesIndex = seriesModel.seriesIndex;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(polyline, focus, blurScope, emphasisDisabled);
        var smooth = getSmooth(seriesModel.get('smooth'));
        var smoothMonotone = seriesModel.get('smoothMonotone');
        polyline.setShape({
            smooth: smooth,
            smoothMonotone: smoothMonotone,
            connectNulls: connectNulls
        });
        if (polygon) {
            var stackedOnSeries = data.getCalculationInfo('stackedOnSeries');
            var stackedOnSmooth = 0;
            polygon.useStyle(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.defaults(areaStyleModel.getAreaStyle(), {
                fill: visualColor,
                opacity: 0.7,
                lineJoin: 'bevel',
                decal: data.getVisual('style').decal
            }));
            if (stackedOnSeries) {
                stackedOnSmooth = getSmooth(stackedOnSeries.get('smooth'));
            }
            polygon.setShape({
                smooth: smooth,
                stackedOnSmooth: stackedOnSmooth,
                smoothMonotone: smoothMonotone,
                connectNulls: connectNulls
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStatesStylesFromModel"])(polygon, seriesModel, 'areaStyle');
            // Needs seriesIndex for focus
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(polygon).seriesIndex = seriesModel.seriesIndex;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleHoverEmphasis"])(polygon, focus, blurScope, emphasisDisabled);
        }
        var changePolyState = this._changePolyState;
        data.eachItemGraphicEl(function(el) {
            // Switch polyline / polygon state if element changed its state.
            el && (el.onHoverStateChange = changePolyState);
        });
        this._polyline.onHoverStateChange = changePolyState;
        this._data = data;
        // Save the coordinate system for transition animation when data changed
        this._coordSys = coordSys;
        this._stackedOnPoints = stackedOnPoints;
        this._points = points;
        this._step = step;
        this._valueOrigin = valueOrigin;
        if (seriesModel.get('triggerLineEvent')) {
            this.packEventData(seriesModel, polyline);
            polygon && this.packEventData(seriesModel, polygon);
        }
    };
    LineView.prototype.packEventData = function(seriesModel, el) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$innerStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getECData"])(el).eventData = {
            componentType: 'series',
            componentSubType: 'line',
            componentIndex: seriesModel.componentIndex,
            seriesIndex: seriesModel.seriesIndex,
            seriesName: seriesModel.name,
            seriesType: 'line'
        };
    };
    LineView.prototype.highlight = function(seriesModel, ecModel, api, payload) {
        var data = seriesModel.getData();
        var dataIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.queryDataIndex(data, payload);
        this._changePolyState('emphasis');
        if (!(dataIndex instanceof Array) && dataIndex != null && dataIndex >= 0) {
            var points = data.getLayout('points');
            var symbol = data.getItemGraphicEl(dataIndex);
            if (!symbol) {
                // Create a temporary symbol if it is not exists
                var x = points[dataIndex * 2];
                var y = points[dataIndex * 2 + 1];
                if (isNaN(x) || isNaN(y)) {
                    // Null data
                    return;
                }
                // fix #11360: shouldn't draw symbol outside clipShapeForSymbol
                if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(x, y)) {
                    return;
                }
                var zlevel = seriesModel.get('zlevel') || 0;
                var z = seriesModel.get('z') || 0;
                symbol = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$Symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](data, dataIndex);
                symbol.x = x;
                symbol.y = y;
                symbol.setZ(zlevel, z);
                // ensure label text of the temporary symbol is in front of line and area polygon
                var symbolLabel = symbol.getSymbolPath().getTextContent();
                if (symbolLabel) {
                    symbolLabel.zlevel = zlevel;
                    symbolLabel.z = z;
                    symbolLabel.z2 = this._polyline.z2 + 1;
                }
                symbol.__temp = true;
                data.setItemGraphicEl(dataIndex, symbol);
                // Stop scale animation
                symbol.stopSymbolAnimation(true);
                this.group.add(symbol);
            }
            symbol.highlight();
        } else {
            // Highlight whole series
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].prototype.highlight.call(this, seriesModel, ecModel, api, payload);
        }
    };
    LineView.prototype.downplay = function(seriesModel, ecModel, api, payload) {
        var data = seriesModel.getData();
        var dataIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.queryDataIndex(data, payload);
        this._changePolyState('normal');
        if (dataIndex != null && dataIndex >= 0) {
            var symbol = data.getItemGraphicEl(dataIndex);
            if (symbol) {
                if (symbol.__temp) {
                    data.setItemGraphicEl(dataIndex, null);
                    this.group.remove(symbol);
                } else {
                    symbol.downplay();
                }
            }
        } else {
            // FIXME
            // can not downplay completely.
            // Downplay whole series
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].prototype.downplay.call(this, seriesModel, ecModel, api, payload);
        }
    };
    LineView.prototype._changePolyState = function(toState) {
        var polygon = this._polygon;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStatesFlag"])(this._polyline, toState);
        polygon && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setStatesFlag"])(polygon, toState);
    };
    LineView.prototype._newPolyline = function(points) {
        var polyline = this._polyline;
        // Remove previous created polyline
        if (polyline) {
            this._lineGroup.remove(polyline);
        }
        polyline = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$poly$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ECPolyline"]({
            shape: {
                points: points
            },
            segmentIgnoreThreshold: 2,
            z2: 10
        });
        this._lineGroup.add(polyline);
        this._polyline = polyline;
        return polyline;
    };
    LineView.prototype._newPolygon = function(points, stackedOnPoints) {
        var polygon = this._polygon;
        // Remove previous created polygon
        if (polygon) {
            this._lineGroup.remove(polygon);
        }
        polygon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$poly$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ECPolygon"]({
            shape: {
                points: points,
                stackedOnPoints: stackedOnPoints
            },
            segmentIgnoreThreshold: 2
        });
        this._lineGroup.add(polygon);
        this._polygon = polygon;
        return polygon;
    };
    LineView.prototype._initSymbolLabelAnimation = function(data, coordSys, clipShape) {
        var isHorizontalOrRadial;
        var isCoordSysPolar;
        var baseAxis = coordSys.getBaseAxis();
        var isAxisInverse = baseAxis.inverse;
        if (coordSys.type === 'cartesian2d') {
            isHorizontalOrRadial = baseAxis.isHorizontal();
            isCoordSysPolar = false;
        } else if (coordSys.type === 'polar') {
            isHorizontalOrRadial = baseAxis.dim === 'angle';
            isCoordSysPolar = true;
        }
        var seriesModel = data.hostModel;
        var seriesDuration = seriesModel.get('animationDuration');
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isFunction(seriesDuration)) {
            seriesDuration = seriesDuration(null);
        }
        var seriesDelay = seriesModel.get('animationDelay') || 0;
        var seriesDelayValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isFunction(seriesDelay) ? seriesDelay(null) : seriesDelay;
        data.eachItemGraphicEl(function(symbol, idx) {
            var el = symbol;
            if (el) {
                var point = [
                    symbol.x,
                    symbol.y
                ];
                var start = void 0;
                var end = void 0;
                var current = void 0;
                if (clipShape) {
                    if (isCoordSysPolar) {
                        var polarClip = clipShape;
                        var coord = coordSys.pointToCoord(point);
                        if (isHorizontalOrRadial) {
                            start = polarClip.startAngle;
                            end = polarClip.endAngle;
                            current = -coord[1] / 180 * Math.PI;
                        } else {
                            start = polarClip.r0;
                            end = polarClip.r;
                            current = coord[0];
                        }
                    } else {
                        var gridClip = clipShape;
                        if (isHorizontalOrRadial) {
                            start = gridClip.x;
                            end = gridClip.x + gridClip.width;
                            current = symbol.x;
                        } else {
                            start = gridClip.y + gridClip.height;
                            end = gridClip.y;
                            current = symbol.y;
                        }
                    }
                }
                var ratio = end === start ? 0 : (current - start) / (end - start);
                if (isAxisInverse) {
                    ratio = 1 - ratio;
                }
                var delay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isFunction(seriesDelay) ? seriesDelay(idx) : seriesDuration * ratio + seriesDelayValue;
                var symbolPath = el.getSymbolPath();
                var text = symbolPath.getTextContent();
                el.attr({
                    scaleX: 0,
                    scaleY: 0
                });
                el.animateTo({
                    scaleX: 1,
                    scaleY: 1
                }, {
                    duration: 200,
                    setToFinal: true,
                    delay: delay
                });
                if (text) {
                    text.animateFrom({
                        style: {
                            opacity: 0
                        }
                    }, {
                        duration: 300,
                        delay: delay
                    });
                }
                symbolPath.disableLabelAnimation = true;
            }
        });
    };
    LineView.prototype._initOrUpdateEndLabel = function(seriesModel, coordSys, inheritColor) {
        var endLabelModel = seriesModel.getModel('endLabel');
        if (anyStateShowEndLabel(seriesModel)) {
            var data_2 = seriesModel.getData();
            var polyline = this._polyline;
            // series may be filtered.
            var points = data_2.getLayout('points');
            if (!points) {
                polyline.removeTextContent();
                this._endLabel = null;
                return;
            }
            var endLabel = this._endLabel;
            if (!endLabel) {
                endLabel = this._endLabel = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Text({
                    z2: 200 // should be higher than item symbol
                });
                endLabel.ignoreClip = true;
                polyline.setTextContent(this._endLabel);
                polyline.disableLabelAnimation = true;
            }
            // Find last non-NaN data to display data
            var dataIndex = getLastIndexNotNull(points);
            if (dataIndex >= 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLabelStyle"])(polyline, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLabelStatesModels"])(seriesModel, 'endLabel'), {
                    inheritColor: inheritColor,
                    labelFetcher: seriesModel,
                    labelDataIndex: dataIndex,
                    defaultText: function(dataIndex, opt, interpolatedValue) {
                        return interpolatedValue != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultInterpolatedLabel"])(data_2, interpolatedValue) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$labelHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultLabel"])(data_2, dataIndex);
                    },
                    enableTextSetter: true
                }, getEndLabelStateSpecified(endLabelModel, coordSys));
                polyline.textConfig.position = null;
            }
        } else if (this._endLabel) {
            this._polyline.removeTextContent();
            this._endLabel = null;
        }
    };
    LineView.prototype._endLabelOnDuring = function(percent, clipRect, data, animationRecord, valueAnimation, endLabelModel, coordSys) {
        var endLabel = this._endLabel;
        var polyline = this._polyline;
        if (endLabel) {
            // NOTE: Don't remove percent < 1. percent === 1 means the first frame during render.
            // The label is not prepared at this time.
            if (percent < 1 && animationRecord.originalX == null) {
                animationRecord.originalX = endLabel.x;
                animationRecord.originalY = endLabel.y;
            }
            var points = data.getLayout('points');
            var seriesModel = data.hostModel;
            var connectNulls = seriesModel.get('connectNulls');
            var precision = endLabelModel.get('precision');
            var distance = endLabelModel.get('distance') || 0;
            var baseAxis = coordSys.getBaseAxis();
            var isHorizontal = baseAxis.isHorizontal();
            var isBaseInversed = baseAxis.inverse;
            var clipShape = clipRect.shape;
            var xOrY = isBaseInversed ? isHorizontal ? clipShape.x : clipShape.y + clipShape.height : isHorizontal ? clipShape.x + clipShape.width : clipShape.y;
            var distanceX = (isHorizontal ? distance : 0) * (isBaseInversed ? -1 : 1);
            var distanceY = (isHorizontal ? 0 : -distance) * (isBaseInversed ? -1 : 1);
            var dim = isHorizontal ? 'x' : 'y';
            var dataIndexRange = getIndexRange(points, xOrY, dim);
            var indices = dataIndexRange.range;
            var diff = indices[1] - indices[0];
            var value = void 0;
            if (diff >= 1) {
                // diff > 1 && connectNulls, which is on the null data.
                if (diff > 1 && !connectNulls) {
                    var pt = getPointAtIndex(points, indices[0]);
                    endLabel.attr({
                        x: pt[0] + distanceX,
                        y: pt[1] + distanceY
                    });
                    valueAnimation && (value = seriesModel.getRawValue(indices[0]));
                } else {
                    var pt = polyline.getPointOn(xOrY, dim);
                    pt && endLabel.attr({
                        x: pt[0] + distanceX,
                        y: pt[1] + distanceY
                    });
                    var startValue = seriesModel.getRawValue(indices[0]);
                    var endValue = seriesModel.getRawValue(indices[1]);
                    valueAnimation && (value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$model$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.interpolateRawValues(data, precision, startValue, endValue, dataIndexRange.t));
                }
                animationRecord.lastFrameIndex = indices[0];
            } else {
                // If diff <= 0, which is the range is not found(Include NaN)
                // Choose the first point or last point.
                var idx = percent === 1 || animationRecord.lastFrameIndex > 0 ? indices[0] : 0;
                var pt = getPointAtIndex(points, idx);
                valueAnimation && (value = seriesModel.getRawValue(idx));
                endLabel.attr({
                    x: pt[0] + distanceX,
                    y: pt[1] + distanceY
                });
            }
            if (valueAnimation) {
                var inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$label$2f$labelStyle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelInner"])(endLabel);
                if (typeof inner.setLabelText === 'function') {
                    inner.setLabelText(value);
                }
            }
        }
    };
    /**
   * @private
   */ // FIXME Two value axis
    LineView.prototype._doUpdateAnimation = function(data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls) {
        var polyline = this._polyline;
        var polygon = this._polygon;
        var seriesModel = data.hostModel;
        var diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$lineAnimationDiff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this._data, data, this._stackedOnPoints, stackedOnPoints, this._coordSys, coordSys, this._valueOrigin, valueOrigin);
        var current = diff.current;
        var stackedOnCurrent = diff.stackedOnCurrent;
        var next = diff.next;
        var stackedOnNext = diff.stackedOnNext;
        if (step) {
            // TODO If stacked series is not step
            stackedOnCurrent = turnPointsIntoStep(diff.stackedOnCurrent, diff.current, coordSys, step, connectNulls);
            current = turnPointsIntoStep(diff.current, null, coordSys, step, connectNulls);
            stackedOnNext = turnPointsIntoStep(diff.stackedOnNext, diff.next, coordSys, step, connectNulls);
            next = turnPointsIntoStep(diff.next, null, coordSys, step, connectNulls);
        }
        // Don't apply animation if diff is large.
        // For better result and avoid memory explosion problems like
        // https://github.com/apache/incubator-echarts/issues/12229
        if (getBoundingDiff(current, next) > 3000 || polygon && getBoundingDiff(stackedOnCurrent, stackedOnNext) > 3000) {
            polyline.stopAnimation();
            polyline.setShape({
                points: next
            });
            if (polygon) {
                polygon.stopAnimation();
                polygon.setShape({
                    points: next,
                    stackedOnPoints: stackedOnNext
                });
            }
            return;
        }
        polyline.shape.__points = diff.current;
        polyline.shape.points = current;
        var target = {
            shape: {
                points: next
            }
        };
        // Also animate the original points.
        // If points reference is changed when turning into step line.
        if (diff.current !== current) {
            target.shape.__points = diff.next;
        }
        // Stop previous animation.
        polyline.stopAnimation();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.updateProps(polyline, target, seriesModel);
        if (polygon) {
            polygon.setShape({
                // Reuse the points with polyline.
                points: current,
                stackedOnPoints: stackedOnCurrent
            });
            polygon.stopAnimation();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$graphic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.updateProps(polygon, {
                shape: {
                    stackedOnPoints: stackedOnNext
                }
            }, seriesModel);
            // If use attr directly in updateProps.
            if (polyline.shape.points !== polygon.shape.points) {
                polygon.shape.points = polyline.shape.points;
            }
        }
        var updatedDataInfo = [];
        var diffStatus = diff.status;
        for(var i = 0; i < diffStatus.length; i++){
            var cmd = diffStatus[i].cmd;
            if (cmd === '=') {
                var el = data.getItemGraphicEl(diffStatus[i].idx1);
                if (el) {
                    updatedDataInfo.push({
                        el: el,
                        ptIdx: i // Index of points
                    });
                }
            }
        }
        if (polyline.animators && polyline.animators.length) {
            polyline.animators[0].during(function() {
                polygon && polygon.dirtyShape();
                var points = polyline.shape.__points;
                for(var i = 0; i < updatedDataInfo.length; i++){
                    var el = updatedDataInfo[i].el;
                    var offset = updatedDataInfo[i].ptIdx * 2;
                    el.x = points[offset];
                    el.y = points[offset + 1];
                    el.markRedraw();
                }
            });
        }
    };
    LineView.prototype.remove = function(ecModel) {
        var group = this.group;
        var oldData = this._data;
        this._lineGroup.removeAll();
        this._symbolDraw.remove(true);
        // Remove temporary created elements when highlighting
        oldData && oldData.eachItemGraphicEl(function(el, idx) {
            if (el.__temp) {
                group.remove(el);
                oldData.setItemGraphicEl(idx, null);
            }
        });
        this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
    };
    LineView.type = 'line';
    return LineView;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$view$2f$Chart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = LineView;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/LineSeries.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js [app-ssr] (ecmascript) <export default as Group>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js [app-ssr] (ecmascript)");
;
;
;
;
;
var LineSeriesModel = /** @class */ function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$3$2e$0$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__extends"])(LineSeriesModel, _super);
    function LineSeriesModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = LineSeriesModel.type;
        _this.hasSymbolVisual = true;
        return _this;
    }
    LineSeriesModel.prototype.getInitialData = function(option) {
        if ("TURBOPACK compile-time truthy", 1) {
            var coordSys = option.coordinateSystem;
            if (coordSys !== 'polar' && coordSys !== 'cartesian2d') {
                throw new Error('Line not support coordinateSystem besides cartesian and polar');
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$helper$2f$createSeriesData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(null, this, {
            useEncodeDefaulter: true
        });
    };
    LineSeriesModel.prototype.getLegendIcon = function(opt) {
        var group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zrender$40$5$2e$6$2e$1$2f$node_modules$2f$zrender$2f$lib$2f$graphic$2f$Group$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Group$3e$__["Group"]();
        var line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"])('line', 0, opt.itemHeight / 2, opt.itemWidth, 0, opt.lineStyle.stroke, false);
        group.add(line);
        line.setStyle(opt.lineStyle);
        var visualType = this.getData().getVisual('symbol');
        var visualRotate = this.getData().getVisual('symbolRotate');
        var symbolType = visualType === 'none' ? 'circle' : visualType;
        // Symbol size is 80% when there is a line
        var size = opt.itemHeight * 0.8;
        var symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$util$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSymbol"])(symbolType, (opt.itemWidth - size) / 2, (opt.itemHeight - size) / 2, size, size, opt.itemStyle.fill);
        group.add(symbol);
        symbol.setStyle(opt.itemStyle);
        var symbolRotate = opt.iconRotate === 'inherit' ? visualRotate : opt.iconRotate || 0;
        symbol.rotation = symbolRotate * Math.PI / 180;
        symbol.setOrigin([
            opt.itemWidth / 2,
            opt.itemHeight / 2
        ]);
        if (symbolType.indexOf('empty') > -1) {
            symbol.style.stroke = symbol.style.fill;
            symbol.style.fill = '#fff';
            symbol.style.lineWidth = 2;
        }
        return group;
    };
    LineSeriesModel.type = 'series.line';
    LineSeriesModel.dependencies = [
        'grid',
        'polar'
    ];
    LineSeriesModel.defaultOption = {
        // zlevel: 0,
        z: 3,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: true,
        clip: true,
        label: {
            position: 'top'
        },
        // itemStyle: {
        // },
        endLabel: {
            show: false,
            valueAnimation: true,
            distance: 8
        },
        lineStyle: {
            width: 2,
            type: 'solid'
        },
        emphasis: {
            scale: true
        },
        // areaStyle: {
        // origin of areaStyle. Valid values:
        // `'auto'/null/undefined`: from axisLine to data
        // `'start'`: from min to data
        // `'end'`: from data to max
        // origin: 'auto'
        // },
        // false, 'start', 'end', 'middle'
        step: false,
        // Disabled if step is true
        smooth: false,
        smoothMonotone: null,
        symbol: 'emptyCircle',
        symbolSize: 4,
        symbolRotate: null,
        showSymbol: true,
        // `false`: follow the label interval strategy.
        // `true`: show all symbols.
        // `'auto'`: If possible, show all symbols, otherwise
        //           follow the label interval strategy.
        showAllSymbol: 'auto',
        // Whether to connect break point.
        connectNulls: false,
        // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
        sampling: 'none',
        animationEasing: 'linear',
        // Disable progressive
        progressive: 0,
        hoverLayerThreshold: Infinity,
        universalTransition: {
            divideShape: 'clone'
        },
        triggerLineEvent: false
    };
    return LineSeriesModel;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$model$2f$Series$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = LineSeriesModel;
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/install.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/LineView.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/LineSeries.js [app-ssr] (ecmascript)");
// In case developer forget to include grid component
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/layout/points.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/dataSample.js [app-ssr] (ecmascript)");
;
;
;
;
function install(registers) {
    registers.registerChartView(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineView$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerSeriesModel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$LineSeries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    registers.registerLayout((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$layout$2f$points$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('line', true));
    registers.registerVisual({
        seriesType: 'line',
        reset: function(seriesModel) {
            var data = seriesModel.getData();
            // Visual coding for legend
            var lineStyle = seriesModel.getModel('lineStyle').getLineStyle();
            if (lineStyle && !lineStyle.stroke) {
                // Fill in visual should be palette color if
                // has color callback
                lineStyle.stroke = data.getVisual('style').fill;
            }
            data.setVisual('legendLineStyle', lineStyle);
        }
    });
    // Down sample after filter
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$processor$2f$dataSample$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('line'));
}
}}),
"[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/install.js [app-ssr] (ecmascript) <export install as LineChart>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "LineChart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["install"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$5$2e$6$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/install.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=91337_echarts_lib_chart_181476._.js.map