# Trello Cards
    - Create a new React project
    - Branch - main (initial commit to the frontend repo)

## Terminal 
- $ yarn create react-app cat-tinder-frontend-instructors
- $ cd cat-tinder-frontend
- $ yarn start
- create a new terminal window (command t)
- copy and paste line from github link 
- $ git checkout -b main
- $ git branch -d master
- $ git status
- $ git push origin main
- $ got status
- $ code . 
- $ 

## src
    - make components folder (header...)
    - make assets folder (images)
    - make pages folder (index, show...)

## Terminal 
- $ yarn add bootstrap
- $ yarn add reactstrap

## src -> index.js
```ruby
import 'bootstrap/dist/css/bootstrap.min.css'
```
## src
    - make file named mockData.js
```ruby
const mockCats = [
  {
    id: 1,
    name: "Mittens",
    age: 5,
    enjoys: "sunshine and warm spots",
    image:
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "Raisins",
    age: 6,
    enjoys: "being queen of the dogs",
    image:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"
  },
  {
    id: 3,
    name: "Toast",
    age: 3,
    enjoys: "getting all the attention",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
]
export default mockCats
```

## src -> App.js
``` ruby (rf shortcut)
import React from 'react'
import mockCats from"./mockData"
import { useState } from 'react'

const App = () => {

    const [cats, setCats] = useState(mockCats)
    console.log(cats)

    return(
        <>Cat Tinder</>
    )
}

export default App
```

## WEBSITE
    - should show text
    - check console
        - should show data

## Terminal
- $ yarn add react-router-dom

## src -> index.js
```ruby
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom" // add this import

<React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.StrictMode>
```
## src -> pages (pascal case)
    - create new file named Home.js
    - create new file named CatIndex.js
    - create new file named CatShow.js
    - create new file named CatNew.js
    - create new file named CatEdit.js
    - create new file named NotFound.js

## src -> pages -> CatEdit.js
``` ruby
    import React from "react"

    const CatEdit = () => {

        return(
            <>Cat Edit!</>
        )
    }

    export default CatEdit
```

## src -> pages -> CatIndex.js
``` ruby
    import React from "react"

    const CatIndex = () => {

        return(
            <>Cat Index!</>
        )
    }

    export default CatIndex
```

## src -> pages -> CatNew.js
``` ruby
    import React from "react"

    const CatNew = () => {

        return(
            <>Cat New!</>
        )
    }

    export default CatNew
```

## src -> pages -> CatShow.js
``` ruby
    import React from "react"

    const CatShow = () => {

        return(
            <>Cat Show!</>
        )
    }

    export default CatShow
```

## src -> pages -> Home.js
``` ruby
    import React from "react"

    const Home = () => {

        return(
            <> Home!</>
        )
    }

    export default Home
```

## src -> pages -> NotFound.js
``` ruby
    import React from "react"

    const NotFound = () => {

        return(
            <> Not FOund!</>
        )
    }

    export default NotFound
```

## src -> components 
    - create a file named Header.js
    - create a file named Footer.js

## src -> components -> Footer.js
``` ruby
    import React from "react"

    const Footer = () => {

        return(
            <> Footer!</>
        )
    }

    export default Footer
```

## src -> components -> Header.js
``` ruby
    import React from "react"

    const Header = () => {

        return(
            <> Header!</>
        )
    }

    export default Header
```

## src -> App.js
``` ruby (rf shortcut)
import React from 'react'
import mockCats from"./mockData"
import { useState } from 'react'
import Header from "./components/Header"
import Header from "./components/Footer"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"



const App = () => {

    const [cats, setCats] = useState(mockCats)
    console.log(cats)

    return(
        <>
            <Header/>
            <Home/>
            <CatEdit/>
            <CatIndex/>
            <CatNew/>
            <CatSHow/>
            <NotFound/>
            <Footer/>
        </>
    )
}

export default App
```
## WEBSITE 
    - should show header home edit ....


## src -> App.js
``` ruby (rf shortcut)
import React from 'react'
import mockCats from"./mockData"
import { useState } from 'react'
import Header from "./components/Header"
import Header from "./components/Footer"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'



const App = () => {

    const [cats, setCats] = useState(mockCats)
    console.log(cats)

    return(
        <>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/catedit" element={<CatEdit/>} />
                <Route path="/catindex" element={<CatIndex/>} />
                <Route path="/catnew" element={<CatNew/>} />
                <Route path="catshow" element={<CatShow/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
```
## WEBSITE
    - on browser: localhost:3000/catnew
    - on browser: localhost:3000/catindex
    ... 