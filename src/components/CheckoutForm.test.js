import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows



test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.getByText('Checkout Form');
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText('First Name:');
    const lastNameInput = screen.getByLabelText('Last Name:');
    const addressInput = screen.getByLabelText('Address:');
    const cityInput = screen.getByLabelText('City:');
    const stateInput = screen.getByLabelText('State:');
    const zipInput = screen.getByLabelText('Zip:');
    const submitBtn = screen.getByRole('button')

    userEvent.type(firstNameInput, 'Brad');
    userEvent.type(lastNameInput, 'Hubbs');
    userEvent.type(addressInput, '62 Dillmont Dr');
    userEvent.type(cityInput, 'Smithtown');
    userEvent.type(stateInput, 'NY');
    userEvent.type(zipInput, '11787');

    userEvent.click(submitBtn)

    const successMessageR = screen.queryByTestId('successMessage')
    expect(successMessageR).toBeInTheDocument()
    expect(successMessageR).toHaveTextContent('You have ordered some plants! Woo-hoo!')


});
