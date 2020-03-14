const component = (props_, engine, element) => {
    element = element || document.createElement('div')
    const state = {}
    const props = new Proxy(props_,{
        set(target,key,value) {
            target[key] = value
            engine(element, target, state)
        }
    })
    element.__state__ = state
    element.__props__ = props
    engine(element, props, state)
    return { props, element, state, engine } 
}
module.exports = component
