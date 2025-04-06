function display() {
    console.log("This is a display function part of file2.js")
}
function hi() {
    console.log("This is a hi function part of file2.js")
}

module.exports = {
    hi,
    display
}