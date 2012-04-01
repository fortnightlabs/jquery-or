# jquery.or

Add to the set of matched elements if the current set is empty. Useful for
specifying a fallback or base case to still act upon.

Examples:

    // tr.last, failing that just the last tr then.
    $('tr.last').or('tr:last').toggle();

    // find the closest parent form, but fall back to the target otherwise.
    $(e.target).closest('form').or(e.target);
