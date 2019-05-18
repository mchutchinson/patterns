/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 * jquery.imagesloaded.min.js
 */
jQuery.noConflict();
(function( $ ) {
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
})(jQuery);

/*!
 * remodal.js
 */

jQuery.noConflict();
(function( $ ) {

  //console.log($().jquery);

  !(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(['jquery'], function($) {
        return factory(root, $);
      });
    } else if (typeof exports === 'object') {
      factory(root, require('jquery'));
    } else {
      factory(root, root.jQuery || root.Zepto);
    }
  })(this, function(global, jQuery) {

    'use strict';

    /**
     * Name of the plugin
     * @private
     * @const
     * @type {String}
     */
    var PLUGIN_NAME = 'remodal';

    /**
     * Namespace for CSS and events
     * @private
     * @const
     * @type {String}
     */
    var NAMESPACE = global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.NAMESPACE || PLUGIN_NAME;

    /**
     * Animationstart event with vendor prefixes
     * @private
     * @const
     * @type {String}
     */
    var ANIMATIONSTART_EVENTS = $.map(
      ['animationstart', 'webkitAnimationStart', 'MSAnimationStart', 'oAnimationStart'],

      function(eventName) {
        return eventName + '.' + NAMESPACE;
      }

    ).join(' ');

    /**
     * Animationend event with vendor prefixes
     * @private
     * @const
     * @type {String}
     */
    var ANIMATIONEND_EVENTS = $.map(
      ['animationend', 'webkitAnimationEnd', 'MSAnimationEnd', 'oAnimationEnd'],

      function(eventName) {
        return eventName + '.' + NAMESPACE;
      }

    ).join(' ');

    /**
     * Default settings
     * @private
     * @const
     * @type {Object}
     */
    var DEFAULTS = $.extend({
      hashTracking: true,
      closeOnConfirm: true,
      closeOnCancel: true,
      closeOnEscape: true,
      closeOnOutsideClick: true,
      modifier: ''
    }, global.REMODAL_GLOBALS && global.REMODAL_GLOBALS.DEFAULTS);

    /**
     * States of the Remodal
     * @private
     * @const
     * @enum {String}
     */
    var STATES = {
      CLOSING: 'closing',
      CLOSED: 'closed',
      OPENING: 'opening',
      OPENED: 'opened'
    };

    /**
     * Reasons of the state change.
     * @private
     * @const
     * @enum {String}
     */
    var STATE_CHANGE_REASONS = {
      CONFIRMATION: 'confirmation',
      CANCELLATION: 'cancellation'
    };

    /**
     * Is animation supported?
     * @private
     * @const
     * @type {Boolean}
     */
    var IS_ANIMATION = (function() {
      var style = document.createElement('div').style;

      return style.animationName !== undefined ||
        style.WebkitAnimationName !== undefined ||
        style.MozAnimationName !== undefined ||
        style.msAnimationName !== undefined ||
        style.OAnimationName !== undefined;
    })();

    /**
     * Current modal
     * @private
     * @type {Remodal}
     */
    var current;

    /**
     * Scrollbar position
     * @private
     * @type {Number}
     */
    var scrollTop;

    /**
     * Returns an animation duration
     * @private
     * @param {jQuery} $elem
     * @returns {Number}
     */
    function getAnimationDuration($elem) {
      if (
        IS_ANIMATION &&
        $elem.css('animation-name') === 'none' &&
        $elem.css('-webkit-animation-name') === 'none' &&
        $elem.css('-moz-animation-name') === 'none' &&
        $elem.css('-o-animation-name') === 'none' &&
        $elem.css('-ms-animation-name') === 'none'
      ) {
        return 0;
      }

      var duration = $elem.css('animation-duration') ||
        $elem.css('-webkit-animation-duration') ||
        $elem.css('-moz-animation-duration') ||
        $elem.css('-o-animation-duration') ||
        $elem.css('-ms-animation-duration') ||
        '0s';

      var delay = $elem.css('animation-delay') ||
        $elem.css('-webkit-animation-delay') ||
        $elem.css('-moz-animation-delay') ||
        $elem.css('-o-animation-delay') ||
        $elem.css('-ms-animation-delay') ||
        '0s';

      var iterationCount = $elem.css('animation-iteration-count') ||
        $elem.css('-webkit-animation-iteration-count') ||
        $elem.css('-moz-animation-iteration-count') ||
        $elem.css('-o-animation-iteration-count') ||
        $elem.css('-ms-animation-iteration-count') ||
        '1';

      var max;
      var len;
      var num;
      var i;

      duration = duration.split(', ');
      delay = delay.split(', ');
      iterationCount = iterationCount.split(', ');

      // The 'duration' size is the same as the 'delay' size
      for (i = 0, len = duration.length, max = Number.NEGATIVE_INFINITY; i < len; i++) {
        num = parseFloat(duration[i]) * parseInt(iterationCount[i], 10) + parseFloat(delay[i]);

        if (num > max) {
          max = num;
        }
      }

      return num;
    }

    /**
     * Returns a scrollbar width
     * @private
     * @returns {Number}
     */
    function getScrollbarWidth() {
      if ($(document.body).height() <= $(window).height()) {
        return 0;
      }

      var outer = document.createElement('div');
      var inner = document.createElement('div');
      var widthNoScroll;
      var widthWithScroll;

      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      document.body.appendChild(outer);

      widthNoScroll = outer.offsetWidth;

      // Force scrollbars
      outer.style.overflow = 'scroll';

      // Add inner div
      inner.style.width = '100%';
      outer.appendChild(inner);

      widthWithScroll = inner.offsetWidth;

      // Remove divs
      outer.parentNode.removeChild(outer);

      return widthNoScroll - widthWithScroll;
    }

    /**
     * Locks the screen
     * @private
     */
    function lockScreen() {
      var $html = $('html');
      var lockedClass = namespacify('is-locked');
      var paddingRight;
      var $body;

      if (!$html.hasClass(lockedClass)) {
        $body = $(document.body);

        // Zepto does not support '-=', '+=' in the `css` method
        paddingRight = parseInt($body.css('padding-right'), 10) + getScrollbarWidth();

        $body.css('padding-right', paddingRight + 'px');
        $html.addClass(lockedClass);
        $('#myModal').contents().find('html').attr("lang", "en-US");
        //$html.attr("lang", "en-US");
      }
    }

    /**
     * Unlocks the screen
     * @private
     */
    function unlockScreen() {
      var $html = $('html');
      var lockedClass = namespacify('is-locked');
      var paddingRight;
      var $body;

      if ($html.hasClass(lockedClass)) {
        $body = $(document.body);

        // Zepto does not support '-=', '+=' in the `css` method
        paddingRight = parseInt($body.css('padding-right'), 10) - getScrollbarWidth();

        $body.css('padding-right', paddingRight + 'px');
        $html.removeClass(lockedClass);
        //$html.attr("lang", "en-US");
        $('#myModal').contents().find('html').attr("lang", "en-US");
      }
    }

    /**
     * Sets a state for an instance
     * @private
     * @param {Remodal} instance
     * @param {STATES} state
     * @param {Boolean} isSilent If true, Remodal does not trigger events
     * @param {String} Reason of a state change.
     */
    function setState(instance, state, isSilent, reason) {

      var newState = namespacify('is', state);
      var allStates = [namespacify('is', STATES.CLOSING),
                       namespacify('is', STATES.OPENING),
                       namespacify('is', STATES.CLOSED),
                       namespacify('is', STATES.OPENED)].join(' ');

      instance.$bg
        .removeClass(allStates)
        .addClass(newState);

      instance.$overlay
        .removeClass(allStates)
        .addClass(newState);

      instance.$wrapper
        .removeClass(allStates)
        .addClass(newState);

      instance.$modal
        .removeClass(allStates)
        .addClass(newState);

      instance.state = state;
      !isSilent && instance.$modal.trigger({
        type: state,
        reason: reason
      }, [{ reason: reason }]);
    }

    /**
     * Synchronizes with the animation
     * @param {Function} doBeforeAnimation
     * @param {Function} doAfterAnimation
     * @param {Remodal} instance
     */
    function syncWithAnimation(doBeforeAnimation, doAfterAnimation, instance) {
      var runningAnimationsCount = 0;

      var handleAnimationStart = function(e) {
        if (e.target !== this) {
          return;
        }

        runningAnimationsCount++;
      };

      var handleAnimationEnd = function(e) {
        if (e.target !== this) {
          return;
        }

        if (--runningAnimationsCount === 0) {

          // Remove event listeners
          $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
            instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
          });

          doAfterAnimation();
        }
      };

      $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
        instance[elemName]
          .on(ANIMATIONSTART_EVENTS, handleAnimationStart)
          .on(ANIMATIONEND_EVENTS, handleAnimationEnd);
      });

      doBeforeAnimation();

      // If the animation is not supported by a browser or its duration is 0
      if (
        getAnimationDuration(instance.$bg) === 0 &&
        getAnimationDuration(instance.$overlay) === 0 &&
        getAnimationDuration(instance.$wrapper) === 0 &&
        getAnimationDuration(instance.$modal) === 0
      ) {

        // Remove event listeners
        $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
          instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
        });

        doAfterAnimation();
      }
    }

    /**
     * Closes immediately
     * @private
     * @param {Remodal} instance
     */
    function halt(instance) {
      if (instance.state === STATES.CLOSED) {
        return;
      }

      $.each(['$bg', '$overlay', '$wrapper', '$modal'], function(index, elemName) {
        instance[elemName].off(ANIMATIONSTART_EVENTS + ' ' + ANIMATIONEND_EVENTS);
      });

      instance.$bg.removeClass(instance.settings.modifier);
      instance.$overlay.removeClass(instance.settings.modifier).hide();
      instance.$wrapper.hide();
      unlockScreen();
      setState(instance, STATES.CLOSED, true);
    }

    /**
     * Parses a string with options
     * @private
     * @param str
     * @returns {Object}
     */
    function parseOptions(str) {
      var obj = {};
      var arr;
      var len;
      var val;
      var i;

      // Remove spaces before and after delimiters
      str = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',');

      // Parse a string
      arr = str.split(',');
      for (i = 0, len = arr.length; i < len; i++) {
        arr[i] = arr[i].split(':');
        val = arr[i][1];

        // Convert a string value if it is like a boolean
        if (typeof val === 'string' || val instanceof String) {
          val = val === 'true' || (val === 'false' ? false : val);
        }

        // Convert a string value if it is like a number
        if (typeof val === 'string' || val instanceof String) {
          val = !isNaN(val) ? +val : val;
        }

        obj[arr[i][0]] = val;
      }

      return obj;
    }

    /**
     * Generates a string separated by dashes and prefixed with NAMESPACE
     * @private
     * @param {...String}
     * @returns {String}
     */
    function namespacify() {
      var result = NAMESPACE;

      for (var i = 0; i < arguments.length; ++i) {
        result += '-' + arguments[i];
      }

      return result;
    }

    /**
     * Handles the hashchange event
     * @private
     * @listens hashchange
     */
    function handleHashChangeEvent() {
      var id = location.hash.replace('#', '');
      var instance;
      var $elem;

      if (!id) {

        // Check if we have currently opened modal and animation was completed
        if (current && current.state === STATES.OPENED && current.settings.hashTracking) {
          current.close();
        }
      } else {

        // Catch syntax error if your hash is bad
        try {
          $elem = $(
            '[data-' + PLUGIN_NAME + '-id=' +
            id.replace(new RegExp('/', 'g'), '\\/') + ']'
          );
        } catch (err) {}

        if ($elem && $elem.length) {
          instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];

          if (instance && instance.settings.hashTracking) {
            instance.open();
          }
        }

      }
    }

    /**
     * Remodal constructor
     * @constructor
     * @param {jQuery} $modal
     * @param {Object} options
     */
    function Remodal($modal, options) {
      var $body = $(document.body);
      var remodal = this;

      remodal.settings = $.extend({}, DEFAULTS, options);
      remodal.index = $[PLUGIN_NAME].lookup.push(remodal) - 1;
      remodal.state = STATES.CLOSED;

      remodal.$overlay = $('.' + namespacify('overlay'));

      if (!remodal.$overlay.length) {
        remodal.$overlay = $('<div>').addClass(namespacify('overlay') + ' ' + namespacify('is', STATES.CLOSED)).hide();
        $body.append(remodal.$overlay);
      }

      remodal.$bg = $('.' + namespacify('bg')).addClass(namespacify('is', STATES.CLOSED));
      remodal.$modal = $modal;
      remodal.$modal.addClass(
        NAMESPACE + ' ' +
        namespacify('is-initialized') + ' ' +
        remodal.settings.modifier + ' ' +
        namespacify('is', STATES.CLOSED));

      remodal.$wrapper = $('<div>')
        .addClass(
          namespacify('wrapper') + ' ' +
          remodal.settings.modifier + ' ' +
          namespacify('is', STATES.CLOSED))
        .hide()
        .append(remodal.$modal);
      $body.append(remodal.$wrapper);

      // Add the event listener for the close button
      remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="close"]', function(e) {
        e.preventDefault();

        remodal.close();
      });

      // Add the event listener for the cancel button
      remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="cancel"]', function(e) {
        e.preventDefault();

        remodal.$modal.trigger(STATE_CHANGE_REASONS.CANCELLATION);

        if (remodal.settings.closeOnCancel) {
          remodal.close(STATE_CHANGE_REASONS.CANCELLATION);
        }
      });

      // Add the event listener for the confirm button
      remodal.$wrapper.on('click.' + NAMESPACE, '[data-' + PLUGIN_NAME + '-action="confirm"]', function(e) {
        e.preventDefault();

        remodal.$modal.trigger(STATE_CHANGE_REASONS.CONFIRMATION);

        if (remodal.settings.closeOnConfirm) {
          remodal.close(STATE_CHANGE_REASONS.CONFIRMATION);
        }
      });

      // Add the event listener for the overlay
      remodal.$wrapper.on('click.' + NAMESPACE, function(e) {
        var $target = $(e.target);

        if (!$target.hasClass(namespacify('wrapper'))) {
          return;
        }

        if (remodal.settings.closeOnOutsideClick) {
          remodal.close();
        }
      });
    }

    /**
     * Opens a modal window
     * @public
     */
    Remodal.prototype.open = function() {
      var remodal = this;
      var id;

      // Check if the animation was completed
      if (remodal.state === STATES.OPENING || remodal.state === STATES.CLOSING) {
        return;
      }

      id = remodal.$modal.attr('data-' + PLUGIN_NAME + '-id');

      if (id && remodal.settings.hashTracking) {
        scrollTop = $(window).scrollTop();
        location.hash = id;
      }

      if (current && current !== remodal) {
        halt(current);
      }

      current = remodal;
      lockScreen();
      remodal.$bg.addClass(remodal.settings.modifier);
      remodal.$overlay.addClass(remodal.settings.modifier).show();
      remodal.$wrapper.show().scrollTop(0);

      syncWithAnimation(
        function() {
          setState(remodal, STATES.OPENING);
        },

        function() {
          setState(remodal, STATES.OPENED);
        },

        remodal);
    };

    /**
     * Closes a modal window
     * @public
     * @param {String} reason
     */
    Remodal.prototype.close = function(reason) {
      var remodal = this;

      // Check if the animation was completed
      if (remodal.state === STATES.OPENING || remodal.state === STATES.CLOSING) {
        return;
      }

      if (
        remodal.settings.hashTracking &&
        remodal.$modal.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
      ) {
        location.hash = '';
        $(window).scrollTop(scrollTop);
      }

      syncWithAnimation(
        function() {
          setState(remodal, STATES.CLOSING, false, reason);
        },

        function() {
          remodal.$bg.removeClass(remodal.settings.modifier);
          remodal.$overlay.removeClass(remodal.settings.modifier).hide();
          remodal.$wrapper.hide();
          unlockScreen();

          setState(remodal, STATES.CLOSED, false, reason);
        },

        remodal);
    };

    /**
     * Returns a current state of a modal
     * @public
     * @returns {STATES}
     */
    Remodal.prototype.getState = function() {
      return this.state;
    };

    /**
     * Destroys a modal
     * @public
     */
    Remodal.prototype.destroy = function() {
      var lookup = $[PLUGIN_NAME].lookup;
      var instanceCount;

      halt(this);
      this.$wrapper.remove();

      delete lookup[this.index];
      instanceCount = $.grep(lookup, function(instance) {
        return !!instance;
      }).length;

      if (instanceCount === 0) {
        this.$overlay.remove();
        this.$bg.removeClass(
          namespacify('is', STATES.CLOSING) + ' ' +
          namespacify('is', STATES.OPENING) + ' ' +
          namespacify('is', STATES.CLOSED) + ' ' +
          namespacify('is', STATES.OPENED));
      }
    };

    /**
     * Special plugin object for instances
     * @public
     * @type {Object}
     */
    $[PLUGIN_NAME] = {
      lookup: []
    };

    /**
     * Plugin constructor
     * @constructor
     * @param {Object} options
     * @returns {JQuery}
     */
    $.fn[PLUGIN_NAME] = function(opts) {
      var instance;
      var $elem;

      this.each(function(index, elem) {
        $elem = $(elem);

        if ($elem.data(PLUGIN_NAME) == null) {
          instance = new Remodal($elem, opts);
          $elem.data(PLUGIN_NAME, instance.index);

          if (
            instance.settings.hashTracking &&
            $elem.attr('data-' + PLUGIN_NAME + '-id') === location.hash.substr(1)
          ) {
            instance.open();
          }
        } else {
          instance = $[PLUGIN_NAME].lookup[$elem.data(PLUGIN_NAME)];
        }
      });

      return instance;
    };

    $(document).ready(function() {

      // data-remodal-target opens a modal window with the special Id
      $(document).on('click', '[data-' + PLUGIN_NAME + '-target]', function(e) {
        e.preventDefault();

        var elem = e.currentTarget;
        var id = elem.getAttribute('data-' + PLUGIN_NAME + '-target');
        var $target = $('[data-' + PLUGIN_NAME + '-id=' + id + ']');

        $[PLUGIN_NAME].lookup[$target.data(PLUGIN_NAME)].open();
      });

      // Auto initialization of modal windows
      // They should have the 'remodal' class attribute
      // Also you can write the `data-remodal-options` attribute to pass params into the modal
      $(document).find('.' + NAMESPACE).each(function(i, container) {
        var $container = $(container);
        var options = $container.data(PLUGIN_NAME + '-options');

        if (!options) {
          options = {};
        } else if (typeof options === 'string' || options instanceof String) {
          options = parseOptions(options);
        }

        $container[PLUGIN_NAME](options);
      });

      // Handles the keydown event
      $(document).on('keydown.' + NAMESPACE, function(e) {
        if (current && current.settings.closeOnEscape && current.state === STATES.OPENED && e.keyCode === 27) {
          current.close();
        }
      });

      // Handles the hashchange event
      $(window).on('hashchange.' + NAMESPACE, handleHashChangeEvent);
    });
  });

})(jQuery);

