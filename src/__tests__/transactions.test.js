import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import TransactionsLayout from '../Pages/TransactionsPage/TransactionsPage'
import renderer from 'react-test-renderer'
import { ToggleGroup, Transaction, MyTransactions } from '../Pages/TransactionsPage/TransactionsPage'
import { useState } from 'react'


describe('RENDER <ToggleGroup />', () =>{
    afterEach(() => {
        cleanup();
    });
    
    it('Renders Transactions Components', () => {
        render(<ToggleGroup/>)

        const buttonHeader = screen.getByTestId('Header')
        expect(buttonHeader).toBeInTheDocument();
        
        const publicButton = screen.getByTestId('Public')
        expect(publicButton).toBeInTheDocument();
        expect(publicButton).toHaveTextContent('Public')

        const friendsButton = screen.getByTestId('Mine')
        expect(friendsButton).toBeInTheDocument();
        expect(friendsButton).toHaveTextContent('Mine')
    })

    it('Matches Snapshot', () => {
        const tree = renderer.create(<ToggleGroup/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('FUNCTIONALITY <ToggleGroup />', () => {
    afterEach(() => {
        cleanup();
    });

    it('OnClick Public', () => {
        const setActive = jest.fn();
        const { queryByText } = render(<ToggleGroup setActive={setActive}/>);

        const publicButton = queryByText('Public');
        const friendsButton = queryByText('Mine');
        fireEvent.click(publicButton);

        expect(setActive).toHaveBeenCalledTimes(1);
    })

    it('OnClick Mine', () => {
        const setActive = jest.fn();
        const { queryByText } = render(<ToggleGroup setActive={setActive}/>);

        const publicButton = queryByText('Public');
        const friendsButton = queryByText('Mine');
        fireEvent.click(friendsButton);

        expect(setActive).toHaveBeenCalledTimes(1);
    })
})

describe('RENDERS <Transactions />', () =>{
    afterEach(() => {
        cleanup();
    });

    it('Renders Transactions Components', () => {
        const transactions = {
                transaction_id: 1,
                recipient: 'Fran',
                giver: 'Jose',
                message: 'Food'
            }
        render(<Transaction id={transactions.transaction_id} recipient={transactions.recipient} giver={transactions.giver} message={transactions.message}/>)

        const payer = screen.getByTestId(transactions.giver);
        expect(payer).toBeInTheDocument();

        const msg = screen.getByTestId(transactions.message);
        expect(msg).toBeInTheDocument();
    })

    it('Matches Snapshot', () => {
        const tree = renderer.create(<Transaction/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})