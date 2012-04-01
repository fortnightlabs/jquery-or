/*
 * Add to the set of matched elements if the current set is empty. Useful for
 * specifying a fallback or base case to still act upon.
 *
 * Examples:
 *
 * $('tr.last').or('tr:last').toggle();
 * $(e.target).closest('form').or(e.target);
 */
;(function($) {
  $.fn.or = function(el) {
    return (this.length === 0) ? this.add(el) : this;
  };
})(jQuery);
