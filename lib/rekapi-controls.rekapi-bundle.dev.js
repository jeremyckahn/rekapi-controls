// Underscore.js 1.2.2
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(b.isFunction(a.isEqual))return a.isEqual(c);if(b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return String(a)==String(c);case "[object Number]":return a=+a,c=+c,a!=a?c!=c:a==0?1/a==1/c:a==c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&r(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(m.call(a,h)&&(f++,!(g=m.call(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(m.call(c,
h)&&!f--)break;g=!f}}d.pop();return g}var s=this,F=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,G=k.unshift,l=p.toString,m=p.hasOwnProperty,v=k.forEach,w=k.map,x=k.reduce,y=k.reduceRight,z=k.filter,A=k.every,B=k.some,q=k.indexOf,C=k.lastIndexOf,p=Array.isArray,H=Object.keys,t=Function.prototype.bind,b=function(a){return new n(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else typeof define==="function"&&define.amd?
define("underscore",function(){return b}):s._=b;b.VERSION="1.2.2";var j=b.each=b.forEach=function(a,c,b){if(a!=null)if(v&&a.forEach===v)a.forEach(c,b);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(b,a[e],e,a)===o)break}else for(e in a)if(m.call(a,e)&&c.call(b,a[e],e,a)===o)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.map===w)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=
d!==void 0;a==null&&(a=[]);if(x&&a.reduce===x)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(y&&a.reduceRight===y)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;
D(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.filter===z)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(A&&a.every===A)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,a,g,h)))return o});
return e};var D=b.some=b.any=function(a,c,d){var c=c||b.identity,e=false;if(a==null)return e;if(B&&a.some===B)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return q&&a.indexOf===q?a.indexOf(c)!=-1:b=D(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};
b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var c=[],b;
j(a,function(a,f){f==0?c[0]=a:(b=Math.floor(Math.random()*(f+1)),c[f]=c[b],c[b]=a)});return c};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,c){var b=a.criteria,d=c.criteria;return b<d?-1:b>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,c){var b=e(a,c);(d[b]||(d[b]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<
f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||
d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,
true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(q&&a.indexOf===q)return a.indexOf(c);
for(d=0,e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(C&&a.lastIndexOf===C)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};var E=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;
e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));E.prototype=a.prototype;var b=new E,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return m.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=
function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);i()},c));g?h=true:a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=
null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=i.call(arguments);return function(){for(var b=i.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=H||function(a){if(a!==
Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)m.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?
a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(m.call(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=l.call(arguments)=="[object Arguments]"?function(a){return l.call(a)=="[object Arguments]"}:
function(a){return!(!a||!m.call(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};
b.isUndefined=function(a){return a===void 0};b.noConflict=function(){s._=F;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),function(c){I(c,b[c]=a[c])})};var J=0;b.uniqueId=function(a){var b=J++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,
"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e(a,b)}};var n=function(a){this._wrapped=a};b.prototype=n.prototype;var u=function(a,c){return c?b(a).chain():a},I=function(a,c){n.prototype[a]=function(){var a=i.call(arguments);G.call(a,this._wrapped);return u(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];n.prototype[a]=function(){b.apply(this._wrapped,
arguments);return u(this._wrapped,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];n.prototype[a]=function(){return u(b.apply(this._wrapped,arguments),this._chain)}});n.prototype.chain=function(){this._chain=true;return this};n.prototype.value=function(){return this._wrapped}}).call(this);
/**
Shifty - A teeny tiny tweening engine in JavaScript. v0.5.0
By Jeremy Kahn - jeremyckahn@gmail.com

For instructions on how to use Shifty, please consult the README: https://github.com/jeremyckahn/shifty/blob/master/README.md

MIT Lincense.  This code free to use, modify, distribute and enjoy.
*/
(function Shifty (global) {
  
  var now
      ,DEFAULT_EASING = 'linear'
      // Making an alias, because Tweenable.prototype.formula will get looked
      // a lot, and this is way faster than resolving the symbol.
      ,easing;

  if (typeof SHIFTY_DEBUG_NOW === 'function') {
    now = SHIFTY_DEBUG_NOW;
  } else {
    /**
     * Get the current UNIX epoch time as an integer.  Exposed publicly as `Tweenable.util.now()`.
     * @returns {Number} An integer representing the current timestamp.
     */
    now = function () {
      return +new Date();
    };
  }
  
  /**
   * Handy shortcut for doing a for-in loop.  Takes care of all of the `hasOwnProperty` wizardry for you.  This is also exposed publicly, you can access it as `Tweenable.util.each()`.
   * @param {Object} obj The object to iterate through.
   * @param {Function} func The function to pass the object and "own" property to.  This handler function receives the `obj` back as the first parameter, and a property name as the second.
   */
  function each (obj, func) {
    var prop;
    
    for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        func(obj, prop);
      }
    }
  }
  
  /**
   * Does a basic copy of one Object's properties to another.  This is not a robust `extend` function, nor is it recusrsive.  It is only appropriate to use on objects that have primitive properties (Numbers, Strings, Boolean, etc.).  Exposed publicly as `Tweenable.util.simpleCopy()`
   * @param {Object} targetObject The object to copy into
   * @param {Object} srcObject The object to copy from
   * @returns {Object} A reference to the augmented `targetObj` Object
   */
  function simpleCopy (targetObj, srcObj) {
    each(srcObj, function (srcObj, prop) {
      targetObj[prop] = srcObj[prop];
    });
    
    return targetObj;
  }
  
  /**
   * Copies each property from `srcObj` onto `targetObj`, but only if the property to copy to `targetObj` is `undefined`.
   */
  function weakCopy (targetObj, srcObj) {
    each(srcObj, function (srcObj, prop) {
      if (typeof targetObj[prop] === 'undefined') {
        targetObj[prop] = srcObj[prop];
      }
    });
    
    return targetObj;
  }
  
  /**
   * Calculates the interpolated tween values of an Object based on the current time.
   * @param {Number} currentPosition The current position to evaluate the tween against.
   * @param {Object} params A configuration Object containing the values that this function requires.  The required properties in this Object are:
   *   @property {Object} originalState The original properties the Object is tweening from.
   *   @property {Object} to The destination properties the Object is tweening to.
   *   @property {Number} duration The length of the tween in milliseconds.
   *   @property {Number} timestamp The UNIX epoch time at which the tween began.
   *   @property {Object} easing An Object of strings.  This Object's keys correspond to the keys in `to`.
   * @param {Object} state A configuration object containing current state data of the tween.  Required properties:
   *   @property {Object} current The Object containing the current `Number` values of the tween.
   */
  function tweenProps (currentPosition, params, state) {
    var prop,
      normalizedPosition;
    
    normalizedPosition = (currentPosition - params.timestamp) / params.duration;
    
    for (prop in state.current) {
      if (state.current.hasOwnProperty(prop) && params.to.hasOwnProperty(prop)) {
        state.current[prop] = tweenProp(params.originalState[prop], params.to[prop], easing[params.easing[prop]], normalizedPosition);
      }
    }
    
    return state.current;
  }

  /**
   * Tweens a single property.
   * @param {number} from The origination value of the tween.
   * @param {number} to The destination value of the tween.
   * @param {Function} easingFunc The easing formula to apply to the tween.
   * @param {number} position The normalized position (between 0.0 and 1.0) to
   *    calculate the midpoint of 'from' and 'to' against.
   * @returns {number} The tweened value.
   */
  function tweenProp (from, to, easingFunc, position) {
    return from + (to - from) * easingFunc(position);
  }
  
  /**
   * Schedules an update.
   * @param {Function} handler The function to execute
   * @param {number} fps The fraction of a second in the update should occur.
   * @returns {number} The id of the update.
   */
  function scheduleUpdate (handler, fps) {
    return setTimeout(handler, 1000 / fps);
  }
  
  /**
   * Calls all of the functions bound to a specified hook on a `Tweenable` instance.
   * @param {String} hookName The name of the hook to invoke the handlers of.
   * @param {Object} hooks The object containing the hook Arrays.
   * @param {Object} applyTo The `Tweenable` instance to call the hooks upon.
   * @param {Array} args The arguments to pass to each function in the specified hook.
   */
  function invokeHook (hookName, hooks, applyTo, args) {
    var i;
    
    for (i = 0; i < hooks[hookName].length; i++) {
      hooks[hookName][i].apply(applyTo, args);
    }
  }
  
  /**
   * Applies a Shifty filter to `Tweenable` instance.
   * @param {String} filterName The name of the filter to apply.
   * @param {Object} applyTo The `Tweenable` instance to call the filter upon.
   * @param {Array} args The arguments to pass to the function in the specified filter.
   */
  function applyFilter (filterName, applyTo, args) {
    each(global.Tweenable.prototype.filter, function (filters, name) {
      if (filters[name][filterName]) {
        filters[name][filterName].apply(applyTo, args);
      }
    });
  }
  
  /**
   * Handles the update logic for one step of a tween.
   * @param {Object} params The configuration containing all of a tween's properties.  This requires all of the `params` @properties required for `tweenProps`, so see that.  It also requires:
   *   @property {Object} owner The `Tweenable` instance that the tween this function is acting upon belongs to.
   *   @property {Object} hook The Object containing all of the `hook`s that belong to `owner
   * @param {Object} state The configuration Object containing all of the state properties for a `Tweenable` instance.  It requires all of the @properties listed for the `state` parameter of  `tweenProps`, so see that.  It also requires:
   *   @property {Boolean} isTweening Whether or not this tween as actually running.
   *   @property {Number} loopId The property that the latest `setTimeout` invokation ID stored in.
   */
  function timeoutHandler (params, state) {
    var currentTime;
    
    currentTime = now();
    
    if (currentTime < params.timestamp + params.duration && state.isTweening) {
      // The tween is still running, schedule an update
      state.loopId = scheduleUpdate(function () {
        timeoutHandler(params, state);
      }, params.owner.fps);
      
      applyFilter('beforeTween', params.owner, [state.current, params.originalState, params.to]);
      tweenProps (currentTime, params, state);
      applyFilter('afterTween', params.owner, [state.current, params.originalState, params.to]);
      
      if (params.hook.step) {
        invokeHook('step', params.hook, params.owner, [state.current]);
      }
      
      params.step.call(state.current);
      
    } else {
      // The duration of the tween has expired
      params.owner.stop(true);
    }
  }

  /**
   * Creates a fully-usable easing Object from either a string or another easing Object.  If `easing` is an Object, then this function clones it and fills in the missing properties with "linear".
   * @param {Object} fromTweenParams
   * @param {Object|string} easing
   */
  function composeEasingObject (fromTweenParams, easing) {
    var composedEasing;

    composedEasing = {};

    if (typeof easing === 'string') {
      each(fromTweenParams, function (obj, prop) {
        composedEasing[prop] = easing;
      });
    // else, it's an Object
    } else {
      each(fromTweenParams, function (obj, prop) {
        if (!composedEasing[prop]) {
          composedEasing[prop] = easing[prop] || DEFAULT_EASING;
        }
      });
    }

    return composedEasing;
  }
  
  /**
   * This is the `Tweenable` constructor.  Do this for fun tweeny goodness:
   * @codestart
   * var tweenableInst = new Tweenable({});
   * @codeend
   * 
   * It accepts one parameter:
   *
   * @param {Object} options A configuration Object containing options for the `Tweenable` instance.  The following are valid:
   *   @property {Object} initialState The state at which the first tween should begin at.
   *   @property {Number} duration The default `duration` for each `tween` made by this instance.  Default is 500 milliseconds.
   *   @property {Number} fps The frame rate (frames per second) at which the instance will update.  Default is 30.
   *   @property {String} easing The name of the default easing formula (attached to `Tweenable.prototype.formula`) to use for each `tween` made for this instance.  Default is `linear`.
   * returns {Object} `Tweenable` instance for chaining.
   */
  function Tweenable (options) {
    options = options || {};
    
    this._hook = {};

    this._tweenParams = {
      'owner': this
      ,'hook': this._hook
      ,'data': {} // holds arbitrary data
    };

    this._state = {};
    
    // The state that the tween begins at.
    this._state.current = options.initialState || {};

    // The framerate at which Shifty updates.  This is exposed publicly as `tweenableInst.fps`.
    this.fps = options.fps || 30;

    // The default easing formula.  This is exposed publicly as `tweenableInst.easing`.
    this.easing = options.easing || DEFAULT_EASING;

    // The default `duration`.  This is exposed publicly as `tweenableInst.duration`.
    this.duration = options.duration || 500;
    
    return this;
  }
  
  /**
   * Start a tween.  This method can be called two ways.  The shorthand way:
   * 
   *   tweenableInst.tween (from, to, [duration], [callback], [easing]);
   *
   * or the longhand way:
   *
   *   tweenableInst.tween ( {
   *     from:       Object,
   *     to:         Object,
   *     duration:   Number,
   *     callback:   Function,
   *     easing:     String|Object,
   *     step:       Function
   *   });
   *
   * Regardless of how you invoke this method, the only required parameters are `from` and `to`.
   *
   * @param {Object} from The beginning state Object containing the properties to tween from.  NOTE:  The properties of this Object are modified over time (to reflect the values in `to`).
   * @param {Object} to The target state Object containing the properties to tween to.
   * @param {Number} duration The amount of time in milliseconds that the tween should run for.
   * @param {Function} start The function to be invoked as soon as the this tween starts.  Mostly useful when used with the `queue` extension.
   * @param {Function} callback The function to invoke as soon as this tween completes.  This function is given the tween's current state Object as the first parameter.
   * @param {String|Object} easing This can either be a string specifying the easing formula to be used on every property of the tween, or an Object with values that are strings that specify an easing formula for a specific property.  Any properties that do not have an easing formula specified will use "linear".
   * @param {Function} step A function to call for each step of the tween.  A "step" is defined as one update cycle (frame) of the tween.  Many update cycles occur to create the illusion of motion, so this function will likely be called quite a bit.
   */
  Tweenable.prototype.tween = function tween (from, to, duration, callback, easing) {

    var self
        ,params
        ,state;

    if (this._state.isTweening) {
      return;
    }
    
    self = this;
    params = this._tweenParams;
    state = this._state;
    this._state.loopId = 0;
    this._state.pausedAtTime = null;
    
    // Normalize some internal values depending on how `tweenableInst.tween` was invoked
    if (to) {
      // Assume the shorthand syntax is being used.
      params.step = function () {};
      params.to = to || {};
      params.duration = duration || this.duration;
      params.callback = callback || function () {};
      params.easing = easing || this.easing;
      state.current = from || {};
    } else {
      // If the second argument is not present, assume the longhand syntax is being used.
      params.step = from.step || function () {};
      params.callback = from.callback || function () {};
      params.to = from.to || from.target || {};
      params.duration = from.duration || this.duration;
      params.easing = from.easing || this.easing;
      state.current = from.from || {};
    }
    
    params.timestamp = now();
    
    // Ensure that there is always something to tween to.
    // Kinda dumb and wasteful, but makes this code way more flexible.
    weakCopy(state.current, params.to);
    weakCopy(params.to, state.current);

    params.easing = composeEasingObject(state.current, params.easing);
    applyFilter('tweenCreated', params.owner, [state.current, params.originalState, params.to]);
    params.originalState = simpleCopy({}, state.current);
    state.isTweening = true;
    this.resume();

    if (from.start) {
      from.start();
    }
    
    return this;
  };

  /**
   * Convenience method for tweening from the current position.  This method functions identically to `tween()` (it's just a wrapper function), but implicitly passes the `Tweenable` instance's current state (what you get from `get()`) as the `from` parameter.  This supports both the longhand and shorthand syntax that `tween()` does, just omitting the `from` paramter in both cases.
   * @param {Object} target If the other parameters are omitted, this Object should contain the longhand parameters outlined in `tween()`.  If at least one other formal parameter is specified, then this Object should contain the target values to tween to.
   * @param {Number} duration Duration of the tween, in milliseconds.
   * @param {Function} callback The callback function to pass along to `tween()`.
   * @param {String|Object} easing The easing formula to use.
   */
  Tweenable.prototype.to = function to (target, duration, callback, easing) {
    if (typeof duration === 'undefined') {
      // Shorthand notation is being used
      target.from = this.get();
      this.tween(target);
    } else {
      // Longhand notation is being used
      this.tween(this.get(), target, duration, callback, easing);
    }
    
    return this;
  };
  
  /**
   * Returns a reference to the `Tweenable`'s current state (the `from` Object that wat passed to `tweenableInst.tween()`).
   * @returns {Object}
   */
  Tweenable.prototype.get = function get () {
    return this._state.current;
  };

  /**
   * Force the `Tweenable` instance's current state.
   * @param {Object} state The state the instance shall have.
   */
  Tweenable.prototype.set = function set (state) {
    this._state.current = state || {};
    
    return this;
  };

  /**
   * Stops and cancels a tween.
   * @param {Boolean} gotoEnd If `false`, or omitted, the tween just stops at its current state, and the `callback` is not invoked.  If `true`, the tweened object's values are instantly set the the target "to" values, and the `callback` is invoked.
   * @returns {Object} The `Tweenable` instance for chaining.
   */
  Tweenable.prototype.stop = function stop (gotoEnd) {
    clearTimeout(this._state.loopId);
    this._state.isTweening = false;
    
    if (gotoEnd) {
      simpleCopy(this._state.current, this._tweenParams.to);
      applyFilter('afterTweenEnd', this, [this._state.current, this._tweenParams.originalState, this._tweenParams.to]);
      this._tweenParams.callback.call(this._state.current);
    }
    
    return this;
  };
  
  /**
   * Pauses a tween.  A `pause`d tween can be resumed with `resume()`.
   * @returns {Object} The `Tween` instance for chaining.
   */
  Tweenable.prototype.pause = function pause () {
    clearTimeout(this._state.loopId);
    this._state.pausedAtTime = now();
    this._state.isPaused = true;
    return this;
  };
  
  /**
   * Resumes a paused tween.  A tween must be `pause`d before is can be `resume`d.
   * @returns {Object} The `Tweenable` instance for chaining.
   */
  Tweenable.prototype.resume = function resume () {
    var self;
    
    self = this;

    if (this._state.isPaused) {
      this._tweenParams.timestamp += now() - this._state.pausedAtTime;
    }
    
    timeoutHandler(self._tweenParams, self._state);
    
    return this;
  };
  
  /**
   * Add a hook to the `Tweenable` instance.  Hooks are functions that are invoked at key points in a `Tweenable` instance's lifecycle.  A hook that is related to the tweening process (like `step`), for example, will occur for every tween that is performed by the `Tweenable` instance.  You just have to set it once.  You can attach as many functions to any given hook as you like.  The available hooks are as follows:
   *
   *   - `step`:  Runs on every frame that a tween runs for.  Hook handler function receives a tween's `currentState` for a parameter.
   *
   * @param {String} hookName The name of the hook to attach `hookFunc` to.
   * @param {Function} hookFunc The hook handler function.  This function will receive parameters based on what hook it is being attached to.
   */
  Tweenable.prototype.hookAdd = function hookAdd (hookName, hookFunc) {
    if (!this._hook.hasOwnProperty(hookName)) {
      this._hook[hookName] = [];
    }
    
    this._hook[hookName].push(hookFunc);
  };
  
  /**
   * Unattach a function from a hook, or all functions.
   *
   * @param {String} hookName The hook to remove a function or functions from.
   * @param {String|undefined} hookFunc The function to matched against and remove from the hook handler list.  If omitted, all functions are removed for the hook specified by `hookName`.
   */
  Tweenable.prototype.hookRemove = function hookRemove (hookName, hookFunc) {
    var i;
    
    if (!this._hook.hasOwnProperty(hookName)) {
      return;
    }
    
    if (!hookFunc) {
      this._hook[hookName] = [];
      return;
    }
    
    for (i = this._hook[hookName].length; i >= 0; i++) {
      if (this._hook[hookName][i] === hookFunc) {
        this._hook[hookName].splice(i, 1);
      }
    }
  };
  
  /**
   * Globally exposed static property to attach filters to.  Filters are used for transforming the properties of a tween at various points in a `Tweenable` instance's lifecycle.  Please consult the README for more info on this.
   */
  Tweenable.prototype.filter = {};
  
  /**
   * Globally exposed static helper methods.  These methods are used internally and could be helpful in a global context as well.
   */
  Tweenable.util = {
    'now': now
    ,'each': each
    ,'tweenProps': tweenProps
    ,'tweenProp': tweenProp
    ,'applyFilter': applyFilter
    ,'simpleCopy': simpleCopy
    ,'weakCopy': weakCopy
    ,'composeEasingObject': composeEasingObject
  };
  
  /**
   * This object contains all of the tweens available to Shifty.  It is extendable - simply attach properties to the Tweenable.prototype.formula Object following the same format at `linear`.
   */
  easing = Tweenable.prototype.formula = {
    linear: function (pos) {
      return pos;
    }
  };

  if (typeof global.Tweenable === 'undefined') {
    // Make `Tweenable` globally accessible.
    global.Tweenable = Tweenable;
  }
  
} (this));
/**
Shifty Easing Formulas
Adapted for Shifty by Jeremy Kahn - jeremyckahn@gmail.com
  v0.1.0

================================
All equations are adapted from Thomas Fuchs' Scripty2: https://raw.github.com/madrobby/scripty2/master/src/effects/transitions/penner.js
Based on Easing Equations (c) 2003 Robert Penner, all rights reserved. (http://www.robertpenner.com/)
This work is subject to the terms in http://www.robertpenner.com/easing_terms_of_use.html
================================

For instructions on how to use Shifty, please consult the README: https://github.com/jeremyckahn/shifty/blob/master/README.md

MIT Lincense.  This code free to use, modify, distribute and enjoy.

*/

