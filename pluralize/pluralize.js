//TODO: Description
function pluralize(num, decls) {
    if (typeof num !== 'number') {
        console.warn('First argument must be a number.');
        return;
    } else if (num % 1 !== 0) {
        console.warn('First argument must be an integer.');
        return;
    } else if (!Array.isArray(decls)) {
        console.warn('Second argument must be array.');
        return;
    }

    const lastOfNum = parseInt(num.toString().split('').pop());

    if (lastOfNum === 0) {
        if (/[а-я]/i.test(decls.toString().split(''))) {
            if (decls.length === 2) {
                return `${num} ${decls[0]}`;
            } else if (decls.length === 3) {
                return `${num} ${decls[2]}`;
            }
        } else {
            return `${num} ${decls[1]}`;
        }
    } else if (lastOfNum === 1) {
        return `${num} ${decls[0]}`;
    } else if (lastOfNum > 1 && lastOfNum <= 4) {
        return `${num} ${decls[1]}`;
    } else if (lastOfNum >= 5) {
        if (decls.length === 2) {
            return `${num} ${decls[1]}`;
        } else if (decls.length === 3) {
            return `${num} ${decls[2]}`;
        }
    }
}
