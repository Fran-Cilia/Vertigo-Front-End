import { Transaction, ToggleGroup, MyTransactions } from "../../Pages/TransactionsPage/TransactionsPage"
import { useEffect, useState } from "react";
import Axios from "axios";

function Transactions() {

    //TODO: When we have login functionality make current user not be hardcoded
    const currentUser = 'Fran-Cilia'

    const [publicRecords, setPublicRecords] = useState([]);

    const [privateRecords, setPrivateRecords] = useState([]);

    const [active, setActive] = useState('Public');

    let publicTransactions = true;

    //TODO: save request, get it to work with the page, change to async/await
    useEffect(() => {
        Axios({
            method: "GET",
            url: "http://localhost:3010/transactions/1",
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => {
            setPublicRecords(res.data.public);
            setPrivateRecords(res.data.private);
            console.log(res.data);
          }).catch(err => {
            console.log(err);
          });
    }, [])

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
                    (publicRecords.map(transaction => {
                        return (
                            <Transaction id={transaction.transaction_id} recipient={transaction.recipient} giver={transaction.giver} message={transaction.message} publicT={publicTransactions} currentUser={currentUser} />
                        )
                    })
                    )
                    :
                    (privateRecords.map(transaction => {
                        return (
                            <Transaction id={transaction.transaction_id} recipient={transaction.recipient} message={transaction.message} amount={transaction.amount} publicT={publicTransactions} currentUser={currentUser} giver={transaction.giver} />
                        )
                    }))
            }

        </>
    )
}

export default Transactions