//TODO: Description
function pluralize(num, decls) {
    if (typeof num !== 'number') {
        console.warn('First argument must be a number.');
        return;
    }
    if (num % 1 !== 0) {
        console.warn('First argument must be an integer.');
        return;
    }
    if (!Array.isArray(decls)) {
        console.warn('Second argument must be array.');
        return;
    }

    const langIsRu = /[а-я]/i.test(decls.join(''));
    const lastOfNum = parseInt(String(num).substr(-1));

    if (langIsRu && ((lastOfNum === 0 || lastOfNum >= 5 || (num >= 11 && num <= 14)) && decls.length === 2 )) {
        return `${num} ${decls[0]}`;
    }

    if (langIsRu && ((lastOfNum === 0 || lastOfNum >= 5 || (num >= 11 && num <= 14)) && decls.length === 3 )) {
        return `${num} ${decls[2]}`;
    }

    if (langIsRu && lastOfNum === 1) {
        return `${num} ${decls[0]}`;
    }

    if (langIsRu && (lastOfNum > 1 && lastOfNum <= 4)) {
        return `${num} ${decls[1]}`;
    }

    if (!langIsRu && num === 1) {
        return `${num} ${decls[0]}`;
    }

    if (!langIsRu) {
        return `${num} ${decls[1]}`;
    }
}
