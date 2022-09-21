import './transactions-page-styles.css'
import { useState } from 'react';
import { act } from 'react-test-renderer';

export function TransactionsLayout() {


    function ToggleGroup() {
        const buttonNames = ['Public', 'Friends'];
        const [active, setActive] = useState(buttonNames[0]);

        return (
            <div className='Header' data-testid='Header'>
                {buttonNames.map(element => {
                    return <button key={element} data-testid={element} className={active === element ? 'Active' : 'Inactive'} onClick={() => setActive(element)}>{element}</button>
                })}
            </div>
        )
    }


    return (
        <ToggleGroup/>
    )

}

export default TransactionsLayout;