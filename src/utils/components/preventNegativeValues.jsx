export const preventNegativeValues = (e) => {
    ["e","E","+","-"].includes(e.key) && e.preventDefault()
}