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
                <p className='text-lg absolute'>
                    {cryptoAmount}  {selectedCrypto.toUpperCase()} = $
                    {cryptoData[selectedCrypto]?.usd ? (cryptoData[selectedCrypto].usd * cryptoAmount).toFixed(2) : '...'}
                </p>
            </div>
        </div>
    );
}

export default CryptoConvert;