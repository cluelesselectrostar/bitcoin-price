function Prices(props) {
    const usd = props.usd;
    const gbp = props.gbp;
    const eur = props.eur;
    return (
        <div>
            <p>
                {usd} us dollars
            </p>
            <p>
                {eur} euros
            </p>
            <p>
                {gbp} great british pounds
            </p>
        </div>       
    )
}

export default Prices;