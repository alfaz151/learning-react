# React Learning Journey - Quick Reference Guide

A comprehensive summary of React concepts covered across 6 learning days and a TodoApp project.

---

## Table of Contents
- [Day 1: React Fundamentals](#day-1-react-fundamentals)
- [Day 2: ES6 Modules & Parcel](#day-2-es6-modules--parcel)
- [Day 3: JSX & Functional Components](#day-3-jsx--functional-components)
- [Day 4: Component Composition & Lists](#day-4-component-composition--lists)
- [Day 5: Props & State Management](#day-5-props--state-management)
- [Day 6: React Router](#day-6-react-router)
- [TodoApp: Practical CRUD Operations](#todoapp-practical-crud-operations)
- [Quick Reference Cheatsheet](#quick-reference-cheatsheet)

---

## Day 1: React Fundamentals

### Core Concepts
- **React via CDN** - No build tools needed for basic setup
- **React.createElement API** - Core method to create React elements
- **ReactDOM.createRoot** - Modern React 18 rendering API

### Key Syntax
```javascript
// Creating elements without JSX
const element = React.createElement(
    "tagName",      // HTML tag
    { props },      // Attributes/props object
    children        // Child elements or text
);

// Rendering to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```

### Key Takeaway
React elements are plain JavaScript objects that describe what you want to see on screen.

---

## Day 2: ES6 Modules & Parcel

### Core Concepts
- **ES6 Import/Export** - Modern JavaScript module system
- **Parcel Bundler** - Zero-config build tool
- **Package Management** - npm for dependencies

### Key Syntax
```javascript
// Named imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Export default
export default ComponentName;

// Named export
export { CONSTANT_NAME };
```

### Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "parcel": "^2.16.1"
  }
}
```

### Key Takeaway
Moving from CDN to modules enables better code organization and access to the npm ecosystem.

---

## Day 3: JSX & Functional Components

### Core Concepts
- **JSX Syntax** - HTML-like syntax in JavaScript
- **Functional Components** - Functions that return JSX
- **Component Composition** - Combining components together
- **XSS Prevention** - JSX automatically escapes values

### Key Syntax
```javascript
// JSX element
const element = <h1 className="title">Hello World</h1>;

// Functional component
const MyComponent = () => {
    return (
        <div>
            <h1>Title</h1>
            <p>Content</p>
        </div>
    );
};

// Using components
const App = () => {
    return (
        <div>
            {element}              {/* JSX variable */}
            <MyComponent />        {/* Component */}
        </div>
    );
};
```

### JSX Rules
| HTML | JSX |
|------|-----|
| `class` | `className` |
| `for` | `htmlFor` |
| Self-closing tags must end with `/>` | `<br />`, `<img />` |
| JavaScript expressions in `{}` | `{variable}`, `{func()}` |

### Key Takeaway
JSX makes React code more readable by allowing HTML-like syntax that Babel transforms to `createElement` calls.

---

## Day 4: Component Composition & Lists

### Core Concepts
- **Component Architecture** - Header, Body, Footer pattern
- **Array Mapping** - Rendering lists from data
- **Key Prop** - Unique identifier for list items
- **Fragments** - Grouping without extra DOM nodes

### Key Syntax
```javascript
// Fragment syntax
<>
    <Component1 />
    <Component2 />
</>

// Or explicit
<React.Fragment>
    <Component1 />
    <Component2 />
</React.Fragment>

// Mapping arrays
const List = () => {
    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    );
};
```

### Why Keys Matter
- Help React identify which items changed
- Should be stable, unique identifiers (not array index)
- Improves rendering performance

### Key Takeaway
Component composition and list rendering are fundamental patterns for building dynamic UIs.

---

## Day 5: Props & State Management

### Core Concepts
- **Props** - Data passed from parent to child
- **useState Hook** - Managing component state
- **Controlled Components** - Form inputs controlled by React
- **Filtering Logic** - Manipulating displayed data

### Props
```javascript
// Parent passing props
<SearchBar mockJsonData={data} />

// Child receiving props (destructuring)
const SearchBar = ({ mockJsonData }) => {
    // Use mockJsonData here
};
```

### useState Hook
```javascript
import { useState } from 'react';

const Component = () => {
    // [currentValue, setterFunction] = useState(initialValue)
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
};
```

### Controlled Input
```javascript
const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
        />
    );
};
```

### Filtering Data
```javascript
function filterData(searchText, list) {
    if (!searchText) return list;

    return list.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );
}
```

### Key Takeaway
State enables dynamic, interactive components. Props enable data flow between components.

---

## Day 6: React Router

### Core Concepts
- **React Router v6** - Client-side routing
- **createBrowserRouter** - Route configuration
- **useParams** - Access URL parameters
- **useEffect** - Side effects (data fetching)
- **Link** - Navigation without page reload
- **Outlet** - Nested route rendering
- **Error Handling** - Route error boundaries

### Router Setup
```javascript
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayout = () => (
    <>
        <Header />
        <Outlet />  {/* Child routes render here */}
        <Footer />
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/post/:id", element: <PostDetail /> }  // Dynamic route
        ]
    }
]);

