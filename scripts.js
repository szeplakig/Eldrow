function all(word, func) {
    for (const c of word) {
        if (!func(c)) return false
    }
    return true
}

function nullOrMatch(real, expected) {
    return expected == "" || expected == real
}

function removeChars(word, toRemove) {
    for (const c of toRemove) {
        word = word.replaceAll(c, "")
    }
    return word
}

function filterWords(starts, ends, includes, excludes, pos_is, pos_isnt) {
    excludes = removeChars(excludes, starts)
    excludes = removeChars(excludes, ends)
    excludes = removeChars(excludes, includes)
    excludes = removeChars(excludes, pos_is)
    includes = removeChars(includes, pos_isnt)
    const filteredWords = []
    for (const word of words) {
        if (
            word.startsWith(starts) &&
            word.endsWith(ends) &&
            all(includes, (c) => word.includes(c)) &&
            all(excludes, (c) => !word.includes(c)) &&
            nullOrMatch(word[0], pos_is[0]) &&
            nullOrMatch(word[1], pos_is[1]) &&
            nullOrMatch(word[2], pos_is[2]) &&
            nullOrMatch(word[3], pos_is[3]) &&
            nullOrMatch(word[4], pos_is[4]) &&
            !pos_isnt[0].includes(word[0]) &&
            !pos_isnt[1].includes(word[1]) &&
            !pos_isnt[2].includes(word[2]) &&
            !pos_isnt[3].includes(word[3]) &&
            !pos_isnt[4].includes(word[4])
        ) {
            filteredWords.push(word);
        }
    }
    return filteredWords
}

function update() {
    starts = document.querySelector("#starts").value.toLowerCase()
    ends = document.querySelector("#ends").value.toLowerCase()
    includes = document.querySelector("#includes").value.toLowerCase()
    excludes = document.querySelector("#excludes").value.toLowerCase()
    let pos_is = []
    for (let i = 0; i < 5; i++) {
        pos_is.push(document.querySelector("#pos_is" + i).value.substr(0, 1).toLowerCase())
    }
    let pos_isnt = []
    for (let i = 0; i < 5; i++) {
        pos_isnt.push(document.querySelector("#pos_isnt" + i).value.substr(0, 1).toLowerCase())
    }
    document.querySelector("#output").innerHTML = filterWords(starts, ends, includes, excludes, pos_is, pos_isnt).map(s => "<li>" + s + "</li>").join("")
}

update()