import React from 'react';
import "./Accordion.css"

const Accordion = () => {
    return (
        <div className="container my-5">
            <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <h4> How React Works?</h4>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className='d-flex flex-column flex-lg-row'>
                                <div className='d-flex justify-content-center'>
                                    <img className="w-100" src="https://res.cloudinary.com/practicaldev/image/fetch/s--UVX7ie6K--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/v4y43jjfj7u5r8to8qdu.png" alt="React" />
                                </div>
                                <div className="w-100">
                                    <div className="p-4">
                                        <h6 className="lh-base text">ReactJS is a popular JavaScript library for creating user interfaces. JavaScript is a scripting language that does not follow any. Once it is received in the browser, it is performed line by line from top to bottom. Meanwhile, the data flow in react is controlled by a certain set of rules making the React applications well structured. Each piece of code that runs independently is stored inside a component. These components operate independently yet interact with one another to ensure the web application functions properly. Each React component performs a distinct function and returns JSX, and each of these components may be accessed inside the two div tags. Thus, anytime the UI requires an update, just the component assigned to that job has to be invoked. While vanilla JavaScript uses the built-in DOM of the browser, ReactJS uses a virtual DOM.</h6>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <h4> Props vs. State</h4>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className='d-flex flex-column flex-lg-row'>
                                <div className='w-100 d-flex justify-content-center'>
                                    <img className="w-100" src="https://miro.medium.com/max/1400/0*wGaUQvXc4HymloHn.jpg" alt="React" />
                                </div>
                                <div className="w-100">
                                    <div className="p-4">
                                        <h6 className="lh-base text">Props are read-only components. It is an object that holds the value of a tag's attributes and functions similarly to HTML attributes. It enables the exchange of data between components. It is comparable to function arguments and may be passed to the component in the same way function arguments are passed. Due to the fact that props are immutable, we cannot edit them from inside the component.Meanwhile, the state is an ever-changing structure that is used to store data or information about the component. The state may be altered in response to a user action or a system event, and it is the react component's heart since it controls the component's behavior and how it will render. Therefore, a state must be as simple as feasible. It encapsulates the component's local state or data. It may be accessed or updated exclusively inside the component or directly by the component.
</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h4>How useState Works?</h4>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div className='d-flex flex-column flex-lg-row'>
                                <div className='w-100 img-width d-flex justify-content-center'>
                                    <img className="w-100" src="https://daveceddia.com/images/useState-hook-twitter.png" alt="React" />
                                </div>
                                <div className="w-100 text-width">
                                    <div className="p-4">
                                        <h6 className="lh-base text">The useState Hook is a JavaScript function, so it must be called as a function. It is used inside a function component to set a piece of state that React will use when the component is re-rendered.  useState is a hook in React that helps to add state to function components. In a React functional component, when the useState Hook is invoked, it returns a piece of state for that component. With the useState Hook, any data type for the state can be shown up.  It can be an object, an array, or a boolean. React useState Hook is very much useful for the state of local components. The useState Hook lets you only set up a single state variable of any data type at a time. The initial value will only be set when the first render is done. The first element that is returned is the state variable, and the second is a function that helps to change the value of that variable.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Accordion;