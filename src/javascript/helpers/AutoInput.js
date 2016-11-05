export default class AutoInput {
    constructor (node) {
        this.node = node
        this.cursorWidth = 4
        this.registerEvents()
    }

    resize () {
        this.node.style.width = `${this.cursorWidth}px`
        this.node.style.width = `${this.node.scrollWidth + this.cursorWidth}px`
    }

    registerEvents () {
        this.node.addEventListener('input', this.resize.bind(this))
    }
}
