import {useEffect, useContext, useState} from 'react';

import {preventNegativeValues} from "../utils/components/preventNegativeValues.jsx";

import {ConvertCryptoContext} from "../context/ConvertCryptoContext/ConvertCryptoContext.jsx";

function CryptoConvert({coins}) {
    const {
        handleCryptoSelectChange,
        handleCryptoAmountChange,
        selectedCrypto,
        cryptoAmount,
        cryptoData,
        fetchData,
    } = useContext(ConvertCryptoContext)

    useEffect(() => {
        fetchData();
    }, [selectedCrypto]);


    return (
        <div>
            <div>
            </div>
            <label className='inline-block w-[150px] text-lg'>
                Crypto:
                <select className="select select-success w-full max-w-xs"
                        value={selectedCrypto}
                        onChange={handleCryptoSelectChange}
                >
                    {coins.map(({id,symbol}) => {
                        return(
                            <option
                                key={symbol}
                                value={id}>{id}</option>
                        )
                    })}
                </select>
            </label>
            <br />
            <label className='inline-block w-[150px] text-lg pb-4'>
                Amount:
                <input className="input input-bordered input-success w-full max-w-xs"
                       type='number'
                       min={0}
                       step={1}
                       maxLength={5}
                       value={cryptoAmount}
                       onKeyDown={preventNegativeValues}
                       onChange={handleCryptoAmountChange} />
            </label>
            <br />
            <p className='text-lg'>
                {cryptoAmount}  {selectedCrypto.toUpperCase()} = $
                {cryptoData[selectedCrypto]?.usd ? (cryptoData[selectedCrypto].usd * cryptoAmount).toFixed(2) : '...'}
            </p>

        </div>
    );
}

export default CryptoConvert;