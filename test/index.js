var should = require('should'),
    sort = require('../');

describe("arguments validation", function () {

    describe("run with non-array", function () {

        it("should throw an error", function () {

            sort.bind(null, 123).should.throwError();
            sort.bind(null, "foo").should.throwError();
            sort.bind(null, {a: 'b'}).should.throwError();

        });

    });

    describe("call with non-array", function () {

        it("should throw an error", function () {

            sort.bind(123).should.throwError();
            sort.bind("foo").should.throwError();
            sort.bind({a: 'b'}).should.throwError();

        });

    });

    describe("run with invalid ordering", function () {

        it("should throw an error", function () {

            sort.bind(null, [1, 2, 3], 123).should.throwError();
            sort.bind(null, [1, 2, 3], "foo").should.throwError();
            sort.bind(null, [1, 2, 3], {a: 'b'}).should.throwError();
            sort.bind([1, 2, 3], 123).should.throwError();
            sort.bind([1, 2, 3], "foo").should.throwError();
            sort.bind([1, 2, 3], {a: 'b'}).should.throwError();

        });

    });

});

describe("without setting 'this'", function () {

    describe("without a custom order", function () {

        describe("sort numbers", function () {

            var arr = [6, 4, 3, 6, 44.444, 2, 4, 66, 3, 2, 222.2, 6.9, 8, -1, -99.01, -99.011, 0, 0, 45, 101010, -209],
                sorted = arr.slice(0).sort(function (a, b) {
                    return a - b;
                }); // use built-in JS sort to compare

            it('should sort the array', function () {

                sort(arr);
                should.deepEqual(arr, sorted);

            });

        });

        describe("sort strings", function () {

            var arr = ["world", "hi", "hello"],
                sorted = arr.slice(0).sort(); // use built-in JS sort to compare

            it('should sort the array', function () {

                sort(arr);
                should.deepEqual(arr, sorted);

            });

        });

    });

    describe("with a custom order", function () {

        describe("sort objects by 'id' field", function () {

            var o1 = {id: 10}, o2 = {id: 1}, o3 = {id: -11}, o4 = {id: 5},
                arr = [o1, o2, o3, o4],
                sorted = [o3, o2, o4, o1];

            it('should sort the array', function () {

                sort(arr, function (a, b) {
                    return a.id - b.id;
                });
                should.deepEqual(arr, sorted);

            });

        });

        describe("sort strings by first letter", function () {

            var arr = ["world", "hi", "hello"],
                sorted = ["hi", "hello", "world"];

            it('should sort the array', function () {

                sort(arr, function (a, b) {
                    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
                });
                should.deepEqual(arr, sorted);

            });

        });

    });

});

describe("with setting 'this'", function () {

    describe("without a custom order", function () {

        describe("sort numbers", function () {

            var arr = [6, 4, 3, 6, 44.444, 2, 4, 66, 3, 2, 222.2, 6.9, 8, -1, -99.01, -99.011, 0, 0, 45, 101010, -209],
                sorted = arr.slice(0).sort(function (a, b) {
                    return a - b;
                }); // use built-in JS sort to compare

            it('should sort the array', function () {

                sort.call(arr);
                should.deepEqual(arr, sorted);

            });

        });

        describe("sort strings", function () {

            var arr = ["world", "hi", "hello"],
                sorted = arr.slice(0).sort(); // use built-in JS sort to compare

            it('should sort the array', function () {

                sort.call(arr);
                should.deepEqual(arr, sorted);

            });

        });

    });

    describe("with a custom order", function () {

        describe("sort objects by 'id' field", function () {

            var o1 = {id: 10}, o2 = {id: 1}, o3 = {id: -11}, o4 = {id: 5},
                arr = [o1, o2, o3, o4],
                sorted = [o3, o2, o4, o1];

            it('should sort the array', function () {

                sort.call(arr, function (a, b) {
                    return a.id - b.id;
                });
                should.deepEqual(arr, sorted);

            });

        });

        describe("sort strings by first letter", function () {

            var arr = ["world", "hi", "hello"],
                sorted = ["hi", "hello", "world"];

            it('should sort the array', function () {

                sort.call(arr, function (a, b) {
                    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
                });
                should.deepEqual(arr, sorted);

            });

        });

    });

});