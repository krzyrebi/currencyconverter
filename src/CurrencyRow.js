import React from 'react';

const CurrencyRow = (props) => {
    return (
        <div>
            <input type='number' className='input' value={props.amount} onChange={props.onChangeAmount} />
            <select value={props.selectedCurrency} onChange={props.onChangeCurrency}>
                {props.currencyOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                )
                )}
            </select >
        </div >
    )
}

export default CurrencyRow;