function all(word, func) {
    for (const c of word) {
        if (!func(c)) return false
    }
    return true
}

function nullOrMatch(real, expected) {
    return expected == "" || expected == real
}

function filterWords(starts, ends, includes, excludes, pos) {
    const filteredWords = []
    for (const word of words) {
        if (
            word.startsWith(starts) &&
            word.endsWith(ends) &&
            all(includes, (c) => word.includes(c)) &&
            all(excludes, (c) => !word.includes(c)) &&
            nullOrMatch(word[0], pos[0]) &&
            nullOrMatch(word[1], pos[1]) &&
            nullOrMatch(word[2], pos[2]) &&
            nullOrMatch(word[3], pos[3]) &&
            nullOrMatch(word[4], pos[4])
        ) {
            filteredWords.push(word);
        }
    }
    return filteredWords
}

function update() {
    starts = document.querySelector("#starts").value
    ends = document.querySelector("#ends").value
    includes = document.querySelector("#includes").value
    excludes = document.querySelector("#excludes").value
    pos = []
    for (let i = 0; i < 5; i++) {
        pos.push(document.querySelector("#pos" + i).value.substr(0, 1))
    }
    document.querySelector("#output").innerHTML = filterWords(starts, ends, includes, excludes, pos).map(s => "<li>" + s + "</li>").join("")
}

update()