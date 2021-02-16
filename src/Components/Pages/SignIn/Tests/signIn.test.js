import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import { render, screen } from '../../../../custom-render';
import SignInForm from "../index";
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../../App';
import TestRenderer from 'react-test-renderer';

const initialState = {
    isSignedIn: false,
    user: "aade@aston.ac.uk",
    token: "123abc",
  };

  const dispatch = ({
    type: "SIGNIN",
    payload: initialState
  })

// test('renders sign in form', () => {
//     render(
//         <AuthContext>
//             <SignInForm />
//         </AuthContext>
//     );
//     const paperTitle = screen.getByText(container, 'Sign In')
//     expect(paperTitle).toBeInTheDocument();
//   });

  

// test("non-shallow render", () => {
//     const element = new TestRenderer.create(
//         <AuthContext.Provider value={dispatch, initialState}>
//             <SignInForm />
//         </AuthContext.Provider>
//     );
//     expect(element.root.findByType("Typography").children).toEqual(['Sign In']);
// });


it('checks if form displays', () => {
    const {getByTestId} = new TestRenderer.create(
                <AuthContext.Provider value={dispatch, initialState}>
                    <SignInForm />
                </AuthContext.Provider>)
    const form = getByTestId('form');
    const output = getByTestId('title');
    const label = getByTestId('textFieldEmail');
    const nameInput = getByTestId('textFieldPass');
    const submit = getByTestId('submit');
  
    expect(form).toBeInTheDocument();
    expect(output).toHaveTextContent('Sign In');
    expect(label).toHaveValue('');
    expect(nameInput).toHaveValue('');
    expect(submit).toBeInTheDocument();
  });