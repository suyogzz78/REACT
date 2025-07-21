function customrender(reactelement,container)
{/*
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    domelement.setAttribute('href',reactelement.props.href)
    domelement.setAttribute('target',reactelement.props.target)
    container.appendChild(domelement)*/

    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    for (const prop in reactelement.props){
        domelement.setAttribute(prop,reactelement.props[prop])//here we dont need to repeat setattribute so we use this loop
    }
     container.appendChild(domelement)
}
const reactelement={
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    
    },
    children:'Click me to visit google'
} 

const container = document.querySelector('#root')

customrender(reactelement,container)

 
