# Trello Cards
    - As a developer,  I can pass the cat mock data in state to my index component
    - As a developer, I have test coverage on my index component
    - As a developer, I can refactor the show route to pass the param of id for one cat
    - As a developer, I have test coverage on my show component


## Terminal 
- git pull origin main
- git checkout -b read-functionality
- code . 

## Read Functionality 10/28/22
- As a developer, I can pass the cat mock data in state to my index component.
- As a user, I can see a page that lists of all the cat names.
- As a developer, I have test coverage on my index component.
- As a developer, I can refactor the show route to require an id param to show one cat.
- As a user, I can see a page featuring all the information for one cat.
- As a user, I can click on a cat name and be taken to a page that shows me all the information about that cat.
- As a developer, I have test coverage on my show component.

### Plan 
- Pass mockCat data from App.js to CatIndex through the component call 
- Pass as props on the CatIndex page
    - can be passed as props or destructure the data you want fro the page with {cats}



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
                <Route path="/catindex" element={<CatIndex cats={ cats />}} />
                <Route path="/catnew" element={<CatNew/>} />
                <Route path="catshow/:id" element={<CatShow cats={ cats />}/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App
```
## src -> pages -> CatIndex.js
```javascript

const CatIndex = ({props}) => {
    console.log(props.cats)
        return(
            <h1>Cat Index!</h1>
        )
}
export default CatIndex
```

## src -> pages -> CatIndex.js
```javascript

import React from "react"
import {Card, CardBody, CardTitle, Button } from "reactstrap"

const CatIndex = ({cats}) => {
    // console.log(cats)
        return(
            <>
                <h1>Get ready to purr at this fur</h1>
                {cats.map((cat, index) => {
                    return(
                        <>
                            <Card style={{ width: '18rem' }}
                                key = {index}
                            >
                                <img src={cat.image} alt="image of eligible feline"/>
                                <CardBody>
                                    <Button>
                                        {cat.name}
                                    </Button>
                                </CardBody>
                            </Card>
                        </>
                    )
                })}
            </> 
        )
}
export default CatIndex
```

## src -> pages -> *make new file* CatIndex.test.js
```javascript
import {render, screen} from '@testing-library/react'
import CatIndex from './CatIndex'
import mockCats from "../mockData"

describe("<CatIndex/>", (=> {

    beforeEach(() => {
        render(<CatIndex cats={mockCats}/>)
    })
    // user can see the CatIndex page
    test("renders the CatIndex page for the user", ()=> {
        // Triple A Approach: Arrange, Act, Assert
        // Arrange - set up a condition
        // render(<CatIndex cats={mockCats}/>)
        console.log("cat index render")
        screen.debug()
        // Act - interactions/passing
        const element = screen.getByText("Get ready to purr at this fur!")
        screen.debug(element)
        // Assert - what is expected
        expect(element).toBeInTheDocument()
    })

    test("renders cat cards", ( => {
        mockCats.forEach(cat => {
            // name
            const catName = screen.getByText(cat.name)
            expect(catName).toBeInTheDocument()
            // image
            const catImage = screen.getAllByRole('img')
            expect(catImage).toBeVisible
        })
    }))
})
```

## src -> pages -> CatIndex.js
```javascript

import React from "react"
import {Card, CardBody, CardTitle, Button } from "reactstrap"

const CatIndex = ({cats}) => {
    // console.log(cats)
        return(
            <>
                <h1>Get ready to purr at this fur</h1>
                {cats?.map((cat, index) => {
                    return(
                        <div key = {index}>
                            <Card style={{ width: '18rem' }}
                                key = {index}
                            >
                                <img src={cat.image} alt="image of eligible feline"/>
                                <CardBody>
                                    <Button>
                                        {cat.name}
                                    </Button>
                                </CardBody>
                            </Card>
                        <div/>
                    )
                })}
            </> 
        )
}
export default CatIndex
```

## src -> pages -> CatShow.js
```javascript

import React from "react"
import { useParams} from "react-router-dom"
import { Card, CardBody, CardTitle, CarsSubtitle} from "reactstrap"

const CatShow = ({cats}) => {
    // console.log("cats array:", cats)
    const{ id } = useParams()
    // console.log("id from params:", id)

    let showCat = cats?.find(cat => cat.id === +id)
    // console.log("showCat:", showCat)


    return(
        <>
            <h1>Thanks for checking out my profile</h1>
            {showCat && 
                <Card
                style={{ width: '18rem' }}
                
                >
                    <img src={showCat.image} alt="image of eligible feline"/>
                    <CardBody>
                        <CardTitle tag="h5">
                            {showCat.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text muted"
                            tag="h6"
                        >
                            Age: {showCat.age}
                        </CardSubtitle>
                        <CardSubtitle>
                        </CardBody>
                    </Card>
            }  
        </>        
    )
}

export
```

## src -> pages -> *make a new file* CatShow.test.js
```javascript
import {render, screen} from '@testing-library/react'
import CatShow from "./CatShow"
import mockCats from "../mockData"
import {MemoryRouter, Route, Routes} from "react-router-dom"

// describe("<CatShow />", () => {
//     it("renders without crashing", () => {
//         render (
            
//             <CatShow cats={mockCats}/>
//         )
//     })
// })

describe("<CatShow />", () => {
    it("renders without crashing", () => {
        // render the show page for one cat suing MemoryRouter
        render (
            <MemoryRouter initialEntries={["/catshow/1"]}>
            <Routes>
                <Route path="/catshow/:id" element={<CatShow cats={mockcats}/>} />
            </Routes>
            </MemoryRouter>
        )
        const showRender = screen.getByText(/sunshine/i)
        expect(showRender).toHaveTextContent("Hobbies: sunshine and warm spots")
    })
})

```

## src -> pages -> CatIndex.js
```javascript

import NavLink from "react-router-dom"

<CardBody>
    <NavLink to={`/catshow/${cat.id}`} >
        {cat.name}
    </NavLink>
</CardBody>

```