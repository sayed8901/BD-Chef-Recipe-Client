import React from "react";

const Blog = () => {
  return (
    <div className="my-container mb-8">
      
      <h1 className="text-4xl font-bold text-center mt-4 mb-8">
        Welcome to my blog!
      </h1>

      <div className="text-center my-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Some intermediate concepts about React
        </h2>
        <h4>
          Here I am going to discus about some intermediate concept of react
          components, props type, custom hook & the basic concept regarding node server & express js.
        </h4>
      </div>

      {/* Q&A part */}
      {/* question # 1 */}
      <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
        <h3 className="font-bold mb-4 border-b-2 pb-3 border-slate-100">
          A. Differences between uncontrolled and controlled components.
        </h3>
        <p className="px-8">
          Uncontrolled component refers to a component in React on which React has no direct manipulation or control, the DOM controls it.
          <br /> <br />
          On the other hand, controlled components are components in which react can directly control or manipulate and update the DOM or display data to its user. It will automatically be changed & handled by using event-based callbacks on every onChange event occurrence.
          <br /> <br />
          <b>Differences:</b>
          <br /> <br />
          <b>1.</b>
          <br /> <br />
          In controlled components, data is controlled by the parent component. It does not maintain its internal state. Managed by React state.
          <br /> <br />
          In uncontrolled components, data is controlled by the DOM itself.It maintains its internal states. Managed by the components own internal state.
          <br /> <br />
          <b>2.</b>
          <br /> <br />
          Controlled components accepts its current value as a prop. Here, data flows from parent component to component.
          <br /> <br />
          Uncontrolled components uses a ref for their current values. Here, data flows within the component.
          <br /> <br />
          <b>3.</b>
          <br /> <br />
          Controlled components has better control over the form elements and data. It allows validation control.
          <br /> <br />
          Uncontrolled components has limited control over the form elements and data. It does not allow validation control.
          <br /> <br />
          <b>4.</b>
          <br /> <br />
          In controlled components, there are less complex code & easier to debug. Generally faster as there is less state management. So is is considered as a best practice.
          <br /> <br />
          In uncontrolled components, there are more complex code & more difficult to debug. Generally slower as there is more state management. So it is considered as an alternate approach.
        </p>
      </div>

      {/* question # 2 */}
      <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
        <h3 className="font-bold mb-4 border-b-2 pb-3 border-slate-100">
          B. How to validate React props using PropTypes?
        </h3>
        <p className="px-8">
          PropTypes are important mechanisms for passing read-only attributes between React components.
          <br /> <br />
          We can use React props, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app. 
          <br />
          In this context, we can use “PropTypes” for props validation in react.
          <br /> <br /> <br />
          PropTypes is Reacts internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking:
          <br /> <br />
          When props are passed to a React component, they are checked against the type definitions configured in the propTypes property.
          <br /> <br />
          However, to get access to the PropTypes utility, we need to add prop-types as a dependency for your project. Command to install: npm install prop-types --save  &  to import: import PropTypes from prop-types;
        </p>
      </div>

      {/* question # 3 */}
      <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
        <h3 className="font-bold mb-4 border-b-2 pb-3 border-slate-100">
          C. Difference between nodejs and express js.
        </h3>
        <p className="px-8">
          Node.js is an open source and cross-platform built on Chromes JavaScript runtime for easily building fast, scalable network applications & it allows executing JavaScript code outside of a browser. 
          <br />You need to keep in mind that NodeJS is not a framework and it is not a programming language.
          <br /> <br />
          On the contrary, Express is a minimal and flexible node.js web application framework that sits on top of Node.js web server functionality to simplify its APIs and add helpful new features. 
          <br />
          It makes it easier to organize your application functionality with middle ware and routing. 
          <br />
          It adds helpful utilities to Node.js HTTP objects. It facilitates the rendering of dynamic HTTP objects.

          <br /> <br />
          <b>Differences:</b>
          <br /> <br />
          <b>1.</b>
          <br /> <br />
          Express.js is used to build web-apps using approaches and principles of Node.js. It is a framework built on Node.js. 
          <br /> <br />
          Node,js is used to build server-side, input-output, event-driven apps. It is built on Googles V8 engine. It is not a framework, rather it is a run-time platform or environment designed for server-side execution of JavaScript.
          <br /> <br />
          <b>2.</b>
          <br /> <br />
          It offers more features than Node.js. Such as: controllers, routing are provided here. It can also use middleware for the arrangement of functions systematically server-side.
          <br /> <br />
          It offers fewer features. Here, controllers & routing are not provided. It does not allow to use middleware provision.
          <br /> <br />
          <b>3.</b>
          <br /> <br />
          Besides these, express.js is written in JavaScript. So, it requires less coding time.
          <br /> <br />
          On the other hand, node.js is written in C, C++ & JavaScript. So, it requires more coding time.
        </p>
      </div>

      {/* question # 4 */}
      <div className="border border-slate-200 rounded-md p-4 mb-8 md:mb-12">
        <h3 className="font-bold mb-4 border-b-2 pb-3 border-slate-100">
          D. What is custom Hook in React? why will you create a custom hook?
        </h3>
        <p className="px-8">
          Custom Hook is a special functionality of React router. Besides using react custom hook, we can create our own hook function such as custom loader and many more & use it very easily.
          <br /> <br />
          Generally, custom hooks functions might be created to hold or save the custom hook or custom loader function.
          <br /> <br />
          In React, a custom Hook is <b>a function that starts with the word “use”  and may call other Hooks.</b>
          <br /> <br />
          So, If necessary we can create a custom function like raw loader of jsx and use it instead of loader. In this case, different loader functions including cartProductsLoader, js can be written in a separate folder called loaders in components folder or src.
        </p>
      </div>
    </div>
  );
};

export default Blog;
