# External API

# API Application Program Interface
    - Is an interface that is designed to be worked by OTHER PROGRAMS
## UI User Interface
    - Is an interface that is designed to be worked by humans or human like beings

## JSON
    - Standard for sending Data over the internet 
    - Keys are always strings
    - JSON is always a collection of key pair values
    - JSON IS NOT a JAVASCRIPT OBJECT
        - its a string

    

---------------------------------

# src -> components -> IpAddress.js

```JavaScript
// React Component's Displays information to users
    // what does this component display?
import React, {useState} from 'react'
// Import section

// Component Declaration and Logical section
const IpAddress = () => {
// Lets makes a component that displays a current IP Address

const getIP = () => {
    console.log("Hey this get IP thing works")
}
    // check inspect on website to see if it is working ^^

// Display Section
    return (
        <div>
            <h1>
                Hello Foxtrot
            </h1>
            <button onClick={getIP}>
                Press the Button!
            </button>
        </div>
    )
}
```
---------------------------------------------------

## Fetch
    - is a JavaScript tool (built in method) for making requests to other computers or servers
    - Fetch uses HTTP Verbs and URL's to make the request
        - Fetch defaults to the GET verb
    - Fetch's first argument is the url passed in as a string
# src -> components -> IpAddress.js

```JavaScript
// React Component's Displays information to users
    // what does this component display?
import React, {useState} from 'react'
// Import section

// Component Declaration and Logical section
const IpAddress = () => {
// Lets makes a component that displays a current IP Address

const getIP = () => {
    // console.log("Hey this get IP thing works")
        fetch("https://ipapi.co/json")
        console.log("fetch happened")
}
    // check inspect on website to see if it is working ^^^

// Display Section
    return (
        <div>
            <h1>
                Hello Foxtrot
            </h1>
            <button onClick={getIP}>
                Press the Button!
            </button>
        </div>
    )
}
```
---------------------------------------------------

## Promises
    - ways to handle data asynchronously 
    - Promises ARE JS objects 
    - Status in one of three states, ************************** INTERVIEW QUESTION
        - PromiseState: Pending
        - PromiseState: Rejecting
        - PromiseState: Fulfilled
    - Fetch makes use of promises
    - Access Promises .then()
        - .then is a higher order function and takes a function as an argument
        - .then(()=>{})
        - .catch() allows

```JavaScript
// React Component's Displays information to users
    // what does this component display?
import React, {useState} from 'react'
// Import section

// Component Declaration and Logical section
const IpAddress = () => {
// Lets makes a component that displays a current IP Address

const [ip, setIP] = useState({})

const getIP = () => {
    // console.log("Hey this get IP thing works")
        // fetch("https://ipapi.co/json".then(response => console.log(response)))
        fetch("https://ipapi.co/json")
        .then(response => response.json())
        .then(payload => setIP(payload))
        .catch(errors => console.log(errors))
}
    // check inspect on website to see if it is working ^^^

// Display Section
    return (
        <div>
            <h1>
                Hello Foxtrot, I am located at the IP address of { ip.ip }
            </h1>
            <button onClick={getIP}>
                Press the Button!
            </button>
        </div>
    )
}
```
--------------------------------------------
## src -> App.js -> App
import React from 'react'
import IpAdress from ''
** check video!!

# Hiding an API Key
    - create a file called .env at the root level of your app
    - add the file 

## inside .env file*
 REACT_APP_API_KEY = *api key*
 - also check the syllabus to hide api key 
  