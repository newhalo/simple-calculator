
const toValue = (mix) => {
    let k, y, str = '';
    if (typeof mix === 'string' || typeof mix === 'number') {
        str += mix;
    } else if (typeof mix === 'object') {
        if (Array.isArray(mix)) {
            for (k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    y = toValue(mix[k])
                    if (y) {
                        str && (str += ' ');
                        str += y;
                    }
                }
            }
        } else {
            for (k in mix) {
                if (mix[k]) {
                    str && (str += ' ');
                    str += k;
                }
            }
        }
    }

    return str;
}

const classNames = (...params) => {
    let i = 0, tmp, x, str = '';
    while (i < params.length) {
        tmp = params[i++]
        if (tmp) {
            x = toValue(tmp)
            if (x) {
                str && (str += ' ');
                str += x
            }
        }
    }
    return str;
}

export default classNames