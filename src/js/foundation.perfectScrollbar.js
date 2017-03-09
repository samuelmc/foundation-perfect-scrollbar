/**
 * Foundation perfect scrollbar integration by Samuel Moncarey.
 * Licensed under MIT Open Source
 */

!function ($) {

    /**
     * PerfectScrollbar module.
     * @module foundation.perfectScrollbar
     */

    class PerfectScrollbar {
        /**
         * Creates a new instance of a PerfectScrollbar.
         * @class
         * @fires PerfectScrollbar#init
         * @param {jQuery} element - jQuery object to attach a perfect-scrollbar to.
         * @param {Object} options - object to extend the default configuration.
         */
        constructor(element, options) {
            this.$element = element;
            this.options = $.extend({}, PerfectScrollbar.defaults, this.$element.data(), options);

            this._init();

            Foundation.registerPlugin(this, 'PerfectScrollbar');
        }

        /**
         * Initializes the perfect-scrollbar by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
         * @private
         */
        _init() {
            this.$element.perfectScrollbar(this.options);
            this._events();
        }

        /**
         * adds event listeners for the perfect-scrollbar and its anchor
         * @private
         */
        _events() {
            $(window).on('load', this.load.bind(this));
        }

        load() {
            if (this.options.initialYPosition !== 'top') {
                if (!isNaN(this.options.initialYPosition)) {
                    this.$element.scrollTop(this.options.initialYPosition);
                }
                if (this.options.initialYPosition == 'bottom') {
                    this.$element.scrollTop(this.$element[0].scrollHeight);
                }
            }

            if (this.options.initialXPosition !== 'left') {
                if (!isNaN(this.options.initialXPosition)) {
                    this.$element.scrollLeft(this.options.initialXPosition);
                }
                if (this.options.initialXPosition == 'right') {
                    this.$element.scrollLeft(this.$element[0].scrollWidth);
                }
            }
        }

        scrollToElement($element) {
            const _this = this;
            if ($.contains(this.$element[0], $element[0])) {
                let containerDims = Foundation.Box.GetDimensions(this.$element);
                let targetDims = Foundation.Box.GetDimensions($element);

                if (targetDims.offset.top < containerDims.offset.top) {
                    let scrollTop = targetDims.offset.top - containerDims.offset.top + this.$element.scrollTop();
                    this._scrollAnimation(scrollTop);
                }

                if ((targetDims.offset.top + targetDims.height) > (containerDims.offset.top + containerDims.height)) {
                    let scrollTop = targetDims.offset.top - (containerDims.height - targetDims.height) - containerDims.offset.top + this.$element.scrollTop();
                    this._scrollAnimation(scrollTop);
                }

            }
            else console.warn('Element not in container.')
        }

        _scrollAnimation(scrollTop) {
            const _this = this;
            this.$element.finish().animate({
                scrollTop: scrollTop
            }, {
                duration: _this.options.animateScrollTo ? _this.options.animationSpeed : 0
            });
        }

        /**
         * Destroys an instance of perfect-scrollbar, removes template element from the view.
         * @function
         */
        destroy() {
            this.$element.perfectScrollbar('destroy');
            Foundation.unregisterPlugin(this);
        }

        static get defaults() {
            return {
                handlers: ['click-rail', 'drag-scrollbar', 'keyboard', 'wheel', 'touch'],
                wheelSpeed: 1,
                wheelPropagation: false,
                swipePropagation: true,
                minScrollbarLength: null,
                useBothWheelAxes: false,
                suppressScrollX: false,
                suppressScrollY: false,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                initialYPosition: 'top',
                initialXPosition: 'left',
                stopPropagationOnClick: true,
                theme: 'foundation',
                animateScrollTo: false,
                animationSpeed: 200
            };
        }
    }

    // Window exports
    Foundation.plugin(PerfectScrollbar, 'PerfectScrollbar');

}(jQuery);
