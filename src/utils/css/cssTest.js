function cssTest(prop, value) {
    if(CSS && CSS.supports) {
        cssTest = CSS.supports
    }else {
        cssTest = function (prop, value) {
            let elem = document.createElement('x');  
            elem.style[prop] = value
            return window.getComputedStyle(elem)[prop] === value
        }
    }
    return cssTest(prop, value)
}