function show(array) {
    for (const e of array) {
        const dotsCount = Math.max(0, 12 - e.name.length);
        const dots = '.'.repeat(dotsCount);
        console.log(e.name + dots + e.founded);
    }
}

module.exports = show;