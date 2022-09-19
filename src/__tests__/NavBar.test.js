import { render, screen, cleanup } from '@testing-library/react'
import renderer, { act } from 'react-test-renderer'
import { MemoryRouter } from 'react-router';
import NavBar from '../components/NavBar/NavBar'

describe('NAVBAR RENDER TESTS', () => {

    afterEach(() => {
        cleanup();
    });

    it('Renders Navbar Components', () => {
        render(
            <MemoryRouter>
                <NavBar />
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
                <NavBar />
            </MemoryRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    })

})


// describe('NAVBAR FUNCTINOALITY TEST', () => {

//     it('Naviagates To Payments', () => {
//         const root = document.createElement('div');
//         document.body.appendChild(root);

//         render(
//             <MemoryRouter initialEntries={['/']}>
//                 <NavBar />
//             </MemoryRouter>,
//             root
//         );

//         act(() => {
//             const paymentsLink = document.querySelector('#paymentsLink');
//             paymentsLink.dispatchEvent(new MouseEvent("click"));
//         });

//         console.log(paymentsLink);
//         //expect(document.body.textContent).toBe('Welcome')
//     })
// })