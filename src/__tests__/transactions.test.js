import { render, screen, cleanup } from '@testing-library/react'
import TransactionsLayout from '../Pages/TransactionsPage/TransactionsPage'
describe('PAYMENTS RENDER TEST', () =>{
    afterEach(() => {
        cleanup();
    });
    
    it('Renders Transactions Components', () => {
        render(<TransactionsLayout/>)
        
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Transactions')
    })
})