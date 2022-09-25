import './transactions-page-styles.css'
import { useState } from 'react';
import { act } from 'react-test-renderer';


export function ToggleGroup(props) {

    const { active, setActive } = props

    const buttonNames = ['Public', 'Mine'];

    return (
        <div className='Header' data-testid='Header'>
            {buttonNames.map(element => {
                return <button key={element} data-testid={element} className={active === element ? 'Active' : 'Inactive'} onClick={() => setActive(element)}>{element}</button>
            })}
        </div>
    )
}

export function Transaction(props) {

    const { id, recipient, giver, message, publicT, amount, currentUser } = props;

    let isRecieving = null

    if (currentUser === recipient) {
        isRecieving = true;
    }
    else if (currentUser === giver ) {
        isRecieving = false;
    }

    return (
        <div key={id}>
            <div className='flex'>
                <div className='item'>

                    <div className='info'>
                        <h5 data-testid={giver}>{publicT ? (`${giver} payed ${recipient}`) : isRecieving ? (`${giver} payed You`) : (`You payed ${recipient}`)}</h5>
                        <p className='msg' data-testid={message}>{message}</p>
                        <p className={publicT ? null : isRecieving ? ('plus') : ('minus')}>{publicT ? null : isRecieving ? `+$${amount}` : `-$${amount}`}</p>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default { Transaction, ToggleGroup };