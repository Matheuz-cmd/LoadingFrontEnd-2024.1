

export default function MarketMovers () {
    return(
        <div className="market-movers">
            <table>
                <caption>
                    <h2>Market Movers</h2>
                </caption>
                <thead>
                    <tr className="market-movers-tab">
                        <th>Stocks</th>
                        <th>Etfs</th>
                        <th>Reits</th>
                    </tr>
                    <tr className="table-sub-header">
                        <th>TICKER</th>
                        <th>VOLUME</th>
                        <th>BID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BBAS3</td>
                        <td>5.00M</td>
                        <td>R$ 27,00</td>
                    </tr>
                    <tr>
                        <td>VALE3</td>
                        <td>10.00M</td>
                        <td>R$ 60,00</td>
                    </tr>
                    <tr>
                        <td>BBAS3</td>
                        <td>5.00M</td>
                        <td>R$ 27,00</td>
                    </tr>
                    <tr>
                        <td>VALE3</td>
                        <td>10.00M</td>
                        <td>R$ 60,00</td>
                    </tr>
                    <tr>
                        <td>BBAS3</td>
                        <td>5.00M</td>
                        <td>R$ 27,00</td>
                    </tr>
                </tbody>
            </table>
            <div class="table-footer">
                <span>*Volume in $USD</span>
            </div>
        </div>
    )
}