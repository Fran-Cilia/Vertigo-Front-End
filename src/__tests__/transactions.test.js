import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import TransactionsLayout from '../Pages/TransactionsPage/TransactionsPage'
import renderer from 'react-test-renderer'
import ToggleGroup from '../Pages/TransactionsPage/TransactionsPage'



describe('RENDER <TransactionLayout />', () =>{
    afterEach(() => {
        cleanup();
    });
    
    it('Renders Transactions Components', () => {
        render(<TransactionsLayout/>)

        const buttonHeader = screen.getByTestId('Header')
        expect(buttonHeader).toBeInTheDocument();
        
        const publicButton = screen.getByTestId('Public')
        expect(publicButton).toBeInTheDocument();
        expect(publicButton).toHaveTextContent('Public')

        const friendsButton = screen.getByTestId('Friends')
        expect(friendsButton).toBeInTheDocument();
        expect(friendsButton).toHaveTextContent('Friends')
    })

    it('Matches Snapshot', () => {
        const tree = renderer.create(<TransactionsLayout/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('<ToggleGroup />', () => {
    afterEach(() => {
        cleanup();
    });

    it('OnClick Public', () => {
        const { queryByText } = render(<ToggleGroup/>);

        const publicButton = queryByText('Public');
        const friendsButton = queryByText('Friends');
        fireEvent.click(publicButton);

        expect(publicButton.className).toBe('Active')
        expect(friendsButton.className).toBe('Inactive')
    })

    it('OnClick Friends', () => {
        const { queryByText } = render(<ToggleGroup/>);

        const publicButton = queryByText('Public');
        const friendsButton = queryByText('Friends');
        fireEvent.click(friendsButton);

        expect(publicButton.className).toBe('Inactive')
        expect(friendsButton.className).toBe('Active')
    })
})