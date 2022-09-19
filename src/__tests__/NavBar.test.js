import  { render, screen ,cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router';
import NavBar from '../components/NavBar/NavBar'

describe('NAVBAR RENDER TESTS', () => {

    afterEach(() => {
        cleanup();
    });

    it('Renders Navbar Components', () => {
        render(
        <MemoryRouter>
            <NavBar/>
        </MemoryRouter>);

        //Logo
        const logo = screen.getByTestId('logo');
        expect(logo).toBeInTheDocument();

        //Pay or Request Link
        const payment = screen.getByTestId('payment');
        expect(payment).toBeInTheDocument();
        expect(payment).toHaveTextContent('Pay or Request')

        //Transactions Link
        const transaction = screen.getByTestId('transaction');
        expect(transaction).toBeInTheDocument();
        expect(transaction).toHaveTextContent('Transactions')

        //Profile Link
        const profile = screen.getByTestId('profile');
        expect(profile).toBeInTheDocument();
        expect(profile).toHaveTextContent('Profile')
    })
    
    it('Matches Snapshot', () => {
        const tree = renderer.create(
        <MemoryRouter>
            <NavBar/>
        </MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    })

}) 