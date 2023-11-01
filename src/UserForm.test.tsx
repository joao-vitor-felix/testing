import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserForm from './UserForm'

describe('UserForm', () => {
    it('should render the form', () => {
        render(<UserForm onAddUser={() => {}}/>);
        const inputs = screen.getAllByRole('textbox');
        const button = screen.getByRole("button");
    
        expect(inputs).toHaveLength(2);
        expect(button).toBeInTheDocument();
    })
    
    it('should call the onAddUser function when form were submitted', async () => {
        const onAddUser = jest.fn()
        render(<UserForm onAddUser={onAddUser} />);
        const name = screen.getByPlaceholderText('Enter your name')
        const email = screen.getByPlaceholderText('Enter your email')
        const button = screen.getByRole("button");
    
        await userEvent.type(name, 'John Doe')
        await userEvent.type(email, 'john@doe.com')
    
        await userEvent.click(button);
        expect(onAddUser).toHaveBeenCalledTimes(1)
        expect(onAddUser).toHaveBeenCalledWith({name: 'John Doe', email: 'john@doe.com'})
    })
    
    it('should get the correct value typed', async () => {
        render(<UserForm onAddUser={() => {}} />);
        const name = screen.getByPlaceholderText('Enter your name')
        const email = screen.getByPlaceholderText('Enter your email')
    
        await userEvent.type(name, 'John Doe')
        await userEvent.type(email, 'john@doe.com')
    
        expect(name).toHaveValue('John Doe')
        expect(email).toHaveValue('john@doe.com')
    })
})

