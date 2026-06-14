// DO NOT EDIT! THIS FILE IS GENERATED FROM "runtime-template.js" BY RUNNING "builder-runtime.js"

/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-extra-semi
;(function() {
  // this runtime template code is destined to wrap LavaMoat entirely,
  // therefore this is our way of capturing access to basic APIs LavaMoat
  // uses to still be accessible only to LavaMoat after scuttling occurs
  const {
    RegExp,
    Reflect,
    Proxy,
    Object,
    Error,
    Array,
    Set,
    Math,
    Date,
    console,
  } = globalThis

  const moduleRegistry = new Map()
  const lavamoatPolicy = { resources: {} }
  const debugMode = false
  const statsMode = false

  // initialize the kernel
  const reportStatsHook = statsMode ? (function makeInitStatsHook({ onStatsReady }) {
  let statModuleStack = []
  return reportStatsHook

  function reportStatsHook(event, moduleId) {
    if (event === 'start') {
      // record start
      const startTime = Date.now()
      // console.log(`loaded module ${moduleId}`)
      const statRecord = {
        name: moduleId,
        value: null,
        children: [],
        startTime: startTime,
        endTime: null,
      }
      // add as child to current
      if (statModuleStack.length > 0) {
        const currentStat = statModuleStack[statModuleStack.length - 1]
        currentStat.children.push(statRecord)
      }
      // set as current
      statModuleStack.push(statRecord)
    } else if (event === 'end') {
      const endTime = Date.now()
      const currentStat = statModuleStack[statModuleStack.length - 1]
      // sanity check, should only get an end for the current top of stack
      if (currentStat.name !== moduleId) {
        console.error(
          `stats hook misaligned "${
            currentStat.name
          }", "${moduleId}" ${statModuleStack.map((e) => e.name).join()}`
        )
      }
      currentStat.endTime = endTime
      const startTime = currentStat.startTime
      const duration = endTime - startTime
      currentStat.value = duration
      // console.log(`loaded module ${moduleId} in ${duration}ms`)
      // check if totally done
      if (statModuleStack.length === 1) {
        currentStat.version = 1
        onStatsReady(currentStat)
      }
      statModuleStack.pop()
    }
  }
})({ onStatsReady }) : () => {}
  const createKernel = // LavaMoat Prelude
(function () {
  return createKernel

  function createKernel ({
    lavamoatConfig,
    loadModuleData,
    getRelativeModuleId,
    prepareModuleInitializerArgs,
    getExternalCompartment,
    globalThisRefs,
    runWithPrecompiledModules,
    reportStatsHook,
  }) {
    // debug options are hard-coded at build time
    const {
      debugMode,
    } = {"debugMode":false}
    // security options are hard-coded at build time
    const {
      scuttleGlobalThis,
    } = {"scuttleGlobalThis":{"enabled":true,"scuttlerName":"SCUTTLER","exceptions":["Proxy","toString","getComputedStyle","addEventListener","removeEventListener","ShadowRoot","HTMLElement","HTMLFormElement","Element","pageXOffset","pageYOffset","visualViewport","Reflect","Set","Object","navigator","harden","console","WeakSet","Event","Image","fetch","OffscreenCanvas","/cdc_[a-zA-Z0-9]+_[a-zA-Z]+/iu","name","performance","parseFloat","innerWidth","innerHeight","Symbol","Math","DOMRect","Number","Array","crypto","Function","Uint8Array","String","Promise","JSON","Date","__SENTRY__","appState","extra","stateHooks","sentryHooks","sentry","logEncryptedVault","history","getSelection","opr","devicePixelRatio","ResizeObserver","setTimeout","clearTimeout"]}}

    function getGlobalRef () {
      if (typeof globalThis !== 'undefined') {
        return globalThis
      }
      const globalRef = typeof self !== 'undefined' ? self : (typeof global !== 'undefined' ? global : undefined)
      if (typeof globalRef !== 'undefined') {
        console.error('LavaMoat - Deprecation Warning: global reference is expected as `globalThis`')
      }
    }

    const globalRef = getGlobalRef()

    if (!globalRef) {
      throw new Error('Lavamoat - globalThis not defined')
    }

    // polyfill globalThis
    if (globalRef.globalThis !== globalRef) {
      globalRef.globalThis = globalRef
    }
    if (globalRef.global !== globalRef) {
      globalRef.global = globalRef
    }

    // create the SES rootRealm
    // "templateRequire" calls are inlined in "generateKernel"
    // load-bearing semi-colon, do not remove
    // eslint-disable-next-line no-extra-semi
    ;// define ses
(function(){
  const global = globalRef
  const exports = {}
  const module = { exports }
  ;(function(){
// START of injected code from ses
// ses@1.14.0
(functors => options => {
  'use strict';

  const {
    Map,
    Object,
    ReferenceError,
    Reflect,
    TypeError,
  } = globalThis;
  const {
    create,
    defineProperties,
    defineProperty,
    freeze,
    fromEntries,
    getOwnPropertyDescriptors,
    getOwnPropertyNames,
    keys,
  } = Object;
  const { get, set } = Reflect;

  const {
  } = options || {};



  const cell = (name, value = undefined) => {
    const observers = [];
    return freeze({
      get: freeze(() => {
        return value;
      }),
      set: freeze((newValue) => {
        value = newValue;
        for (const observe of observers) {
          observe(value);
        }
      }),
      observe: freeze((observe) => {
        observers.push(observe);
        observe(value);
      }),
      enumerable: true,
    });
  };

  const cells = [
    {
      globalThis: cell("globalThis"),
      Array: cell("Array"),
      ArrayBuffer: cell("ArrayBuffer"),
      Date: cell("Date"),
      FinalizationRegistry: cell("FinalizationRegistry"),
      Float32Array: cell("Float32Array"),
      JSON: cell("JSON"),
      Map: cell("Map"),
      Math: cell("Math"),
      Number: cell("Number"),
      Object: cell("Object"),
      Promise: cell("Promise"),
      Proxy: cell("Proxy"),
      Reflect: cell("Reflect"),
      FERAL_REG_EXP: cell("FERAL_REG_EXP"),
      Set: cell("Set"),
      String: cell("String"),
      Symbol: cell("Symbol"),
      Uint8Array: cell("Uint8Array"),
      WeakMap: cell("WeakMap"),
      WeakSet: cell("WeakSet"),
      FERAL_ERROR: cell("FERAL_ERROR"),
      RangeError: cell("RangeError"),
      ReferenceError: cell("ReferenceError"),
      SyntaxError: cell("SyntaxError"),
      TypeError: cell("TypeError"),
      AggregateError: cell("AggregateError"),
      assign: cell("assign"),
      create: cell("create"),
      defineProperties: cell("defineProperties"),
      entries: cell("entries"),
      freeze: cell("freeze"),
      getOwnPropertyDescriptor: cell("getOwnPropertyDescriptor"),
      getOwnPropertyDescriptors: cell("getOwnPropertyDescriptors"),
      getOwnPropertyNames: cell("getOwnPropertyNames"),
      getPrototypeOf: cell("getPrototypeOf"),
      is: cell("is"),
      isFrozen: cell("isFrozen"),
      isSealed: cell("isSealed"),
      isExtensible: cell("isExtensible"),
      keys: cell("keys"),
      objectPrototype: cell("objectPrototype"),
      seal: cell("seal"),
      preventExtensions: cell("preventExtensions"),
      setPrototypeOf: cell("setPrototypeOf"),
      values: cell("values"),
      fromEntries: cell("fromEntries"),
      hasOwn: cell("hasOwn"),
      speciesSymbol: cell("speciesSymbol"),
      toStringTagSymbol: cell("toStringTagSymbol"),
      iteratorSymbol: cell("iteratorSymbol"),
      matchAllSymbol: cell("matchAllSymbol"),
      unscopablesSymbol: cell("unscopablesSymbol"),
      symbolKeyFor: cell("symbolKeyFor"),
      symbolFor: cell("symbolFor"),
      isInteger: cell("isInteger"),
      stringifyJson: cell("stringifyJson"),
      defineProperty: cell("defineProperty"),
      apply: cell("apply"),
      construct: cell("construct"),
      reflectGet: cell("reflectGet"),
      reflectGetOwnPropertyDescriptor: cell("reflectGetOwnPropertyDescriptor"),
      reflectHas: cell("reflectHas"),
      reflectIsExtensible: cell("reflectIsExtensible"),
      ownKeys: cell("ownKeys"),
      reflectPreventExtensions: cell("reflectPreventExtensions"),
      reflectSet: cell("reflectSet"),
      isArray: cell("isArray"),
      arrayPrototype: cell("arrayPrototype"),
      arrayBufferPrototype: cell("arrayBufferPrototype"),
      mapPrototype: cell("mapPrototype"),
      proxyRevocable: cell("proxyRevocable"),
      regexpPrototype: cell("regexpPrototype"),
      setPrototype: cell("setPrototype"),
      stringPrototype: cell("stringPrototype"),
      weakmapPrototype: cell("weakmapPrototype"),
      weaksetPrototype: cell("weaksetPrototype"),
      functionPrototype: cell("functionPrototype"),
      promisePrototype: cell("promisePrototype"),
      generatorPrototype: cell("generatorPrototype"),
      iteratorPrototype: cell("iteratorPrototype"),
      typedArrayPrototype: cell("typedArrayPrototype"),
      uncurryThis: cell("uncurryThis"),
      objectHasOwnProperty: cell("objectHasOwnProperty"),
      arrayFilter: cell("arrayFilter"),
      arrayForEach: cell("arrayForEach"),
      arrayIncludes: cell("arrayIncludes"),
      arrayJoin: cell("arrayJoin"),
      arrayMap: cell("arrayMap"),
      arrayFlatMap: cell("arrayFlatMap"),
      arrayPop: cell("arrayPop"),
      arrayPush: cell("arrayPush"),
      arraySlice: cell("arraySlice"),
      arraySome: cell("arraySome"),
      arraySort: cell("arraySort"),
      iterateArray: cell("iterateArray"),
      arrayBufferSlice: cell("arrayBufferSlice"),
      arrayBufferGetByteLength: cell("arrayBufferGetByteLength"),
      typedArraySet: cell("typedArraySet"),
      mapSet: cell("mapSet"),
      mapGet: cell("mapGet"),
      mapHas: cell("mapHas"),
      mapDelete: cell("mapDelete"),
      mapEntries: cell("mapEntries"),
      iterateMap: cell("iterateMap"),
      setAdd: cell("setAdd"),
      setDelete: cell("setDelete"),
      setForEach: cell("setForEach"),
      setHas: cell("setHas"),
      iterateSet: cell("iterateSet"),
      regexpTest: cell("regexpTest"),
      regexpExec: cell("regexpExec"),
      matchAllRegExp: cell("matchAllRegExp"),
      stringEndsWith: cell("stringEndsWith"),
      stringIncludes: cell("stringIncludes"),
      stringIndexOf: cell("stringIndexOf"),
      stringMatch: cell("stringMatch"),
      generatorNext: cell("generatorNext"),
      generatorThrow: cell("generatorThrow"),
      stringReplace: cell("stringReplace"),
      stringSearch: cell("stringSearch"),
      stringSlice: cell("stringSlice"),
      stringSplit: cell("stringSplit"),
      stringStartsWith: cell("stringStartsWith"),
      iterateString: cell("iterateString"),
      weakmapDelete: cell("weakmapDelete"),
      weakmapGet: cell("weakmapGet"),
      weakmapHas: cell("weakmapHas"),
      weakmapSet: cell("weakmapSet"),
      weaksetAdd: cell("weaksetAdd"),
      weaksetHas: cell("weaksetHas"),
      functionToString: cell("functionToString"),
      functionBind: cell("functionBind"),
      promiseAll: cell("promiseAll"),
      promiseCatch: cell("promiseCatch"),
      promiseThen: cell("promiseThen"),
      finalizationRegistryRegister: cell("finalizationRegistryRegister"),
      finalizationRegistryUnregister: cell("finalizationRegistryUnregister"),
      getConstructorOf: cell("getConstructorOf"),
      isPrimitive: cell("isPrimitive"),
      isError: cell("isError"),
      identity: cell("identity"),
      FERAL_EVAL: cell("FERAL_EVAL"),
      FERAL_FUNCTION: cell("FERAL_FUNCTION"),
      noEvalEvaluate: cell("noEvalEvaluate"),
      FERAL_STACK_GETTER: cell("FERAL_STACK_GETTER"),
      FERAL_STACK_SETTER: cell("FERAL_STACK_SETTER"),
      AsyncGeneratorFunctionInstance: cell("AsyncGeneratorFunctionInstance"),
    },
    {
    },
    {
      makeEnvironmentCaptor: cell("makeEnvironmentCaptor"),
      getEnvironmentOption: cell("getEnvironmentOption"),
      getEnvironmentOptionsList: cell("getEnvironmentOptionsList"),
      environmentOptionsListHas: cell("environmentOptionsListHas"),
    },
    {
    },
    {
      isBufferImmutable: cell("isBufferImmutable"),
      sliceBufferToImmutable: cell("sliceBufferToImmutable"),
      optTransferBufferToImmutable: cell("optTransferBufferToImmutable"),
    },
    {
    },
    {
    },
    {
      an: cell("an"),
      bestEffortStringify: cell("bestEffortStringify"),
      enJoin: cell("enJoin"),
    },
    {
    },
    {
    },
    {
      makeCacheMapKit: cell("makeCacheMapKit"),
    },
    {
      makeCacheMapKit: cell("makeCacheMapKit"),
    },
    {
      makeNoteLogArgsArrayKit: cell("makeNoteLogArgsArrayKit"),
    },
    {
      q: cell("q"),
      b: cell("b"),
      X: cell("X"),
      unredactedDetails: cell("unredactedDetails"),
      makeError: cell("makeError"),
      annotateError: cell("annotateError"),
      loggedErrorHandler: cell("loggedErrorHandler"),
      makeAssert: cell("makeAssert"),
      assert: cell("assert"),
      assertEqual: cell("assertEqual"),
      sanitizeError: cell("sanitizeError"),
    },
    {
      isTypedArray: cell("isTypedArray"),
      makeHardener: cell("makeHardener"),
    },
    {
      cauterizeProperty: cell("cauterizeProperty"),
    },
    {
      NativeErrors: cell("NativeErrors"),
      constantProperties: cell("constantProperties"),
      universalPropertyNames: cell("universalPropertyNames"),
      initialGlobalPropertyNames: cell("initialGlobalPropertyNames"),
      sharedGlobalPropertyNames: cell("sharedGlobalPropertyNames"),
      uniqueGlobalPropertyNames: cell("uniqueGlobalPropertyNames"),
      FunctionInstance: cell("FunctionInstance"),
      AsyncFunctionInstance: cell("AsyncFunctionInstance"),
      isAccessorPermit: cell("isAccessorPermit"),
      permitted: cell("permitted"),
    },
    {
      makeIntrinsicsCollector: cell("makeIntrinsicsCollector"),
      getGlobalIntrinsics: cell("getGlobalIntrinsics"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      minEnablements: cell("minEnablements"),
      moderateEnablements: cell("moderateEnablements"),
      severeEnablements: cell("severeEnablements"),
    },
    {
      default: cell("default"),
    },
    {
      default: cell("default"),
    },
    {
      makeEvalFunction: cell("makeEvalFunction"),
    },
    {
      makeFunctionConstructor: cell("makeFunctionConstructor"),
    },
    {
      setGlobalObjectSymbolUnscopables: cell("setGlobalObjectSymbolUnscopables"),
      setGlobalObjectConstantProperties: cell("setGlobalObjectConstantProperties"),
      setGlobalObjectMutableProperties: cell("setGlobalObjectMutableProperties"),
      setGlobalObjectEvaluators: cell("setGlobalObjectEvaluators"),
    },
    {
      alwaysThrowHandler: cell("alwaysThrowHandler"),
      strictScopeTerminatorHandler: cell("strictScopeTerminatorHandler"),
      strictScopeTerminator: cell("strictScopeTerminator"),
    },
    {
      createSloppyGlobalsScopeTerminator: cell("createSloppyGlobalsScopeTerminator"),
    },
    {
      makeEvalScopeKit: cell("makeEvalScopeKit"),
    },
    {
      getSourceURL: cell("getSourceURL"),
    },
    {
      rejectHtmlComments: cell("rejectHtmlComments"),
      evadeHtmlCommentTest: cell("evadeHtmlCommentTest"),
      rejectImportExpressions: cell("rejectImportExpressions"),
      evadeImportExpressionTest: cell("evadeImportExpressionTest"),
      rejectSomeDirectEvalExpressions: cell("rejectSomeDirectEvalExpressions"),
      mandatoryTransforms: cell("mandatoryTransforms"),
      applyTransforms: cell("applyTransforms"),
      transforms: cell("transforms"),
    },
    {
      isValidIdentifierName: cell("isValidIdentifierName"),
      getScopeConstants: cell("getScopeConstants"),
    },
    {
      makeEvaluate: cell("makeEvaluate"),
    },
    {
      makeSafeEvaluator: cell("makeSafeEvaluator"),
    },
    {
      tameFunctionToString: cell("tameFunctionToString"),
    },
    {
      tameDomains: cell("tameDomains"),
    },
    {
      tameModuleSource: cell("tameModuleSource"),
    },
    {
      consoleLevelMethods: cell("consoleLevelMethods"),
      consoleOtherMethods: cell("consoleOtherMethods"),
      makeLoggingConsoleKit: cell("makeLoggingConsoleKit"),
      pumpLogToConsole: cell("pumpLogToConsole"),
      makeCausalConsole: cell("makeCausalConsole"),
      defineCausalConsoleFromLogger: cell("defineCausalConsoleFromLogger"),
      filterConsole: cell("filterConsole"),
    },
    {
      makeRejectionHandlers: cell("makeRejectionHandlers"),
    },
    {
      tameConsole: cell("tameConsole"),
    },
    {
      filterFileName: cell("filterFileName"),
      shortenCallSiteString: cell("shortenCallSiteString"),
      tameV8ErrorConstructor: cell("tameV8ErrorConstructor"),
    },
    {
      default: cell("default"),
    },
    {
      makeAlias: cell("makeAlias"),
      load: cell("load"),
      loadNow: cell("loadNow"),
    },
    {
      deferExports: cell("deferExports"),
      getDeferredExports: cell("getDeferredExports"),
    },
    {
      provideCompartmentEvaluator: cell("provideCompartmentEvaluator"),
      compartmentEvaluate: cell("compartmentEvaluate"),
    },
    {
      makeVirtualModuleInstance: cell("makeVirtualModuleInstance"),
      makeModuleInstance: cell("makeModuleInstance"),
    },
    {
      link: cell("link"),
      instantiate: cell("instantiate"),
    },
    {
      InertCompartment: cell("InertCompartment"),
      CompartmentPrototype: cell("CompartmentPrototype"),
      compartmentOptions: cell("compartmentOptions"),
      makeCompartmentConstructor: cell("makeCompartmentConstructor"),
    },
    {
      getAnonymousIntrinsics: cell("getAnonymousIntrinsics"),
    },
    {
      tameHarden: cell("tameHarden"),
    },
    {
      tameSymbolConstructor: cell("tameSymbolConstructor"),
    },
    {
      tameFauxDataProperty: cell("tameFauxDataProperty"),
      tameFauxDataProperties: cell("tameFauxDataProperties"),
    },
    {
      tameRegeneratorRuntime: cell("tameRegeneratorRuntime"),
    },
    {
      shimArrayBufferTransfer: cell("shimArrayBufferTransfer"),
    },
    {
      chooseReporter: cell("chooseReporter"),
      reportInGroup: cell("reportInGroup"),
    },
    {
      repairIntrinsics: cell("repairIntrinsics"),
    },
    {
    },
    {
    },
    {
    },
    {
    },
    {
    },
  ];

  defineProperties(cells[3], getOwnPropertyDescriptors(cells[2]));

  defineProperties(cells[11], {"makeCacheMapKit": { value: cells[10]["makeCacheMapKit"] } });

  const namespaces = cells.map(cells => freeze(create(null, {
    ...cells,
    // Make this appear like an ESM module namespace object.
    [Symbol.toStringTag]: {
      value: 'Module',
      writable: false,
      enumerable: false,
      configurable: false,
    },
  })));

  for (let index = 0; index < namespaces.length; index += 1) {
    cells[index]['*'] = cell('*', namespaces[index]);
  }

function observeImports(map, importName, importIndex) {
  for (const [name, observers] of map.get(importName)) {
    const cell = cells[importIndex][name];
    if (cell === undefined) {
      throw new ReferenceError(`Cannot import name ${name} (has ${Object.getOwnPropertyNames(cells[importIndex]).join(', ')})`);
    }
    for (const observer of observers) {
      cell.observe(observer);
    }
  }
}

  functors[0]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      universalThis: cells[0].globalThis.set,
      Array: cells[0].Array.set,
      ArrayBuffer: cells[0].ArrayBuffer.set,
      Date: cells[0].Date.set,
      FinalizationRegistry: cells[0].FinalizationRegistry.set,
      Float32Array: cells[0].Float32Array.set,
      JSON: cells[0].JSON.set,
      Map: cells[0].Map.set,
      Math: cells[0].Math.set,
      Number: cells[0].Number.set,
      Object: cells[0].Object.set,
      Promise: cells[0].Promise.set,
      Proxy: cells[0].Proxy.set,
      Reflect: cells[0].Reflect.set,
      FERAL_REG_EXP: cells[0].FERAL_REG_EXP.set,
      Set: cells[0].Set.set,
      String: cells[0].String.set,
      Symbol: cells[0].Symbol.set,
      Uint8Array: cells[0].Uint8Array.set,
      WeakMap: cells[0].WeakMap.set,
      WeakSet: cells[0].WeakSet.set,
      FERAL_ERROR: cells[0].FERAL_ERROR.set,
      RangeError: cells[0].RangeError.set,
      ReferenceError: cells[0].ReferenceError.set,
      SyntaxError: cells[0].SyntaxError.set,
      TypeError: cells[0].TypeError.set,
      AggregateError: cells[0].AggregateError.set,
      assign: cells[0].assign.set,
      create: cells[0].create.set,
      defineProperties: cells[0].defineProperties.set,
      entries: cells[0].entries.set,
      freeze: cells[0].freeze.set,
      getOwnPropertyDescriptor: cells[0].getOwnPropertyDescriptor.set,
      getOwnPropertyDescriptors: cells[0].getOwnPropertyDescriptors.set,
      getOwnPropertyNames: cells[0].getOwnPropertyNames.set,
      getPrototypeOf: cells[0].getPrototypeOf.set,
      is: cells[0].is.set,
      isFrozen: cells[0].isFrozen.set,
      isSealed: cells[0].isSealed.set,
      isExtensible: cells[0].isExtensible.set,
      keys: cells[0].keys.set,
      objectPrototype: cells[0].objectPrototype.set,
      seal: cells[0].seal.set,
      preventExtensions: cells[0].preventExtensions.set,
      setPrototypeOf: cells[0].setPrototypeOf.set,
      values: cells[0].values.set,
      fromEntries: cells[0].fromEntries.set,
      hasOwn: cells[0].hasOwn.set,
      speciesSymbol: cells[0].speciesSymbol.set,
      toStringTagSymbol: cells[0].toStringTagSymbol.set,
      iteratorSymbol: cells[0].iteratorSymbol.set,
      matchAllSymbol: cells[0].matchAllSymbol.set,
      unscopablesSymbol: cells[0].unscopablesSymbol.set,
      symbolKeyFor: cells[0].symbolKeyFor.set,
      symbolFor: cells[0].symbolFor.set,
      isInteger: cells[0].isInteger.set,
      stringifyJson: cells[0].stringifyJson.set,
      defineProperty: cells[0].defineProperty.set,
      apply: cells[0].apply.set,
      construct: cells[0].construct.set,
      reflectGet: cells[0].reflectGet.set,
      reflectGetOwnPropertyDescriptor: cells[0].reflectGetOwnPropertyDescriptor.set,
      reflectHas: cells[0].reflectHas.set,
      reflectIsExtensible: cells[0].reflectIsExtensible.set,
      ownKeys: cells[0].ownKeys.set,
      reflectPreventExtensions: cells[0].reflectPreventExtensions.set,
      reflectSet: cells[0].reflectSet.set,
      isArray: cells[0].isArray.set,
      arrayPrototype: cells[0].arrayPrototype.set,
      arrayBufferPrototype: cells[0].arrayBufferPrototype.set,
      mapPrototype: cells[0].mapPrototype.set,
      proxyRevocable: cells[0].proxyRevocable.set,
      regexpPrototype: cells[0].regexpPrototype.set,
      setPrototype: cells[0].setPrototype.set,
      stringPrototype: cells[0].stringPrototype.set,
      weakmapPrototype: cells[0].weakmapPrototype.set,
      weaksetPrototype: cells[0].weaksetPrototype.set,
      functionPrototype: cells[0].functionPrototype.set,
      promisePrototype: cells[0].promisePrototype.set,
      generatorPrototype: cells[0].generatorPrototype.set,
      iteratorPrototype: cells[0].iteratorPrototype.set,
      typedArrayPrototype: cells[0].typedArrayPrototype.set,
      uncurryThis: cells[0].uncurryThis.set,
      objectHasOwnProperty: cells[0].objectHasOwnProperty.set,
      arrayFilter: cells[0].arrayFilter.set,
      arrayForEach: cells[0].arrayForEach.set,
      arrayIncludes: cells[0].arrayIncludes.set,
      arrayJoin: cells[0].arrayJoin.set,
      arrayMap: cells[0].arrayMap.set,
      arrayFlatMap: cells[0].arrayFlatMap.set,
      arrayPop: cells[0].arrayPop.set,
      arrayPush: cells[0].arrayPush.set,
      arraySlice: cells[0].arraySlice.set,
      arraySome: cells[0].arraySome.set,
      arraySort: cells[0].arraySort.set,
      iterateArray: cells[0].iterateArray.set,
      arrayBufferSlice: cells[0].arrayBufferSlice.set,
      arrayBufferGetByteLength: cells[0].arrayBufferGetByteLength.set,
      typedArraySet: cells[0].typedArraySet.set,
      mapSet: cells[0].mapSet.set,
      mapGet: cells[0].mapGet.set,
      mapHas: cells[0].mapHas.set,
      mapDelete: cells[0].mapDelete.set,
      mapEntries: cells[0].mapEntries.set,
      iterateMap: cells[0].iterateMap.set,
      setAdd: cells[0].setAdd.set,
      setDelete: cells[0].setDelete.set,
      setForEach: cells[0].setForEach.set,
      setHas: cells[0].setHas.set,
      iterateSet: cells[0].iterateSet.set,
      regexpTest: cells[0].regexpTest.set,
      regexpExec: cells[0].regexpExec.set,
      matchAllRegExp: cells[0].matchAllRegExp.set,
      stringEndsWith: cells[0].stringEndsWith.set,
      stringIncludes: cells[0].stringIncludes.set,
      stringIndexOf: cells[0].stringIndexOf.set,
      stringMatch: cells[0].stringMatch.set,
      generatorNext: cells[0].generatorNext.set,
      generatorThrow: cells[0].generatorThrow.set,
      stringReplace: cells[0].stringReplace.set,
      stringSearch: cells[0].stringSearch.set,
      stringSlice: cells[0].stringSlice.set,
      stringSplit: cells[0].stringSplit.set,
      stringStartsWith: cells[0].stringStartsWith.set,
      iterateString: cells[0].iterateString.set,
      weakmapDelete: cells[0].weakmapDelete.set,
      weakmapGet: cells[0].weakmapGet.set,
      weakmapHas: cells[0].weakmapHas.set,
      weakmapSet: cells[0].weakmapSet.set,
      weaksetAdd: cells[0].weaksetAdd.set,
      weaksetHas: cells[0].weaksetHas.set,
      functionToString: cells[0].functionToString.set,
      functionBind: cells[0].functionBind.set,
      promiseAll: cells[0].promiseAll.set,
      promiseCatch: cells[0].promiseCatch.set,
      promiseThen: cells[0].promiseThen.set,
      finalizationRegistryRegister: cells[0].finalizationRegistryRegister.set,
      finalizationRegistryUnregister: cells[0].finalizationRegistryUnregister.set,
      getConstructorOf: cells[0].getConstructorOf.set,
      isPrimitive: cells[0].isPrimitive.set,
      isError: cells[0].isError.set,
      identity: cells[0].identity.set,
      FERAL_EVAL: cells[0].FERAL_EVAL.set,
      FERAL_FUNCTION: cells[0].FERAL_FUNCTION.set,
      noEvalEvaluate: cells[0].noEvalEvaluate.set,
      FERAL_STACK_GETTER: cells[0].FERAL_STACK_GETTER.set,
      FERAL_STACK_SETTER: cells[0].FERAL_STACK_SETTER.set,
      AsyncGeneratorFunctionInstance: cells[0].AsyncGeneratorFunctionInstance.set,
    },
    importMeta: {},
  });
  functors[1]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[2]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      makeEnvironmentCaptor: cells[2].makeEnvironmentCaptor.set,
      getEnvironmentOption: cells[2].getEnvironmentOption.set,
      getEnvironmentOptionsList: cells[2].getEnvironmentOptionsList.set,
      environmentOptionsListHas: cells[2].environmentOptionsListHas.set,
    },
    importMeta: {},
  });
  functors[3]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./src/env-options.js", 2);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[4]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      isBufferImmutable: cells[4].isBufferImmutable.set,
      sliceBufferToImmutable: cells[4].sliceBufferToImmutable.set,
      optTransferBufferToImmutable: cells[4].optTransferBufferToImmutable.set,
    },
    importMeta: {},
  });
  functors[5]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./immutable-arraybuffer-pony.js", 4);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[6]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./src/immutable-arraybuffer-shim.js", 5);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[7]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      an: cells[7].an.set,
      bestEffortStringify: cells[7].bestEffortStringify.set,
      enJoin: cells[7].enJoin.set,
    },
    importMeta: {},
  });
  functors[8]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[9]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[10]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      makeCacheMapKit: cells[10].makeCacheMapKit.set,
    },
    importMeta: {},
  });
  functors[11]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./src/cachemap.js", 10);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[12]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "@endo/cache-map", 11);
    },
    liveVar: {
    },
    onceVar: {
      makeNoteLogArgsArrayKit: cells[12].makeNoteLogArgsArrayKit.set,
    },
    importMeta: {},
  });
  functors[13]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
      observeImports(map, "./stringify-utils.js", 7);
      observeImports(map, "./types.js", 8);
      observeImports(map, "./internal-types.js", 9);
      observeImports(map, "./note-log-args.js", 12);
    },
    liveVar: {
    },
    onceVar: {
      quote: cells[13].q.set,
      bare: cells[13].b.set,
      redactedDetails: cells[13].X.set,
      unredactedDetails: cells[13].unredactedDetails.set,
      makeError: cells[13].makeError.set,
      note: cells[13].annotateError.set,
      loggedErrorHandler: cells[13].loggedErrorHandler.set,
      makeAssert: cells[13].makeAssert.set,
      assert: cells[13].assert.set,
      assertEqual: cells[13].assertEqual.set,
      sanitizeError: cells[13].sanitizeError.set,
    },
    importMeta: {},
  });
  functors[14]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      isTypedArray: cells[14].isTypedArray.set,
      makeHardener: cells[14].makeHardener.set,
    },
    importMeta: {},
  });
  functors[15]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      cauterizeProperty: cells[15].cauterizeProperty.set,
    },
    importMeta: {},
  });
  functors[16]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      NativeErrors: cells[16].NativeErrors.set,
      constantProperties: cells[16].constantProperties.set,
      universalPropertyNames: cells[16].universalPropertyNames.set,
      initialGlobalPropertyNames: cells[16].initialGlobalPropertyNames.set,
      sharedGlobalPropertyNames: cells[16].sharedGlobalPropertyNames.set,
      uniqueGlobalPropertyNames: cells[16].uniqueGlobalPropertyNames.set,
      FunctionInstance: cells[16].FunctionInstance.set,
      AsyncFunctionInstance: cells[16].AsyncFunctionInstance.set,
      isAccessorPermit: cells[16].isAccessorPermit.set,
      permitted: cells[16].permitted.set,
    },
    importMeta: {},
  });
  functors[17]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./cauterize-property.js", 15);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./permits.js", 16);
    },
    liveVar: {
    },
    onceVar: {
      makeIntrinsicsCollector: cells[17].makeIntrinsicsCollector.set,
      getGlobalIntrinsics: cells[17].getGlobalIntrinsics.set,
    },
    importMeta: {},
  });
  functors[18]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./permits.js", 16);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./cauterize-property.js", 15);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[18].default.set,
    },
    importMeta: {},
  });
  functors[19]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[19].default.set,
    },
    importMeta: {},
  });
  functors[20]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[20].default.set,
    },
    importMeta: {},
  });
  functors[21]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[21].default.set,
    },
    importMeta: {},
  });
  functors[22]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[22].default.set,
    },
    importMeta: {},
  });
  functors[23]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      minEnablements: cells[23].minEnablements.set,
      moderateEnablements: cells[23].moderateEnablements.set,
      severeEnablements: cells[23].severeEnablements.set,
    },
    importMeta: {},
  });
  functors[24]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./enablements.js", 23);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[24].default.set,
    },
    importMeta: {},
  });
  functors[25]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[25].default.set,
    },
    importMeta: {},
  });
  functors[26]({
    imports(entries) {
      const map = new Map(entries);
    },
    liveVar: {
    },
    onceVar: {
      makeEvalFunction: cells[26].makeEvalFunction.set,
    },
    importMeta: {},
  });
  functors[27]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      makeFunctionConstructor: cells[27].makeFunctionConstructor.set,
    },
    importMeta: {},
  });
  functors[28]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./make-eval-function.js", 26);
      observeImports(map, "./make-function-constructor.js", 27);
      observeImports(map, "./permits.js", 16);
    },
    liveVar: {
    },
    onceVar: {
      setGlobalObjectSymbolUnscopables: cells[28].setGlobalObjectSymbolUnscopables.set,
      setGlobalObjectConstantProperties: cells[28].setGlobalObjectConstantProperties.set,
      setGlobalObjectMutableProperties: cells[28].setGlobalObjectMutableProperties.set,
      setGlobalObjectEvaluators: cells[28].setGlobalObjectEvaluators.set,
    },
    importMeta: {},
  });
  functors[29]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      alwaysThrowHandler: cells[29].alwaysThrowHandler.set,
      strictScopeTerminatorHandler: cells[29].strictScopeTerminatorHandler.set,
      strictScopeTerminator: cells[29].strictScopeTerminator.set,
    },
    importMeta: {},
  });
  functors[30]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./strict-scope-terminator.js", 29);
    },
    liveVar: {
    },
    onceVar: {
      createSloppyGlobalsScopeTerminator: cells[30].createSloppyGlobalsScopeTerminator.set,
    },
    importMeta: {},
  });
  functors[31]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      makeEvalScopeKit: cells[31].makeEvalScopeKit.set,
    },
    importMeta: {},
  });
  functors[32]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      getSourceURL: cells[32].getSourceURL.set,
    },
    importMeta: {},
  });
  functors[33]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./get-source-url.js", 32);
    },
    liveVar: {
    },
    onceVar: {
      rejectHtmlComments: cells[33].rejectHtmlComments.set,
      evadeHtmlCommentTest: cells[33].evadeHtmlCommentTest.set,
      rejectImportExpressions: cells[33].rejectImportExpressions.set,
      evadeImportExpressionTest: cells[33].evadeImportExpressionTest.set,
      rejectSomeDirectEvalExpressions: cells[33].rejectSomeDirectEvalExpressions.set,
      mandatoryTransforms: cells[33].mandatoryTransforms.set,
      applyTransforms: cells[33].applyTransforms.set,
      transforms: cells[33].transforms.set,
    },
    importMeta: {},
  });
  functors[34]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      isValidIdentifierName: cells[34].isValidIdentifierName.set,
      getScopeConstants: cells[34].getScopeConstants.set,
    },
    importMeta: {},
  });
  functors[35]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./scope-constants.js", 34);
    },
    liveVar: {
    },
    onceVar: {
      makeEvaluate: cells[35].makeEvaluate.set,
    },
    importMeta: {},
  });
  functors[36]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./strict-scope-terminator.js", 29);
      observeImports(map, "./sloppy-globals-scope-terminator.js", 30);
      observeImports(map, "./eval-scope.js", 31);
      observeImports(map, "./transforms.js", 33);
      observeImports(map, "./make-evaluate.js", 35);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      makeSafeEvaluator: cells[36].makeSafeEvaluator.set,
    },
    importMeta: {},
  });
  functors[37]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameFunctionToString: cells[37].tameFunctionToString.set,
    },
    importMeta: {},
  });
  functors[38]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameDomains: cells[38].tameDomains.set,
    },
    importMeta: {},
  });
  functors[39]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameModuleSource: cells[39].tameModuleSource.set,
    },
    importMeta: {},
  });
  functors[40]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      consoleLevelMethods: cells[40].consoleLevelMethods.set,
      consoleOtherMethods: cells[40].consoleOtherMethods.set,
      makeLoggingConsoleKit: cells[40].makeLoggingConsoleKit.set,
      pumpLogToConsole: cells[40].pumpLogToConsole.set,
      makeCausalConsole: cells[40].makeCausalConsole.set,
      defineCausalConsoleFromLogger: cells[40].defineCausalConsoleFromLogger.set,
      filterConsole: cells[40].filterConsole.set,
    },
    importMeta: {},
  });
  functors[41]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      makeRejectionHandlers: cells[41].makeRejectionHandlers.set,
    },
    importMeta: {},
  });
  functors[42]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
      observeImports(map, "./assert.js", 13);
      observeImports(map, "./console.js", 40);
      observeImports(map, "./unhandled-rejection.js", 41);
    },
    liveVar: {
    },
    onceVar: {
      tameConsole: cells[42].tameConsole.set,
    },
    importMeta: {},
  });
  functors[43]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      filterFileName: cells[43].filterFileName.set,
      shortenCallSiteString: cells[43].shortenCallSiteString.set,
      tameV8ErrorConstructor: cells[43].tameV8ErrorConstructor.set,
    },
    importMeta: {},
  });
  functors[44]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "../commons.js", 0);
      observeImports(map, "../permits.js", 16);
      observeImports(map, "./tame-v8-error-constructor.js", 43);
    },
    liveVar: {
    },
    onceVar: {
      default: cells[44].default.set,
    },
    importMeta: {},
  });
  functors[45]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "@endo/env-options", 3);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      makeAlias: cells[45].makeAlias.set,
      load: cells[45].load.set,
      loadNow: cells[45].loadNow.set,
    },
    importMeta: {},
  });
  functors[46]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./module-load.js", 45);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      deferExports: cells[46].deferExports.set,
      getDeferredExports: cells[46].getDeferredExports.set,
    },
    importMeta: {},
  });
  functors[47]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./transforms.js", 33);
      observeImports(map, "./make-safe-evaluator.js", 36);
    },
    liveVar: {
    },
    onceVar: {
      provideCompartmentEvaluator: cells[47].provideCompartmentEvaluator.set,
      compartmentEvaluate: cells[47].compartmentEvaluate.set,
    },
    importMeta: {},
  });
  functors[48]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./error/assert.js", 13);
      observeImports(map, "./module-proxy.js", 46);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./compartment-evaluate.js", 47);
    },
    liveVar: {
    },
    onceVar: {
      makeVirtualModuleInstance: cells[48].makeVirtualModuleInstance.set,
      makeModuleInstance: cells[48].makeModuleInstance.set,
    },
    importMeta: {},
  });
  functors[49]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./error/assert.js", 13);
      observeImports(map, "./module-instance.js", 48);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      link: cells[49].link.set,
      instantiate: cells[49].instantiate.set,
    },
    importMeta: {},
  });
  functors[50]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./global-object.js", 28);
      observeImports(map, "./error/assert.js", 13);
      observeImports(map, "./permits.js", 16);
      observeImports(map, "./module-load.js", 45);
      observeImports(map, "./module-link.js", 49);
      observeImports(map, "./module-proxy.js", 46);
      observeImports(map, "./compartment-evaluate.js", 47);
      observeImports(map, "./make-safe-evaluator.js", 36);
    },
    liveVar: {
    },
    onceVar: {
      InertCompartment: cells[50].InertCompartment.set,
      CompartmentPrototype: cells[50].CompartmentPrototype.set,
      compartmentOptions: cells[50].compartmentOptions.set,
      makeCompartmentConstructor: cells[50].makeCompartmentConstructor.set,
    },
    importMeta: {},
  });
  functors[51]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./compartment.js", 50);
    },
    liveVar: {
    },
    onceVar: {
      getAnonymousIntrinsics: cells[51].getAnonymousIntrinsics.set,
    },
    importMeta: {},
  });
  functors[52]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameHarden: cells[52].tameHarden.set,
    },
    importMeta: {},
  });
  functors[53]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameSymbolConstructor: cells[53].tameSymbolConstructor.set,
    },
    importMeta: {},
  });
  functors[54]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameFauxDataProperty: cells[54].tameFauxDataProperty.set,
      tameFauxDataProperties: cells[54].tameFauxDataProperties.set,
    },
    importMeta: {},
  });
  functors[55]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      tameRegeneratorRuntime: cells[55].tameRegeneratorRuntime.set,
    },
    importMeta: {},
  });
  functors[56]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
    },
    liveVar: {
    },
    onceVar: {
      shimArrayBufferTransfer: cells[56].shimArrayBufferTransfer.set,
    },
    importMeta: {},
  });
  functors[57]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
      chooseReporter: cells[57].chooseReporter.set,
      reportInGroup: cells[57].reportInGroup.set,
    },
    importMeta: {},
  });
  functors[58]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "@endo/env-options", 3);
      observeImports(map, "@endo/immutable-arraybuffer/shim.js", 6);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./make-hardener.js", 14);
      observeImports(map, "./intrinsics.js", 17);
      observeImports(map, "./permits-intrinsics.js", 18);
      observeImports(map, "./tame-function-constructors.js", 19);
      observeImports(map, "./tame-date-constructor.js", 20);
      observeImports(map, "./tame-math-object.js", 21);
      observeImports(map, "./tame-regexp-constructor.js", 22);
      observeImports(map, "./enable-property-overrides.js", 24);
      observeImports(map, "./tame-locale-methods.js", 25);
      observeImports(map, "./global-object.js", 28);
      observeImports(map, "./make-safe-evaluator.js", 36);
      observeImports(map, "./permits.js", 16);
      observeImports(map, "./tame-function-tostring.js", 37);
      observeImports(map, "./tame-domains.js", 38);
      observeImports(map, "./tame-module-source.js", 39);
      observeImports(map, "./error/tame-console.js", 42);
      observeImports(map, "./error/tame-error-constructor.js", 44);
      observeImports(map, "./error/assert.js", 13);
      observeImports(map, "./get-anonymous-intrinsics.js", 51);
      observeImports(map, "./compartment.js", 50);
      observeImports(map, "./tame-harden.js", 52);
      observeImports(map, "./tame-symbol-constructor.js", 53);
      observeImports(map, "./tame-faux-data-properties.js", 54);
      observeImports(map, "./tame-regenerator-runtime.js", 55);
      observeImports(map, "./shim-arraybuffer-transfer.js", 56);
      observeImports(map, "./reporting.js", 57);
    },
    liveVar: {
    },
    onceVar: {
      repairIntrinsics: cells[58].repairIntrinsics.set,
    },
    importMeta: {},
  });
  functors[59]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./assert-sloppy-mode.js", 1);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./lockdown.js", 58);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[60]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./compartment.js", 50);
      observeImports(map, "./tame-function-tostring.js", 37);
      observeImports(map, "./intrinsics.js", 17);
      observeImports(map, "./reporting.js", 57);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[61]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[62]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./commons.js", 0);
      observeImports(map, "./error/console.js", 40);
      observeImports(map, "./error/assert.js", 13);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });
  functors[63]({
    imports(entries) {
      const map = new Map(entries);
      observeImports(map, "./src/lockdown-shim.js", 59);
      observeImports(map, "./src/compartment-shim.js", 60);
      observeImports(map, "./src/assert-shim.js", 61);
      observeImports(map, "./src/console-shim.js", 62);
    },
    liveVar: {
    },
    onceVar: {
    },
    importMeta: {},
  });

  return cells[cells.length - 1]['*'].get();
})([
// === 0. ses ./src/commons.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);/**
 * Captures native intrinsics during initialization, so vetted shims
 * (running between initialization of SES and calling lockdown) are free to
 * modify the environment without compromising the integrity of SES. For
 * example, a vetted shim can modify Object.assign because we capture and
 * export Object and assign here, then never again consult Object to get its
 * assign property.
 *
 * This pattern of use is enforced by eslint rules no-restricted-globals and
 * no-polymorphic-call.
 * We maintain the list of restricted globals in ../package.json.
 *
 * @module
 */

/* global globalThis */
/* eslint-disable no-restricted-globals */

// We cannot use globalThis as the local name since it would capture the
// lexical name.
const universalThis = globalThis;$h͏_once.universalThis(universalThis);


       const {
  Array,
  ArrayBuffer,
  Date,
  FinalizationRegistry,
  Float32Array,
  JSON,
  Map,
  Math,
  Number,
  Object,
  Promise,
  Proxy,
  Reflect,
  RegExp: FERAL_REG_EXP,
  Set,
  String,
  Symbol,
  Uint8Array,
  WeakMap,
  WeakSet,
} = globalThis;$h͏_once.Array(Array);$h͏_once.ArrayBuffer(ArrayBuffer);$h͏_once.Date(Date);$h͏_once.FinalizationRegistry(FinalizationRegistry);$h͏_once.Float32Array(Float32Array);$h͏_once.JSON(JSON);$h͏_once.Map(Map);$h͏_once.Math(Math);$h͏_once.Number(Number);$h͏_once.Object(Object);$h͏_once.Promise(Promise);$h͏_once.Proxy(Proxy);$h͏_once.Reflect(Reflect);$h͏_once.FERAL_REG_EXP(FERAL_REG_EXP);$h͏_once.Set(Set);$h͏_once.String(String);$h͏_once.Symbol(Symbol);$h͏_once.Uint8Array(Uint8Array);$h͏_once.WeakMap(WeakMap);$h͏_once.WeakSet(WeakSet);

       const {
  // The feral Error constructor is safe for internal use, but must not be
  // revealed to post-lockdown code in any compartment including the start
  // compartment since in V8 at least it bears stack inspection capabilities.
  Error: FERAL_ERROR,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  AggregateError,
} = globalThis;$h͏_once.FERAL_ERROR(FERAL_ERROR);$h͏_once.RangeError(RangeError);$h͏_once.ReferenceError(ReferenceError);$h͏_once.SyntaxError(SyntaxError);$h͏_once.TypeError(TypeError);$h͏_once.AggregateError(AggregateError);

       const {
  assign,
  create,
  defineProperties,
  entries,
  freeze,
  getOwnPropertyDescriptor,
  getOwnPropertyDescriptors,
  getOwnPropertyNames,
  getPrototypeOf,
  is,
  isFrozen,
  isSealed,
  isExtensible,
  keys,
  prototype: objectPrototype,
  seal,
  preventExtensions,
  setPrototypeOf,
  values,
  fromEntries,
  hasOwn,
} = Object;$h͏_once.assign(assign);$h͏_once.create(create);$h͏_once.defineProperties(defineProperties);$h͏_once.entries(entries);$h͏_once.freeze(freeze);$h͏_once.getOwnPropertyDescriptor(getOwnPropertyDescriptor);$h͏_once.getOwnPropertyDescriptors(getOwnPropertyDescriptors);$h͏_once.getOwnPropertyNames(getOwnPropertyNames);$h͏_once.getPrototypeOf(getPrototypeOf);$h͏_once.is(is);$h͏_once.isFrozen(isFrozen);$h͏_once.isSealed(isSealed);$h͏_once.isExtensible(isExtensible);$h͏_once.keys(keys);$h͏_once.objectPrototype(objectPrototype);$h͏_once.seal(seal);$h͏_once.preventExtensions(preventExtensions);$h͏_once.setPrototypeOf(setPrototypeOf);$h͏_once.values(values);$h͏_once.fromEntries(fromEntries);$h͏_once.hasOwn(hasOwn);

       const {
  species: speciesSymbol,
  toStringTag: toStringTagSymbol,
  iterator: iteratorSymbol,
  matchAll: matchAllSymbol,
  unscopables: unscopablesSymbol,
  keyFor: symbolKeyFor,
  for: symbolFor,
} = Symbol;$h͏_once.speciesSymbol(speciesSymbol);$h͏_once.toStringTagSymbol(toStringTagSymbol);$h͏_once.iteratorSymbol(iteratorSymbol);$h͏_once.matchAllSymbol(matchAllSymbol);$h͏_once.unscopablesSymbol(unscopablesSymbol);$h͏_once.symbolKeyFor(symbolKeyFor);$h͏_once.symbolFor(symbolFor);

       const { isInteger } = Number;$h͏_once.isInteger(isInteger);

       const { stringify: stringifyJson } = JSON;

// Needed only for the Safari bug workaround below
$h͏_once.stringifyJson(stringifyJson);const{defineProperty:originalDefineProperty}=Object;

       const defineProperty = (object, prop, descriptor) => {
  // We used to do the following, until we had to reopen Safari bug
  // https://bugs.webkit.org/show_bug.cgi?id=222538#c17
  // Once this is fixed, we may restore it.
  // // Object.defineProperty is allowed to fail silently so we use
  // // Object.defineProperties instead.
  // return defineProperties(object, { [prop]: descriptor });

  // Instead, to workaround the Safari bug
  const result = originalDefineProperty(object, prop, descriptor);
  if (result !== object) {
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_DEFINE_PROPERTY_FAILED_SILENTLY.md
    throw TypeError(
      `Please report that the original defineProperty silently failed to set ${stringifyJson(
        String(prop),
      )}. (SES_DEFINE_PROPERTY_FAILED_SILENTLY)`,
    );
  }
  return result;
};$h͏_once.defineProperty(defineProperty);

       const {
  apply,
  construct,
  get: reflectGet,
  getOwnPropertyDescriptor: reflectGetOwnPropertyDescriptor,
  has: reflectHas,
  isExtensible: reflectIsExtensible,
  ownKeys,
  preventExtensions: reflectPreventExtensions,
  set: reflectSet,
} = Reflect;$h͏_once.apply(apply);$h͏_once.construct(construct);$h͏_once.reflectGet(reflectGet);$h͏_once.reflectGetOwnPropertyDescriptor(reflectGetOwnPropertyDescriptor);$h͏_once.reflectHas(reflectHas);$h͏_once.reflectIsExtensible(reflectIsExtensible);$h͏_once.ownKeys(ownKeys);$h͏_once.reflectPreventExtensions(reflectPreventExtensions);$h͏_once.reflectSet(reflectSet);

       const { isArray, prototype: arrayPrototype } = Array;$h͏_once.isArray(isArray);$h͏_once.arrayPrototype(arrayPrototype);
       const { prototype: arrayBufferPrototype } = ArrayBuffer;$h͏_once.arrayBufferPrototype(arrayBufferPrototype);
       const { prototype: mapPrototype } = Map;$h͏_once.mapPrototype(mapPrototype);
       const { revocable: proxyRevocable } = Proxy;$h͏_once.proxyRevocable(proxyRevocable);
       const { prototype: regexpPrototype } = RegExp;$h͏_once.regexpPrototype(regexpPrototype);
       const { prototype: setPrototype } = Set;$h͏_once.setPrototype(setPrototype);
       const { prototype: stringPrototype } = String;$h͏_once.stringPrototype(stringPrototype);
       const { prototype: weakmapPrototype } = WeakMap;$h͏_once.weakmapPrototype(weakmapPrototype);
       const { prototype: weaksetPrototype } = WeakSet;$h͏_once.weaksetPrototype(weaksetPrototype);
       const { prototype: functionPrototype } = Function;$h͏_once.functionPrototype(functionPrototype);
       const { prototype: promisePrototype } = Promise;$h͏_once.promisePrototype(promisePrototype);
       const { prototype: generatorPrototype } = getPrototypeOf(
  // eslint-disable-next-line no-empty-function, func-names
  function* () {},
);$h͏_once.generatorPrototype(generatorPrototype);
       const iteratorPrototype = getPrototypeOf(
  // eslint-disable-next-line @endo/no-polymorphic-call
  getPrototypeOf(arrayPrototype.values()),
);$h͏_once.iteratorPrototype(iteratorPrototype);

       const typedArrayPrototype = getPrototypeOf(Uint8Array.prototype);$h͏_once.typedArrayPrototype(typedArrayPrototype);

const { bind } = functionPrototype;

/**
 * uncurryThis()
 * Equivalent of: fn => (thisArg, ...args) => apply(fn, thisArg, args)
 *
 * See those reference for a complete explanation:
 * http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
 * which only lives at
 * http://web.archive.org/web/20160805225710/http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
 *
 * @type {<F extends (this: any, ...args: any[]) => any>(fn: F) => ((thisArg: ThisParameterType<F>, ...args: Parameters<F>) => ReturnType<F>)}
 */
       const uncurryThis = bind.bind(bind.call); // eslint-disable-line @endo/no-polymorphic-call

/**
 * @deprecated Use `hasOwn` instead
 */$h͏_once.uncurryThis(uncurryThis);
       const objectHasOwnProperty = hasOwn;
//
$h͏_once.objectHasOwnProperty(objectHasOwnProperty);const arrayFilter=uncurryThis(arrayPrototype.filter);$h͏_once.arrayFilter(arrayFilter);
       const arrayForEach = uncurryThis(arrayPrototype.forEach);$h͏_once.arrayForEach(arrayForEach);
       const arrayIncludes = uncurryThis(arrayPrototype.includes);$h͏_once.arrayIncludes(arrayIncludes);
       const arrayJoin = uncurryThis(arrayPrototype.join);
/** @type {<T, U>(thisArg: readonly T[], callbackfn: (value: T, index: number, array: T[]) => U, cbThisArg?: any) => U[]} */$h͏_once.arrayJoin(arrayJoin);
       const arrayMap = /** @type {any} */ (uncurryThis(arrayPrototype.map));$h͏_once.arrayMap(arrayMap);
       const arrayFlatMap = /** @type {any} */ (
  uncurryThis(arrayPrototype.flatMap)
);$h͏_once.arrayFlatMap(arrayFlatMap);
       const arrayPop = uncurryThis(arrayPrototype.pop);
/** @type {<T>(thisArg: T[], ...items: T[]) => number} */$h͏_once.arrayPop(arrayPop);
       const arrayPush = uncurryThis(arrayPrototype.push);$h͏_once.arrayPush(arrayPush);
       const arraySlice = uncurryThis(arrayPrototype.slice);$h͏_once.arraySlice(arraySlice);
       const arraySome = uncurryThis(arrayPrototype.some);$h͏_once.arraySome(arraySome);
       const arraySort = uncurryThis(arrayPrototype.sort);$h͏_once.arraySort(arraySort);
       const iterateArray = uncurryThis(arrayPrototype[iteratorSymbol]);
//
$h͏_once.iterateArray(iterateArray);const arrayBufferSlice=uncurryThis(arrayBufferPrototype.slice);
/** @type {(b: ArrayBuffer) => number} */$h͏_once.arrayBufferSlice(arrayBufferSlice);
       const arrayBufferGetByteLength = uncurryThis(
  // @ts-expect-error we know it is there on all conforming platforms
  getOwnPropertyDescriptor(arrayBufferPrototype, 'byteLength').get,
);
//
$h͏_once.arrayBufferGetByteLength(arrayBufferGetByteLength);const typedArraySet=uncurryThis(typedArrayPrototype.set);
//
$h͏_once.typedArraySet(typedArraySet);const mapSet=uncurryThis(mapPrototype.set);$h͏_once.mapSet(mapSet);
       const mapGet = uncurryThis(mapPrototype.get);$h͏_once.mapGet(mapGet);
       const mapHas = uncurryThis(mapPrototype.has);$h͏_once.mapHas(mapHas);
       const mapDelete = uncurryThis(mapPrototype.delete);$h͏_once.mapDelete(mapDelete);
       const mapEntries = uncurryThis(mapPrototype.entries);$h͏_once.mapEntries(mapEntries);
       const iterateMap = uncurryThis(mapPrototype[iteratorSymbol]);
//
$h͏_once.iterateMap(iterateMap);const setAdd=uncurryThis(setPrototype.add);$h͏_once.setAdd(setAdd);
       const setDelete = uncurryThis(setPrototype.delete);$h͏_once.setDelete(setDelete);
       const setForEach = uncurryThis(setPrototype.forEach);$h͏_once.setForEach(setForEach);
       const setHas = uncurryThis(setPrototype.has);$h͏_once.setHas(setHas);
       const iterateSet = uncurryThis(setPrototype[iteratorSymbol]);
//
$h͏_once.iterateSet(iterateSet);const regexpTest=uncurryThis(regexpPrototype.test);$h͏_once.regexpTest(regexpTest);
       const regexpExec = uncurryThis(regexpPrototype.exec);$h͏_once.regexpExec(regexpExec);
       const matchAllRegExp = uncurryThis(regexpPrototype[matchAllSymbol]);
//
$h͏_once.matchAllRegExp(matchAllRegExp);const stringEndsWith=uncurryThis(stringPrototype.endsWith);$h͏_once.stringEndsWith(stringEndsWith);
       const stringIncludes = uncurryThis(stringPrototype.includes);$h͏_once.stringIncludes(stringIncludes);
       const stringIndexOf = uncurryThis(stringPrototype.indexOf);$h͏_once.stringIndexOf(stringIndexOf);
       const stringMatch = uncurryThis(stringPrototype.match);$h͏_once.stringMatch(stringMatch);
       const generatorNext = uncurryThis(generatorPrototype.next);$h͏_once.generatorNext(generatorNext);
       const generatorThrow = uncurryThis(generatorPrototype.throw);

/**
 * @type { &
 *   ((thisArg: string, searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string) => string) &
 *   ((thisArg: string, searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string) => string)
 * }
 */$h͏_once.generatorThrow(generatorThrow);
       const stringReplace = /** @type {any} */ (
  uncurryThis(stringPrototype.replace)
);$h͏_once.stringReplace(stringReplace);
       const stringSearch = uncurryThis(stringPrototype.search);$h͏_once.stringSearch(stringSearch);
       const stringSlice = uncurryThis(stringPrototype.slice);$h͏_once.stringSlice(stringSlice);
       const stringSplit =
  /** @type {(thisArg: string, splitter: string | RegExp | { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number) => string[]} */ (
    uncurryThis(stringPrototype.split)
  );$h͏_once.stringSplit(stringSplit);
       const stringStartsWith = uncurryThis(stringPrototype.startsWith);$h͏_once.stringStartsWith(stringStartsWith);
       const iterateString = uncurryThis(stringPrototype[iteratorSymbol]);
//
$h͏_once.iterateString(iterateString);const weakmapDelete=uncurryThis(weakmapPrototype.delete);
/** @type {<K extends {}, V>(thisArg: WeakMap<K, V>, ...args: Parameters<WeakMap<K,V>['get']>) => ReturnType<WeakMap<K,V>['get']>} */$h͏_once.weakmapDelete(weakmapDelete);
       const weakmapGet = uncurryThis(weakmapPrototype.get);$h͏_once.weakmapGet(weakmapGet);
       const weakmapHas = uncurryThis(weakmapPrototype.has);$h͏_once.weakmapHas(weakmapHas);
       const weakmapSet = uncurryThis(weakmapPrototype.set);
//
$h͏_once.weakmapSet(weakmapSet);const weaksetAdd=uncurryThis(weaksetPrototype.add);$h͏_once.weaksetAdd(weaksetAdd);
       const weaksetHas = uncurryThis(weaksetPrototype.has);
//
$h͏_once.weaksetHas(weaksetHas);const functionToString=uncurryThis(functionPrototype.toString);$h͏_once.functionToString(functionToString);
       const functionBind = uncurryThis(bind);
//
$h͏_once.functionBind(functionBind);const{all}=Promise;
       const promiseAll = promises => apply(all, Promise, [promises]);$h͏_once.promiseAll(promiseAll);
       const promiseCatch = uncurryThis(promisePrototype.catch);
/** @type {<T, TResult1 = T, TResult2 = never>(thisArg: T, onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null) => Promise<TResult1 | TResult2>} */$h͏_once.promiseCatch(promiseCatch);
       const promiseThen = /** @type {any} */ (
  uncurryThis(promisePrototype.then)
);
//
$h͏_once.promiseThen(promiseThen);const finalizationRegistryRegister=
  FinalizationRegistry && uncurryThis(FinalizationRegistry.prototype.register);$h͏_once.finalizationRegistryRegister(finalizationRegistryRegister);
       const finalizationRegistryUnregister =
  FinalizationRegistry &&
  uncurryThis(FinalizationRegistry.prototype.unregister);

/**
 * getConstructorOf()
 * Return the constructor from an instance.
 *
 * @param {Function} fn
 */$h͏_once.finalizationRegistryUnregister(finalizationRegistryUnregister);
       const getConstructorOf = fn =>
  reflectGet(getPrototypeOf(fn), 'constructor');

/**
 * TODO Consolidate with `isPrimitive` that's currently in `@endo/pass-style`.
 * Layering constraints make this tricky, which is why we haven't yet figured
 * out how to do this.
 *
 * @type {(val: unknown) => val is (undefined
 * | null
 * | boolean
 * | number
 * | bigint
 * | string
 * | symbol)}
 */$h͏_once.getConstructorOf(getConstructorOf);
       const isPrimitive = val =>
  !val || (typeof val !== 'object' && typeof val !== 'function');

/**
 * isError tests whether an object inherits from the intrinsic
 * `Error.prototype`.
 * We capture the original error constructor as FERAL_ERROR to provide a clear
 * signal for reviewers that we are handling an object with excess authority,
 * like stack trace inspection, that we are carefully hiding from client code.
 * Checking instanceof happens to be safe, but to avoid uttering FERAL_ERROR
 * for such a trivial case outside commons.js, we provide a utility function.
 *
 * @param {any} value
 */$h͏_once.isPrimitive(isPrimitive);
       const isError = value => value instanceof FERAL_ERROR;

/**
 * @template T
 * @param {T} x
 */$h͏_once.isError(isError);
       const identity = x => x;

// The original unsafe untamed eval function, which must not escape.
// Sample at module initialization time, which is before lockdown can
// repair it.  Use it only to build powerless abstractions.
// eslint-disable-next-line no-eval
$h͏_once.identity(identity);const FERAL_EVAL=eval;

// The original unsafe untamed Function constructor, which must not escape.
// Sample at module initialization time, which is before lockdown can
// repair it.  Use it only to build powerless abstractions.
$h͏_once.FERAL_EVAL(FERAL_EVAL);const FERAL_FUNCTION=Function;$h͏_once.FERAL_FUNCTION(FERAL_FUNCTION);

       const noEvalEvaluate = () => {
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_NO_EVAL.md
  throw TypeError('Cannot eval with evalTaming set to "no-eval" (SES_NO_EVAL)');
};

// ////////////////// FERAL_STACK_GETTER FERAL_STACK_SETTER ////////////////////
$h͏_once.noEvalEvaluate(noEvalEvaluate);
const er1StackDesc = getOwnPropertyDescriptor(Error('er1'), 'stack');
const er2StackDesc = getOwnPropertyDescriptor(TypeError('er2'), 'stack');

let feralStackGetter;
let feralStackSetter;
if (er1StackDesc && er2StackDesc && er1StackDesc.get) {
  // We should only encounter this case on v8 because of its problematic
  // error own stack accessor behavior.
  // Note that FF/SpiderMonkey, Moddable/XS, and the error stack proposal
  // all inherit a stack accessor property from Error.prototype, which is
  // great. That case needs no heroics to secure.
  if (
    // In the v8 case as we understand it, all errors have an own stack
    // accessor property, but within the same realm, all these accessor
    // properties have the same getter and have the same setter.
    // This is therefore the case that we repair.
    typeof er1StackDesc.get === 'function' &&
    er1StackDesc.get === er2StackDesc.get &&
    typeof er1StackDesc.set === 'function' &&
    er1StackDesc.set === er2StackDesc.set
  ) {
    // Otherwise, we have own stack accessor properties that are outside
    // our expectations, that therefore need to be understood better
    // before we know how to repair them.
    feralStackGetter = freeze(er1StackDesc.get);
    feralStackSetter = freeze(er1StackDesc.set);
  } else {
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNEXPECTED_ERROR_OWN_STACK_ACCESSOR.md
    throw TypeError(
      'Unexpected Error own stack accessor functions (SES_UNEXPECTED_ERROR_OWN_STACK_ACCESSOR)',
    );
  }
}

/**
 * If on a v8 with the problematic error own stack accessor behavior,
 * `FERAL_STACK_GETTER` will be the shared getter of all those accessors
 * and `FERAL_STACK_SETTER` will be the shared setter. On any platform
 * without this problem, `FERAL_STACK_GETTER` and `FERAL_STACK_SETTER` are
 * both `undefined`.
 *
 * @type {(() => any) | undefined}
 */
       const FERAL_STACK_GETTER = feralStackGetter;

/**
 * If on a v8 with the problematic error own stack accessor behavior,
 * `FERAL_STACK_GETTER` will be the shared getter of all those accessors
 * and `FERAL_STACK_SETTER` will be the shared setter. On any platform
 * without this problem, `FERAL_STACK_GETTER` and `FERAL_STACK_SETTER` are
 * both `undefined`.
 *
 * @type {((newValue: any) => void) | undefined}
 */$h͏_once.FERAL_STACK_GETTER(FERAL_STACK_GETTER);
       const FERAL_STACK_SETTER = feralStackSetter;$h͏_once.FERAL_STACK_SETTER(FERAL_STACK_SETTER);

const getAsyncGeneratorFunctionInstance = () => {
  // Test for async generator function syntax support.
  try {
    // Wrapping one in an new Function lets the `hermesc` binary file
    // parse the Metro js bundle without SyntaxError, to generate the
    // optimised Hermes bytecode bundle, when `gradlew` is called to
    // assemble the release build APK for React Native prod Android apps.
    // Delaying the error until runtime lets us customise lockdown behaviour.
    return new FERAL_FUNCTION(
      'return (async function* AsyncGeneratorFunctionInstance() {})',
    )();
  } catch (error) {
    // Note: `Error.prototype.jsEngine` is only set by React Native runtime, not Hermes:
    // https://github.com/facebook/react-native/blob/main/packages/react-native/ReactCommon/hermes/executor/HermesExecutorFactory.cpp#L224-L230
    if (error.name === 'SyntaxError') {
      // Swallows Hermes error `async generators are unsupported` at runtime.
      // Note: `console` is not a JS built-in, so Hermes engine throws:
      // Uncaught ReferenceError: Property 'console' doesn't exist
      // See: https://github.com/facebook/hermes/issues/675
      // However React Native provides a `console` implementation when setting up error handling:
      // https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Core/InitializeCore.js
      return undefined;
    } else if (error.name === 'EvalError') {
      // eslint-disable-next-line no-empty-function
      return async function* AsyncGeneratorFunctionInstance() {};
    } else {
      throw error;
    }
  }
};

/**
 * If the platform supports async generator functions, this will be an
 * async generator function instance. Otherwise, it will be `undefined`.
 *
 * @type {AsyncGeneratorFunction | undefined}
 */
       const AsyncGeneratorFunctionInstance =
  getAsyncGeneratorFunctionInstance();$h͏_once.AsyncGeneratorFunctionInstance(AsyncGeneratorFunctionInstance);
})()
,
// === 1. ses ./src/assert-sloppy-mode.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError;$h͏_imports([["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]]]]]);

/** getThis returns globalThis in sloppy mode or undefined in strict mode. */
function getThis() {
  return this;
}

if (getThis()) {
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_NO_SLOPPY.md
  throw TypeError(`SES failed to initialize, sloppy mode (SES_NO_SLOPPY)`);
}
})()
,
// === 2. env-options ./src/env-options.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);/* global globalThis */
// @ts-check

// `@endo/env-options` needs to be imported quite early, and so should
// avoid importing from ses or anything that depends on ses.

// /////////////////////////////////////////////////////////////////////////////
// Prelude of cheap good - enough imitations of things we'd use or
// do differently if we could depend on ses

// eslint-disable-next-line no-restricted-globals
const localThis = globalThis;

const { Object, Reflect, Array, String, JSON, Error } = localThis;
const { freeze } = Object;
const { apply } = Reflect;

// Should be equivalent to the one in ses' commons.js even though it
// uses the other technique.
const uncurryThis =
  fn =>
  (receiver, ...args) =>
    apply(fn, receiver, args);
const arrayPush = uncurryThis(Array.prototype.push);
const arrayIncludes = uncurryThis(Array.prototype.includes);
const stringSplit = uncurryThis(String.prototype.split);

const q = JSON.stringify;

const Fail = (literals, ...args) => {
  let msg = literals[0];
  for (let i = 0; i < args.length; i += 1) {
    msg = `${msg}${args[i]}${literals[i + 1]}`;
  }
  throw Error(msg);
};

// end prelude
// /////////////////////////////////////////////////////////////////////////////

/**
 * `makeEnvironmentCaptor` provides a mechanism for getting environment
 * variables, if they are needed, and a way to catalog the names of all
 * the environment variables that were captured.
 *
 * @param {object} aGlobal
 * @param {boolean} [dropNames] Defaults to false. If true, don't track
 * names used.
 */
       const makeEnvironmentCaptor = (aGlobal, dropNames = false) => {
  /** @type {string[]} */
  const capturedEnvironmentOptionNames = [];

  /**
   * Gets an environment option by name and returns the option value or the
   * given default.
   *
   * @param {string} optionName
   * @param {string} defaultSetting
   * @param {string[]} [optOtherValues]
   * If provided, the option value must be included or match `defaultSetting`.
   * @returns {string}
   */
  const getEnvironmentOption = (
    optionName,
    defaultSetting,
    optOtherValues = undefined,
  ) => {
    typeof optionName === 'string' ||
      Fail`Environment option name ${q(optionName)} must be a string.`;
    typeof defaultSetting === 'string' ||
      Fail`Environment option default setting ${q(
        defaultSetting,
      )} must be a string.`;

    /** @type {string} */
    let setting = defaultSetting;
    const globalProcess = aGlobal.process || undefined;
    const globalEnv =
      (typeof globalProcess === 'object' && globalProcess.env) || undefined;
    if (typeof globalEnv === 'object') {
      if (optionName in globalEnv) {
        if (!dropNames) {
          arrayPush(capturedEnvironmentOptionNames, optionName);
        }
        const optionValue = globalEnv[optionName];
        // eslint-disable-next-line @endo/no-polymorphic-call
        typeof optionValue === 'string' ||
          Fail`Environment option named ${q(
            optionName,
          )}, if present, must have a corresponding string value, got ${q(
            optionValue,
          )}`;
        setting = optionValue;
      }
    }
    optOtherValues === undefined ||
      setting === defaultSetting ||
      arrayIncludes(optOtherValues, setting) ||
      Fail`Unrecognized ${q(optionName)} value ${q(
        setting,
      )}. Expected one of ${q([defaultSetting, ...optOtherValues])}`;
    return setting;
  };
  freeze(getEnvironmentOption);

  /**
   * @template {string} [T=string]
   * @param {string} optionName
   * @returns {T[]}
   */
  const getEnvironmentOptionsList = optionName => {
    const option = getEnvironmentOption(optionName, '');
    return freeze(option === '' ? [] : stringSplit(option, ','));
  };
  freeze(getEnvironmentOptionsList);

  /**
   * @template {string} [T=string]
   * @param {string} optionName
   * @param {T} element
   * @returns {boolean}
   */
  const environmentOptionsListHas = (optionName, element) =>
    arrayIncludes(getEnvironmentOptionsList(optionName), element);

  const getCapturedEnvironmentOptionNames = () => {
    return freeze([...capturedEnvironmentOptionNames]);
  };
  freeze(getCapturedEnvironmentOptionNames);

  return freeze({
    getEnvironmentOption,
    getEnvironmentOptionsList,
    environmentOptionsListHas,
    getCapturedEnvironmentOptionNames,
  });
};$h͏_once.makeEnvironmentCaptor(makeEnvironmentCaptor);
freeze(makeEnvironmentCaptor);

/**
 * For the simple case, where the global in question is `globalThis` and no
 * reporting of option names is desired.
 */
       const {
  getEnvironmentOption,
  getEnvironmentOptionsList,
  environmentOptionsListHas,
} = makeEnvironmentCaptor(localThis, true);$h͏_once.getEnvironmentOption(getEnvironmentOption);$h͏_once.getEnvironmentOptionsList(getEnvironmentOptionsList);$h͏_once.environmentOptionsListHas(environmentOptionsListHas);
})()
,
// === 3. env-options ./index.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([["./src/env-options.js", []]]);
})()
,
// === 4. immutable-arraybuffer ./src/immutable-arraybuffer-pony.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);/* global globalThis */

const {
  ArrayBuffer,
  Object,
  Reflect,
  Symbol,
  TypeError,
  Uint8Array,
  WeakMap,
  // Capture structuredClone before it can be scuttled.
  structuredClone: optStructuredClone
  // eslint-disable-next-line no-restricted-globals
} = globalThis;

const { freeze, defineProperty, getPrototypeOf, getOwnPropertyDescriptor } =
  Object;
const { apply, ownKeys } = Reflect;
const { toStringTag } = Symbol;

const { prototype: arrayBufferPrototype } = ArrayBuffer;
const { slice, transfer: optTransfer } = arrayBufferPrototype;
// @ts-expect-error TS doesn't know it'll be there
const { get: arrayBufferByteLength } = getOwnPropertyDescriptor(
  arrayBufferPrototype,
  'byteLength',
);

const typedArrayPrototype = getPrototypeOf(Uint8Array.prototype);
const { set: uint8ArraySet } = typedArrayPrototype;
// @ts-expect-error TS doesn't know it'll be there
const { get: uint8ArrayBuffer } = getOwnPropertyDescriptor(
  typedArrayPrototype,
  'buffer',
);

/**
 * Copy a range of values from a genuine ArrayBuffer exotic object into a new
 * ArrayBuffer.
 *
 * @param {ArrayBuffer} realBuffer
 * @param {number} [start]
 * @param {number} [end]
 * @returns {ArrayBuffer}
 */
const arrayBufferSlice = (realBuffer, start = undefined, end = undefined) =>
  apply(slice, realBuffer, [start, end]);

/**
 * Move the contents of a genuine ArrayBuffer exotic object into a new fresh
 * ArrayBuffer and detach the original source.
 * We can only do this on platforms that support `structuredClone` or
 * `ArrayBuffer.prototype.transfer`.
 * On other platforms, we can still emulate
 * `ArrayBuffer.prototoype.sliceToImmutable`, but not
 * `ArrayBuffer.prototype.transferToImmutable`.
 * Currently, these known-deficient platforms are
 * - Hermes
 * - Node.js <= 16
 * - Apparently some versions of JavaScriptCore that are still of concern.
 *
 * @param {ArrayBuffer} arrayBuffer
 * @returns {ArrayBuffer}
 */
let optArrayBufferTransfer;

if (optTransfer) {
  optArrayBufferTransfer = arrayBuffer => apply(optTransfer, arrayBuffer, []);
} else if (optStructuredClone) {
  optArrayBufferTransfer = arrayBuffer => {
    // Hopefully, a zero-length slice is cheap, but still enforces that
    // `arrayBuffer` is a genuine `ArrayBuffer` exotic object.
    arrayBufferSlice(arrayBuffer, 0, 0);
    return optStructuredClone(arrayBuffer, {
      transfer: [arrayBuffer],
    });
  };
} else {
  // Assignment is redundant, but remains for clarity.
  optArrayBufferTransfer = undefined;
}

/**
 * If we could use classes with private fields everywhere, this would have
 * been a `this.#buffer` private field on an `ImmutableArrayBufferInternal`
 * class. But we cannot do so on Hermes. So, instead, we
 * emulate the `this.#buffer` private field, including its use as a brand check.
 * Maps from all and only emulated Immutable ArrayBuffers to real ArrayBuffers.
 *
 * @type {Pick<WeakMap<ArrayBuffer, ArrayBuffer>, 'get' | 'has' | 'set'>}
 */
const buffers = new WeakMap();
// Avoid post-hoc prototype lookups.
for (const methodName of ['get', 'has', 'set']) {
  defineProperty(buffers, methodName, { value: buffers[methodName] });
}
const getBuffer = immuAB => {
  // Safe because this WeakMap owns its get method.
  // eslint-disable-next-line @endo/no-polymorphic-call
  const result = buffers.get(immuAB);
  if (result) {
    return result;
  }
  throw TypeError('Not an emulated Immutable ArrayBuffer');
};

// Omits `constructor` so `Array.prototype.constructor` is inherited.
const ImmutableArrayBufferInternalPrototype = {
  __proto__: arrayBufferPrototype,
  get byteLength() {
    return apply(arrayBufferByteLength, getBuffer(this), []);
  },
  get detached() {
    getBuffer(this); // shim brand check
    return false;
  },
  get maxByteLength() {
    // Not underlying maxByteLength, which is irrelevant
    return apply(arrayBufferByteLength, getBuffer(this), []);
  },
  get resizable() {
    getBuffer(this); // shim brand check
    return false;
  },
  get immutable() {
    getBuffer(this); // shim brand check
    return true;
  },
  slice(start = undefined, end = undefined) {
    return arrayBufferSlice(getBuffer(this), start, end);
  },
  sliceToImmutable(start = undefined, end = undefined) {
    // eslint-disable-next-line no-use-before-define
    return sliceBufferToImmutable(getBuffer(this), start, end);
  },
  resize(_newByteLength = undefined) {
    getBuffer(this); // shim brand check
    throw TypeError('Cannot resize an immutable ArrayBuffer');
  },
  transfer(_newLength = undefined) {
    getBuffer(this); // shim brand check
    throw TypeError('Cannot detach an immutable ArrayBuffer');
  },
  transferToFixedLength(_newLength = undefined) {
    getBuffer(this); // shim brand check
    throw TypeError('Cannot detach an immutable ArrayBuffer');
  },
  transferToImmutable(_newLength = undefined) {
    getBuffer(this); // shim brand check
    throw TypeError('Cannot detach an immutable ArrayBuffer');
  },
  /**
   * See https://github.com/endojs/endo/tree/master/packages/immutable-arraybuffer#purposeful-violation
   */
  [toStringTag]: 'ImmutableArrayBuffer',
};

// Better fidelity emulation of a class prototype
for (const key of ownKeys(ImmutableArrayBufferInternalPrototype)) {
  defineProperty(ImmutableArrayBufferInternalPrototype, key, {
    enumerable: false,
  });
}

/**
 * Emulates what would have been the encapsulated `ImmutableArrayBufferInternal`
 * class constructor. This function takes the `realBuffer` which its
 * result encapsulates. Security demands that this result has exclusive access
 * to the `realBuffer` it is given, which its callers must ensure.
 *
 * @param {ArrayBuffer} realBuffer
 * @returns {ArrayBuffer}
 */
const makeImmutableArrayBufferInternal = realBuffer => {
  const result = /** @type {ArrayBuffer} */ (
    /** @type {unknown} */ ({
      __proto__: ImmutableArrayBufferInternalPrototype,
    })
  );
  // Safe because this WeakMap owns its set method.
  // eslint-disable-next-line @endo/no-polymorphic-call
  buffers.set(result, realBuffer);
  return result;
};
// Since `makeImmutableArrayBufferInternal` MUST not escape,
// this `freeze` is just belt-and-suspenders.
freeze(makeImmutableArrayBufferInternal);

/**
 * @param {ArrayBuffer} buffer
 * @returns {boolean}
 */
// eslint-disable-next-line @endo/no-polymorphic-call
       const isBufferImmutable = buffer => buffers.has(buffer);

/**
 * Creates an immutable slice of the given buffer.
 * @param {ArrayBuffer} buffer The original buffer.
 * @param {number} [start] The start index.
 * @param {number} [end] The end index.
 * @returns {ArrayBuffer} The sliced immutable ArrayBuffer.
 */$h͏_once.isBufferImmutable(isBufferImmutable);
       const sliceBufferToImmutable = (
  buffer,
  start = undefined,
  end = undefined,
) => {
  // Safe because this WeakMap owns its get method.
  // eslint-disable-next-line @endo/no-polymorphic-call
  let realBuffer = buffers.get(buffer);
  if (realBuffer === undefined) {
    realBuffer = buffer;
  }
  return makeImmutableArrayBufferInternal(
    arrayBufferSlice(realBuffer, start, end),
  );
};$h͏_once.sliceBufferToImmutable(sliceBufferToImmutable);

let transferBufferToImmutable;
if (optArrayBufferTransfer) {
  /**
   * Transfer the contents to a new Immutable ArrayBuffer
   *
   * @param {ArrayBuffer} buffer The original buffer.
   * @param {number} [newLength] The start index.
   * @returns {ArrayBuffer}
   */
  transferBufferToImmutable = (buffer, newLength = undefined) => {
    if (newLength === undefined) {
      buffer = optArrayBufferTransfer(buffer);
    } else if (optTransfer) {
      buffer = apply(optTransfer, buffer, [newLength]);
    } else {
      buffer = optArrayBufferTransfer(buffer);
      const oldLength = buffer.byteLength;
      // eslint-disable-next-line @endo/restrict-comparison-operands
      if (newLength <= oldLength) {
        buffer = arrayBufferSlice(buffer, 0, newLength);
      } else {
        const oldTA = new Uint8Array(buffer);
        const newTA = new Uint8Array(newLength);
        apply(uint8ArraySet, newTA, [oldTA]);
        buffer = apply(uint8ArrayBuffer, newTA, []);
      }
    }
    const result = makeImmutableArrayBufferInternal(buffer);
    return /** @type {ArrayBuffer} */ (/** @type {unknown} */ (result));
  };
} else {
  transferBufferToImmutable = undefined;
}

       const optTransferBufferToImmutable = transferBufferToImmutable;$h͏_once.optTransferBufferToImmutable(optTransferBufferToImmutable);
})()
,
// === 5. immutable-arraybuffer ./src/immutable-arraybuffer-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let isBufferImmutable,sliceBufferToImmutable,optXferBuf2Immu;$h͏_imports([["./immutable-arraybuffer-pony.js", [["isBufferImmutable",[$h͏_a => (isBufferImmutable = $h͏_a)]],["sliceBufferToImmutable",[$h͏_a => (sliceBufferToImmutable = $h͏_a)]],["optTransferBufferToImmutable",[$h͏_a => (optXferBuf2Immu = $h͏_a)]]]]]);







const {
  ArrayBuffer,
  JSON,
  Object,
  Reflect
  // eslint-disable-next-line no-restricted-globals
} = globalThis;

// Even though the imported one is not exported by the pony as a live binding,
// TS doesn't know that,
// so it cannot do its normal flow-based inference. By making and using a local
// copy, no problem.
const optTransferBufferToImmutable = optXferBuf2Immu;

const { getOwnPropertyDescriptors, defineProperties, defineProperty } = Object;
const { ownKeys } = Reflect;
const { prototype: arrayBufferPrototype } = ArrayBuffer;
const { stringify } = JSON;

const arrayBufferMethods = {
  /**
   * Creates an immutable slice of the given buffer.
   *
   * @this {ArrayBuffer} buffer The original buffer.
   * @param {number} [start] The start index.
   * @param {number} [end] The end index.
   * @returns {ArrayBuffer} The sliced immutable ArrayBuffer.
   */
  sliceToImmutable(start = undefined, end = undefined) {
    return sliceBufferToImmutable(this, start, end);
  },

  /**
   * @this {ArrayBuffer}
   */
  get immutable() {
    return isBufferImmutable(this);
  },

  ...(optTransferBufferToImmutable
    ? {
        /**
         * Transfer the contents to a new Immutable ArrayBuffer
         *
         * @this {ArrayBuffer} buffer The original buffer.
         * @param {number} [newLength] The start index.
         * @returns {ArrayBuffer} The sliced immutable ArrayBuffer.
         */
        transferToImmutable(newLength = undefined) {
          return optTransferBufferToImmutable(this, newLength);
        },
      }
    : {}),
};

// Better fidelity emulation of a class prototype
for (const key of ownKeys(arrayBufferMethods)) {
  defineProperty(arrayBufferMethods, key, {
    enumerable: false,
  });
}

// Modern shim practice frowns on conditional installation, at least for
// proposals prior to stage 3. This is so changes to the proposal since
// an old shim was distributed don't need to worry about the proposal
// breaking old code depending on the old shim. Thus, if we detect that
// we're about to overwrite a prior installation, we simply issue this
// warning and continue.
//
// TODO, if the primordials are frozen after the prior implementation, such as
// by `lockdown`, then this precludes overwriting as expected. However, for
// this case, the following warning text will be confusing.
//
// Allowing polymorphic calls because these occur during initialization.
// eslint-disable-next-line @endo/no-polymorphic-call
const overwrites = ownKeys(arrayBufferMethods).filter(
  key => key in arrayBufferPrototype,
);
if (overwrites.length > 0) {
  // eslint-disable-next-line @endo/no-polymorphic-call
  console.warn(
    `About to overwrite ArrayBuffer.prototype properties ${stringify(overwrites)}`,
  );
}

defineProperties(
  arrayBufferPrototype,
  getOwnPropertyDescriptors(arrayBufferMethods),
);
})()
,
// === 6. immutable-arraybuffer ./shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([["./src/immutable-arraybuffer-shim.js", []]]);
})()
,
// === 7. ses ./src/error/stringify-utils.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Set,String,isArray,arrayJoin,arraySlice,arraySort,arrayMap,keys,fromEntries,freeze,is,isError,setAdd,setHas,stringIncludes,stringStartsWith,stringifyJson,toStringTagSymbol;$h͏_imports([["../commons.js", [["Set",[$h͏_a => (Set = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["isArray",[$h͏_a => (isArray = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arraySlice",[$h͏_a => (arraySlice = $h͏_a)]],["arraySort",[$h͏_a => (arraySort = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["keys",[$h͏_a => (keys = $h͏_a)]],["fromEntries",[$h͏_a => (fromEntries = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["is",[$h͏_a => (is = $h͏_a)]],["isError",[$h͏_a => (isError = $h͏_a)]],["setAdd",[$h͏_a => (setAdd = $h͏_a)]],["setHas",[$h͏_a => (setHas = $h͏_a)]],["stringIncludes",[$h͏_a => (stringIncludes = $h͏_a)]],["stringStartsWith",[$h͏_a => (stringStartsWith = $h͏_a)]],["stringifyJson",[$h͏_a => (stringifyJson = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]]]]]);






















/** @import {StringablePayload} from '../../types.js' */

/**
 * Joins English terms with commas and an optional conjunction.
 *
 * @param {(string | StringablePayload)[]} terms
 * @param {"and" | "or"} conjunction
 */
       const enJoin = (terms, conjunction) => {
  if (terms.length === 0) {
    return '(none)';
  } else if (terms.length === 1) {
    return terms[0];
  } else if (terms.length === 2) {
    const [first, second] = terms;
    return `${first} ${conjunction} ${second}`;
  } else {
    return `${arrayJoin(arraySlice(terms, 0, -1), ', ')}, ${conjunction} ${
      terms[terms.length - 1]
    }`;
  }
};

/**
 * Prepend the correct indefinite article onto a noun, typically a typeof
 * result, e.g., "an object" vs. "a number"
 *
 * @param {string} str The noun to prepend
 * @returns {string} The noun prepended with a/an
 */$h͏_once.enJoin(enJoin);
const an = str => {
  str = `${str}`;
  if (str.length >= 1 && stringIncludes('aeiouAEIOU', str[0])) {
    return `an ${str}`;
  }
  return `a ${str}`;
};$h͏_once.an(an);
freeze(an);


/**
 * Like `JSON.stringify` but does not blow up if given a cycle or a bigint.
 * This is not
 * intended to be a serialization to support any useful unserialization,
 * or any programmatic use of the resulting string. The string is intended
 * *only* for showing a human under benign conditions, in order to be
 * informative enough for some
 * logging purposes. As such, this `bestEffortStringify` has an
 * imprecise specification and may change over time.
 *
 * The current `bestEffortStringify` possibly emits too many "seen"
 * markings: Not only for cycles, but also for repeated subtrees by
 * object identity.
 *
 * As a best effort only for diagnostic interpretation by humans,
 * `bestEffortStringify` also turns various cases that normal
 * `JSON.stringify` skips or errors on, like `undefined` or bigints,
 * into strings that convey their meaning. To distinguish this from
 * strings in the input, these synthesized strings always begin and
 * end with square brackets. To distinguish those strings from an
 * input string with square brackets, and input string that starts
 * with an open square bracket `[` is itself placed in square brackets.
 *
 * @param {any} payload
 * @param {(string|number)=} spaces
 * @returns {string}
 */
const bestEffortStringify = (payload, spaces = undefined) => {
  const seenSet = new Set();
  const replacer = (_, val) => {
    switch (typeof val) {
      case 'object': {
        if (val === null) {
          return null;
        }
        if (setHas(seenSet, val)) {
          return '[Seen]';
        }
        setAdd(seenSet, val);
        if (isError(val)) {
          return `[${val.name}: ${val.message}]`;
        }
        if (toStringTagSymbol in val) {
          // For the built-ins that have or inherit a `Symbol.toStringTag`-named
          // property, most of them inherit the default `toString` method,
          // which will print in a similar manner: `"[object Foo]"` vs
          // `"[Foo]"`. The exceptions are
          //    * `Symbol.prototype`, `BigInt.prototype`, `String.prototype`
          //      which don't matter to us since we handle primitives
          //      separately and we don't care about primitive wrapper objects.
          //    * TODO
          //      `Date.prototype`, `TypedArray.prototype`.
          //      Hmmm, we probably should make special cases for these. We're
          //      not using these yet, so it's not urgent. But others will run
          //      into these.
          //
          // Once #2018 is closed, the only objects in our code that have or
          // inherit a `Symbol.toStringTag`-named property are remotables
          // or their remote presences.
          // This printing will do a good job for these without
          // violating abstraction layering. This behavior makes sense
          // purely in terms of JavaScript concepts. That's some of the
          // motivation for choosing that representation of remotables
          // and their remote presences in the first place.
          return `[${val[toStringTagSymbol]}]`;
        }
        if (isArray(val)) {
          return val;
        }
        const names = keys(val);
        if (names.length < 2) {
          return val;
        }
        let sorted = true;
        for (let i = 1; i < names.length; i += 1) {
          if (names[i - 1] >= names[i]) {
            sorted = false;
            break;
          }
        }
        if (sorted) {
          return val;
        }
        arraySort(names);
        const entries = arrayMap(names, name => [name, val[name]]);
        return fromEntries(entries);
      }
      case 'function': {
        return `[Function ${val.name || '<anon>'}]`;
      }
      case 'string': {
        if (stringStartsWith(val, '[')) {
          return `[${val}]`;
        }
        return val;
      }
      case 'undefined':
      case 'symbol': {
        return `[${String(val)}]`;
      }
      case 'bigint': {
        return `[${val}n]`;
      }
      case 'number': {
        if (is(val, NaN)) {
          return '[NaN]';
        } else if (val === Infinity) {
          return '[Infinity]';
        } else if (val === -Infinity) {
          return '[-Infinity]';
        }
        return val;
      }
      default: {
        return val;
      }
    }
  };
  try {
    return stringifyJson(payload, replacer, spaces);
  } catch (_err) {
    // Don't do anything more fancy here if there is any
    // chance that might throw, unless you surround that
    // with another try-catch-recovery. For example,
    // the caught thing might be a proxy or other exotic
    // object rather than an error. The proxy might throw
    // whenever it is possible for it to.
    return '[Something that failed to stringify]';
  }
};$h͏_once.bestEffortStringify(bestEffortStringify);
freeze(bestEffortStringify);
})()
,
// === 8. ses ./src/error/types.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);// @ts-check

/** @import {GenericErrorConstructor, AssertMakeErrorOptions, DetailsToken, StringablePayload} from '../../types.js' */

/**
 * @typedef {object} VirtualConsole
 * @property {Console['debug']} debug
 * @property {Console['log']} log
 * @property {Console['info']} info
 * @property {Console['warn']} warn
 * @property {Console['error']} error
 *
 * @property {Console['trace']} trace
 * @property {Console['dirxml']} dirxml
 * @property {Console['group']} group
 * @property {Console['groupCollapsed']} groupCollapsed
 *
 * @property {Console['assert']} assert
 * @property {Console['timeLog']} timeLog
 *
 * @property {Console['clear']} clear
 * @property {Console['count']} count
 * @property {Console['countReset']} countReset
 * @property {Console['dir']} dir
 * @property {Console['groupEnd']} groupEnd
 *
 * @property {Console['table']} table
 * @property {Console['time']} time
 * @property {Console['timeEnd']} timeEnd
 * @property {Console['timeStamp']} timeStamp
 */

/* This is deliberately *not* JSDoc, it is a regular comment.
 *
 * TODO: We'd like to add the following properties to the above
 * VirtualConsole, but they currently cause conflicts where
 * some Typescript implementations don't have these properties
 * on the Console type.
 *
 * @property {Console['profile']} profile
 * @property {Console['profileEnd']} profileEnd
 */

/**
 * @typedef {'debug' | 'log' | 'info' | 'warn' | 'error'} LogSeverity
 */

/**
 * @typedef ConsoleFilter
 * @property {(severity: LogSeverity) => boolean} canLog
 */

/**
 * @callback FilterConsole
 * @param {VirtualConsole} baseConsole
 * @param {ConsoleFilter} filter
 * @param {string} [topic]
 * @returns {VirtualConsole}
 */
})()
,
// === 9. ses ./src/error/internal-types.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);// @ts-check

/**
 * @import {VirtualConsole} from './types.js'
 */

/**
 * @typedef {readonly any[]} LogArgs
 *
 * This is an array suitable to be used as arguments of a console
 * level message *after* the format string argument. It is the result of
 * a `details` template string and consists of alternating literal strings
 * and substitution values, starting with a literal string. At least that
 * first literal string is always present.
 */

/**
 * @callback NoteCallback
 *
 * @param {Error} error
 * @param {LogArgs} noteLogArgs
 * @returns {void}
 */

/**
 * @callback GetStackString
 * @param {Error} error
 * @returns {string=}
 */

/**
 * @typedef {object} LoggedErrorHandler
 *
 * Used to parameterize `makeCausalConsole` to give it access to potentially
 * hidden information to augment the logging of errors.
 *
 * @property {GetStackString} getStackString
 * @property {(error: Error) => string} tagError
 * @property {() => void} resetErrorTagNum for debugging purposes only
 * @property {(error: Error) => (LogArgs | undefined)} getMessageLogArgs
 * @property {(error: Error) => (LogArgs | undefined)} takeMessageLogArgs
 * @property {(error: Error, callback?: NoteCallback) => LogArgs[] } takeNoteLogArgsArray
 */

// /////////////////////////////////////////////////////////////////////////////

/**
 * @typedef {readonly [string, ...any[]]} LogRecord
 */

/**
 * @typedef {object} LoggingConsoleKit
 * @property {VirtualConsole} loggingConsole
 * @property {() => readonly LogRecord[]} takeLog
 */

/**
 * @typedef {object} MakeLoggingConsoleKitOptions
 * @property {boolean=} shouldResetForDebugging
 */

/**
 * @callback MakeLoggingConsoleKit
 *
 * A logging console just accumulates the contents of all permitted calls,
 * making them available to callers of `takeLog()`. Calling `takeLog()`
 * consumes these, so later calls to `takeLog()` will only provide a log of
 * calls that have happened since then.
 *
 * @param {LoggedErrorHandler} loggedErrorHandler
 * @param {MakeLoggingConsoleKitOptions=} options
 * @returns {LoggingConsoleKit}
 */

/**
 * @typedef {{
 *   NOTE: 'ERROR_NOTE:',
 *   MESSAGE: 'ERROR_MESSAGE:',
 *   CAUSE: 'cause:',
 *   ERRORS: 'errors:',
 * }} ErrorInfo
 */

/**
 * @typedef {ErrorInfo[keyof ErrorInfo]} ErrorInfoKind
 */

/**
 * @callback MakeCausalConsole
 *
 * Makes a causal console wrapper of a `baseConsole`, where the causal console
 * calls methods of the `loggedErrorHandler` to customize how it handles logged
 * errors.
 *
 * @param {VirtualConsole | undefined} baseConsole
 * @param {LoggedErrorHandler} loggedErrorHandler
 * @returns {VirtualConsole | undefined}
 */
})()
,
// === 10. cache-map ./src/cachemap.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);// @ts-check
/* global globalThis */
/* eslint-disable @endo/no-polymorphic-call */

// eslint-disable-next-line no-restricted-globals
const { Error, TypeError, WeakMap } = globalThis;
// eslint-disable-next-line no-restricted-globals
const { parse, stringify } = JSON;
// eslint-disable-next-line no-restricted-globals
const { isSafeInteger } = Number;
// eslint-disable-next-line no-restricted-globals
const { freeze } = Object;
// eslint-disable-next-line no-restricted-globals
const { toStringTag: toStringTagSymbol } = Symbol;

// eslint-disable-next-line no-restricted-globals
const UNKNOWN_KEY = Symbol('UNKNOWN_KEY');

/**
 * @template T
 * @typedef {T extends object ? { -readonly [K in keyof T]: T[K] } : never} WritableDeep
 *   Intentionally limited to local needs; refer to
 *   https://github.com/sindresorhus/type-fest if insufficient.
 */

/**
 * @template T
 * @param {T} value
 * @param {<U,>(name: string, value: U) => U} [reviver]
 * @returns {WritableDeep<T>}
 */
const deepCopyJsonable = (value, reviver) => {
  const encoded = stringify(value);
  const decoded = parse(encoded, reviver);
  return decoded;
};

const freezingReviver = (_name, value) => freeze(value);

/** @type {<T,>(value: T) => T} */
const deepCopyAndFreezeJsonable = value =>
  deepCopyJsonable(value, freezingReviver);

/**
 * A cache of bounded size, implementing the WeakMap interface but holding keys
 * strongly if created with a non-weak `makeMap` option of
 * {@link makeCacheMapKit}.
 *
 * @template K
 * @template V
 * @typedef {Pick<Map<K, V>, Exclude<keyof WeakMap<WeakKey, *>, 'set'>> & {set: (key: K, value: V) => WeakMapAPI<K, V>}} WeakMapAPI
 */

/**
 * @template K
 * @template V
 * @typedef {WeakMapAPI<K, V> & ({clear?: undefined} | Pick<Map<K, V>, 'clear'>)} SingleEntryMap
 */

/**
 * A cell of a doubly-linked ring (circular list) for a cache map.
 * Instances are not frozen, and so should be closely encapsulated.
 *
 * @template K
 * @template V
 * @typedef {object} CacheMapCell
 * @property {number} id for debugging
 * @property {CacheMapCell<K, V>} next
 * @property {CacheMapCell<K, V>} prev
 * @property {SingleEntryMap<K, V>} data
 */

/**
 * @template K
 * @template V
 * @param {CacheMapCell<K, V>} prev
 * @param {number} id
 * @param {SingleEntryMap<K, V>} data
 * @returns {CacheMapCell<K, V>}
 */
const appendNewCell = (prev, id, data) => {
  const next = prev?.next;
  const cell = { id, next, prev, data };
  prev.next = cell;
  next.prev = cell;
  return cell;
};

/**
 * @template K
 * @template V
 * @param {CacheMapCell<K, V>} cell
 * @param {CacheMapCell<K, V>} prev
 * @param {CacheMapCell<K, V>} [next]
 */
const moveCellAfter = (cell, prev, next = prev.next) => {
  if (cell === prev || cell === next) return; // already in position

  // Splice out cell.
  const { prev: oldPrev, next: oldNext } = cell;
  oldPrev.next = oldNext;
  oldNext.prev = oldPrev;

  // Splice in cell after prev.
  cell.prev = prev;
  cell.next = next;
  prev.next = cell;
  next.prev = cell;
};

/**
 * Clear out a cell to prepare it for future use. Its map is preserved when
 * possible, but must instead be replaced if the associated key is not known.
 *
 * @template K
 * @template V
 * @param {CacheMapCell<K, V>} cell
 * @param {K | UNKNOWN_KEY} oldKey
 * @param {() => SingleEntryMap<K, V>} [makeMap] required when the key is unknown
 */
const resetCell = (cell, oldKey, makeMap) => {
  if (oldKey !== UNKNOWN_KEY) {
    cell.data.delete(oldKey);
    return;
  }
  if (cell.data.clear) {
    cell.data.clear();
    return;
  }
  // WeakMap instances must be replaced when the key is unknown.
  if (!makeMap) {
    throw Error('internal: makeMap is required with UNKNOWN_KEY');
  }
  cell.data = makeMap();
};

const zeroMetrics = freeze({
  totalQueryCount: 0,
  totalHitCount: 0
  // TODO?
  // * method-specific counts
  // * liveTouchStats/evictedTouchStats { count, sum, mean, min, max }
  //   * p50/p90/p95/p99 via Ben-Haim/Tom-Tov streaming histograms
});
/** @typedef {typeof zeroMetrics} CacheMapMetrics */

/**
 * @template {MapConstructor | WeakMapConstructor} [C=WeakMapConstructor]
 * @template {Parameters<InstanceType<C>['set']>[0]} [K=Parameters<InstanceType<C>['set']>[0]]
 * @template {unknown} [V=unknown]
 * @typedef {object} CacheMapKit
 * @property {WeakMapAPI<K, V>} cache
 * @property {() => CacheMapMetrics} getMetrics
 */

/**
 * Create a bounded-size cache having WeakMap-compatible
 * `has`/`get`/`set`/`delete` methods, capable of supporting SES (specifically
 * `assert` error notes).
 * Key validity, comparison, and referential strength are controlled by the
 * `makeMap` option, which defaults to `WeakMap` but can be set to any producer
 * of objects with those methods (e.g., using `Map` allows for arbitrary keys
 * which will be strongly held).
 * Cache eviction policy is not currently configurable, but strives for a hit
 * ratio at least as good as
 * [LRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU) (e.g., it
 * might be
 * [CLOCK](https://en.wikipedia.org/wiki/Page_replacement_algorithm#Clock)
 * or [SIEVE](https://sievecache.com/)).
 *
 * @template {MapConstructor | WeakMapConstructor} [C=WeakMapConstructor]
 * @template {Parameters<InstanceType<C>['set']>[0]} [K=Parameters<InstanceType<C>['set']>[0]]
 * @template {unknown} [V=unknown]
 * @param {number} capacity
 * @param {object} [options]
 * @param {C | (() => SingleEntryMap<K, V>)} [options.makeMap]
 * @returns {CacheMapKit<C, K, V>}
 */
       const makeCacheMapKit = (capacity, options = {}) => {
  if (!isSafeInteger(capacity) || capacity < 0) {
    throw TypeError(
      'capacity must be a non-negative safe integer number <= 2**53 - 1',
    );
  }

  /**
   * @template V
   * @type {<V,>() => SingleEntryMap<K, V>}
   */
  const makeMap = (MaybeCtor => {
    try {
      // @ts-expect-error
      MaybeCtor();
      return /** @type {any} */ (MaybeCtor);
    } catch (err) {
      // @ts-expect-error
      const constructNewMap = () => new MaybeCtor();
      return constructNewMap;
    }
  })(options.makeMap ?? WeakMap);
  const tag =
    /** @type {any} */ (makeMap()).clear === undefined
      ? 'WeakCacheMap'
      : 'CacheMap';

  /** @type {WeakMapAPI<K, CacheMapCell<K, V>>} */
  const keyToCell = makeMap();
  // @ts-expect-error this sentinel head is special
  const head = /** @type {CacheMapCell<K, V>} */ ({
    id: 0,
    // next and prev are established below as self-referential.
    next: undefined,
    prev: undefined,
    data: {
      has: () => {
        throw Error('internal: sentinel head cell has no data');
      },
    },
  });
  head.next = head;
  head.prev = head;
  let cellCount = 0;

  const metrics = deepCopyJsonable(zeroMetrics);
  const getMetrics = () => deepCopyAndFreezeJsonable(metrics);

  /**
   * Touching moves a cell to first position so LRU eviction can target the last
   * cell (`head.prev`).
   *
   * @type {(key: K) => (CacheMapCell<K, V> | undefined)}
   */
  const touchKey = key => {
    metrics.totalQueryCount += 1;
    const cell = keyToCell.get(key);
    if (!cell?.data.has(key)) return undefined;

    metrics.totalHitCount += 1;
    moveCellAfter(cell, head);
    return cell;
  };

  /** @type {WeakMapAPI<K, V>['has']} */
  const has = key => {
    const cell = touchKey(key);
    return cell !== undefined;
  };
  freeze(has);

  /** @type {WeakMapAPI<K, V>['get']} */
  const get = key => {
    const cell = touchKey(key);
    return cell?.data.get(key);
  };
  freeze(get);

  /** @type {WeakMapAPI<K, V>['set']} */
  const set = (key, value) => {
    let cell = touchKey(key);
    if (cell) {
      cell.data.set(key, value);
      // eslint-disable-next-line no-use-before-define
      return implementation;
    }

    if (cellCount < capacity) {
      // Add and use a new cell at first position.
      cell = appendNewCell(head, cellCount + 1, makeMap());
      cellCount += 1; // intentionally follows cell creation
      cell.data.set(key, value);
    } else if (capacity > 0) {
      // Reuse the current tail, moving it to first position.
      cell = head.prev;
      resetCell(/** @type {any} */ (cell), UNKNOWN_KEY, makeMap);
      cell.data.set(key, value);
      moveCellAfter(cell, head);
    }

    // Don't establish this entry until prior steps succeed.
    if (cell) keyToCell.set(key, cell);

    // eslint-disable-next-line no-use-before-define
    return implementation;
  };
  freeze(set);

  // "delete" is a keyword.
  const { delete: deleteEntry } = {
    /** @type {WeakMapAPI<K, V>['delete']} */
    delete: key => {
      const cell = keyToCell.get(key);
      if (!cell?.data.has(key)) {
        keyToCell.delete(key);
        return false;
      }
      moveCellAfter(cell, head.prev);
      resetCell(cell, key);
      keyToCell.delete(key);
      return true;
    },
  };
  freeze(deleteEntry);

  const implementation = /** @type {WeakMapAPI<K, V>} */ ({
    has,
    get,
    set,
    delete: deleteEntry,
    // eslint-disable-next-line jsdoc/check-types
    [/** @type {typeof Symbol.toStringTag} */ (toStringTagSymbol)]: tag,
  });
  freeze(implementation);

  const kit = { cache: implementation, getMetrics };
  return freeze(kit);
};$h͏_once.makeCacheMapKit(makeCacheMapKit);
freeze(makeCacheMapKit);
})()
,
// === 11. cache-map ./index.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([["./src/cachemap.js", []]]);
})()
,
// === 12. ses ./src/error/note-log-args.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let makeCacheMapKit;$h͏_imports([["@endo/cache-map", [["makeCacheMapKit",[$h͏_a => (makeCacheMapKit = $h͏_a)]]]]]);





/**
 * @import {CacheMapKit} from '@endo/cache-map';
 * @import {LogArgs} from './internal-types.js';
 */

const { freeze } = Object;
const { isSafeInteger } = Number;

const defaultLoggedErrorsBudget = 1000;
const defaultArgsPerErrorBudget = 100;

/**
 * @param {number} [errorsBudget]
 * @param {number} [argsPerErrorBudget]
 */
       const makeNoteLogArgsArrayKit = (
  errorsBudget = defaultLoggedErrorsBudget,
  argsPerErrorBudget = defaultArgsPerErrorBudget,
) => {
  if (!isSafeInteger(argsPerErrorBudget) || argsPerErrorBudget < 1) {
    throw TypeError(
      'argsPerErrorBudget must be a safe positive integer number',
    );
  }

  /**
   * Maps from an error to an array of log args, where each log args is
   * remembered as an annotation on that error. This can be used, for example,
   * to keep track of additional causes of the error. The elements of any
   * log args may include errors which are associated with further annotations.
   * An augmented console, like the causal console of `console.js`, could
   * then retrieve the graph of such annotations.
   *
   * @type {CacheMapKit<WeakMapConstructor, Error, LogArgs[]>}
   */
  const { cache: noteLogArgsArrayMap } = makeCacheMapKit(errorsBudget);

  /**
   * @param {Error} error
   * @param {LogArgs} logArgs
   */
  const addLogArgs = (error, logArgs) => {
    const logArgsArray = noteLogArgsArrayMap.get(error);
    if (logArgsArray !== undefined) {
      if (logArgsArray.length >= argsPerErrorBudget) {
        logArgsArray.shift();
      }
      logArgsArray.push(logArgs);
    } else {
      noteLogArgsArrayMap.set(error, [logArgs]);
    }
  };
  freeze(addLogArgs);

  /**
   * @param {Error} error
   * @returns {LogArgs[] | undefined}
   */
  const takeLogArgsArray = error => {
    const result = noteLogArgsArrayMap.get(error);
    noteLogArgsArrayMap.delete(error);
    return result;
  };
  freeze(takeLogArgsArray);

  return freeze({
    addLogArgs,
    takeLogArgsArray,
  });
};$h͏_once.makeNoteLogArgsArrayKit(makeNoteLogArgsArrayKit);
freeze(makeNoteLogArgsArrayKit);
})()
,
// === 13. ses ./src/error/assert.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let RangeError,TypeError,WeakMap,arrayJoin,arrayMap,arrayPop,arrayPush,assign,freeze,defineProperty,globalThis,is,isError,regexpTest,stringIndexOf,stringReplace,stringSlice,stringStartsWith,weakmapDelete,weakmapGet,weakmapHas,weakmapSet,AggregateError,getOwnPropertyDescriptors,ownKeys,create,objectPrototype,hasOwn,an,bestEffortStringify,makeNoteLogArgsArrayKit;$h͏_imports([["../commons.js", [["RangeError",[$h͏_a => (RangeError = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["WeakMap",[$h͏_a => (WeakMap = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["arrayPop",[$h͏_a => (arrayPop = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["is",[$h͏_a => (is = $h͏_a)]],["isError",[$h͏_a => (isError = $h͏_a)]],["regexpTest",[$h͏_a => (regexpTest = $h͏_a)]],["stringIndexOf",[$h͏_a => (stringIndexOf = $h͏_a)]],["stringReplace",[$h͏_a => (stringReplace = $h͏_a)]],["stringSlice",[$h͏_a => (stringSlice = $h͏_a)]],["stringStartsWith",[$h͏_a => (stringStartsWith = $h͏_a)]],["weakmapDelete",[$h͏_a => (weakmapDelete = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["weakmapHas",[$h͏_a => (weakmapHas = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]],["AggregateError",[$h͏_a => (AggregateError = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["objectPrototype",[$h͏_a => (objectPrototype = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]]]],["./stringify-utils.js", [["an",[$h͏_a => (an = $h͏_a)]],["bestEffortStringify",[$h͏_a => (bestEffortStringify = $h͏_a)]]]],["./types.js", []],["./internal-types.js", []],["./note-log-args.js", [["makeNoteLogArgsArrayKit",[$h͏_a => (makeNoteLogArgsArrayKit = $h͏_a)]]]]]);















































/**
 * @import {BaseAssert, Assert, AssertionFunctions, AssertionUtilities, StringablePayload, DetailsToken, MakeAssert} from '../../types.js'
 * @import {LogArgs, NoteCallback, LoggedErrorHandler} from "./internal-types.js";
 */

// For our internal debugging purposes, uncomment
// const internalDebugConsole = console;

// /////////////////////////////////////////////////////////////////////////////

/** @type {WeakMap<StringablePayload, any>} */
const declassifiers = new WeakMap();

/** @type {AssertionUtilities['quote']} */
const quote = (payload, spaces = undefined) => {
  const result = freeze({
    toString: freeze(() => bestEffortStringify(payload, spaces)),
  });
  weakmapSet(declassifiers, result, payload);
  return result;
};$h͏_once.quote(quote);
freeze(quote);

const canBeBare = freeze(/^[\w:-]( ?[\w:-])*$/);

/**
 * @type {AssertionUtilities['bare']}
 */
const bare = (payload, spaces = undefined) => {
  if (typeof payload !== 'string' || !regexpTest(canBeBare, payload)) {
    return quote(payload, spaces);
  }
  const result = freeze({
    toString: freeze(() => payload),
  });
  weakmapSet(declassifiers, result, payload);
  return result;
};$h͏_once.bare(bare);
freeze(bare);

// /////////////////////////////////////////////////////////////////////////////

/**
 * @typedef {object} HiddenDetails
 *
 * Captures the arguments passed to the `details` template string tag.
 *
 * @property {TemplateStringsArray | string[]} template
 * @property {any[]} args
 */

/**
 * @type {WeakMap<DetailsToken, HiddenDetails>}
 *
 * Maps from a details token which a `details` template literal returned
 * to a record of the contents of that template literal expression.
 */
const hiddenDetailsMap = new WeakMap();

/**
 * @param {HiddenDetails} hiddenDetails
 * @returns {string}
 */
const getMessageString = ({ template, args }) => {
  const parts = [template[0]];
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    let argStr;
    if (weakmapHas(declassifiers, arg)) {
      argStr = `${arg}`;
    } else if (isError(arg)) {
      argStr = `(${an(arg.name)})`;
    } else {
      argStr = `(${an(typeof arg)})`;
    }
    arrayPush(parts, argStr, template[i + 1]);
  }
  return arrayJoin(parts, '');
};

/**
 * Give detailsTokens a toString behavior. To minimize the overhead of
 * creating new detailsTokens, we do this with an
 * inherited `this` sensitive `toString` method, even though we normally
 * avoid `this` sensitivity. To protect the method from inappropriate
 * `this` application, it does something interesting only for objects
 * registered in `redactedDetails`, which should be exactly the detailsTokens.
 *
 * The printing behavior must not reveal anything redacted, so we just use
 * the same `getMessageString` we use to construct the redacted message
 * string for a thrown assertion error.
 */
const DetailsTokenProto = freeze({
  toString() {
    const hiddenDetails = weakmapGet(hiddenDetailsMap, this);
    if (hiddenDetails === undefined) {
      return '[Not a DetailsToken]';
    }
    return getMessageString(hiddenDetails);
  },
});
freeze(DetailsTokenProto.toString);

/**
 * Normally this is the function exported as `assert.details` and often
 * spelled `X`. However, if the `{errorTaming: 'unsafe'}` or
 * `{errorTaming: 'unsafe-debug'}` option is
 * given to `lockdown`, then `unredactedDetails` is used instead.
 *
 * There are some unconditional uses of `redactedDetails` in this module. All
 * of them should be uses where the template literal has no redacted
 * substitution values. In those cases, the two are equivalent.
 *
 * @type {AssertionUtilities['details']}
 */
const redactedDetails = (template, ...args) => {
  // Keep in mind that the vast majority of calls to `details` creates
  // a details token that is never used, so this path must remain as fast as
  // possible. Hence we store what we've got with little processing, postponing
  // all the work to happen only if needed, for example, if an assertion fails.
  const detailsToken = freeze({ __proto__: DetailsTokenProto });
  weakmapSet(hiddenDetailsMap, detailsToken, { template, args });
  return /** @type {DetailsToken} */ (/** @type {unknown} */ (detailsToken));
};$h͏_once.redactedDetails(redactedDetails);
freeze(redactedDetails);

/**
 * `unredactedDetails` is like `details` except that it does not redact
 * anything. It acts like `details` would act if all substitution values
 * were wrapped with the `quote` function above (the function normally
 * spelled `q`). If the `{errorTaming: 'unsafe'}`
 * or `{errorTaming: 'unsafe-debug'}` option is given to
 * `lockdown`, then the lockdown-shim arranges for the global `assert` to be
 * one whose `details` property is `unredactedDetails`.
 * This setting optimizes the debugging and testing experience at the price
 * of safety. `unredactedDetails` also sacrifices the speed of `details`,
 * which is usually fine in debugging and testing.
 *
 * @type {AssertionUtilities['details']}
 */
const unredactedDetails = (template, ...args) => {
  args = arrayMap(args, arg =>
    weakmapHas(declassifiers, arg) ? arg : quote(arg),
  );
  return redactedDetails(template, ...args);
};$h͏_once.unredactedDetails(unredactedDetails);
freeze(unredactedDetails);


/**
 * @param {HiddenDetails} hiddenDetails
 * @returns {LogArgs}
 */
const getLogArgs = ({ template, args }) => {
  const logArgs = [template[0]];
  for (let i = 0; i < args.length; i += 1) {
    let arg = args[i];
    if (weakmapHas(declassifiers, arg)) {
      arg = weakmapGet(declassifiers, arg);
    }
    // Remove the extra spaces (since console.error puts them
    // between each cause).
    const priorWithoutSpace = stringReplace(arrayPop(logArgs) || '', / $/, '');
    if (priorWithoutSpace !== '') {
      arrayPush(logArgs, priorWithoutSpace);
    }
    const nextWithoutSpace = stringReplace(template[i + 1], /^ /, '');
    arrayPush(logArgs, arg, nextWithoutSpace);
  }
  if (logArgs[logArgs.length - 1] === '') {
    arrayPop(logArgs);
  }
  return logArgs;
};

/**
 * @type {WeakMap<Error, LogArgs>}
 *
 * Maps from an error object to the log args that are a more informative
 * alternative message for that error. When logging the error, these
 * log args should be preferred to `error.message`.
 */
const hiddenMessageLogArgs = new WeakMap();

// So each error tag will be unique.
let errorTagNum = 0;

/**
 * @type {WeakMap<Error, string>}
 */
const errorTags = new WeakMap();

/**
 * @param {Error} err
 * @param {string=} optErrorName
 * @returns {string}
 */
const tagError = (err, optErrorName = err.name) => {
  let errorTag = weakmapGet(errorTags, err);
  if (errorTag !== undefined) {
    return errorTag;
  }
  errorTagNum += 1;
  errorTag = `${optErrorName}#${errorTagNum}`;
  weakmapSet(errorTags, err, errorTag);
  return errorTag;
};

/**
 * Make reasonable best efforts to make a `Passable` error.
 *   - `sanitizeError` will remove any "extraneous" own properties already added
 *     by the host,
 *     such as `fileName`,`lineNumber` on FireFox or `line` on Safari.
 *   - If any such "extraneous" properties were removed, `sanitizeError` will
 *     annotate
 *     the error with them, so they still appear on the causal console
 *     log output for diagnostic purposes, but not be otherwise visible.
 *   - `sanitizeError` will ensure that any expected properties already
 *     added by the host are data
 *     properties, converting accessor properties to data properties as needed,
 *     such as `stack` on v8 (Chrome, Brave, Edge?)
 *   - `sanitizeError` will freeze the error, preventing any correct engine from
 *     adding or
 *     altering any of the error's own properties `sanitizeError` is done.
 *
 * However, `sanitizeError` will not, for example, `harden`
 * (i.e., deeply freeze)
 * or ensure that the `cause` or `errors` property satisfy the `Passable`
 * constraints. The purpose of `sanitizeError` is only to protect against
 * mischief the host may have already added to the error as created,
 * not to ensure that the error is actually Passable. For that,
 * see `toPassableError` in `@endo/pass-style`.
 *
 * @param {Error} error
 */
       const sanitizeError = error => {
  const descs = getOwnPropertyDescriptors(error);
  const {
    name: _nameDesc,
    message: _messageDesc,
    errors: _errorsDesc = undefined,
    cause: _causeDesc = undefined,
    stack: _stackDesc = undefined,
    ...restDescs
  } = descs;

  const restNames = ownKeys(restDescs);
  if (restNames.length >= 1) {
    for (const name of restNames) {
      delete error[name];
    }
    const droppedNote = create(objectPrototype, restDescs);
    // eslint-disable-next-line no-use-before-define
    note(
      error,
      redactedDetails`originally with properties ${quote(droppedNote)}`,
    );
  }
  for (const name of ownKeys(error)) {
    // @ts-expect-error TS still confused by symbols as property names
    const desc = descs[name];
    if (desc && hasOwn(desc, 'get')) {
      defineProperty(error, name, {
        value: error[name]  // invoke the getter to convert to data property
      });
    }
  }
  freeze(error);
};

/**
 * @type {AssertionUtilities['error']}
 */$h͏_once.sanitizeError(sanitizeError);
const makeError = (
  optDetails = redactedDetails`Assert failed`,
  errConstructor = globalThis.Error,
  {
    errorName = undefined,
    cause = undefined,
    errors = undefined,
    sanitize = true,
  } = {},
) => {
  if (typeof optDetails === 'string') {
    // If it is a string, use it as the literal part of the template so
    // it doesn't get quoted.
    optDetails = redactedDetails([optDetails]);
  }
  const hiddenDetails = weakmapGet(hiddenDetailsMap, optDetails);
  if (hiddenDetails === undefined) {
    throw TypeError(`unrecognized details ${quote(optDetails)}`);
  }
  const messageString = getMessageString(hiddenDetails);
  const opts = cause && { cause };
  let error;
  if (
    typeof AggregateError !== 'undefined' &&
    errConstructor === AggregateError
  ) {
    error = AggregateError(errors || [], messageString, opts);
  } else {
    error = /** @type {ErrorConstructor} */ (errConstructor)(
      messageString,
      opts,
    );
    if (errors !== undefined) {
      // Since we need to tolerate `errors` on an AggregateError, may as
      // well tolerate it on all errors.
      defineProperty(error, 'errors', {
        value: errors,
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
  }
  weakmapSet(hiddenMessageLogArgs, error, getLogArgs(hiddenDetails));
  if (errorName !== undefined) {
    tagError(error, errorName);
  }
  if (sanitize) {
    sanitizeError(error);
  }
  // The next line is a particularly fruitful place to put a breakpoint.
  return error;
};$h͏_once.makeError(makeError);
freeze(makeError);

// /////////////////////////////////////////////////////////////////////////////

const { addLogArgs, takeLogArgsArray } = makeNoteLogArgsArrayKit();

/**
 * @type {WeakMap<Error, NoteCallback[]>}
 *
 * An augmented console will normally only take the hidden noteArgs array once,
 * when it logs the error being annotated. Once that happens, further
 * annotations of that error should go to the console immediately. We arrange
 * that by accepting a note-callback function from the console as an optional
 * part of that taking operation. Normally there will only be at most one
 * callback per error, but that depends on console behavior which we should not
 * assume. We make this an array of callbacks so multiple registrations
 * are independent.
 */
const hiddenNoteCallbackArrays = new WeakMap();

/** @type {AssertionUtilities['note']} */
const note = (error, detailsNote) => {
  if (typeof detailsNote === 'string') {
    // If it is a string, use it as the literal part of the template so
    // it doesn't get quoted.
    detailsNote = redactedDetails([detailsNote]);
  }
  const hiddenDetails = weakmapGet(hiddenDetailsMap, detailsNote);
  if (hiddenDetails === undefined) {
    throw TypeError(`unrecognized details ${quote(detailsNote)}`);
  }
  const logArgs = getLogArgs(hiddenDetails);
  const callbacks = weakmapGet(hiddenNoteCallbackArrays, error);
  if (callbacks !== undefined) {
    for (const callback of callbacks) {
      callback(error, logArgs);
    }
  } else {
    addLogArgs(error, logArgs);
  }
};$h͏_once.note(note);
freeze(note);

/**
 * The unprivileged form that just uses the de facto `error.stack` property.
 * The start compartment normally has a privileged `globalThis.getStackString`
 * which should be preferred if present.
 *
 * @param {Error} error
 * @returns {string}
 */
const defaultGetStackString = error => {
  if (!('stack' in error)) {
    return '';
  }
  const stackString = `${error.stack}`;
  const pos = stringIndexOf(stackString, '\n');
  if (stringStartsWith(stackString, ' ') || pos === -1) {
    return stackString;
  }
  return stringSlice(stackString, pos + 1); // exclude the initial newline
};

/** @type {LoggedErrorHandler} */
const loggedErrorHandler = {
  getStackString: globalThis.getStackString || defaultGetStackString,
  tagError: error => tagError(error),
  resetErrorTagNum: () => {
    errorTagNum = 0;
  },
  getMessageLogArgs: error => weakmapGet(hiddenMessageLogArgs, error),
  takeMessageLogArgs: error => {
    const result = weakmapGet(hiddenMessageLogArgs, error);
    weakmapDelete(hiddenMessageLogArgs, error);
    return result;
  },
  takeNoteLogArgsArray: (error, callback) => {
    const result = takeLogArgsArray(error);
    if (callback !== undefined) {
      const callbacks = weakmapGet(hiddenNoteCallbackArrays, error);
      if (callbacks) {
        arrayPush(callbacks, callback);
      } else {
        weakmapSet(hiddenNoteCallbackArrays, error, [callback]);
      }
    }
    return result || [];
  },
};$h͏_once.loggedErrorHandler(loggedErrorHandler);
freeze(loggedErrorHandler);


// /////////////////////////////////////////////////////////////////////////////

/**
 * @type {MakeAssert}
 */
const makeAssert = (optRaise = undefined, unredacted = false) => {
  const details = unredacted ? unredactedDetails : redactedDetails;
  const assertFailedDetails = details`Check failed`;

  /** @type {AssertionFunctions['fail']} */
  const fail = (
    optDetails = assertFailedDetails,
    errConstructor = undefined,
    options = undefined,
  ) => {
    const reason = makeError(optDetails, errConstructor, options);
    if (optRaise !== undefined) {
      // @ts-ignore returns `never` doesn't mean it isn't callable
      optRaise(reason);
    }
    throw reason;
  };
  freeze(fail);

  /** @type {AssertionUtilities['Fail']} */
  const Fail = (template, ...args) => fail(details(template, ...args));

  // Don't freeze or export `baseAssert` until we add methods.
  // TODO If I change this from a `function` function to an arrow
  // function, I seem to get type errors from TypeScript. Why?
  /** @type {BaseAssert} */
  function baseAssert(
    flag,
    optDetails = undefined,
    errConstructor = undefined,
    options = undefined,
  ) {
    flag || fail(optDetails, errConstructor, options);
  }

  /** @type {AssertionFunctions['equal']} */
  const equal = (
    actual,
    expected,
    optDetails = undefined,
    errConstructor = undefined,
    options = undefined,
  ) => {
    is(actual, expected) ||
      fail(
        optDetails || details`Expected ${actual} is same as ${expected}`,
        errConstructor || RangeError,
        options,
      );
  };
  freeze(equal);

  /** @type {AssertionFunctions['typeof']} */
  const assertTypeof = (specimen, typename, optDetails) => {
    // This will safely fall through if typename is not a string,
    // which is what we want.
    // eslint-disable-next-line valid-typeof
    if (typeof specimen === typename) {
      return;
    }
    typeof typename === 'string' || Fail`${quote(typename)} must be a string`;

    if (optDetails === undefined) {
      // Embed the type phrase without quotes.
      const typeWithDeterminer = an(typename);
      optDetails = details`${specimen} must be ${bare(typeWithDeterminer)}`;
    }
    fail(optDetails, TypeError);
  };
  freeze(assertTypeof);

  /** @type {AssertionFunctions['string']} */
  const assertString = (specimen, optDetails = undefined) =>
    assertTypeof(specimen, 'string', optDetails);

  // Note that "assert === baseAssert"
  /** @type {Assert} */
  const assert = assign(baseAssert, {
    error: makeError,
    fail,
    equal,
    typeof: assertTypeof,
    string: assertString,
    note,
    details,
    Fail,
    quote,
    bare,
    makeAssert,
  });
  return freeze(assert);
};$h͏_once.makeAssert(makeAssert);
freeze(makeAssert);


/** @type {Assert} */
const assert = makeAssert();$h͏_once.assert(assert);


// Internal, to obviate polymorphic dispatch, but may become rigorously
// consistent with @endo/error:

/** @type {AssertionFunctions['equal']} */
const assertEqual = assert.equal;$h͏_once.assertEqual(assertEqual);
})()
,
// === 14. ses ./src/make-hardener.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Set,String,TypeError,WeakSet,globalThis,apply,arrayForEach,defineProperty,freeze,getOwnPropertyDescriptor,getOwnPropertyDescriptors,getPrototypeOf,isInteger,isPrimitive,hasOwn,ownKeys,preventExtensions,setAdd,setForEach,setHas,toStringTagSymbol,typedArrayPrototype,weaksetAdd,weaksetHas,FERAL_STACK_GETTER,FERAL_STACK_SETTER,isError,assert;$h͏_imports([["./commons.js", [["Set",[$h͏_a => (Set = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["arrayForEach",[$h͏_a => (arrayForEach = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["isInteger",[$h͏_a => (isInteger = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["preventExtensions",[$h͏_a => (preventExtensions = $h͏_a)]],["setAdd",[$h͏_a => (setAdd = $h͏_a)]],["setForEach",[$h͏_a => (setForEach = $h͏_a)]],["setHas",[$h͏_a => (setHas = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]],["typedArrayPrototype",[$h͏_a => (typedArrayPrototype = $h͏_a)]],["weaksetAdd",[$h͏_a => (weaksetAdd = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]],["FERAL_STACK_GETTER",[$h͏_a => (FERAL_STACK_GETTER = $h͏_a)]],["FERAL_STACK_SETTER",[$h͏_a => (FERAL_STACK_SETTER = $h͏_a)]],["isError",[$h͏_a => (isError = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);





















































/**
 * @import {Harden} from '../types.js'
 */

// Obtain the string tag accessor of of TypedArray so we can indirectly use the
// TypedArray brand check it employs.
const typedArrayToStringTag = getOwnPropertyDescriptor(
  typedArrayPrototype,
  toStringTagSymbol,
);
assert(typedArrayToStringTag);
const getTypedArrayToStringTag = typedArrayToStringTag.get;
assert(getTypedArrayToStringTag);

// Exported for tests.
/**
 * Duplicates packages/marshal/src/helpers/passStyle-helpers.js to avoid a dependency.
 *
 * @param {unknown} object
 */
       const isTypedArray = object => {
  // The object must pass a brand check or toStringTag will return undefined.
  const tag = apply(getTypedArrayToStringTag, object, []);
  return tag !== undefined;
};

/**
 * Tests if a property key is an integer-valued canonical numeric index.
 * https://tc39.es/ecma262/#sec-canonicalnumericindexstring
 *
 * @param {string | symbol} propertyKey
 */$h͏_once.isTypedArray(isTypedArray);
const isCanonicalIntegerIndexString = propertyKey => {
  const n = +String(propertyKey);
  return isInteger(n) && String(n) === propertyKey;
};

/**
 * @template T
 * @param {ArrayLike<T>} array
 */
const freezeTypedArray = array => {
  preventExtensions(array);

  // Downgrade writable expandos to readonly, even if non-configurable.
  // We get each descriptor individually rather than using
  // getOwnPropertyDescriptors in order to fail safe when encountering
  // an obscure GraalJS issue where getOwnPropertyDescriptor returns
  // undefined for a property that does exist.
  arrayForEach(ownKeys(array), (/** @type {string | symbol} */ name) => {
    const desc = getOwnPropertyDescriptor(array, name);
    assert(desc);
    // TypedArrays are integer-indexed exotic objects, which define special
    // treatment for property names in canonical numeric form:
    // integers in range are permanently writable and non-configurable.
    // https://tc39.es/ecma262/#sec-integer-indexed-exotic-objects
    //
    // This is analogous to the data of a hardened Map or Set,
    // so we carve out this exceptional behavior but make all other
    // properties non-configurable.
    if (!isCanonicalIntegerIndexString(name)) {
      defineProperty(array, name, {
        ...desc,
        writable: false,
        configurable: false,
      });
    }
  });
};

/**
 * Create a `harden` function.
 *
 * @returns {Harden}
 */
       const makeHardener = () => {
  // Use a native hardener if possible.
  if (typeof globalThis.harden === 'function') {
    const safeHarden = globalThis.harden;
    return safeHarden;
  }

  const hardened = new WeakSet();

  const { harden } = {
    /**
     * @template T
     * @param {T} root
     * @returns {T}
     */
    harden(root) {
      const toFreeze = new Set();

      // If val is something we should be freezing but aren't yet,
      // add it to toFreeze.
      /**
       * @param {any} val
       */
      function enqueue(val) {
        if (isPrimitive(val)) {
          // ignore primitives
          return;
        }
        const type = typeof val;
        if (type !== 'object' && type !== 'function') {
          // future proof: break until someone figures out what it should do
          throw TypeError(`Unexpected typeof: ${type}`);
        }
        if (weaksetHas(hardened, val) || setHas(toFreeze, val)) {
          // Ignore if this is an exit, or we've already visited it
          return;
        }
        // console.warn(`adding ${val} to toFreeze`, val);
        setAdd(toFreeze, val);
      }

      /**
       * @param {any} obj
       */
      const baseFreezeAndTraverse = obj => {
        // Now freeze the object to ensure reactive
        // objects such as proxies won't add properties
        // during traversal, before they get frozen.

        // Object are verified before being enqueued,
        // therefore this is a valid candidate.
        // Throws if this fails (strict mode).
        // Also throws if the object is an ArrayBuffer or any TypedArray.
        if (isTypedArray(obj)) {
          freezeTypedArray(obj);
        } else {
          freeze(obj);
        }

        // we rely upon certain commitments of Object.freeze and proxies here

        // get stable/immutable outbound links before a Proxy has a chance to do
        // something sneaky.
        const descs = getOwnPropertyDescriptors(obj);
        const proto = getPrototypeOf(obj);
        enqueue(proto);

        arrayForEach(ownKeys(descs), (/** @type {string | symbol} */ name) => {
          // The 'name' may be a symbol, and TypeScript doesn't like us to
          // index arbitrary symbols on objects, so we pretend they're just
          // strings.
          const desc = descs[/** @type {string} */ (name)];
          // getOwnPropertyDescriptors is guaranteed to return well-formed
          // descriptors, but they still inherit from Object.prototype. If
          // someone has poisoned Object.prototype to add 'value' or 'get'
          // properties, then a simple 'if ("value" in desc)' or 'desc.value'
          // test could be confused. We use hasOwnProperty to be sure about
          // whether 'value' is present or not, which tells us for sure that
          // this is a data property.
          if (hasOwn(desc, 'value')) {
            enqueue(desc.value);
          } else {
            enqueue(desc.get);
            enqueue(desc.set);
          }
        });
      };

      const freezeAndTraverse =
        FERAL_STACK_GETTER === undefined && FERAL_STACK_SETTER === undefined
          ? // On platforms without v8's error own stack accessor problem,
            // don't pay for any extra overhead.
            baseFreezeAndTraverse
          : obj => {
              if (isError(obj)) {
                // Only pay the overhead if it first passes this cheap isError
                // check. Otherwise, it will be unrepaired, but won't be judged
                // to be a passable error anyway, so will not be unsafe.
                const stackDesc = getOwnPropertyDescriptor(obj, 'stack');
                if (
                  stackDesc &&
                  stackDesc.get === FERAL_STACK_GETTER &&
                  stackDesc.configurable
                ) {
                  // Can only repair if it is configurable. Otherwise, leave
                  // unrepaired, in which case it will not be judged passable,
                  // avoiding a safety problem.
                  defineProperty(obj, 'stack', {
                    // NOTE: Calls getter during harden, which seems dangerous.
                    // But we're only calling the problematic getter whose
                    // hazards we think we understand.
                    // @ts-expect-error TS should know FERAL_STACK_GETTER
                    // cannot be `undefined` here.
                    // See https://github.com/endojs/endo/pull/2232#discussion_r1575179471
                    value: apply(FERAL_STACK_GETTER, obj, []),
                  });
                }
              }
              return baseFreezeAndTraverse(obj);
            };

      const dequeue = () => {
        // New values added before forEach() has finished will be visited.
        setForEach(toFreeze, freezeAndTraverse);
      };

      /** @param {any} value */
      const markHardened = value => {
        weaksetAdd(hardened, value);
      };

      const commit = () => {
        setForEach(toFreeze, markHardened);
      };

      enqueue(root);
      dequeue();
      // console.warn("toFreeze set:", toFreeze);
      commit();

      return root;
    },
  };

  return harden;
};$h͏_once.makeHardener(makeHardener);
})()
,
// === 15. ses ./src/cauterize-property.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let hasOwn;$h͏_imports([["./commons.js", [["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]]]]]);

/**
 * @import {Reporter} from './reporting-types.js'
 */

/**
 * Delete `obj[prop]` or at least make it harmless.
 *
 * If the property was not expected, then emit a reporter-dependent warning
 * to bring attention to this case, so someone can determine what to do with it.
 *
 * If the property to be deleted is a function's `.prototype` property, this
 * will normally be because the function was supposed to be a
 * - builtin method or non-constructor function
 * - arrow function
 * - concise method
 *
 * all of whom are not supposed to have a `.prototype` property. Nevertheless,
 * on some platforms (like older versions of Hermes), or as a result of
 * some shim-based mods to the primordials (like core-js?), some of these
 * functions may accidentally be more like `function` functions with
 * an undeletable `.prototype` property. In these cases, if we can
 * set the value of that bogus `.prototype` property to `undefined`,
 * we do so, issuing a warning, rather than failing to initialize ses.
 *
 * @param {object} obj
 * @param {PropertyKey} prop
 * @param {boolean} known If deletion is expected, don't warn
 * @param {string} subPath Used for warning messages
 * @param {Reporter} reporter Where to issue warning or error.
 * @returns {void}
 */
       const cauterizeProperty = (
  obj,
  prop,
  known,
  subPath,
  { warn, error },
) => {
  // Either the object lacks a permit or the object doesn't match the
  // permit.
  // If the permit is specifically false, not merely undefined,
  // this is a property we expect to see because we know it exists in
  // some environments and we have expressly decided to exclude it.
  // Any other disallowed property is one we have not audited and we log
  // that we are removing it so we know to look into it, as happens when
  // the language evolves new features to existing intrinsics.
  if (!known) {
    warn(`Removing ${subPath}`);
  }
  try {
    delete obj[prop];
  } catch (err) {
    if (hasOwn(obj, prop)) {
      if (typeof obj === 'function' && prop === 'prototype') {
        obj.prototype = undefined;
        if (obj.prototype === undefined) {
          warn(`Tolerating undeletable ${subPath} === undefined`);
          return;
        }
      }
      error(`failed to delete ${subPath}`, err);
    } else {
      error(`deleting ${subPath} threw`, err);
    }
    throw err;
  }
};$h͏_once.cauterizeProperty(cauterizeProperty);
})()
,
// === 16. ses ./src/permits.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let arrayPush,arrayForEach;$h͏_imports([["./commons.js", [["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["arrayForEach",[$h͏_a => (arrayForEach = $h͏_a)]]]]]);




/** @import {GenericErrorConstructor} from '../types.js' */

/**
 * Exports {@code permits}, a recursively defined
 * JSON record enumerating all intrinsics and their properties
 * according to ECMA specs.
 *
 * @author JF Paradis
 * @author Mark S. Miller
 *
 * @module
 */

/**
 * constantProperties
 * non-configurable, non-writable data properties of all global objects.
 * Must be powerless.
 * Maps from property name to the actual value
 */
       const constantProperties = {
  // *** Value Properties of the Global Object

  Infinity,
  NaN,
  undefined,
};

/**
 * universalPropertyNames
 * Properties of all global objects.
 * Must be powerless.
 * Maps from property name to the intrinsic name in the permits.
 */$h͏_once.constantProperties(constantProperties);
       const universalPropertyNames = {
  // *** Function Properties of the Global Object

  isFinite: 'isFinite',
  isNaN: 'isNaN',
  parseFloat: 'parseFloat',
  parseInt: 'parseInt',

  decodeURI: 'decodeURI',
  decodeURIComponent: 'decodeURIComponent',
  encodeURI: 'encodeURI',
  encodeURIComponent: 'encodeURIComponent',

  // *** Constructor Properties of the Global Object

  Array: 'Array',
  ArrayBuffer: 'ArrayBuffer',
  BigInt: 'BigInt',
  BigInt64Array: 'BigInt64Array',
  BigUint64Array: 'BigUint64Array',
  Boolean: 'Boolean',
  DataView: 'DataView',
  EvalError: 'EvalError',
  // https://github.com/tc39/proposal-float16array
  Float16Array: 'Float16Array',
  Float32Array: 'Float32Array',
  Float64Array: 'Float64Array',
  Int8Array: 'Int8Array',
  Int16Array: 'Int16Array',
  Int32Array: 'Int32Array',
  Map: 'Map',
  Number: 'Number',
  Object: 'Object',
  Promise: 'Promise',
  Proxy: 'Proxy',
  RangeError: 'RangeError',
  ReferenceError: 'ReferenceError',
  Set: 'Set',
  String: 'String',
  SyntaxError: 'SyntaxError',
  TypeError: 'TypeError',
  Uint8Array: 'Uint8Array',
  Uint8ClampedArray: 'Uint8ClampedArray',
  Uint16Array: 'Uint16Array',
  Uint32Array: 'Uint32Array',
  URIError: 'URIError',
  WeakMap: 'WeakMap',
  WeakSet: 'WeakSet',
  // https://github.com/tc39/proposal-iterator-helpers
  Iterator: 'Iterator',
  // https://github.com/tc39/proposal-async-iterator-helpers
  AsyncIterator: 'AsyncIterator',
  // https://github.com/endojs/endo/issues/550
  AggregateError: 'AggregateError',

  // https://github.com/tc39/proposal-explicit-resource-management
  // TODO DisposableStack, AsyncDisposableStack
  // DisposableStack: 'DisposableStack',
  // AsyncDisposableStack: 'AsyncDisposableStack',

  // https://tc39.es/proposal-shadowrealm/
  // TODO ShadowRealm
  // ShadowRealm: 'ShadowRealm',

  // *** Other Properties of the Global Object

  JSON: 'JSON',
  Reflect: 'Reflect',

  // *** Annex B

  escape: 'escape',
  unescape: 'unescape',

  // ESNext

  // https://github.com/tc39/proposal-source-phase-imports?tab=readme-ov-file#js-module-source
  ModuleSource: 'ModuleSource',

  lockdown: 'lockdown',
  harden: 'harden',

  HandledPromise: 'HandledPromise'  // TODO: Until Promise.delegate (see below).
};

/**
 * initialGlobalPropertyNames
 * Those found only on the initial global, i.e., the global of the
 * start compartment, as well as any compartments created before lockdown.
 * These may provide much of the power provided by the original.
 * Maps from property name to the intrinsic name in the permits.
 */$h͏_once.universalPropertyNames(universalPropertyNames);
       const initialGlobalPropertyNames = {
  // *** Constructor Properties of the Global Object

  Date: '%InitialDate%',
  Error: '%InitialError%',
  RegExp: '%InitialRegExp%',

  // Omit `Symbol`, because we want the original to appear on the
  // start compartment without passing through the permits mechanism, since
  // we want to preserve all its properties, even if we never heard of them.
  // Symbol: '%InitialSymbol%',

  // *** Other Properties of the Global Object

  Math: '%InitialMath%',

  // ESNext

  // From Error-stack proposal
  // Only on initial global. No corresponding
  // powerless form for other globals.
  getStackString: '%InitialGetStackString%'

  // TODO https://github.com/Agoric/SES-shim/issues/551
  // Need initial WeakRef and FinalizationGroup in
  // start compartment only.

  // TODO Temporal
  // https://github.com/tc39/proposal-temporal
  // Temporal: '%InitialTemporal%' // with Temporal.Now
};

/**
 * sharedGlobalPropertyNames
 * Those found only on the globals of new compartments created after lockdown,
 * which must therefore be powerless.
 * Maps from property name to the intrinsic name in the permits.
 */$h͏_once.initialGlobalPropertyNames(initialGlobalPropertyNames);
       const sharedGlobalPropertyNames = {
  // *** Constructor Properties of the Global Object

  Date: '%SharedDate%',
  Error: '%SharedError%',
  RegExp: '%SharedRegExp%',
  Symbol: '%SharedSymbol%',

  // *** Other Properties of the Global Object

  Math: '%SharedMath%'

  // TODO Temporal
  // https://github.com/tc39/proposal-temporal
  // Temporal: '%SharedTemporal%' // without Temporal.Now
};

/**
 * uniqueGlobalPropertyNames
 * Those made separately for each global, including the initial global
 * of the start compartment.
 * Maps from property name to the intrinsic name in the permits
 * (which is currently always the same).
 */$h͏_once.sharedGlobalPropertyNames(sharedGlobalPropertyNames);
       const uniqueGlobalPropertyNames = {
  // *** Value Properties of the Global Object

  globalThis: '%UniqueGlobalThis%',

  // *** Function Properties of the Global Object

  eval: '%UniqueEval%',

  // *** Constructor Properties of the Global Object

  Function: '%UniqueFunction%',

  // *** Other Properties of the Global Object

  // ESNext

  Compartment: '%UniqueCompartment%'
  // According to current agreements, eventually the Realm constructor too.
  // 'Realm',
};

// All the "subclasses" of Error. These are collectively represented in the
// ECMAScript spec by the meta variable NativeError.
/** @type {GenericErrorConstructor[]} */$h͏_once.uniqueGlobalPropertyNames(uniqueGlobalPropertyNames);
const NativeErrors = [
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
  // https://github.com/endojs/endo/issues/550
  // Commented out to accommodate platforms prior to AggregateError.
  // Instead, conditional push below.
  // AggregateError,
];$h͏_once.NativeErrors(NativeErrors);

if (typeof AggregateError !== 'undefined') {
  // Conditional, to accommodate platforms prior to AggregateError
  arrayPush(NativeErrors, AggregateError);
}



/**
 * <p>Each JSON record enumerates the disposition of the properties on
 *    some corresponding intrinsic object.
 *
 * <p>All records are made of key-value pairs where the key
 *    is the property to process, and the value is the associated
 *    dispositions a.k.a. the "permit". Those permits can be:
 * <ul>
 * <li>The boolean value "false", in which case this property is
 *     blacklisted and simply removed. Properties not mentioned
 *     are also considered blacklisted and are removed.
 * <li>A string value equal to a primitive ("number", "string", etc),
 *     in which case the property is permitted if its value property
 *     is typeof the given type. For example, {@code "Infinity"} leads to
 *     "number" and property values that fail {@code typeof "number"}.
 *     are removed.
 * <li>A string value equal to an intinsic name ("ObjectPrototype",
 *     "Array", etc), in which case the property permitted if its
 *     value property is equal to the value of the corresponfing
 *     intrinsics. For example, {@code Map.prototype} leads to
 *     "MapPrototype" and the property is removed if its value is
 *     not equal to %MapPrototype%
 * <li>Another record, in which case this property is simply
 *     permitted and that next record represents the disposition of
 *     the object which is its value. For example, {@code "Object"}
 *     leads to another record explaining what properties {@code
 *     "Object"} may have and how each such property should be treated.
 *
 * <p>Notes:
 * <li>"[[Proto]]" is used to refer to the "[[Prototype]]" internal
 *     slot, which says which object this object inherits from.
 * <li>"--proto--" is used to refer to the "__proto__" property name,
 *     which is the name of an accessor property on Object.prototype.
 *     In practice, it is used to access the [[Proto]] internal slot,
 *     but is distinct from the internal slot itself. We use
 *     "--proto--" rather than "__proto__" below because "__proto__"
 *     in an object literal is special syntax rather than a normal
 *     property definition.
 * <li>"ObjectPrototype" is the default "[[Proto]]" (when not specified).
 * <li>Constants "fn" and "getter" are used to keep the structure DRY.
 * <li>Symbol properties are listed as follow:
 *     <li>Well-known symbols use the "@@name" form.
 *     <li>Registered symbols use the "RegisteredSymbol(key)" form.
 *     <li>Unique symbols use the "UniqueSymbol(description)" form.
 */

// Function Instances
       const FunctionInstance = {
  '[[Proto]]': '%FunctionPrototype%',
  length: 'number',
  name: 'string'
  // Do not specify "prototype" here, since only Function instances that can
  // be used as a constructor have a prototype property. For constructors,
  // since prototype properties are instance-specific, we define it there.
};

// AsyncFunction Instances
$h͏_once.FunctionInstance(FunctionInstance);const AsyncFunctionInstance={
  // This property is not mentioned in ECMA 262, but is present in V8 and
  // necessary for lockdown to succeed.
  '[[Proto]]': '%AsyncFunctionPrototype%',
};

// Aliases
$h͏_once.AsyncFunctionInstance(AsyncFunctionInstance);const fn=FunctionInstance;
const asyncFn = AsyncFunctionInstance;

const getter = {
  get: fn,
  set: 'undefined',
};

// Possible but not encountered in the specs
// export const setter = {
//   get: 'undefined',
//   set: fn,
// };

const accessor = {
  get: fn,
  set: fn,
};

// eslint-disable-next-line func-names
const strict = function () {
  'use strict';
};

// TODO Remove this once we no longer support the Hermes that needed this.
arrayForEach(['caller', 'arguments'], prop => {
  try {
    strict[prop];
  } catch (e) {
    // https://github.com/facebook/hermes/blob/main/test/hermes/function-non-strict.js
    if (e.message === 'Restricted in strict mode') {
      // Fixed in Static Hermes: https://github.com/facebook/hermes/issues/1582
      FunctionInstance[prop] = accessor;
    }
  }
});

       const isAccessorPermit = permit => {
  return permit === getter || permit === accessor;
};

// NativeError Object Structure
$h͏_once.isAccessorPermit(isAccessorPermit);function NativeError(prototype){
  return {
    // Properties of the NativeError Constructors
    '[[Proto]]': '%SharedError%',

    // NativeError.prototype
    prototype,
  };
}

function NativeErrorPrototype(constructor) {
  return {
    // Properties of the NativeError Prototype Objects
    '[[Proto]]': '%ErrorPrototype%',
    constructor,
    message: 'string',
    name: 'string',
    // Redundantly present only on v8. Safe to remove.
    toString: false,
    // Superfluously present in some versions of V8.
    // https://github.com/tc39/notes/blob/master/meetings/2021-10/oct-26.md#:~:text=However%2C%20Chrome%2093,and%20node%2016.11.
    cause: false,
  };
}

// The TypedArray Constructors
function TypedArray(prototype) {
  return {
    // Properties of the TypedArray Constructors
    '[[Proto]]': '%TypedArray%',
    BYTES_PER_ELEMENT: 'number',
    prototype,
  };
}

function TypedArrayPrototype(constructor) {
  return {
    // Properties of the TypedArray Prototype Objects
    '[[Proto]]': '%TypedArrayPrototype%',
    BYTES_PER_ELEMENT: 'number',
    constructor,
  };
}

// Without Math.random
const CommonMath = {
  E: 'number',
  LN10: 'number',
  LN2: 'number',
  LOG10E: 'number',
  LOG2E: 'number',
  PI: 'number',
  SQRT1_2: 'number',
  SQRT2: 'number',
  '@@toStringTag': 'string',
  abs: fn,
  acos: fn,
  acosh: fn,
  asin: fn,
  asinh: fn,
  atan: fn,
  atanh: fn,
  atan2: fn,
  cbrt: fn,
  ceil: fn,
  clz32: fn,
  cos: fn,
  cosh: fn,
  exp: fn,
  expm1: fn,
  floor: fn,
  fround: fn,
  hypot: fn,
  imul: fn,
  log: fn,
  log1p: fn,
  log10: fn,
  log2: fn,
  max: fn,
  min: fn,
  pow: fn,
  round: fn,
  sign: fn,
  sin: fn,
  sinh: fn,
  sqrt: fn,
  tan: fn,
  tanh: fn,
  trunc: fn,
  // https://github.com/tc39/proposal-float16array
  f16round: fn,
  // https://github.com/tc39/proposal-math-sum
  sumPrecise: fn,

  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  idiv: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  idivmod: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  imod: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  imuldiv: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  irem: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523
  mod: false,
  // See https://github.com/Moddable-OpenSource/moddable/issues/523#issuecomment-1942904505
  irandom: false,
};

       const permitted = {
  // ECMA https://tc39.es/ecma262

  // The intrinsics object has no prototype to avoid conflicts.
  '[[Proto]]': null,

  // %ThrowTypeError%
  '%ThrowTypeError%': fn,

  // *** The Global Object

  // *** Value Properties of the Global Object
  Infinity: 'number',
  NaN: 'number',
  undefined: 'undefined',

  // *** Function Properties of the Global Object

  // eval
  '%UniqueEval%': fn,
  isFinite: fn,
  isNaN: fn,
  parseFloat: fn,
  parseInt: fn,
  decodeURI: fn,
  decodeURIComponent: fn,
  encodeURI: fn,
  encodeURIComponent: fn,

  // *** Fundamental Objects

  Object: {
    // Properties of the Object Constructor
    '[[Proto]]': '%FunctionPrototype%',
    assign: fn,
    create: fn,
    defineProperties: fn,
    defineProperty: fn,
    entries: fn,
    freeze: fn,
    fromEntries: fn,
    getOwnPropertyDescriptor: fn,
    getOwnPropertyDescriptors: fn,
    getOwnPropertyNames: fn,
    getOwnPropertySymbols: fn,
    getPrototypeOf: fn,
    is: fn,
    isExtensible: fn,
    isFrozen: fn,
    isSealed: fn,
    keys: fn,
    preventExtensions: fn,
    prototype: '%ObjectPrototype%',
    seal: fn,
    setPrototypeOf: fn,
    values: fn,
    // https://github.com/tc39/proposal-accessible-object-hasownproperty
    hasOwn: fn,
    // https://github.com/tc39/proposal-array-grouping
    groupBy: fn,
    // Seen on QuickJS
    __getClass: false,
  },

  '%ObjectPrototype%': {
    // Properties of the Object Prototype Object
    '[[Proto]]': null,
    constructor: 'Object',
    hasOwnProperty: fn,
    isPrototypeOf: fn,
    propertyIsEnumerable: fn,
    toLocaleString: fn,
    toString: fn,
    valueOf: fn,

    // Annex B: Additional Properties of the Object.prototype Object

    // See note in header about the difference between [[Proto]] and --proto--
    // special notations.
    '--proto--': accessor,
    __defineGetter__: fn,
    __defineSetter__: fn,
    __lookupGetter__: fn,
    __lookupSetter__: fn,
  },

  '%UniqueFunction%': {
    // Properties of the Function Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%FunctionPrototype%',
  },

  '%InertFunction%': {
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%FunctionPrototype%',
  },

  '%FunctionPrototype%': {
    apply: fn,
    bind: fn,
    call: fn,
    constructor: '%InertFunction%',
    toString: fn,
    '@@hasInstance': fn,
    // proposed but not yet std. To be removed if there
    caller: false,
    // proposed but not yet std. To be removed if there
    arguments: false,
    // Seen on QuickJS. TODO grab getter for use by console
    fileName: false,
    // Seen on QuickJS. TODO grab getter for use by console
    lineNumber: false,
  },

  Boolean: {
    // Properties of the Boolean Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%BooleanPrototype%',
  },

  '%BooleanPrototype%': {
    constructor: 'Boolean',
    toString: fn,
    valueOf: fn,
  },

  '%SharedSymbol%': {
    // Properties of the Symbol Constructor
    '[[Proto]]': '%FunctionPrototype%',
    asyncIterator: 'symbol',
    for: fn,
    hasInstance: 'symbol',
    isConcatSpreadable: 'symbol',
    iterator: 'symbol',
    keyFor: fn,
    match: 'symbol',
    matchAll: 'symbol',
    prototype: '%SymbolPrototype%',
    replace: 'symbol',
    search: 'symbol',
    species: 'symbol',
    split: 'symbol',
    toPrimitive: 'symbol',
    toStringTag: 'symbol',
    unscopables: 'symbol',
    // https://github.com/tc39/proposal-explicit-resource-management
    asyncDispose: 'symbol',
    // https://github.com/tc39/proposal-explicit-resource-management
    dispose: 'symbol',
    // Seen at core-js https://github.com/zloirock/core-js#ecmascript-symbol
    useSimple: false,
    // Seen at core-js https://github.com/zloirock/core-js#ecmascript-symbol
    useSetter: false,
    // Seen on QuickJS
    operatorSet: false,
  },

  '%SymbolPrototype%': {
    // Properties of the Symbol Prototype Object
    constructor: '%SharedSymbol%',
    description: getter,
    toString: fn,
    valueOf: fn,
    '@@toPrimitive': fn,
    '@@toStringTag': 'string',
  },

  '%InitialError%': {
    // Properties of the Error Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%ErrorPrototype%',
    // Non standard, v8 only, used by tap
    captureStackTrace: fn,
    // Non standard, v8 only, used by tap, tamed to accessor
    stackTraceLimit: accessor,
    // Non standard, v8 only, used by several, tamed to accessor
    prepareStackTrace: accessor,
    // https://github.com/tc39/proposal-is-error
    isError: fn,
  },

  '%SharedError%': {
    // Properties of the Error Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%ErrorPrototype%',
    // Non standard, v8 only, used by tap
    captureStackTrace: fn,
    // Non standard, v8 only, used by tap, tamed to accessor
    stackTraceLimit: accessor,
    // Non standard, v8 only, used by several, tamed to accessor
    prepareStackTrace: accessor,
    // https://github.com/tc39/proposal-is-error
    isError: fn,
  },

  '%ErrorPrototype%': {
    constructor: '%SharedError%',
    message: 'string',
    name: 'string',
    toString: fn,
    // proposed de-facto, assumed TODO
    // Seen on FF Nightly 88.0a1
    at: false,
    // Seen on FF and XS
    stack: accessor,
    // Superfluously present in some versions of V8.
    // https://github.com/tc39/notes/blob/master/meetings/2021-10/oct-26.md#:~:text=However%2C%20Chrome%2093,and%20node%2016.11.
    cause: false,
  },

  // NativeError

  EvalError: NativeError('%EvalErrorPrototype%'),
  RangeError: NativeError('%RangeErrorPrototype%'),
  ReferenceError: NativeError('%ReferenceErrorPrototype%'),
  SyntaxError: NativeError('%SyntaxErrorPrototype%'),
  TypeError: NativeError('%TypeErrorPrototype%'),
  URIError: NativeError('%URIErrorPrototype%'),
  // https://github.com/endojs/endo/issues/550
  AggregateError: NativeError('%AggregateErrorPrototype%'),

  // TODO SuppressedError
  // https://github.com/tc39/proposal-explicit-resource-management
  // SuppressedError: NativeError('%SuppressedErrorPrototype%'),

  '%EvalErrorPrototype%': NativeErrorPrototype('EvalError'),
  '%RangeErrorPrototype%': NativeErrorPrototype('RangeError'),
  '%ReferenceErrorPrototype%': NativeErrorPrototype('ReferenceError'),
  '%SyntaxErrorPrototype%': NativeErrorPrototype('SyntaxError'),
  '%TypeErrorPrototype%': NativeErrorPrototype('TypeError'),
  '%URIErrorPrototype%': NativeErrorPrototype('URIError'),
  // https://github.com/endojs/endo/issues/550
  '%AggregateErrorPrototype%': NativeErrorPrototype('AggregateError'),
  // TODO AggregateError .errors

  // TODO SuppressedError
  // https://github.com/tc39/proposal-explicit-resource-management
  // '%SuppressedErrorPrototype%': NativeErrorPrototype('SuppressedError'),
  // TODO SuppressedError .error
  // TODO SuppressedError .suppressed

  // *** Numbers and Dates

  Number: {
    // Properties of the Number Constructor
    '[[Proto]]': '%FunctionPrototype%',
    EPSILON: 'number',
    isFinite: fn,
    isInteger: fn,
    isNaN: fn,
    isSafeInteger: fn,
    MAX_SAFE_INTEGER: 'number',
    MAX_VALUE: 'number',
    MIN_SAFE_INTEGER: 'number',
    MIN_VALUE: 'number',
    NaN: 'number',
    NEGATIVE_INFINITY: 'number',
    parseFloat: fn,
    parseInt: fn,
    POSITIVE_INFINITY: 'number',
    prototype: '%NumberPrototype%',
  },

  '%NumberPrototype%': {
    // Properties of the Number Prototype Object
    constructor: 'Number',
    toExponential: fn,
    toFixed: fn,
    toLocaleString: fn,
    toPrecision: fn,
    toString: fn,
    valueOf: fn,
  },

  BigInt: {
    // Properties of the BigInt Constructor
    '[[Proto]]': '%FunctionPrototype%',
    asIntN: fn,
    asUintN: fn,
    prototype: '%BigIntPrototype%',
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    bitLength: false,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    fromArrayBuffer: false,
    // Seen on QuickJS
    tdiv: false,
    // Seen on QuickJS
    fdiv: false,
    // Seen on QuickJS
    cdiv: false,
    // Seen on QuickJS
    ediv: false,
    // Seen on QuickJS
    tdivrem: false,
    // Seen on QuickJS
    fdivrem: false,
    // Seen on QuickJS
    cdivrem: false,
    // Seen on QuickJS
    edivrem: false,
    // Seen on QuickJS
    sqrt: false,
    // Seen on QuickJS
    sqrtrem: false,
    // Seen on QuickJS
    floorLog2: false,
    // Seen on QuickJS
    ctz: false,
  },

  '%BigIntPrototype%': {
    constructor: 'BigInt',
    toLocaleString: fn,
    toString: fn,
    valueOf: fn,
    '@@toStringTag': 'string',
  },

  '%InitialMath%': {
    ...CommonMath,
    // `%InitialMath%.random()` has the standard unsafe behavior
    random: fn,
  },

  '%SharedMath%': {
    ...CommonMath,
    // `%SharedMath%.random()` is tamed to always throw
    random: fn,
  },

  '%InitialDate%': {
    // Properties of the Date Constructor
    '[[Proto]]': '%FunctionPrototype%',
    now: fn,
    parse: fn,
    prototype: '%DatePrototype%',
    UTC: fn,
  },

  '%SharedDate%': {
    // Properties of the Date Constructor
    '[[Proto]]': '%FunctionPrototype%',
    // `%SharedDate%.now()` is tamed to always throw
    now: fn,
    parse: fn,
    prototype: '%DatePrototype%',
    UTC: fn,
  },

  '%DatePrototype%': {
    constructor: '%SharedDate%',
    getDate: fn,
    getDay: fn,
    getFullYear: fn,
    getHours: fn,
    getMilliseconds: fn,
    getMinutes: fn,
    getMonth: fn,
    getSeconds: fn,
    getTime: fn,
    getTimezoneOffset: fn,
    getUTCDate: fn,
    getUTCDay: fn,
    getUTCFullYear: fn,
    getUTCHours: fn,
    getUTCMilliseconds: fn,
    getUTCMinutes: fn,
    getUTCMonth: fn,
    getUTCSeconds: fn,
    setDate: fn,
    setFullYear: fn,
    setHours: fn,
    setMilliseconds: fn,
    setMinutes: fn,
    setMonth: fn,
    setSeconds: fn,
    setTime: fn,
    setUTCDate: fn,
    setUTCFullYear: fn,
    setUTCHours: fn,
    setUTCMilliseconds: fn,
    setUTCMinutes: fn,
    setUTCMonth: fn,
    setUTCSeconds: fn,
    toDateString: fn,
    toISOString: fn,
    toJSON: fn,
    toLocaleDateString: fn,
    toLocaleString: fn,
    toLocaleTimeString: fn,
    toString: fn,
    toTimeString: fn,
    toUTCString: fn,
    valueOf: fn,
    '@@toPrimitive': fn,

    // Annex B: Additional Properties of the Date.prototype Object
    getYear: fn,
    setYear: fn,
    toGMTString: fn,
  },

  // Text Processing

  String: {
    // Properties of the String Constructor
    '[[Proto]]': '%FunctionPrototype%',
    fromCharCode: fn,
    fromCodePoint: fn,
    prototype: '%StringPrototype%',
    raw: fn,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    fromArrayBuffer: false,
  },

  '%StringPrototype%': {
    // Properties of the String Prototype Object
    length: 'number',
    charAt: fn,
    charCodeAt: fn,
    codePointAt: fn,
    concat: fn,
    constructor: 'String',
    endsWith: fn,
    includes: fn,
    indexOf: fn,
    lastIndexOf: fn,
    localeCompare: fn,
    match: fn,
    matchAll: fn,
    normalize: fn,
    padEnd: fn,
    padStart: fn,
    repeat: fn,
    replace: fn,
    replaceAll: fn, // ES2021
    search: fn,
    slice: fn,
    split: fn,
    startsWith: fn,
    substring: fn,
    toLocaleLowerCase: fn,
    toLocaleUpperCase: fn,
    toLowerCase: fn,
    toString: fn,
    toUpperCase: fn,
    trim: fn,
    trimEnd: fn,
    trimStart: fn,
    valueOf: fn,
    '@@iterator': fn,
    // Failed tc39 proposal
    // https://github.com/tc39/proposal-relative-indexing-method
    at: fn,
    // https://github.com/tc39/proposal-is-usv-string
    isWellFormed: fn,
    toWellFormed: fn,
    unicodeSets: fn,

    // Annex B: Additional Properties of the String.prototype Object
    substr: fn,
    anchor: fn,
    big: fn,
    blink: fn,
    bold: fn,
    fixed: fn,
    fontcolor: fn,
    fontsize: fn,
    italics: fn,
    link: fn,
    small: fn,
    strike: fn,
    sub: fn,
    sup: fn,
    trimLeft: fn,
    trimRight: fn,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    compare: false,
    // Seen on QuickJS
    __quote: false,
  },

  '%StringIteratorPrototype%': {
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  '%InitialRegExp%': {
    // Properties of the RegExp Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%RegExpPrototype%',
    '@@species': getter,
    // https://github.com/tc39/proposal-regex-escaping
    escape: fn,

    // The https://github.com/tc39/proposal-regexp-legacy-features
    // are all optional, unsafe, and omitted
    input: false,
    $_: false,
    lastMatch: false,
    '$&': false,
    lastParen: false,
    '$+': false,
    leftContext: false,
    '$`': false,
    rightContext: false,
    "$'": false,
    $1: false,
    $2: false,
    $3: false,
    $4: false,
    $5: false,
    $6: false,
    $7: false,
    $8: false,
    $9: false,
  },

  '%SharedRegExp%': {
    // Properties of the RegExp Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%RegExpPrototype%',
    '@@species': getter,
    // https://github.com/tc39/proposal-regex-escaping
    escape: fn,
  },

  '%RegExpPrototype%': {
    // Properties of the RegExp Prototype Object
    constructor: '%SharedRegExp%',
    exec: fn,
    dotAll: getter,
    flags: getter,
    global: getter,
    hasIndices: getter,
    ignoreCase: getter,
    '@@match': fn,
    '@@matchAll': fn,
    multiline: getter,
    '@@replace': fn,
    '@@search': fn,
    source: getter,
    '@@split': fn,
    sticky: getter,
    test: fn,
    toString: fn,
    unicode: getter,
    unicodeSets: getter,

    // Annex B: Additional Properties of the RegExp.prototype Object
    compile: false  // UNSAFE and suppressed.
  },

  '%RegExpStringIteratorPrototype%': {
    // The %RegExpStringIteratorPrototype% Object
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  // Indexed Collections

  Array: {
    // Properties of the Array Constructor
    '[[Proto]]': '%FunctionPrototype%',
    from: fn,
    isArray: fn,
    of: fn,
    prototype: '%ArrayPrototype%',
    '@@species': getter,

    // Failed tc39 proposal
    // https://tc39.es/proposal-relative-indexing-method/
    at: fn,
    // https://tc39.es/proposal-array-from-async/
    fromAsync: fn,
  },

  '%ArrayPrototype%': {
    // Properties of the Array Prototype Object
    length: 'number',
    concat: fn,
    constructor: 'Array',
    copyWithin: fn,
    entries: fn,
    every: fn,
    fill: fn,
    filter: fn,
    find: fn,
    findIndex: fn,
    flat: fn,
    flatMap: fn,
    forEach: fn,
    includes: fn,
    indexOf: fn,
    join: fn,
    keys: fn,
    lastIndexOf: fn,
    map: fn,
    pop: fn,
    push: fn,
    reduce: fn,
    reduceRight: fn,
    reverse: fn,
    shift: fn,
    slice: fn,
    some: fn,
    sort: fn,
    splice: fn,
    toLocaleString: fn,
    toString: fn,
    unshift: fn,
    values: fn,
    '@@iterator': fn,
    '@@unscopables': {
      '[[Proto]]': null,
      copyWithin: 'boolean',
      entries: 'boolean',
      fill: 'boolean',
      find: 'boolean',
      findIndex: 'boolean',
      flat: 'boolean',
      flatMap: 'boolean',
      includes: 'boolean',
      keys: 'boolean',
      values: 'boolean',
      // Failed tc39 proposal
      // https://tc39.es/proposal-relative-indexing-method/
      // Seen on FF Nightly 88.0a1
      at: 'boolean',
      // See https://github.com/tc39/proposal-array-find-from-last
      findLast: 'boolean',
      findLastIndex: 'boolean',
      // https://github.com/tc39/proposal-change-array-by-copy
      toReversed: 'boolean',
      toSorted: 'boolean',
      toSpliced: 'boolean',
      with: 'boolean',
      // https://github.com/tc39/proposal-array-grouping
      group: 'boolean',
      groupToMap: 'boolean',
      groupBy: 'boolean',
    },
    // See https://github.com/tc39/proposal-array-find-from-last
    findLast: fn,
    findLastIndex: fn,
    // https://github.com/tc39/proposal-change-array-by-copy
    toReversed: fn,
    toSorted: fn,
    toSpliced: fn,
    with: fn,
    // https://github.com/tc39/proposal-array-grouping
    group: fn, // Not in proposal? Where?
    groupToMap: fn, // Not in proposal? Where?
    groupBy: fn,
    // Failed tc39 proposal
    // https://tc39.es/proposal-relative-indexing-method/
    at: fn,
  },

  '%ArrayIteratorPrototype%': {
    // The %ArrayIteratorPrototype% Object
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  // *** TypedArray Objects

  '%TypedArray%': {
    // Properties of the %TypedArray% Intrinsic Object
    '[[Proto]]': '%FunctionPrototype%',
    from: fn,
    of: fn,
    prototype: '%TypedArrayPrototype%',
    '@@species': getter,
  },

  '%TypedArrayPrototype%': {
    buffer: getter,
    byteLength: getter,
    byteOffset: getter,
    constructor: '%TypedArray%',
    copyWithin: fn,
    entries: fn,
    every: fn,
    fill: fn,
    filter: fn,
    find: fn,
    findIndex: fn,
    forEach: fn,
    includes: fn,
    indexOf: fn,
    join: fn,
    keys: fn,
    lastIndexOf: fn,
    length: getter,
    map: fn,
    reduce: fn,
    reduceRight: fn,
    reverse: fn,
    set: fn,
    slice: fn,
    some: fn,
    sort: fn,
    subarray: fn,
    toLocaleString: fn,
    toString: fn,
    values: fn,
    '@@iterator': fn,
    '@@toStringTag': getter,
    // Failed tc39 proposal
    // https://tc39.es/proposal-relative-indexing-method/
    at: fn,
    // See https://github.com/tc39/proposal-array-find-from-last
    findLast: fn,
    findLastIndex: fn,
    // https://github.com/tc39/proposal-change-array-by-copy
    toReversed: fn,
    toSorted: fn,
    with: fn,
  },

  // The TypedArray Constructors

  BigInt64Array: TypedArray('%BigInt64ArrayPrototype%'),
  BigUint64Array: TypedArray('%BigUint64ArrayPrototype%'),
  // https://github.com/tc39/proposal-float16array
  Float16Array: TypedArray('%Float16ArrayPrototype%'),
  Float32Array: TypedArray('%Float32ArrayPrototype%'),
  Float64Array: TypedArray('%Float64ArrayPrototype%'),
  Int16Array: TypedArray('%Int16ArrayPrototype%'),
  Int32Array: TypedArray('%Int32ArrayPrototype%'),
  Int8Array: TypedArray('%Int8ArrayPrototype%'),
  Uint16Array: TypedArray('%Uint16ArrayPrototype%'),
  Uint32Array: TypedArray('%Uint32ArrayPrototype%'),
  Uint8ClampedArray: TypedArray('%Uint8ClampedArrayPrototype%'),
  Uint8Array: {
    ...TypedArray('%Uint8ArrayPrototype%'),
    // https://github.com/tc39/proposal-arraybuffer-base64
    fromBase64: fn,
    // https://github.com/tc39/proposal-arraybuffer-base64
    fromHex: fn,
  },

  '%BigInt64ArrayPrototype%': TypedArrayPrototype('BigInt64Array'),
  '%BigUint64ArrayPrototype%': TypedArrayPrototype('BigUint64Array'),
  // https://github.com/tc39/proposal-float16array
  '%Float16ArrayPrototype%': TypedArrayPrototype('Float16Array'),
  '%Float32ArrayPrototype%': TypedArrayPrototype('Float32Array'),
  '%Float64ArrayPrototype%': TypedArrayPrototype('Float64Array'),
  '%Int16ArrayPrototype%': TypedArrayPrototype('Int16Array'),
  '%Int32ArrayPrototype%': TypedArrayPrototype('Int32Array'),
  '%Int8ArrayPrototype%': TypedArrayPrototype('Int8Array'),
  '%Uint16ArrayPrototype%': TypedArrayPrototype('Uint16Array'),
  '%Uint32ArrayPrototype%': TypedArrayPrototype('Uint32Array'),
  '%Uint8ClampedArrayPrototype%': TypedArrayPrototype('Uint8ClampedArray'),
  '%Uint8ArrayPrototype%': {
    ...TypedArrayPrototype('Uint8Array'),
    // https://github.com/tc39/proposal-arraybuffer-base64
    setFromBase64: fn,
    // https://github.com/tc39/proposal-arraybuffer-base64
    setFromHex: fn,
    // https://github.com/tc39/proposal-arraybuffer-base64
    toBase64: fn,
    // https://github.com/tc39/proposal-arraybuffer-base64
    toHex: fn,
  },

  // *** Keyed Collections

  Map: {
    // Properties of the Map Constructor
    '[[Proto]]': '%FunctionPrototype%',
    '@@species': getter,
    prototype: '%MapPrototype%',
    // https://github.com/tc39/proposal-array-grouping
    groupBy: fn,
  },

  '%MapPrototype%': {
    clear: fn,
    constructor: 'Map',
    delete: fn,
    entries: fn,
    forEach: fn,
    get: fn,
    has: fn,
    keys: fn,
    set: fn,
    size: getter,
    values: fn,
    '@@iterator': fn,
    '@@toStringTag': 'string',
  },

  '%MapIteratorPrototype%': {
    // The %MapIteratorPrototype% Object
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  Set: {
    // Properties of the Set Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%SetPrototype%',
    '@@species': getter,
    // Seen on QuickJS
    groupBy: false,
  },

  '%SetPrototype%': {
    add: fn,
    clear: fn,
    constructor: 'Set',
    delete: fn,
    entries: fn,
    forEach: fn,
    has: fn,
    keys: fn,
    size: getter,
    values: fn,
    '@@iterator': fn,
    '@@toStringTag': 'string',
    // See https://github.com/tc39/proposal-set-methods
    intersection: fn,
    // See https://github.com/tc39/proposal-set-methods
    union: fn,
    // See https://github.com/tc39/proposal-set-methods
    difference: fn,
    // See https://github.com/tc39/proposal-set-methods
    symmetricDifference: fn,
    // See https://github.com/tc39/proposal-set-methods
    isSubsetOf: fn,
    // See https://github.com/tc39/proposal-set-methods
    isSupersetOf: fn,
    // See https://github.com/tc39/proposal-set-methods
    isDisjointFrom: fn,
  },

  '%SetIteratorPrototype%': {
    // The %SetIteratorPrototype% Object
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    '@@toStringTag': 'string',
  },

  WeakMap: {
    // Properties of the WeakMap Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%WeakMapPrototype%',
  },

  '%WeakMapPrototype%': {
    constructor: 'WeakMap',
    delete: fn,
    get: fn,
    has: fn,
    set: fn,
    '@@toStringTag': 'string',
  },

  WeakSet: {
    // Properties of the WeakSet Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%WeakSetPrototype%',
  },

  '%WeakSetPrototype%': {
    add: fn,
    constructor: 'WeakSet',
    delete: fn,
    has: fn,
    '@@toStringTag': 'string',
  },

  // *** Structured Data

  ArrayBuffer: {
    // Properties of the ArrayBuffer Constructor
    '[[Proto]]': '%FunctionPrototype%',
    isView: fn,
    prototype: '%ArrayBufferPrototype%',
    '@@species': getter,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    fromString: false,
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    fromBigInt: false,
  },

  '%ArrayBufferPrototype%': {
    byteLength: getter,
    constructor: 'ArrayBuffer',
    slice: fn,
    '@@toStringTag': 'string',
    // See https://github.com/Moddable-OpenSource/moddable/issues/523
    concat: false,
    // See https://github.com/tc39/proposal-resizablearraybuffer
    transfer: fn,
    resize: fn,
    resizable: getter,
    maxByteLength: getter,
    // https://github.com/tc39/proposal-arraybuffer-transfer
    transferToFixedLength: fn,
    detached: getter,
    // https://github.com/endojs/endo/pull/2309#issuecomment-2155513240
    // to be proposed
    transferToImmutable: fn,
    sliceToImmutable: fn,
    immutable: getter,
  },

  // If this exists, it is purely an artifact of how we currently shim
  // `transferToImmutable`. As natively implemented, there would be no
  // such extra prototype.
  '%ImmutableArrayBufferPrototype%': {
    '[[Proto]]': '%ArrayBufferPrototype%',
    byteLength: getter,
    slice: fn,
    // See https://github.com/endojs/endo/tree/master/packages/immutable-arraybuffer#purposeful-violation
    '@@toStringTag': 'string',
    // See https://github.com/tc39/proposal-resizablearraybuffer
    transfer: fn,
    resize: fn,
    resizable: getter,
    maxByteLength: getter,
    // https://github.com/tc39/proposal-arraybuffer-transfer
    transferToFixedLength: fn,
    detached: getter,
    // https://github.com/endojs/endo/pull/2309#issuecomment-2155513240
    // to be proposed
    transferToImmutable: fn,
    sliceToImmutable: fn,
    immutable: getter,
  },

  // SharedArrayBuffer Objects
  SharedArrayBuffer: false, // UNSAFE and purposely suppressed.
  '%SharedArrayBufferPrototype%': false, // UNSAFE and purposely suppressed.

  DataView: {
    // Properties of the DataView Constructor
    '[[Proto]]': '%FunctionPrototype%',
    BYTES_PER_ELEMENT: 'number', // Non std but undeletable on Safari.
    prototype: '%DataViewPrototype%',
  },

  '%DataViewPrototype%': {
    buffer: getter,
    byteLength: getter,
    byteOffset: getter,
    constructor: 'DataView',
    getBigInt64: fn,
    getBigUint64: fn,
    // https://github.com/tc39/proposal-float16array
    getFloat16: fn,
    getFloat32: fn,
    getFloat64: fn,
    getInt8: fn,
    getInt16: fn,
    getInt32: fn,
    getUint8: fn,
    getUint16: fn,
    getUint32: fn,
    setBigInt64: fn,
    setBigUint64: fn,
    // https://github.com/tc39/proposal-float16array
    setFloat16: fn,
    setFloat32: fn,
    setFloat64: fn,
    setInt8: fn,
    setInt16: fn,
    setInt32: fn,
    setUint8: fn,
    setUint16: fn,
    setUint32: fn,
    '@@toStringTag': 'string',
  },

  // Atomics
  Atomics: false, // UNSAFE and suppressed.

  JSON: {
    parse: fn,
    stringify: fn,
    '@@toStringTag': 'string',
    // https://github.com/tc39/proposal-json-parse-with-source/
    rawJSON: fn,
    isRawJSON: fn,
  },

  // *** Control Abstraction Objects

  // https://github.com/tc39/proposal-iterator-helpers
  Iterator: {
    // Properties of the Iterator Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%IteratorPrototype%',
    from: fn,
    // https://github.com/tc39/proposal-joint-iteration
    zip: fn,
    zipKeyed: fn,
    // https://github.com/tc39/proposal-iterator-sequencing
    concat: fn,
  },

  '%IteratorPrototype%': {
    // The %IteratorPrototype% Object
    '@@iterator': fn,
    // https://github.com/tc39/proposal-iterator-helpers
    constructor: 'Iterator',
    map: fn,
    filter: fn,
    take: fn,
    drop: fn,
    flatMap: fn,
    reduce: fn,
    toArray: fn,
    forEach: fn,
    some: fn,
    every: fn,
    find: fn,
    '@@toStringTag': 'string',
    // https://github.com/tc39/proposal-async-iterator-helpers
    toAsync: fn,
    // https://github.com/tc39/proposal-explicit-resource-management
    // See https://github.com/Moddable-OpenSource/moddable/issues/523#issuecomment-1942904505
    '@@dispose': false,
  },

  // https://github.com/tc39/proposal-iterator-helpers
  '%WrapForValidIteratorPrototype%': {
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    return: fn,
  },

  // https://github.com/tc39/proposal-iterator-helpers
  '%IteratorHelperPrototype%': {
    '[[Proto]]': '%IteratorPrototype%',
    next: fn,
    return: fn,
    '@@toStringTag': 'string',
  },

  // https://github.com/tc39/proposal-async-iterator-helpers
  AsyncIterator: {
    // Properties of the Iterator Constructor
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%AsyncIteratorPrototype%',
    from: fn,
  },

  '%AsyncIteratorPrototype%': {
    // The %AsyncIteratorPrototype% Object
    '@@asyncIterator': fn,
    // https://github.com/tc39/proposal-async-iterator-helpers
    constructor: 'AsyncIterator',
    map: fn,
    filter: fn,
    take: fn,
    drop: fn,
    flatMap: fn,
    reduce: fn,
    toArray: fn,
    forEach: fn,
    some: fn,
    every: fn,
    find: fn,
    '@@toStringTag': 'string',
    // https://github.com/tc39/proposal-explicit-resource-management
    // See https://github.com/Moddable-OpenSource/moddable/issues/523#issuecomment-1942904505
    '@@asyncDispose': false,
  },

  // https://github.com/tc39/proposal-async-iterator-helpers
  '%WrapForValidAsyncIteratorPrototype%': {
    '[[Proto]]': '%AsyncIteratorPrototype%',
    next: fn,
    return: fn,
  },

  // https://github.com/tc39/proposal-async-iterator-helpers
  '%AsyncIteratorHelperPrototype%': {
    '[[Proto]]': '%AsyncIteratorPrototype%',
    next: fn,
    return: fn,
    '@@toStringTag': 'string',
  },

  '%InertGeneratorFunction%': {
    // Properties of the GeneratorFunction Constructor
    '[[Proto]]': '%InertFunction%',
    prototype: '%Generator%',
  },

  '%Generator%': {
    // Properties of the GeneratorFunction Prototype Object
    '[[Proto]]': '%FunctionPrototype%',
    constructor: '%InertGeneratorFunction%',
    prototype: '%GeneratorPrototype%',
    '@@toStringTag': 'string',
  },

  '%InertAsyncGeneratorFunction%': {
    // Properties of the AsyncGeneratorFunction Constructor
    '[[Proto]]': '%InertFunction%',
    prototype: '%AsyncGenerator%',
  },

  '%AsyncGenerator%': {
    // Properties of the AsyncGeneratorFunction Prototype Object
    '[[Proto]]': '%FunctionPrototype%',
    constructor: '%InertAsyncGeneratorFunction%',
    prototype: '%AsyncGeneratorPrototype%',
    // length prop added here for React Native jsc-android
    // https://github.com/endojs/endo/issues/660
    // https://github.com/react-native-community/jsc-android-buildscripts/issues/181
    length: 'number',
    '@@toStringTag': 'string',
  },

  '%GeneratorPrototype%': {
    // Properties of the Generator Prototype Object
    '[[Proto]]': '%IteratorPrototype%',
    constructor: '%Generator%',
    next: fn,
    return: fn,
    throw: fn,
    '@@toStringTag': 'string',
  },

  '%AsyncGeneratorPrototype%': {
    // Properties of the AsyncGenerator Prototype Object
    '[[Proto]]': '%AsyncIteratorPrototype%',
    constructor: '%AsyncGenerator%',
    next: fn,
    return: fn,
    throw: fn,
    '@@toStringTag': 'string',
  },

  // TODO: To be replaced with Promise.delegate
  //
  // The HandledPromise global variable shimmed by `@agoric/eventual-send/shim`
  // implements an initial version of the eventual send specification at:
  // https://github.com/tc39/proposal-eventual-send
  //
  // We will likely change this to add a property to Promise called
  // Promise.delegate and put static methods on it, which will necessitate
  // another permits change to update to the current proposed standard.
  HandledPromise: {
    '[[Proto]]': 'Promise',
    applyFunction: fn,
    applyFunctionSendOnly: fn,
    applyMethod: fn,
    applyMethodSendOnly: fn,
    get: fn,
    getSendOnly: fn,
    prototype: '%PromisePrototype%',
    resolve: fn,
  },

  // https://github.com/tc39/proposal-source-phase-imports?tab=readme-ov-file#js-module-source

  ModuleSource: {
    '[[Proto]]': '%AbstractModuleSource%',
    prototype: '%ModuleSourcePrototype%',
  },

  '%ModuleSourcePrototype%': {
    '[[Proto]]': '%AbstractModuleSourcePrototype%',
    constructor: 'ModuleSource',
    '@@toStringTag': 'string',
    // https://github.com/tc39/proposal-compartments
    bindings: getter,
    needsImport: getter,
    needsImportMeta: getter,
    // @endo/module-source provides a legacy interface
    imports: getter,
    exports: getter,
    reexports: getter,
  },

  '%AbstractModuleSource%': {
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%AbstractModuleSourcePrototype%',
  },

  '%AbstractModuleSourcePrototype%': {
    constructor: '%AbstractModuleSource%',
  },

  Promise: {
    // Properties of the Promise Constructor
    '[[Proto]]': '%FunctionPrototype%',
    all: fn,
    allSettled: fn,
    // https://github.com/Agoric/SES-shim/issues/550
    any: fn,
    prototype: '%PromisePrototype%',
    race: fn,
    reject: fn,
    resolve: fn,
    // https://github.com/tc39/proposal-promise-with-resolvers
    withResolvers: fn,
    '@@species': getter,
    // https://github.com/tc39/proposal-promise-try
    try: fn,
  },

  '%PromisePrototype%': {
    // Properties of the Promise Prototype Object
    catch: fn,
    constructor: 'Promise',
    finally: fn,
    then: fn,
    '@@toStringTag': 'string',
    // Non-standard, used in node to prevent async_hooks from breaking
    'UniqueSymbol(async_id_symbol)': accessor,
    'UniqueSymbol(trigger_async_id_symbol)': accessor,
    'UniqueSymbol(destroyed)': accessor,
  },

  '%InertAsyncFunction%': {
    // Properties of the AsyncFunction Constructor
    '[[Proto]]': '%InertFunction%',
    prototype: '%AsyncFunctionPrototype%',
  },

  '%AsyncFunctionPrototype%': {
    // Properties of the AsyncFunction Prototype Object
    '[[Proto]]': '%FunctionPrototype%',
    constructor: '%InertAsyncFunction%',
    // length prop added here for React Native jsc-android
    // https://github.com/endojs/endo/issues/660
    // https://github.com/react-native-community/jsc-android-buildscripts/issues/181
    length: 'number',
    '@@toStringTag': 'string',
  },

  // Reflection

  Reflect: {
    // The Reflect Object
    // Not a function object.
    apply: fn,
    construct: fn,
    defineProperty: fn,
    deleteProperty: fn,
    get: fn,
    getOwnPropertyDescriptor: fn,
    getPrototypeOf: fn,
    has: fn,
    isExtensible: fn,
    ownKeys: fn,
    preventExtensions: fn,
    set: fn,
    setPrototypeOf: fn,
    '@@toStringTag': 'string',
  },

  Proxy: {
    // Properties of the Proxy Constructor
    '[[Proto]]': '%FunctionPrototype%',
    revocable: fn,
  },

  // Appendix B

  // Annex B: Additional Properties of the Global Object

  escape: fn,
  unescape: fn,

  // Proposed

  '%UniqueCompartment%': {
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%CompartmentPrototype%',
    toString: fn,
  },

  '%InertCompartment%': {
    '[[Proto]]': '%FunctionPrototype%',
    prototype: '%CompartmentPrototype%',
    toString: fn,
  },

  '%CompartmentPrototype%': {
    constructor: '%InertCompartment%',
    evaluate: fn,
    globalThis: getter,
    name: getter,
    import: asyncFn,
    load: asyncFn,
    importNow: fn,
    module: fn,
    '@@toStringTag': 'string',
  },

  lockdown: fn,
  harden: { ...fn, isFake: 'boolean' },

  '%InitialGetStackString%': fn,
};$h͏_once.permitted(permitted);
})()
,
// === 17. ses ./src/intrinsics.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let cauterizeProperty,TypeError,WeakSet,arrayFilter,create,defineProperty,entries,freeze,getOwnPropertyDescriptor,getOwnPropertyDescriptors,globalThis,is,isPrimitive,hasOwn,values,weaksetHas,constantProperties,sharedGlobalPropertyNames,universalPropertyNames,permitted;$h͏_imports([["./cauterize-property.js", [["cauterizeProperty",[$h͏_a => (cauterizeProperty = $h͏_a)]]]],["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["is",[$h͏_a => (is = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["values",[$h͏_a => (values = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]]]],["./permits.js", [["constantProperties",[$h͏_a => (constantProperties = $h͏_a)]],["sharedGlobalPropertyNames",[$h͏_a => (sharedGlobalPropertyNames = $h͏_a)]],["universalPropertyNames",[$h͏_a => (universalPropertyNames = $h͏_a)]],["permitted",[$h͏_a => (permitted = $h͏_a)]]]]]);

























/**
 * @import {Reporter} from './reporting-types.js'
 */

const isFunction = obj => typeof obj === 'function';

// Like defineProperty, but throws if it would modify an existing property.
// We use this to ensure that two conflicting attempts to define the same
// property throws, causing SES initialization to fail. Otherwise, a
// conflict between, for example, two of SES's internal permits might
// get masked as one overwrites the other. Accordingly, the thrown error
// complains of a "Conflicting definition".
function initProperty(obj, name, desc) {
  if (hasOwn(obj, name)) {
    const preDesc = getOwnPropertyDescriptor(obj, name);
    if (
      !preDesc ||
      !is(preDesc.value, desc.value) ||
      preDesc.get !== desc.get ||
      preDesc.set !== desc.set ||
      preDesc.writable !== desc.writable ||
      preDesc.enumerable !== desc.enumerable ||
      preDesc.configurable !== desc.configurable
    ) {
      throw TypeError(`Conflicting definitions of ${name}`);
    }
  }
  defineProperty(obj, name, desc);
}

// Like defineProperties, but throws if it would modify an existing property.
// This ensures that the intrinsics added to the intrinsics collector object
// graph do not overlap.
function initProperties(obj, descs) {
  for (const [name, desc] of entries(descs)) {
    initProperty(obj, name, desc);
  }
}

// sampleGlobals creates an intrinsics object, suitable for
// interinsicsCollector.addIntrinsics, from the named properties of a global
// object.
function sampleGlobals(globalObject, newPropertyNames) {
  const newIntrinsics = { __proto__: null };
  for (const [globalName, intrinsicName] of entries(newPropertyNames)) {
    if (hasOwn(globalObject, globalName)) {
      newIntrinsics[intrinsicName] = globalObject[globalName];
    }
  }
  return newIntrinsics;
}

/**
 * @param {Reporter} reporter
 */
       const makeIntrinsicsCollector = reporter => {
  /** @type {Record<any, any>} */
  const intrinsics = create(null);
  let pseudoNatives;

  const addIntrinsics = newIntrinsics => {
    initProperties(intrinsics, getOwnPropertyDescriptors(newIntrinsics));
  };
  freeze(addIntrinsics);

  // For each intrinsic, if it has a `.prototype` property, use the
  // permits to find out the intrinsic name for that prototype and add it
  // to the intrinsics.
  const completePrototypes = () => {
    for (const [name, intrinsic] of entries(intrinsics)) {
      if (isPrimitive(intrinsic)) {
        // eslint-disable-next-line no-continue
        continue;
      }
      if (!hasOwn(intrinsic, 'prototype')) {
        // eslint-disable-next-line no-continue
        continue;
      }
      const permit = permitted[name];
      if (typeof permit !== 'object') {
        throw TypeError(`Expected permit object at permits.${name}`);
      }
      const namePrototype = permit.prototype;
      if (!namePrototype) {
        cauterizeProperty(
          intrinsic,
          'prototype',
          false,
          `${name}.prototype`,
          reporter,
        );
        // eslint-disable-next-line no-continue
        continue;
      }
      if (
        typeof namePrototype !== 'string' ||
        !hasOwn(permitted, namePrototype)
      ) {
        throw TypeError(`Unrecognized ${name}.prototype permits entry`);
      }
      const intrinsicPrototype = intrinsic.prototype;
      if (hasOwn(intrinsics, namePrototype)) {
        if (intrinsics[namePrototype] !== intrinsicPrototype) {
          throw TypeError(`Conflicting bindings of ${namePrototype}`);
        }
        // eslint-disable-next-line no-continue
        continue;
      }
      intrinsics[namePrototype] = intrinsicPrototype;
    }
  };
  freeze(completePrototypes);

  const finalIntrinsics = () => {
    freeze(intrinsics);
    pseudoNatives = new WeakSet(arrayFilter(values(intrinsics), isFunction));
    return intrinsics;
  };
  freeze(finalIntrinsics);

  const isPseudoNative = obj => {
    if (!pseudoNatives) {
      throw TypeError(
        'isPseudoNative can only be called after finalIntrinsics',
      );
    }
    return weaksetHas(pseudoNatives, obj);
  };
  freeze(isPseudoNative);

  const intrinsicsCollector = {
    addIntrinsics,
    completePrototypes,
    finalIntrinsics,
    isPseudoNative,
  };
  freeze(intrinsicsCollector);

  addIntrinsics(constantProperties);
  addIntrinsics(sampleGlobals(globalThis, universalPropertyNames));

  return intrinsicsCollector;
};

/**
 * getGlobalIntrinsics()
 * Doesn't tame, delete, or modify anything. Samples globalObject to create an
 * intrinsics record containing only the permitted global variables, listed
 * by the intrinsic names appropriate for new globals, i.e., the globals of
 * newly constructed compartments.
 *
 * WARNING:
 * If run before lockdown, the returned intrinsics record will carry the
 * *original* unsafe (feral, untamed) bindings of these global variables.
 *
 * @param {object} globalObject
 * @param {Reporter} reporter
 */$h͏_once.makeIntrinsicsCollector(makeIntrinsicsCollector);
       const getGlobalIntrinsics = (globalObject, reporter) => {
  // TODO pass a proper reporter to `makeIntrinsicsCollector`
  const { addIntrinsics, finalIntrinsics } = makeIntrinsicsCollector(reporter);

  addIntrinsics(sampleGlobals(globalObject, sharedGlobalPropertyNames));

  return finalIntrinsics();
};$h͏_once.getGlobalIntrinsics(getGlobalIntrinsics);
})()
,
// === 18. ses ./src/permits-intrinsics.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let permitted,FunctionInstance,isAccessorPermit,Map,String,Symbol,TypeError,arrayFilter,arrayIncludes,arrayMap,entries,getOwnPropertyDescriptor,getPrototypeOf,isPrimitive,mapGet,hasOwn,ownKeys,symbolKeyFor,cauterizeProperty;$h͏_imports([["./permits.js", [["permitted",[$h͏_a => (permitted = $h͏_a)]],["FunctionInstance",[$h͏_a => (FunctionInstance = $h͏_a)]],["isAccessorPermit",[$h͏_a => (isAccessorPermit = $h͏_a)]]]],["./commons.js", [["Map",[$h͏_a => (Map = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["Symbol",[$h͏_a => (Symbol = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["arrayIncludes",[$h͏_a => (arrayIncludes = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["symbolKeyFor",[$h͏_a => (symbolKeyFor = $h͏_a)]]]],["./cauterize-property.js", [["cauterizeProperty",[$h͏_a => (cauterizeProperty = $h͏_a)]]]]]);
































































/**
 * @import {Reporter} from './reporting-types.js'
 */

/**
 * Removes all non-allowed properties found by recursively and
 * reflectively walking own property chains.
 *
 * @param {object} intrinsics
 * @param {(virtualizedNativeFunction: object) => void} markVirtualizedNativeFunction
 * @param {Reporter} reporter
 */
               function removeUnpermittedIntrinsics(
  intrinsics,
  markVirtualizedNativeFunction,
  reporter,
) {
  // These primitives are allowed for permits.
  const primitives = ['undefined', 'boolean', 'number', 'string', 'symbol'];

  // These symbols are allowed as well-known symbols
  const wellKnownSymbolNames = new Map(
    Symbol
      ? arrayMap(
          arrayFilter(
            entries(permitted['%SharedSymbol%']),
            ([name, permit]) =>
              permit === 'symbol' && typeof Symbol[name] === 'symbol',
          ),
          ([name]) => [Symbol[name], `@@${name}`],
        )
      : [],
  );

  /**
   * asStringPropertyName()
   *
   * @param {string} path
   * @param {string | symbol} prop
   */
  function asStringPropertyName(path, prop) {
    if (typeof prop === 'string') {
      return prop;
    }

    const wellKnownSymbol = mapGet(wellKnownSymbolNames, prop);

    if (typeof prop === 'symbol') {
      if (wellKnownSymbol) {
        return wellKnownSymbol;
      } else {
        const registeredKey = symbolKeyFor(prop);
        if (registeredKey !== undefined) {
          return `RegisteredSymbol(${registeredKey})`;
        } else {
          return `Unique${String(prop)}`;
        }
      }
    }

    throw TypeError(`Unexpected property name type ${path} ${prop}`);
  }

  /*
   * visitPrototype()
   * Validate the object's [[prototype]] against a permit.
   */
  function visitPrototype(path, obj, protoName) {
    if (isPrimitive(obj)) {
      throw TypeError(`Object expected: ${path}, ${String(obj)}, ${protoName}`);
    }
    const proto = getPrototypeOf(obj);

    // Null prototype.
    if (proto === null && protoName === null) {
      return;
    }

    // Assert: protoName, if provided, is a string.
    if (protoName !== undefined && typeof protoName !== 'string') {
      throw TypeError(`Malformed permit ${path}.__proto__`);
    }

    // If permit not specified, default to Object.prototype.
    if (proto === intrinsics[protoName || '%ObjectPrototype%']) {
      return;
    }

    // We can't clean [[Prototype]], therefore abort.
    throw TypeError(
      `Unexpected [[Prototype]] at ${path}.__proto__ (expected ${protoName || '%ObjectPrototype%'})`,
    );
  }

  /*
   * isAllowedPropertyValue()
   * enforce permit for a single property value.
   */
  function isAllowedPropertyValue(path, value, prop, permit) {
    if (typeof permit === 'object') {
      // eslint-disable-next-line no-use-before-define
      visitProperties(path, value, permit);
      // The property is allowed.
      return true;
    }

    if (permit === false) {
      // A boolan 'false' permit specifies the removal of a property.
      // We require a more specific permit instead of allowing 'true'.
      return false;
    }

    if (typeof permit === 'string') {
      // A string permit can have one of two meanings:

      if (prop === 'prototype' || prop === 'constructor') {
        // For prototype and constructor value properties, the permit
        // is the name of an intrinsic.
        // Assumption: prototype and constructor cannot be primitives.
        // Assert: the permit is the name of an intrinsic.
        // Assert: the property value is equal to that intrinsic.

        if (hasOwn(intrinsics, permit)) {
          if (value !== intrinsics[permit]) {
            throw TypeError(`Does not match permit for ${path}`);
          }
          return true;
        }
      } else {
        // For all other properties, the permit is the name of a primitive.
        // Assert: the permit is the name of a primitive.
        // Assert: the property value type is equal to that primitive.

        // eslint-disable-next-line no-lonely-if
        if (arrayIncludes(primitives, permit)) {
          // eslint-disable-next-line valid-typeof
          if (typeof value !== permit) {
            throw TypeError(
              `At ${path} expected ${permit} not ${typeof value}`,
            );
          }
          return true;
        }
      }
    }

    throw TypeError(
      `Unexpected property ${prop} with permit ${permit} at ${path}`,
    );
  }

  /*
   * isAllowedProperty()
   * Check whether a single property is allowed.
   */
  function isAllowedProperty(path, obj, prop, permit) {
    const desc = getOwnPropertyDescriptor(obj, prop);
    if (!desc) {
      throw TypeError(`Property ${prop} not found at ${path}`);
    }

    // Is this a value property?
    if (hasOwn(desc, 'value')) {
      if (isAccessorPermit(permit)) {
        throw TypeError(`Accessor expected at ${path}`);
      }
      return isAllowedPropertyValue(path, desc.value, prop, permit);
    }
    if (!isAccessorPermit(permit)) {
      throw TypeError(`Accessor not expected at ${path}`);
    }
    return (
      isAllowedPropertyValue(`${path}<get>`, desc.get, prop, permit.get) &&
      isAllowedPropertyValue(`${path}<set>`, desc.set, prop, permit.set)
    );
  }

  /*
   * getSubPermit()
   */
  function getSubPermit(obj, permit, prop) {
    const permitProp = prop === '__proto__' ? '--proto--' : prop;
    if (hasOwn(permit, permitProp)) {
      return permit[permitProp];
    }

    if (typeof obj === 'function') {
      if (hasOwn(FunctionInstance, permitProp)) {
        return FunctionInstance[permitProp];
      }
    }

    return undefined;
  }

  /*
   * visitProperties()
   * Visit all properties for a permit.
   */
  function visitProperties(path, obj, permit) {
    if (obj === undefined || obj === null) {
      return;
    }

    const protoName = permit['[[Proto]]'];
    visitPrototype(path, obj, protoName);

    if (typeof obj === 'function') {
      markVirtualizedNativeFunction(obj);
    }

    for (const prop of ownKeys(obj)) {
      const propString = asStringPropertyName(path, prop);
      const subPath = `${path}.${propString}`;
      const subPermit = getSubPermit(obj, permit, propString);

      if (!subPermit || !isAllowedProperty(subPath, obj, prop, subPermit)) {
        cauterizeProperty(obj, prop, subPermit === false, subPath, reporter);
      }
    }
  }

  // Start path with 'intrinsics' to clarify that properties are not
  // removed from the global object by the permitting operation.
  visitProperties('intrinsics', intrinsics, permitted);
}$h͏_once.default(      removeUnpermittedIntrinsics);
})()
,
// === 19. ses ./src/tame-function-constructors.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_FUNCTION,SyntaxError,TypeError,defineProperties,getPrototypeOf,setPrototypeOf,freeze,AsyncGeneratorFunctionInstance;$h͏_imports([["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["SyntaxError",[$h͏_a => (SyntaxError = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["setPrototypeOf",[$h͏_a => (setPrototypeOf = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["AsyncGeneratorFunctionInstance",[$h͏_a => (AsyncGeneratorFunctionInstance = $h͏_a)]]]]]);










// This module replaces the original `Function` constructor, and the original
// `%GeneratorFunction%`, `%AsyncFunction%` and `%AsyncGeneratorFunction%`,
// with safe replacements that throw if invoked.
//
// These are all reachable via syntax, so it isn't sufficient to just
// replace global properties with safe versions. Our main goal is to prevent
// access to the `Function` constructor through these starting points.
//
// After modules block is done, the originals must no longer be reachable,
// unless a copy has been made, and functions can only be created by syntax
// (using eval) or by invoking a previously saved reference to the originals.
//
// Typically, this module will not be used directly, but via the
// [lockdown - shim] which handles all necessary repairs and taming in SES.
//
// Relation to ECMA specifications
//
// The taming of constructors really wants to be part of the standard, because
// new constructors may be added in the future, reachable from syntax, and this
// list must be updated to match.
//
// In addition, the standard needs to define four new intrinsics for the safe
// replacement functions. See [./permits-intrinsics.js].
//
// Adapted from SES/Caja
// Copyright (C) 2011 Google Inc.
// https://github.com/google/caja/blob/master/src/com/google/caja/ses/startSES.js
// https://github.com/google/caja/blob/master/src/com/google/caja/ses/repairES5.js

/**
 * tameFunctionConstructors()
 * This block replaces the original Function constructor, and the original
 * %GeneratorFunction% %AsyncFunction% and %AsyncGeneratorFunction%, with
 * safe replacements that throw if invoked.
 */
               function tameFunctionConstructors() {
  try {
    // Verify that the method is not callable.
    // eslint-disable-next-line @endo/no-polymorphic-call
    FERAL_FUNCTION.prototype.constructor('return 1');
  } catch (ignore) {
    // Throws, no need to patch.
    return freeze({});
  }

  const newIntrinsics = {};

  /*
   * The process to repair constructors:
   * 1. Create an instance of the function by evaluating syntax
   * 2. Obtain the prototype from the instance
   * 3. Create a substitute tamed constructor
   * 4. Replace the original constructor with the tamed constructor
   * 5. Replace tamed constructor prototype property with the original one
   * 6. Replace its [[Prototype]] slot with the tamed constructor of Function
   */
  function repairFunction(name, intrinsicName, declaration) {
    let FunctionInstance;
    try {
      // eslint-disable-next-line no-eval, no-restricted-globals
      FunctionInstance = (0, eval)(declaration);
    } catch (e) {
      if (e instanceof SyntaxError) {
        // Prevent failure on platforms where async and/or generators
        // are not supported.
        return;
      }
      // Re-throw
      throw e;
    }
    const FunctionPrototype = getPrototypeOf(FunctionInstance);

    // Prevents the evaluation of source when calling constructor on the
    // prototype of functions.
    // eslint-disable-next-line func-names
    const InertConstructor = function () {
      throw TypeError(
        'Function.prototype.constructor is not a valid constructor.',
      );
    };
    defineProperties(InertConstructor, {
      prototype: { value: FunctionPrototype },
      name: {
        value: name,
        writable: false,
        enumerable: false,
        configurable: true,
      },
    });

    defineProperties(FunctionPrototype, {
      constructor: { value: InertConstructor },
    });

    // Reconstructs the inheritance among the new tamed constructors
    // to mirror the original specified in normal JS.
    if (InertConstructor !== FERAL_FUNCTION.prototype.constructor) {
      setPrototypeOf(InertConstructor, FERAL_FUNCTION.prototype.constructor);
    }

    newIntrinsics[intrinsicName] = InertConstructor;
  }

  // Here, the order of operation is important: Function needs to be repaired
  // first since the other repaired constructors need to inherit from the
  // tamed Function function constructor.

  repairFunction('Function', '%InertFunction%', '(function(){})');
  repairFunction(
    'GeneratorFunction',
    '%InertGeneratorFunction%',
    '(function*(){})',
  );
  repairFunction(
    'AsyncFunction',
    '%InertAsyncFunction%',
    '(async function(){})',
  );

  if (AsyncGeneratorFunctionInstance !== undefined) {
    repairFunction(
      'AsyncGeneratorFunction',
      '%InertAsyncGeneratorFunction%',
      '(async function*(){})',
    );
  }

  return newIntrinsics;
}$h͏_once.default(      tameFunctionConstructors);
})()
,
// === 20. ses ./src/tame-date-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Date,TypeError,apply,construct,defineProperties;$h͏_imports([["./commons.js", [["Date",[$h͏_a => (Date = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["construct",[$h͏_a => (construct = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]]]]]);









               function tameDateConstructor() {
  const OriginalDate = Date;
  const DatePrototype = OriginalDate.prototype;

  // Use concise methods to obtain named functions without constructors.
  const tamedMethods = {
    /**
     * `%SharedDate%.now()` throw a `TypeError` starting with "secure mode".
     * See https://github.com/endojs/endo/issues/910#issuecomment-1581855420
     */
    now() {
      throw TypeError('secure mode Calling %SharedDate%.now() throws');
    },
  };

  /**
   * Tame the Date constructor.
   * See https://github.com/endojs/endo/issues/910#issuecomment-1581855420
   *
   * Common behavior
   *   * `new Date(x)` coerces x into a number and then returns a Date
   *     for that number of millis since the epoch
   *   * `new Date(NaN)` returns a Date object which stringifies to
   *     'Invalid Date'
   *   * `new Date(undefined)` returns a Date object which stringifies to
   *     'Invalid Date'
   *
   * OriginalDate (normal standard) behavior preserved by
   * `%InitialDate%`.
   *   * `Date(anything)` gives a string with the current time
   *   * `new Date()` returns the current time, as a Date object
   *
   * `%SharedDate%` behavior
   *   * `Date(anything)` throws a TypeError starting with "secure mode"
   *   * `new Date()` throws a TypeError starting with "secure mode"
   *
   * @param {{powers?: string}} [opts]
   */
  const makeDateConstructor = ({ powers = 'none' } = {}) => {
    let ResultDate;
    if (powers === 'original') {
      // eslint-disable-next-line no-shadow
      ResultDate = function Date(...rest) {
        if (new.target === undefined) {
          return apply(OriginalDate, undefined, rest);
        }
        return construct(OriginalDate, rest, new.target);
      };
    } else {
      // eslint-disable-next-line no-shadow
      ResultDate = function Date(...rest) {
        if (new.target === undefined) {
          throw TypeError(
            'secure mode Calling %SharedDate% constructor as a function throws',
          );
        }
        if (rest.length === 0) {
          throw TypeError(
            'secure mode Calling new %SharedDate%() with no arguments throws',
          );
        }
        return construct(OriginalDate, rest, new.target);
      };
    }

    defineProperties(ResultDate, {
      length: { value: 7 },
      prototype: {
        value: DatePrototype,
        writable: false,
        enumerable: false,
        configurable: false,
      },
      parse: {
        value: OriginalDate.parse,
        writable: true,
        enumerable: false,
        configurable: true,
      },
      UTC: {
        value: OriginalDate.UTC,
        writable: true,
        enumerable: false,
        configurable: true,
      },
    });
    return ResultDate;
  };
  const InitialDate = makeDateConstructor({ powers: 'original' });
  const SharedDate = makeDateConstructor({ powers: 'none' });

  defineProperties(InitialDate, {
    now: {
      value: OriginalDate.now,
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });
  defineProperties(SharedDate, {
    now: {
      value: tamedMethods.now,
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });

  defineProperties(DatePrototype, {
    constructor: { value: SharedDate },
  });

  return {
    '%InitialDate%': InitialDate,
    '%SharedDate%': SharedDate,
  };
}$h͏_once.default(      tameDateConstructor);
})()
,
// === 21. ses ./src/tame-math-object.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Math,TypeError,create,getOwnPropertyDescriptors,objectPrototype;$h͏_imports([["./commons.js", [["Math",[$h͏_a => (Math = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["objectPrototype",[$h͏_a => (objectPrototype = $h͏_a)]]]]]);







               function tameMathObject() {
  const originalMath = Math;
  const initialMath = originalMath; // to follow the naming pattern

  const { random: _, ...otherDescriptors } =
    getOwnPropertyDescriptors(originalMath);

  // Use concise methods to obtain named functions without constructors.
  const tamedMethods = {
    /**
     * `%SharedMath%.random()` throws a TypeError starting with "secure mode".
     * See https://github.com/endojs/endo/issues/910#issuecomment-1581855420
     */
    random() {
      throw TypeError('secure mode %SharedMath%.random() throws');
    },
  };

  const sharedMath = create(objectPrototype, {
    ...otherDescriptors,
    random: {
      value: tamedMethods.random,
      writable: true,
      enumerable: false,
      configurable: true,
    },
  });

  return {
    '%InitialMath%': initialMath,
    '%SharedMath%': sharedMath,
  };
}$h͏_once.default(      tameMathObject);
})()
,
// === 22. ses ./src/tame-regexp-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_REG_EXP,TypeError,construct,defineProperties,getOwnPropertyDescriptor,speciesSymbol;$h͏_imports([["./commons.js", [["FERAL_REG_EXP",[$h͏_a => (FERAL_REG_EXP = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["construct",[$h͏_a => (construct = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["speciesSymbol",[$h͏_a => (speciesSymbol = $h͏_a)]]]]]);








               function tameRegExpConstructor(regExpTaming = 'safe') {
  const RegExpPrototype = FERAL_REG_EXP.prototype;

  const makeRegExpConstructor = (_ = {}) => {
    // RegExp has non-writable static properties we need to omit.
    /**
     * @param  {Parameters<typeof FERAL_REG_EXP>} rest
     */
    const ResultRegExp = function RegExp(...rest) {
      if (new.target === undefined) {
        return FERAL_REG_EXP(...rest);
      }
      return construct(FERAL_REG_EXP, rest, new.target);
    };

    defineProperties(ResultRegExp, {
      length: { value: 2 },
      prototype: {
        value: RegExpPrototype,
        writable: false,
        enumerable: false,
        configurable: false,
      },
    });
    // Hermes does not have `Symbol.species`. We should support such platforms.
    if (speciesSymbol) {
      const speciesDesc = getOwnPropertyDescriptor(
        FERAL_REG_EXP,
        speciesSymbol,
      );
      if (!speciesDesc) {
        throw TypeError('no RegExp[Symbol.species] descriptor');
      }
      defineProperties(ResultRegExp, {
        [speciesSymbol]: speciesDesc,
      });
    }
    return ResultRegExp;
  };

  const InitialRegExp = makeRegExpConstructor();
  const SharedRegExp = makeRegExpConstructor();

  if (regExpTaming !== 'unsafe') {
    // @ts-expect-error Deleted properties must be optional
    delete RegExpPrototype.compile;
  }
  defineProperties(RegExpPrototype, {
    constructor: { value: SharedRegExp },
  });

  return {
    '%InitialRegExp%': InitialRegExp,
    '%SharedRegExp%': SharedRegExp,
  };
}$h͏_once.default(      tameRegExpConstructor);
})()
,
// === 23. ses ./src/enablements.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let toStringTagSymbol,iteratorSymbol;$h͏_imports([["./commons.js", [["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]],["iteratorSymbol",[$h͏_a => (iteratorSymbol = $h͏_a)]]]]]);

/**
 * Exports {@code enablements}, a recursively defined
 * JSON record defining the optimum set of intrinsics properties
 * that need to be "repaired" before hardening is applied on
 * enviromments subject to the override mistake.
 *
 * @author JF Paradis
 * @author Mark S. Miller
 *
 * @module
 */

/**
 * <p>Because "repairing" replaces data properties with accessors, every
 * time a repaired property is accessed, the associated getter is invoked,
 * which degrades the runtime performance of all code executing in the
 * repaired enviromment, compared to the non-repaired case. In order
 * to maintain performance, we only repair the properties of objects
 * for which hardening causes a breakage of their normal intended usage.
 *
 * There are three unwanted cases:
 * <ul>
 * <li>Overriding properties on objects typically used as records,
 *     namely {@code "Object"} and {@code "Array"}. In the case of arrays,
 *     the situation is unintentional, a given program might not be aware
 *     that non-numerical properties are stored on the underlying object
 *     instance, not on the array. When an object is typically used as a
 *     map, we repair all of its prototype properties.
 * <li>Overriding properties on objects that provide defaults on their
 *     prototype and that programs typically set using an assignment, such as
 *     {@code "Error.prototype.message"} and {@code "Function.prototype.name"}
 *     (both default to "").
 * <li>Setting-up a prototype chain, where a constructor is set to extend
 *     another one. This is typically set by assignment, for example
 *     {@code "Child.prototype.constructor = Child"}, instead of invoking
 *     Object.defineProperty();
 *
 * <p>Each JSON record enumerates the disposition of the properties on
 * some corresponding intrinsic object.
 *
 * <p>For each such record, the values associated with its property
 * names can be:
 * <ul>
 * <li>true, in which case this property is simply repaired. The
 *     value associated with that property is not traversed. For
 *     example, {@code "Function.prototype.name"} leads to true,
 *     meaning that the {@code "name"} property of {@code
 *     "Function.prototype"} should be repaired (which is needed
 *     when inheriting from @code{Function} and setting the subclass's
 *     {@code "prototype.name"} property). If the property is
 *     already an accessor property, it is not repaired (because
 *     accessors are not subject to the override mistake).
 * <li>"*", in which case this property is not repaired but the
 *     value associated with that property are traversed and repaired.
 * <li>Another record, in which case this property is not repaired
 *     and that next record represents the disposition of the object
 *     which is its value. For example,{@code "FunctionPrototype"}
 *     leads to another record explaining which properties {@code
 *     Function.prototype} need to be repaired.
 */

/**
 * Minimal enablements when all the code is modern and known not to
 * step into the override mistake, except for the following pervasive
 * cases.
 */
       const minEnablements = {
  '%ObjectPrototype%': {
    toString: true,
  },

  '%FunctionPrototype%': {
    toString: true  // set by "rollup"
  },

  '%ErrorPrototype%': {
    name: true  // set by "precond", "ava", "node-fetch"
  },
  '%IteratorPrototype%': {
    toString: true,
    // https://github.com/tc39/proposal-iterator-helpers
    constructor: true,
    // https://github.com/tc39/proposal-iterator-helpers
    [toStringTagSymbol]: true,
  },
};

/**
 * Moderate enablements are usually good enough for legacy compat.
 */$h͏_once.minEnablements(minEnablements);
       const moderateEnablements = {
  '%ObjectPrototype%': {
    toString: true,
    valueOf: true,
  },

  '%ArrayPrototype%': {
    toString: true,
    push: true, // set by "Google Analytics"
    concat: true, // set by mobx generated code (old TS compiler?)
    [iteratorSymbol]: true  // set by mobx generated code (old TS compiler?)
  },

  // Function.prototype has no 'prototype' property to enable.
  // Function instances have their own 'name' and 'length' properties
  // which are configurable and non-writable. Thus, they are already
  // non-assignable anyway.
  '%FunctionPrototype%': {
    constructor: true, // set by "regenerator-runtime"
    bind: true, // set by "underscore", "express"
    toString: true  // set by "rollup"
  },

  '%ErrorPrototype%': {
    constructor: true, // set by "fast-json-patch", "node-fetch"
    message: true,
    name: true, // set by "precond", "ava", "node-fetch", "node 14"
    toString: true  // set by "bluebird"
  },

  '%TypeErrorPrototype%': {
    constructor: true, // set by "readable-stream"
    message: true, // set by "tape"
    name: true  // set by "readable-stream", "node 14"
  },

  '%SyntaxErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  '%RangeErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  '%URIErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  '%EvalErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  '%ReferenceErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"
  },

  // https://github.com/endojs/endo/issues/550
  '%AggregateErrorPrototype%': {
    message: true, // to match TypeErrorPrototype.message
    name: true  // set by "node 14"?
  },

  '%PromisePrototype%': {
    constructor: true  // set by "core-js"
  },

  '%TypedArrayPrototype%': '*', // set by https://github.com/feross/buffer

  '%Generator%': {
    constructor: true,
    name: true,
    toString: true,
  },

  '%IteratorPrototype%': {
    toString: true,
    // https://github.com/tc39/proposal-iterator-helpers
    constructor: true,
    // https://github.com/tc39/proposal-iterator-helpers
    [toStringTagSymbol]: true,
  },
};

/**
 * The 'severe' enablement are needed because of issues tracked at
 * https://github.com/endojs/endo/issues/576
 *
 * They are like the `moderate` enablements except for the entries below.
 */$h͏_once.moderateEnablements(moderateEnablements);
       const severeEnablements = {
  ...moderateEnablements,

  /**
   * Rollup (as used at least by vega) and webpack
   * (as used at least by regenerator) both turn exports into assignments
   * to a big `exports` object that inherits directly from
   * `Object.prototype`. Some of the exported names we've seen include
   * `hasOwnProperty`, `constructor`, and `toString`. But the strategy used
   * by rollup and webpack potentionally turns any exported name
   * into an assignment rejected by the override mistake. That's why
   * the `severe` enablements takes the extreme step of enabling
   * everything on `Object.prototype`.
   *
   * In addition, code doing inheritance manually will often override
   * the `constructor` property on the new prototype by assignment. We've
   * seen this several times.
   *
   * The cost of enabling all these is that they create a miserable debugging
   * experience specifically on Node.
   * https://github.com/Agoric/agoric-sdk/issues/2324
   * explains how it confused the Node console.
   *
   * (TODO Reexamine the vscode situation. I think it may have improved
   * since the following paragraph was written.)
   *
   * The vscode debugger's object inspector shows the own data properties of
   * an object, which is typically what you want, but also shows both getter
   * and setter for every accessor property whether inherited or own.
   * With the `'*'` setting here, all the properties inherited from
   * `Object.prototype` are accessors, creating an unusable display as seen
   * at As explained at
   * https://github.com/endojs/endo/blob/master/packages/ses/docs/lockdown.md#overridetaming-options
   * Open the triangles at the bottom of that section.
   */
  '%ObjectPrototype%': '*',

  /**
   * The widely used Buffer defined at https://github.com/feross/buffer
   * on initialization, manually creates the equivalent of a subclass of
   * `TypedArray`, which it then initializes by assignment. These assignments
   * include enough of the `TypeArray` methods that here, the `severe`
   * enablements just enable them all.
   */
  '%TypedArrayPrototype%': '*',

  /**
   * Needed to work with Immer before https://github.com/immerjs/immer/pull/914
   * is accepted.
   */
  '%MapPrototype%': '*',

  /**
   * Needed to work with Immer before https://github.com/immerjs/immer/pull/914
   * is accepted.
   */
  '%SetPrototype%': '*',
};$h͏_once.severeEnablements(severeEnablements);
})()
,
// === 24. ses ./src/enable-property-overrides.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Set,String,TypeError,arrayForEach,defineProperty,getOwnPropertyDescriptor,getOwnPropertyDescriptors,isPrimitive,hasOwn,ownKeys,setHas,minEnablements,moderateEnablements,severeEnablements;$h͏_imports([["./commons.js", [["Set",[$h͏_a => (Set = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayForEach",[$h͏_a => (arrayForEach = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["setHas",[$h͏_a => (setHas = $h͏_a)]]]],["./enablements.js", [["minEnablements",[$h͏_a => (minEnablements = $h͏_a)]],["moderateEnablements",[$h͏_a => (moderateEnablements = $h͏_a)]],["severeEnablements",[$h͏_a => (severeEnablements = $h͏_a)]]]]]);
























/** @import {Reporter} from './reporting-types.js' */

/**
 * For a special set of properties defined in the `enablement` list,
 * `enablePropertyOverrides` ensures that the effect of freezing does not
 * suppress the ability to override these properties on derived objects by
 * simple assignment.
 *
 * Because of lack of sufficient foresight at the time, ES5 unfortunately
 * specified that a simple assignment to a non-existent property must fail if
 * it would override an non-writable data property of the same name in the
 * shadow of the prototype chain. In retrospect, this was a mistake, the
 * so-called "override mistake". But it is now too late and we must live with
 * the consequences.
 *
 * As a result, simply freezing an object to make it tamper proof has the
 * unfortunate side effect of breaking previously correct code that is
 * considered to have followed JS best practices, if this previous code used
 * assignment to override.
 *
 * For the enabled properties, `enablePropertyOverrides` effectively shims what
 * the assignment behavior would have been in the absence of the override
 * mistake. However, the shim produces an imperfect emulation. It shims the
 * behavior by turning these data properties into accessor properties, where
 * the accessor's getter and setter provide the desired behavior. For
 * non-reflective operations, the illusion is perfect. However, reflective
 * operations like `getOwnPropertyDescriptor` see the descriptor of an accessor
 * property rather than the descriptor of a data property. At the time of this
 * writing, this is the best we know how to do.
 *
 * To the getter of the accessor we add a property named
 * `'originalValue'` whose value is, as it says, the value that the
 * data property had before being converted to an accessor property. We add
 * this extra property to the getter for two reason:
 *
 * The harden algorithm walks the own properties reflectively, i.e., with
 * `getOwnPropertyDescriptor` semantics, rather than `[[Get]]` semantics. When
 * it sees an accessor property, it does not invoke the getter. Rather, it
 * proceeds to walk both the getter and setter as part of its transitive
 * traversal. Without this extra property, `enablePropertyOverrides` would have
 * hidden the original data property value from `harden`, which would be bad.
 * Instead, by exposing that value in an own data property on the getter,
 * `harden` finds and walks it anyway.
 *
 * We enable a form of cooperative emulation, giving reflective code an
 * opportunity to cooperate in upholding the illusion. When such cooperative
 * reflective code sees an accessor property, where the accessor's getter
 * has an `originalValue` property, it knows that the getter is
 * alleging that it is the result of the `enablePropertyOverrides` conversion
 * pattern, so it can decide to cooperatively "pretend" that it sees a data
 * property with that value.
 *
 * @param {Record<string, any>} intrinsics
 * @param {'min' | 'moderate' | 'severe'} overrideTaming
 * @param {Reporter} reporter
 * @param {Iterable<string | symbol>} [overrideDebug]
 */
               function enablePropertyOverrides(
  intrinsics,
  overrideTaming,
  { warn },
  overrideDebug = [],
) {
  const debugProperties = new Set(overrideDebug);
  function enable(path, obj, prop, desc) {
    if ('value' in desc && desc.configurable) {
      const { value } = desc;

      const isDebug = setHas(debugProperties, prop);

      // We use concise method syntax to be `this` sensitive, but still
      // omit a prototype property or [[Construct]] behavior.
      // @ts-expect-error We know there is an accessor descriptor there
      const { get: getter, set: setter } = getOwnPropertyDescriptor(
        {
          get [prop]() {
            return value;
          },
          set [prop](newValue) {
            if (obj === this) {
              throw TypeError(
                `Cannot assign to read only property '${String(
                  prop,
                )}' of '${path}'`,
              );
            }
            if (hasOwn(this, prop)) {
              this[prop] = newValue;
            } else {
              if (isDebug) {
                warn(TypeError(`Override property ${prop}`));
              }
              defineProperty(this, prop, {
                value: newValue,
                writable: true,
                enumerable: true,
                configurable: true,
              });
            }
          },
        },
        prop,
      );

      defineProperty(getter, 'originalValue', {
        value,
        writable: false,
        enumerable: false,
        configurable: false,
      });

      defineProperty(obj, prop, {
        get: getter,
        set: setter,
        enumerable: desc.enumerable,
        configurable: desc.configurable,
      });
    }
  }

  function enableProperty(path, obj, prop) {
    const desc = getOwnPropertyDescriptor(obj, prop);
    if (!desc) {
      return;
    }
    enable(path, obj, prop, desc);
  }

  function enableAllProperties(path, obj) {
    const descs = getOwnPropertyDescriptors(obj);
    if (!descs) {
      return;
    }
    // TypeScript does not allow symbols to be used as indexes because it
    // cannot recokon types of symbolized properties.
    arrayForEach(ownKeys(descs), prop => enable(path, obj, prop, descs[prop]));
  }

  function enableProperties(path, obj, plan) {
    for (const prop of ownKeys(plan)) {
      const desc = getOwnPropertyDescriptor(obj, prop);
      if (!desc || desc.get || desc.set) {
        // No not a value property, nothing to do.
        // eslint-disable-next-line no-continue
        continue;
      }

      // In case `prop` is a symbol, we first coerce it with `String`,
      // purely for diagnostic purposes.
      const subPath = `${path}.${String(prop)}`;
      const subPlan = plan[prop];

      if (subPlan === true) {
        enableProperty(subPath, obj, prop);
      } else if (subPlan === '*') {
        enableAllProperties(subPath, desc.value);
      } else if (!isPrimitive(subPlan)) {
        enableProperties(subPath, desc.value, subPlan);
      } else {
        throw TypeError(`Unexpected override enablement plan ${subPath}`);
      }
    }
  }

  let plan;
  switch (overrideTaming) {
    case 'min': {
      plan = minEnablements;
      break;
    }
    case 'moderate': {
      plan = moderateEnablements;
      break;
    }
    case 'severe': {
      plan = severeEnablements;
      break;
    }
    default: {
      throw TypeError(`unrecognized overrideTaming ${overrideTaming}`);
    }
  }

  // Do the repair.
  enableProperties('root', intrinsics, plan);
}$h͏_once.default(      enablePropertyOverrides);
})()
,
// === 25. ses ./src/tame-locale-methods.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Number,String,TypeError,defineProperty,getOwnPropertyNames,isPrimitive,regexpExec,assert;$h͏_imports([["./commons.js", [["Number",[$h͏_a => (Number = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["getOwnPropertyNames",[$h͏_a => (getOwnPropertyNames = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["regexpExec",[$h͏_a => (regexpExec = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);










const { Fail, quote: q } = assert;

const localePattern = /^(\w*[a-z])Locale([A-Z]\w*)$/;

// Use concise methods to obtain named functions without constructor
// behavior or `.prototype` property.
const tamedMethods = {
  // See https://tc39.es/ecma262/#sec-string.prototype.localecompare
  localeCompare(arg) {
    if (this === null || this === undefined) {
      throw TypeError(
        'Cannot localeCompare with null or undefined "this" value',
      );
    }
    const s = `${this}`;
    const that = `${arg}`;
    if (s < that) {
      return -1;
    }
    if (s > that) {
      return 1;
    }
    s === that || Fail`expected ${q(s)} and ${q(that)} to compare`;
    return 0;
  },

  toString() {
    return `${this}`;
  },
};

const nonLocaleCompare = tamedMethods.localeCompare;
const numberToString = tamedMethods.toString;

               function tameLocaleMethods(intrinsics, localeTaming = 'safe') {
  if (localeTaming === 'unsafe') {
    return;
  }

  defineProperty(String.prototype, 'localeCompare', {
    value: nonLocaleCompare,
  });

  for (const intrinsicName of getOwnPropertyNames(intrinsics)) {
    const intrinsic = intrinsics[intrinsicName];
    if (!isPrimitive(intrinsic)) {
      for (const methodName of getOwnPropertyNames(intrinsic)) {
        const match = regexpExec(localePattern, methodName);
        if (match) {
          typeof intrinsic[methodName] === 'function' ||
            Fail`expected ${q(methodName)} to be a function`;
          const nonLocaleMethodName = `${match[1]}${match[2]}`;
          const method = intrinsic[nonLocaleMethodName];
          typeof method === 'function' ||
            Fail`function ${q(nonLocaleMethodName)} not found`;
          defineProperty(intrinsic, methodName, { value: method });
        }
      }
    }
  }

  // Numbers are special because toString accepts a radix instead of ignoring
  // all of the arguments that we would otherwise forward.
  defineProperty(Number.prototype, 'toLocaleString', {
    value: numberToString,
  });
}$h͏_once.default(      tameLocaleMethods);
})()
,
// === 26. ses ./src/make-eval-function.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([]);/**
 * makeEvalFunction()
 * A safe version of the native eval function which relies on
 * the safety of `safe-eval` for confinement, unless `no-eval`
 * is specified (then a TypeError is thrown on use).
 *
 * @param {Function} evaluator
 */
       const makeEvalFunction = evaluator => {
  // We use the concise method syntax to create an eval without a
  // [[Construct]] behavior (such that the invocation "new eval()" throws
  // TypeError: eval is not a constructor"), but which still accepts a
  // 'this' binding.
  const newEval = {
    eval(source) {
      if (typeof source !== 'string') {
        // As per the runtime semantic of PerformEval [ECMAScript 18.2.1.1]:
        // If Type(source) is not String, return source.
        // TODO Recent proposals from Mike Samuel may change this non-string
        // rule. Track.
        return source;
      }
      return evaluator(source);
    },
  }.eval;

  return newEval;
};$h͏_once.makeEvalFunction(makeEvalFunction);
})()
,
// === 27. ses ./src/make-function-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_FUNCTION,arrayJoin,arrayPop,defineProperties,getPrototypeOf,assert;$h͏_imports([["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arrayPop",[$h͏_a => (arrayPop = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);








const { Fail } = assert;

/*
 * makeFunctionConstructor()
 * A safe version of the native Function which relies on
 * the safety of `safe-eval` for confinement, unless `no-eval`
 * is specified (then a TypeError is thrown on use).
 */
       const makeFunctionConstructor = evaluator => {
  // Define an unused parameter to ensure Function.length === 1
  const newFunction = function Function(_body) {
    // Sanitize all parameters at the entry point.
    // eslint-disable-next-line prefer-rest-params
    const bodyText = `${arrayPop(arguments) || ''}`;
    // eslint-disable-next-line prefer-rest-params
    const parameters = `${arrayJoin(arguments, ',')}`;

    // Are parameters and bodyText valid code, or is someone
    // attempting an injection attack? This will throw a SyntaxError if:
    // - parameters doesn't parse as parameters
    // - bodyText doesn't parse as a function body
    // - either contain a call to super() or references a super property.
    //
    // It seems that XS may still be vulnerable to the attack explained at
    // https://github.com/tc39/ecma262/pull/2374#issuecomment-813769710
    // where `new Function('/*', '*/ ) {')` would incorrectly validate.
    // Before we worried about this, we check the parameters and bodyText
    // together in one call
    // ```js
    // new FERAL_FUNCTION(parameters, bodyTest);
    // ```
    // However, this check is vulnerable to that bug. Aside from that case,
    // all engines do seem to validate the parameters, taken by themselves,
    // correctly. And all engines do seem to validate the bodyText, taken
    // by itself correctly. So with the following two checks, SES builds a
    // correct safe `Function` constructor by composing two calls to an
    // original unsafe `Function` constructor that may suffer from this bug
    // but is otherwise correctly validating.
    //
    // eslint-disable-next-line no-new
    new FERAL_FUNCTION(parameters, '');
    // eslint-disable-next-line no-new
    new FERAL_FUNCTION(bodyText);

    // Safe to be combined. Defeat potential trailing comments.
    // TODO: since we create an anonymous function, the 'this' value
    // isn't bound to the global object as per specs, but set as undefined.
    const src = `(function anonymous(${parameters}\n) {\n${bodyText}\n})`;
    return evaluator(src);
  };

  defineProperties(newFunction, {
    // Ensure that any function created in any evaluator in a realm is an
    // instance of Function in any evaluator of the same realm.
    prototype: {
      value: FERAL_FUNCTION.prototype,
      writable: false,
      enumerable: false,
      configurable: false,
    },
  });

  // Assert identity of Function.__proto__ accross all compartments
  getPrototypeOf(FERAL_FUNCTION) === FERAL_FUNCTION.prototype ||
    Fail`Function prototype is the same accross compartments`;
  getPrototypeOf(newFunction) === FERAL_FUNCTION.prototype ||
    Fail`Function constructor prototype is the same across compartments`;

  return newFunction;
};$h͏_once.makeFunctionConstructor(makeFunctionConstructor);
})()
,
// === 28. ses ./src/global-object.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError,assign,create,defineProperty,entries,freeze,hasOwn,unscopablesSymbol,makeEvalFunction,makeFunctionConstructor,constantProperties,universalPropertyNames;$h͏_imports([["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["unscopablesSymbol",[$h͏_a => (unscopablesSymbol = $h͏_a)]]]],["./make-eval-function.js", [["makeEvalFunction",[$h͏_a => (makeEvalFunction = $h͏_a)]]]],["./make-function-constructor.js", [["makeFunctionConstructor",[$h͏_a => (makeFunctionConstructor = $h͏_a)]]]],["./permits.js", [["constantProperties",[$h͏_a => (constantProperties = $h͏_a)]],["universalPropertyNames",[$h͏_a => (universalPropertyNames = $h͏_a)]]]]]);













/**
 * The host's ordinary global object is not provided by a `with` block, so
 * assigning to Symbol.unscopables has no effect.
 * Since this shim uses `with` blocks to create a confined lexical scope for
 * guest programs, we cannot emulate the proper behavior.
 * With this shim, assigning Symbol.unscopables causes the given lexical
 * names to fall through to the terminal scope proxy.
 * But, we can install this setter to prevent a program from proceding on
 * this false assumption.
 *
 * @param {object} globalObject
 */
       const setGlobalObjectSymbolUnscopables = globalObject => {
  defineProperty(
    globalObject,
    unscopablesSymbol,
    freeze(
      assign(create(null), {
        set: freeze(() => {
          throw TypeError(
            `Cannot set Symbol.unscopables of a Compartment's globalThis`,
          );
        }),
        enumerable: false,
        configurable: false,
      }),
    ),
  );
};

/**
 * setGlobalObjectConstantProperties()
 * Initializes a new global object using a process similar to ECMA specifications
 * (SetDefaultGlobalBindings). This process is split between this function and
 * `setGlobalObjectMutableProperties`.
 *
 * @param {object} globalObject
 */$h͏_once.setGlobalObjectSymbolUnscopables(setGlobalObjectSymbolUnscopables);
       const setGlobalObjectConstantProperties = globalObject => {
  for (const [name, constant] of entries(constantProperties)) {
    defineProperty(globalObject, name, {
      value: constant,
      writable: false,
      enumerable: false,
      configurable: false,
    });
  }
};

/**
 * setGlobalObjectMutableProperties()
 * Create new global object using a process similar to ECMA specifications
 * (portions of SetRealmGlobalObject and SetDefaultGlobalBindings).
 * `newGlobalPropertyNames` should be either `initialGlobalPropertyNames` or
 * `sharedGlobalPropertyNames`.
 *
 * @param {object} globalObject
 * @param {object} args
 * @param {object} args.intrinsics
 * @param {object} args.newGlobalPropertyNames
 * @param {Function} args.makeCompartmentConstructor
 * @param {(object) => void} args.markVirtualizedNativeFunction
 * @param {Compartment} [args.parentCompartment]
 */$h͏_once.setGlobalObjectConstantProperties(setGlobalObjectConstantProperties);
       const setGlobalObjectMutableProperties = (
  globalObject,
  {
    intrinsics,
    newGlobalPropertyNames,
    makeCompartmentConstructor,
    markVirtualizedNativeFunction,
    parentCompartment,
  },
) => {
  for (const [name, intrinsicName] of entries(universalPropertyNames)) {
    if (hasOwn(intrinsics, intrinsicName)) {
      defineProperty(globalObject, name, {
        value: intrinsics[intrinsicName],
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
  }

  for (const [name, intrinsicName] of entries(newGlobalPropertyNames)) {
    if (hasOwn(intrinsics, intrinsicName)) {
      defineProperty(globalObject, name, {
        value: intrinsics[intrinsicName],
        writable: true,
        enumerable: false,
        configurable: true,
      });
    }
  }

  const perCompartmentGlobals = {
    globalThis: globalObject,
  };

  perCompartmentGlobals.Compartment = freeze(
    makeCompartmentConstructor(
      makeCompartmentConstructor,
      intrinsics,
      markVirtualizedNativeFunction,
      {
        parentCompartment,
        enforceNew: true,
      },
    ),
  );

  // TODO These should still be tamed according to the permits before
  // being made available.
  for (const [name, value] of entries(perCompartmentGlobals)) {
    defineProperty(globalObject, name, {
      value,
      writable: true,
      enumerable: false,
      configurable: true,
    });
    if (typeof value === 'function') {
      markVirtualizedNativeFunction(value);
    }
  }
};

/**
 * setGlobalObjectEvaluators()
 * Set the eval and the Function evaluator on the global object with given evalTaming policy.
 *
 * @param {object} globalObject
 * @param {Function} evaluator
 * @param {(object) => void} markVirtualizedNativeFunction
 */$h͏_once.setGlobalObjectMutableProperties(setGlobalObjectMutableProperties);
       const setGlobalObjectEvaluators = (
  globalObject,
  evaluator,
  markVirtualizedNativeFunction,
) => {
  {
    const f = freeze(makeEvalFunction(evaluator));
    markVirtualizedNativeFunction(f);
    defineProperty(globalObject, 'eval', {
      value: f,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
  {
    const f = freeze(makeFunctionConstructor(evaluator));
    markVirtualizedNativeFunction(f);
    defineProperty(globalObject, 'Function', {
      value: f,
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }
};$h͏_once.setGlobalObjectEvaluators(setGlobalObjectEvaluators);
})()
,
// === 29. ses ./src/strict-scope-terminator.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Proxy,String,TypeError,ReferenceError,create,freeze,getOwnPropertyDescriptors,assert;$h͏_imports([["./commons.js", [["Proxy",[$h͏_a => (Proxy = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["ReferenceError",[$h͏_a => (ReferenceError = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);










const { Fail, quote: q } = assert;

/**
 * `freeze` but not `harden` the proxy target so it remains trapping.
 * Thus, it should not be shared outside this module.
 *
 * @see https://github.com/endojs/endo/blob/master/packages/ses/docs/preparing-for-stabilize.md
 */
const objTarget = freeze({ __proto__: null });

/**
 * alwaysThrowHandler
 * This is an object that throws if any property is called. It's used as
 * a proxy handler which throws on any trap called.
 * It's made from a proxy with a get trap that throws. It's safe to
 * create one and share it between all Proxy handlers.
 */
       const alwaysThrowHandler = new Proxy(
  objTarget,
  freeze({
    get(_shadow, prop) {
      Fail`Please report unexpected scope handler trap: ${q(String(prop))}`;
    },
  }),
);

/*
 * scopeProxyHandlerProperties
 * scopeTerminatorHandler manages a strictScopeTerminator Proxy which serves as
 * the final scope boundary that will always return "undefined" in order
 * to prevent access to "start compartment globals".
 */$h͏_once.alwaysThrowHandler(alwaysThrowHandler);
const scopeProxyHandlerProperties = {
  get(_shadow, _prop) {
    return undefined;
  },

  set(_shadow, prop, _value) {
    // We should only hit this if the has() hook returned true matches the v8
    // ReferenceError message "Uncaught ReferenceError: xyz is not defined"
    throw ReferenceError(`${String(prop)} is not defined`);
  },

  has(_shadow, prop) {
    // we must at least return true for all properties on the realm globalThis
    return true;
  },

  // note: this is likely a bug of safari
  // https://bugs.webkit.org/show_bug.cgi?id=195534
  getPrototypeOf(_shadow) {
    return null;
  },

  // See https://github.com/endojs/endo/issues/1510
  // TODO: report as bug to v8 or Chrome, and record issue link here.
  getOwnPropertyDescriptor(_shadow, prop) {
    // Coerce with `String` in case prop is a symbol.
    const quotedProp = q(String(prop));
    // eslint-disable-next-line @endo/no-polymorphic-call
    console.warn(
      `getOwnPropertyDescriptor trap on scopeTerminatorHandler for ${quotedProp}`,
      TypeError().stack,
    );
    return undefined;
  },

  // See https://github.com/endojs/endo/issues/1490
  // TODO Report bug to JSC or Safari
  ownKeys(_shadow) {
    return [];
  },
};

// The scope handler's prototype is a proxy that throws if any trap other
// than get/set/has are run (like getOwnPropertyDescriptors, apply,
// getPrototypeOf).
       const strictScopeTerminatorHandler = freeze(
  create(
    alwaysThrowHandler,
    getOwnPropertyDescriptors(scopeProxyHandlerProperties),
  ),
);$h͏_once.strictScopeTerminatorHandler(strictScopeTerminatorHandler);

       const strictScopeTerminator = new Proxy(
  objTarget,
  strictScopeTerminatorHandler,
);$h͏_once.strictScopeTerminator(strictScopeTerminator);
})()
,
// === 30. ses ./src/sloppy-globals-scope-terminator.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Proxy,create,freeze,getOwnPropertyDescriptors,reflectSet,strictScopeTerminatorHandler,alwaysThrowHandler;$h͏_imports([["./commons.js", [["Proxy",[$h͏_a => (Proxy = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["reflectSet",[$h͏_a => (reflectSet = $h͏_a)]]]],["./strict-scope-terminator.js", [["strictScopeTerminatorHandler",[$h͏_a => (strictScopeTerminatorHandler = $h͏_a)]],["alwaysThrowHandler",[$h͏_a => (alwaysThrowHandler = $h͏_a)]]]]]);











/**
 * `freeze` but not `harden` the proxy target so it remains trapping.
 * Thus, it should not be shared outside this module.
 *
 * @see https://github.com/endojs/endo/blob/master/packages/ses/docs/preparing-for-stabilize.md
 */
const objTarget = freeze({ __proto__: null });

/*
 * createSloppyGlobalsScopeTerminator()
 * strictScopeTerminatorHandler manages a scopeTerminator Proxy which serves as
 * the final scope boundary that will always return "undefined" in order
 * to prevent access to "start compartment globals". When "sloppyGlobalsMode"
 * is true, the Proxy will perform sets on the "globalObject".
 */
       const createSloppyGlobalsScopeTerminator = globalObject => {
  const scopeProxyHandlerProperties = {
    // inherit scopeTerminator behavior
    ...strictScopeTerminatorHandler,

    // Redirect set properties to the globalObject.
    set(_shadow, prop, value) {
      return reflectSet(globalObject, prop, value);
    },

    // Always claim to have a potential property in order to be the recipient of a set
    has(_shadow, _prop) {
      return true;
    },
  };

  // The scope handler's prototype is a proxy that throws if any trap other
  // than get/set/has are run (like getOwnPropertyDescriptors, apply,
  // getPrototypeOf).
  const sloppyGlobalsScopeTerminatorHandler = freeze(
    create(
      alwaysThrowHandler,
      getOwnPropertyDescriptors(scopeProxyHandlerProperties),
    ),
  );

  const sloppyGlobalsScopeTerminator = new Proxy(
    objTarget,
    sloppyGlobalsScopeTerminatorHandler,
  );

  return sloppyGlobalsScopeTerminator;
};$h͏_once.createSloppyGlobalsScopeTerminator(createSloppyGlobalsScopeTerminator);
freeze(createSloppyGlobalsScopeTerminator);
})()
,
// === 31. ses ./src/eval-scope.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_EVAL,create,defineProperties,freeze,assert;$h͏_imports([["./commons.js", [["FERAL_EVAL",[$h͏_a => (FERAL_EVAL = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);



const { Fail } = assert;

// We attempt to frustrate stack bumping attacks on the safe evaluator
// (`make-safe-evaluator.js`).
// A stack bumping attack forces an API call to throw a stack overflow
// `RangeError` at an inopportune time.
// The attacker arranges for the stack to be sufficiently deep that the API
// consumes exactly enough stack frames to throw an exception.
//
// For the safe evaluator, an exception thrown between adding and then deleting
// `eval` on `evalScope` could leak the real `eval` to an attacker's lexical
// scope.
// This would be sufficiently disastrous that we guard against it twice.
// First, we delete `eval` from `evalScope` immediately before rendering it to
// the guest program's lexical scope.
//
// If the attacker manages to arrange for `eval` to throw an exception after we
// call `allowNextEvalToBeUnsafe` but before the guest program accesses `eval`,
// it would be able to access `eval` once more in its own code.
// Although they could do no harm with a direct `eval`, they would be able to
// escape to the true global scope with an indirect `eval`.
//
//   prepareStack(depth, () => {
//     (eval)('');
//   });
//   const unsafeEval = (eval);
//   const safeEval = (eval);
//   const realGlobal = unsafeEval('globalThis');
//
// To protect against that case, we also delete `eval` from the `evalScope` in
// a `finally` block surrounding the call to the safe evaluator.
// The only way to reach this case is if `eval` remains on `evalScope` due to
// an attack, so we assume that attack would have have invalided our isolation
// and revoke all future access to the evaluator.
//
// To defeat a stack bumping attack, we must use fewer stack frames to recover
// in that `finally` block than we used in the `try` block.
// We have no reliable guarantees about how many stack frames a block of
// JavaScript will consume.
// Function inlining, tail-call optimization, variations in the size of a stack
// frame, and block scopes may affect the depth of the stack.
// The only number of acceptable stack frames to use in the finally block is
// zero.
// We only use property assignment and deletion in the safe evaluator's
// `finally` block.
// We use `delete evalScope.eval` to withhold the evaluator.
// We assign an envelope object over `evalScopeKit.revoked` to revoke the
// evaluator.
//
// This is why we supply a meaningfully named function for
// `allowNextEvalToBeUnsafe` but do not provide a corresponding
// `revokeAccessToUnsafeEval` or even simply `revoke`.
// These recovery routines are expressed inline in the safe evaluator.

       const makeEvalScopeKit = () => {
  const evalScope = create(null);
  const oneTimeEvalProperties = freeze({
    eval: {
      get() {
        delete evalScope.eval;
        return FERAL_EVAL;
      },
      enumerable: false,
      configurable: true,
    },
  });

  const evalScopeKit = {
    evalScope,
    allowNextEvalToBeUnsafe() {
      const { revoked } = evalScopeKit;
      if (revoked !== null) {
        Fail`a handler did not reset allowNextEvalToBeUnsafe ${revoked.err}`;
      }
      // Allow next reference to eval produce the unsafe FERAL_EVAL.
      // We avoid defineProperty because it consumes an extra stack frame taming
      // its return value.
      defineProperties(evalScope, oneTimeEvalProperties);
    },
    /** @type {null | { err: any }} */
    revoked: null,
  };

  return evalScopeKit;
};$h͏_once.makeEvalScopeKit(makeEvalScopeKit);
})()
,
// === 32. ses ./src/get-source-url.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_REG_EXP,regexpExec,stringSlice;$h͏_imports([["./commons.js", [["FERAL_REG_EXP",[$h͏_a => (FERAL_REG_EXP = $h͏_a)]],["regexpExec",[$h͏_a => (regexpExec = $h͏_a)]],["stringSlice",[$h͏_a => (stringSlice = $h͏_a)]]]]]);

// Captures a key and value of the form #key=value or @key=value
const sourceMetaEntryRegExp =
  '\\s*[@#]\\s*([a-zA-Z][a-zA-Z0-9]*)\\s*=\\s*([^\\s\\*]*)';
// Captures either a one-line or multi-line comment containing
// one #key=value or @key=value.
// Produces two pairs of capture groups, but the initial two may be undefined.
// On account of the mechanics of regular expressions, scanning from the end
// does not allow us to capture every pair, so getSourceURL must capture and
// trim until there are no matching comments.
const sourceMetaEntriesRegExp = new FERAL_REG_EXP(
  `(?:\\s*//${sourceMetaEntryRegExp}|/\\*${sourceMetaEntryRegExp}\\s*\\*/)\\s*$`,
);

/**
 * @param {string} src
 */
       const getSourceURL = src => {
  let sourceURL = '<unknown>';

  // Our regular expression matches the last one or two comments with key value
  // pairs at the end of the source, avoiding a scan over the entire length of
  // the string, but at the expense of being able to capture all the (key,
  // value) pair meta comments at the end of the source, which may include
  // sourceMapURL in addition to sourceURL.
  // So, we sublimate the comments out of the source until no source or no
  // comments remain.
  while (src.length > 0) {
    const match = regexpExec(sourceMetaEntriesRegExp, src);
    if (match === null) {
      break;
    }
    src = stringSlice(src, 0, src.length - match[0].length);

    // We skip $0 since it contains the entire match.
    // The match contains four capture groups,
    // two (key, value) pairs, the first of which
    // may be undefined.
    // On the off-chance someone put two sourceURL comments in their code with
    // different commenting conventions, the latter has precedence.
    if (match[3] === 'sourceURL') {
      sourceURL = match[4];
    } else if (match[1] === 'sourceURL') {
      sourceURL = match[2];
    }
  }

  return sourceURL;
};$h͏_once.getSourceURL(getSourceURL);
})()
,
// === 33. ses ./src/transforms.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_REG_EXP,SyntaxError,stringReplace,stringSearch,stringSlice,stringSplit,freeze,getSourceURL;$h͏_imports([["./commons.js", [["FERAL_REG_EXP",[$h͏_a => (FERAL_REG_EXP = $h͏_a)]],["SyntaxError",[$h͏_a => (SyntaxError = $h͏_a)]],["stringReplace",[$h͏_a => (stringReplace = $h͏_a)]],["stringSearch",[$h͏_a => (stringSearch = $h͏_a)]],["stringSlice",[$h͏_a => (stringSlice = $h͏_a)]],["stringSplit",[$h͏_a => (stringSplit = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]]]],["./get-source-url.js", [["getSourceURL",[$h͏_a => (getSourceURL = $h͏_a)]]]]]);












/**
 * Find the first occurence of the given pattern and return
 * the location as the approximate line number.
 *
 * @param {string} src
 * @param {RegExp} pattern
 * @returns {number}
 */
function getLineNumber(src, pattern) {
  const index = stringSearch(src, pattern);
  if (index < 0) {
    return -1;
  }

  // The importPattern incidentally captures an initial \n in
  // an attempt to reject a . prefix, so we need to offset
  // the line number in that case.
  const adjustment = src[index] === '\n' ? 1 : 0;

  return stringSplit(stringSlice(src, 0, index), '\n').length + adjustment;
}

// /////////////////////////////////////////////////////////////////////////////

const htmlCommentPattern = new FERAL_REG_EXP(`(?:${'<'}!--|--${'>'})`, 'g');

/**
 * Conservatively reject the source text if it may contain text that some
 * JavaScript parsers may treat as an html-like comment. To reject without
 * parsing, `rejectHtmlComments` will also reject some other text as well.
 *
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-html-like-comments
 * explains that JavaScript parsers may or may not recognize html
 * comment tokens "<" immediately followed by "!--" and "--"
 * immediately followed by ">" in non-module source text, and treat
 * them as a kind of line comment. Since otherwise both of these can
 * appear in normal JavaScript source code as a sequence of operators,
 * we have the terrifying possibility of the same source code parsing
 * one way on one correct JavaScript implementation, and another way
 * on another.
 *
 * This shim takes the conservative strategy of just rejecting source
 * text that contains these strings anywhere. Note that this very
 * source file is written strangely to avoid mentioning these
 * character strings explicitly.
 *
 * We do not write the regexp in a straightforward way, so that an
 * apparennt html comment does not appear in this file. Thus, we avoid
 * rejection by the overly eager rejectDangerousSources.
 *
 * @param {string} src
 * @returns {string}
 */
       const rejectHtmlComments = src => {
  const lineNumber = getLineNumber(src, htmlCommentPattern);
  if (lineNumber < 0) {
    return src;
  }
  const name = getSourceURL(src);
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_HTML_COMMENT_REJECTED.md
  throw SyntaxError(
    `Possible HTML comment rejected at ${name}:${lineNumber}. (SES_HTML_COMMENT_REJECTED)`,
  );
};

/**
 * An optional transform to place ahead of `rejectHtmlComments` to evade *that*
 * rejection. However, it may change the meaning of the program.
 *
 * This evasion replaces each alleged html comment with the space-separated
 * JavaScript operator sequence that it may mean, assuming that it appears
 * outside of a comment or literal string, in source code where the JS
 * parser makes no special case for html comments (like module source code).
 * In that case, this evasion preserves the meaning of the program, though it
 * does change the souce column numbers on each effected line.
 *
 * If the html comment appeared in a literal (a string literal, regexp literal,
 * or a template literal), then this evasion will change the meaning of the
 * program by changing the text of that literal.
 *
 * If the html comment appeared in a JavaScript comment, then this evasion does
 * not change the meaning of the program because it only changes the contents of
 * those comments.
 *
 * @param {string} src
 * @returns {string}
 */$h͏_once.rejectHtmlComments(rejectHtmlComments);
       const evadeHtmlCommentTest = src => {
  const replaceFn = match => (match[0] === '<' ? '< ! --' : '-- >');
  return stringReplace(src, htmlCommentPattern, replaceFn);
};

// /////////////////////////////////////////////////////////////////////////////
$h͏_once.evadeHtmlCommentTest(evadeHtmlCommentTest);
const importPattern = new FERAL_REG_EXP(
  '(^|[^.]|\\.\\.\\.)\\bimport(\\s*(?:\\(|/[/*]))',
  'g',
);

/**
 * Conservatively reject the source text if it may contain a dynamic
 * import expression. To reject without parsing, `rejectImportExpressions` will
 * also reject some other text as well.
 *
 * The proposed dynamic import expression is the only syntax currently
 * proposed, that can appear in non-module JavaScript code, that
 * enables direct access to the outside world that cannot be
 * suppressed or intercepted without parsing and rewriting. Instead,
 * this shim conservatively rejects any source text that seems to
 * contain such an expression. To do this safely without parsing, we
 * must also reject some valid programs, i.e., those containing
 * apparent import expressions in literal strings or comments.
 *
 * The current conservative rule looks for the identifier "import"
 * followed by either an open paren or something that looks like the
 * beginning of a comment. We assume that we do not need to worry
 * about html comment syntax because that was already rejected by
 * rejectHtmlComments.
 *
 * this \s *must* match all kinds of syntax-defined whitespace. If e.g.
 * U+2028 (LINE SEPARATOR) or U+2029 (PARAGRAPH SEPARATOR) is treated as
 * whitespace by the parser, but not matched by /\s/, then this would admit
 * an attack like: import\u2028('power.js') . We're trying to distinguish
 * something like that from something like importnotreally('power.js') which
 * is perfectly safe.
 *
 * @param {string} src
 * @returns {string}
 */
       const rejectImportExpressions = src => {
  const lineNumber = getLineNumber(src, importPattern);
  if (lineNumber < 0) {
    return src;
  }
  const name = getSourceURL(src);
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_IMPORT_REJECTED.md
  throw SyntaxError(
    `Possible import expression rejected at ${name}:${lineNumber}. (SES_IMPORT_REJECTED)`,
  );
};

/**
 * An optional transform to place ahead of `rejectImportExpressions` to evade
 * *that* rejection. However, it may change the meaning of the program.
 *
 * This evasion replaces each suspicious `import` identifier with `__import__`.
 * If the alleged import expression appears in a JavaScript comment, this
 * evasion will not change the meaning of the program. If it appears in a
 * literal (string literal, regexp literal, or a template literal), then this
 * evasion will change the contents of that literal. If it appears as code
 * where it would be parsed as an expression, then it might or might not change
 * the meaning of the program, depending on the binding, if any, of the lexical
 * variable `__import__`.
 *
 * @param {string} src
 * @returns {string}
 */$h͏_once.rejectImportExpressions(rejectImportExpressions);
       const evadeImportExpressionTest = src => {
  const replaceFn = (_, p1, p2) => `${p1}__import__${p2}`;
  return stringReplace(src, importPattern, replaceFn);
};

// /////////////////////////////////////////////////////////////////////////////
$h͏_once.evadeImportExpressionTest(evadeImportExpressionTest);
const someDirectEvalPattern = new FERAL_REG_EXP(
  '(^|[^.])\\beval(\\s*\\()',
  'g',
);

/**
 * Heuristically reject some text that seems to contain a direct eval
 * expression, with both false positives and false negavives. To reject without
 * parsing, `rejectSomeDirectEvalExpressions` may will also reject some other
 * text as well. It may also accept source text that contains a direct eval
 * written oddly, such as `(eval)(src)`. This false negative is not a security
 * vulnerability. Rather it is a compat hazard because it will execute as
 * an indirect eval under the SES-shim but as a direct eval on platforms that
 * support SES directly (like XS).
 *
 * The shim cannot correctly emulate a direct eval as explained at
 * https://github.com/Agoric/realms-shim/issues/12
 * If we did not reject direct eval syntax, we would
 * accidentally evaluate these with an emulation of indirect eval. To
 * prevent future compatibility problems, in shifting from use of the
 * shim to genuine platform support for the proposal, we should
 * instead statically reject code that seems to contain a direct eval
 * expression.
 *
 * As with the dynamic import expression, to avoid a full parse, we do
 * this approximately with a regexp, that will also reject strings
 * that appear safely in comments or strings. Unlike dynamic import,
 * if we miss some, this only creates future compat problems, not
 * security problems. Thus, we are only trying to catch innocent
 * occurrences, not malicious one. In particular, `(eval)(...)` is
 * direct eval syntax that would not be caught by the following regexp.
 *
 * Exported for unit tests.
 *
 * @param {string} src
 * @returns {string}
 */
       const rejectSomeDirectEvalExpressions = src => {
  const lineNumber = getLineNumber(src, someDirectEvalPattern);
  if (lineNumber < 0) {
    return src;
  }
  const name = getSourceURL(src);
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_EVAL_REJECTED.md
  throw SyntaxError(
    `Possible direct eval expression rejected at ${name}:${lineNumber}. (SES_EVAL_REJECTED)`,
  );
};

// /////////////////////////////////////////////////////////////////////////////

/**
 * A transform that bundles together the transforms that must unconditionally
 * happen last in order to ensure safe evaluation without parsing.
 *
 * @param {string} source
 * @returns {string}
 */$h͏_once.rejectSomeDirectEvalExpressions(rejectSomeDirectEvalExpressions);
       const mandatoryTransforms = source => {
  source = rejectHtmlComments(source);
  source = rejectImportExpressions(source);
  return source;
};

/**
 * Starting with `source`, apply each transform to the result of the
 * previous one, returning the result of the last transformation.
 *
 * @param {string} source
 * @param {((str: string) => string)[]} transforms
 * @returns {string}
 */$h͏_once.mandatoryTransforms(mandatoryTransforms);
       const applyTransforms = (source, transforms) => {
  for (let i = 0, l = transforms.length; i < l; i += 1) {
    const transform = transforms[i];
    source = transform(source);
  }
  return source;
};

// export all as a frozen object
$h͏_once.applyTransforms(applyTransforms);const transforms=freeze({
  rejectHtmlComments: freeze(rejectHtmlComments),
  evadeHtmlCommentTest: freeze(evadeHtmlCommentTest),
  rejectImportExpressions: freeze(rejectImportExpressions),
  evadeImportExpressionTest: freeze(evadeImportExpressionTest),
  rejectSomeDirectEvalExpressions: freeze(rejectSomeDirectEvalExpressions),
  mandatoryTransforms: freeze(mandatoryTransforms),
  applyTransforms: freeze(applyTransforms),
});$h͏_once.transforms(transforms);
})()
,
// === 34. ses ./src/scope-constants.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let arrayFilter,arrayIncludes,getOwnPropertyDescriptor,getOwnPropertyNames,hasOwn,regexpTest;$h͏_imports([["./commons.js", [["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["arrayIncludes",[$h͏_a => (arrayIncludes = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getOwnPropertyNames",[$h͏_a => (getOwnPropertyNames = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]],["regexpTest",[$h͏_a => (regexpTest = $h͏_a)]]]]]);








/**
 * keywords
 * In JavaScript you cannot use these reserved words as variables.
 * See 11.6.1 Identifier Names
 */
const keywords = [
  // 11.6.2.1 Keywords
  'await',
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'export',
  'extends',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'new',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',

  // Also reserved when parsing strict mode code
  'let',
  'static',

  // 11.6.2.2 Future Reserved Words
  'enum',

  // Also reserved when parsing strict mode code
  'implements',
  'package',
  'protected',
  'interface',
  'private',
  'public',

  // Reserved but not mentioned in specs
  'await',

  'null',
  'true',
  'false',

  'this',
  'arguments',
];

/**
 * identifierPattern
 * Simplified validation of identifier names: may only contain alphanumeric
 * characters (or "$" or "_"), and may not start with a digit. This is safe
 * and does not reduces the compatibility of the shim. The motivation for
 * this limitation was to decrease the complexity of the implementation,
 * and to maintain a resonable level of performance.
 * Note: \w is equivalent [a-zA-Z_0-9]
 * See 11.6.1 Identifier Names
 */
const identifierPattern = /^[a-zA-Z_$][\w$]*$/;

/**
 * isValidIdentifierName()
 * What variable names might it bring into scope? These include all
 * property names which can be variable names, including the names
 * of inherited properties. It excludes symbols and names which are
 * keywords. We drop symbols safely. Currently, this shim refuses
 * service if any of the names are keywords or keyword-like. This is
 * safe and only prevent performance optimization.
 *
 * @param {string} name
 */
       const isValidIdentifierName = name => {
  // Ensure we have a valid identifier. We use regexpTest rather than
  // /../.test() to guard against the case where RegExp has been poisoned.
  return (
    name !== 'eval' &&
    !arrayIncludes(keywords, name) &&
    regexpTest(identifierPattern, name)
  );
};

/*
 * isImmutableDataProperty
 */$h͏_once.isValidIdentifierName(isValidIdentifierName);

function isImmutableDataProperty(obj, name) {
  const desc = getOwnPropertyDescriptor(obj, name);
  return (
    desc &&
    //
    // The getters will not have .writable, don't let the falsyness of
    // 'undefined' trick us: test with === false, not ! . However descriptors
    // inherit from the (potentially poisoned) global object, so we might see
    // extra properties which weren't really there. Accessor properties have
    // 'get/set/enumerable/configurable', while data properties have
    // 'value/writable/enumerable/configurable'.
    desc.configurable === false &&
    desc.writable === false &&
    //
    // Checks for data properties because they're the only ones we can
    // optimize (accessors are most likely non-constant). Descriptors can't
    // can't have accessors and value properties at the same time, therefore
    // this check is sufficient. Using explicit own property deal with the
    // case where Object.prototype has been poisoned.
    hasOwn(desc, 'value')
  );
}

/**
 * getScopeConstants()
 * What variable names might it bring into scope? These include all
 * property names which can be variable names, including the names
 * of inherited properties. It excludes symbols and names which are
 * keywords. We drop symbols safely. Currently, this shim refuses
 * service if any of the names are keywords or keyword-like. This is
 * safe and only prevent performance optimization.
 *
 * @param {object} globalObject
 * @param {object} moduleLexicals
 */
       const getScopeConstants = (globalObject, moduleLexicals = {}) => {
  // getOwnPropertyNames() does ignore Symbols so we don't need to
  // filter them out.
  const globalObjectNames = getOwnPropertyNames(globalObject);
  const moduleLexicalNames = getOwnPropertyNames(moduleLexicals);

  // Collect all valid & immutable identifiers from the endowments.
  const moduleLexicalConstants = arrayFilter(
    moduleLexicalNames,
    name =>
      isValidIdentifierName(name) &&
      isImmutableDataProperty(moduleLexicals, name),
  );

  // Collect all valid & immutable identifiers from the global that
  // are also not present in the endowments (immutable or not).
  const globalObjectConstants = arrayFilter(
    globalObjectNames,
    name =>
      // Can't define a constant: it would prevent a
      // lookup on the endowments.
      !arrayIncludes(moduleLexicalNames, name) &&
      isValidIdentifierName(name) &&
      isImmutableDataProperty(globalObject, name),
  );

  return {
    globalObjectConstants,
    moduleLexicalConstants,
  };
};$h͏_once.getScopeConstants(getScopeConstants);
})()
,
// === 35. ses ./src/make-evaluate.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_FUNCTION,arrayJoin,apply,getScopeConstants;$h͏_imports([["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]]]],["./scope-constants.js", [["getScopeConstants",[$h͏_a => (getScopeConstants = $h͏_a)]]]]]);




/**
 * buildOptimizer()
 * Given an array of identifiers, the optimizer returns a `const` declaration
 * destructuring `this.${name}`.
 *
 * @param {Array<string>} constants
 * @param {string} name
 */
function buildOptimizer(constants, name) {
  // No need to build an optimizer when there are no constants.
  if (constants.length === 0) return '';
  // Use 'this' to avoid going through the scope proxy, which is unnecessary
  // since the optimizer only needs references to the safe global.
  // Destructure the constants from the target scope object.
  return `const {${arrayJoin(constants, ',')}} = this.${name};`;
}

/**
 * makeEvaluate()
 * Create an 'evaluate' function with the correct optimizer inserted.
 *
 * @param {object} context
 * @param {object} context.evalScope
 * @param {object} context.moduleLexicals
 * @param {object} context.globalObject
 * @param {object} context.scopeTerminator
 */
       const makeEvaluate = context => {
  const { globalObjectConstants, moduleLexicalConstants } = getScopeConstants(
    context.globalObject,
    context.moduleLexicals,
  );
  const globalObjectOptimizer = buildOptimizer(
    globalObjectConstants,
    'globalObject',
  );
  const moduleLexicalOptimizer = buildOptimizer(
    moduleLexicalConstants,
    'moduleLexicals',
  );

  // Create a function in sloppy mode, so that we can use 'with'. It returns
  // a function in strict mode that evaluates the provided code using direct
  // eval, and thus in strict mode in the same scope. We must be very careful
  // to not create new names in this scope

  // 1: we use multiple nested 'with' to catch all free variable names. The
  // `this` value of the outer sloppy function holds the different scope
  // layers, from inner to outer:
  //    a) `evalScope` which must release the `FERAL_EVAL` as 'eval' once for
  //       every invocation of the inner `evaluate` function in order to
  //       trigger direct eval. The direct eval semantics is what allows the
  //       evaluated code to lookup free variable names on the other scope
  //       objects and not in global scope.
  //    b) `moduleLexicals` which provide a way to introduce free variables
  //       that are not available on the globalObject.
  //    c) `globalObject` is the global scope object of the evaluator, aka the
  //       Compartment's `globalThis`.
  //    d) `scopeTerminator` is a proxy object which prevents free variable
  //       lookups to escape to the start compartment's global object.
  // 2: `optimizer`s catch constant variable names for speed.
  // 3: The inner strict `evaluate` function should be passed two parameters:
  //    a) its arguments[0] is the source to be directly evaluated.
  //    b) its 'this' is the this binding seen by the code being
  //       directly evaluated (the globalObject).

  // Notes:
  // - The `optimizer` strings only lookup values on the `globalObject` and
  //   `moduleLexicals` objects by construct. Keywords like 'function' are
  //   reserved and cannot be used as a variable, so they are excluded from the
  //   optimizer. Furthermore to prevent shadowing 'eval', while a valid
  //   identifier, that name is also explicitly excluded.
  // - when 'eval' is looked up in the `evalScope`, the powerful unsafe eval
  //   intrinsic is returned after automatically removing it from the
  //   `evalScope`. Any further reference to 'eval' in the evaluate string will
  //   get the tamed evaluator from the `globalObject`, if any.

  // TODO https://github.com/endojs/endo/issues/816
  // The optimizer currently runs under sloppy mode, and although we doubt that
  // there is any vulnerability introduced just by running the optimizer
  // sloppy, we are much more confident in the semantics of strict mode.
  // The `evaluate` function can be and is reused across multiple evaluations.
  // Since the optimizer should not be re-evaluated every time, it cannot be
  // inside the `evaluate` closure. While we could potentially nest an
  // intermediate layer of `() => {'use strict'; ${optimizers}; ...`, it
  // doesn't seem worth the overhead and complexity.
  const evaluateFactory = FERAL_FUNCTION(`
    with (this.scopeTerminator) {
      with (this.globalObject) {
        with (this.moduleLexicals) {
          with (this.evalScope) {
            ${globalObjectOptimizer}
            ${moduleLexicalOptimizer}
            return function() {
              'use strict';
              return eval(arguments[0]);
            };
          }
        }
      }
    }
  `);

  return apply(evaluateFactory, context, []);
};$h͏_once.makeEvaluate(makeEvaluate);
})()
,
// === 36. ses ./src/make-safe-evaluator.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let apply,arrayFlatMap,freeze,identity,strictScopeTerminator,createSloppyGlobalsScopeTerminator,makeEvalScopeKit,applyTransforms,mandatoryTransforms,makeEvaluate,assert;$h͏_imports([["./commons.js", [["apply",[$h͏_a => (apply = $h͏_a)]],["arrayFlatMap",[$h͏_a => (arrayFlatMap = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["identity",[$h͏_a => (identity = $h͏_a)]]]],["./strict-scope-terminator.js", [["strictScopeTerminator",[$h͏_a => (strictScopeTerminator = $h͏_a)]]]],["./sloppy-globals-scope-terminator.js", [["createSloppyGlobalsScopeTerminator",[$h͏_a => (createSloppyGlobalsScopeTerminator = $h͏_a)]]]],["./eval-scope.js", [["makeEvalScopeKit",[$h͏_a => (makeEvalScopeKit = $h͏_a)]]]],["./transforms.js", [["applyTransforms",[$h͏_a => (applyTransforms = $h͏_a)]],["mandatoryTransforms",[$h͏_a => (mandatoryTransforms = $h͏_a)]]]],["./make-evaluate.js", [["makeEvaluate",[$h͏_a => (makeEvaluate = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);










const { Fail } = assert;

/**
 * makeSafeEvaluator()
 * Build the low-level operation used by all evaluators:
 * eval(), Function(), Compartment.prototype.evaluate().
 *
 * @param {object} options
 * @param {object} options.globalObject
 * @param {object} [options.moduleLexicals]
 * @param {Array<import('./lockdown.js').Transform>} [options.globalTransforms]
 * @param {boolean} [options.sloppyGlobalsMode]
 */
       const makeSafeEvaluator = ({
  globalObject,
  moduleLexicals = {},
  globalTransforms = [],
  sloppyGlobalsMode = false,
}) => {
  const scopeTerminator = sloppyGlobalsMode
    ? createSloppyGlobalsScopeTerminator(globalObject)
    : strictScopeTerminator;
  const evalScopeKit = makeEvalScopeKit();
  const { evalScope } = evalScopeKit;

  const evaluateContext = freeze({
    evalScope,
    moduleLexicals,
    globalObject,
    scopeTerminator,
  });

  // Defer creating the actual evaluator to first use.
  // Creating a compartment should be possible in no-eval environments
  // It also allows more global constants to be captured by the optimizer
  let evaluate;
  const provideEvaluate = () => {
    if (!evaluate) {
      evaluate = makeEvaluate(evaluateContext);
    }
  };

  /**
   * @param {string} source
   * @param {object} [options]
   * @param {Array<import('./lockdown.js').Transform>} [options.localTransforms]
   */
  const safeEvaluate = (source, options) => {
    const { localTransforms = [] } = options || {};
    provideEvaluate();

    // Execute the mandatory transforms last to ensure that any rewritten code
    // meets those mandatory requirements.
    source = applyTransforms(
      source,
      arrayFlatMap(
        [localTransforms, globalTransforms, [mandatoryTransforms]],
        identity,
      ),
    );

    let err;
    try {
      // Allow next reference to eval produce the unsafe FERAL_EVAL.
      // eslint-disable-next-line @endo/no-polymorphic-call
      evalScopeKit.allowNextEvalToBeUnsafe();

      // Ensure that "this" resolves to the safe global.
      return apply(evaluate, globalObject, [source]);
    } catch (e) {
      // stash the child-code error in hopes of debugging the internal failure
      err = e;
      throw e;
    } finally {
      const unsafeEvalWasStillExposed = 'eval' in evalScope;
      delete evalScope.eval;
      if (unsafeEvalWasStillExposed) {
        // Barring a defect in the SES shim, the evalScope should allow the
        // powerful, unsafe  `eval` to be used by `evaluate` exactly once, as the
        // very first name that it attempts to access from the lexical scope.
        // A defect in the SES shim could throw an exception after we set
        // `evalScope.eval` and before `evaluate` calls `eval` internally.
        // If we get here, SES is very broken.
        // This condition is one where this vat is now hopelessly confused, and
        // the vat as a whole should be aborted.
        // No further code should run.
        // All immediately reachable state should be abandoned.
        // However, that is not yet possible, so we at least prevent further
        // variable resolution via the scopeHandler, and throw an error with
        // diagnostic info including the thrown error if any from evaluating the
        // source code.
        evalScopeKit.revoked = { err };
        // TODO A GOOD PLACE TO PANIC(), i.e., kill the vat incarnation.
        // See https://github.com/Agoric/SES-shim/issues/490
        Fail`handler did not reset allowNextEvalToBeUnsafe ${err}`;
      }
    }
  };

  return { safeEvaluate };
};$h͏_once.makeSafeEvaluator(makeSafeEvaluator);
})()
,
// === 37. ses ./src/tame-function-tostring.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let WeakSet,defineProperty,freeze,functionPrototype,functionToString,stringEndsWith,weaksetAdd,weaksetHas;$h͏_imports([["./commons.js", [["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["functionPrototype",[$h͏_a => (functionPrototype = $h͏_a)]],["functionToString",[$h͏_a => (functionToString = $h͏_a)]],["stringEndsWith",[$h͏_a => (stringEndsWith = $h͏_a)]],["weaksetAdd",[$h͏_a => (weaksetAdd = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]]]]]);










const nativeSuffix = ') { [native code] }';

// Note: Top level mutable state. Does not make anything worse, since the
// patching of `Function.prototype.toString` is also globally stateful. We
// use this top level state so that multiple calls to `tameFunctionToString` are
// idempotent, rather than creating redundant indirections.
let markVirtualizedNativeFunction;

/**
 * Replace `Function.prototype.toString` with one that recognizes
 * shimmed functions as honorary native functions.
 */
       const tameFunctionToString = () => {
  if (markVirtualizedNativeFunction === undefined) {
    const virtualizedNativeFunctions = new WeakSet();

    const tamingMethods = {
      toString() {
        const str = functionToString(this);
        if (
          stringEndsWith(str, nativeSuffix) ||
          !weaksetHas(virtualizedNativeFunctions, this)
        ) {
          return str;
        }
        return `function ${this.name}() { [native code] }`;
      },
    };

    defineProperty(functionPrototype, 'toString', {
      value: tamingMethods.toString,
    });

    markVirtualizedNativeFunction = freeze(func =>
      weaksetAdd(virtualizedNativeFunctions, func),
    );
  }
  return markVirtualizedNativeFunction;
};$h͏_once.tameFunctionToString(tameFunctionToString);
})()
,
// === 38. ses ./src/tame-domains.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError,globalThis,getOwnPropertyDescriptor,defineProperty;$h͏_imports([["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]]]]]);Object.defineProperty(tameDomains,'name',{value:"tameDomains"});$h͏_once.tameDomains(tameDomains);








       function tameDomains(domainTaming = 'safe') {
  if (domainTaming === 'unsafe') {
    return;
  }

  // Protect against the hazard presented by Node.js domains.
  const globalProcess = globalThis.process || undefined;
  if (typeof globalProcess === 'object') {
    // Check whether domains were initialized.
    const domainDescriptor = getOwnPropertyDescriptor(globalProcess, 'domain');
    if (domainDescriptor !== undefined && domainDescriptor.get !== undefined) {
      // The domain descriptor on Node.js initially has value: null, which
      // becomes a get, set pair after domains initialize.
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_NO_DOMAINS.md
      throw TypeError(
        `SES failed to lockdown, Node.js domains have been initialized (SES_NO_DOMAINS)`,
      );
    }
    // Prevent domains from initializing.
    // This is clunky because the exception thrown from the domains package does
    // not direct the user's gaze toward a knowledge base about the problem.
    // The domain module merely throws an exception when it attempts to define
    // the domain property of the process global during its initialization.
    // We have no better recourse because Node.js uses defineProperty too.
    defineProperty(globalProcess, 'domain', {
      value: null,
      configurable: false,
      writable: false,
      enumerable: false,
    });
  }
}
})()
,
// === 39. ses ./src/tame-module-source.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let functionPrototype,getPrototypeOf,globalThis,objectPrototype,setPrototypeOf;$h͏_imports([["./commons.js", [["functionPrototype",[$h͏_a => (functionPrototype = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["objectPrototype",[$h͏_a => (objectPrototype = $h͏_a)]],["setPrototypeOf",[$h͏_a => (setPrototypeOf = $h͏_a)]]]]]);







       const tameModuleSource = () => {
  const newIntrinsics = {};

  const ModuleSource = globalThis.ModuleSource;
  if (ModuleSource !== undefined) {
    newIntrinsics.ModuleSource = ModuleSource;

    // We introduce ModuleSource.[[Proto]] === AbstractModuleSource
    // and ModuleSource.prototype.[[Proto]] === AbstractModuleSource.prototype
    // if that layer is absent because the permitting system can more
    // gracefully tolerate the absence of an expected prototype than the
    // presence of an unexpected prototype,.
    function AbstractModuleSource() {
      // no-op safe to super()
    }

    const ModuleSourceProto = getPrototypeOf(ModuleSource);
    if (ModuleSourceProto === functionPrototype) {
      setPrototypeOf(ModuleSource, AbstractModuleSource);
      newIntrinsics['%AbstractModuleSource%'] = AbstractModuleSource;
      newIntrinsics['%AbstractModuleSourcePrototype%'] =
        AbstractModuleSource.prototype;
    } else {
      newIntrinsics['%AbstractModuleSource%'] = ModuleSourceProto;
      newIntrinsics['%AbstractModuleSourcePrototype%'] =
        ModuleSourceProto.prototype;
    }

    const ModuleSourcePrototype = ModuleSource.prototype;
    if (ModuleSourcePrototype !== undefined) {
      newIntrinsics['%ModuleSourcePrototype%'] = ModuleSourcePrototype;

      // ModuleSource.prototype.__proto__ should be the
      // AbstractModuleSource.prototype.
      const ModuleSourcePrototypeProto = getPrototypeOf(ModuleSourcePrototype);
      if (ModuleSourcePrototypeProto === objectPrototype) {
        setPrototypeOf(ModuleSource.prototype, AbstractModuleSource.prototype);
      }
    }
  }

  return newIntrinsics;
};$h͏_once.tameModuleSource(tameModuleSource);
})()
,
// === 40. ses ./src/error/console.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let WeakSet,arrayFilter,arrayFlatMap,arrayMap,arrayPop,arrayPush,defineProperty,freeze,fromEntries,isError,stringEndsWith,stringIncludes,stringSplit,weaksetAdd,weaksetHas;$h͏_imports([["../commons.js", [["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["arrayFlatMap",[$h͏_a => (arrayFlatMap = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["arrayPop",[$h͏_a => (arrayPop = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["fromEntries",[$h͏_a => (fromEntries = $h͏_a)]],["isError",[$h͏_a => (isError = $h͏_a)]],["stringEndsWith",[$h͏_a => (stringEndsWith = $h͏_a)]],["stringIncludes",[$h͏_a => (stringIncludes = $h͏_a)]],["stringSplit",[$h͏_a => (stringSplit = $h͏_a)]],["weaksetAdd",[$h͏_a => (weaksetAdd = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]]]]]);
























/**
 * @import {FilterConsole, LogSeverity, VirtualConsole} from './types.js'
 * @import {ErrorInfo, ErrorInfoKind, LogRecord, NoteCallback, LoggedErrorHandler, MakeCausalConsole, MakeLoggingConsoleKit} from "./internal-types.js";
 */

/**
 * Explicitly set a function's name, supporting use of arrow functions for which
 * source text doesn't include a name and no initial name is set by
 * NamedEvaluation
 * https://tc39.es/ecma262/multipage/syntax-directed-operations.html#sec-runtime-semantics-namedevaluation
 * Instead, we hope that tooling uses only the explicit `name` property.
 *
 * @template {Function} F
 * @param {string} name
 * @param {F} fn
 * @returns {F}
 */
const defineName = (name, fn) => defineProperty(fn, 'name', { value: name });

// For our internal debugging purposes, uncomment
// const internalDebugConsole = console;

// The permitted console methods, from:
// Whatwg "living standard" https://console.spec.whatwg.org/
// Node https://nodejs.org/dist/latest-v14.x/docs/api/console.html
// MDN https://developer.mozilla.org/en-US/docs/Web/API/Console_API
// TypeScript https://openstapps.gitlab.io/projectmanagement/interfaces/_node_modules__types_node_globals_d_.console.html
// Chrome https://developers.google.com/web/tools/chrome-devtools/console/api

// All console level methods have parameters (fmt?, ...args)
// where the argument sequence `fmt?, ...args` formats args according to
// fmt if fmt is a format string. Otherwise, it just renders them all as values
// separated by spaces.
// https://console.spec.whatwg.org/#formatter
// https://nodejs.org/docs/latest/api/util.html#util_util_format_format_args

// For the causal console, all occurrences of `fmt, ...args` or `...args` by
// itself must check for the presence of an error to ask the
// `loggedErrorHandler` to handle.
// In theory we should do a deep inspection to detect for example an array
// containing an error. We currently do not detect these and may never.

/** @typedef {keyof VirtualConsole | 'profile' | 'profileEnd'} ConsoleProps */

/**
 * Those console methods whose actual parameters are `(fmt?, ...args)`
 * even if their TypeScript types claim otherwise.
 *
 * Each is paired with what we consider to be their log severity level.
 * This is the same as the log severity of these on other
 * platform console implementations when they all agree.
 *
 * @type {readonly [ConsoleProps, LogSeverity | undefined][]}
 */
       const consoleLevelMethods = freeze([
  ['debug', 'debug'], // (fmt?, ...args) verbose level on Chrome
  ['log', 'log'], // (fmt?, ...args) info level on Chrome
  ['info', 'info'], // (fmt?, ...args)
  ['warn', 'warn'], // (fmt?, ...args)
  ['error', 'error'], // (fmt?, ...args)

  ['trace', 'log'], // (fmt?, ...args)
  ['dirxml', 'log'], // (fmt?, ...args)          but TS typed (...data)
  ['group', 'log'], // (fmt?, ...args)           but TS typed (...label)
  ['groupCollapsed', 'log']  // (fmt?, ...args)  but TS typed (...label)
]);

/**
 * Those console methods other than those already enumerated by
 * `consoleLevelMethods`.
 *
 * Each is paired with what we consider to be their log severity level.
 * This is the same as the log severity of these on other
 * platform console implementations when they all agree.
 *
 * @type {readonly [ConsoleProps, LogSeverity | undefined][]}
 */$h͏_once.consoleLevelMethods(consoleLevelMethods);
       const consoleOtherMethods = freeze([
  ['assert', 'error'], // (value, fmt?, ...args)
  ['timeLog', 'log'], // (label?, ...args) no fmt string

  // Insensitive to whether any argument is an error. All arguments can pass
  // thru to baseConsole as is.
  ['clear', undefined], // ()
  ['count', 'info'], // (label?)
  ['countReset', undefined], // (label?)
  ['dir', 'log'], // (item, options?)
  ['groupEnd', 'log'], // ()
  // In theory tabular data may be or contain an error. However, we currently
  // do not detect these and may never.
  ['table', 'log'], // (tabularData, properties?)
  ['time', 'info'], // (label?)
  ['timeEnd', 'info'], // (label?)

  // Node Inspector only, MDN, and TypeScript, but not whatwg
  ['profile', undefined], // (label?)
  ['profileEnd', undefined], // (label?)
  ['timeStamp', undefined]  // (label?)
]);

/** @type {readonly [ConsoleProps, LogSeverity | undefined][]} */$h͏_once.consoleOtherMethods(consoleOtherMethods);
const consoleMethodPermits = freeze([
  ...consoleLevelMethods,
  ...consoleOtherMethods,
]);

/**
 * consoleOmittedProperties is currently unused. I record and maintain it here
 * with the intention that it be treated like the `false` entries in the main
 * SES permits: that seeing these on the original console is expected, but
 * seeing anything else that's outside the permits is surprising and should
 * provide a diagnostic.
 *
 * const consoleOmittedProperties = freeze([
 *   'memory', // Chrome
 *   'exception', // FF, MDN
 *   '_ignoreErrors', // Node
 *   '_stderr', // Node
 *   '_stderrErrorHandler', // Node
 *   '_stdout', // Node
 *   '_stdoutErrorHandler', // Node
 *   '_times', // Node
 *   'context', // Chrome, Node
 *   'record', // Safari
 *   'recordEnd', // Safari
 *
 *   'screenshot', // Safari
 *   // Symbols
 *   '@@toStringTag', // Chrome: "Object", Safari: "Console"
 *   // A variety of other symbols also seen on Node
 * ]);
 */

// //////////////////////////// Logging Console ////////////////////////////////

/** @type {MakeLoggingConsoleKit} */
       const makeLoggingConsoleKit = (
  loggedErrorHandler,
  { shouldResetForDebugging = false } = {},
) => {
  if (shouldResetForDebugging) {
    // eslint-disable-next-line @endo/no-polymorphic-call
    loggedErrorHandler.resetErrorTagNum();
  }

  // Not frozen!
  let logArray = [];

  const loggingConsole = fromEntries(
    arrayMap(consoleMethodPermits, ([name, _]) => {
      /**
       * @param {...any} args
       */
      const method = defineName(name, (...args) => {
        arrayPush(logArray, [name, ...args]);
      });
      return [name, freeze(method)];
    }),
  );
  freeze(loggingConsole);

  const takeLog = () => {
    const result = freeze(logArray);
    logArray = [];
    return result;
  };
  freeze(takeLog);

  const typedLoggingConsole = /** @type {VirtualConsole} */ (loggingConsole);

  return freeze({ loggingConsole: typedLoggingConsole, takeLog });
};$h͏_once.makeLoggingConsoleKit(makeLoggingConsoleKit);
freeze(makeLoggingConsoleKit);

/**
 * Makes the same calls on a `baseConsole` that were made on a
 * `loggingConsole` to produce this `log`. In this way, a logging console
 * can be used as a buffer to delay the application of these calls to a
 * `baseConsole`.
 *
 * @param {LogRecord[]} log
 * @param {VirtualConsole} baseConsole
 */
       const pumpLogToConsole = (log, baseConsole) => {
  for (const [name, ...args] of log) {
    // eslint-disable-next-line @endo/no-polymorphic-call
    baseConsole[name](...args);
  }
};
// //////////////////////////// Causal Console /////////////////////////////////

/** @type {ErrorInfo} */$h͏_once.pumpLogToConsole(pumpLogToConsole);
const ErrorInfo = {
  NOTE: 'ERROR_NOTE:',
  MESSAGE: 'ERROR_MESSAGE:',
  CAUSE: 'cause:',
  ERRORS: 'errors:',
};
freeze(ErrorInfo);

/** @type {MakeCausalConsole} */
       const makeCausalConsole = (baseConsole, loggedErrorHandler) => {
  if (!baseConsole) {
    return undefined;
  }

  const { getStackString, tagError, takeMessageLogArgs, takeNoteLogArgsArray } =
    loggedErrorHandler;

  /**
   * @param {ReadonlyArray<any>} logArgs
   * @param {Array<any>} subErrorsSink
   * @returns {any}
   */
  const extractErrorArgs = (logArgs, subErrorsSink) => {
    const argTags = arrayMap(logArgs, arg => {
      if (isError(arg)) {
        arrayPush(subErrorsSink, arg);
        return `(${tagError(arg)})`;
      }
      return arg;
    });
    return argTags;
  };

  /**
   * @param {LogSeverity} severity
   * @param {Error} error
   * @param {ErrorInfoKind} kind
   * @param {readonly any[]} logArgs
   * @param {Array<Error>} subErrorsSink
   */
  const logErrorInfo = (severity, error, kind, logArgs, subErrorsSink) => {
    const errorTag = tagError(error);
    const errorName =
      kind === ErrorInfo.MESSAGE ? `${errorTag}:` : `${errorTag} ${kind}`;
    const argTags = extractErrorArgs(logArgs, subErrorsSink);
    // eslint-disable-next-line @endo/no-polymorphic-call
    baseConsole[severity](errorName, ...argTags);
  };

  /**
   * Logs the `subErrors` within a group name mentioning `optTag`.
   *
   * @param {LogSeverity} severity
   * @param {Error[]} subErrors
   * @param {string | undefined} optTag
   * @returns {void}
   */
  const logSubErrors = (severity, subErrors, optTag = undefined) => {
    if (subErrors.length === 0) {
      return;
    }
    if (subErrors.length === 1 && optTag === undefined) {
      // eslint-disable-next-line no-use-before-define
      logError(severity, subErrors[0]);
      return;
    }
    let label;
    if (subErrors.length === 1) {
      label = `Nested error`;
    } else {
      label = `Nested ${subErrors.length} errors`;
    }
    if (optTag !== undefined) {
      label = `${label} under ${optTag}`;
    }
    // eslint-disable-next-line @endo/no-polymorphic-call
    baseConsole.group(label);
    try {
      for (const subError of subErrors) {
        // eslint-disable-next-line no-use-before-define
        logError(severity, subError);
      }
    } finally {
      if (baseConsole.groupEnd) {
        // eslint-disable-next-line @endo/no-polymorphic-call
        baseConsole.groupEnd();
      }
    }
  };

  const errorsLogged = new WeakSet();

  /** @type {(severity: LogSeverity) => NoteCallback} */
  const makeNoteCallback = severity => (error, noteLogArgs) => {
    const subErrors = [];
    // Annotation arrived after the error has already been logged,
    // so just log the annotation immediately, rather than remembering it.
    logErrorInfo(severity, error, ErrorInfo.NOTE, noteLogArgs, subErrors);
    logSubErrors(severity, subErrors, tagError(error));
  };

  /**
   * @param {LogSeverity} severity
   * @param {Error} error
   */
  const logError = (severity, error) => {
    if (weaksetHas(errorsLogged, error)) {
      return;
    }
    const errorTag = tagError(error);
    weaksetAdd(errorsLogged, error);
    const subErrors = [];
    const messageLogArgs = takeMessageLogArgs(error);
    const noteLogArgsArray = takeNoteLogArgsArray(
      error,
      makeNoteCallback(severity),
    );
    // Show the error's most informative error message
    if (messageLogArgs === undefined) {
      // If there is no message log args, then just show the message that
      // the error itself carries.
      // eslint-disable-next-line @endo/no-polymorphic-call
      baseConsole[severity](`${errorTag}:`, error.message);
    } else {
      // If there is one, we take it to be strictly more informative than the
      // message string carried by the error, so show it *instead*.
      logErrorInfo(
        severity,
        error,
        ErrorInfo.MESSAGE,
        messageLogArgs,
        subErrors,
      );
    }
    // After the message but before any other annotations, show the stack.
    let stackString = getStackString(error);
    if (
      typeof stackString === 'string' &&
      stackString.length >= 1 &&
      !stringEndsWith(stackString, '\n')
    ) {
      stackString += '\n';
    }
    // eslint-disable-next-line @endo/no-polymorphic-call
    baseConsole[severity](stackString);
    // Show the other annotations on error
    if (error.cause) {
      logErrorInfo(severity, error, ErrorInfo.CAUSE, [error.cause], subErrors);
    }
    // @ts-expect-error AggregateError has an `errors` property.
    if (error.errors) {
      // @ts-expect-error AggregateError has an `errors` property.
      logErrorInfo(severity, error, ErrorInfo.ERRORS, error.errors, subErrors);
    }
    for (const noteLogArgs of noteLogArgsArray) {
      logErrorInfo(severity, error, ErrorInfo.NOTE, noteLogArgs, subErrors);
    }
    // explain all the errors seen in the messages already emitted.
    logSubErrors(severity, subErrors, errorTag);
  };

  const levelMethods = arrayMap(consoleLevelMethods, ([level, _]) => {
    /**
     * @param {...any} logArgs
     */
    const levelMethod = defineName(level, (...logArgs) => {
      const subErrors = [];
      const argTags = extractErrorArgs(logArgs, subErrors);
      if (baseConsole[level]) {
        // eslint-disable-next-line @endo/no-polymorphic-call
        baseConsole[level](...argTags);
      }
      // @ts-expect-error ConsoleProp vs LogSeverity mismatch
      logSubErrors(level, subErrors);
    });
    return [level, freeze(levelMethod)];
  });
  const otherMethodNames = arrayFilter(
    consoleOtherMethods,
    ([name, _]) => name in baseConsole,
  );
  const otherMethods = arrayMap(otherMethodNames, ([name, _]) => {
    /**
     * @param {...any} args
     */
    const otherMethod = defineName(name, (...args) => {
      // @ts-ignore
      // eslint-disable-next-line @endo/no-polymorphic-call
      baseConsole[name](...args);
      return undefined;
    });
    return [name, freeze(otherMethod)];
  });

  const causalConsole = fromEntries([...levelMethods, ...otherMethods]);
  return /** @type {VirtualConsole} */ (freeze(causalConsole));
};$h͏_once.makeCausalConsole(makeCausalConsole);
freeze(makeCausalConsole);

/**
 * @typedef {(...args: unknown[]) => void} Logger
 */

/**
 * This is a rather horrible kludge to indent the output to a logger in
 * the case where some arguments are strings containing newlines. Part of
 * the problem is that console-like loggers, including the one in ava,
 * join the string arguments of the log message with a space.
 * Because of this, there's an extra space at the beginning of each of
 * the split lines. So this kludge compensated by putting an extra empty
 * string at the beginning, so that the logger will add the same extra
 * joiner.
 * TODO: Fix this horrible kludge, and indent in a sane manner.
 *
 * @param {string} str
 * @param {string} sep
 * @param {string[]} indents
 * @returns {string[]}
 */
const indentAfterAllSeps = (str, sep, indents) => {
  const [firstLine, ...restLines] = stringSplit(str, sep);
  const indentedRest = arrayFlatMap(restLines, line => [sep, ...indents, line]);
  return ['', firstLine, ...indentedRest];
};

/**
 * @param {LoggedErrorHandler} loggedErrorHandler
 */
       const defineCausalConsoleFromLogger = loggedErrorHandler => {
  /**
   * Implement the `VirtualConsole` API badly by turning all calls into
   * calls on `tlogger`. We need to do this to have `console` logging
   * turn into calls to Ava's `t.log`, so these console log messages
   * are output in the right place.
   *
   * @param {Logger} tlogger
   * @returns {VirtualConsole}
   */
  const makeCausalConsoleFromLogger = tlogger => {
    const indents = [];
    const logWithIndent = (...args) => {
      if (indents.length > 0) {
        args = arrayFlatMap(args, arg =>
          typeof arg === 'string' && stringIncludes(arg, '\n')
            ? indentAfterAllSeps(arg, '\n', indents)
            : [arg],
        );
        args = [...indents, ...args];
      }
      return tlogger(...args);
    };

    const baseConsole = fromEntries([
      ...arrayMap(consoleLevelMethods, ([name]) => [
        name,
        defineName(name, (...args) => logWithIndent(...args)),
      ]),
      ...arrayMap(consoleOtherMethods, ([name]) => [
        name,
        defineName(name, (...args) => logWithIndent(name, ...args)),
      ]),
    ]);
    // https://console.spec.whatwg.org/#grouping
    for (const name of ['group', 'groupCollapsed']) {
      if (baseConsole[name]) {
        baseConsole[name] = defineName(name, (...args) => {
          if (args.length >= 1) {
            // Prefix the logged data with "group" or "groupCollapsed".
            logWithIndent(...args);
          }
          // A single space is enough;
          // the host console will separate them with additional spaces.
          arrayPush(indents, ' ');
        });
      } else {
        baseConsole[name] = defineName(name, () => {});
      }
    }
    baseConsole.groupEnd = defineName(
      'groupEnd',
      baseConsole.groupEnd
        ? (...args) => {
            arrayPop(indents);
          }
        : () => {},
    );
    harden(baseConsole);
    const causalConsole = makeCausalConsole(
      /** @type {VirtualConsole} */ (baseConsole),
      loggedErrorHandler,
    );
    return /** @type {VirtualConsole} */ (causalConsole);
  };
  return freeze(makeCausalConsoleFromLogger);
};$h͏_once.defineCausalConsoleFromLogger(defineCausalConsoleFromLogger);
freeze(defineCausalConsoleFromLogger);

// ///////////////////////// Filter Console ////////////////////////////////////

/** @type {FilterConsole} */
       const filterConsole = (baseConsole, filter, _topic = undefined) => {
  // TODO do something with optional topic string
  const methodPermits = arrayFilter(
    consoleMethodPermits,
    ([name, _]) => name in baseConsole,
  );
  const methods = arrayMap(methodPermits, ([name, severity]) => {
    /**
     * @param {...any} args
     */
    const method = defineName(name, (...args) => {
      // eslint-disable-next-line @endo/no-polymorphic-call
      if (severity === undefined || filter.canLog(severity)) {
        // @ts-ignore
        // eslint-disable-next-line @endo/no-polymorphic-call
        baseConsole[name](...args);
      }
    });
    return [name, freeze(method)];
  });
  const filteringConsole = fromEntries(methods);
  return /** @type {VirtualConsole} */ (freeze(filteringConsole));
};$h͏_once.filterConsole(filterConsole);
freeze(filterConsole);
})()
,
// === 41. ses ./src/error/unhandled-rejection.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FinalizationRegistry,Map,mapGet,mapDelete,WeakMap,mapSet,finalizationRegistryRegister,weakmapSet,weakmapGet,mapEntries,mapHas;$h͏_imports([["../commons.js", [["FinalizationRegistry",[$h͏_a => (FinalizationRegistry = $h͏_a)]],["Map",[$h͏_a => (Map = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["mapDelete",[$h͏_a => (mapDelete = $h͏_a)]],["WeakMap",[$h͏_a => (WeakMap = $h͏_a)]],["mapSet",[$h͏_a => (mapSet = $h͏_a)]],["finalizationRegistryRegister",[$h͏_a => (finalizationRegistryRegister = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["mapEntries",[$h͏_a => (mapEntries = $h͏_a)]],["mapHas",[$h͏_a => (mapHas = $h͏_a)]]]]]);














/**
 * Create rejection-tracking machinery compatible with Node.js and browsers.
 *
 * Note that modern browsers *prevent* access to the 'unhandledrejection' and
 * 'rejectionhandled' events needed:
 * - in cross-origin mode, like when served from file://
 * - in the browser console (interactively typed-in code)
 * - in the debugger
 *
 * Then, they just look like: `Uncaught (in promise) Error: ...` and don't
 * implement the machinery.
 *
 * The solution is to serve your web page from an http:// or https:// web server
 * and execute actual code.
 *
 * @param {(reason: unknown) => void} reportReason report the reason for an
 * unhandled rejection.
 */
       const makeRejectionHandlers = reportReason => {
  if (FinalizationRegistry === undefined) {
    return undefined;
  }

  /** @typedef {number} ReasonId */
  let lastReasonId = 0;

  /** @type {Map<ReasonId, unknown>} */
  const idToReason = new Map();

  /** @type {(() => void) | undefined} */
  let cancelChecking;

  const removeReasonId = reasonId => {
    mapDelete(idToReason, reasonId);
    if (cancelChecking && idToReason.size === 0) {
      // No more unhandled rejections to check, just cancel the check.
      cancelChecking();
      cancelChecking = undefined;
    }
  };

  /** @type {WeakMap<Promise, ReasonId>} */
  const promiseToReasonId = new WeakMap();

  /**
   * Clean up and report the reason for a GCed unhandled rejection.
   *
   * @param {ReasonId} heldReasonId
   */
  const finalizeDroppedPromise = heldReasonId => {
    if (mapHas(idToReason, heldReasonId)) {
      const reason = mapGet(idToReason, heldReasonId);
      removeReasonId(heldReasonId);
      reportReason(reason);
    }
  };

  /** @type {FinalizationRegistry<ReasonId>} */
  const promiseToReason = new FinalizationRegistry(finalizeDroppedPromise);

  /**
   * Track a rejected promise and its corresponding reason if there is no
   * rejection handler synchronously attached.
   *
   * @param {unknown} reason
   * @param {Promise} pr
   */
  const unhandledRejectionHandler = (reason, pr) => {
    lastReasonId += 1;
    const reasonId = lastReasonId;

    // Update bookkeeping.
    mapSet(idToReason, reasonId, reason);
    weakmapSet(promiseToReasonId, pr, reasonId);
    finalizationRegistryRegister(promiseToReason, pr, reasonId, pr);
  };

  /**
   * Deal with the addition of a handler to a previously rejected promise.
   *
   * Just remove it from our list.  Let the FinalizationRegistry or
   * processTermination report any GCed unhandled rejected promises.
   *
   * @param {Promise} pr
   */
  const rejectionHandledHandler = pr => {
    const reasonId = weakmapGet(promiseToReasonId, pr);
    removeReasonId(reasonId);
  };

  /**
   * Report all the unhandled rejections, now that we are abruptly terminating
   * the agent cluster.
   */
  const processTerminationHandler = () => {
    for (const [reasonId, reason] of mapEntries(idToReason)) {
      removeReasonId(reasonId);
      reportReason(reason);
    }
  };

  return {
    rejectionHandledHandler,
    unhandledRejectionHandler,
    processTerminationHandler,
  };
};$h͏_once.makeRejectionHandlers(makeRejectionHandlers);
})()
,
// === 42. ses ./src/error/tame-console.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError,apply,defineProperty,freeze,globalThis,defaultHandler,makeCausalConsole,makeRejectionHandlers;$h͏_imports([["../commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./assert.js", [["loggedErrorHandler",[$h͏_a => (defaultHandler = $h͏_a)]]]],["./console.js", [["makeCausalConsole",[$h͏_a => (makeCausalConsole = $h͏_a)]]]],["./unhandled-rejection.js", [["makeRejectionHandlers",[$h͏_a => (makeRejectionHandlers = $h͏_a)]]]]]);













/**
 * @import {VirtualConsole} from './types.js'
 * @import {GetStackString} from './internal-types.js';
 */

const failFast = message => {
  throw TypeError(message);
};

const wrapLogger = (logger, thisArg) =>
  freeze((...args) => apply(logger, thisArg, args));

/**
 * Wrap console unless suppressed.
 * At the moment, the console is considered a host power in the start
 * compartment, and not a primordial. Hence it is absent from the whilelist
 * and bypasses the intrinsicsCollector.
 *
 * @param {"safe" | "unsafe"} consoleTaming
 * @param {"platform" | "exit" | "abort" | "report" | "none"} [errorTrapping]
 * @param {"report" | "none"} [unhandledRejectionTrapping]
 * @param {GetStackString=} optGetStackString
 */
       const tameConsole = (
  consoleTaming = 'safe',
  errorTrapping = 'platform',
  unhandledRejectionTrapping = 'report',
  optGetStackString = undefined,
) => {
  let loggedErrorHandler;
  if (optGetStackString === undefined) {
    loggedErrorHandler = defaultHandler;
  } else {
    loggedErrorHandler = {
      ...defaultHandler,
      getStackString: optGetStackString,
    };
  }

  // eslint-disable-next-line no-restricted-globals
  const originalConsole = /** @type {VirtualConsole} */ (
    // eslint-disable-next-line no-nested-ternary
    typeof globalThis.console !== 'undefined'
      ? globalThis.console
      : typeof globalThis.print === 'function'
        ? // Make a good-enough console for eshost (including only functions that
          // log at a specific level with no special argument interpretation).
          // https://console.spec.whatwg.org/#logging
          (p => freeze({ debug: p, log: p, info: p, warn: p, error: p }))(
            // eslint-disable-next-line no-undef
            wrapLogger(globalThis.print),
          )
        : undefined
  );

  // Upgrade a log-only console (as in `eshost -h SpiderMonkey`).
  if (originalConsole && originalConsole.log) {
    for (const methodName of ['warn', 'error']) {
      if (!originalConsole[methodName]) {
        defineProperty(originalConsole, methodName, {
          value: wrapLogger(originalConsole.log, originalConsole),
        });
      }
    }
  }

  const ourConsole = /** @type {VirtualConsole} */ (
    consoleTaming === 'unsafe'
      ? originalConsole
      : makeCausalConsole(originalConsole, loggedErrorHandler)
  );

  // Attach platform-specific error traps such that any error that gets thrown
  // at top-of-turn (the bottom of stack) will get logged by our causal
  // console, revealing the diagnostic information associated with the error,
  // including the stack from when the error was created.

  // In the following Node.js and web browser cases, `process` and `window` are
  // spelled as `globalThis` properties to avoid the overweaning gaze of
  // Parcel, which dutifully installs an unnecessary `process` shim if we ever
  // utter that. That unnecessary shim forces the whole bundle into sloppy mode,
  // which in turn breaks SES's strict mode invariant.

  // Disable the polymorphic check for the rest of this file.  It's too noisy
  // when dealing with platform APIs.
  /* eslint-disable @endo/no-polymorphic-call */

  // Node.js
  const globalProcess = globalThis.process || undefined;
  if (
    errorTrapping !== 'none' &&
    typeof globalProcess === 'object' &&
    typeof globalProcess.on === 'function'
  ) {
    let terminate;
    if (errorTrapping === 'platform' || errorTrapping === 'exit') {
      const { exit } = globalProcess;
      // If there is a function-valued process.on but no function-valued process.exit,
      // fail early without caring whether errorTrapping is "platform" only by default.
      typeof exit === 'function' || failFast('missing process.exit');
      terminate = () => exit(globalProcess.exitCode || -1);
    } else if (errorTrapping === 'abort') {
      terminate = globalProcess.abort;
      typeof terminate === 'function' || failFast('missing process.abort');
    }

    globalProcess.on('uncaughtException', error => {
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNCAUGHT_EXCEPTION.md
      ourConsole.error('SES_UNCAUGHT_EXCEPTION:', error);
      if (terminate) {
        terminate();
      }
    });
  }
  if (
    unhandledRejectionTrapping !== 'none' &&
    typeof globalProcess === 'object' &&
    typeof globalProcess.on === 'function'
  ) {
    const handleRejection = reason => {
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNHANDLED_REJECTION.md
      ourConsole.error('SES_UNHANDLED_REJECTION:', reason);
      // 'platform' and 'report' just log the reason.
    };
    // Maybe track unhandled promise rejections.
    const h = makeRejectionHandlers(handleRejection);
    if (h) {
      // Rejection handlers are supported.
      globalProcess.on('unhandledRejection', h.unhandledRejectionHandler);
      globalProcess.on('rejectionHandled', h.rejectionHandledHandler);
      globalProcess.on('exit', h.processTerminationHandler);
    }
  }

  // Browser
  const globalWindow = globalThis.window || undefined;
  if (
    errorTrapping !== 'none' &&
    typeof globalWindow === 'object' &&
    typeof globalWindow.addEventListener === 'function'
  ) {
    globalWindow.addEventListener('error', event => {
      event.preventDefault();
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNCAUGHT_EXCEPTION.md
      ourConsole.error('SES_UNCAUGHT_EXCEPTION:', event.error);
      // 'platform' and 'report' just log the reason.
      if (errorTrapping === 'exit' || errorTrapping === 'abort') {
        globalWindow.location.href = `about:blank`;
      }
    });
  }
  if (
    unhandledRejectionTrapping !== 'none' &&
    typeof globalWindow === 'object' &&
    typeof globalWindow.addEventListener === 'function'
  ) {
    const handleRejection = reason => {
      // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_UNHANDLED_REJECTION.md
      ourConsole.error('SES_UNHANDLED_REJECTION:', reason);
    };

    const h = makeRejectionHandlers(handleRejection);
    if (h) {
      // Rejection handlers are supported.
      globalWindow.addEventListener('unhandledrejection', event => {
        event.preventDefault();
        h.unhandledRejectionHandler(event.reason, event.promise);
      });

      globalWindow.addEventListener('rejectionhandled', event => {
        event.preventDefault();
        h.rejectionHandledHandler(event.promise);
      });

      globalWindow.addEventListener('beforeunload', _event => {
        h.processTerminationHandler();
      });
    }
  }
  /* eslint-enable @endo/no-polymorphic-call */

  return { console: ourConsole };
};$h͏_once.tameConsole(tameConsole);
})()
,
// === 43. ses ./src/error/tame-v8-error-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let WeakMap,WeakSet,apply,arrayFilter,arrayJoin,arrayMap,arraySlice,create,defineProperties,fromEntries,reflectSet,regexpExec,regexpTest,weakmapGet,weakmapSet,weaksetAdd,weaksetHas,TypeError;$h͏_imports([["../commons.js", [["WeakMap",[$h͏_a => (WeakMap = $h͏_a)]],["WeakSet",[$h͏_a => (WeakSet = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["arraySlice",[$h͏_a => (arraySlice = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["fromEntries",[$h͏_a => (fromEntries = $h͏_a)]],["reflectSet",[$h͏_a => (reflectSet = $h͏_a)]],["regexpExec",[$h͏_a => (regexpExec = $h͏_a)]],["regexpTest",[$h͏_a => (regexpTest = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]],["weaksetAdd",[$h͏_a => (weaksetAdd = $h͏_a)]],["weaksetHas",[$h͏_a => (weaksetHas = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]]]]]);




















// Permit names from https://v8.dev/docs/stack-trace-api
// Permiting only the names used by error-stack-shim/src/v8StackFrames
// callSiteToFrame to shim the error stack proposal.
const safeV8CallSiteMethodNames = [
  // suppress 'getThis' definitely
  'getTypeName',
  // suppress 'getFunction' definitely
  'getFunctionName',
  'getMethodName',
  'getFileName',
  'getLineNumber',
  'getColumnNumber',
  'getEvalOrigin',
  'isToplevel',
  'isEval',
  'isNative',
  'isConstructor',
  'isAsync',
  // suppress 'isPromiseAll' for now
  // suppress 'getPromiseIndex' for now

  // Additional names found by experiment, absent from
  // https://v8.dev/docs/stack-trace-api
  'getPosition',
  'getScriptNameOrSourceURL',

  'toString'  // TODO replace to use only permitted info
];

// TODO this is a ridiculously expensive way to attenuate callsites.
// Before that matters, we should switch to a reasonable representation.
const safeV8CallSiteFacet = callSite => {
  const methodEntry = name => {
    const method = callSite[name];
    return [name, () => apply(method, callSite, [])];
  };
  const o = fromEntries(arrayMap(safeV8CallSiteMethodNames, methodEntry));
  return create(o, {});
};

const safeV8SST = sst => arrayMap(sst, safeV8CallSiteFacet);

// If it has `/node_modules/` anywhere in it, on Node it is likely
// to be a dependent package of the current package, and so to
// be an infrastructure frame to be dropped from concise stack traces.
const FILENAME_NODE_DEPENDENTS_CENSOR = /\/node_modules\//;

// If it begins with `internal/` or `node:internal` then it is likely
// part of the node infrustructre itself, to be dropped from concise
// stack traces.
const FILENAME_NODE_INTERNALS_CENSOR = /^(?:node:)?internal\//;

// Frames within SES `assert.js` should be dropped from concise stack traces, as
// these are just steps towards creating the error object in question.
const FILENAME_ASSERT_CENSOR = /\/packages\/ses\/src\/error\/assert\.js$/;

// Frames within the `eventual-send` shim should be dropped so that concise
// deep stacks omit the internals of the eventual-sending mechanism causing
// asynchronous messages to be sent.
// Note that the eventual-send package will move from agoric-sdk to
// Endo, so this rule will be of general interest.
const FILENAME_EVENTUAL_SEND_CENSOR = /\/packages\/eventual-send\/src\//;

// Frames within the `ses-ava` package should be dropped from concise stack
// traces, as they just support exposing error details to AVA.
const FILENAME_SES_AVA_CENSOR = /\/packages\/ses-ava\/src\/ses-ava-test\.js$/;

// Any stack frame whose `fileName` matches any of these censor patterns
// will be omitted from concise stacks.
// TODO Enable users to configure FILENAME_CENSORS via `lockdown` options.
const FILENAME_CENSORS = [
  FILENAME_NODE_DEPENDENTS_CENSOR,
  FILENAME_NODE_INTERNALS_CENSOR,
  FILENAME_ASSERT_CENSOR,
  FILENAME_EVENTUAL_SEND_CENSOR,
  FILENAME_SES_AVA_CENSOR,
];

// Should a stack frame with this as its fileName be included in a concise
// stack trace?
// Exported only so it can be unit tested.
// TODO Move so that it applies not just to v8.
       const filterFileName = fileName => {
  if (!fileName) {
    // Stack frames with no fileName should appear in concise stack traces.
    return true;
  }
  for (const filter of FILENAME_CENSORS) {
    if (regexpTest(filter, fileName)) {
      return false;
    }
  }
  return true;
};

// The ad-hoc rule of the current pattern is that any likely-file-path or
// likely url-path prefix, ending in a `/.../` should get dropped.
// Anything to the left of the likely path text is kept.
// Everything to the right of `/.../` is kept. Thus
// `'Object.bar (/vat-v1/.../eventual-send/test/deep-send.test.js:13:21)'`
// simplifies to
// `'Object.bar (eventual-send/test/deep-send.test.js:13:21)'`.
//
// See thread starting at
// https://github.com/Agoric/agoric-sdk/issues/2326#issuecomment-773020389
$h͏_once.filterFileName(filterFileName);const CALLSITE_ELLIPSIS_PATTERN1=/^((?:.*[( ])?)[:/\w_-]*\/\.\.\.\/(.+)$/;

// The ad-hoc rule of the current pattern is that any likely-file-path or
// likely url-path prefix consisting of `.../` should get dropped.
// Anything to the left of the likely path text is kept.
// Everything to the right of `.../` is kept. Thus
// `'Object.bar (.../eventual-send/test/deep-send.test.js:13:21)'`
// simplifies to
// `'Object.bar (eventual-send/test/deep-send.test.js:13:21)'`.
//
// See thread starting at
// https://github.com/Agoric/agoric-sdk/issues/2326#issuecomment-773020389
const CALLSITE_ELLIPSIS_PATTERN2 = /^((?:.*[( ])?)\.\.\.\/(.+)$/;

// The ad-hoc rule of the current pattern is that any likely-file-path or
// likely url-path prefix, ending in a `/` and prior to `package/` should get
// dropped.
// Anything to the left of the likely path prefix text is kept. `package/` and
// everything to its right is kept. Thus
// `'Object.bar (/Users/markmiller/src/ongithub/agoric/agoric-sdk/packages/eventual-send/test/deep-send.test.js:13:21)'`
// simplifies to
// `'Object.bar (packages/eventual-send/test/deep-send.test.js:13:21)'`.
// Note that `/packages/` is a convention for monorepos encouraged by
// lerna.
const CALLSITE_PACKAGES_PATTERN = /^((?:.*[( ])?)[:/\w_-]*\/(packages\/.+)$/;

// The ad-hoc rule of the current pattern is that any likely-file-path or
// likely url-path prefix of the form `file://` but not `file:///` gets
// dropped.
// Anything to the left of the likely path prefix text is kept. Everything to
// the right of `file://` is kept. Thus
// `'Object.bar (file:///Users/markmiller/src/ongithub/endojs/endo/packages/eventual-send/test/deep-send.test.js:13:21)'` is unchanged but
// `'Object.bar (file://test/deep-send.test.js:13:21)'`

// simplifies to
// `'Object.bar (test/deep-send.test.js:13:21)'`.
// The reason is that `file:///` usually precedes an absolute path which is
// clickable without removing the `file:///`, whereas `file://` usually precedes
// a relative path which, for whatever vscode reason, is not clickable until the
// `file://` is removed.
const CALLSITE_FILE_2SLASH_PATTERN = /^((?:.*[( ])?)file:\/\/([^/].*)$/;

// The use of these callSite patterns below assumes that any match will bind
// capture groups containing the parts of the original string we want
// to keep. The parts outside those capture groups will be dropped from concise
// stacks.
// TODO Enable users to configure CALLSITE_PATTERNS via `lockdown` options.
const CALLSITE_PATTERNS = [
  CALLSITE_ELLIPSIS_PATTERN1,
  CALLSITE_ELLIPSIS_PATTERN2,
  CALLSITE_PACKAGES_PATTERN,
  CALLSITE_FILE_2SLASH_PATTERN,
];

// For a stack frame that should be included in a concise stack trace, if
// `callSiteString` is the original stringified stack frame, return the
// possibly-shorter stringified stack frame that should be shown instead.
// Exported only so it can be unit tested.
// TODO Move so that it applies not just to v8.
/**
 * @param {string} callSiteString
 */
       const shortenCallSiteString = callSiteString => {
  for (const filter of CALLSITE_PATTERNS) {
    const match = regexpExec(filter, callSiteString);
    if (match) {
      return arrayJoin(arraySlice(match, 1), '');
    }
  }
  return callSiteString;
};$h͏_once.shortenCallSiteString(shortenCallSiteString);

       const tameV8ErrorConstructor = (
  OriginalError,
  InitialError,
  errorTaming,
  stackFiltering,
) => {
  if (errorTaming === 'unsafe-debug') {
    throw TypeError(
      'internal: v8+unsafe-debug special case should already be done',
    );
  }
  // TODO: Proper CallSite types
  /** @typedef {{}} CallSite */

  const originalCaptureStackTrace = OriginalError.captureStackTrace;

  const omitFrames =
    stackFiltering === 'concise' || stackFiltering === 'omit-frames';

  const shortenPaths =
    stackFiltering === 'concise' || stackFiltering === 'shorten-paths';

  // const callSiteFilter = _callSite => true;
  const callSiteFilter = callSite => {
    if (omitFrames) {
      // eslint-disable-next-line @endo/no-polymorphic-call
      return filterFileName(callSite.getFileName());
    }
    return true;
  };

  const callSiteStringifier = callSite => {
    let callSiteString = `${callSite}`;
    if (shortenPaths) {
      callSiteString = shortenCallSiteString(callSiteString);
    }
    return `\n  at ${callSiteString}`;
  };

  const stackStringFromSST = (_error, sst) =>
    arrayJoin(
      arrayMap(arrayFilter(sst, callSiteFilter), callSiteStringifier),
      '',
    );

  /**
   * @typedef {object} StructuredStackInfo
   * @property {CallSite[]} callSites
   * @property {undefined} [stackString]
   */

  /**
   * @typedef {object} ParsedStackInfo
   * @property {undefined} [callSites]
   * @property {string} stackString
   */

  // Mapping from error instance to the stack for that instance.
  // The stack info is either the structured stack trace
  // or the generated tamed stack string
  /** @type {WeakMap<Error, ParsedStackInfo | StructuredStackInfo>} */
  const stackInfos = new WeakMap();

  // Use concise methods to obtain named functions without constructors.
  const tamedMethods = {
    // The optional `optFn` argument is for cutting off the bottom of
    // the stack --- for capturing the stack only above the topmost
    // call to that function. Since this isn't the "real" captureStackTrace
    // but instead calls the real one, if no other cutoff is provided,
    // we cut this one off.
    captureStackTrace(error, optFn = tamedMethods.captureStackTrace) {
      if (typeof originalCaptureStackTrace === 'function') {
        // OriginalError.captureStackTrace is only on v8
        apply(originalCaptureStackTrace, OriginalError, [error, optFn]);
        return;
      }
      reflectSet(error, 'stack', '');
    },
    // Shim of proposed special power, to reside by default only
    // in the start compartment, for getting the stack traceback
    // string associated with an error.
    // See https://tc39.es/proposal-error-stacks/
    getStackString(error) {
      let stackInfo = weakmapGet(stackInfos, error);

      if (stackInfo === undefined) {
        // The following will call `prepareStackTrace()` synchronously
        // which will populate stackInfos
        // eslint-disable-next-line no-void
        void error.stack;
        stackInfo = weakmapGet(stackInfos, error);
        if (!stackInfo) {
          stackInfo = { stackString: '' };
          weakmapSet(stackInfos, error, stackInfo);
        }
      }

      // prepareStackTrace() may generate the stackString
      // if errorTaming === 'unsafe'

      if (stackInfo.stackString !== undefined) {
        return stackInfo.stackString;
      }

      const stackString = stackStringFromSST(error, stackInfo.callSites);
      weakmapSet(stackInfos, error, { stackString });

      return stackString;
    },
    prepareStackTrace(error, sst) {
      if (errorTaming === 'unsafe') {
        const stackString = stackStringFromSST(error, sst);
        weakmapSet(stackInfos, error, { stackString });
        return `${error}${stackString}`;
      } else {
        weakmapSet(stackInfos, error, { callSites: sst });
        return '';
      }
    },
  };

  // A prepareFn is a prepareStackTrace function.
  // An sst is a `structuredStackTrace`, which is an array of
  // callsites.
  // A user prepareFn is a prepareFn defined by a client of this API,
  // and provided by assigning to `Error.prepareStackTrace`.
  // A user prepareFn should only receive an attenuated sst, which
  // is an array of attenuated callsites.
  // A system prepareFn is the prepareFn created by this module to
  // be installed on the real `Error` constructor, to receive
  // an original sst, i.e., an array of unattenuated callsites.
  // An input prepareFn is a function the user assigns to
  // `Error.prepareStackTrace`, which might be a user prepareFn or
  // a system prepareFn previously obtained by reading
  // `Error.prepareStackTrace`.

  const defaultPrepareFn = tamedMethods.prepareStackTrace;

  OriginalError.prepareStackTrace = defaultPrepareFn;

  // A weakset branding some functions as system prepareFns, all of which
  // must be defined by this module, since they can receive an
  // unattenuated sst.
  const systemPrepareFnSet = new WeakSet([defaultPrepareFn]);

  const systemPrepareFnFor = inputPrepareFn => {
    if (weaksetHas(systemPrepareFnSet, inputPrepareFn)) {
      return inputPrepareFn;
    }
    // Use concise methods to obtain named functions without constructors.
    const systemMethods = {
      prepareStackTrace(error, sst) {
        weakmapSet(stackInfos, error, { callSites: sst });
        return inputPrepareFn(error, safeV8SST(sst));
      },
    };
    weaksetAdd(systemPrepareFnSet, systemMethods.prepareStackTrace);
    return systemMethods.prepareStackTrace;
  };

  // Note `stackTraceLimit` accessor already defined by
  // tame-error-constructor.js
  defineProperties(InitialError, {
    captureStackTrace: {
      value: tamedMethods.captureStackTrace,
      writable: true,
      enumerable: false,
      configurable: true,
    },
    prepareStackTrace: {
      get() {
        return OriginalError.prepareStackTrace;
      },
      set(inputPrepareStackTraceFn) {
        if (typeof inputPrepareStackTraceFn === 'function') {
          const systemPrepareFn = systemPrepareFnFor(inputPrepareStackTraceFn);
          OriginalError.prepareStackTrace = systemPrepareFn;
        } else {
          OriginalError.prepareStackTrace = defaultPrepareFn;
        }
      },
      enumerable: false,
      configurable: true,
    },
  });

  return tamedMethods.getStackString;
};$h͏_once.tameV8ErrorConstructor(tameV8ErrorConstructor);
})()
,
// === 44. ses ./src/error/tame-error-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_ERROR,apply,construct,defineProperties,setPrototypeOf,getOwnPropertyDescriptor,defineProperty,getOwnPropertyDescriptors,NativeErrors,tameV8ErrorConstructor;$h͏_imports([["../commons.js", [["FERAL_ERROR",[$h͏_a => (FERAL_ERROR = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["construct",[$h͏_a => (construct = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["setPrototypeOf",[$h͏_a => (setPrototypeOf = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]]]],["../permits.js", [["NativeErrors",[$h͏_a => (NativeErrors = $h͏_a)]]]],["./tame-v8-error-constructor.js", [["tameV8ErrorConstructor",[$h͏_a => (tameV8ErrorConstructor = $h͏_a)]]]]]);












// Present on at least FF and XS. Proposed by Error-proposal. The original
// is dangerous, so tameErrorConstructor replaces it with a safe one.
// We grab the original here before it gets replaced.
const stackDesc = getOwnPropertyDescriptor(FERAL_ERROR.prototype, 'stack');
const stackGetter = stackDesc && stackDesc.get;

// Use concise methods to obtain named functions without constructors.
const tamedMethods = {
  getStackString(error) {
    if (typeof stackGetter === 'function') {
      return apply(stackGetter, error, []);
    } else if ('stack' in error) {
      // The fallback is to just use the de facto `error.stack` if present
      return `${error.stack}`;
    }
    return '';
  },
};
let initialGetStackString = tamedMethods.getStackString;

               function tameErrorConstructor(
  errorTaming = 'safe',
  stackFiltering = 'concise',
) {
  const ErrorPrototype = FERAL_ERROR.prototype;

  const { captureStackTrace: originalCaptureStackTrace } = FERAL_ERROR;
  const platform =
    typeof originalCaptureStackTrace === 'function' ? 'v8' : 'unknown';

  const makeErrorConstructor = (_ = {}) => {
    // eslint-disable-next-line no-shadow
    const ResultError = function Error(...rest) {
      let error;
      if (new.target === undefined) {
        error = apply(FERAL_ERROR, this, rest);
      } else {
        error = construct(FERAL_ERROR, rest, new.target);
      }
      if (platform === 'v8') {
        // TODO Likely expensive!
        apply(originalCaptureStackTrace, FERAL_ERROR, [error, ResultError]);
      }
      return error;
    };
    defineProperties(ResultError, {
      length: { value: 1 },
      prototype: {
        value: ErrorPrototype,
        writable: false,
        enumerable: false,
        configurable: false,
      },
    });
    return ResultError;
  };
  const InitialError = makeErrorConstructor({ powers: 'original' });
  const SharedError = makeErrorConstructor({ powers: 'none' });
  defineProperties(ErrorPrototype, {
    constructor: { value: SharedError },
  });

  for (const NativeError of NativeErrors) {
    setPrototypeOf(NativeError, SharedError);
  }

  // https://v8.dev/docs/stack-trace-api#compatibility advises that
  // programmers can "always" set `Error.stackTraceLimit`
  // even on non-v8 platforms. On non-v8
  // it will have no effect, but this advice only makes sense
  // if the assignment itself does not fail, which it would
  // if `Error` were naively frozen. Hence, we add setters that
  // accept but ignore the assignment on non-v8 platforms.
  defineProperties(InitialError, {
    stackTraceLimit: {
      get() {
        if (typeof FERAL_ERROR.stackTraceLimit === 'number') {
          // FERAL_ERROR.stackTraceLimit is only on v8
          return FERAL_ERROR.stackTraceLimit;
        }
        return undefined;
      },
      set(newLimit) {
        if (typeof newLimit !== 'number') {
          // silently do nothing. This behavior doesn't precisely
          // emulate v8 edge-case behavior. But given the purpose
          // of this emulation, having edge cases err towards
          // harmless seems the safer option.
          return;
        }
        if (typeof FERAL_ERROR.stackTraceLimit === 'number') {
          // FERAL_ERROR.stackTraceLimit is only on v8
          FERAL_ERROR.stackTraceLimit = newLimit;
          // We place the useless return on the next line to ensure
          // that anything we place after the if in the future only
          // happens if the then-case does not.
          // eslint-disable-next-line no-useless-return
          return;
        }
      },
      // WTF on v8 stackTraceLimit is enumerable
      enumerable: false,
      configurable: true,
    },
  });

  if (errorTaming === 'unsafe-debug' && platform === 'v8') {
    // This case is a kludge to work around
    // https://github.com/endojs/endo/issues/1798
    // https://github.com/endojs/endo/issues/2348
    // https://github.com/Agoric/agoric-sdk/issues/8662

    defineProperties(InitialError, {
      prepareStackTrace: {
        get() {
          return FERAL_ERROR.prepareStackTrace;
        },
        set(newPrepareStackTrace) {
          FERAL_ERROR.prepareStackTrace = newPrepareStackTrace;
        },
        enumerable: false,
        configurable: true,
      },
      captureStackTrace: {
        value: FERAL_ERROR.captureStackTrace,
        writable: true,
        enumerable: false,
        configurable: true,
      },
    });

    const descs = getOwnPropertyDescriptors(InitialError);
    defineProperties(SharedError, {
      stackTraceLimit: descs.stackTraceLimit,
      prepareStackTrace: descs.prepareStackTrace,
      captureStackTrace: descs.captureStackTrace,
    });

    return {
      '%InitialGetStackString%': initialGetStackString,
      '%InitialError%': InitialError,
      '%SharedError%': SharedError,
    };
  }

  // The default SharedError much be completely powerless even on v8,
  // so the lenient `stackTraceLimit` accessor does nothing on all
  // platforms.
  defineProperties(SharedError, {
    stackTraceLimit: {
      get() {
        return undefined;
      },
      set(_newLimit) {
        // do nothing
      },
      enumerable: false,
      configurable: true,
    },
  });

  if (platform === 'v8') {
    // `SharedError.prepareStackTrace`, if it exists, must also be
    // powerless. However, from what we've heard, depd expects to be able to
    // assign to it without the assignment throwing. It is normally a function
    // that returns a stack string to be magically added to error objects.
    // However, as long as we're adding a lenient standin, we may as well
    // accommodate any who expect to get a function they can call and get
    // a string back. This prepareStackTrace is a do-nothing function that
    // always returns the empty string.
    defineProperties(SharedError, {
      prepareStackTrace: {
        get() {
          return () => '';
        },
        set(_prepareFn) {
          // do nothing
        },
        enumerable: false,
        configurable: true,
      },
      captureStackTrace: {
        value: (errorish, _constructorOpt) => {
          defineProperty(errorish, 'stack', {
            value: '',
          });
        },
        writable: false,
        enumerable: false,
        configurable: true,
      },
    });
  }

  if (platform === 'v8') {
    initialGetStackString = tameV8ErrorConstructor(
      FERAL_ERROR,
      InitialError,
      errorTaming,
      stackFiltering,
    );
  } else if (errorTaming === 'unsafe' || errorTaming === 'unsafe-debug') {
    // v8 has too much magic around their 'stack' own property for it to
    // coexist cleanly with this accessor. So only install it on non-v8

    // Error.prototype.stack property as proposed at
    // https://tc39.es/proposal-error-stacks/
    // with the fix proposed at
    // https://github.com/tc39/proposal-error-stacks/issues/46
    // On others, this still protects from the override mistake,
    // essentially like enable-property-overrides.js would
    // once this accessor property itself is frozen, as will happen
    // later during lockdown.
    //
    // However, there is here a change from the intent in the current
    // state of the proposal. If experience tells us whether this change
    // is a good idea, we should modify the proposal accordingly. There is
    // much code in the world that assumes `error.stack` is a string. So
    // where the proposal accommodates secure operation by making the
    // property optional, we instead accommodate secure operation by
    // having the secure form always return only the stable part, the
    // stringified error instance, and omitting all the frame information
    // rather than omitting the property.
    defineProperties(ErrorPrototype, {
      stack: {
        get() {
          return initialGetStackString(this);
        },
        set(newValue) {
          defineProperties(this, {
            stack: {
              value: newValue,
              writable: true,
              enumerable: true,
              configurable: true,
            },
          });
        },
      },
    });
  } else {
    // v8 has too much magic around their 'stack' own property for it to
    // coexist cleanly with this accessor. So only install it on non-v8
    defineProperties(ErrorPrototype, {
      stack: {
        get() {
          // https://github.com/tc39/proposal-error-stacks/issues/46
          // allows this to not add an unpleasant newline. Otherwise
          // we should fix this.
          return `${this}`;
        },
        set(newValue) {
          defineProperties(this, {
            stack: {
              value: newValue,
              writable: true,
              enumerable: true,
              configurable: true,
            },
          });
        },
      },
    });
  }

  return {
    '%InitialGetStackString%': initialGetStackString,
    '%InitialError%': InitialError,
    '%SharedError%': SharedError,
  };
}$h͏_once.default(      tameErrorConstructor);
})()
,
// === 45. ses ./src/module-load.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let getenv,Map,Set,TypeError,arrayJoin,arrayMap,arrayPush,arraySome,create,freeze,generatorNext,generatorThrow,getOwnPropertyNames,isArray,isPrimitive,mapGet,mapHas,mapSet,promiseThen,setAdd,values,weakmapGet,weakmapHas,makeError,annotateError,q,b,X;$h͏_imports([["@endo/env-options", [["getEnvironmentOption",[$h͏_a => (getenv = $h͏_a)]]]],["./commons.js", [["Map",[$h͏_a => (Map = $h͏_a)]],["Set",[$h͏_a => (Set = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayJoin",[$h͏_a => (arrayJoin = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["arraySome",[$h͏_a => (arraySome = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["generatorNext",[$h͏_a => (generatorNext = $h͏_a)]],["generatorThrow",[$h͏_a => (generatorThrow = $h͏_a)]],["getOwnPropertyNames",[$h͏_a => (getOwnPropertyNames = $h͏_a)]],["isArray",[$h͏_a => (isArray = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["mapHas",[$h͏_a => (mapHas = $h͏_a)]],["mapSet",[$h͏_a => (mapSet = $h͏_a)]],["promiseThen",[$h͏_a => (promiseThen = $h͏_a)]],["setAdd",[$h͏_a => (setAdd = $h͏_a)]],["values",[$h͏_a => (values = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["weakmapHas",[$h͏_a => (weakmapHas = $h͏_a)]]]],["./error/assert.js", [["makeError",[$h͏_a => (makeError = $h͏_a)]],["annotateError",[$h͏_a => (annotateError = $h͏_a)]],["q",[$h͏_a => (q = $h͏_a)]],["b",[$h͏_a => (b = $h͏_a)]],["X",[$h͏_a => (X = $h͏_a)]]]]]);


























const noop = () => {};

const asyncTrampoline = async (generatorFunc, args, errorWrapper) => {
  await null;
  const iterator = generatorFunc(...args);
  let result = generatorNext(iterator);
  while (!result.done) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const val = await result.value;
      result = generatorNext(iterator, val);
    } catch (error) {
      result = generatorThrow(iterator, errorWrapper(error));
    }
  }
  return result.value;
};

const syncTrampoline = (generatorFunc, args) => {
  const iterator = generatorFunc(...args);
  let result = generatorNext(iterator);
  while (!result.done) {
    try {
      result = generatorNext(iterator, result.value);
    } catch (error) {
      result = generatorThrow(iterator, error);
    }
  }
  return result.value;
};

// `makeAlias` constructs compartment specifier tuples for the `aliases`
// private field of compartments.
// These aliases allow a compartment to alias an internal module specifier to a
// module specifier in an external compartment, and also to create internal
// aliases.
// Both are facilitated by the moduleMap Compartment constructor option.
       const makeAlias = (compartment, specifier) =>
  freeze({ compartment, specifier });

// `resolveAll` pre-computes resolutions of all imports within the compartment
// in which a module was loaded.
$h͏_once.makeAlias(makeAlias);const resolveAll=(imports,resolveHook,fullReferrerSpecifier)=>{
  const resolvedImports = create(null);
  for (const importSpecifier of imports) {
    const fullSpecifier = resolveHook(importSpecifier, fullReferrerSpecifier);
    resolvedImports[importSpecifier] = fullSpecifier;
  }
  return freeze(resolvedImports);
};

const loadModuleSource = (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  moduleSource,
  enqueueJob,
  selectImplementation,
  moduleLoads,
  importMeta,
) => {
  const { resolveHook, name: compartmentName } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  const { imports } = moduleSource;
  if (
    !isArray(imports) ||
    arraySome(imports, specifier => typeof specifier !== 'string')
  ) {
    throw makeError(
      X`Invalid module source: 'imports' must be an array of strings, got ${imports} for module ${q(moduleSpecifier)} of compartment ${q(compartmentName)}`,
    );
  }

  // resolve all imports relative to this referrer module.
  const resolvedImports = resolveAll(imports, resolveHook, moduleSpecifier);
  const moduleRecord = freeze({
    compartment,
    moduleSource,
    moduleSpecifier,
    resolvedImports,
    importMeta,
  });

  // Enqueue jobs to load this module's shallow dependencies.
  for (const fullSpecifier of values(resolvedImports)) {
    // Behold: recursion.
    // eslint-disable-next-line no-use-before-define
    enqueueJob(memoizedLoadWithErrorAnnotation, [
      compartmentPrivateFields,
      moduleAliases,
      compartment,
      fullSpecifier,
      enqueueJob,
      selectImplementation,
      moduleLoads,
    ]);
  }

  return moduleRecord;
};

function* loadWithoutErrorAnnotation(
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  enqueueJob,
  selectImplementation,
  moduleLoads,
) {
  const {
    importHook,
    importNowHook,
    moduleMap,
    moduleMapHook,
    moduleRecords,
    parentCompartment,
  } = weakmapGet(compartmentPrivateFields, compartment);

  if (mapHas(moduleRecords, moduleSpecifier)) {
    return mapGet(moduleRecords, moduleSpecifier);
  }

  // Follow moduleMap, or moduleMapHook if present.
  let moduleDescriptor = moduleMap[moduleSpecifier];
  if (moduleDescriptor === undefined && moduleMapHook !== undefined) {
    moduleDescriptor = moduleMapHook(moduleSpecifier);
  }
  if (moduleDescriptor === undefined) {
    const moduleHook = selectImplementation(importHook, importNowHook);
    if (moduleHook === undefined) {
      const moduleHookName = selectImplementation(
        'importHook',
        'importNowHook',
      );
      throw makeError(
        X`${b(moduleHookName)} needed to load module ${q(
          moduleSpecifier,
        )} in compartment ${q(compartment.name)}`,
      );
    }
    moduleDescriptor = moduleHook(moduleSpecifier);
    // Uninitialized module namespaces throw if we attempt to coerce them into
    // promises.
    if (!weakmapHas(moduleAliases, moduleDescriptor)) {
      moduleDescriptor = yield moduleDescriptor;
    }
  }

  if (typeof moduleDescriptor === 'string') {
    // eslint-disable-next-line @endo/no-polymorphic-call
    throw makeError(
      X`Cannot map module ${q(moduleSpecifier)} to ${q(
        moduleDescriptor,
      )} in parent compartment, use {source} module descriptor`,
      TypeError,
    );
  } else if (!isPrimitive(moduleDescriptor)) {
    // In this shim (and not in XS, and not in the standard we imagine), we
    // allow a module namespace object to stand in for a module descriptor that
    // describes its original {compartment, specifier} so that it can be used
    // to create a link.
    let aliasDescriptor = weakmapGet(moduleAliases, moduleDescriptor);
    if (aliasDescriptor !== undefined) {
      moduleDescriptor = aliasDescriptor;
    }

    if (moduleDescriptor.namespace !== undefined) {
      // { namespace: string, compartment?: Compartment }
      // Namespace module descriptors link to a module instance.

      if (typeof moduleDescriptor.namespace === 'string') {
        // The default compartment is the *parent*, not this child compartment.
        // This is a difference from the legacy {specifier, compartment} module
        // descriptor.
        const {
          compartment: aliasCompartment = parentCompartment,
          namespace: aliasSpecifier,
        } = moduleDescriptor;
        if (
          isPrimitive(aliasCompartment) ||
          !weakmapHas(compartmentPrivateFields, aliasCompartment)
        ) {
          throw makeError(
            X`Invalid compartment in module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`,
          );
        }
        // Behold: recursion.
        // eslint-disable-next-line no-use-before-define
        const aliasRecord = yield memoizedLoadWithErrorAnnotation(
          compartmentPrivateFields,
          moduleAliases,
          aliasCompartment,
          aliasSpecifier,
          enqueueJob,
          selectImplementation,
          moduleLoads,
        );
        mapSet(moduleRecords, moduleSpecifier, aliasRecord);
        return aliasRecord;
      }

      // All remaining objects must either be a module namespace, or be
      // promoted into a module namespace with a virtual module source.
      if (!isPrimitive(moduleDescriptor.namespace)) {
        const { namespace } = moduleDescriptor;
        // Brand-check SES shim module exports namespaces:
        aliasDescriptor = weakmapGet(moduleAliases, namespace);
        if (aliasDescriptor !== undefined) {
          moduleDescriptor = aliasDescriptor;
          // Fall through to processing the resulting {compartment, specifier}
          // alias.
        } else {
          // Promote an arbitrary object to a module namespace with a virtual
          // module source.
          // { namespace: Object }
          const exports = getOwnPropertyNames(namespace);
          /** @type {import('../types.js').VirtualModuleSource} */
          const moduleSource = {
            imports: [],
            exports,
            execute(env) {
              for (const name of exports) {
                env[name] = namespace[name];
              }
            },
          };
          const importMeta = undefined;
          const moduleRecord = loadModuleSource(
            compartmentPrivateFields,
            moduleAliases,
            compartment,
            moduleSpecifier,
            moduleSource,
            enqueueJob,
            selectImplementation,
            moduleLoads,
            importMeta,
          );
          mapSet(moduleRecords, moduleSpecifier, moduleRecord);
          return moduleRecord;
        }
      } else {
        throw makeError(
          X`Invalid compartment in module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`,
        );
      }
    }

    if (moduleDescriptor.source !== undefined) {
      // Module source descriptors create an instance from a module source.
      // The descriptor may contain the module source, or refer to a source
      // loaded in a particular compartment.

      if (typeof moduleDescriptor.source === 'string') {
        // { source: string, importMeta?, specifier?: string, compartment? }
        // A string source is the specifier for a different module source.
        // That source may come from this compartment's parent (default), or
        // from a specified compartment, and the specified compartment may be
        // this compartment to make a duplicate.

        const {
          source: loaderSpecifier,
          specifier: instanceSpecifier = moduleSpecifier,
          compartment: loaderCompartment = parentCompartment,
          importMeta = undefined,
        } = moduleDescriptor;

        // Induce the compartment, possibly a different compartment
        // to load a module source.

        // Behold: recursion.
        // eslint-disable-next-line no-use-before-define
        const loaderRecord = yield memoizedLoadWithErrorAnnotation(
          compartmentPrivateFields,
          moduleAliases,
          loaderCompartment,
          loaderSpecifier,
          enqueueJob,
          selectImplementation,
          moduleLoads,
        );

        // Extract the source of the module from the loader compartment's
        // record.
        const { moduleSource } = loaderRecord;

        // Instantiate that source in our own compartment, possibly with a
        // different specifier for resolving its own imports.
        const moduleRecord = loadModuleSource(
          compartmentPrivateFields,
          moduleAliases,
          compartment,
          instanceSpecifier,
          moduleSource,
          enqueueJob,
          selectImplementation,
          moduleLoads,
          importMeta,
        );
        mapSet(moduleRecords, moduleSpecifier, moduleRecord);
        return moduleRecord;
      } else {
        // { source: ModuleSource, importMeta?, specifier?: string }
        // We assume all non-string module sources are any of the supported
        // kinds of module source: PrecompiledModuleSource,
        // VirtualModuleSource, or a native ModuleSource.

        const {
          source: moduleSource,
          specifier: aliasSpecifier = moduleSpecifier,
          importMeta,
        } = moduleDescriptor;

        const aliasRecord = loadModuleSource(
          compartmentPrivateFields,
          moduleAliases,
          compartment,
          aliasSpecifier,
          moduleSource,
          enqueueJob,
          selectImplementation,
          moduleLoads,
          importMeta,
        );
        mapSet(moduleRecords, moduleSpecifier, aliasRecord);
        return aliasRecord;
      }
    }

    if (moduleDescriptor.archive !== undefined) {
      // { archive: Archive, path: string }
      // We do not support this XS-native module descriptor.
      throw makeError(
        X`Unsupported archive module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`,
      );
    }

    // { record, specifier?, compartment?, importMeta? }
    // A (legacy) module descriptor for when we find the module source (record)
    // but at a different specifier than requested.
    // Providing this {specifier, record} descriptor serves as an ergonomic
    // short-hand for stashing the record, returning a {compartment, specifier}
    // reference, bouncing the module hook, then producing the source (record)
    // when module hook receives the response specifier.
    if (moduleDescriptor.record !== undefined) {
      const {
        compartment: aliasCompartment = compartment,
        specifier: aliasSpecifier = moduleSpecifier,
        record: moduleSource,
        importMeta,
      } = moduleDescriptor;

      const aliasRecord = loadModuleSource(
        compartmentPrivateFields,
        moduleAliases,
        aliasCompartment,
        aliasSpecifier,
        moduleSource,
        enqueueJob,
        selectImplementation,
        moduleLoads,
        importMeta,
      );
      mapSet(moduleRecords, moduleSpecifier, aliasRecord);
      mapSet(moduleRecords, aliasSpecifier, aliasRecord);
      return aliasRecord;
    }

    // { specifier: string, compartment: Compartment }
    // A (legacy) module descriptor that describes a link to a module instance
    // in a specified compartment.
    if (
      moduleDescriptor.compartment !== undefined &&
      moduleDescriptor.specifier !== undefined
    ) {
      if (
        isPrimitive(moduleDescriptor.compartment) ||
        !weakmapHas(compartmentPrivateFields, moduleDescriptor.compartment) ||
        typeof moduleDescriptor.specifier !== 'string'
      ) {
        throw makeError(
          X`Invalid compartment in module descriptor for specifier ${q(moduleSpecifier)} in compartment ${q(compartment.name)}`,
        );
      }
      // Behold: recursion.
      // eslint-disable-next-line no-use-before-define
      const aliasRecord = yield memoizedLoadWithErrorAnnotation(
        compartmentPrivateFields,
        moduleAliases,
        moduleDescriptor.compartment,
        moduleDescriptor.specifier,
        enqueueJob,
        selectImplementation,
        moduleLoads,
      );
      mapSet(moduleRecords, moduleSpecifier, aliasRecord);
      return aliasRecord;
    }

    // A (legacy) behavior: If we do not recognize the module descriptor as a
    // module descriptor, we assume that it is a module source (record):
    const moduleSource = moduleDescriptor;
    const moduleRecord = loadModuleSource(
      compartmentPrivateFields,
      moduleAliases,
      compartment,
      moduleSpecifier,
      moduleSource,
      enqueueJob,
      selectImplementation,
      moduleLoads,
    );
    // Memoize.
    mapSet(moduleRecords, moduleSpecifier, moduleRecord);
    return moduleRecord;
  } else {
    throw makeError(
      X`module descriptor must be a string or object for specifier ${q(
        moduleSpecifier,
      )} in compartment ${q(compartment.name)}`,
    );
  }
}

const memoizedLoadWithErrorAnnotation = (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  enqueueJob,
  selectImplementation,
  moduleLoads,
) => {
  const { name: compartmentName } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  // Prevent data-lock from recursion into branches visited in dependent loads.
  let compartmentLoading = mapGet(moduleLoads, compartment);
  if (compartmentLoading === undefined) {
    compartmentLoading = new Map();
    mapSet(moduleLoads, compartment, compartmentLoading);
  }
  let moduleLoading = mapGet(compartmentLoading, moduleSpecifier);
  if (moduleLoading !== undefined) {
    return moduleLoading;
  }

  moduleLoading = selectImplementation(asyncTrampoline, syncTrampoline)(
    loadWithoutErrorAnnotation,
    [
      compartmentPrivateFields,
      moduleAliases,
      compartment,
      moduleSpecifier,
      enqueueJob,
      selectImplementation,
      moduleLoads,
    ],
    error => {
      // eslint-disable-next-line @endo/no-polymorphic-call
      annotateError(
        error,
        X`${error.message}, loading ${q(moduleSpecifier)} in compartment ${q(
          compartmentName,
        )}`,
      );
      throw error;
    },
  );

  mapSet(compartmentLoading, moduleSpecifier, moduleLoading);

  return moduleLoading;
};

/**
 * If `aggregateErrors` is `false`, the `errors` property of the fulfilled object
 * will always be empty.
 * @param {{errors?: Error[], noAggregateErrors?: boolean}} [options]
 */
const asyncJobQueue = ({ errors = [], noAggregateErrors = false } = {}) => {
  /** @type {Set<Promise<undefined>>} */
  const pendingJobs = new Set();

  /**
   * Enqueues a job that starts immediately but won't be awaited until drainQueue is called.
   *
   * @template {(...args: any[]) => Promise<void>} F
   * @param {F} func - An async function to execute
   * @param {Parameters<F>} args - Arguments to pass to the function
   * @returns {void}
   */
  const enqueueJob = (func, args) => {
    setAdd(
      pendingJobs,
      promiseThen(func(...args), noop, error => {
        if (noAggregateErrors) {
          throw error;
        } else {
          arrayPush(errors, error);
        }
      }),
    );
  };
  /**
   * Sequentially awaits pending jobs and returns an array of errors
   */
  const drainQueue = async () => {
    await null;
    for (const job of pendingJobs) {
      // eslint-disable-next-line no-await-in-loop
      await job;
    }
  };
  return { enqueueJob, drainQueue, errors };
};

/**
 * If `aggregateErrors` is `false`, the `errors` property of the returned object
 * will always be empty.
 * @param {{errors?: Error[], noAggregateErrors?: boolean}} [options]
 */
const syncJobQueue = ({ errors = [], noAggregateErrors = false } = {}) => {
  let current = [];
  let next = [];

  /**
   * Enqueues a job
   *
   * @template {(...args: any[]) => void} F
   * @param {F} func - An async function to execute
   * @param {Parameters<F>} args - Arguments to pass to the function
   * @returns {void}
   */
  const enqueueJob = (func, args) => {
    arrayPush(next, [func, args]);
  };
  const drainQueue = () => {
    // Attention: load bearing flow order. Calling another enqueued function in the
    // synchronous usecase must happen after the one that enqueued it has finished.
    // Jobs enqueued in one pass do not interleave with jobs resulting from them.
    // It's necessary for efficient memoization and to break cycles.
    for (const [func, args] of current) {
      try {
        func(...args);
      } catch (error) {
        if (noAggregateErrors) {
          throw error;
        } else {
          arrayPush(errors, error);
        }
      }
    }
    current = next;
    next = [];
    if (current.length > 0) drainQueue();
  };
  return { enqueueJob, drainQueue, errors };
};

/**
 * @param {object} options
 * @param {Array<Error>} options.errors
 * @param {string} options.errorPrefix
 */
const throwAggregateError = ({ errors, errorPrefix }) => {
  // Throw an aggregate error if there were any errors.
  if (errors.length > 0) {
    const verbose =
      /** @type {'' | 'verbose'} */
      (getenv('COMPARTMENT_LOAD_ERRORS', '', ['verbose'])) === 'verbose';
    throw TypeError(
      `${errorPrefix} (${errors.length} underlying failures: ${arrayJoin(
        arrayMap(errors, error => error.message + (verbose ? error.stack : '')),
        ', ',
      )}`,
    );
  }
};

const preferSync = (_asyncImpl, syncImpl) => syncImpl;
const preferAsync = (asyncImpl, _syncImpl) => asyncImpl;

/**
 * `load` asynchronously gathers the module records for a module and its
 * transitive dependencies.
 * The module records refer to each other by a reference to the dependency's
 * compartment and the specifier of the module within its own compartment.
 * This graph is then ready to be synchronously linked and executed.
 * @param {WeakMap<Compartment, any>} compartmentPrivateFields
 * @param {WeakMap<object, object>} moduleAliases
 * @param {Compartment} compartment
 * @param {string} moduleSpecifier - The module specifier to load.
 * @param {{ noAggregateErrors?: boolean}} options
 */
       const load = async (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  { noAggregateErrors = false } = {},
) => {
  const { name: compartmentName } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  /** @type {Map<object, Map<string, Promise<Record<any, any>>>>} */
  const moduleLoads = new Map();

  const { enqueueJob, drainQueue, errors } = asyncJobQueue({
    noAggregateErrors,
  });

  enqueueJob(memoizedLoadWithErrorAnnotation, [
    compartmentPrivateFields,
    moduleAliases,
    compartment,
    moduleSpecifier,
    enqueueJob,
    preferAsync,
    moduleLoads,
  ]);

  await drainQueue();

  throwAggregateError({
    errors,
    errorPrefix: `Failed to load module ${q(moduleSpecifier)} in package ${q(
      compartmentName,
    )}`,
  });
};

/**
 * `loadNow` synchronously gathers the module records for a specified module
 * and its transitive dependencies.
 * The module records refer to each other by a reference to the dependency's
 * compartment and the specifier of the module within its own compartment.
 * This graph is then ready to be synchronously linked and executed.
 * @param {WeakMap<Compartment, any>} compartmentPrivateFields
 * @param {WeakMap<object, object>} moduleAliases
 * @param {Compartment} compartment
 * @param {string} moduleSpecifier - The module specifier to load.
 * @param {{ noAggregateErrors?: boolean}} options
 */$h͏_once.load(load);

       const loadNow = (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
  { noAggregateErrors = false } = {},
) => {
  const { name: compartmentName } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  /** @type {Map<object, Map<string, Promise<Record<any, any>>>>} */
  const moduleLoads = new Map();

  const { enqueueJob, drainQueue, errors } = syncJobQueue({
    noAggregateErrors,
  });

  enqueueJob(memoizedLoadWithErrorAnnotation, [
    compartmentPrivateFields,
    moduleAliases,
    compartment,
    moduleSpecifier,
    enqueueJob,
    preferSync,
    moduleLoads,
  ]);

  drainQueue();

  throwAggregateError({
    errors,
    errorPrefix: `Failed to load module ${q(moduleSpecifier)} in package ${q(
      compartmentName,
    )}`,
  });
};$h͏_once.loadNow(loadNow);
})()
,
// === 46. ses ./src/module-proxy.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let makeAlias,Proxy,TypeError,create,freeze,mapGet,mapHas,mapSet,ownKeys,reflectGet,reflectGetOwnPropertyDescriptor,reflectHas,reflectIsExtensible,reflectPreventExtensions,toStringTagSymbol,weakmapSet,assert;$h͏_imports([["./module-load.js", [["makeAlias",[$h͏_a => (makeAlias = $h͏_a)]]]],["./commons.js", [["Proxy",[$h͏_a => (Proxy = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["mapHas",[$h͏_a => (mapHas = $h͏_a)]],["mapSet",[$h͏_a => (mapSet = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["reflectGet",[$h͏_a => (reflectGet = $h͏_a)]],["reflectGetOwnPropertyDescriptor",[$h͏_a => (reflectGetOwnPropertyDescriptor = $h͏_a)]],["reflectHas",[$h͏_a => (reflectHas = $h͏_a)]],["reflectIsExtensible",[$h͏_a => (reflectIsExtensible = $h͏_a)]],["reflectPreventExtensions",[$h͏_a => (reflectPreventExtensions = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);































const { quote: q } = assert;

// `deferExports` creates a module's exports proxy, proxied exports, and
// activator.
// A `Compartment` can create a module for any module specifier, regardless of
// whether it is loadable or executable, and use that object as a token that
// can be fed into another compartment's module map.
// Only after the specified module has been analyzed is it possible for the
// module namespace proxy to behave properly, so it throws exceptions until
// after the compartment has begun executing the module.
// The module instance must freeze the proxied exports and activate the exports
// proxy before executing the module.
//
// The module exports proxy's behavior differs from the ECMAScript 262
// specification for "module namespace exotic objects" only in that according
// to the specification value property descriptors have a non-writable "value"
// and this implementation models all properties with accessors.
//
// https://tc39.es/ecma262/#sec-module-namespace-exotic-objects
//
       const deferExports = () => {
  let active = false;
  const exportsTarget = create(null, {
    // Make this appear like an ESM module namespace object.
    [toStringTagSymbol]: {
      value: 'Module',
      writable: false,
      enumerable: false,
      configurable: false,
    },
  });
  return freeze({
    activate() {
      active = true;
    },
    exportsTarget,
    exportsProxy: new Proxy(exportsTarget, {
      get(_target, name, receiver) {
        if (!active) {
          throw TypeError(
            `Cannot get property ${q(
              name,
            )} of module exports namespace, the module has not yet begun to execute`,
          );
        }
        return reflectGet(exportsTarget, name, receiver);
      },
      set(_target, name, _value) {
        throw TypeError(
          `Cannot set property ${q(name)} of module exports namespace`,
        );
      },
      has(_target, name) {
        if (!active) {
          throw TypeError(
            `Cannot check property ${q(
              name,
            )}, the module has not yet begun to execute`,
          );
        }
        return reflectHas(exportsTarget, name);
      },
      deleteProperty(_target, name) {
        throw TypeError(
          `Cannot delete property ${q(name)}s of module exports namespace`,
        );
      },
      ownKeys(_target) {
        if (!active) {
          throw TypeError(
            'Cannot enumerate keys, the module has not yet begun to execute',
          );
        }
        return ownKeys(exportsTarget);
      },
      getOwnPropertyDescriptor(_target, name) {
        if (!active) {
          throw TypeError(
            `Cannot get own property descriptor ${q(
              name,
            )}, the module has not yet begun to execute`,
          );
        }
        return reflectGetOwnPropertyDescriptor(exportsTarget, name);
      },
      preventExtensions(_target) {
        if (!active) {
          throw TypeError(
            'Cannot prevent extensions of module exports namespace, the module has not yet begun to execute',
          );
        }
        return reflectPreventExtensions(exportsTarget);
      },
      isExtensible() {
        if (!active) {
          throw TypeError(
            'Cannot check extensibility of module exports namespace, the module has not yet begun to execute',
          );
        }
        return reflectIsExtensible(exportsTarget);
      },
      getPrototypeOf(_target) {
        return null;
      },
      setPrototypeOf(_target, _proto) {
        throw TypeError('Cannot set prototype of module exports namespace');
      },
      defineProperty(_target, name, _descriptor) {
        throw TypeError(
          `Cannot define property ${q(name)} of module exports namespace`,
        );
      },
      apply(_target, _thisArg, _args) {
        throw TypeError(
          'Cannot call module exports namespace, it is not a function',
        );
      },
      construct(_target, _args) {
        throw TypeError(
          'Cannot construct module exports namespace, it is not a constructor',
        );
      },
    }),
  });
};

/**
 * @typedef {object} DeferredExports
 * @property {Record<string, any>} exportsTarget - The object to which a
 * module's exports will be added.
 * @property {Record<string, any>} exportsProxy - A proxy over the `exportsTarget`,
 * used to expose its "exports" to other compartments.
 * @property {() => void} activate - Activate the `exportsProxy` such that it can
 * be used as a module namespace object.
 */

/**
 * Memoizes the creation of a deferred module exports namespace proxy for any
 * arbitrary full specifier in a compartment. It also records the compartment
 * and specifier affiliated with that module exports namespace proxy so it
 * can be used as an alias into another compartment when threaded through
 * a compartment's `moduleMap` argument.
 *
 * @param {*} compartment - The compartment to retrieve deferred exports from.
 * @param {*} compartmentPrivateFields - The private fields of the compartment.
 * @param {*} moduleAliases - The module aliases of the compartment.
 * @param {string} specifier - The module specifier to retrieve deferred exports for.
 * @returns {DeferredExports} - The deferred exports for the module specifier of
 * the compartment.
 */$h͏_once.deferExports(deferExports);
       const getDeferredExports = (
  compartment,
  compartmentPrivateFields,
  moduleAliases,
  specifier,
) => {
  const { deferredExports } = compartmentPrivateFields;
  if (!mapHas(deferredExports, specifier)) {
    const deferred = deferExports();
    weakmapSet(
      moduleAliases,
      deferred.exportsProxy,
      makeAlias(compartment, specifier),
    );
    mapSet(deferredExports, specifier, deferred);
  }
  return mapGet(deferredExports, specifier);
};$h͏_once.getDeferredExports(getDeferredExports);
})()
,
// === 47. ses ./src/compartment-evaluate.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let TypeError,arrayPush,create,getOwnPropertyDescriptors,evadeHtmlCommentTest,evadeImportExpressionTest,rejectSomeDirectEvalExpressions,makeSafeEvaluator;$h͏_imports([["./commons.js", [["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]]]],["./transforms.js", [["evadeHtmlCommentTest",[$h͏_a => (evadeHtmlCommentTest = $h͏_a)]],["evadeImportExpressionTest",[$h͏_a => (evadeImportExpressionTest = $h͏_a)]],["rejectSomeDirectEvalExpressions",[$h͏_a => (rejectSomeDirectEvalExpressions = $h͏_a)]]]],["./make-safe-evaluator.js", [["makeSafeEvaluator",[$h͏_a => (makeSafeEvaluator = $h͏_a)]]]]]);













       const provideCompartmentEvaluator = (compartmentFields, options) => {
  const { sloppyGlobalsMode = false, __moduleShimLexicals__ = undefined } =
    options;

  let safeEvaluate;

  if (__moduleShimLexicals__ === undefined && !sloppyGlobalsMode) {
    ({ safeEvaluate } = compartmentFields);
  } else {
    // The scope proxy or global lexicals are different from the
    // shared evaluator so we need to build a new one

    let { globalTransforms } = compartmentFields;
    const { globalObject } = compartmentFields;

    let moduleLexicals;
    if (__moduleShimLexicals__ !== undefined) {
      // When using `evaluate` for ESM modules, as should only occur from the
      // module-shim's module-instance.js, we do not reveal the SES-shim's
      // module-to-program translation, as this is not standardizable behavior.
      // However, the `localTransforms` will come from the `__shimTransforms__`
      // Compartment option in this case, which is a non-standardizable escape
      // hatch so programs designed specifically for the SES-shim
      // implementation may opt-in to use the same transforms for `evaluate`
      // and `import`, at the expense of being tightly coupled to SES-shim.
      globalTransforms = undefined;

      moduleLexicals = create(
        null,
        getOwnPropertyDescriptors(__moduleShimLexicals__),
      );
    }

    ({ safeEvaluate } = makeSafeEvaluator({
      globalObject,
      moduleLexicals,
      globalTransforms,
      sloppyGlobalsMode,
    }));
  }

  return { safeEvaluate };
};$h͏_once.provideCompartmentEvaluator(provideCompartmentEvaluator);

       const compartmentEvaluate = (compartmentFields, source, options) => {
  // Perform this check first to avoid unnecessary sanitizing.
  // TODO Maybe relax string check and coerce instead:
  // https://github.com/tc39/proposal-dynamic-code-brand-checks
  if (typeof source !== 'string') {
    throw TypeError('first argument of evaluate() must be a string');
  }

  // Extract options, and shallow-clone transforms.
  const {
    transforms = [],
    __evadeHtmlCommentTest__ = false,
    __evadeImportExpressionTest__ = false,
    __rejectSomeDirectEvalExpressions__ = true  // Note default on
  } = options;
  const localTransforms = [...transforms];
  if (__evadeHtmlCommentTest__ === true) {
    arrayPush(localTransforms, evadeHtmlCommentTest);
  }
  if (__evadeImportExpressionTest__ === true) {
    arrayPush(localTransforms, evadeImportExpressionTest);
  }
  if (__rejectSomeDirectEvalExpressions__ === true) {
    arrayPush(localTransforms, rejectSomeDirectEvalExpressions);
  }

  const { safeEvaluate } = provideCompartmentEvaluator(
    compartmentFields,
    options,
  );

  return safeEvaluate(source, {
    localTransforms,
  });
};$h͏_once.compartmentEvaluate(compartmentEvaluate);
})()
,
// === 48. ses ./src/module-instance.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let assert,getDeferredExports,ReferenceError,SyntaxError,TypeError,arrayForEach,arrayIncludes,arrayPush,arraySome,arraySort,create,defineProperty,entries,freeze,isArray,keys,mapGet,weakmapGet,reflectHas,assign,compartmentEvaluate;$h͏_imports([["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]],["./module-proxy.js", [["getDeferredExports",[$h͏_a => (getDeferredExports = $h͏_a)]]]],["./commons.js", [["ReferenceError",[$h͏_a => (ReferenceError = $h͏_a)]],["SyntaxError",[$h͏_a => (SyntaxError = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayForEach",[$h͏_a => (arrayForEach = $h͏_a)]],["arrayIncludes",[$h͏_a => (arrayIncludes = $h͏_a)]],["arrayPush",[$h͏_a => (arrayPush = $h͏_a)]],["arraySome",[$h͏_a => (arraySome = $h͏_a)]],["arraySort",[$h͏_a => (arraySort = $h͏_a)]],["create",[$h͏_a => (create = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["freeze",[$h͏_a => (freeze = $h͏_a)]],["isArray",[$h͏_a => (isArray = $h͏_a)]],["keys",[$h͏_a => (keys = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["reflectHas",[$h͏_a => (reflectHas = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]]]],["./compartment-evaluate.js", [["compartmentEvaluate",[$h͏_a => (compartmentEvaluate = $h͏_a)]]]]]);

























const { quote: q } = assert;

       const makeVirtualModuleInstance = (
  compartmentPrivateFields,
  moduleSource,
  compartment,
  moduleAliases,
  moduleSpecifier,
  resolvedImports,
) => {
  const { exportsProxy, exportsTarget, activate } = getDeferredExports(
    compartment,
    weakmapGet(compartmentPrivateFields, compartment),
    moduleAliases,
    moduleSpecifier,
  );

  const notifiers = create(null);

  if (moduleSource.exports) {
    if (
      !isArray(moduleSource.exports) ||
      arraySome(moduleSource.exports, name => typeof name !== 'string')
    ) {
      throw TypeError(
        `SES virtual module source "exports" property must be an array of strings for module ${moduleSpecifier}`,
      );
    }
    arrayForEach(moduleSource.exports, name => {
      let value = exportsTarget[name];
      const updaters = [];

      const get = () => value;

      const set = newValue => {
        value = newValue;
        for (const updater of updaters) {
          updater(newValue);
        }
      };

      defineProperty(exportsTarget, name, {
        get,
        set,
        enumerable: true,
        configurable: false,
      });

      notifiers[name] = update => {
        arrayPush(updaters, update);
        update(value);
      };
    });
    // This is enough to support import * from cjs - the '*' field doesn't need to be in exports nor exportsTarget because import will only ever access it via notifiers
    notifiers['*'] = update => {
      update(exportsTarget);
    };
  }

  const localState = {
    activated: false,
  };
  return freeze({
    notifiers,
    exportsProxy,
    execute() {
      if (reflectHas(localState, 'errorFromExecute')) {
        throw localState.errorFromExecute;
      }
      if (!localState.activated) {
        activate();
        localState.activated = true;
        try {
          // eslint-disable-next-line @endo/no-polymorphic-call
          moduleSource.execute(exportsTarget, compartment, resolvedImports);
        } catch (err) {
          localState.errorFromExecute = err;
          throw err;
        }
      }
    },
  });
};

// `makeModuleInstance` takes a module's compartment record, the live import
// namespace, and a global object; and produces a module instance.
// The module instance carries the proxied module exports namespace (the
// "exports"), notifiers to update the module's internal import namespace, and
// an idempotent execute function.
// The module exports namespace is a proxy to the proxied exports namespace
// that the execution of the module instance populates.
$h͏_once.makeVirtualModuleInstance(makeVirtualModuleInstance);const makeModuleInstance=(
  privateFields,
  moduleAliases,
  moduleRecord,
  importedInstances,
) => {
  const {
    compartment,
    moduleSpecifier,
    moduleSource,
    importMeta: moduleRecordMeta,
  } = moduleRecord;
  const {
    reexports: exportAlls = [],
    __syncModuleProgram__: functorSource,
    __fixedExportMap__: fixedExportMap = {},
    __liveExportMap__: liveExportMap = {},
    __reexportMap__: reexportMap = {},
    __needsImport__: needsImport = false,
    __needsImportMeta__: needsImportMeta = false,
    __syncModuleFunctor__,
  } = moduleSource;

  const compartmentFields = weakmapGet(privateFields, compartment);

  const { __shimTransforms__, resolveHook, importMetaHook, compartmentImport } =
    compartmentFields;

  const { exportsProxy, exportsTarget, activate } = getDeferredExports(
    compartment,
    compartmentFields,
    moduleAliases,
    moduleSpecifier,
  );

  // {_exportName_: getter} module exports namespace
  // object (eventually proxied).
  const exportsProps = create(null);

  // {_localName_: accessor} proxy traps for moduleLexicals and live bindings.
  // The moduleLexicals object is frozen and the corresponding properties of
  // moduleLexicals must be immutable, so we copy the descriptors.
  const moduleLexicals = create(null);

  // {_localName_: init(initValue) -> initValue} used by the
  // rewritten code to initialize exported fixed bindings.
  const onceVar = create(null);

  // {_localName_: update(newValue)} used by the rewritten code to
  // both initialize and update live bindings.
  const liveVar = create(null);

  const importMeta = create(null);
  if (moduleRecordMeta) {
    assign(importMeta, moduleRecordMeta);
  }
  if (needsImportMeta && importMetaHook) {
    importMetaHook(moduleSpecifier, importMeta);
  }

  /** @type {(fullSpecifier: string) => Promise<ModuleExportsNamespace>} */
  let dynamicImport;
  if (needsImport) {
    /** @param {string} importSpecifier */
    dynamicImport = async importSpecifier =>
      compartmentImport(resolveHook(importSpecifier, moduleSpecifier));
  }

  // {_localName_: [{get, set, notify}]} used to merge all the export updaters.
  const localGetNotify = create(null);

  // {[importName: string]: notify(update(newValue))} Used by code that imports
  // one of this module's exports, so that their update function will
  // be notified when this binding is initialized or updated.
  const notifiers = create(null);

  arrayForEach(entries(fixedExportMap), ([fixedExportName, [localName]]) => {
    let fixedGetNotify = localGetNotify[localName];
    if (!fixedGetNotify) {
      // fixed binding state
      let value;
      let tdz = true;
      /** @type {null | Array<(value: any) => void>} */
      let optUpdaters = [];

      // tdz sensitive getter
      const get = () => {
        if (tdz) {
          throw ReferenceError(`binding ${q(localName)} not yet initialized`);
        }
        return value;
      };

      // leave tdz once
      const init = freeze(initValue => {
        // init with initValue of a declared const binding, and return
        // it.
        if (!tdz) {
          throw TypeError(
            `Internal: binding ${q(localName)} already initialized`,
          );
        }
        value = initValue;
        const updaters = optUpdaters;
        optUpdaters = null;
        tdz = false;
        for (const updater of updaters || []) {
          updater(initValue);
        }
        return initValue;
      });

      // If still tdz, register update for notification later.
      // Otherwise, update now.
      const notify = updater => {
        if (updater === init) {
          // Prevent recursion.
          return;
        }
        if (tdz) {
          arrayPush(optUpdaters || [], updater);
        } else {
          updater(value);
        }
      };

      // Need these for additional exports of the local variable.
      fixedGetNotify = {
        get,
        notify,
      };
      localGetNotify[localName] = fixedGetNotify;
      onceVar[localName] = init;
    }

    exportsProps[fixedExportName] = {
      get: fixedGetNotify.get,
      set: undefined,
      enumerable: true,
      configurable: false,
    };

    notifiers[fixedExportName] = fixedGetNotify.notify;
  });

  arrayForEach(
    entries(liveExportMap),
    ([liveExportName, [localName, setProxyTrap]]) => {
      let liveGetNotify = localGetNotify[localName];
      if (!liveGetNotify) {
        // live binding state
        let value;
        let tdz = true;
        const updaters = [];

        // tdz sensitive getter
        const get = () => {
          if (tdz) {
            throw ReferenceError(
              `binding ${q(liveExportName)} not yet initialized`,
            );
          }
          return value;
        };

        // This must be usable locally for the translation of initializing
        // a declared local live binding variable.
        //
        // For reexported variable, this is also an update function to
        // register for notification with the downstream import, which we
        // must assume to be live. Thus, it can be called independent of
        // tdz but always leaves tdz. Such reexporting creates a tree of
        // bindings. This lets the tree be hooked up even if the imported
        // module instance isn't initialized yet, as may happen in cycles.
        const update = freeze(newValue => {
          value = newValue;
          tdz = false;
          for (const updater of updaters) {
            updater(newValue);
          }
        });

        // tdz sensitive setter
        const set = newValue => {
          if (tdz) {
            throw ReferenceError(`binding ${q(localName)} not yet initialized`);
          }
          value = newValue;
          for (const updater of updaters) {
            updater(newValue);
          }
        };

        // Always register the updater function.
        // If not in tdz, also update now.
        const notify = updater => {
          if (updater === update) {
            // Prevent recursion.
            return;
          }
          arrayPush(updaters, updater);
          if (!tdz) {
            updater(value);
          }
        };

        liveGetNotify = {
          get,
          notify,
        };

        localGetNotify[localName] = liveGetNotify;
        if (setProxyTrap) {
          defineProperty(moduleLexicals, localName, {
            get,
            set,
            enumerable: true,
            configurable: false,
          });
        }
        liveVar[localName] = update;
      }

      exportsProps[liveExportName] = {
        get: liveGetNotify.get,
        set: undefined,
        enumerable: true,
        configurable: false,
      };

      notifiers[liveExportName] = liveGetNotify.notify;
    },
  );

  const notifyStar = update => {
    update(exportsTarget);
  };
  notifiers['*'] = notifyStar;

  // Per the calling convention for the moduleFunctor generated from
  // an ESM, the `imports` function gets called once up front
  // to populate or arrange the population of imports and reexports.
  // The generated code produces an `updateRecord`: the means for
  // the linker to update the imports and exports of the module.
  // The updateRecord must conform to moduleAnalysis.imports
  // updateRecord = Map<specifier, importUpdaters>
  // importUpdaters = Map<importName, [update(newValue)*]>
  function imports(updateRecord) {
    // By the time imports is called, the importedInstances should already be
    // initialized with module instances that satisfy
    // imports.
    // importedInstances = Map[_specifier_, { notifiers, module, execute }]
    // notifiers = { [importName: string]: notify(update(newValue))}

    // export * cannot export default.
    const candidateAll = create(null);
    candidateAll.default = false;
    for (const [specifier, importUpdaters] of updateRecord) {
      const instance = mapGet(importedInstances, specifier);
      // The module instance object is an internal literal, does not bind this,
      // and never revealed outside the SES shim.
      // There are two instantiation sites for instances and they are both in
      // this module.
      // eslint-disable-next-line @endo/no-polymorphic-call
      instance.execute(); // bottom up cycle tolerant
      const { notifiers: importNotifiers } = instance;
      for (const [importName, updaters] of importUpdaters) {
        const importNotify = importNotifiers[importName];
        if (!importNotify) {
          throw SyntaxError(
            `The requested module '${specifier}' does not provide an export named '${importName}'`,
          );
        }
        for (const updater of updaters) {
          importNotify(updater);
        }
      }
      if (arrayIncludes(exportAlls, specifier)) {
        // Make all these imports candidates.
        // Note names don't change in reexporting all
        for (const [importAndExportName, importNotify] of entries(
          importNotifiers,
        )) {
          if (candidateAll[importAndExportName] === undefined) {
            candidateAll[importAndExportName] = importNotify;
          } else {
            // Already a candidate: remove ambiguity.
            candidateAll[importAndExportName] = false;
          }
        }
      }
      if (reexportMap[specifier]) {
        // Make named reexports candidates too.
        for (const [localName, exportedName] of reexportMap[specifier]) {
          candidateAll[exportedName] = importNotifiers[localName];
        }
      }
    }

    for (const [exportName, notify] of entries(candidateAll)) {
      if (!notifiers[exportName] && notify !== false) {
        notifiers[exportName] = notify;

        // exported live binding state
        let value;
        const update = newValue => (value = newValue);
        notify(update);
        exportsProps[exportName] = {
          get() {
            return value;
          },
          set: undefined,
          enumerable: true,
          configurable: false,
        };
      }
    }

    // Sort the module exports namespace as per spec.
    // The module exports namespace will be wrapped in a module namespace
    // exports proxy which will serve as a "module exports namespace exotic
    // object".
    // Sorting properties is not generally reliable because some properties may
    // be symbols, and symbols do not have an inherent relative order, but
    // since all properties of the exports namespace must be keyed by a string
    // and the string must correspond to a valid identifier, sorting these
    // properties works for this specific case.
    arrayForEach(arraySort(keys(exportsProps)), k =>
      defineProperty(exportsTarget, k, exportsProps[k]),
    );

    freeze(exportsTarget);
    activate();
  }

  let optFunctor;
  if (__syncModuleFunctor__ !== undefined) {
    optFunctor = __syncModuleFunctor__;
  } else {
    optFunctor = compartmentEvaluate(compartmentFields, functorSource, {
      globalObject: compartment.globalThis,
      transforms: __shimTransforms__,
      __moduleShimLexicals__: moduleLexicals,
    });
  }
  let didThrow = false;
  let thrownError;
  function execute() {
    if (optFunctor) {
      // uninitialized
      const functor = optFunctor;
      optFunctor = null;
      // initializing - call with `this` of `undefined`.
      try {
        functor(
          freeze({
            imports: freeze(imports),
            onceVar: freeze(onceVar),
            liveVar: freeze(liveVar),
            import: dynamicImport,
            importMeta,
          }),
        );
      } catch (e) {
        didThrow = true;
        thrownError = e;
      }
      // initialized
    }
    if (didThrow) {
      throw thrownError;
    }
  }

  return freeze({
    notifiers,
    exportsProxy,
    execute,
  });
};$h͏_once.makeModuleInstance(makeModuleInstance);
})()
,
// === 49. ses ./src/module-link.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let assert,makeModuleInstance,makeVirtualModuleInstance,Map,ReferenceError,TypeError,entries,isArray,isPrimitive,mapGet,mapHas,mapSet,weakmapGet;$h͏_imports([["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]],["./module-instance.js", [["makeModuleInstance",[$h͏_a => (makeModuleInstance = $h͏_a)]],["makeVirtualModuleInstance",[$h͏_a => (makeVirtualModuleInstance = $h͏_a)]]]],["./commons.js", [["Map",[$h͏_a => (Map = $h͏_a)]],["ReferenceError",[$h͏_a => (ReferenceError = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["isArray",[$h͏_a => (isArray = $h͏_a)]],["isPrimitive",[$h͏_a => (isPrimitive = $h͏_a)]],["mapGet",[$h͏_a => (mapGet = $h͏_a)]],["mapHas",[$h͏_a => (mapHas = $h͏_a)]],["mapSet",[$h͏_a => (mapSet = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]]]]]);



















const { Fail, quote: q } = assert;

// `link` creates `ModuleInstances` and `ModuleNamespaces` for a module and its
// transitive dependencies and connects their imports and exports.
// After linking, the resulting working set is ready to be executed.
// The linker only concerns itself with module namespaces that are objects with
// property descriptors for their exports, which the Compartment proxies with
// the actual `ModuleNamespace`.
       const link = (
  compartmentPrivateFields,
  moduleAliases,
  compartment,
  moduleSpecifier,
) => {
  const { name: compartmentName, moduleRecords } = weakmapGet(
    compartmentPrivateFields,
    compartment,
  );

  const moduleRecord = mapGet(moduleRecords, moduleSpecifier);
  if (moduleRecord === undefined) {
    throw ReferenceError(
      `Missing link to module ${q(moduleSpecifier)} from compartment ${q(
        compartmentName,
      )}`,
    );
  }

  // Mutual recursion so there's no confusion about which
  // compartment is in context: the module record may be in another
  // compartment, denoted by moduleRecord.compartment.
  // eslint-disable-next-line no-use-before-define
  return instantiate(compartmentPrivateFields, moduleAliases, moduleRecord);
};$h͏_once.link(link);

function mayBePrecompiledModuleSource(moduleSource) {
  return typeof moduleSource.__syncModuleProgram__ === 'string';
}

function validatePrecompiledModuleSource(moduleSource, moduleSpecifier) {
  const { __fixedExportMap__, __liveExportMap__ } = moduleSource;
  !isPrimitive(__fixedExportMap__) ||
    Fail`Property '__fixedExportMap__' of a precompiled module source must be an object, got ${q(
      __fixedExportMap__,
    )}, for module ${q(moduleSpecifier)}`;
  !isPrimitive(__liveExportMap__) ||
    Fail`Property '__liveExportMap__' of a precompiled module source must be an object, got ${q(
      __liveExportMap__,
    )}, for module ${q(moduleSpecifier)}`;
}

function mayBeVirtualModuleSource(moduleSource) {
  return typeof moduleSource.execute === 'function';
}

function validateVirtualModuleSource(moduleSource, moduleSpecifier) {
  const { exports } = moduleSource;
  isArray(exports) ||
    Fail`Invalid module source: 'exports' of a virtual module source must be an array, got ${q(
      exports,
    )}, for module ${q(moduleSpecifier)}`;
}

function validateModuleSource(moduleSource, moduleSpecifier) {
  !isPrimitive(moduleSource) ||
    Fail`Invalid module source: must be of type object, got ${q(
      moduleSource,
    )}, for module ${q(moduleSpecifier)}`;
  const { imports, exports, reexports = [] } = moduleSource;
  isArray(imports) ||
    Fail`Invalid module source: 'imports' must be an array, got ${q(
      imports,
    )}, for module ${q(moduleSpecifier)}`;
  isArray(exports) ||
    Fail`Invalid module source: 'exports' must be an array, got ${q(
      exports,
    )}, for module ${q(moduleSpecifier)}`;
  isArray(reexports) ||
    Fail`Invalid module source: 'reexports' must be an array if present, got ${q(
      reexports,
    )}, for module ${q(moduleSpecifier)}`;
}

       const instantiate = (
  compartmentPrivateFields,
  moduleAliases,
  moduleRecord,
) => {
  const { compartment, moduleSpecifier, resolvedImports, moduleSource } =
    moduleRecord;
  const { instances } = weakmapGet(compartmentPrivateFields, compartment);

  // Memoize.
  if (mapHas(instances, moduleSpecifier)) {
    return mapGet(instances, moduleSpecifier);
  }

  validateModuleSource(moduleSource, moduleSpecifier);

  const importedInstances = new Map();
  let moduleInstance;
  if (mayBePrecompiledModuleSource(moduleSource)) {
    validatePrecompiledModuleSource(moduleSource, moduleSpecifier);
    moduleInstance = makeModuleInstance(
      compartmentPrivateFields,
      moduleAliases,
      moduleRecord,
      importedInstances,
    );
  } else if (mayBeVirtualModuleSource(moduleSource)) {
    validateVirtualModuleSource(moduleSource, moduleSpecifier);
    moduleInstance = makeVirtualModuleInstance(
      compartmentPrivateFields,
      moduleSource,
      compartment,
      moduleAliases,
      moduleSpecifier,
      resolvedImports,
    );
  } else {
    throw TypeError(`Invalid module source, got ${q(moduleSource)}`);
  }

  // Memoize.
  mapSet(instances, moduleSpecifier, moduleInstance);

  // Link dependency modules.
  for (const [importSpecifier, resolvedSpecifier] of entries(resolvedImports)) {
    const importedInstance = link(
      compartmentPrivateFields,
      moduleAliases,
      compartment,
      resolvedSpecifier,
    );
    mapSet(importedInstances, importSpecifier, importedInstance);
  }

  return moduleInstance;
};$h͏_once.instantiate(instantiate);
})()
,
// === 50. ses ./src/compartment.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Map,TypeError,WeakMap,arrayFlatMap,assign,defineProperties,identity,promiseThen,toStringTagSymbol,weakmapGet,weakmapSet,setGlobalObjectSymbolUnscopables,setGlobalObjectConstantProperties,setGlobalObjectMutableProperties,setGlobalObjectEvaluators,assert,assertEqual,q,sharedGlobalPropertyNames,load,loadNow,link,getDeferredExports,compartmentEvaluate,makeSafeEvaluator;$h͏_imports([["./commons.js", [["Map",[$h͏_a => (Map = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["WeakMap",[$h͏_a => (WeakMap = $h͏_a)]],["arrayFlatMap",[$h͏_a => (arrayFlatMap = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["identity",[$h͏_a => (identity = $h͏_a)]],["promiseThen",[$h͏_a => (promiseThen = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]],["weakmapGet",[$h͏_a => (weakmapGet = $h͏_a)]],["weakmapSet",[$h͏_a => (weakmapSet = $h͏_a)]]]],["./global-object.js", [["setGlobalObjectSymbolUnscopables",[$h͏_a => (setGlobalObjectSymbolUnscopables = $h͏_a)]],["setGlobalObjectConstantProperties",[$h͏_a => (setGlobalObjectConstantProperties = $h͏_a)]],["setGlobalObjectMutableProperties",[$h͏_a => (setGlobalObjectMutableProperties = $h͏_a)]],["setGlobalObjectEvaluators",[$h͏_a => (setGlobalObjectEvaluators = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]],["assertEqual",[$h͏_a => (assertEqual = $h͏_a)]],["q",[$h͏_a => (q = $h͏_a)]]]],["./permits.js", [["sharedGlobalPropertyNames",[$h͏_a => (sharedGlobalPropertyNames = $h͏_a)]]]],["./module-load.js", [["load",[$h͏_a => (load = $h͏_a)]],["loadNow",[$h͏_a => (loadNow = $h͏_a)]]]],["./module-link.js", [["link",[$h͏_a => (link = $h͏_a)]]]],["./module-proxy.js", [["getDeferredExports",[$h͏_a => (getDeferredExports = $h͏_a)]]]],["./compartment-evaluate.js", [["compartmentEvaluate",[$h͏_a => (compartmentEvaluate = $h͏_a)]]]],["./make-safe-evaluator.js", [["makeSafeEvaluator",[$h͏_a => (makeSafeEvaluator = $h͏_a)]]]]]);




































































/**
 * @import {ImportHook, ImportMetaHook, ImportNowHook, ModuleDescriptor, ModuleExportsNamespace, ModuleMap, ModuleMapHook, ResolveHook, ModuleSource, CompartmentOptions} from '../types.js'
 * @import {Transform} from './lockdown.js'
 * @import {DeferredExports} from './module-proxy.js'
 */

/**
 * Associates every public module exports namespace with its corresponding
 * compartment and specifier so they can be used to link modules across
 * compartments. The mechanism to thread an alias is to use the
 * {@link Compartment.module} function to obtain the exports namespace of a foreign
 * module and pass it into another compartment's `moduleMap` constructor option
 * @type {WeakMap<ModuleExportsNamespace, Compartment>}
 *
 */
const moduleAliases = new WeakMap();

/**
 * Private fields for `Compartment` instances
 * @typedef {object} CompartmentFields
 * @property {string} name
 * @property {object} globalObject
 * @property {Array<Transform>} globalTransforms
 * @property {(source: string, options?: {localTransforms?: Array<Transform>}) => void} safeEvaluate
 * @property {ResolveHook} resolveHook
 * @property {ImportHook} importHook
 * @property {ImportNowHook} importNowHook
 * @property {ModuleMap} moduleMap
 * @property {ModuleMapHook} moduleMapHook
 * @property {ImportMetaHook} importMetaHook
 * @property {Map<string, ModuleSource>} moduleRecords
 * @property {Array<Transform>} __shimTransforms__
 * @property {DeferredExports} deferredExports
 * @property {Map<string, ModuleDescriptor>} instances
 * @property {Compartment} [parentCompartment]
 * @property {boolean} noNamespaceBox
 * @property {(fullSpecifier: string) => Promise<ModuleExportsNamespace>} compartmentImport
 * @property {boolean} [noAggregateLoadErrors]
 */

/**
 * Captures the private state for each {@link Compartment}
 * @type {WeakMap<Compartment, CompartmentFields>}
 */
const privateFields = new WeakMap();

       const InertCompartment = function Compartment(
  _endowments = {},
  _modules = {},
  _options = {},
) {
  throw TypeError(
    'Compartment.prototype.constructor is not a valid constructor.',
  );
};

/**
 * @param {Compartment} compartment
 * @param {string} specifier
 * @returns {{namespace: ModuleExportsNamespace}}
 */$h͏_once.InertCompartment(InertCompartment);
const compartmentImportNow = (compartment, specifier) => {
  const { execute, exportsProxy } = link(
    privateFields,
    moduleAliases,
    compartment,
    specifier,
  );
  execute();
  return exportsProxy;
};

/** @type {Compartment & {constructor: typeof InertCompartment}} */
       const CompartmentPrototype = {
  constructor: InertCompartment,

  get globalThis() {
    return /** @type {CompartmentFields} */ (weakmapGet(privateFields, this))
      .globalObject;
  },

  get name() {
    return /** @type {CompartmentFields} */ (weakmapGet(privateFields, this))
      .name;
  },

  evaluate(source, options = {}) {
    const compartmentFields = weakmapGet(privateFields, this);
    return compartmentEvaluate(compartmentFields, source, options);
  },

  module(specifier) {
    if (typeof specifier !== 'string') {
      throw TypeError('first argument of module() must be a string');
    }

    const { exportsProxy } = getDeferredExports(
      this,
      weakmapGet(privateFields, this),
      moduleAliases,
      specifier,
    );

    return exportsProxy;
  },

  async import(specifier) {
    const { noNamespaceBox, noAggregateLoadErrors } =
      /** @type {CompartmentFields} */ (weakmapGet(privateFields, this));

    if (typeof specifier !== 'string') {
      throw TypeError('first argument of import() must be a string');
    }

    return promiseThen(
      load(privateFields, moduleAliases, this, specifier, {
        noAggregateErrors: noAggregateLoadErrors,
      }),
      () => {
        // The namespace box is a contentious design and likely to be a breaking
        // change in an appropriately numbered future version.
        const namespace = compartmentImportNow(
          /** @type {Compartment} */ (this),
          specifier,
        );
        if (noNamespaceBox) {
          return namespace;
        }
        // Legacy behavior: box the namespace object so that thenable modules
        // do not get coerced into a promise accidentally.
        return { namespace };
      },
    );
  },

  async load(specifier) {
    if (typeof specifier !== 'string') {
      throw TypeError('first argument of load() must be a string');
    }

    const { noAggregateLoadErrors } = /** @type {CompartmentFields} */ (
      weakmapGet(privateFields, this)
    );

    return load(privateFields, moduleAliases, this, specifier, {
      noAggregateErrors: noAggregateLoadErrors,
    });
  },

  importNow(specifier) {
    if (typeof specifier !== 'string') {
      throw TypeError('first argument of importNow() must be a string');
    }
    const { noAggregateLoadErrors } = /** @type {CompartmentFields} */ (
      weakmapGet(privateFields, this)
    );

    loadNow(privateFields, moduleAliases, this, specifier, {
      noAggregateErrors: noAggregateLoadErrors,
    });
    return compartmentImportNow(/** @type {Compartment} */ (this), specifier);
  },
};

// This causes `String(new Compartment())` to evaluate to `[object Compartment]`.
// The descriptor follows the conventions of other globals with @@toStringTag
// properties, e.g. Math.
$h͏_once.CompartmentPrototype(CompartmentPrototype);defineProperties(CompartmentPrototype,{
  [toStringTagSymbol]: {
    value: 'Compartment',
    writable: false,
    enumerable: false,
    configurable: true,
  },
});

defineProperties(InertCompartment, {
  prototype: { value: CompartmentPrototype },
});

/**
 * @callback MakeCompartmentConstructor
 * @param {MakeCompartmentConstructor} targetMakeCompartmentConstructor
 * @param {Record<string, any>} intrinsics
 * @param {(object: object) => void} markVirtualizedNativeFunction
 * @param {object} [options]
 * @param {Compartment} [options.parentCompartment]
 * @param {boolean} [options.enforceNew]
 * @returns {Compartment['constructor']}
 */

/**
 * "Options bag"-style `Compartment` constructor arguments.
 * @typedef {[options?: CompartmentOptions & { __options__: true }]} CompartmentOptionsArgs
 */

/**
 * Legacy `Compartment` constructor arguments.
 *
 * @deprecated
 * @typedef {[globals?: Map<string, any>, modules?: Map<string, ModuleDescriptor>, options?: CompartmentOptions]} LegacyCompartmentOptionsArgs
 */

/**
 * In order to facilitate migration from the deprecated signature of the
 * compartment constructor,
 *
 * `new Compartent(globals?, modules?, options?)`
 *
 * to the new signature:
 *
 * `new Compartment(options?)`
 *
 * ...where globals and modules are expressed in the options bag instead of
 * positional arguments, this function detects the temporary sigil __options__
 * on the first argument and coerces compartments arguments into a single
 * compartments object.
 * @param {CompartmentOptionsArgs|LegacyCompartmentOptionsArgs} args
 * @returns {CompartmentOptions}
 */
       const compartmentOptions = (...args) => {
  if (args.length === 0) {
    return {};
  }
  if (
    args.length === 1 &&
    typeof args[0] === 'object' &&
    args[0] !== null &&
    '__options__' in args[0]
  ) {
    const { __options__, ...options } = args[0];
    assert(
      __options__ === true,
      `Compartment constructor only supports true __options__ sigil, got ${__options__}`,
    );
    return options;
  } else {
    const [
      globals = /** @type {Map<string, any>} */ ({}),
      modules = /** @type {Map<string, ModuleDescriptor>} */ ({}),
      options = {},
    ] = /** @type {LegacyCompartmentOptionsArgs} */ (args);
    assertEqual(
      options.modules,
      undefined,
      `Compartment constructor must receive either a module map argument or modules option, not both`,
    );
    assertEqual(
      options.globals,
      undefined,
      `Compartment constructor must receive either globals argument or option, not both`,
    );
    return {
      ...options,
      globals,
      modules,
    };
  }
};

/** @type {MakeCompartmentConstructor} */$h͏_once.compartmentOptions(compartmentOptions);
       const makeCompartmentConstructor = (
  targetMakeCompartmentConstructor,
  intrinsics,
  markVirtualizedNativeFunction,
  { parentCompartment = undefined, enforceNew = false } = {},
) => {
  /**
   *
   * @param {CompartmentOptionsArgs|LegacyCompartmentOptionsArgs} args
   */
  function Compartment(...args) {
    if (enforceNew && new.target === undefined) {
      throw TypeError(
        "Class constructor Compartment cannot be invoked without 'new'",
      );
    }

    // Extract options, and shallow-clone transforms.
    const {
      name = '<unknown>',
      transforms = [],
      __shimTransforms__ = [],
      globals: endowmentsOption = {},
      modules: moduleMapOption = {},
      resolveHook,
      importHook,
      importNowHook,
      moduleMapHook,
      importMetaHook,
      __noNamespaceBox__: noNamespaceBox = false,
      noAggregateLoadErrors = false,
    } = compartmentOptions(...args);
    const globalTransforms = arrayFlatMap(
      [transforms, __shimTransforms__],
      identity,
    );
    const endowments = { __proto__: null, ...endowmentsOption };
    const moduleMap = { __proto__: null, ...moduleMapOption };

    // Map<FullSpecifier, ModuleCompartmentRecord>
    const moduleRecords = new Map();
    // Map<FullSpecifier, ModuleInstance>
    const instances = new Map();
    // Map<FullSpecifier, {ExportsProxy, ProxiedExports, activate()}>
    const deferredExports = new Map();

    const globalObject = {};

    const compartment = this;

    setGlobalObjectSymbolUnscopables(globalObject);

    // We must initialize all constant properties first because
    // `makeSafeEvaluator` may use them to create optimized bindings
    // in the evaluator.
    // TODO: consider merging into a single initialization if internal
    // evaluator is no longer eagerly created
    setGlobalObjectConstantProperties(globalObject);

    const { safeEvaluate } = makeSafeEvaluator({
      globalObject,
      globalTransforms,
      sloppyGlobalsMode: false,
    });

    setGlobalObjectMutableProperties(globalObject, {
      intrinsics,
      newGlobalPropertyNames: sharedGlobalPropertyNames,
      makeCompartmentConstructor: targetMakeCompartmentConstructor,
      parentCompartment: this,
      markVirtualizedNativeFunction,
    });

    // TODO: maybe add evalTaming to the Compartment constructor 3rd options?
    setGlobalObjectEvaluators(
      globalObject,
      safeEvaluate,
      markVirtualizedNativeFunction,
    );

    assign(globalObject, endowments);

    /**
     * In support dynamic import in a module source loaded by this compartment,
     * like `await import(importSpecifier)`, induces this compartment to import
     * a module, returning a promise for the resulting module exports
     * namespace.
     * Unlike `compartment.import`, never creates a box object for the
     * namespace as that behavior is deprecated and inconsistent with the
     * standard behavior of dynamic import.
     * Obliges the caller to resolve import specifiers to their corresponding
     * full specifier.
     * That is, every module must have its own dynamic import function that
     * closes over the surrounding module's full module specifier and calls
     * through to this function.
     * @param {string} fullSpecifier - A full specifier is a key in the
     * compartment's module memo.
     * The method `compartment.import` accepts a full specifier, but dynamic
     * import accepts an import specifier and resolves it to a full specifier
     * relative to the calling module's full specifier.
     * @returns {Promise<ModuleExportsNamespace>}
     */
    const compartmentImport = async fullSpecifier => {
      if (typeof resolveHook !== 'function') {
        throw TypeError(
          `Compartment does not support dynamic import: no configured resolveHook for compartment ${q(name)}`,
        );
      }
      await load(privateFields, moduleAliases, compartment, fullSpecifier, {
        noAggregateErrors: noAggregateLoadErrors,
      });
      const { execute, exportsProxy } = link(
        privateFields,
        moduleAliases,
        compartment,
        fullSpecifier,
      );
      execute();
      return exportsProxy;
    };

    weakmapSet(privateFields, this, {
      name: `${name}`,
      globalTransforms,
      globalObject,
      safeEvaluate,
      resolveHook,
      importHook,
      importNowHook,
      moduleMap,
      moduleMapHook,
      importMetaHook,
      moduleRecords,
      __shimTransforms__,
      deferredExports,
      instances,
      parentCompartment,
      noNamespaceBox,
      compartmentImport,
      noAggregateLoadErrors,
    });
  }

  Compartment.prototype = CompartmentPrototype;

  return Compartment;
};$h͏_once.makeCompartmentConstructor(makeCompartmentConstructor);
})()
,
// === 51. ses ./src/get-anonymous-intrinsics.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let FERAL_FUNCTION,Float32Array,Map,Set,String,getOwnPropertyDescriptor,getPrototypeOf,iterateArray,iterateMap,iterateSet,iterateString,matchAllRegExp,matchAllSymbol,regexpPrototype,globalThis,assign,AsyncGeneratorFunctionInstance,ArrayBuffer,InertCompartment;$h͏_imports([["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["Float32Array",[$h͏_a => (Float32Array = $h͏_a)]],["Map",[$h͏_a => (Map = $h͏_a)]],["Set",[$h͏_a => (Set = $h͏_a)]],["String",[$h͏_a => (String = $h͏_a)]],["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]],["iterateArray",[$h͏_a => (iterateArray = $h͏_a)]],["iterateMap",[$h͏_a => (iterateMap = $h͏_a)]],["iterateSet",[$h͏_a => (iterateSet = $h͏_a)]],["iterateString",[$h͏_a => (iterateString = $h͏_a)]],["matchAllRegExp",[$h͏_a => (matchAllRegExp = $h͏_a)]],["matchAllSymbol",[$h͏_a => (matchAllSymbol = $h͏_a)]],["regexpPrototype",[$h͏_a => (regexpPrototype = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["assign",[$h͏_a => (assign = $h͏_a)]],["AsyncGeneratorFunctionInstance",[$h͏_a => (AsyncGeneratorFunctionInstance = $h͏_a)]],["ArrayBuffer",[$h͏_a => (ArrayBuffer = $h͏_a)]]]],["./compartment.js", [["InertCompartment",[$h͏_a => (InertCompartment = $h͏_a)]]]]]);





















/**
 * Object.getConstructorOf()
 * Helper function to improve readability, similar to Object.getPrototypeOf().
 *
 * @param {object} obj
 */
function getConstructorOf(obj) {
  return getPrototypeOf(obj).constructor;
}

// getAnonymousIntrinsics uses a utility function to construct an arguments
// object, since it cannot have one of its own and also be a const export.
function makeArguments() {
  // eslint-disable-next-line prefer-rest-params
  return arguments;
}

/**
 * getAnonymousIntrinsics()
 * Get the intrinsics not otherwise reachable by named own property
 * traversal from the global object.
 *
 * @returns {object}
 */
       const getAnonymousIntrinsics = () => {
  const InertFunction = FERAL_FUNCTION.prototype.constructor;

  // 9.2.4.1 %ThrowTypeError%

  const argsCalleeDesc = getOwnPropertyDescriptor(makeArguments(), 'callee');
  const ThrowTypeError = argsCalleeDesc && argsCalleeDesc.get;

  // 21.1.5.2 The %StringIteratorPrototype% Object

  // eslint-disable-next-line no-new-wrappers
  const StringIteratorObject = iterateString(new String());
  const StringIteratorPrototype = getPrototypeOf(StringIteratorObject);

  // 21.2.7.1 The %RegExpStringIteratorPrototype% Object
  const RegExpStringIterator =
    regexpPrototype[matchAllSymbol] && matchAllRegExp(/./);
  const RegExpStringIteratorPrototype =
    RegExpStringIterator && getPrototypeOf(RegExpStringIterator);

  // 22.1.5.2 The %ArrayIteratorPrototype% Object

  // eslint-disable-next-line no-array-constructor
  const ArrayIteratorObject = iterateArray([]);
  const ArrayIteratorPrototype = getPrototypeOf(ArrayIteratorObject);

  // 22.2.1 The %TypedArray% Intrinsic Object

  const TypedArray = getPrototypeOf(Float32Array);

  // 23.1.5.2 The %MapIteratorPrototype% Object

  const MapIteratorObject = iterateMap(new Map());
  const MapIteratorPrototype = getPrototypeOf(MapIteratorObject);

  // 23.2.5.2 The %SetIteratorPrototype% Object

  const SetIteratorObject = iterateSet(new Set());
  const SetIteratorPrototype = getPrototypeOf(SetIteratorObject);

  // 25.1.2 The %IteratorPrototype% Object

  const IteratorPrototype = getPrototypeOf(ArrayIteratorPrototype);

  // 25.2.1 The GeneratorFunction Constructor

  // eslint-disable-next-line no-empty-function
  function* GeneratorFunctionInstance() {}
  const GeneratorFunction = getConstructorOf(GeneratorFunctionInstance);

  // 25.2.3 Properties of the GeneratorFunction Prototype Object

  const Generator = GeneratorFunction.prototype;

  // 25.7.1 The AsyncFunction Constructor

  // eslint-disable-next-line no-empty-function
  async function AsyncFunctionInstance() {}
  const AsyncFunction = getConstructorOf(AsyncFunctionInstance);

  const intrinsics = {
    '%InertFunction%': InertFunction,
    '%ArrayIteratorPrototype%': ArrayIteratorPrototype,
    '%InertAsyncFunction%': AsyncFunction,
    '%Generator%': Generator,
    '%InertGeneratorFunction%': GeneratorFunction,
    '%IteratorPrototype%': IteratorPrototype,
    '%MapIteratorPrototype%': MapIteratorPrototype,
    '%RegExpStringIteratorPrototype%': RegExpStringIteratorPrototype,
    '%SetIteratorPrototype%': SetIteratorPrototype,
    '%StringIteratorPrototype%': StringIteratorPrototype,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%InertCompartment%': InertCompartment,
  };

  if (AsyncGeneratorFunctionInstance !== undefined) {
    // 25.3.1 The AsyncGeneratorFunction Constructor

    const AsyncGeneratorFunction = getConstructorOf(
      AsyncGeneratorFunctionInstance,
    );

    // 25.3.2.2 AsyncGeneratorFunction.prototype
    const AsyncGenerator = AsyncGeneratorFunction.prototype;
    // 25.5.1 Properties of the AsyncGenerator Prototype Object
    const AsyncGeneratorPrototype = AsyncGenerator.prototype;
    const AsyncIteratorPrototype = getPrototypeOf(AsyncGeneratorPrototype);

    assign(intrinsics, {
      '%AsyncGenerator%': AsyncGenerator,
      '%InertAsyncGeneratorFunction%': AsyncGeneratorFunction,
      '%AsyncGeneratorPrototype%': AsyncGeneratorPrototype,
      '%AsyncIteratorPrototype%': AsyncIteratorPrototype,
    });
  }

  if (globalThis.Iterator) {
    intrinsics['%IteratorHelperPrototype%'] = getPrototypeOf(
      // eslint-disable-next-line @endo/no-polymorphic-call
      globalThis.Iterator.from([]).take(0),
    );
    intrinsics['%WrapForValidIteratorPrototype%'] = getPrototypeOf(
      // eslint-disable-next-line @endo/no-polymorphic-call
      globalThis.Iterator.from({
        next() {
          return { value: undefined };
        },
      }),
    );
  }

  if (globalThis.AsyncIterator) {
    intrinsics['%AsyncIteratorHelperPrototype%'] = getPrototypeOf(
      // eslint-disable-next-line @endo/no-polymorphic-call
      globalThis.AsyncIterator.from([]).take(0),
    );
    intrinsics['%WrapForValidAsyncIteratorPrototype%'] = getPrototypeOf(
      // eslint-disable-next-line @endo/no-polymorphic-call
      globalThis.AsyncIterator.from({ next() {} }),
    );
  }

  const ab = new ArrayBuffer(0);
  // @ts-expect-error TODO How do I add sliceToImmutable to ArrayBuffer type?
  // eslint-disable-next-line @endo/no-polymorphic-call
  const iab = ab.sliceToImmutable();
  const iabProto = getPrototypeOf(iab);
  if (iabProto !== ArrayBuffer.prototype) {
    // In a native implementation, these will be the same prototype
    intrinsics['%ImmutableArrayBufferPrototype%'] = iabProto;
  }

  return intrinsics;
};$h͏_once.getAnonymousIntrinsics(getAnonymousIntrinsics);
})()
,
// === 52. ses ./src/tame-harden.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let freeze;$h͏_imports([["./commons.js", [["freeze",[$h͏_a => (freeze = $h͏_a)]]]]]);


/** @import {Harden} from '../types.js'; */

/** @type {(safeHarden: Harden, hardenTaming: 'safe' | 'unsafe') => Harden} */
       const tameHarden = (safeHarden, hardenTaming) => {
  if (hardenTaming === 'safe') {
    return safeHarden;
  }

  // In on the joke
  Object.isExtensible = () => false;
  Object.isFrozen = () => true;
  Object.isSealed = () => true;
  Reflect.isExtensible = () => false;

  // @ts-expect-error secret property
  if (safeHarden.isFake) {
    // The "safe" hardener is already a fake hardener.
    // Just use it.
    return safeHarden;
  }

  const fakeHarden = arg => arg;
  fakeHarden.isFake = true;
  return freeze(fakeHarden);
};$h͏_once.tameHarden(tameHarden);
freeze(tameHarden);
})()
,
// === 53. ses ./src/tame-symbol-constructor.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let Symbol,entries,fromEntries,getOwnPropertyDescriptors,defineProperties,arrayMap,functionBind;$h͏_imports([["./commons.js", [["Symbol",[$h͏_a => (Symbol = $h͏_a)]],["entries",[$h͏_a => (entries = $h͏_a)]],["fromEntries",[$h͏_a => (fromEntries = $h͏_a)]],["getOwnPropertyDescriptors",[$h͏_a => (getOwnPropertyDescriptors = $h͏_a)]],["defineProperties",[$h͏_a => (defineProperties = $h͏_a)]],["arrayMap",[$h͏_a => (arrayMap = $h͏_a)]],["functionBind",[$h͏_a => (functionBind = $h͏_a)]]]]]);









/**
 * This taming provides a tamed alternative to the original `Symbol` constructor
 * that starts off identical, except that all its properties are "temporarily"
 * configurable. The original `Symbol` constructor remains unmodified on
 * the start compartment's global. The tamed alternative is used as the shared
 * `Symbol` constructor on constructed compartments.
 *
 * Starting these properties as configurable assumes two succeeding phases of
 * processing: A permit enforcement phase, that
 * removes all properties not on the permits (which requires them to be
 * configurable) and a global hardening step that freezes all primordials,
 * returning these properties to their expected non-configurable status.
 *
 * The ses shim is constructed to eventually enable vetted shims to run between
 * repair and global hardening. However, such vetted shims would normally
 * run in the start compartment, which continues to use the original unmodified
 * `Symbol`, so they should not normally be affected by the temporary
 * configurability of these properties.
 *
 * Note that the spec refers to the global `Symbol` function as the
 * ["Symbol Constructor"](https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-symbol-constructor)
 * even though it has a call behavior (can be called as a function) and does not
 * not have a construct behavior (cannot be called with `new`). Accordingly,
 * to tame it, we must replace it with a function without a construct
 * behavior.
 */
       const tameSymbolConstructor = () => {
  const OriginalSymbol = Symbol;
  const SymbolPrototype = OriginalSymbol.prototype;

  // Bypass Hermes bug, fixed in: https://github.com/facebook/hermes/commit/00f18c89c720e1c34592bb85a1a8d311e6e99599
  // Make a "copy" of the primordial [Symbol "constructor"](https://tc39.es/ecma262/#sec-symbol-description) which maintains all observable behavior. The primordial explicitly throws on `[[Construct]]` and has a `[[Call]]` which ignores the receiver. Binding also maintains the `toString` source as a native function. The `name` is restored below when copying own properties.
  const SharedSymbol = functionBind(Symbol, undefined);

  defineProperties(SymbolPrototype, {
    constructor: {
      value: SharedSymbol
      // leave other `constructor` attributes as is
    },
  });

  const originalDescsEntries = entries(
    getOwnPropertyDescriptors(OriginalSymbol),
  );
  const descs = fromEntries(
    arrayMap(originalDescsEntries, ([name, desc]) => [
      name,
      { ...desc, configurable: true },
    ]),
  );
  defineProperties(SharedSymbol, descs);

  return { '%SharedSymbol%': SharedSymbol };
};$h͏_once.tameSymbolConstructor(tameSymbolConstructor);
})()
,
// === 54. ses ./src/tame-faux-data-properties.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let getOwnPropertyDescriptor,apply,defineProperty,toStringTagSymbol;$h͏_imports([["./commons.js", [["getOwnPropertyDescriptor",[$h͏_a => (getOwnPropertyDescriptor = $h͏_a)]],["apply",[$h͏_a => (apply = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["toStringTagSymbol",[$h͏_a => (toStringTagSymbol = $h͏_a)]]]]]);






const throws = thunk => {
  try {
    thunk();
    return false;
  } catch (er) {
    return true;
  }
};

/**
 * Exported for convenience of unit testing. Harmless, but not expected
 * to be useful by itself.
 *
 * @param {any} obj
 * @param {string|symbol} prop
 * @param {any} expectedValue
 * @returns {boolean}
 * Returns whether `tameFauxDataProperty` turned the property in question
 * from an apparent faux data property into the actual data property it
 * seemed to emulate.
 * If this function returns `false`, then we hope no effects happened.
 * However, sniffing out if an accessor property seems to be a faux data
 * property requires invoking the getter and setter functions that might
 * possibly have side effects.
 * `tameFauxDataProperty` is not in a position to tell.
 */
       const tameFauxDataProperty = (obj, prop, expectedValue) => {
  if (obj === undefined) {
    // The object does not exist in this version of the platform
    return false;
  }
  const desc = getOwnPropertyDescriptor(obj, prop);
  if (!desc || 'value' in desc) {
    // The property either doesn't exist, or is already an actual data property.
    return false;
  }
  const { get, set } = desc;
  if (typeof get !== 'function' || typeof set !== 'function') {
    // A faux data property has both a getter and a setter
    return false;
  }
  if (get() !== expectedValue) {
    // The getter called by itself should produce the expectedValue
    return false;
  }
  if (apply(get, obj, []) !== expectedValue) {
    // The getter called with `this === obj` should also return the
    // expectedValue.
    return false;
  }
  const testValue = 'Seems to be a setter';
  const subject1 = { __proto__: null };
  apply(set, subject1, [testValue]);
  if (subject1[prop] !== testValue) {
    // The setter called with an unrelated object as `this` should
    // set the property on the object.
    return false;
  }
  const subject2 = { __proto__: obj };
  apply(set, subject2, [testValue]);
  if (subject2[prop] !== testValue) {
    // The setter called on an object that inherits from `obj` should
    // override the property from `obj` as if by assignment.
    return false;
  }
  if (!throws(() => apply(set, obj, [expectedValue]))) {
    // The setter called with `this === obj` should throw without having
    // caused any effect.
    // This is the test that has the greatest danger of leaving behind some
    // persistent side effect. The most obvious one is to emulate a
    // successful assignment to the property. That's why this test
    // uses `expectedValue`, so that case is likely not to actually
    // change anything.
    return false;
  }
  if ('originalValue' in get) {
    // The ses-shim uniquely, as far as we know, puts an `originalValue`
    // property on the getter, so that reflect property tranversal algorithms,
    // like `harden`, will traverse into the enulated value without
    // calling the getter. That does not happen until `permits-intrinsics.js`
    // which is much later. So if we see one this early, we should
    // not assume we understand what's going on.
    return false;
  }

  // We assume that this code runs before any untrusted code runs, so
  // we do not need to worry about the above conditions passing because of
  // malicious intent. In fact, it runs even before vetted shims are supposed
  // to run, between repair and hardening. Given that, after all these tests
  // pass, we have adequately validated that the property in question is
  // an accessor function whose purpose is suppressing the override mistake,
  // i.e., enabling a non-writable property to be overridden by assignment.
  // In that case, here we *temporarily* turn it into the data property
  // it seems to emulate, but writable so that it does not trigger the
  // override mistake while in this temporary state.

  // For those properties that are also listed in `enablements.js`,
  // that phase will re-enable override for these properties, but
  // via accessor functions that SES controls, so we know what they are
  // doing. In addition, the getter functions installed by
  // `enable-property-overrides.js` have an `originalValue` field
  // enabling meta-traversal code like harden to visit the original value
  // without calling the getter.

  if (desc.configurable === false) {
    // Even though it seems to be a faux data property, we're unable to fix it.
    return false;
  }

  // Many of the `return false;` cases above plausibly should be turned into
  // errors, or an least generate warnings. However, for those, the checks
  // following this phase are likely to signal an error anyway.

  // At this point, we have passed all our sniff checks for validating that
  // it seems to be a faux data property with the expected value. Turn
  // it into the actual data property it emulates, but writable so there is
  // not yet an override mistake problem.

  defineProperty(obj, prop, {
    value: expectedValue,
    writable: true,
    enumerable: desc.enumerable,
    configurable: true,
  });

  return true;
};

/**
 * In JavaScript, the so-called "override mistake" is the inability to
 * override an inherited non-writable data property by assignment. A common
 * workaround is to instead define an accessor property that acts like
 * a non-writable data property, except that it allows an object that
 * inherits this property to override it by assignment. Let's call
 * an access property that acts this way a "faux data property". In this
 * ses-shim, `enable-property-overrides.js` makes the properties listed in
 * `enablements.js` into faux data properties.
 *
 * But the ses-shim is not alone in use of this trick. Starting with the
 * [Iterator Helpers proposal](https://github.com/tc39/proposal-iterator-helpers),
 * some properties are defined as (what we call) faux data properties.
 * Some of these are new properties (`Interator.prototype.constructor`) and
 * some are old data properties converted to accessor properties
 * (`Iterator.prototype[String.toStringTag]`). So the ses-shim needs to be
 * prepared for some enumerated set of properties to already be faux data
 * properties in the platform prior to our initialization.
 *
 * For these possible faux data properties, it is important that
 * `permits.js` describe each as a data property, so that it can further
 * constrain the apparent value (that allegedly would be returned by the
 * getter) according to its own permits.
 *
 * However, at the time of this writing, the precise behavior specified
 * by the iterator-helpers proposal for these faux data properties is
 * novel. We should not be too confident that all further such platform
 * additions do what we would now expect. So, for each of these possible
 * faux data properties, we do some sniffing to see if it behaves as we
 * currently expect a faux data property to act. If not, then
 * `tameFauxDataProperties` tries not to modify it, leaving it to later
 * checks, especially `permits-intrinsics.js`, to error when it sees an
 * unexpected accessor.
 *
 * If one of these enumerated accessor properties does seem to be
 * a faithful faux data property, then `tameFauxDataProperties` itself
 * *tempoarily* turns it into the actual data property that it seems to emulate.
 * This data property starts as writable, so that in this state it will
 * not trigger the override mistake, i.e., assignment to an object inheriting
 * this property is allowed to succeed at overriding this property.
 *
 * For those properties that should be a faux data property rather than an
 * actual one, such as those from the iterator-helpers proposal,
 * they should be listed as such in `enablements.js`, so
 * `enable-property-overrides.js` will turn it back into a faux data property.
 * But one controlled by the ses-shim, whose behavior we understand.
 *
 * `tameFauxDataProperties`, which turns these into actual data properties,
 * happens during the `repairIntrinsics` phase
 * of `lockdown`, before even vetted shim are supposed to run.
 * `enable-property-overrides.js` runs after vetted shims, turning the
 * appropriate ones back into faux data properties. Thus vetted shims
 * can observe the possibly non-conforming state where these are temporarily
 * actual data properties, rather than faux data properties.
 *
 * Coordinate the property enumeration here
 * with `enablements.js`, so the appropriate properties are
 * turned back to faux data properties.
 *
 * @param {Record<any,any>} intrinsics
 */$h͏_once.tameFauxDataProperty(tameFauxDataProperty);
       const tameFauxDataProperties = intrinsics => {
  // https://github.com/tc39/proposal-iterator-helpers
  tameFauxDataProperty(
    intrinsics['%IteratorPrototype%'],
    'constructor',
    intrinsics.Iterator,
  );
  // https://github.com/tc39/proposal-iterator-helpers
  tameFauxDataProperty(
    intrinsics['%IteratorPrototype%'],
    toStringTagSymbol,
    'Iterator',
  );
};$h͏_once.tameFauxDataProperties(tameFauxDataProperties);
})()
,
// === 55. ses ./src/tame-regenerator-runtime.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let defineProperty,iteratorPrototype,iteratorSymbol,hasOwn;$h͏_imports([["./commons.js", [["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]],["iteratorPrototype",[$h͏_a => (iteratorPrototype = $h͏_a)]],["iteratorSymbol",[$h͏_a => (iteratorSymbol = $h͏_a)]],["hasOwn",[$h͏_a => (hasOwn = $h͏_a)]]]]]);






       const tameRegeneratorRuntime = () => {
  const iter = iteratorPrototype[iteratorSymbol];
  defineProperty(iteratorPrototype, iteratorSymbol, {
    configurable: true,
    get() {
      return iter;
    },
    set(value) {
      // ignore the assignment on IteratorPrototype
      if (this === iteratorPrototype) return;
      if (hasOwn(this, iteratorSymbol)) {
        this[iteratorSymbol] = value;
      }
      defineProperty(this, iteratorSymbol, {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
      });
    },
  });
};$h͏_once.tameRegeneratorRuntime(tameRegeneratorRuntime);
})()
,
// === 56. ses ./src/shim-arraybuffer-transfer.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let ArrayBuffer,arrayBufferPrototype,arrayBufferSlice,arrayBufferGetByteLength,Uint8Array,typedArraySet,globalThis,TypeError,defineProperty;$h͏_imports([["./commons.js", [["ArrayBuffer",[$h͏_a => (ArrayBuffer = $h͏_a)]],["arrayBufferPrototype",[$h͏_a => (arrayBufferPrototype = $h͏_a)]],["arrayBufferSlice",[$h͏_a => (arrayBufferSlice = $h͏_a)]],["arrayBufferGetByteLength",[$h͏_a => (arrayBufferGetByteLength = $h͏_a)]],["Uint8Array",[$h͏_a => (Uint8Array = $h͏_a)]],["typedArraySet",[$h͏_a => (typedArraySet = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["defineProperty",[$h͏_a => (defineProperty = $h͏_a)]]]]]);











       const shimArrayBufferTransfer = () => {
  if (typeof arrayBufferPrototype.transfer === 'function') {
    // Assume already exists so does not need to be shimmed.
    // Such conditional shimming is ok in this case since ArrayBuffer.p.transfer
    // is already officially part of JS.
    //
    // Empty object because this shim has nothing for `addIntrinsics` to add.
    return {};
  }
  const clone = globalThis.structuredClone;
  if (typeof clone !== 'function') {
    // On a platform with neither `Array.prototype.transfer`
    // nor `structuredClone`, this shim does nothing.
    // For example, Node <= 16 has neither.
    //
    // Empty object because this shim has nothing for `addIntrinsics` to add.
    return {};
    // TODO Rather than doing nothing, should the endo ses-shim throw
    // in this case?
    // throw TypeError(
    //   `Can only shim missing ArrayBuffer.prototype.transfer on a platform with "structuredClone"`,
    // );
    // For example, endo no longer supports Node <= 16. All browsers have
    // `structuredClone`. XS has `Array.prototype.transfer`. Are there still
    // any platforms without both that Endo should still support?
    // What about Hermes?
  }

  /**
   * @type {ThisType<ArrayBuffer>}
   */
  const methods = {
    /**
     * @param {number} [newLength]
     */
    transfer(newLength = undefined) {
      // Using this builtin getter also ensures that `this` is a genuine
      // ArrayBuffer.
      const oldLength = arrayBufferGetByteLength(this);
      if (newLength === undefined || newLength === oldLength) {
        return clone(this, { transfer: [this] });
      }
      if (typeof newLength !== 'number') {
        throw TypeError(`transfer newLength if provided must be a number`);
      }
      if (newLength > oldLength) {
        const result = new ArrayBuffer(newLength);
        const taOld = new Uint8Array(this);
        const taNew = new Uint8Array(result);
        typedArraySet(taNew, taOld);
        // Using clone only to detach, and only after the copy succeeds
        clone(this, { transfer: [this] });
        return result;
      } else {
        const result = arrayBufferSlice(this, 0, newLength);
        // Using clone only to detach, and only after the slice succeeds
        clone(this, { transfer: [this] });
        return result;
      }
    },
  };

  defineProperty(arrayBufferPrototype, 'transfer', {
    // @ts-expect-error
    value: methods.transfer,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  // Empty object because this shim has nothing for `addIntrinsics` to add.
  return {};
};$h͏_once.shimArrayBufferTransfer(shimArrayBufferTransfer);
})()
,
// === 57. ses ./src/reporting.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let functionBind,globalThis,assert;$h͏_imports([["./commons.js", [["functionBind",[$h͏_a => (functionBind = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);


/**
 * @import {Reporter, GroupReporter} from './reporting-types.js'
 */

/**
 * Creates a suitable reporter for internal errors and warnings out of the
 * Node.js console.error to ensure all messages to go stderr, including the
 * group label.
 * Accounts for the extra space introduced by console.error as a delimiter
 * between the indent and subsequent arguments.
 *
 * @param {(...message: Array<any>) => void} print
 */
const makeReportPrinter = print => {
  let indent = false;
  /** @param {Array<any>} args */
  const printIndent = (...args) => {
    if (indent) {
      print(' ', ...args);
    } else {
      print(...args);
    }
  };
  return /** @type {GroupReporter} */ ({
    warn(...args) {
      printIndent(...args);
    },
    error(...args) {
      printIndent(...args);
    },
    groupCollapsed(...args) {
      assert(!indent);
      print(...args);
      indent = true;
    },
    groupEnd() {
      indent = false;
    },
  });
};

const mute = () => {};

/**
 * @param {"platform" | "console" | "none"} reporting
 */
       const chooseReporter = reporting => {
  if (reporting === 'none') {
    return makeReportPrinter(mute);
  }
  if (
    reporting === 'console' ||
    globalThis.window === globalThis ||
    globalThis.importScripts !== undefined
  ) {
    return console;
  }
  if (globalThis.console !== undefined) {
    // On Node.js, we send all feedback to stderr, regardless of purported level.
    const console = globalThis.console;
    const error = functionBind(console.error, console);
    return makeReportPrinter(error);
  }
  if (globalThis.print !== undefined) {
    return makeReportPrinter(globalThis.print);
  }
  return makeReportPrinter(mute);
};

/**
 * @param {string} groupLabel
 * @param {GroupReporter} console
 * @param {(internalConsole: Reporter) => void} callback
 */$h͏_once.chooseReporter(chooseReporter);
       const reportInGroup = (groupLabel, console, callback) => {
  const { warn, error, groupCollapsed, groupEnd } = console;
  const grouping = groupCollapsed && groupEnd;
  let groupStarted = false;
  try {
    return callback({
      warn(...args) {
        if (grouping && !groupStarted) {
          groupCollapsed(groupLabel);
          groupStarted = true;
        }
        warn(...args);
      },
      error(...args) {
        if (grouping && !groupStarted) {
          groupCollapsed(groupLabel);
          groupStarted = true;
        }
        error(...args);
      },
    });
  } finally {
    if (grouping && groupStarted) {
      groupEnd();
      groupStarted = false;
    }
  }
};$h͏_once.reportInGroup(reportInGroup);
})()
,
// === 58. ses ./src/lockdown.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let getenv,FERAL_FUNCTION,FERAL_EVAL,TypeError,arrayFilter,globalThis,is,ownKeys,stringSplit,noEvalEvaluate,getOwnPropertyNames,getPrototypeOf,makeHardener,makeIntrinsicsCollector,removeUnpermittedIntrinsics,tameFunctionConstructors,tameDateConstructor,tameMathObject,tameRegExpConstructor,enablePropertyOverrides,tameLocaleMethods,setGlobalObjectConstantProperties,setGlobalObjectMutableProperties,setGlobalObjectEvaluators,makeSafeEvaluator,initialGlobalPropertyNames,tameFunctionToString,tameDomains,tameModuleSource,tameConsole,tameErrorConstructor,assert,makeAssert,getAnonymousIntrinsics,makeCompartmentConstructor,tameHarden,tameSymbolConstructor,tameFauxDataProperties,tameRegeneratorRuntime,shimArrayBufferTransfer,reportInGroup,chooseReporter;$h͏_imports([["@endo/env-options", [["getEnvironmentOption",[$h͏_a => (getenv = $h͏_a)]]]],["@endo/immutable-arraybuffer/shim.js", []],["./commons.js", [["FERAL_FUNCTION",[$h͏_a => (FERAL_FUNCTION = $h͏_a)]],["FERAL_EVAL",[$h͏_a => (FERAL_EVAL = $h͏_a)]],["TypeError",[$h͏_a => (TypeError = $h͏_a)]],["arrayFilter",[$h͏_a => (arrayFilter = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]],["is",[$h͏_a => (is = $h͏_a)]],["ownKeys",[$h͏_a => (ownKeys = $h͏_a)]],["stringSplit",[$h͏_a => (stringSplit = $h͏_a)]],["noEvalEvaluate",[$h͏_a => (noEvalEvaluate = $h͏_a)]],["getOwnPropertyNames",[$h͏_a => (getOwnPropertyNames = $h͏_a)]],["getPrototypeOf",[$h͏_a => (getPrototypeOf = $h͏_a)]]]],["./make-hardener.js", [["makeHardener",[$h͏_a => (makeHardener = $h͏_a)]]]],["./intrinsics.js", [["makeIntrinsicsCollector",[$h͏_a => (makeIntrinsicsCollector = $h͏_a)]]]],["./permits-intrinsics.js", [["default",[$h͏_a => (removeUnpermittedIntrinsics = $h͏_a)]]]],["./tame-function-constructors.js", [["default",[$h͏_a => (tameFunctionConstructors = $h͏_a)]]]],["./tame-date-constructor.js", [["default",[$h͏_a => (tameDateConstructor = $h͏_a)]]]],["./tame-math-object.js", [["default",[$h͏_a => (tameMathObject = $h͏_a)]]]],["./tame-regexp-constructor.js", [["default",[$h͏_a => (tameRegExpConstructor = $h͏_a)]]]],["./enable-property-overrides.js", [["default",[$h͏_a => (enablePropertyOverrides = $h͏_a)]]]],["./tame-locale-methods.js", [["default",[$h͏_a => (tameLocaleMethods = $h͏_a)]]]],["./global-object.js", [["setGlobalObjectConstantProperties",[$h͏_a => (setGlobalObjectConstantProperties = $h͏_a)]],["setGlobalObjectMutableProperties",[$h͏_a => (setGlobalObjectMutableProperties = $h͏_a)]],["setGlobalObjectEvaluators",[$h͏_a => (setGlobalObjectEvaluators = $h͏_a)]]]],["./make-safe-evaluator.js", [["makeSafeEvaluator",[$h͏_a => (makeSafeEvaluator = $h͏_a)]]]],["./permits.js", [["initialGlobalPropertyNames",[$h͏_a => (initialGlobalPropertyNames = $h͏_a)]]]],["./tame-function-tostring.js", [["tameFunctionToString",[$h͏_a => (tameFunctionToString = $h͏_a)]]]],["./tame-domains.js", [["tameDomains",[$h͏_a => (tameDomains = $h͏_a)]]]],["./tame-module-source.js", [["tameModuleSource",[$h͏_a => (tameModuleSource = $h͏_a)]]]],["./error/tame-console.js", [["tameConsole",[$h͏_a => (tameConsole = $h͏_a)]]]],["./error/tame-error-constructor.js", [["default",[$h͏_a => (tameErrorConstructor = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]],["makeAssert",[$h͏_a => (makeAssert = $h͏_a)]]]],["./get-anonymous-intrinsics.js", [["getAnonymousIntrinsics",[$h͏_a => (getAnonymousIntrinsics = $h͏_a)]]]],["./compartment.js", [["makeCompartmentConstructor",[$h͏_a => (makeCompartmentConstructor = $h͏_a)]]]],["./tame-harden.js", [["tameHarden",[$h͏_a => (tameHarden = $h͏_a)]]]],["./tame-symbol-constructor.js", [["tameSymbolConstructor",[$h͏_a => (tameSymbolConstructor = $h͏_a)]]]],["./tame-faux-data-properties.js", [["tameFauxDataProperties",[$h͏_a => (tameFauxDataProperties = $h͏_a)]]]],["./tame-regenerator-runtime.js", [["tameRegeneratorRuntime",[$h͏_a => (tameRegeneratorRuntime = $h͏_a)]]]],["./shim-arraybuffer-transfer.js", [["shimArrayBufferTransfer",[$h͏_a => (shimArrayBufferTransfer = $h͏_a)]]]],["./reporting.js", [["reportInGroup",[$h͏_a => (reportInGroup = $h͏_a)]],["chooseReporter",[$h͏_a => (chooseReporter = $h͏_a)]]]]]);






























































/** @import {LockdownOptions} from '../types.js' */

const { Fail, details: X, quote: q } = assert;

/** @type {Error=} */
let priorRepairIntrinsics;

/** @type {Error=} */
let priorHardenIntrinsics;

// Build a harden() with an empty fringe.
// Gate it on lockdown.
/**
 * @template T
 * @param {T} ref
 * @returns {T}
 */
const safeHarden = makeHardener();

/**
 * @callback Transform
 * @param {string} source
 * @returns {string}
 */

/**
 * @callback CompartmentConstructor
 * @param {object} endowments
 * @param {object} moduleMap
 * @param {object} [options]
 * @param {Array<Transform>} [options.transforms]
 * @param {Array<Transform>} [options.__shimTransforms__]
 */

// TODO https://github.com/endojs/endo/issues/814
// Lockdown currently allows multiple calls provided that the specified options
// of every call agree.  With experience, we have observed that lockdown should
// only ever need to be called once and that simplifying lockdown will improve
// the quality of audits.

const probeHostEvaluators = () => {
  let functionAllowed;
  try {
    functionAllowed = FERAL_FUNCTION('return true')();
  } catch (_error) {
    // We reach here if the Function() constructor is outright forbidden by a
    // strict Content Security Policy (containing either a `default-src` or a
    // `script-src` directive), not been implemented in the host, or the host
    // is configured to throw an exception instead of `new Function`.
    functionAllowed = false;
  }

  let evalAllowed;
  try {
    evalAllowed = FERAL_EVAL('true');
  } catch (_error) {
    // We reach here if `eval` is outright forbidden by a strict Content Security Policy,
    // not implemented in the host, or the host is configured to throw an exception.
    // We allow this for SES usage that delegates the responsibility to isolate
    // guest code to production code generation.
    evalAllowed = false;
  }

  let directEvalAllowed;
  if (functionAllowed && evalAllowed) {
    directEvalAllowed = FERAL_FUNCTION(
      'eval',
      'SES_changed',
      `\
        eval("SES_changed = true");
        return SES_changed;
      `,
    )(FERAL_EVAL, false);
    // If we get here and SES_changed stayed false, that means the eval was sloppy
    // and indirect, which generally creates a new global.
    // We are going to throw an exception for failing to initialize SES, but
    // good neighbors clean up.
    if (!directEvalAllowed) {
      delete globalThis.SES_changed;
    }
  }

  return { functionAllowed, evalAllowed, directEvalAllowed };
};

/**
 * @param {LockdownOptions} [options]
 */
       const repairIntrinsics = (options = {}) => {
  // First time, absent options default to 'safe'.
  // Subsequent times, absent options default to first options.
  // Thus, all present options must agree with first options.
  // Reconstructing `option` here also ensures that it is a well
  // behaved record, with only own data properties.
  //
  // The `overrideTaming` is not a safety issue. Rather it is a tradeoff
  // between code compatibility, which is better with the `'moderate'`
  // setting, and tool compatibility, which is better with the `'min'`
  // setting. See
  // https://github.com/Agoric/SES-shim/blob/master/packages/ses/README.md#enabling-override-by-assignment)
  // for an explanation of when to use which.
  //
  // The `stackFiltering` is not a safety issue. Rather it is a tradeoff
  // between relevance and completeness of the stack frames shown on the
  // console. Setting`stackFiltering` to `'verbose'` applies no filters, providing
  // the raw stack frames that can be quite verbose. Setting
  // `stackFrameFiltering` to`'concise'` limits the display to the stack frame
  // information most likely to be relevant, eliminating distracting frames
  // such as those from the infrastructure. However, the bug you're trying to
  // track down might be in the infrastructure, in which case the `'verbose'` setting
  // is useful. See
  // [`stackFiltering` options](https://github.com/Agoric/SES-shim/blob/master/packages/ses/docs/lockdown.md#stackfiltering-options)
  // for an explanation.

  const {
    errorTaming = /** @type {'safe' | 'unsafe' | 'unsafe-debug'} */ (
      getenv('LOCKDOWN_ERROR_TAMING', 'safe', ['unsafe', 'unsafe-debug'])
    ),
    errorTrapping = /** @type {'platform' | 'none' | 'report' | 'abort' | 'exit'} */ (
      getenv('LOCKDOWN_ERROR_TRAPPING', 'platform', [
        'none',
        'report',
        'abort',
        'exit',
      ])
    ),
    reporting = /** @type {'platform' | 'console' | 'none'} */ (
      getenv('LOCKDOWN_REPORTING', 'platform', ['console', 'none'])
    ),
    unhandledRejectionTrapping = /** @type {'none' | 'report'} */ (
      getenv('LOCKDOWN_UNHANDLED_REJECTION_TRAPPING', 'report', ['none'])
    ),
    regExpTaming = /** @type {'safe' | 'unsafe'} */ (
      getenv('LOCKDOWN_REGEXP_TAMING', 'safe', ['unsafe'])
    ),
    localeTaming = /** @type {'safe' | 'unsafe'} */ (
      getenv('LOCKDOWN_LOCALE_TAMING', 'safe', ['unsafe'])
    ),
    consoleTaming = /** @type {'unsafe' | 'safe'} */ (
      getenv('LOCKDOWN_CONSOLE_TAMING', 'safe', ['unsafe'])
    ),
    overrideTaming = /** @type {'moderate' | 'min' | 'severe'} */ (
      getenv('LOCKDOWN_OVERRIDE_TAMING', 'moderate', ['min', 'severe'])
    ),
    stackFiltering = /** @type {'concise' | 'omit-frames' | 'shorten-paths' | 'verbose'} */ (
      getenv('LOCKDOWN_STACK_FILTERING', 'concise', [
        'omit-frames',
        'shorten-paths',
        'verbose',
      ])
    ),
    domainTaming = /** @type {'safe' | 'unsafe'} */ (
      getenv('LOCKDOWN_DOMAIN_TAMING', 'safe', ['unsafe'])
    ),
    evalTaming = /** @type {'safe-eval' | 'unsafe-eval' | 'no-eval'} */ (
      getenv('LOCKDOWN_EVAL_TAMING', 'safe-eval', [
        'unsafe-eval',
        'no-eval',
        // deprecated
        'safeEval',
        'unsafeEval',
        'noEval',
      ])
    ),
    overrideDebug = /** @type {string[]} */ (
      arrayFilter(
        stringSplit(getenv('LOCKDOWN_OVERRIDE_DEBUG', ''), ','),
        /** @param {string} debugName */
        debugName => debugName !== '',
      )
    ),
    legacyRegeneratorRuntimeTaming = /** @type {'safe' | 'unsafe-ignore'} */ (
      getenv('LOCKDOWN_LEGACY_REGENERATOR_RUNTIME_TAMING', 'safe', [
        'unsafe-ignore',
      ])
    ),
    __hardenTaming__ = /** @type {'safe' | 'unsafe'} */ (
      getenv('LOCKDOWN_HARDEN_TAMING', 'safe', ['unsafe'])
    ),
    dateTaming, // deprecated
    mathTaming, // deprecated
    ...extraOptions
  } = options;

  // Assert that only supported options were passed.
  // Use Reflect.ownKeys to reject symbol-named properties as well.
  const extraOptionsNames = ownKeys(extraOptions);
  extraOptionsNames.length === 0 ||
    Fail`lockdown(): non supported option ${q(extraOptionsNames)}`;

  const reporter = chooseReporter(reporting);
  const { warn } = reporter;

  if (dateTaming !== undefined) {
    warn(
      `SES The 'dateTaming' option is deprecated and does nothing. In the future specifying it will be an error.`,
    );
  }
  if (mathTaming !== undefined) {
    warn(
      `SES The 'mathTaming' option is deprecated and does nothing. In the future specifying it will be an error.`,
    );
  }

  priorRepairIntrinsics === undefined ||
    // eslint-disable-next-line @endo/no-polymorphic-call
    assert.fail(
      X`Already locked down at ${priorRepairIntrinsics} (SES_ALREADY_LOCKED_DOWN)`,
      TypeError,
    );
  // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_ALREADY_LOCKED_DOWN.md
  priorRepairIntrinsics = TypeError('Prior lockdown (SES_ALREADY_LOCKED_DOWN)');
  // Tease V8 to generate the stack string and release the closures the stack
  // trace retained:
  priorRepairIntrinsics.stack;

  const { functionAllowed, evalAllowed, directEvalAllowed } =
    probeHostEvaluators();

  if (
    directEvalAllowed === false &&
    evalTaming === 'safe-eval' &&
    (functionAllowed || evalAllowed)
  ) {
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_DIRECT_EVAL.md
    throw TypeError(
      "SES cannot initialize unless 'eval' is the original intrinsic 'eval', suitable for direct eval (dynamically scoped eval) (SES_DIRECT_EVAL)",
    );
  }

  /**
   * Because of packagers and bundlers, etc, multiple invocations of lockdown
   * might happen in separate instantiations of the source of this module.
   * In that case, each one sees its own `firstOptions` variable, so the test
   * above will not detect that lockdown has already happened. We
   * unreliably test some telltale signs that lockdown has run, to avoid
   * trying to lock down a locked down environment. Although the test is
   * unreliable, this is consistent with the SES threat model. SES provides
   * security only if it runs first in a given realm, or if everything that
   * runs before it is SES-aware and cooperative. Neither SES nor anything
   * can protect itself from corrupting code that runs first. For these
   * purposes, code that turns a realm into something that passes these
   * tests without actually locking down counts as corrupting code.
   *
   * The specifics of what this tests for may change over time, but it
   * should be consistent with any setting of the lockdown options.
   */
  const seemsToBeLockedDown = () => {
    return (
      globalThis.Function.prototype.constructor !== globalThis.Function &&
      // @ts-ignore harden is absent on globalThis type def.
      typeof globalThis.harden === 'function' &&
      // @ts-ignore lockdown is absent on globalThis type def.
      typeof globalThis.lockdown === 'function' &&
      globalThis.Date.prototype.constructor !== globalThis.Date &&
      typeof globalThis.Date.now === 'function' &&
      // @ts-ignore does not recognize that Date constructor is a special
      // Function.
      // eslint-disable-next-line @endo/no-polymorphic-call
      is(globalThis.Date.prototype.constructor.now(), NaN)
    );
  };

  if (seemsToBeLockedDown()) {
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_MULTIPLE_INSTANCES.md
    throw TypeError(
      `Already locked down but not by this SES instance (SES_MULTIPLE_INSTANCES)`,
    );
  }

  /**
   * 1. TAME powers & gather intrinsics first.
   */

  tameDomains(domainTaming);

  // Replace Function.prototype.toString with one that recognizes
  // shimmed functions as honorary native functions.
  const markVirtualizedNativeFunction = tameFunctionToString();

  const { addIntrinsics, completePrototypes, finalIntrinsics } =
    makeIntrinsicsCollector(reporter);

  const tamedHarden = tameHarden(safeHarden, __hardenTaming__);
  addIntrinsics({ harden: tamedHarden });

  addIntrinsics(tameFunctionConstructors());

  addIntrinsics(tameDateConstructor());
  addIntrinsics(tameErrorConstructor(errorTaming, stackFiltering));
  addIntrinsics(tameMathObject());
  addIntrinsics(tameRegExpConstructor(regExpTaming));
  addIntrinsics(tameSymbolConstructor());
  addIntrinsics(shimArrayBufferTransfer());
  addIntrinsics(tameModuleSource());

  addIntrinsics(getAnonymousIntrinsics());

  completePrototypes();

  const intrinsics = finalIntrinsics();

  const hostIntrinsics = { __proto__: null };

  // The Node.js Buffer is a derived class of Uint8Array, and as such is often
  // passed around where a Uint8Array is expected.
  if (typeof globalThis.Buffer === 'function') {
    hostIntrinsics.Buffer = globalThis.Buffer;
  }

  /**
   * Wrap console unless suppressed.
   * At the moment, the console is considered a host power in the start
   * compartment, and not a primordial. Hence it is absent from the whilelist
   * and bypasses the intrinsicsCollector.
   *
   * @type {((error: any) => string | undefined) | undefined}
   */
  let optGetStackString;
  if (errorTaming === 'safe') {
    optGetStackString = intrinsics['%InitialGetStackString%'];
  }
  const consoleRecord = tameConsole(
    consoleTaming,
    errorTrapping,
    unhandledRejectionTrapping,
    optGetStackString,
  );
  globalThis.console = /** @type {Console} */ (consoleRecord.console);

  // The untamed Node.js console cannot itself be hardened as it has mutable
  // internal properties, but some of these properties expose internal versions
  // of classes from node's "primordials" concept.
  // eslint-disable-next-line no-underscore-dangle
  if (typeof (/** @type {any} */ (consoleRecord.console)._times) === 'object') {
    // SafeMap is a derived Map class used internally by Node
    // There doesn't seem to be a cleaner way to reach it.
    hostIntrinsics.SafeMap = getPrototypeOf(
      // eslint-disable-next-line no-underscore-dangle
      /** @type {any} */ (consoleRecord.console)._times,
    );
  }

  // @ts-ignore assert is absent on globalThis type def.
  if (
    (errorTaming === 'unsafe' || errorTaming === 'unsafe-debug') &&
    globalThis.assert === assert
  ) {
    // If errorTaming is 'unsafe' or 'unsafe-debug' we replace the
    // global assert with
    // one whose `details` template literal tag does not redact
    // unmarked substitution values. IOW, it blabs information that
    // was supposed to be secret from callers, as an aid to debugging
    // at a further cost in safety.
    // @ts-ignore assert is absent on globalThis type def.
    globalThis.assert = makeAssert(undefined, true);
  }

  // Replace *Locale* methods with their non-locale equivalents
  tameLocaleMethods(intrinsics, localeTaming);

  tameFauxDataProperties(intrinsics);

  /**
   * 2. Enforce PERMITS on shared intrinsics
   */

  // Remove non-standard properties.
  // All remaining functions encountered during whitelisting are
  // branded as honorary native functions.
  reportInGroup(
    'SES Removing unpermitted intrinsics',
    reporter,
    groupReporter =>
      removeUnpermittedIntrinsics(
        intrinsics,
        markVirtualizedNativeFunction,
        groupReporter,
      ),
  );

  // Initialize the powerful initial global, i.e., the global of the
  // start compartment, from the intrinsics.

  setGlobalObjectConstantProperties(globalThis);

  setGlobalObjectMutableProperties(globalThis, {
    intrinsics,
    newGlobalPropertyNames: initialGlobalPropertyNames,
    makeCompartmentConstructor,
    markVirtualizedNativeFunction,
  });

  if (
    evalTaming === 'no-eval' ||
    // deprecated
    evalTaming === 'noEval'
  ) {
    setGlobalObjectEvaluators(
      globalThis,
      noEvalEvaluate,
      markVirtualizedNativeFunction,
    );
  } else if (
    evalTaming === 'safe-eval' ||
    // deprecated
    evalTaming === 'safeEval'
  ) {
    const { safeEvaluate } = makeSafeEvaluator({ globalObject: globalThis });
    setGlobalObjectEvaluators(
      globalThis,
      safeEvaluate,
      markVirtualizedNativeFunction,
    );
  } else if (
    evalTaming === 'unsafe-eval' ||
    // deprecated
    evalTaming === 'unsafeEval'
  ) {
    // Leave eval function and Function constructor of the initial
    // compartment intact.
    // Other compartments will not have access to these evaluators unless a
    // guest program escapes containment.
  }

  /**
   * 3. HARDEN to share the intrinsics.
   *
   * We define hardenIntrinsics here so that options are in scope, but return
   * it to the caller because we intend to eventually allow vetted shims to run
   * between repairs and the hardening of intrinsics and so we can benchmark
   * repair separately from hardening.
   */

  const hardenIntrinsics = () => {
    priorHardenIntrinsics === undefined ||
      // eslint-disable-next-line @endo/no-polymorphic-call
      assert.fail(
        X`Already locked down at ${priorHardenIntrinsics} (SES_ALREADY_LOCKED_DOWN)`,
        TypeError,
      );
    // See https://github.com/endojs/endo/blob/master/packages/ses/error-codes/SES_ALREADY_LOCKED_DOWN.md
    priorHardenIntrinsics = TypeError(
      'Prior lockdown (SES_ALREADY_LOCKED_DOWN)',
    );
    // Tease V8 to generate the stack string and release the closures the stack
    // trace retained:
    priorHardenIntrinsics.stack;

    // Circumvent the override mistake.
    // TODO consider moving this to the end of the repair phase, and
    // therefore before vetted shims rather than afterwards. It is not
    // clear yet which is better.
    // @ts-ignore enablePropertyOverrides does its own input validation
    reportInGroup('SES Enabling property overrides', reporter, groupReporter =>
      enablePropertyOverrides(
        intrinsics,
        overrideTaming,
        groupReporter,
        overrideDebug,
      ),
    );
    if (legacyRegeneratorRuntimeTaming === 'unsafe-ignore') {
      tameRegeneratorRuntime();
    }

    // Finally register and optionally freeze all the intrinsics. This
    // must be the operation that modifies the intrinsics.
    const toHarden = {
      intrinsics,
      hostIntrinsics,
      globals: {
        // Harden evaluators
        Function: globalThis.Function,
        eval: globalThis.eval,
        // @ts-ignore Compartment does exist on globalThis
        Compartment: globalThis.Compartment,

        // Harden Symbol
        Symbol: globalThis.Symbol,
      },
    };

    // Harden Symbol and properties for initialGlobalPropertyNames in the host realm
    for (const prop of getOwnPropertyNames(initialGlobalPropertyNames)) {
      toHarden.globals[prop] = globalThis[prop];
    }

    tamedHarden(toHarden);

    return tamedHarden;
  };

  return hardenIntrinsics;
};$h͏_once.repairIntrinsics(repairIntrinsics);
})()
,
// === 59. ses ./src/lockdown-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let globalThis,repairIntrinsics;$h͏_imports([["./assert-sloppy-mode.js", []],["./commons.js", [["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./lockdown.js", [["repairIntrinsics",[$h͏_a => (repairIntrinsics = $h͏_a)]]]]]);








/** @import {LockdownOptions} from '../types.js' */

/**
 * @param {LockdownOptions} [options]
 */
globalThis.lockdown = options => {
  const hardenIntrinsics = repairIntrinsics(options);
  globalThis.harden = hardenIntrinsics();
};

/**
 * @param {LockdownOptions} [options]
 */
globalThis.repairIntrinsics = options => {
  const hardenIntrinsics = repairIntrinsics(options);
  // Reveal hardenIntrinsics after repairs.
  globalThis.hardenIntrinsics = () => {
    // Reveal harden after hardenIntrinsics.
    // Harden is dangerous before hardenIntrinsics because hardening just
    // about anything will inadvertently render intrinsics irreparable.
    // Also, for modules that must work both before or after lockdown (code
    // that is portable between JS and SES), the existence of harden in global
    // scope signals whether such code should attempt to use harden in the
    // defense of its own API.
    // @ts-ignore harden not yet recognized on globalThis.
    globalThis.harden = hardenIntrinsics();
  };
};
})()
,
// === 60. ses ./src/compartment-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let globalThis,makeCompartmentConstructor,tameFunctionToString,getGlobalIntrinsics,chooseReporter;$h͏_imports([["./commons.js", [["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./compartment.js", [["makeCompartmentConstructor",[$h͏_a => (makeCompartmentConstructor = $h͏_a)]]]],["./tame-function-tostring.js", [["tameFunctionToString",[$h͏_a => (tameFunctionToString = $h͏_a)]]]],["./intrinsics.js", [["getGlobalIntrinsics",[$h͏_a => (getGlobalIntrinsics = $h͏_a)]]]],["./reporting.js", [["chooseReporter",[$h͏_a => (chooseReporter = $h͏_a)]]]]]);





const markVirtualizedNativeFunction = tameFunctionToString();

const muteReporter = chooseReporter('none');

// @ts-ignore Compartment is definitely on globalThis.
globalThis.Compartment = makeCompartmentConstructor(
  makeCompartmentConstructor,
  // Any reporting that would need to be done should have already been done
  // during `lockdown()`.
  // See https://github.com/endojs/endo/pull/2624#discussion_r1840979770
  getGlobalIntrinsics(globalThis, muteReporter),
  markVirtualizedNativeFunction,
  {
    enforceNew: true,
  },
);
})()
,
// === 61. ses ./src/assert-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let globalThis,assert;$h͏_imports([["./commons.js", [["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./error/assert.js", [["assert",[$h͏_a => (assert = $h͏_a)]]]]]);


globalThis.assert = assert;
})()
,
// === 62. ses ./src/console-shim.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';let symbolFor,globalThis,defineCausalConsoleFromLogger,loggedErrorHandler;$h͏_imports([["./commons.js", [["symbolFor",[$h͏_a => (symbolFor = $h͏_a)]],["globalThis",[$h͏_a => (globalThis = $h͏_a)]]]],["./error/console.js", [["defineCausalConsoleFromLogger",[$h͏_a => (defineCausalConsoleFromLogger = $h͏_a)]]]],["./error/assert.js", [["loggedErrorHandler",[$h͏_a => (loggedErrorHandler = $h͏_a)]]]]]);



// TODO possible additional exports. Some are privileged.
// export { loggedErrorHandler };
// export {
//   makeCausalConsole,
//   consoleLevelMethods,
//   consoleOtherMethods,
//   makeLoggingConsoleKit,
//   filterConsole,
//   pumpLogToConsole,
// } from './src/error/console.js';
// export { assertLogs, throwsAndLogs } from './src/error/throws-and-logs.js';

/**
 * Makes a Console like the
 * [SES causal `console`](https://github.com/endojs/endo/blob/master/packages/ses/src/error/README.md)
 * but whose output is redirected to the supplied `logger` function.
 */
const makeCausalConsoleFromLoggerForSesAva =
  defineCausalConsoleFromLogger(loggedErrorHandler);

/**
 *`makeCausalConsoleFromLoggerForSesAva` is privileged because it exposes
 * unredacted error info onto the `Logger` provided by the caller. It
 * should not be made available to non-privileged code.
 *
 * Further, we consider this particular API choice to be experimental
 * and may change in the future. It is currently only intended for use by
 * `@endo/ses-ava`, with which it will be co-maintained.
 *
 * Thus, this `console-shim.js` makes `makeCausalConsoleFromLoggerForSesAva`
 * available on `globalThis` which it *assumes* is the global of the start
 * compartment and is therefore allowed to hold powers that should not be
 * available in constructed compartments. It makes it available as the value of
 * a global property named by a registered symbol named
 * `MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA`.
 *
 * Anyone accessing this, including `@endo/ses-ava`, should feature test for
 * this and be tolerant of its absence. It may indeed disappear from later
 * versions of the ses-shim.
 */
const MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA = symbolFor(
  'MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA',
);

globalThis[MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA] =
  makeCausalConsoleFromLoggerForSesAva;
})()
,
// === 63. ses ./index.js ===
({imports:$h͏_imports,liveVar:$h͏_live,onceVar:$h͏_once,import:$h͏_import,importMeta:$h͏____meta})=>(function(){'use strict';$h͏_imports([["./src/lockdown-shim.js", []],["./src/compartment-shim.js", []],["./src/assert-shim.js", []],["./src/console-shim.js", []]]);
})()
,
])()
// END of injected code from ses
  })()
  return module.exports
})()

    const lockdownOptions = {
      // lets code observe call stack, but easier debuggability
      errorTaming: 'unsafe',
      // shows the full call stack
      stackFiltering: 'verbose',
      // prevents most common override mistake cases from tripping up users
      overrideTaming: 'severe',
      // preserves JS locale methods, to avoid confusing users
      // prevents aliasing: toLocaleString() to toString(), etc
      localeTaming: 'unsafe',
    }

    lockdown(lockdownOptions)

    // initialize the kernel
    const createKernelCore = (function () {
  'use strict'
  return createKernelCore

  function createKernelCore ({
    // the platform api global
    globalRef,
    // package policy object
    lavamoatConfig,
    // kernel configuration
    loadModuleData,
    getRelativeModuleId,
    prepareModuleInitializerArgs,
    getExternalCompartment,
    globalThisRefs,
    // security options
    scuttleGlobalThis,
    debugMode,
    runWithPrecompiledModules,
    reportStatsHook,
  }) {
    // prepare the LavaMoat kernel-core factory
    // factory is defined within a Compartment
    // unless "runWithPrecompiledModules" is enabled
    let makeKernelCore
    if (runWithPrecompiledModules) {
      makeKernelCore = unsafeMakeKernelCore
    } else {
      // endowments:
      // - console is included for convenience
      // - Math is for untamed Math.random
      // - Date is for untamed Date.now
      const kernelCompartment = new Compartment({ console, Math, Date })
      makeKernelCore = kernelCompartment.evaluate(`(${unsafeMakeKernelCore})\n//# sourceURL=LavaMoat/core/kernel`)
    }
    const lavamoatKernel = makeKernelCore({
      globalRef,
      lavamoatConfig,
      loadModuleData,
      getRelativeModuleId,
      prepareModuleInitializerArgs,
      getExternalCompartment,
      globalThisRefs,
      scuttleGlobalThis,
      debugMode,
      runWithPrecompiledModules,
      reportStatsHook,
    })

    return lavamoatKernel
  }

  // this is serialized and run in a SES Compartment when "runWithPrecompiledModules" is false
  // mostly just exists to expose variables to internalRequire and loadBundle
  function unsafeMakeKernelCore ({
    globalRef,
    lavamoatConfig,
    loadModuleData,
    getRelativeModuleId,
    prepareModuleInitializerArgs,
    getExternalCompartment,
    globalThisRefs = ['globalThis'],
    scuttleGlobalThis = {},
    debugMode = false,
    runWithPrecompiledModules = false,
    reportStatsHook = () => {},
  }) {
    // "templateRequire" calls are inlined in "generateKernel"
    const { getEndowmentsForConfig, getBuiltinForConfig, applyEndowmentPropDescTransforms, copyWrappedGlobals, createFunctionWrapper } = // define endowmentsToolkit
(function(){
  const global = globalRef
  const exports = {}
  const module = { exports }
  ;(function(){
// START of injected code from endowmentsToolkit
// @ts-check

/**
 * Utilities for generating the endowments object based on a `globalRef` and a
 * {@link LMPolicy.PackagePolicy}.
 *
 * The contents of this file will be copied into the prelude template this
 * module has been written so that it required directly or copied and added to
 * the template with a small wrapper.
 *
 * The `PackagePolicy` uses a period-deliminated path notation to pull out deep
 * values from objects. These utilities help create an object populated with
 * only the deep properties specified in the `PackagePolicy`.
 *
 * @packageDocumentation
 */

/**
 * WARNING: This module is used directly by the runtime in webpack plugin which
 * uses simple shimming to assemble modules. It doesn't bundle properly. This
 * file cannot reqire any files or packages.
 */

module.exports = endowmentsToolkit

// Exports for testing
module.exports._test = { instrumentDynamicValueAtPath }

/**
 * Returns a compy of endowmentsToolkit initialized on provided configuration.
 *
 * @param {object} opts
 * @param {DefaultWrapperFn} [opts.createFunctionWrapper]
 * @param {boolean} [opts.handleGlobalWrite]
 * @param {Set<string>} [opts.knownWritableFields] - List of globals that can be
 *   mutated later
 */
function endowmentsToolkit({
  createFunctionWrapper = defaultCreateFunctionWrapper,
  handleGlobalWrite = false,
  knownWritableFields = new Set(),
} = {}) {
  return {
    // public API
    getEndowmentsForConfig,
    copyWrappedGlobals,
    getBuiltinForConfig,
    createFunctionWrapper,
    // internals exposed for core
    // TODO: hide eventually?
    makeMinimalViewOfRef,
    copyValueAtPath,
    applyGetSetPropDescTransforms,
    applyEndowmentPropDescTransforms,
  }

  /**
   * Creates an object populated with only the deep properties specified in the
   * packagePolicy
   *
   * @template {object} T Deep properties specified in the packagePolicy
   * @param {T} sourceRef - Object from which to copy properties
   * @param {LMPolicy.ResourcePolicy} packagePolicy - LavaMoat policy item
   *   representing a package
   * @param {object} unwrapTo - For getters and setters, when the this-value is
   *   unwrapFrom, is replaced as unwrapTo
   * @param {object} unwrapFrom - For getters and setters, the this-value to
   *   replace (default: targetRef)
   * @returns {Partial<T>} - The targetRef
   */
  function getEndowmentsForConfig(
    sourceRef,
    packagePolicy,
    unwrapTo,
    unwrapFrom
  ) {
    if (!packagePolicy.globals) {
      return {}
    }
    // validate read access from packagePolicy
    /** @type {string[]} */
    const whitelistedReads = []
    /** @type {Set<string>} */
    const allowedWriteFields = new Set()
    /** @type {string[]} */
    const explicitlyBanned = []

    Object.entries(packagePolicy.globals).forEach(
      ([path, packagePolicyValue]) => {
        const pathParts = path.split('.')
        // disallow dunder proto in path
        const pathContainsDunderProto = pathParts.some(
          (pathPart) => pathPart === '__proto__'
        )
        if (pathContainsDunderProto) {
          throw new Error(
            `Lavamoat - "__proto__" disallowed when creating minimal view. saw "${path}"`
          )
        }
        // false means no access. It's necessary so that overrides can also be used to tighten the policy
        if (packagePolicyValue === false) {
          explicitlyBanned.push(path)
          return
        }
        // write access handled elsewhere
        if (packagePolicyValue === 'write') {
          if (!handleGlobalWrite) {
            return
          }
          if (pathParts.length > 1) {
            throw new Error(
              `LavaMoat - write access is only allowed at the top level, saw "${path}"`
            )
          }
          allowedWriteFields.add(path)
          whitelistedReads.push(path)
          return
        }
        if (packagePolicyValue !== true) {
          throw new Error(
            `LavaMoat - unrecognizable policy value (${typeof packagePolicyValue}) for path "${path}"`
          )
        }
        whitelistedReads.push(path)
      }
    )
    // sort by length to optimize further steps
    whitelistedReads.sort((a, b) => a.length - b.length)
    return makeMinimalViewOfRef(
      sourceRef,
      whitelistedReads,
      unwrapTo,
      unwrapFrom,
      explicitlyBanned,
      allowedWriteFields
    )
  }

  /**
   * Creates an object populated with only the deep properties specified by the
   * paths array.
   *
   * @template {object} T
   * @param {T} sourceRef
   * @param {string[]} paths
   * @param {object} [unwrapTo]
   * @param {object} [unwrapFrom]
   * @param {string[]} [explicitlyBanned]
   * @param {Set<string>} [allowedWriteFields]
   * @returns {Partial<T>}
   */
  function makeMinimalViewOfRef(
    sourceRef,
    paths,
    unwrapTo,
    unwrapFrom,
    explicitlyBanned = [],
    allowedWriteFields = new Set()
  ) {
    /** @type {object} */
    const targetRef = {}
    paths.forEach((path) => {
      const pathParts = path.split('.')
      if (knownWritableFields.has(pathParts[0])) {
        if (allowedWriteFields.has(pathParts[0])) {
          makeWritableValueAtPath(pathParts[0], sourceRef, targetRef)
        } else {
          instrumentDynamicValueAtPath(pathParts, sourceRef, targetRef)
        }
      } else {
        copyValueAtPath(
          '',
          pathParts,
          explicitlyBanned,
          sourceRef,
          targetRef,
          unwrapTo,
          unwrapFrom
        )
      }
    })
    return targetRef
  }

  /**
   * Creates an object populated with only the deep properties specified in the
   * packagePolicy for builtins.
   *
   * @template {object} T
   * @param {T} moduleNamespace
   * @param {string} moduleId
   * @param {LMPolicy.BuiltinPolicy} policyBuiltin
   * @returns {Partial<T>}
   */
  function getBuiltinForConfig(moduleNamespace, moduleId, policyBuiltin) {
    /** @type {string[]} */
    const builtinPaths = []

    /** @type {string[]} */
    const explicitlyBanned = []

    // Collect the same paths information as getEndowmentsForConfig to enable
    // matching behavior of policy between globals and builtins
    Object.entries(policyBuiltin).forEach(([packagePath, allowed]) => {
      const packagePathParts = packagePath.split('.')
      if (moduleId === packagePathParts[0]) {
        const packagePathWithoutPackage = packagePathParts.slice(1).join('.')
        if (allowed === true) {
          builtinPaths.push(packagePathWithoutPackage)
        } else if (allowed === false) {
          explicitlyBanned.push(packagePathWithoutPackage)
        }
      }
    })
    const moduleNamespaceView = makeMinimalViewOfRef(
      moduleNamespace,
      builtinPaths.sort(),
      undefined,
      undefined,
      explicitlyBanned
    )
    return moduleNamespaceView
  }

  /**
   * @type {CopyValueAtPath}
   */
  function copyValueAtPath(
    visitedPath,
    pathParts,
    explicitlyBanned,
    sourceRef,
    targetRef,
    unwrapTo = sourceRef,
    unwrapFrom = targetRef
  ) {
    if (pathParts.length === 0) {
      throw new Error('unable to copy, must have pathParts, was empty')
    }
    const [nextPart, ...remainingParts] = pathParts
    const currentPath = extendPath(visitedPath, nextPart)
    // get the property from any depth in the property chain
    const { prop: sourcePropDesc } = getPropertyDescriptorDeep(
      sourceRef,
      nextPart
    )

    // if source missing the value to copy, just skip it
    if (isEmpty(sourcePropDesc)) {
      return
    }

    // if target already has a value, it must be extensible
    const targetPropDesc = Reflect.getOwnPropertyDescriptor(targetRef, nextPart)
    if (targetPropDesc) {
      // dont attempt to extend a getter or trigger a setter
      if (!('value' in targetPropDesc)) {
        throw new Error(
          `unable to copy on to targetRef, targetRef has a getter at "${currentPath}"`
        )
      }
      // value must be extensible (cant write properties onto it)
      const targetValue = targetPropDesc.value
      const valueType = typeof targetValue
      if (valueType !== 'object' && valueType !== 'function') {
        throw new Error(
          `unable to copy on to targetRef, targetRef value is not an obj or func at "${currentPath}"`
        )
      }
    }

    // if this is not the last path in the assignment, walk into the containing reference
    if (remainingParts.length > 0) {
      const { sourceValue, sourceWritable } = getSourceValue(sourcePropDesc)
      const nextSourceRef = sourceValue
      let nextTargetRef
      // check if value exists on target and does not need selective treatment
      if (targetPropDesc && !explicitlyBanned.includes(currentPath)) {
        // a value already exists, we should walk into it
        nextTargetRef = targetPropDesc.value
      } else {
        // its not populated so lets write to it
        // put an object to serve as a container
        const containerRef = {}
        const newPropDesc = {
          value: containerRef,
          writable: sourceWritable,
          enumerable: sourcePropDesc.enumerable,
          configurable: sourcePropDesc.configurable,
        }
        Reflect.defineProperty(targetRef, nextPart, newPropDesc)
        // the newly created container will be the next target
        nextTargetRef = containerRef
      }
      copyValueAtPath(
        currentPath,
        remainingParts,
        explicitlyBanned,
        nextSourceRef,
        nextTargetRef
      )
      return
    }

    // If conflicting rules exist, opt for the negative one. This should never happen
    if (explicitlyBanned.includes(currentPath)) {
      console.warn(`LavaMoat - conflicting rules exist for "${currentPath}"`)
      return
    }

    // this is the last part of the path, the value we're trying to actually copy
    // if has getter/setter - apply this-value unwrapping
    if (!('value' in sourcePropDesc)) {
      // wrapper setter/getter with correct receiver
      const wrapperPropDesc = applyGetSetPropDescTransforms(
        sourcePropDesc,
        unwrapFrom,
        unwrapTo
      )
      Reflect.defineProperty(targetRef, nextPart, wrapperPropDesc)
      return
    }

    // need to determine the value type in order to copy it with
    // this-value unwrapping support
    const { sourceValue, sourceWritable } = getSourceValue(sourcePropDesc)

    // not a function - copy as is
    if (typeof sourceValue !== 'function') {
      Reflect.defineProperty(targetRef, nextPart, sourcePropDesc)
      return
    }
    // otherwise add workaround for functions to swap back to the sourceal "this" reference
    /**
     * @template T
     * @param {T} thisValue
     * @returns {thisValue is typeof unwrapFrom}
     */
    const unwrapTest = (thisValue) => thisValue === unwrapFrom
    const newValue = createFunctionWrapper(sourceValue, unwrapTest, unwrapTo)
    const newPropDesc = {
      value: newValue,
      writable: sourceWritable,
      enumerable: sourcePropDesc.enumerable,
      configurable: sourcePropDesc.configurable,
    }
    Reflect.defineProperty(targetRef, nextPart, newPropDesc)

    /**
     * @param {TypedPropertyDescriptor<any>} sourcePropDesc
     * @returns {{ sourceValue: any; sourceWritable: boolean | undefined }}
     */
    function getSourceValue(sourcePropDesc) {
      // determine the source value, this coerces getters to values
      // im deeply sorry, respecting getters was complicated and
      // my brain is not very good
      let sourceValue, sourceWritable
      if ('value' in sourcePropDesc) {
        sourceValue = sourcePropDesc.value
        sourceWritable = sourcePropDesc.writable
      } else if ('get' in sourcePropDesc && sourcePropDesc.get) {
        sourceValue = sourcePropDesc.get.call(unwrapTo)
        sourceWritable = 'set' in sourcePropDesc
      } else {
        throw new Error(
          'getEndowmentsForConfig - property descriptor missing a getter'
        )
      }
      return { sourceValue, sourceWritable }
    }
  }

  /**
   * @type {ApplyEndowmentPropDescTransforms}
   */
  function applyEndowmentPropDescTransforms(
    propDesc,
    unwrapFromCompartmentGlobalThis,
    unwrapToGlobalThis
  ) {
    let newPropDesc = propDesc
    newPropDesc = applyFunctionPropDescTransform(
      newPropDesc,
      unwrapFromCompartmentGlobalThis,
      unwrapToGlobalThis
    )
    newPropDesc = applyGetSetPropDescTransforms(
      newPropDesc,
      unwrapFromCompartmentGlobalThis,
      unwrapToGlobalThis
    )
    return newPropDesc
  }

  /**
   * @type {ApplyGetSetPropDescTransforms}
   */
  function applyGetSetPropDescTransforms(
    sourcePropDesc,
    unwrapFromGlobalThis,
    unwrapToGlobalThis
  ) {
    const wrappedPropDesc = { ...sourcePropDesc }
    if (sourcePropDesc.get) {
      wrappedPropDesc.get = function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const receiver = this
        // replace the "receiver" value if it points to fake parent
        const receiverRef =
          receiver === unwrapFromGlobalThis ? unwrapToGlobalThis : receiver
        // sometimes getters replace themselves with static properties, as seen wih the FireFox runtime
        const result = Reflect.apply(
          /** @type {NonNullable<typeof sourcePropDesc.get>} */ (
            sourcePropDesc.get
          ),
          receiverRef,
          []
        )
        if (typeof result === 'function') {
          // functions must be wrapped to ensure a good this-value.
          // lockdown causes some propDescs to go to value -> getter,
          // eg "Function.prototype.bind". we need to wrap getter results
          // as well in order to ensure they have their this-value wrapped correctly
          // if this ends up being problematic we can maybe take advantage of lockdown's
          // "getter.originalValue" property being available
          return createFunctionWrapper(
            result,
            /**
             * @param {any} thisValue
             * @returns {thisValue is typeof unwrapFromGlobalThis}
             */
            (thisValue) => thisValue === unwrapFromGlobalThis,
            unwrapToGlobalThis
          )
        } else {
          return result
        }
      }
    }
    if (sourcePropDesc.set) {
      wrappedPropDesc.set = function (value) {
        // replace the "receiver" value if it points to fake parent
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const receiver = this
        const receiverRef =
          receiver === unwrapFromGlobalThis ? unwrapToGlobalThis : receiver
        return Reflect.apply(
          /** @type {(v: any) => void} */ (sourcePropDesc.set),
          receiverRef,
          [value]
        )
      }
    }
    return wrappedPropDesc
  }

  /**
   * Utility function used by copyWrappedGlobals to wrap a function.
   *
   * @param {PropertyDescriptor} propDesc
   * @param {object} unwrapFromCompartmentGlobalThis
   * @param {object} unwrapToGlobalThis
   * @returns {PropertyDescriptor}
   */
  function applyFunctionPropDescTransform(
    propDesc,
    unwrapFromCompartmentGlobalThis,
    unwrapToGlobalThis
  ) {
    if (!('value' in propDesc && typeof propDesc.value === 'function')) {
      return propDesc
    }
    /**
     * @param {any} thisValue
     * @returns {thisValue is typeof unwrapFromCompartmentGlobalThis}
     */
    const unwrapTest = (thisValue) => {
      // unwrap function calls this-value to unwrapToGlobalThis when:
      // this value is globalThis ex. globalThis.abc()
      // scope proxy leak workaround ex. abc()
      return thisValue === unwrapFromCompartmentGlobalThis
    }
    const newFn = createFunctionWrapper(
      propDesc.value,
      unwrapTest,
      unwrapToGlobalThis
    )
    return { ...propDesc, value: newFn }
  }

  /**
   * @param {object | null} target
   * @param {PropertyKey} key
   * @returns {{ prop: PropertyDescriptor | null; receiver: object | null }}
   */
  function getPropertyDescriptorDeep(target, key) {
    /** @type {object | null} */
    let receiver = target
    // eslint-disable-next-line no-constant-condition
    while (true) {
      // abort if this is the end of the prototype chain.
      if (!receiver) {
        return { prop: null, receiver: null }
      }
      // support lookup on objects and primitives
      const typeofReceiver = typeof receiver
      if (typeofReceiver === 'object' || typeofReceiver === 'function') {
        const prop = Reflect.getOwnPropertyDescriptor(receiver, key)
        if (prop) {
          return { receiver, prop }
        }
        // try next in the prototype chain
        receiver = Reflect.getPrototypeOf(receiver)
      } else {
        // prototype lookup for primitives
        // eslint-disable-next-line no-proto
        receiver = /** @type {any} */ (receiver).__proto__
      }
    }
  }

  /**
   * @type {CopyWrappedGlobals}
   */
  function copyWrappedGlobals(
    globalRef,
    target,
    globalThisRefs = ['globalThis']
  ) {
    // find the relevant endowment sources
    const globalProtoChain = getPrototypeChain(globalRef)
    // the index for the common prototypal ancestor, Object.prototype
    // this should always be the last index, but we check just in case
    let commonPrototypeIndex = globalProtoChain.findIndex(
      (globalProtoChainEntry) => globalProtoChainEntry === Object.prototype
    )
    // "Why would a global have no reference in prototype chain that matches Object.prototype?" you might ask.
    // It's when the global is partially from a different Realm. And that's possible in extension contentscript in FireFox
    const noSharedPrototype = commonPrototypeIndex === -1
    if (noSharedPrototype) {
      // take the entire prototype chain
      commonPrototypeIndex = globalProtoChain.length
    }
    // we will copy endowments from all entries in the prototype chain, excluding Object.prototype
    const endowmentSources = globalProtoChain.slice(0, commonPrototypeIndex)

    // call all getters, in case of behavior change (such as with FireFox lazy getters)
    // call on contents of endowmentsSources directly instead of in new array instances. If there is a lazy getter it only changes the original prop desc.
    endowmentSources.forEach((source) => {
      const descriptors = Object.getOwnPropertyDescriptors(source)
      Object.values(descriptors).forEach((desc) => {
        if ('get' in desc && desc.get) {
          try {
            // calling getters can potentially throw (e.g. localStorage inside a sandboxed iframe)
            Reflect.apply(desc.get, globalRef, [])
          } catch {}
        }
      })
    })

    const endowmentSourceDescriptors = endowmentSources.map(
      (globalProtoChainEntry, index) => {
        const candidateDescriptors = Object.getOwnPropertyDescriptors(
          globalProtoChainEntry
        )
        if (noSharedPrototype && index === endowmentSources.length - 1) {
          // if there is no shared Object.prototype, the last entry in the endowmentSources
          // might be an Object.prototype from another realm. In that case we want to skip overriding Object.prototype keys
          const filteredDescriptors = Object.fromEntries(
            Object.entries(candidateDescriptors).filter(
              ([key]) => !(key in Object.prototype)
            )
          )
          return filteredDescriptors
        }
        return candidateDescriptors
      }
    )
    // flatten propDesc collections with precedence for globalThis-end of the prototype chain
    const endowmentDescriptorsFlat = Object.assign(
      Object.create(null),
      ...endowmentSourceDescriptors.reverse()
    )
    // expose all own properties of globalRef, including non-enumerable
    Object.entries(endowmentDescriptorsFlat)
      // ignore properties already defined on compartment global
      .filter(([key]) => !(key in target))
      // ignore circular globalThis refs
      .filter(([key]) => !globalThisRefs.includes(key))
      // define property on compartment global
      .forEach(([key, desc]) => {
        // unwrap functions, setters/getters & apply scope proxy workaround
        const wrappedPropDesc = applyEndowmentPropDescTransforms(
          desc,
          target,
          globalRef
        )
        Reflect.defineProperty(target, key, wrappedPropDesc)
      })
    // global circular references otherwise added by prepareCompartmentGlobalFromConfig
    // Add all circular refs to root package compartment globalThis
    for (const ref of globalThisRefs) {
      if (ref in target) {
        continue
      }
      target[ref] = target
    }
    return target
  }
}
/**
 * Util for getting the prototype chain as an array includes the provided value
 * in the result
 *
 * @param {any} value
 * @returns {any[]}
 */
function getPrototypeChain(value) {
  const protoChain = []
  let current = value
  while (
    current &&
    (typeof current === 'object' || typeof current === 'function')
  ) {
    protoChain.push(current)
    current = Reflect.getPrototypeOf(current)
  }
  return protoChain
}

/**
 * @param {string} visited
 * @param {string} next
 */
function extendPath(visited, next) {
  // FIXME: second part of this conditional should be unnecessary
  if (!visited || visited.length === 0) {
    return next
  }
  return `${visited}.${next}`
}

/**
 * @param {object | null} value
 * @returns {value is null}
 */
function isEmpty(value) {
  return !value
}

/**
 * Sets up the getter and setter pair so that the specific targetRef field is
 * effectively writeable and the value propagates to sourceRef. This implements
 * the `'write'` permission for a global in a specific resource.
 *
 * @param {string} key
 * @param {Record<string, any>} sourceRef
 * @param {Record<string, any>} targetRef
 */
function makeWritableValueAtPath(key, sourceRef, targetRef) {
  const enumerable = Reflect.getOwnPropertyDescriptor(
    sourceRef,
    key
  )?.enumerable
  Reflect.defineProperty(targetRef, key, {
    configurable: false,
    enumerable,
    set(newValue) {
      sourceRef[key] = newValue
    },
    get() {
      return sourceRef[key]
    },
  })
}

/**
 * Puts a getter at the end of the path that returns the nested values from a
 * top-level field that might change at runtime.
 *
 * @param {string[]} pathParts
 * @param {Record<string, any>} sourceRef
 * @param {Record<string, any>} targetRef
 */
function instrumentDynamicValueAtPath(pathParts, sourceRef, targetRef) {
  const enumerable = Reflect.getOwnPropertyDescriptor(
    sourceRef,
    pathParts[0]
  )?.enumerable
  const dynamicGetterDesc = {
    get: () => {
      const dynamicValue = sourceRef[pathParts[0]]
      let leaf = dynamicValue,
        parent = sourceRef

      for (let i = 1; i < pathParts.length; i++) {
        parent = leaf
        leaf = leaf[pathParts[i]]
      }
      if (typeof leaf === 'function') {
        leaf = leaf.bind(parent) // TODO: consider the risks, should not differ from unwrapping
      }
      return leaf
    },
    writeable: false,
    enumerable, // Initial value will have to suffice. Change will not propagate dynamically.
    configurable: false,
  }
  let currentTarget = targetRef
  let currentPath = ''
  for (let depth = 0; depth < pathParts.length - 1; depth++) {
    currentPath = extendPath(currentPath, pathParts[depth])
    const nextPart = pathParts[depth]
    if (Reflect.getOwnPropertyDescriptor(currentTarget, nextPart)?.get) {
      // We could silently ignore this, but it could introduce a false sense of security in the policy file
      throw Error(
        `LavaMoat - "${pathParts[0]}" is writeable elsewhere and both "${currentPath}" and "${pathParts.join('.')}" are allowed for one package. One of these entries is redundant.`
      )
    }
    if (typeof currentTarget[nextPart] !== 'object') {
      currentTarget[nextPart] = {}
    }
    currentTarget = currentTarget[nextPart]
  }

  const lastPart = pathParts[pathParts.length - 1]
  Reflect.defineProperty(currentTarget, lastPart, dynamicGetterDesc)
}

/**
 * @type {DefaultWrapperFn}
 */
function defaultCreateFunctionWrapper(sourceValue, unwrapTest, unwrapTo) {
  /**
   * @param {...any[]} args
   * @returns {any}
   * @this {object}
   */
  const newValue = function (...args) {
    if (new.target) {
      // handle constructor calls
      return Reflect.construct(sourceValue, args, new.target)
    } else {
      // handle function calls
      // unwrap to target value if this value is the source package compartment's globalThis
      const thisRef = unwrapTest(this) ? unwrapTo : this
      return Reflect.apply(sourceValue, thisRef, args)
    }
  }
  Object.defineProperties(
    newValue,
    Object.getOwnPropertyDescriptors(sourceValue)
  )
  // Global functions can have static fields on a prototype. eg. Uint8Array.from
  if (
    Reflect.getPrototypeOf(newValue) !== Reflect.getPrototypeOf(sourceValue)
  ) {
    Object.setPrototypeOf(newValue, Reflect.getPrototypeOf(sourceValue))
  }
  return newValue
}

/**
 * The default implementation of the utility for wrapping endowed function to
 * set `this` to a correct reference.
 *
 * @callback DefaultWrapperFn
 * @param {(...args: any[]) => any} sourceValue
 * @param {(value: any) => boolean} unwrapTest
 * @param {object} unwrapTo
 * @returns {(...args: any[]) => any}
 */

/**
 * Makes a copy of all globals from the global ref to a target and wraps them
 * with the wrapper this endowmentsToolkit was configured to use. It also copies
 * all circular references to the root package compartment globalThis.
 *
 * @callback CopyWrappedGlobals
 * @param {object} globalRef
 * @param {Record<PropertyKey, any>} target - The object to copy the properties
 *   to, recursively (hence any not unknown type)
 * @param {string[]} globalThisRefs
 * @returns {Record<PropertyKey, any>}
 */

/**
 * A recursive function to copy a single (nested) property located at the
 * provided path from a sourceRef to targetRef.
 *
 * @callback CopyValueAtPath
 * @param {string} visitedPath
 * @param {string[]} pathParts
 * @param {string[]} explicitlyBanned
 * @param {object} sourceRef
 * @param {object} targetRef
 * @param {object} [unwrapTo]
 * @param {object} [unwrapFrom]
 * @returns {void}
 */

/**
 * Utility function used by copyWrappedGlobals to wrap a property with a getter
 * and/or setter.
 *
 * @callback ApplyGetSetPropDescTransforms
 * @param {PropertyDescriptor} sourcePropDesc
 * @param {object} unwrapFromGlobalThis
 * @param {object} unwrapToGlobalThis
 * @returns {PropertyDescriptor}
 */

/**
 * Utility function used by copyWrappedGlobals to choose a wrapping strategy for
 * a property.
 *
 * @callback ApplyEndowmentPropDescTransforms
 * @param {PropertyDescriptor} propDesc
 * @param {object} unwrapFromCompartmentGlobalThis
 * @param {object} unwrapToGlobalThis
 * @returns {PropertyDescriptor}
 */

// END of injected code from endowmentsToolkit
  })()
  return module.exports
})()()
    const { prepareCompartmentGlobalFromConfig } = // define makePrepareRealmGlobalFromConfig
(function(){
  const global = globalRef
  const exports = {}
  const module = { exports }
  ;(function(){
// START of injected code from makePrepareRealmGlobalFromConfig
// the contents of this file will be copied into the prelude template
// this module has been written so that it required directly or copied and added to the template with a small wrapper
module.exports = makePrepareRealmGlobalFromConfig

// utilities for exposing configuring the exposed endowments on the container global

// The config uses a period-deliminated path notation to pull out deep values from objects
// These utilities help modify the container global to expose the allowed globals from the globalStore OR the platform global

function makePrepareRealmGlobalFromConfig({ createFunctionWrapper }) {
  return {
    prepareCompartmentGlobalFromConfig,
    getTopLevelReadAccessFromPackageConfig,
    getTopLevelWriteAccessFromPackageConfig,
  }

  /**
   * Should never return an array containing `'Function'`
   */
  function getTopLevelReadAccessFromPackageConfig(globalsConfig) {
    const result = Object.entries(globalsConfig)
      .filter(
        ([key, value]) =>
          (value === 'read' ||
            value === true ||
            (value === 'write' && key.split('.').length > 1)) &&
          key !== 'Function'
      )
      .map(([key]) => key.split('.')[0])
    // return unique array
    return Array.from(new Set(result))
  }

  /**
   * Should never return an array containing `'Function'`
   */
  function getTopLevelWriteAccessFromPackageConfig(globalsConfig) {
    const result = Object.entries(globalsConfig)
      .filter(
        ([key, value]) =>
          value === 'write' && key.split('.').length === 1 && key !== 'Function'
      )
      .map(([key]) => key)
    return result
  }

  function prepareCompartmentGlobalFromConfig(
    packageCompartment,
    globalsConfig,
    endowments,
    globalStore,
    globalThisRefs
  ) {
    const packageCompartmentGlobal = packageCompartment.globalThis
    // lookup top level read + write access keys
    const topLevelWriteAccessKeys =
      getTopLevelWriteAccessFromPackageConfig(globalsConfig)
    const topLevelReadAccessKeys =
      getTopLevelReadAccessFromPackageConfig(globalsConfig)

    // NOTE: getters for read should only ever be needed on props marked for 'write' (unless we want to allow sloppy behavior from the root compartment modifying everything...)
    // Making a pass over the entire policy and collecting the names of writable items would limit the number of getters created here to the minimum.
    // the change should not be introduced here though as we don't want to change the existing behavior of lavamoat-browserify
    // If you're looking at this for the purpose of moving the code to the new core toolkit for endowments building, there's likely a copy of this functionality already

    // define accessors

    // allow read access via globalStore or packageCompartmentGlobal
    topLevelReadAccessKeys.forEach((key) => {
      if (globalThisRefs.includes(key)) return
      Object.defineProperty(packageCompartmentGlobal, key, {
        get() {
          if (globalStore.has(key)) {
            return globalStore.get(key)
          } else {
            return Reflect.get(endowments, key, this)
          }
        },
        set() {
          // TODO: there should be a config to throw vs silently ignore
          console.warn(
            `LavaMoat: ignoring write attempt to read-access global "${key}"`
          )
        },
      })
    })

    // allow write access to globalStore
    // read access via globalStore or packageCompartmentGlobal
    topLevelWriteAccessKeys.forEach((key) => {
      if (globalThisRefs.includes(key)) return
      Object.defineProperty(packageCompartmentGlobal, key, {
        get() {
          if (globalStore.has(key)) {
            return globalStore.get(key)
          } else {
            return endowments[key]
          }
        },
        set(value) {
          globalStore.set(key, value)
        },
        enumerable: true,
        configurable: true,
      })
    })

    // set circular globalRefs
    globalThisRefs.forEach((key) => {
      packageCompartmentGlobal[key] = packageCompartmentGlobal
    })

    // bind Function constructor this value to globalThis
    // legacy globalThis shim
    const origFunction = packageCompartmentGlobal.Function
    const newFunction = function (...args) {
      const fn = origFunction(...args)
      const unwrapTest = (thisValue) => thisValue === undefined
      return createFunctionWrapper(fn, unwrapTest, packageCompartmentGlobal)
    }
    Object.defineProperties(
      newFunction,
      Object.getOwnPropertyDescriptors(origFunction)
    )
    packageCompartmentGlobal.Function = newFunction
  }
}

// END of injected code from makePrepareRealmGlobalFromConfig
  })()
  return module.exports
})()({ createFunctionWrapper })
    const { strictScopeTerminator } = // define strict-scope-terminator
(function(){
  const global = globalRef
  const exports = {}
  const module = { exports }
  ;(function(){
// START of injected code from strict-scope-terminator
// import {
//   Proxy,
//   String,
//   TypeError,
//   ReferenceError,
//   create,
//   freeze,
//   getOwnPropertyDescriptors,
//   globalThis,
//   immutableObject,
// } from './commons.js';
const { freeze, create, getOwnPropertyDescriptors } = Object
const immutableObject = freeze(create(null))

// import { assert } from './error/assert.js';
const assert = {
  fail: (msg) => {
    throw new Error(msg)
  },
}

// const { details: d, quote: q } = assert;
const d = (strings, args) => strings.join() + args.join()
const q = (arg) => arg

/**
 * AlwaysThrowHandler This is an object that throws if any property is called.
 * It's used as a proxy handler which throws on any trap called. It's made from
 * a proxy with a get trap that throws. It's safe to create one and share it
 * between all Proxy handlers.
 */
const alwaysThrowHandler = new Proxy(
  immutableObject,
  freeze({
    get(_shadow, prop) {
      assert.fail(
        d`Please report unexpected scope handler trap: ${q(String(prop))}`
      )
    },
  })
)

/**
 * ScopeTerminatorHandler manages a strictScopeTerminator Proxy which serves as
 * the final scope boundary that will always return "undefined" in order to
 * prevent access to "start compartment globals".
 *
 * @type {ProxyHandler}
 */
const scopeProxyHandlerProperties = {
  // eslint-disable-next-line no-unused-vars
  get(_shadow, _prop) {
    return undefined
  },

  // eslint-disable-next-line no-unused-vars
  set(_shadow, prop, _value) {
    // We should only hit this if the has() hook returned true matches the v8
    // ReferenceError message "Uncaught ReferenceError: xyz is not defined"
    throw new ReferenceError(`${String(prop)} is not defined`)
  },

  has(_shadow, prop) {
    // we must at least return true for all properties on the realm globalThis
    return prop in globalThis
  },

  // note: this is likely a bug of safari
  // https://bugs.webkit.org/show_bug.cgi?id=195534
  getPrototypeOf() {
    return null
  },

  // Chip has seen this happen single stepping under the Chrome/v8 debugger.
  // TODO record how to reliably reproduce, and to test if this fix helps.
  // TODO report as bug to v8 or Chrome, and record issue link here.
  getOwnPropertyDescriptor(_target, prop) {
    // Coerce with `String` in case prop is a symbol.
    const quotedProp = q(String(prop))
    console.warn(
      `getOwnPropertyDescriptor trap on scopeTerminatorHandler for ${quotedProp}`,
      new TypeError().stack
    )
    return undefined
  },
}

// The scope handler's prototype is a proxy that throws if any trap other
// than get/set/has are run (like getOwnPropertyDescriptors, apply,
// getPrototypeOf).
const strictScopeTerminatorHandler = freeze(
  create(
    alwaysThrowHandler,
    getOwnPropertyDescriptors(scopeProxyHandlerProperties)
  )
)

const strictScopeTerminator = new Proxy(
  immutableObject,
  strictScopeTerminatorHandler
)

module.exports = {
  alwaysThrowHandler,
  strictScopeTerminatorHandler,
  strictScopeTerminator,
}

// END of injected code from strict-scope-terminator
  })()
  return module.exports
})()
    const { scuttle } = // define scuttle
(function(){
  const global = globalRef
  const exports = {}
  const module = { exports }
  ;(function(){
// START of injected code from scuttle
/**
 * @typedef {object} LavaMoatScuttleOpts Options for scuttling `globalThis`.
 * @property {boolean} enabled Whether scuttling is enabled or not.
 * @property {Array<string | RegExp>} [exceptions] List of properties to exclude from scuttling.
 * @property {string} [scuttlerName] Name of the scuttler function to use which is expected to be found as a property on the global object (e.g. if scuttlerName is 'x', scuttler function is obtained from globalThis['x']).
 */

/**
 * @typedef {object} GlobalRef Reference to the global object
 * @property {Record<PropertyKey, unknown>} [globalThis] Reference to the global object.
 */

const { Object, Array, Error, RegExp, Set, console, Proxy, Reflect } =
  globalThis

const {
  assign,
  getOwnPropertyNames,
  getOwnPropertyDescriptor,
  create,
  defineProperty,
} = Object

const preserveLanguageIntrinsics = (function (
  globalThisCompartment,
  globalThis
) {
  return (
    Object.getOwnPropertyNames(globalThisCompartment)
      // skip all intrinsics that a Compartment already grants
      .filter((a) => globalThisCompartment[a] === globalThis[a])
      // support LM,SES exported APIs and polyfills that LM counts on
      .concat(['Compartment', 'Error', 'globalThis'])
  )
})(new Compartment().globalThis, globalThis)

const { isArray, from } = Array

const { getPrototypeOf } = Reflect

const { warn } = console

function generateInvokers(prop) {
  return { get, set }
  function set() {
    warn(
      `LavaMoat - property "${prop}" of globalThis cannot be set under scuttling mode. ` +
        'To learn more visit https://github.com/LavaMoat/LavaMoat/pull/360.'
    )
  }
  function get() {
    throw new Error(
      `LavaMoat - property "${prop}" of globalThis is inaccessible under scuttling mode. ` +
        'To learn more visit https://github.com/LavaMoat/LavaMoat/pull/360.'
    )
  }
}

/**
 * Applies scuttling, with the default set of options, including using Snow if
 * passed in as scuttlerFunc. Scuttle globalThis right after we used it to
 * create the root package compartment.
 *
 * @param {GlobalRef} globalRef - Reference to the global object.
 * @param {LavaMoatScuttleOpts} opts - Scuttling options.
 */
function scuttle(globalRef, opts) {
  const scuttleOpts = generateScuttleOpts(globalRef, opts)

  if (scuttleOpts.enabled) {
    if (!isArray(scuttleOpts.exceptions)) {
      throw new Error(
        `LavaMoat - exceptions must be an array, got ${typeof scuttleOpts.exceptions}`
      )
    }
    scuttleOpts.scuttlerFunc(globalRef, (realm) =>
      performScuttleGlobalThis(realm, scuttleOpts.exceptions)
    )
  }
}

/**
 * @param {GlobalRef} globalRef - Reference to the global object.
 * @param {LavaMoatScuttleOpts | boolean} originalOpts - Scuttling options. Accepts
 *   `true` for backwards compatibility.
 * @returns {LavaMoatScuttleOpts} - Final scuttling options.
 */
function generateScuttleOpts(globalRef, originalOpts = create(null)) {
  const defaultOpts = {
    enabled: true,
    exceptions: [],
    scuttlerName: '',
  }
  const opts = assign(
    create(null),
    originalOpts === true ? defaultOpts : originalOpts,
    {
      scuttlerFunc: (globalRef, scuttle) => scuttle(globalRef),
    },
    {
      exceptions: (originalOpts?.exceptions || defaultOpts.exceptions).map(
        (e) => toRE(e)
      ),
    }
  )
  if (opts.scuttlerName) {
    if (!globalRef[opts.scuttlerName]) {
      throw new Error(
        `LavaMoat - 'scuttlerName' function "${opts.scuttlerName}" expected on globalRef.` +
          'To learn more visit https://github.com/LavaMoat/LavaMoat/pull/462.'
      )
    }
    opts.scuttlerFunc = globalRef[opts.scuttlerName]
  }
  return opts

  /**
   * @param {string | RegExp} except - Exception to convert to RegExp.
   * @returns {string | RegExp} - Converted exception.
   */
  function toRE(except) {
    // turn scuttleGlobalThis.exceptions regexes strings to actual regexes
    if (!except.startsWith('/')) {
      return except
    }
    const parts = except.split('/')
    const pattern = parts.slice(1, -1).join('/')
    const flags = parts[parts.length - 1]
    return new RegExp(pattern, flags)
  }
}

/**
 * Runs scuttling on the globalRef. Use applyDefaultScuttling for full scope of
 * options.
 *
 * @param {GlobalRef} globalRef - Reference to the global object.
 * @param {(string | RegExp)[]} extraPropsToAvoid - List of additional
 *   properties to exclude from scuttling beyond the default ones.
 */
function performScuttleGlobalThis(globalRef, extraPropsToAvoid = []) {
  const props = []
  getPrototypeChain(globalRef).forEach((proto) =>
    props.push(...getOwnPropertyNames(proto))
  )

  const propsToAvoid = new Set([
    ...preserveLanguageIntrinsics,
    ...extraPropsToAvoid,
  ])

  const obj = create(null)
  props.forEach((prop) => {
    const { get, set } = generateInvokers(prop)
    if (shouldAvoidProp(propsToAvoid, prop)) {
      return
    }
    let desc = getOwnPropertyDescriptor(globalRef, prop)
    if (desc?.configurable === true) {
      desc = { configurable: false, set, get }
    } else if (desc?.writable === true) {
      const p = new Proxy(obj, { getPrototypeOf: get, get, set })
      desc = { configurable: false, writable: false, value: p }
    } else {
      return
    }
    defineProperty(globalRef, prop, desc)
  })
}

/**
 * @param {Set<string | RegExp>} propsToAvoid - List of properties to exclude
 *   from scuttling.
 * @param {string} prop - Property to check.
 * @returns {boolean} - Whether the property should be avoided or not.
 */
const shouldAvoidProp = (propsToAvoid, prop) =>
  from(propsToAvoid).some(
    (avoid) =>
      (typeof avoid === 'string' && avoid === prop) ||
      (avoid instanceof RegExp && avoid.test(prop))
  )

/**
 * @param {object} value - Object to get the prototype chain from.
 * @returns {object[]} - Prototype chain as an array.
 */
function getPrototypeChain(value) {
  const protoChain = []
  let current = value
  while (current) {
    if (typeof current !== 'object' && typeof current !== 'function') {
      break
    }
    protoChain.push(current)
    current = getPrototypeOf(current)
  }
  return protoChain
}

module.exports = {
  scuttle,
}

// END of injected code from scuttle
  })()
  return module.exports
})()

    const moduleCache = new Map()
    const packageCompartmentCache = new Map()
    const globalStore = new Map()

    const rootPackageName = '$root$'
    const rootPackageCompartment = createRootPackageCompartment(globalRef)

    scuttle(globalRef, scuttleGlobalThis)

    const kernel = {
      internalRequire,
    }
    if (debugMode) {
      kernel._getPolicyForPackage = getPolicyForPackage
      kernel._getCompartmentForPackage = getCompartmentForPackage
    }
    Object.freeze(kernel)
    return kernel

    // this function instantiaties a module from a moduleId.
    // 1. loads the module metadata and policy
    // 2. prepares the execution environment
    // 3. instantiates the module, recursively instantiating dependencies
    // 4. returns the module exports
    function internalRequire (moduleId) {
      // use cached module.exports if module is already instantiated
      if (moduleCache.has(moduleId)) {
        const moduleExports = moduleCache.get(moduleId).exports
        return moduleExports
      }

      reportStatsHook('start', moduleId)

      try {
        // load and validate module metadata
        // if module metadata is missing, throw an error
        const moduleData = loadModuleData(moduleId)
        if (!moduleData) {
          const err = new Error('Cannot find module \'' + moduleId + '\'')
          err.code = 'MODULE_NOT_FOUND'
          throw err
        }
        if (moduleData.id === undefined) {
          throw new Error('LavaMoat - moduleId is not defined correctly.')
        }

        // parse and validate module data
        const { package: packageName, source: moduleSource } = moduleData
        if (!packageName) {
          throw new Error(`LavaMoat - missing packageName for module "${moduleId}"`)
        }
        const packagePolicy = getPolicyForPackage(lavamoatConfig, packageName)

        // create the moduleObj and initializer
        const { moduleInitializer, moduleObj } = prepareModuleInitializer(moduleData, packagePolicy)

        // cache moduleObj here
        // this is important to inf loops when hitting cycles in the dep graph
        // must cache before running the moduleInitializer
        moduleCache.set(moduleId, moduleObj)

        // validate moduleInitializer
        if (typeof moduleInitializer !== 'function') {
          throw new Error(`LavaMoat - moduleInitializer is not defined correctly. got "${typeof moduleInitializer}"\n${moduleSource}`)
        }

        // initialize the module with the correct context
        const initializerArgs = prepareModuleInitializerArgs(requireRelativeWithContext, moduleObj, moduleData)
        moduleInitializer.apply(moduleObj.exports, initializerArgs)
        const moduleExports = moduleObj.exports
        return moduleExports

        // this is passed to the module initializer
        // it adds the context of the parent module
        // this could be replaced via "Function.prototype.bind" if its more performant
        // eslint-disable-next-line no-inner-declarations
        function requireRelativeWithContext (requestedName) {
          const parentModuleExports = moduleObj.exports
          const parentModuleData = moduleData
          const parentPackagePolicy = packagePolicy
          const parentModuleId = moduleId
          return requireRelative({ requestedName, parentModuleExports, parentModuleData, parentPackagePolicy, parentModuleId })
        }
      } finally {
        reportStatsHook('end', moduleId)
      }
    }

    // this resolves a module given a requestedName (eg relative path to parent) and a parentModule context
    // the exports are processed via "protectExportsRequireTime" per the module's configuration
    function requireRelative ({ requestedName, parentModuleExports, parentModuleData, parentPackagePolicy, parentModuleId }) {
      const parentModulePackageName = parentModuleData.package
      const parentPackagesWhitelist = parentPackagePolicy.packages
      const parentBuiltinsWhitelist = Object.entries(parentPackagePolicy.builtin)
        .filter(([, allowed]) => allowed === true)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(([packagePath, allowed]) => packagePath.split('.')[0])

      // resolve the moduleId from the requestedName
      const moduleId = getRelativeModuleId(parentModuleId, requestedName)

      // browserify goop:
      // recursive requires dont hit cache so it inf loops, so we shortcircuit
      // this only seems to happen with a few browserify builtins (nodejs builtin module polyfills)
      // we could likely allow any requestedName since it can only refer to itself
      if (moduleId === parentModuleId) {
        if (['timers', 'buffer'].includes(requestedName) === false) {
          throw new Error(`LavaMoat - recursive require detected: "${requestedName}"`)
        }
        return parentModuleExports
      }

      // load module
      let moduleExports = internalRequire(moduleId)

      // look up config for module
      const moduleData = loadModuleData(moduleId)
      const packageName = moduleData.package

      // disallow requiring packages that are not in the parent's whitelist
      const isSamePackage = packageName === parentModulePackageName
      const parentIsEntryModule = parentModulePackageName === rootPackageName
      let isInParentWhitelist = false
      if (moduleData.type === 'builtin') {
        isInParentWhitelist = parentBuiltinsWhitelist.includes(packageName)
      } else {
        isInParentWhitelist = (parentPackagesWhitelist[packageName] === true)
      }

      // validate that the import is allowed
      if (!parentIsEntryModule && !isSamePackage && !isInParentWhitelist) {
        let typeText = ' '
        if (moduleData.type === 'builtin') {
          typeText = ' node builtin '
        }
        throw new Error(`LavaMoat - required${typeText}package not in allowlist: package "${parentModulePackageName}" requested "${packageName}" as "${requestedName}"`)
      }

      // create minimal selection if its a builtin and the whole path is not selected for
      if (!parentIsEntryModule && moduleData.type === 'builtin' && !parentPackagePolicy.builtin[moduleId]) {
        moduleExports = getBuiltinForConfig(moduleExports, moduleId, parentPackagePolicy.builtin)
      }

      return moduleExports
    }

    function prepareModuleInitializer (moduleData, packagePolicy) {
      const { moduleInitializer, precompiledInitializer, package: packageName, id: moduleId, source: moduleSource } = moduleData

      // moduleInitializer may be set by loadModuleData (e.g. builtin + native modules)
      if (moduleInitializer) {
        // if an external moduleInitializer is set, ensure it is allowed
        if (moduleData.type === 'native') {
          // ensure package is allowed to have native modules
          if (packagePolicy.native !== true) {
            throw new Error(`LavaMoat - "native" module type not permitted for package "${packageName}", module "${moduleId}"`)
          }
        } else if (moduleData.type !== 'builtin') {
          // builtin module types dont have policy configurations
          // but the packages that can import them are constrained elsewhere
          // here we just ensure that the module type is the only other type with a external moduleInitializer
          throw new Error(`LavaMoat - invalid external moduleInitializer for module type "${moduleData.type}" in package "${packageName}", module "${moduleId}"`)
        }
        // moduleObj must be from the same Realm as the moduleInitializer (eg dart2js runtime requirement)
        // here we are assuming the provided moduleInitializer is from the same Realm as this kernel
        const moduleObj = { exports: {} }
        return { moduleInitializer, moduleObj }
      }

      // setup initializer from moduleSource and compartment.
      // execute in package compartment with globalThis populated per package policy
      const packageCompartment = getCompartmentForPackage(packageName, packagePolicy)

      try {
        let moduleObj
        let moduleInitializer
        if (runWithPrecompiledModules) {
          if (!precompiledInitializer) {
            throw new Error(`LavaMoat - precompiledInitializer missing for "${moduleId}" from package "${packageName}"`)
          }
          // moduleObj must be from the same Realm as the moduleInitializer (eg dart2js runtime requirement)
          // here we are assuming the provided moduleInitializer is from the same Realm as this kernel
          moduleObj = { exports: {} }
          const evalKit = {
            globalThis: packageCompartment.globalThis,
            scopeTerminator: strictScopeTerminator,
          }
          // this invokes the with-proxy wrapper
          const moduleInitializerFactory = precompiledInitializer.call(evalKit)
          // this ensures strict mode
          moduleInitializer = moduleInitializerFactory()
        } else {
          if (typeof moduleSource !== 'string') {
            throw new Error(`LavaMoat - moduleSource not a string for "${moduleId}" from package "${packageName}"`)
          }
          const sourceURL = moduleData.file || `modules/${moduleId}`
          if (sourceURL.includes('\n')) {
            throw new Error(`LavaMoat - Newlines not allowed in filenames: ${JSON.stringify(sourceURL)}`)
          }
          // moduleObj must be from the same Realm as the moduleInitializer (eg dart2js runtime requirement)
          moduleObj = packageCompartment.evaluate('({ exports: {} })')
          // TODO: move all source mutations elsewhere
          moduleInitializer = packageCompartment.evaluate(`${moduleSource}\n//# sourceURL=${sourceURL}`)
        }
        return { moduleInitializer, moduleObj }
      } catch (err) {
        console.warn(`LavaMoat - Error evaluating module "${moduleId}" from package "${packageName}" \n${err.stack}`)
        throw err
      }
    }

    function createRootPackageCompartment (globalRef) {
      if (packageCompartmentCache.has(rootPackageName)) {
        throw new Error('LavaMoat - createRootPackageCompartment called more than once')
      }
      // prepare the root package's SES Compartment
      // endowments:
      // - Math is for untamed Math.random
      // - Date is for untamed Date.now
      const rootPackageCompartment = new Compartment({ Math, Date })

      copyWrappedGlobals(globalRef, rootPackageCompartment.globalThis, globalThisRefs)
      // save the compartment for use by other modules in the package
      packageCompartmentCache.set(rootPackageName, rootPackageCompartment)

      return rootPackageCompartment
    }

    function getCompartmentForPackage (packageName, packagePolicy) {
      // compartment may have already been created
      let packageCompartment = packageCompartmentCache.get(packageName)
      if (packageCompartment) {
        return packageCompartment
      }

      // prepare Compartment
      if (getExternalCompartment && packagePolicy.env) {
        // external compartment can be provided by the platform (eg lavamoat-node)
        packageCompartment = getExternalCompartment(packageName, packagePolicy)
      } else {
        // prepare the module's SES Compartment
        // endowments:
        // - Math is for untamed Math.random
        // - Date is for untamed Date.now
        packageCompartment = new Compartment({ Math, Date })
      }
      // prepare endowments
      let endowments
      try {
        endowments = getEndowmentsForConfig(
          // source reference
          rootPackageCompartment.globalThis,
          // policy
          packagePolicy,
          // unwrap to
          globalRef,
          // unwrap from
          packageCompartment.globalThis,
        )
      } catch (err) {
        const errMsg = `Lavamoat - failed to prepare endowments for package "${packageName}":\n${err.stack}`
        throw new Error(errMsg)
      }

      // transform functions, getters & setters on prop descs. Solves SES scope proxy bug
      // WARNING: this part should be unnecessary since SES refactor into multiple nested with statements
      Object.entries(Object.getOwnPropertyDescriptors(endowments))
        // ignore non-configurable properties because we are modifying endowments in place
        .filter(([, propDesc]) => propDesc.configurable)
        .forEach(([key, propDesc]) => {
          const wrappedPropDesc = applyEndowmentPropDescTransforms(propDesc, packageCompartment.globalThis, rootPackageCompartment.globalThis)
          Reflect.defineProperty(endowments, key, wrappedPropDesc)
        })

      // sets up read/write access as configured
      const globalsConfig = packagePolicy.globals
      prepareCompartmentGlobalFromConfig(packageCompartment, globalsConfig, endowments, globalStore, globalThisRefs)

      // save the compartment for use by other modules in the package
      packageCompartmentCache.set(packageName, packageCompartment)

      return packageCompartment
    }

    // this gets the lavaMoat config for a module by packageName
    // if there were global defaults (e.g. everything gets "console") they could be applied here
    function getPolicyForPackage (config, packageName) {
      const packageConfig = (config.resources || {})[packageName] || {}
      packageConfig.globals = packageConfig.globals || {}
      packageConfig.packages = packageConfig.packages || {}
      packageConfig.builtin = packageConfig.builtin || {}
      return packageConfig
    }

  }
})()

    const kernel = createKernelCore({
      lavamoatConfig,
      loadModuleData,
      getRelativeModuleId,
      prepareModuleInitializerArgs,
      getExternalCompartment,
      globalRef,
      globalThisRefs,
      scuttleGlobalThis,
      debugMode,
      runWithPrecompiledModules,
      reportStatsHook,
    })
    return kernel
  }
})()

  const kernel = createKernel({
    runWithPrecompiledModules: true,
    lavamoatConfig: lavamoatPolicy,
    loadModuleData,
    getRelativeModuleId,
    prepareModuleInitializerArgs,
    globalThisRefs: ['window', 'self', 'global', 'globalThis', 'top', 'frames', 'parent'],
    debugMode,
    reportStatsHook,
  })
  const { internalRequire } = kernel

  // create a lavamoat pulic API for loading modules over multiple files
  const LavaPack = Object.freeze({
    loadPolicy: Object.freeze(loadPolicy),
    loadBundle: Object.freeze(loadBundle),
    runModule: Object.freeze(runModule),
  })
  // in debug mode, expose the kernel on the LavaPack API
  if (debugMode) {
    LavaPack._kernel = kernel
  }

  Object.defineProperty(globalThis, 'LavaPack', {value: LavaPack})
  return


  function loadModuleData (moduleId) {
    if (!moduleRegistry.has(moduleId)) {
      throw new Error(`no module registered for "${moduleId}" (${typeof moduleId})`)
    }
    return moduleRegistry.get(moduleId)
  }

  function getRelativeModuleId (parentModuleId, requestedName) {
    const parentModuleData = loadModuleData(parentModuleId)
    if (!(requestedName in parentModuleData.deps)) {
      console.warn(`missing dep: ${parentModuleData.package} requested ${requestedName}`)
    }
    return parentModuleData.deps[requestedName] || requestedName
  }

  function prepareModuleInitializerArgs (requireRelativeWithContext, moduleObj, moduleData) {
    const require = requireRelativeWithContext
    const module = moduleObj
    const exports = moduleObj.exports
    // bify direct module instantiation disabled ("arguments[4]")
    return [require, module, exports, null, null]
  }

  // it is called by the policy loader or modules collection
  function loadPolicy (bundlePolicy) {
    // verify + load config
    Object.entries(bundlePolicy.resources || {}).forEach(([packageName, packageConfig]) => {
      if (packageName in lavamoatPolicy) {
        throw new Error(`LavaMoat - loadBundle encountered redundant config definition for package "${packageName}"`)
      }
      lavamoatPolicy.resources[packageName] = packageConfig
    })
  }

  // it is called by the modules collection
  function loadBundle (newModules, entryPoints, bundlePolicy) {
    // verify + load config
    if (bundlePolicy) {
      loadPolicy(bundlePolicy)
    }
    // verify + load in each module
    for (const [moduleId, moduleDeps, initFn, { package: packageName, type }] of newModules) {
      // verify that module is new
      if (moduleRegistry.has(moduleId)) {
        throw new Error(`LavaMoat - loadBundle encountered redundant module definition for id "${moduleId}"`)
      }
      // add the module
      moduleRegistry.set(moduleId, {
        type: type || 'js',
        id: moduleId,
        deps: moduleDeps,
        // source: `(${initFn})`,
        precompiledInitializer: initFn,
        package: packageName,
      })
    }
    // run each of entryPoints
    const entryExports = Array.prototype.map.call(entryPoints, (entryId) => {
      return runModule(entryId)
    })
    // webpack compat: return the first module's exports
    return entryExports[0]
  }

  function runModule (moduleId) {
    if (!moduleRegistry.has(moduleId)) {
      throw new Error(`no module registered for "${moduleId}" (${typeof moduleId})`)
    }
    return internalRequire(moduleId)
  }

  // called by reportStatsHook
  function onStatsReady (moduleGraphStatsObj) {
    const graphId = Date.now()
    console.warn(`completed module graph init "${graphId}" in ${moduleGraphStatsObj.value}ms ("${moduleGraphStatsObj.name}")`)
    console.warn('logging module init stats object:')
    console.warn(JSON.stringify(moduleGraphStatsObj, null, 2))
  }

})()
