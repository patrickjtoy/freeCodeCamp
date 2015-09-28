(function(log) {

    "use strict";

    function sym(args) {
        return Array.prototype.slice.call(arguments)
            .reduce((prev, current) => {
                return prev.concat(current);
            })
            .sort()
            .filter((value, index, array) => {
                if (value !== array[index + 1]) {
                    return true;
                }
            });
    }

    log(sym([1, 2, 3], [5, 2, 1, 4]));

})(console.log);