(function (global) {
  global.Tweenable.util.simpleCopy(global.Tweenable.prototype.formula, {
    easeInQuad: function(pos){
       return Math.pow(pos, 2);
    },

    easeOutQuad: function(pos){
      return -(Math.pow((pos-1), 2) -1);
    },

    easeInOutQuad: function(pos){
      if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,2);
      return -0.5 * ((pos-=2)*pos - 2);
    },

    easeInCubic: function(pos){
      return Math.pow(pos, 3);
    },

    easeOutCubic: function(pos){
      return (Math.pow((pos-1), 3) +1);
    },

    easeInOutCubic: function(pos){
      if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,3);
      return 0.5 * (Math.pow((pos-2),3) + 2);
    },

    easeInQuart: function(pos){
      return Math.pow(pos, 4);
    },

    easeOutQuart: function(pos){
      return -(Math.pow((pos-1), 4) -1)
    },

    easeInOutQuart: function(pos){
      if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,4);
      return -0.5 * ((pos-=2)*Math.pow(pos,3) - 2);
    },

    easeInQuint: function(pos){
      return Math.pow(pos, 5);
    },

    easeOutQuint: function(pos){
      return (Math.pow((pos-1), 5) +1);
    },

    easeInOutQuint: function(pos){
      if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,5);
      return 0.5 * (Math.pow((pos-2),5) + 2);
    },

    easeInSine: function(pos){
      return -Math.cos(pos * (Math.PI/2)) + 1;
    },

    easeOutSine: function(pos){
      return Math.sin(pos * (Math.PI/2));
    },

    easeInOutSine: function(pos){
      return (-.5 * (Math.cos(Math.PI*pos) -1));
    },

    easeInExpo: function(pos){
      return (pos==0) ? 0 : Math.pow(2, 10 * (pos - 1));
    },

    easeOutExpo: function(pos){
      return (pos==1) ? 1 : -Math.pow(2, -10 * pos) + 1;
    },

    easeInOutExpo: function(pos){
      if(pos==0) return 0;
      if(pos==1) return 1;
      if((pos/=0.5) < 1) return 0.5 * Math.pow(2,10 * (pos-1));
      return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
    },

    easeInCirc: function(pos){
      return -(Math.sqrt(1 - (pos*pos)) - 1);
    },

    easeOutCirc: function(pos){
      return Math.sqrt(1 - Math.pow((pos-1), 2))
    },

    easeInOutCirc: function(pos){
      if((pos/=0.5) < 1) return -0.5 * (Math.sqrt(1 - pos*pos) - 1);
      return 0.5 * (Math.sqrt(1 - (pos-=2)*pos) + 1);
    },

    easeOutBounce: function(pos){
      if ((pos) < (1/2.75)) {
      return (7.5625*pos*pos);
      } else if (pos < (2/2.75)) {
      return (7.5625*(pos-=(1.5/2.75))*pos + .75);
      } else if (pos < (2.5/2.75)) {
      return (7.5625*(pos-=(2.25/2.75))*pos + .9375);
      } else {
      return (7.5625*(pos-=(2.625/2.75))*pos + .984375);
      }
    },

    easeInBack: function(pos){
      var s = 1.70158;
      return (pos)*pos*((s+1)*pos - s);
    },

    easeOutBack: function(pos){
      var s = 1.70158;
      return (pos=pos-1)*pos*((s+1)*pos + s) + 1;
    },

    easeInOutBack: function(pos){
      var s = 1.70158;
      if((pos/=0.5) < 1) return 0.5*(pos*pos*(((s*=(1.525))+1)*pos -s));
      return 0.5*((pos-=2)*pos*(((s*=(1.525))+1)*pos +s) +2);
    },

    elastic: function(pos) {
      return -1 * Math.pow(4,-8*pos) * Math.sin((pos*6-1)*(2*Math.PI)/2) + 1;
    },

    swingFromTo: function(pos) {
      var s = 1.70158;
      return ((pos/=0.5) < 1) ? 0.5*(pos*pos*(((s*=(1.525))+1)*pos - s)) :
      0.5*((pos-=2)*pos*(((s*=(1.525))+1)*pos + s) + 2);
    },

    swingFrom: function(pos) {
      var s = 1.70158;
      return pos*pos*((s+1)*pos - s);
    },

    swingTo: function(pos) {
      var s = 1.70158;
      return (pos-=1)*pos*((s+1)*pos + s) + 1;
    },

    bounce: function(pos) {
      if (pos < (1/2.75)) {
        return (7.5625*pos*pos);
      } else if (pos < (2/2.75)) {
        return (7.5625*(pos-=(1.5/2.75))*pos + .75);
      } else if (pos < (2.5/2.75)) {
        return (7.5625*(pos-=(2.25/2.75))*pos + .9375);
      } else {
        return (7.5625*(pos-=(2.625/2.75))*pos + .984375);
      }
    },

    bouncePast: function(pos) {
      if (pos < (1/2.75)) {
        return (7.5625*pos*pos);
      } else if (pos < (2/2.75)) {
        return 2 - (7.5625*(pos-=(1.5/2.75))*pos + .75);
      } else if (pos < (2.5/2.75)) {
        return 2 - (7.5625*(pos-=(2.25/2.75))*pos + .9375);
      } else {
        return 2 - (7.5625*(pos-=(2.625/2.75))*pos + .984375);
      }
    },

    easeFromTo: function(pos) {
      if ((pos/=0.5) < 1) return 0.5*Math.pow(pos,4);
      return -0.5 * ((pos-=2)*Math.pow(pos,3) - 2);
    },

    easeFrom: function(pos) {
      return Math.pow(pos,4);
    },

    easeTo: function(pos) {
      return Math.pow(pos,0.25);
    }
  });
} (this));
/*global setTimeout:true, clearTimeout:true */

