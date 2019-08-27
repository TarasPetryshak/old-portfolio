let memory;
let actionClasses = {
    save: (value) => memory = value,
    read: () => memory,
    clean: () => memory = 0,
    add: (value) => value += memory,
    subtractionMemory: (value) => value -= memory
}
let memoryAction = () => {
    for (let j in actionClasses) {
        if ($(event.target).hasClass(j)) {
            return j;
        }
    }
}
export default {
    memory,
    actionClasses,
    memoryAction
}