# Trello Cards
    - As a developer, I have test coverage on my Header Component
    - As a developer, I have test coverage on my Footer Component
    - As a developer, I have test coverage on my Home Component
    - As a developer, I have test coverage on my NotFound Component


## Terminal 
- git pull origin main
- git checkout -b test-coverage
- code .

## README
    - Jest Framework

    describe('my function or component', () => {
        test('does the following', () => {
            expect()
        })
    })

    - RTL - 


## checked package.json 
    - make sure you have @testing-library/react: 13.0.0

## Terminal
- $ yarn test 

## App.test.js
```javascript
import {render, screen} from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument()
})

```

## DELETE App.test.js


## src -> pages -> *make a new file* Home.test.js

## src -> pages -> Home.test.js
```javascript
import {render, screen} from '@testing-library/react'
import Home from './Home'

describe("<Home/>", ()=> {
    // user can see the homepage (goal)
    test("renders the home page for the user", ()=> {
        // Triple A Approach: Arrange, Act, Assert 
        // Arrange - set up a condition
        render(<Home/>)
        // Action - interactions/passive(like clicks, tabs, type, how you interact with a webpage or could be a passive act)
        const element = screen.getByText("It's like Tinder, but for Cats!")
        // Assert - what is expected
        expect(element).toBeInTheDocument()
    })
})

```
## src -> components -> *make a new file * Header.test.js

## src -> components -> Header.test.js
```javascript
import {render, screen} from '@testing-library/react'
import Header from './Header'
import { BrowserRouter} from "react-router-dom"
import userEvent from '@testing-library/user-event'


describe("<Header/>", ()=> {
    test("Header renders without error", ()=> {

        render(
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        const indexLink = screen.getByText("Meet the Cats")
        expect(indexLink).toBeInTheDocument
    })

    test("Header has clickable links", ()=> {
        render(
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
        )
        // userEvent - test click on link works (goal)
        userEvent.click(screen.getByText("Meet the Cats"))
        expect(screen.getByText("Meet the Cats")).toBeInTheDocument
        userEvent.click(screen.getByText("Add a New Cat"))
        expect(screen.getByText("Add a New Cat")).toBeInTheDocument
        userEvent.click(screen.getByText("Adopt a Cat!"))
        expect(screen.getByText("Adopt a Cat!")).toBeInTheDocument
    })
})

```