/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
* jquery.fitvids.js
*
*/

(function( $ ){

  var $ = $.noConflict();

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(count){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto);

/*!
 * yt-init.js
 */

jQuery.noConflict();
(function( $ ) {

  var _$ = window.$;

  function loadPlayer() {
    $.ajax({
      url: 'https://www.youtube.com/iframe_api',
      dataType: 'script',
      success: yt_init,
      error: function() {console.log('failed to load yt_api')}
    });
  }

  function yt_init() {

    $(document.body).append('<div data-remodal-id="trm-modal-yt" class="trm-modal-yt" aria-hidden="false" id="myModal" role="dialog" tabindex="-1"></div>');
    var inst = $('[data-remodal-id=trm-modal-yt]').remodal({hashTracking: false});

    function onReady(event) {
        var vid = event.target.getVideoData().video_id;
        //console.log('video_' + vid + '_play');
      dcsMultiTrack('DCSext.TriadCampID', convergeID + '_Click_' + 'VideoPlay_' + vid);
    }

    function onPlayerStateChange(event) {
        var vid = event.target.getVideoData().video_id;
        switch(event.data) {
            case YT.PlayerState.ENDED:
                //console.log('video_' + vid + '_end');
                $('.trm-modal-yt').empty();
                inst.close();
              dcsMultiTrack('DCSext.TriadCampID', convergeID + 'VideoEnded_' + vid);
                break;
            case YT.PlayerState.PLAYING:
                break;
            case YT.PlayerState.PAUSED:
                break;
            case YT.PlayerState.BUFFERING:
                break;
            case YT.PlayerState.CUED:
                break;
        }
    }

    //function onYouTubeIframeAPIReady() {
       
        $(document).on('click', '.yt-init', function(event) {

          event.preventDefault();
            var vidId = $(this).attr('data-yt-id');
            $('.trm-modal-yt').append('<div class="trm-fit-vid"><button aria-label="Close" class="remodal-close" data-remodal-action="close" id="first"></button><iframe id="player_'+ vidId +'" src="https://www.youtube.com/embed/' + vidId + '?enablejsapi=1&autoplay=1&autohide=1&rel=0" frameborder="0" width="854" height="480" title="youtube player"></iframe></div><a class="video-heading para-textlink" id="last" href="https://youtu.be/'+ vidId +'"><h1 id="video-dialog-heading"></h1></a>');
            $('.trm-fit-vid').fitVids();
            inst.open();
            var player = new YT.Player('player_'+ vidId, {
                events: {
                    'onReady': onReady,
                    'onStateChange': onPlayerStateChange
                }
            });
            $("#myModal").find('#first').focus();
            $('#myModal').keydown(function(e){
            if($('#last').is(":focus") && (e.which || e.keyCode) == 9){
              e.preventDefault();
              $('#first').focus();
            }
            });
            //$("#video-dialog-heading").append($("#dialog1Title").text());
            var name = $(this).attr('aria-labelledby');
            $("#video-dialog-heading").append($('[id="' + name + '"]').text());
            //$("#video-dialog-heading").append($('[id^="dialog"]').text());

            $(document).on('closed', '.remodal', function (e) {

                $('.trm-modal-yt').empty();
                $(document).off('closed', '.remodal');
                //console.log('remodal close');
            });
        });
    //}
    
  }

  imagesLoaded(".trm-page-wrap", function() { loadPlayer() });

})(jQuery);

/*!
 * responsive-tabs.js goes here
 */





