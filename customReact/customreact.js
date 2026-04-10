function customrender(reactElement, container) {
    // const domElemnt = document.createElement(reactElement.type)
    // domElemnt.innerHTML = reactElement.children
    // domElemnt.setattribute('href', reactElement.props.href)
    // domElemnt.setattribute('target', reactElement.props.target)

    // container.appendChild(domElemnt)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me'
};

const mainContainer = document.querySelector('#root');

customrender(reactElement, mainContainer);