/**
Shifty Queue Extension
By Jeremy Kahn - jeremyckahn@gmail.com
  v0.2.0

Dependencies: shifty.core.js

Tweeny and all official extensions are freely available under an MIT license.
For instructions on how to use Tweeny and this extension, please consult the manual: https://github.com/jeremyckahn/shifty/blob/master/README.md
For instructions on how to use this extension, please see: https://github.com/jeremyckahn/shifty/blob/master/doc/shifty.queue.md

MIT Lincense.  This code free to use, modify, distribute and enjoy.

*/

(function shiftyQueue (global) {
  
  function iterateQueue (queue) {
    queue.shift();

    if (queue.length) {
      queue[0]();
    } else {
      queue.running = false;
    }
  }
  
  function getWrappedCallback (callback, queue) {
    return function () {
      callback();
      iterateQueue(queue);
    };
  }
  
  function tweenInit (context, from, to, duration, callback, easing) {
    // Duck typing!  This method infers some info from the parameters above to determine which method to call,
    // and what paramters to pass to it.
    return function () {
      if (to) {
        // Shorthand notation was used, call `tween`
        context.tween(from, to, duration, callback, easing);
      } else {
        // Longhand notation was used

        // Ensure that that `wrappedCallback` (from `queue`) gets passed along.
        from.callback = callback;

        if (from.from) {
          context.tween(from);
        } else {
          // `from` data was omitted, call `to`
          context.to(from);
        }
      }
    };
  }

  global.Tweenable.prototype.queue = function (from, to, duration, callback, easing) {
    var wrappedCallback;
      
    if (!this._tweenQueue) {
      this._tweenQueue = [];
    }

    // Make sure there is always an invokable callback
    callback = callback || from.callback || function () {};
    wrappedCallback = getWrappedCallback(callback, this._tweenQueue);
    this._tweenQueue.push(tweenInit(this, from, to, duration, wrappedCallback, easing));

    return this;
  };
  
  global.Tweenable.prototype.queueStart = function () {
    if (!this._tweenQueue.running && this._tweenQueue.length > 0) {
      this._tweenQueue[0]();
      this._tweenQueue.running = true;
    }
    
    return this;
  };

  global.Tweenable.prototype.queueShift = function () {
    this._tweenQueue.shift();
    return this;
  };
  
  global.Tweenable.prototype.queuePop = function () {
    this._tweenQueue.pop();
    return this;
  };

  global.Tweenable.prototype.queueEmpty = function () {
    this._tweenQueue.length = 0;
    return this;
  };

  global.Tweenable.prototype.queueLength = function () {
    return this._tweenQueue.length;
  };
  
}(this));
/**
Shifty Color Extension
By Jeremy Kahn - jeremyckahn@gmail.com
  v0.1.0

For instructions on how to use Shifty, please consult the README: https://github.com/jeremyckahn/shifty/blob/master/README.md
For instructions on how to use this extension, please see: https://github.com/jeremyckahn/shifty/blob/master/doc/shifty.color.md

MIT Lincense.  This code free to use, modify, distribute and enjoy.

*/

