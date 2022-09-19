import { render, screen, cleanup } from '@testing-library/react'
import Profile from '../components/Profile/profile'

describe('PAYMENTS RENDER TEST', () =>{

    afterEach(() => {
        cleanup();
    });
    
    it('Renders Profile Components', () => {
        render(<Profile/>)
        
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent('Profile')
    })
})