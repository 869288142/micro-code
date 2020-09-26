export let cssTest = function (prop: string, value: string): boolean {
  if (CSS && CSS.supports) {
    // eslint-disable-next-line no-func-assign
    cssTest = CSS.supports
  } else {
    // eslint-disable-next-line no-func-assign
    cssTest = function (prop: string, value: string): boolean {
      const elem = document.createElement('x')
      elem.style[prop] = value
      return window.getComputedStyle(elem)[prop] === value
    }
  }
  return cssTest(prop, value)
}