(function shiftyColor (global) {
  var R_SHORTHAND_HEX = /^#([0-9]|[a-f]){3}$/i,
    R_LONGHAND_HEX = /^#([0-9]|[a-f]){6}$/i,
    R_RGB = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)\s*$/i,
    savedRGBPropNames;
  
  if (!global.Tweenable) {
    return;
  }
  
  /**
   * Convert a base-16 number to base-10.
   * @param {Number|String} hex The value to convert
   * @returns {Number} The base-10 equivalent of `hex`.
   */
  function hexToDec (hex) {
    return parseInt(hex, 16);
  }

  /**
   * Convert a hexadecimal string to an array with three items, one each for the red, blue, and green decimal values.
   * @param {String} hex A hexadecimal string.
   * @returns {Array} The converted Array of RGB values if `hex` is a valid string, or an Array of three 0's.
   */
  function hexToRGBArr (hex) {
    
    hex = hex.replace(/#/g, '');
    
    // If the string is a shorthand three digit hex notation, normalize it to the standard six digit notation
    if (hex.length === 3) {
      hex = hex.split('');
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    return [hexToDec(hex.substr(0, 2)), hexToDec(hex.substr(2, 2)), hexToDec(hex.substr(4, 2))];
  }
  
  function getRGBStringFromHex (str) {
    var rgbArr,
      convertedStr;
    rgbArr = hexToRGBArr(str);
    convertedStr = 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')';
    
    return convertedStr;
  }
  
  function isColorString (str) {
    return (typeof str === 'string') && (R_SHORTHAND_HEX.test(str) || R_LONGHAND_HEX.test(str) || R_RGB.test(str));
  }
  
  function isHexString (str) {
    return (typeof str === 'string') && (R_SHORTHAND_HEX.test(str) || R_LONGHAND_HEX.test(str));
  }
  
  function convertHexStringPropsToRGB (obj) {
    global.Tweenable.util.each(obj, function (obj, prop) {
      if (isHexString(obj[prop])) {
        obj[prop] = getRGBStringFromHex(obj[prop]);
      }
    });
  }
  
  function getColorStringPropNames (obj) {
    var list;
    
    list = [];
    
    global.Tweenable.util.each(obj, function (obj, prop) {
      if (isColorString(obj[prop])) {
        list.push(prop);
      }
    });
    
    return list;
  }
  
  function rgbToArr (str) {
    return str.match(/(\d+)/g);
  }
  
  function splitRGBChunks (obj, rgbPropNames) {
    var i,
      limit,
      rgbParts;
      
      limit = rgbPropNames.length;
      
      for (i = 0; i < limit; i++) {
        rgbParts = rgbToArr(obj[rgbPropNames[i]]);
        obj['__r__' + rgbPropNames[i]] = +rgbParts[0];
        obj['__g__' + rgbPropNames[i]] = +rgbParts[1];
        obj['__b__' + rgbPropNames[i]] = +rgbParts[2];
        delete obj[rgbPropNames[i]];
      }
  }
  
  function joinRGBChunks (obj, rgbPropNames) {
    var i,
        limit;
      
    limit = rgbPropNames.length;
    
    for (i = 0; i < limit; i++) {
      
      obj[rgbPropNames[i]] = 'rgb(' + 
        parseInt(obj['__r__' + rgbPropNames[i]], 10) + ',' + 
        parseInt(obj['__g__' + rgbPropNames[i]], 10) + ',' + 
        parseInt(obj['__b__' + rgbPropNames[i]], 10) + ')';
      
      delete obj['__r__' + rgbPropNames[i]];
      delete obj['__g__' + rgbPropNames[i]];
      delete obj['__b__' + rgbPropNames[i]];
    }
  }

  function expandEasingObject (easingObject, rgbPropNames) {
    var i,
        limit;
      
    limit = rgbPropNames.length;
    
    for (i = 0; i < limit; i++) {
      easingObject['__r__' + rgbPropNames[i]] = easingObject[rgbPropNames[i]];
      easingObject['__g__' + rgbPropNames[i]] = easingObject[rgbPropNames[i]];
      easingObject['__b__' + rgbPropNames[i]] = easingObject[rgbPropNames[i]];
    }
  }

  function collapseEasingObject (easingObject, rgbPropNames) {
    var i,
        limit;
      
    limit = rgbPropNames.length;
    
    for (i = 0; i < limit; i++) {
      delete easingObject['__r__' + rgbPropNames[i]];
      delete easingObject['__g__' + rgbPropNames[i]];
      delete easingObject['__b__' + rgbPropNames[i]];
    }
  }
  
  global.Tweenable.prototype.filter.color = {
    'tweenCreated': function tweenCreated (currentState, fromState, toState) {
      convertHexStringPropsToRGB(currentState);
      convertHexStringPropsToRGB(fromState);
      convertHexStringPropsToRGB(toState);
    },
    
    'beforeTween': function beforeTween (currentState, fromState, toState) {
      savedRGBPropNames = getColorStringPropNames(fromState);
      
      splitRGBChunks(currentState, savedRGBPropNames);
      splitRGBChunks(fromState, savedRGBPropNames);
      splitRGBChunks(toState, savedRGBPropNames);
      expandEasingObject(this._tweenParams.easing, savedRGBPropNames);
    },
    
    'afterTween': function afterTween (currentState, fromState, toState) {
      joinRGBChunks(currentState, savedRGBPropNames);
      joinRGBChunks(fromState, savedRGBPropNames);
      joinRGBChunks(toState, savedRGBPropNames);
      collapseEasingObject(this._tweenParams.easing, savedRGBPropNames);
    }
  };
  
}(this));
/**
Shifty CSS Unit Extension
By Jeremy Kahn - jeremyckahn@gmail.com
  v0.1.0

For instructions on how to use Shifty, please consult the README: https://github.com/jeremyckahn/shifty/blob/master/README.md
For instructions on how to use this extension, please see: https://github.com/jeremyckahn/shifty/blob/master/doc/shifty.css_units.md

MIT Lincense.  This code free to use, modify, distribute and enjoy.

*/

(function shiftyCSSUnits (global) {
  var R_CSS_UNITS = /(px|em|%|pc|pt|mm|cm|in|ex)/i,
    R_QUICK_CSS_UNITS = /([a-z]|%)/gi,
    savedTokenProps;
  
  function isValidString (str) {
    return typeof str === 'string' && R_CSS_UNITS.test(str);
  }
  
  function getTokenProps (obj) {
    var collection;

    collection = {};
    
    global.Tweenable.util.each(obj, function (obj, prop) {
      if (isValidString(obj[prop])) {
        collection[prop] = {
          'suffix': obj[prop].match(R_CSS_UNITS)[0]
        };
      }
    });
    
    return collection;
  }
  
  function deTokenize (obj, tokenProps) {
    global.Tweenable.util.each(tokenProps, function (collection, token) {
      // Extract the value from the string
      obj[token] = +(obj[token].replace(R_QUICK_CSS_UNITS, ''));
    });
  }
  
  function reTokenize (obj, tokenProps) {
    global.Tweenable.util.each(tokenProps, function (collection, token) {
      obj[token] = obj[token] + collection[token].suffix;
    });
  }
  
  global.Tweenable.prototype.filter.token = {
    'beforeTween': function beforeTween (currentState, fromState, toState) {
      savedTokenProps = getTokenProps(fromState);
      
      deTokenize(currentState, savedTokenProps);
      deTokenize(fromState, savedTokenProps);
      deTokenize(toState, savedTokenProps);
    },
    
    'afterTween': function afterTween (currentState, fromState, toState) {
      reTokenize(currentState, savedTokenProps);
      reTokenize(fromState, savedTokenProps);
      reTokenize(toState, savedTokenProps);
    }
  };
  
}(this));
/*global setTimeout:true, clearTimeout:true */

/**
Shifty Interpolate Extension
By Jeremy Kahn - jeremyckahn@gmail.com
  v0.1.0

Dependencies: shifty.core.js

Tweeny and all official extensions are freely available under an MIT license.
For instructions on how to use Tweeny and this extension, please consult the manual: https://github.com/jeremyckahn/shifty/blob/master/README.md
For instructions on how to use this extension, please see: https://github.com/jeremyckahn/shifty/blob/master/doc/shifty.queue.md

MIT Lincense.  This code free to use, modify, distribute and enjoy.

*/

(function shiftyInterpolate (global) {
  
  if (!global.Tweenable) {
    return;
  }
  
  function getInterpolatedValues (from, current, to, position, easing) {
    var easingObject;

    easingObject = Tweenable.util.composeEasingObject(from, easing);

    return global.Tweenable.util.tweenProps(position, {
      'originalState': from
      ,'to': to
      ,'timestamp': 0
      ,'duration': 1
      ,'easing': easingObject
    }, {
      'current': current
    });
  }

  // This is the static utility version of the function.
  global.Tweenable.util.interpolate = function (from, to, position, easing) {
    var current
        ,interpolatedValues
        ,mockTweenable;
    
    // Function was passed a configuration object, extract the values
    if (from && from.from) {
      to = from.to;
      position = from.position;
      easing = from.easing;
      from = from.from;
    }

    mockTweenable = new Tweenable();
    mockTweenable._tweenParams.easing = easing;
    current = global.Tweenable.util.simpleCopy({}, from);
    
    // Call any data type filters
    global.Tweenable.util.applyFilter('tweenCreated', mockTweenable, [current, from, to]);
    global.Tweenable.util.applyFilter('beforeTween', mockTweenable, [current, from, to]);
    interpolatedValues = getInterpolatedValues (from, current, to, position, mockTweenable._tweenParams.easing);
    global.Tweenable.util.applyFilter('afterTween', mockTweenable, [interpolatedValues, from, to]);
    
    return interpolatedValues;
  };
  
  // This is the inheritable instance-method version of the function.
  global.Tweenable.prototype.interpolate = function (to, position, easing) {
    var interpolatedValues;
    
    interpolatedValues = global.Tweenable.util.interpolate(this.get(), to, position, easing);
    this.set(interpolatedValues);
    
    return interpolatedValues;
  };
}(this));
/**
 * Rekapi - Rewritten Kapi. v0.3.4
 *   By Jeremy Kahn - jeremyckahn@gmail.com
 *   https://github.com/jeremyckahn/rekapi
 *
 * Make fun keyframe animations with JavaScript.
 * Dependencies: Underscore.js (https://github.com/documentcloud/underscore), Shifty.js (https://github.com/jeremyckahn/shifty)
 * MIT Lincense.  This code free to use, modify, distribute and enjoy.
 */
;(function rekapiCore (global) {
  
  if (!_) {
    throw 'underscore.js is required for Kapi.';
  }
  
  if (!Tweenable) {
    throw 'shifty.js is required for Kapi.';
  }
  
  var gk
      ,defaultConfig
      ,now
      ,playState;
  
  
  /**
   * Sorts an array numerically, from smallest to largest.
   * @param {Array} array The Array to sort.
   * @returns {Array} The sorted Array.
   */
  function sortNumerically (array) {
    return array.sort(function (a, b) {
      return a - b;
    });
  }
  
  
  /**
   * Determines which iteration of the loop the animation is currently in.
   * @param {Kapi} kapi
   * @param {number} timeSinceStart
   */
  function determineCurrentLoopIteration (kapi, timeSinceStart) {
    var currentIteration;
    
    currentIteration = Math.floor((timeSinceStart) / kapi._animationLength);
    return currentIteration;
  }
  
  
  /**
   * Calculate how many milliseconds since the animation began.
   * @param {Kapi} kapi
   * @returns {number}
   */
  function calculateTimeSinceStart (kapi) {
    var timeSinceStart;

    timeSinceStart = now() - kapi._loopTimestamp;
    return timeSinceStart;
  }
  
  
  /**
   * Determines is the animation is complete or not.
   * @param {Kapi} kapi
   * @param {number} currentLoopIteration
   */
  function isAnimationComplete (kapi, currentLoopIteration) {
    return currentLoopIteration >= kapi._timesToIterate
        && kapi._timesToIterate !== -1;
  }
  
  
  /**
   * Stops the animation if the animation is complete.
   * @param {Kapi} kapi
   * @param {number} currentLoopIteration
   */
  function updatePlayState (kapi, currentLoopIteration) {
    if (isAnimationComplete(kapi, currentLoopIteration)) {
      kapi.stop();
      fireEvent(kapi, 'onAnimationComplete');
    }
  }
  
  
  /**
   * Calculate how far in the animation loop `kapi` is, in milliseconds, based 
   * on the current time.  Also overflows into a new loop if necessary.
   * @param {Kapi} kapi
   * @returns {number}
   */
  function calculateLoopPosition (kapi, forMillisecond, currentLoopIteration) {
    var currentLoopPosition;
    
    if (isAnimationComplete(kapi, currentLoopIteration)) {
      currentLoopPosition = kapi._animationLength;
    } else {
      currentLoopPosition = forMillisecond % kapi._animationLength;
    }
    
    return currentLoopPosition;
  }
  
  
  /**
   * Calculate the position and state for a given millisecond and render it.
   * Also updates the state internally and accounts for how many loop 
   * iterations the animation runs for.
   * @param {Kapi} kapi
   * @param {number} forMillisecond The millisecond to render
   */
  function renderMillisecond (kapi, forMillisecond) {
    var currentIteration
        ,loopPosition;
    
    currentIteration = determineCurrentLoopIteration(kapi, forMillisecond);
    loopPosition = calculateLoopPosition(kapi, forMillisecond,
        currentIteration);
    updatePlayState(kapi, currentIteration);
    kapi.render(loopPosition);
  }
  
  
  /**
   * Calculate how far in the animation loop `kapi` is, in milliseconds, and
   * render based on that time.
   * @param {Kapi} kapi
   */
  function renderCurrentMillisecond (kapi) {
    renderMillisecond(kapi, calculateTimeSinceStart(kapi));
  }
  
  
  /**
   * This is the heartbeat of an animation.  Renders a frame and then calls
   * itself based on the framerate of the supplied Kapi.
   * @param {Kapi} kapi
   */
  function tick (kapi) {
    kapi._loopId = setTimeout(function () {
      // First, scedule the next update.  renderCurrentMillisecond can cancel
      // the update if necessary.
      tick(kapi);
      renderCurrentMillisecond(kapi);
    }, 1000 / kapi.config.fps);
  }


  function fireEvent (kapi, eventName) {
    _.each(kapi._events[eventName], function (handler) {
      handler(kapi);
    });
  }
  
  
  /**
   * Does nothing.  Absolutely nothing at all.
   */
  function noop () {
    // NOOP!
  }
  
  
  defaultConfig = {
    'fps': 30
    ,'height': 150
    ,'width': 300
  };
  
  playState = {
    'STOPPED': 'stopped'
    ,'PAUSED': 'paused'
    ,'PLAYING': 'playing'
  };
  
  now = Tweenable.util.now;
  
  /**
   * @param {HTMLCanvas} canvas
   * @param {Object} opt_config
   * @returns {Kapi}
   */
  gk = global.Kapi || function Kapi (canvas, opt_config) {
    this.canvas = canvas;
    this._contextType = null;
    this.canvas_setContext(canvas);
    this.config = {};
    this._actors = {};
    this._drawOrder = [];
    this._playState = playState.STOPPED;

    this._events = {
      'onFrameRender': []
      ,'onAnimationComplete': []
      ,'onPlayStateChange': []
      ,'onPlay': []
      ,'onPause': []
      ,'onStop': []
    };

    // How many times to loop the animation before stopping.
    this._timesToIterate = -1;
    
    // Millisecond duration of the animation
    this._animationLength = 0;

    // The setTimeout ID of `tick`
    this._loopId = null;
    
    // The UNIX time at which the animation loop started
    this._loopTimestamp = null;
    
    
    // Used for maintaining position when the animation is paused. 
    this._pausedAtTime = null;
    
    // The last millisecond position that was drawn
    this._lastRenderedMillisecond = 0;
    
    _.extend(this.config, opt_config);
    _.defaults(this.config, defaultConfig);
    
    // Apply the height and width if they were passed in the`config` Object.
    // Also delete them from the internal config - we won't need them anymore.
    _.each(['height', 'width'], function (dimension) {
      if (this.config[dimension]) {
        this['canvas_' + dimension](this.config[dimension]);
        delete this.config[dimension];
      }
    }, this);
    
    return this;
  };
  
  
  /**
   * @param {Kapi.Actor} actor
   * @param {Object} opt_initialState
   * @returns {Kapi}
   */
  gk.prototype.addActor = function (actor, opt_initialState) {
    // You can't add an actor more than once.
    if (!_.contains(this._actors, actor)) {
      actor.kapi = this;
      actor.fps = this.framerate();
      actor.set(opt_initialState || {});
      this._actors[actor.id] = actor;
      this._drawOrder.push(actor.id);
      actor.setup();
    }
    
    return this;
  };
  
  
  /**
   * @param {number} actorId
   * @returns {Kapi.Actor}
   */
  gk.prototype.getActor = function (actorId) {
    return this._actors[actorId];
  };
  
  
  /**
   * @param {Kapi.Actor} actor
   * @returns {Kapi}
   */
  gk.prototype.removeActor = function (actor) {
    delete this._actors[actor.id];
    delete actor.kapi;
    this._drawOrder = _.without(this._drawOrder, actor.id);
    actor.teardown();
    this.updateInternalState();
    
    return this;
  };
  
  
  /**
   * @param {number} opt_howManyTimes
   * @returns {Kapi}
   */
  gk.prototype.play = function (opt_howManyTimes) {
    clearTimeout(this._loopId);
    
    if (this._playState === playState.PAUSED) {
      this._loopTimestamp += now() - this._pausedAtTime;
    } else {
      this._loopTimestamp = now();
    }
    
    this._timesToIterate = opt_howManyTimes || -1;
    this._playState = playState.PLAYING;
    tick(this);
    
    // also resume any shifty tweens that are paused.
    _.each(this._actors, function (actor) {
      if (actor._state.isPaused ) {
        actor.resume();
      }
    });

    fireEvent(this, 'onPlayStateChange');
    fireEvent(this, 'onPlay');

    return this;
  };


  /**
   * @param {number} millisecond
   * @param {number} opt_howManyTimes
   * @returns {Kapi}
   */
  gk.prototype.playFrom = function (millisecond, opt_howManyTimes) {
    this.play(opt_howManyTimes);
    this._loopTimestamp = now() - millisecond;

    return this;
  };


  /**
   * @param {number} opt_howManyTimes
   * @returns {Kapi}
   */
  gk.prototype.playFromCurrent = function (opt_howManyTimes) {
    return this.playFrom(this._lastRenderedMillisecond, opt_howManyTimes);
  };


  /**
   * @returns {Kapi}
   */
  gk.prototype.pause = function () {
    if (this._playState === playState.PAUSED) {
      return this;
    }

    this._playState = playState.PAUSED;
    clearTimeout(this._loopId);
    this._pausedAtTime = now();
    
    // also pause any shifty tweens that are running.
    _.each(this._actors, function (actor) {
      if (actor._state.isTweening) {
        actor.pause();
      }
    });

    fireEvent(this, 'onPlayStateChange');
    fireEvent(this, 'onPause');

    return this;
  };
  
  
  /**
   * @param {boolean} alsoClear
   * @returns {Kapi}
   */
  gk.prototype.stop = function (alsoClear) {
    this._playState = playState.STOPPED;
    clearTimeout(this._loopId);
    
    if (alsoClear === true) {
      this.canvas_clear();
    }

    // also kill any shifty tweens that are running.
    _.each(this._actors, function (actor) {
      actor.stop();

      if (alsoClear === true) {
        actor.hide();
      }
    });

    fireEvent(this, 'onPlayStateChange');
    fireEvent(this, 'onStop');

    return this;
  };
  
  
  /**
   * @returns {boolean}
   */
  gk.prototype.isPlaying = function () {
    return this._playState === playState.PLAYING;
  };
  
  
  /**
   * @returns {number}
   */
  gk.prototype.animationLength = function () {
    return this._animationLength;
  };


  /**
   * @returns {number}
   */
  gk.prototype.actorCount = function () {
    return this._drawOrder.length;
  };


  /**
   * @param {number} opt_newFramerate
   * @returns {number}
   */
  gk.prototype.framerate = function (opt_newFramerate) {
    if (opt_newFramerate) {
      this.config.fps = opt_newFramerate;
    }

    return this.config.fps;
  };
  
  
  /**
   * @param {number} millisecond
   * @returns {Kapi}
   */
  gk.prototype.render = function (millisecond) {
    this.calculateActorPositions(millisecond);
    this.draw();
    this._lastRenderedMillisecond = millisecond;
    fireEvent(this, 'onFrameRender');
    
    return this;
  };


  /**
   * @returns {Kapi}
   */
  gk.prototype.redraw = function () {
    this.render(this._lastRenderedMillisecond);
    
    return this;
  };
  
  
  /**
   * @param {number} millisecond
   * @returns {Kapi}
   */
  gk.prototype.calculateActorPositions = function (millisecond) {
    var i, len;
        
    len = this._drawOrder.length;
    
    for (i = 0; i < len; i++) {
      this._actors[this._drawOrder[i]].calculatePosition(millisecond);
    }
    
    return this;
  };
  
  
  /**
   * @returns {Kapi}
   */
  gk.prototype.draw = function () {
    var i, len
        ,currentActor
        ,canvas_context;
    
    this.canvas_clear();
    len = this._drawOrder.length;
    canvas_context = this.canvas_getContext();
    
    for (i = 0; i < len; i++) {
      currentActor = this._actors[this._drawOrder[i]];
      if (currentActor.isShowing()) {
        currentActor.draw(canvas_context, currentActor.get());
      }
    }
    
    return this;
  };
  
  
  /**
   * @returns {Kapi}
   */
  gk.prototype.updateInternalState = function () {
    var allKeyframeLists;
        
    allKeyframeLists = [0];
        
    _.each(this._drawOrder, function (i) {
      allKeyframeLists = allKeyframeLists.concat(allKeyframeLists,
          this._actors[i].keyframeList());
      allKeyframeLists = _.uniq(allKeyframeLists);
    }, this);
    
    this._animationLength = Math.max.apply(Math, allKeyframeLists);
    
    return this;
  };


  /**
   * @param {Kapi.Actor} actor
   * @param {number} layer
   * @returns {Kapi.Actor|undefined}
   */
  gk.prototype.moveActorToLayer = function (actor, layer) {
    if (layer < this._drawOrder.length) {
      this._drawOrder = _.without(this._drawOrder, actor.id);
      this._drawOrder.splice(layer, 0, actor.id);

      return actor;
    }

    return undefined;
  };


  /**
   * @param {string} eventName
   * @param {Function} handler
   * @returns {Kapi}
   */
  gk.prototype.bind = function (eventName, handler) {
    if (!this._events[eventName]) {
      return;
    }

    this._events[eventName].push(handler);

    return this;
  };


  /**
   * @param {string} eventName
   * @param {Function} opt_handler
   * @returns {Kapi}
   */
  gk.prototype.unbind = function (eventName, opt_handler) {
    if (!this._events[eventName]) {
      return;
    }

    if (!opt_handler) {
      this._events[eventName] = [];
    } else {
      this._events[eventName] = _.without(this._events[eventName],
        opt_handler);
    }

    return this;
  };


  gk.util = {};
  
  //TODO:  There are some duplicates in gk.util and gk._private, clean up the
  // references in the tests.
  _.extend(gk.util, {
    'noop': noop
    ,'sortNumerically': sortNumerically
    ,'calculateLoopPosition': calculateLoopPosition
    ,'calculateTimeSinceStart': calculateTimeSinceStart
  });
  
  // Some hooks for testing.
  if (typeof KAPI_DEBUG !== 'undefined' && KAPI_DEBUG === true) {
    gk._private = {
      'sortNumerically': sortNumerically
      ,'calculateLoopPosition': calculateLoopPosition
      ,'renderCurrentMillisecond': renderCurrentMillisecond
      ,'tick': tick
      ,'determineCurrentLoopIteration': determineCurrentLoopIteration
      ,'calculateTimeSinceStart': calculateTimeSinceStart
      ,'isAnimationComplete': isAnimationComplete
      ,'updatePlayState': updatePlayState
    }
  }
  
  global.Kapi = gk;
  
} (this));
;(function rekapiActor (global) {

  var DEFAULT_EASING = 'linear'
      ,gk
      ,actorCount
      ,ActorMethods;
  
  gk = global.Kapi;
  actorCount = 0;
  
  
  function getUniqueActorId () {
    return actorCount++;
  }
  
  
  /**
   * Finds the index of the keyframe that occurs for `millisecond`.
   * @param {Kapi.Actor} actor The actor to find the keyframe during which
   *    `millisecond` occurs.
   * @param {number} millisecond
   * @returns {number} The keyframe index for `millisecond`, or -1 if it was
   *    not found.
   */
  //TODO:  Oh noes, this is a linear search!  Maybe optimize it?
  function getKeyframeForMillisecond (actor, millisecond) {
    var i, len
        ,list;
    
    list = actor._keyframeList;
    len = list.length;
    
    for (i = 1; i < len; i++) {
      if (list[i] >= millisecond) {
        return (i - 1);
      }
    }
    
    return -1;
  }


  /**
   * Apply new values to an Object.  If the new value for a given property is
   * `null` or `undefined`, the property is deleted from the original Object.
   * @param {Object} targetObject The Object to modify.
   * @param {Object} augmentation The Object containing properties to modify
   *    `targetObject` with.
   */
  function augmentObject (targetObject, augmentation) {
    _.each(augmentation, function (newVal, name) {
      if (newVal === undefined || newVal === null) {
        delete targetObject[name];
      } else {
        targetObject[name] = newVal;
      }
    });
  }

  
  /**
   * Compute a keyframe's positions and easing from all of the keyframes that
   * came before it.
   * @param {Kapi} kapi
   * @param {number} keyframeId
   * @returns {Object}
   */
  function composeKeyframe (kapi, keyframeId) {
    var keyframeList
        ,keyframes
        ,composedKeyframe
        ,i;

    keyframeList = kapi._keyframeList;
    keyframes = kapi._keyframes;
    composedKeyframe = {
      'position': {}
      ,'easing': {}
    };
    
    for (i = keyframeId; i >= 0; i--) {
      _.defaults(composedKeyframe.position, keyframes[keyframeList[i]].position)
      _.defaults(composedKeyframe.easing, keyframes[keyframeList[i]].easing)
    }

    return composedKeyframe;
  }


  /**
   * @param {Object} opt_config
   * @returns {Actor.Kapi}
   */
  gk.Actor = function Actor (opt_config) {
    
    opt_config = opt_config || {};
    
    // Steal the `Tweenable` constructor.
    this.constructor.call(this);
    
    _.extend(this, {
      '_keyframes': {}
      ,'_keyframeList': []
      ,'_data': {}
      ,'_isShowing': false
      ,'_isPersisting': false
      ,'id': getUniqueActorId()
      ,'setup': opt_config.setup || gk.util.noop
      ,'draw': opt_config.draw || gk.util.noop
      ,'teardown': opt_config.teardown || gk.util.noop
    });
    
    return this;
  };


  // Kind of a fun way to set up an inheritance chain.  `ActorMethods` prevents
  // methods on `Actor.prototype` from polluting `Tweenable`'s prototype with
  // `Actor` specific methods.
  ActorMethods = function () {};
  ActorMethods.prototype = Tweenable.prototype;
  gk.Actor.prototype = new ActorMethods();
  // But the magic doesn't stop here!  `Actor`'s constructor steals the
  // `Tweenable` constructor.


  /**
   * @param {number} when
   * @param {Object} position
   * @param {string|Object} easing
   * @returns {Kapi.Actor}
   */
  gk.Actor.prototype.keyframe = function keyframe (when, position, opt_easing) {
    var originalEasingString;
    
    // This code will be used.  Other work needs to be done beforehand, though.
    if (!opt_easing) {
      opt_easing = DEFAULT_EASING;
    }
    
    if (typeof opt_easing === 'string') {
      originalEasingString = opt_easing;
      opt_easing = {};
      _.each(position, function (positionVal, positionName) {
        opt_easing[positionName] = originalEasingString;
      });
    }

    // If `opt_easing` was passed as an Object, this will fill in any missing
    // opt_easing properties with the default equation.
    _.each(position, function (positionVal, positionName) {
      opt_easing[positionName] = opt_easing[positionName] || DEFAULT_EASING;
    });

    this._keyframes[when] = {
      'position': position
      ,'easing': opt_easing
    };
    this._keyframeList.push(when);
    gk.util.sortNumerically(this._keyframeList);
    this.kapi.updateInternalState();
    
    return this;
  };


  /**
   * @param {number} when
   * @param {number} opt_source
   * @returns {Kapi.Actor}
   */
  gk.Actor.prototype.liveCopy = function (when, opt_source) {
    var sourceKeyframeData;

    if (typeof opt_source === 'undefined') {
      opt_source = _.last(this._keyframeList);
    }

    if (this._keyframes.hasOwnProperty(opt_source)) {
      sourceKeyframeData = this._keyframes[opt_source];
      this.keyframe(when, sourceKeyframeData.position,
          sourceKeyframeData.easing);
    }

    return this;
  };


  /**
   * @param {number} when
   * @param {Object} stateModification
   * @param {Object} opt_easingModification
   */
  gk.Actor.prototype.modifyKeyframe = function (when, stateModification,
      opt_easingModification) {

    var targetKeyframe;

    targetKeyframe = this._keyframes[when];
    augmentObject(targetKeyframe.position, stateModification);

    if (opt_easingModification) {
      augmentObject(targetKeyframe.easing, opt_easingModification);
    }

    return this;
  };


  /**
   * @param {when} when
   * @returns {Kapi.Actor}
   */
  gk.Actor.prototype.removeKeyframe = function (when) {
    if (this._keyframeList.indexOf(when) !== -1) {
      this._keyframeList = _.without(this._keyframeList, when);
      delete this._keyframes[when];
      this.kapi.updateInternalState();
    }

    return this;
  };


  /**
   * @returns {Kapi.Actor}
   */
  gk.Actor.prototype.removeAllKeyframes = function () {
    var keyframeListCopy;

    keyframeListCopy = this._keyframeList.slice(0);

    _.each(keyframeListCopy, function (when) {
      this.removeKeyframe(when);
    }, this);

    return this;
  };
  
  
  /**
   * @param {number} layer
   * @returns {Kapi.Actor|undefined}
   */
  gk.Actor.prototype.moveToLayer = function (layer) {
    return this.kapi.moveActorToLayer(this, layer);
  };


  /**
   * @param {boolean} alsoPersist
   * @returns {Kapi.Actor}
   */
  gk.Actor.prototype.show = function (alsoPersist) {
    this._isShowing = true;
    this._isPersisting = !!alsoPersist;
    
    return this;
  };
  
  
  /**
   * @param {boolean} alsoUnpersist
   * @returns {Kapi.Actor}
   */
  gk.Actor.prototype.hide = function (alsoUnpersist) {
    this._isShowing = false;

    if (alsoUnpersist === true) {
      this._isPersisting = false;
    }
    
    return this;
  };
  
  
  /**
   * @returns {boolean}
   */
  gk.Actor.prototype.isShowing = function () {
    return this._isShowing || this._isPersisting;
  };


  /**
   * @param {number} millisecond
   * @returns {Kapi.Actor}
   */
  gk.Actor.prototype.calculatePosition = function (millisecond) {
    //TODO: This function is too long!  It needs to be broken out somehow.
    var keyframeList
        ,keyframes
        ,delta
        ,interpolatedPosition
        ,startMs
        ,endMs
        ,timeRangeIndexStart
        ,rangeFloor
        ,rangeCeil
        ,composedFrom
        ,composedTo;
        
    keyframeList = this._keyframeList;
    startMs = _.first(keyframeList);
    endMs = _.last(keyframeList);
    this.hide();

    if (startMs <= millisecond && millisecond <= endMs) {
      this.show();
      keyframes = this._keyframes;
      timeRangeIndexStart = getKeyframeForMillisecond(this,
          millisecond);
      rangeFloor = keyframeList[timeRangeIndexStart];
      rangeCeil = keyframeList[timeRangeIndexStart + 1];
      delta = rangeCeil - rangeFloor;
      interpolatedPosition = (millisecond - rangeFloor) / delta;
      composedFrom = composeKeyframe(this,
          timeRangeIndexStart);
      composedTo = _.extend({},
          keyframes[keyframeList[timeRangeIndexStart + 1]]);
      _.defaults(composedTo.position, composedFrom.position);
      _.defaults(composedTo.easing, composedFrom.easing);

      this
        .set(composedFrom.position)
        .interpolate(composedTo.position,
            interpolatedPosition,
            composedTo.easing);
    }

    return this;
  };


  /**
   * @returns {Array}
   */
  gk.Actor.prototype.keyframeList = function () {
    return this._keyframeList;
  };


  /**
   * @param {Object} opt_newData
   * @returns {Object}
   */
  gk.Actor.prototype.data = function (opt_newData) {
    if (opt_newData) {
      this._data = opt_newData;
    }

    return this._data;
  };


  /**
   * Start Shifty interoperability methods...
   ******/

  _.each(['tween', 'to'], function (shiftyMethodName) {
    gk.Actor.prototype[shiftyMethodName] = function () {
      this.show(true);
      Tweenable.prototype[shiftyMethodName].apply(this, arguments);
    }
  }, this);

  /******
   * ...End Shifty interoperability methods.
   */

} (this));
;(function rekapiDOM (global) {
  var gk
      ,getStyle
      ,transforms;

  gk = global.Kapi;
  transforms = [
    'transform'
    ,'webkitTransform'
    ,'MozTransform'
    ,'oTransform'
    ,'msTransform'];

  if (!global.getComputedStyle) {
    return;
  }

  function getStyle (forElement, styleName) {
    return global.getComputedStyle(forElement).getPropertyValue(styleName);
  }

  function setStyle (forElement, styleName, styleValue) {
    forElement.style[styleName] = styleValue;
  }

  function hideElement (element) {
    setStyle(element, 'display', 'none');
  }

  function showElement (element) {
    setStyle(element, 'display', 'block');
  }

  /**
   * @param {HTMLElement} element
   * @returns {Kapi.DOMActor}
   */
  gk.DOMActor = function (element) {
    var actor;

    actor = new gk.Actor ({
      'setup': function () {
        if (getStyle(this.kapi.canvas_getContext(), 'position') === 'static') {
          setStyle(this.kapi.canvas_getContext(), 'position', 'relative');
        }

        if (getStyle(element, 'position') === 'static') {
          setStyle(element, 'position', 'absolute');
        }
      }

      ,'draw': function (canvas_context, state) {
        var isShowing;

        isShowing = false;

        _.each(state, function (styleValue, styleName) {
          isShowing = true;

          if (styleName === 'rotate') {
            _.each(transforms, function (transform) {
              setStyle(element, transform, 'rotate(' + styleValue + 'deg)')
            });
          } else {
            setStyle(element, styleName, styleValue);
          }
        });

        isShowing ? showElement(element) : hideElement(element);
      }
    });

    actor.show = function (alsoPersist) {
      gk.Actor.prototype.show.call(this, alsoPersist);
      showElement(element);
    };

    actor.hide = function (alsoUnpersist) {
      gk.Actor.prototype.hide.call(this, alsoUnpersist);
      hideElement(element);
    };

    return actor;
  };

}(this));
;(function rekapiCanvas (global) {

  var gk,
      contextTypes = {
        'CANVAS': 'canvas'
        ,'HTML_ELEMENT': 'HTMLElement'
        ,'OTHER': 'other'
      };

  gk = global.Kapi;
  
  
  /**
   * Gets (and optionally sets) a style on a canvas.
   * @param {HTMLCanvas|HTMLElement} canvas
   * @param {string} dimension The dimension (either "height" or "width") to
   *    get or set.
   * @param {number} opt_new_size The new value to set for `dimension`.
   * @returns {number}
   */
  function canvas_dimension (canvas, contextType, dimension, opt_new_size) {
    if (typeof opt_new_size !== 'undefined') {
      canvas[dimension] = opt_new_size;

      if (!canvas.style) {
        canvas.style = {};
      }

      canvas.style[dimension] = opt_new_size + 'px';
    }

    if (contextType === contextType.HTML_ELEMENT) {
      return canvas.style[dimension]
    }

    return canvas[dimension];
  }


  /**
   * @param {HTMLCanvas|HTMLElement|Object} canvas
   * @returns {CanvasRenderingContext2D|HTMLElement|Object}
   */
  gk.prototype.canvas_setContext = function (canvas) {
    var nodeName;

    this._canvas = canvas;
    nodeName = canvas.nodeName;

    if (nodeName === undefined) {
      // There isn't really canvas, just fake the context
      this._context = {};
      this._contextType = contextTypes.OTHER;
    } else if (nodeName === 'CANVAS') {
      this._context = canvas.getContext('2d');
      this._contextType = contextTypes.CANVAS;
    } else {
      // The canvas is a non-<canvas> DOM element, make the element the canvas
      this._context = canvas;
      this._contextType = contextTypes.HTML_ELEMENT;
    }

    return this.canvas_getContext();
  };
  
  
  /**
   * @returns {CanvasRenderingContext2D|HTMLElement|Object}
   */
  gk.prototype.canvas_getContext = function () {
    return this._context;
  };
  

  /**
   * @param {number} opt_height
   * @returns {number}
   */
  gk.prototype.canvas_height = function (opt_height) {
    return canvas_dimension(this.canvas, this._contextType, 'height', 
        opt_height);
  };
  
  
  /**
   * @param {number} opt_width
   * @returns {number}
   */
  gk.prototype.canvas_width = function (opt_width) {
    return canvas_dimension(this.canvas, this._contextType, 'width', 
        opt_width);
  };
  
  
  /**
   * @param {string} styleName
   * @param {number|string} opt_styleValue
   * @return {number|string}
   */
  gk.prototype.canvas_style = function (styleName, opt_styleValue) {
    if (typeof opt_styleValue !== 'undefined'
        && this.canvas.style) {
       this.canvas.style[styleName] = opt_styleValue;
    }
    
    return this.canvas.style[styleName];
  }
  
  
  /**
   * @returns {Kapi}
   */
  gk.prototype.canvas_clear = function () {
    // Clearing only mades sense if Kapi is bound to a canvas
    if (this._contextType === contextTypes.CANVAS) {
      this.canvas_getContext().clearRect(0, 0, this.canvas_width(),
          this.canvas_height());
    }

    return this;
  };

} (this));
