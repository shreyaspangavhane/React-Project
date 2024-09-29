import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// create the Object and make anchore tag and directly call that object in craeteRoot 
const create_Element=(
    <a href="https://www.google.com/" target='_blank'>Google</a>
)

// make same anchor ele using the react
// react ele consist of 3 parameter--> tagName,Attribute of that Tag,Text/msg  for that use =>React.createElement
const reactEle=React.createElement(
    'a',
    {href:"https://www.google.com/",
        target:"_blank"
    },
    "Google (Click Me)"
)


createRoot(document.getElementById('root')).render(

    // create_Element
    reactEle
    // <App/>
)
