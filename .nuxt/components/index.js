export { default as Dashboard } from '../..\\components\\Dashboard.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as HomeCarousel } from '../..\\components\\HomeCarousel.vue'
export { default as Order } from '../..\\components\\Order.vue'
export { default as Productslider } from '../..\\components\\Productslider.vue'
export { default as ScrollTop } from '../..\\components\\ScrollTop.vue'
export { default as SideBar } from '../..\\components\\SideBar.vue'
export { default as ViewOrders } from '../..\\components\\viewOrders.vue'
export { default as ViewUsers } from '../..\\components\\ViewUsers.vue'
export { default as DesktopNav } from '../..\\components\\Desktop\\Nav.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
