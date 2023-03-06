
import Icons from "../data/icons.jsx";
import Button from "./button.jsx";
import {Coin} from "../../routes/index.jsx";
import {Link} from "react-router-dom";

const ListCoins = ({coin}) => {
    return(

                <tr key={coin.id} className='border-b '>
                    <td className='p-5 flex items-center'>
                        <img className='w-8' src={coin.image} alt={coin.name}/>
                        <Link
                            to={`/coin/${coin.id}`}
                            element={<Coin/>}>
                            {coin.name}
                        </Link>
                    </td>
                    <td>{coin.current_price}
                        <span className='absolute ml-1 text-[#A1A1AA] text-sm'>AUD</span>
                    </td>
                    <td className={`${!coin.price_change_24h >= coin.price_change_24h ? 'text-red-600 flex items-center hidden md:flex' : 'text-lightGreen flex items-center hidden md:flex'}`}>
                        {coin.price_change_24h.toFixed(4)}% <Icons.upArrow/>
                    </td>
                    <td className='hidden md:table-cell'>{coin.market_cap}</td>
                    <td className='p-5 md:p-0 md:table-cell'>
                        <Button
                            href='/'
                            children='Buy'
                            version='bg-lightGreen'/>
                    </td>
                </tr>

    )
}
export default ListCoins