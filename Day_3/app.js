import ReactDom from 'react-dom/client';

const header = <h1 className="header">Welcome to My App</h1>;

// Create functional component the content should be about functinonal component, jsx, composition
const ParagraphComponent = () => {
    return (
        <p className="description">
            This is a simple React application.
            <br/>
            This is simple Functional component. JSX is used. JSX is simple html like syntax in javasxript. Babel package help to write html like syntax in javascript. Basically we are abe to write jsx because of babel.
            <br/>
            This is a simple React element create using jsx and without React.createElement function.Also it is used in another component. This is called component composition
            <br/>
            To write javascript in jsx we can use the curly bracket. JSX has inbuilt ability to avoid xss attack Also the functional component is simple javascript function and it can be called in a normal way or it can be treated as html tag
        </p>
    );
}

const mainContainer = (
    <div className="container">
        {header}
        <ParagraphComponent />
    </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(mainContainer);
