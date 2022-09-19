import { render, screen, cleanup } from '@testing-library/react'
import Payments from '../components/Payments/payments'


describe('PAYMENTS RENDER TEST', () =>{

    afterEach(() => {
        cleanup();
    });
    
    it('Renders Payments Components', () => {
        render(<Payments/>)
        
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Payments')
    })
})