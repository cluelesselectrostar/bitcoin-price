import Prices from '../component/Prices';
import {useState} from 'react';

function LivePricePage() {
    const [gbp, setGbp] = useState(null)

    function refreshPrices() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then((json) => {
            setGbp(json.bpi.GBP.rate)
        })
    }

    return (
        <div>
            <h1>Live bitcoin price</h1>
            <Prices usd = {123} eur={1234 }gbp={gbp}/>
            <button onClick={refreshPrices}> Refresh  prices</button>
        </div>
    )
}

export default LivePricePage;