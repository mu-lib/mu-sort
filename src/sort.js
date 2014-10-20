/** @name sort */
function factory() {

    /**
     * Default ordering natively defined by the runtime
     * @param a
     * @param b
     * @returns {number} 1 if a > b, -1 if a < b and 0 if they are equal
     */
    function trivialOrder(a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
    }

    /**
     * Merge two sorted arrays
     * @param arr Target array
     * @param a1 First source array
     * @param a2 Second source array
     * @param order Function used to determine order
     */
    function merge(arr, a1, a2, order) {
        var i = 0, // a1 iterator
            j = 0; // a2 iterator
        while (i + j < arr.length && i < a1.length && j < a2.length) {
            var c = order(a1[i], a2[j]);
            if (c < 0) arr[i + j] = a1[i++]; // take from a1
            else if (c > 0) arr[i + j] = a2[j++]; // take from a2
            else {
                // take both
                arr[i + j] = a1[i++];
                arr[i + j] = a2[j++];
            }
        }
        // copy remainders
        while (i < a1.length) arr[i + j] = a1[i++];
        while (j < a2.length) arr[i + j] = a2[j++];
    }

    /**
     * Sort an array by the given order function
     * @param arr
     * @param order {Function}
     */
    function sort(arr, order) {
        var len = arr.length;
        if (len <= 1) return; // consider sorted
        var middle = 0 | len / 2, // cut in middle (biased to the left)
            a1 = arr.slice(0, middle),
            a2 = arr.slice(middle);
        sort(a1, order);
        sort(a2, order);
        merge(arr, a1, a2, order);
    }

    /**
     * Sort an array in-place using merge-sort.
     * @param arr {Array} The array to sort
     * @param [order] {Function} Ordering function. Takes two arguments. Should return a positive number if
     * first > second, negative if first < second and zero if first = second.
     */
    return function (arr, order) {
        order = order || trivialOrder;
        if (typeof arr === 'function') {
            order = arr;
            arr = null;
        }
        arr = arr || this;
        if (typeof order !== 'function') throw Error("'order' must be a function");
        if (Object.prototype.toString.call(arr) !== '[object Array]') throw Error("'arr' must be an array");
        sort(arr, order);
    }

}