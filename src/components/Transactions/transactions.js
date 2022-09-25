import { Transaction, ToggleGroup, MyTransactions } from "../../Pages/TransactionsPage/TransactionsPage"
import { useState } from "react";

function Transactions() {
    const transactions = {
        public: [
            {
                transaction_id: 1,
                recipient: 'Fran',
                giver: 'Jose',
                message: 'Food'
            },
            {
                transaction_id: 2,
                recipient: 'Aldo',
                giver: 'Wyatt',
                message: 'cleaning'
            },
            {
                transaction_id: 3,
                recipient: 'Taylor',
                giver: 'Sasha',
                message: 'ice cream'
            }

        ],
        private: [
            {
                transaction_id: 4,
                recipient: 'Fran',
                giver: 'Jose',
                message: 'Food',
                amount: 20
            },
            {
                transaction_id: 5,
                recipient: 'Jose',
                giver: 'Aldo',
                message: 'cleaning',
                amount: 50
            },
            {
                transaction_id: 6,
                recipient: 'Taylor',
                giver: 'Jose',
                message: 'ice cream',
                amount: 100
            }]
    }



    const currentUser = 'Jose'

    const [active, setActive] = useState('Public');

    let publicTransactions = true;

    if (active === 'Public') {
        publicTransactions = true
    }
    else {
        publicTransactions = false
    }


    return (
        <>
            <ToggleGroup active={active} setActive={setActive} />

            {
                publicTransactions ?
                    (transactions.public.map(transaction => {
                        return (
                            <Transaction id={transaction.transaction_id} recipient={transaction.recipient} giver={transaction.giver} message={transaction.message} publicT={publicTransactions} currentUser={currentUser} />
                        )
                    })
                    )
                    :
                    (transactions.private.map(transaction => {
                        return (
                            <Transaction id={transaction.transaction_id} recipient={transaction.recipient} message={transaction.message} amount={transaction.amount} publicT={publicTransactions} currentUser={currentUser} giver={transaction.giver} />
                        )
                    }))
            }

        </>
    )
}

export default Transactions