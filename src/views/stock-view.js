import * as React from "react";
import { Link } from "gatsby";
import PriceTime from "../components/price-time";
import moment from "moment";

function StockView({ stock }) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>
          {stock.sid} {stock.name}
        </h1>
        <p>
          {stock.ipoDate} {stock.market}
        </p>
        <p>{stock.industry}</p>
        {stock.dailyPrice !== null && (
          <React.Fragment>
            <p>{stock.dailyPrice.Open}</p>
            <p>{stock.dailyPrice.Close}</p>
            <p>{stock.dailyPrice.Max}</p>
            <p>{stock.dailyPrice.Min}</p>
            <p>{stock.dailyPrice.Change}</p>
            <p>{stock.dailyPrice.TradeVolume}</p>
            <p>{stock.dailyPrice.TradeValue}</p>
            <p>{stock.dailyPrice.Transaction}</p>
            <p>
              {(
                stock.dailyPrice.TradeValue / stock.dailyPrice.TradeVolume
              ).toFixed(2)}
            </p>
            <p>{moment(stock.dailyPrice.DateStr).format("YYYY/MM/DD")}</p>
            <p>
              {moment(stock.dailyPrice.DateStr)
                .add(7, "d")
                .format("YYYY-MM-DD")}
            </p>
            發行資本額, 價量變化, 本益比, 殖利率（註名財報日期）
            <p>{stock.dailyPrice.PBRatio}</p>
            <p>{stock.dailyPrice.PERatio}</p>
            <p>{stock.dailyPrice.Yield}</p>
            <p>{stock.dailyPrice.IntYear}</p>
          </React.Fragment>
        )}
      </main>
      <PriceTime></PriceTime>
      <footer></footer>
    </div>
  );
}

export default StockView;
