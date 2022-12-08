## Create Functionality - 10/31/22
- Add unikitty to the list


- Restful routes: index, update, destroy, edit, create, new ,show

- New: restful route that displays a form to the user

## src -> pages -> CatNew.js

*went to react strap website and grabbed a form*

## src -> pages -> CatNew.js
```javascript
import React from "react"
import {Form, FormGroup, Label, Input, Button} from "reactstrap"

const CatNew = () => {
    
    const [newCat, setNewCat] = useState({
        name: "",
        age: "", 
        enjoys: "",
        image: ""
    })

    const handleChange = (e) => {
        // console.log("updated value for the cat object",e.target.value)
        // console.log("key for the cat object", e.target.name)
        setNewCat({...newCat, [e.target.name]:e.target.value})
    }
    return (
    <>
    <h1>Cat New!</h1>
    <Form>
        <FormGroup>
            <Label for="name">
            Name
            </Label>
            <Input
            name="name"
            placeholder="What is your name?"
            type="text"
            onChange={ handleChange }
            value={ newCat.name }
            />
        </FormGroup>
        <FormGroup>
            <Label for="age">
            Age
            </Label>
            <Input
            name="age"
            placeholder="What is your age?"
            type="number"
            onChange={ handleChange }
            value={ newCat.age }

            />
        </FormGroup>
        <FormGroup>
            <Label for="enjoys">
            Enjoys
            </Label>
            <Input
            name="enjoys"
            placeholder="What do they enjoy?"
            type="text"
            onChange={ handleChange }
            value={ newCat.enjoys }

            />
        </FormGroup>
        <FormGroup>
            <Label for="image">
            Image
            </Label>
            <Input
            name="image"
            placeholder="Share an image"
            type="url"
            onChange={ handleChange }
            value={ newCat.image }

            />
        </FormGroup>
        <Button>
            Submit
        </Button>
    </Form>
    </>
    






    )
}
```

## src -> App.js
```JavaScript

const App = () => {
    const [cats, setCats] = useState(mockCats)
    console.log(cats)

    const createCat = (cat) => {
        console.log("Created cat",cat)
    }

    return (
        <>
        <Header>
        <Routes>
            <Route path="/catnew" element={<CatNew createCat={createCat} />}>
    )
}
```

## src -> pages -> CatNew.js
```javascript
import React from "react"
import {Form, FormGroup, Label, Input, Button} from "reactstrap"
import { useNavigate } from "react-router-dom"

const CatNew = ( {createCat }) => {
    
    const navigate = useNavigate()
    const [newCat, setNewCat] = useState({
        name: "",
        age: "", 
        enjoys: "",
        image: ""
    })

    const handleChange = (e) => {
        // console.log("updated value for the cat object",e.target.value)
        // console.log("key for the cat object", e.target.name)
        setNewCat({...newCat, [e.target.name]:e.target.value})
    }

    const handleSubmit = () => {
         createCat(newCat)
         navigate("/catindex")
    }



    return (
    <>
    <h1>Cat New!</h1>
    <Form>
        <FormGroup>
            <Label for="name">
            Name
            </Label>
            <Input
            name="name"
            placeholder="What is your name?"
            type="text"
            onChange={ handleChange }
            value={ newCat.name }
            />
        </FormGroup>
        <FormGroup>
            <Label for="age">
            Age
            </Label>
            <Input
            name="age"
            placeholder="What is your age?"
            type="number"
            onChange={ handleChange }
            value={ newCat.age }

            />
        </FormGroup>
        <FormGroup>
            <Label for="enjoys">
            Enjoys
            </Label>
            <Input
            name="enjoys"
            placeholder="What do they enjoy?"
            type="text"
            onChange={ handleChange }
            value={ newCat.enjoys }

            />
        </FormGroup>
        <FormGroup>
            <Label for="image">
            Image
            </Label>
            <Input
            name="image"
            placeholder="Share an image"
            type="url"
            onChange={ handleChange }
            value={ newCat.image }

            />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
            Submit
        </Button>
    </Form>
    </>
    






    )
}
```

## src -> pages -> *create new file * CatNew.test.js
``` javascript
import { render, screen } from '@testing-library/'
import CatNew from './CatNew'
import { BrowserRouter } from "react-router-dom"

describe("<CatNew/>") => {
// Arrange
    beforeEach(() => {
        render(
            <BrowserRouter>
                <CatNew />
            </BrowserRouter>
        )
    })

    test("renders the CatNew page for the user", () => {
        // Act
        const catNewHeading = screen.getByText(/cat new/i)
        // screen.debug(catNewHeading)

        // Assert
        expect (catNewHeading).toHaveTextContent("Cat New!")
    })

        test("has a from with entries for name, age, enjoys, and image", () => {
            const nameLabel = screen.getByText(/name/i)
            screen.debug(nameLabel)
            expect (nameLabel.getAttribute("for")).toEqual("name")

            // awaiting assistance from Foxtrot
            const ageLabel = screen.getAllByText(/age/i)
            screen.debug(ageLabel)
            expect (ageLabel.getAttribute("for")).toEqual("age")

    })

}
```

## Terminal
- checked to see if it worked 
---------------------------------------------------------------
## App.js
*take off mockCats import (green out)*
```javascript
const App = () => {
    const [cats, setCats] = useState()
    console.log(cats)

    useEffect(() => {
        readCat()
    }, [])

    const readCat = () => {
    fetch("http://localhost:3000/cats") // is the request 
        .then((response) => response.json())
        .then((payload) => {
            setCats(payload)
        })
        .catch((errors) => console.log("Cat read errors", errors))
    }

    const createCat = (newCat ) => {
        fetch("http://localhost:3000/cats", {
            body: JSON.stringify(newCat),
            headers: {
                "Content-Type": "application/json"
            }, 
            method: "POST"
        } )
            .then(response => response.json())
            .then(() => readCat())
            .catch((errors) => console.log("Cat create errors: ", errors))
    }

    const updateCat () => {
        // console.log("updated cat: ", updatedCat)
    }

    const deleteCat () => {
        // console.log("deleted cat: ", deletedCat)
    }
}

```

