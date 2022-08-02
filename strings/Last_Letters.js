function lastLetters(word) {
    const lettersArr = word.split('')
    return `${lettersArr.pop()} ${lettersArr.pop()}`
}