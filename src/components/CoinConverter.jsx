import {useEffect, useContext} from 'react';

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
        <div className='flex justify-center'>
            <div>
                <label className='inline-block text-lg w-full'>
                    Crypto:
                    <select className="select select-success w-60 max-w-xs w-full"
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
                <label className='inline-block text-lg pb-4 w-full'>
                    Amount:
                    <input className="input input-bordered input-success  max-w-xs w-full"
                           type='number'
                           min={0}
                           step={1}
                           maxLength={5}
                           value={cryptoAmount}
                           onKeyDown={preventNegativeValues}
                           onChange={handleCryptoAmountChange} />
                </label>
                <br />
                <div className="alert shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span> {cryptoAmount} {selectedCrypto.toUpperCase()} = $
                               {cryptoData[selectedCrypto]?.usd ? (cryptoData[selectedCrypto].usd * cryptoAmount).toFixed(2) : '...'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CryptoConvert;