import { render, screen, cleanup } from '@testing-library/react'
import Transactinos from '../components/Transactions/transactions'

describe('PAYMENTS RENDER TEST', () =>{
    afterEach(() => {
        cleanup();
    });
    
    it('Renders Transactions Components', () => {
        render(<Transactinos/>)
        
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Transactions')
    })
})