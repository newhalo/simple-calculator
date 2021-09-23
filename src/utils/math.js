
const _cf = (function () {
    function _shift(x) {
        var parts = x.toString().split('.');
        return (parts.length < 2) ? 1 : Math.pow(10, parts[1].length);
    }
    return function () {
        return Array.prototype.reduce.call(arguments, function (prev, next) { return prev === undefined || next === undefined ? undefined : Math.max(prev, _shift(next)); }, -Infinity);
    };
})();

export const add = function () {
    const f = _cf.apply(null, arguments); if (f === undefined) return undefined;
    function cb(x, y, i, o) { return x + f * y; }
    return Array.prototype.reduce.call(arguments, cb, 0) / f;
};

export const subtract = function (l, r) { const f = _cf(l, r); return (l * f - r * f) / f; };

export const multiply = function () {
    const f = _cf.apply(null, arguments);
    function cb(x, y, i, o) { return (x * f) * (y * f) / (f * f); }
    return Array.prototype.reduce.call(arguments, cb, 1);
};

export const divide = function (l, r) { const f = _cf(l, r); return (l * f) / (r * f); };

export const mod = function (l, r) { const f = _cf(l, r); return (l * f) % (r * f); }

export const isDecimal = function (num) {
    try {
        return !!(Number(num) % 1)
    } catch (error) {
        return false
    }
}
