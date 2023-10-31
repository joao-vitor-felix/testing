import {render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

import UserForm from './UserForm'

it('should render the form', () => {
    render(<UserForm />);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole("button");

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
})