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

    const langIsRu = /[а-я]/i.test(decls.toString().split(''));
    const lastOfNum = parseInt(num.toString().split('').pop());

    if (langIsRu) {
        if (lastOfNum === 0 || lastOfNum >= 5 || num >= 11 && num <= 14) {
            if (decls.length === 2) {
                return `${num} ${decls[0]}`;
            } else if (decls.length === 3) {
                return `${num} ${decls[2]}`;
            }
        } else if (lastOfNum === 1) {
            return `${num} ${decls[0]}`;
        } else if (lastOfNum > 1 && lastOfNum <= 4) {
            return `${num} ${decls[1]}`;
        }
    } else {
        if (num === 1) {
            return `${num} ${decls[0]}`;
        } else {
            return `${num} ${decls[1]}`;
        }
    }
}