// Render with RouterProvider
root.render(<RouterProvider router={router} />);
```

### Navigation with Link
```javascript
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={`/post/${post.id}`}>View Post</Link>
    </nav>
);
```

### useParams Hook
```javascript
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();  // Get :id from URL

    // Use id to fetch/display data
};
```

### useEffect Hook
```javascript
import { useEffect, useState } from 'react';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        // Runs after component mounts
        const foundPost = data.find(p => p.id === parseInt(id));
        setPost(foundPost);
    }, []);  // Empty array = run once on mount

    return (
        <div>
            <h1>{post?.title}</h1>  {/* Optional chaining */}
            <p>{post?.body}</p>
        </div>
    );
};
```

### Error Handling
```javascript
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>{error.status} - {error.statusText}</h1>
            <p>Page not found</p>
        </div>
    );
};
```

### Key Takeaway
React Router enables SPA navigation. useParams extracts URL data, useEffect handles side effects.

---

## TodoApp: Practical CRUD Operations

### Core Concepts
- **Add Operations** - Immutable array updates with spread
- **Delete Operations** - Filtering arrays
- **Form Handling** - Input validation and clearing
- **Conditional Logic** - Early returns

### Complete Example
```javascript
import { useState } from 'react';

const TodoApp = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [tasks, setTasks] = useState([]);

    // Add task
    const addTask = () => {
        if (!taskTitle) return;  // Validation
        setTasks([...tasks, taskTitle]);  // Spread operator
        setTaskTitle("");  // Clear input
    };

    // Delete task
    const deleteTask = (taskToDelete) => {
        setTasks(tasks.filter(task => task !== taskToDelete));
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <React.Fragment key={index}>
                        <li>{task}</li>
                        <button onClick={() => deleteTask(task)}>
                            Delete
                        </button>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};
```

### Immutable State Updates
```javascript
// Adding item
setTasks([...tasks, newTask]);

// Removing item
setTasks(tasks.filter(task => task !== taskToRemove));

// Updating item
setTasks(tasks.map(task =>
    task.id === id ? { ...task, completed: true } : task
));
```

### Key Takeaway
Always update state immutably. Use spread operator for adding, filter for removing.

---

## Quick Reference Cheatsheet

### Hooks Summary
| Hook | Purpose | Example |
|------|---------|---------|
| `useState` | Local state | `const [value, setValue] = useState(initial)` |
| `useEffect` | Side effects | `useEffect(() => { ... }, [deps])` |
| `useParams` | URL params | `const { id } = useParams()` |
| `useRouteError` | Route errors | `const error = useRouteError()` |

### Array Methods
| Method | Purpose | Example |
|--------|---------|---------|
| `.map()` | Transform/render | `items.map(i => <Item key={i.id} />)` |
| `.filter()` | Remove items | `items.filter(i => i.id !== id)` |
| `.find()` | Get single item | `items.find(i => i.id === id)` |
| `[...arr]` | Copy/add | `[...items, newItem]` |

### React Router Components
| Component | Purpose |
|-----------|---------|
| `RouterProvider` | Provides router context |
| `Outlet` | Renders child routes |
| `Link` | Navigation without reload |

### Common Patterns
```javascript
// Controlled input
<input value={state} onChange={(e) => setState(e.target.value)} />

// Conditional rendering
{condition && <Component />}
{condition ? <A /> : <B />}

// Optional chaining
{data?.property}

// Event handling
<button onClick={() => handleClick(param)}>Click</button>
```

### Project Structure (Recommended)
```
project/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── App.js
│   └── index.js
├── constant.js
├── styles.css
├── index.html
└── package.json
```

---

## Learning Progression Summary

| Day | Focus | Key Additions |
|-----|-------|---------------|
| 1 | Fundamentals | createElement, createRoot |
| 2 | Tooling | ES6 modules, Parcel |
| 3 | Syntax | JSX, Functional components |
| 4 | Structure | Composition, Lists, Keys |
| 5 | Interactivity | Props, useState, Controlled inputs |
| 6 | Navigation | React Router, useParams, useEffect |
| App | Practice | CRUD operations, State management |

---

## Next Steps to Explore
- [ ] useContext - Global state without prop drilling
- [ ] useReducer - Complex state logic
- [ ] useMemo/useCallback - Performance optimization
- [ ] Custom Hooks - Reusable logic
- [ ] API Integration - fetch/axios with useEffect
- [ ] Form Libraries - React Hook Form, Formik
- [ ] State Management - Redux, Zustand
- [ ] Testing - Jest, React Testing Library
