// chip analysis 籌碼面分析
// 若要進行籌碼面分析，當然一定要觀察影響台灣股市最大的三大法人啦！
// 再來可以看一下散戶以及衍生性商品市場的動向。

// institutional investors 三大法人
// foreign investors 外資：使用非國內法人、自然人資金進行投資，統稱為「外資」。
// investment trust 投信：在國內發行基金，並使用這些資金進行投資的業者。
// dealer 自營商：使用自己公司資金做證券投資，又分為「專業自營商」或「證券公司自營部」。

// 最主要影響台灣股市的指標為：外資（個別公司需先觀察他三大法人佔比）

// margin trading  信用交易
// 融資：散戶借錢去買股票，也就是覺得目前股票太便宜，未來會上漲。
// 融券：散戶先借股票去賣，也就是覺得目前股價太貴，未來會下跌。

// 剛才三大法人是看「大戶」們的行蹤，而融資融券則主要是反應「散戶」對市場的預期，當融券異常增加的時候，表示該公司未來股價下跌的機率很高。不過，當一檔股票主要進出為法人時，此指標就有沒有太大的幫助哦～

import * as React from "react";
import { Link } from "gatsby";
import PriceTime from "../components/price-time";

// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
// Create our number formatter.
const formatter = new Intl.NumberFormat("zh-TW", {
  // style: 'currency',
  // currency: 'TWD',

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function ChipView({ stock }) {
  return (
    <div className="wrapper">
      <main>
        <h2>籌碼分析</h2>
        <p>
          {stock.ipoDate} {stock.market}
        </p>
        <p>
          外資買：
          {stock.dailyChip === null
            ? 0
            : Math.round(
                (stock.dailyChip.ForeignBuyVolume1 +
                  stock.dailyChip.ForeignBuyVolume2) /
                  1000
              )}{" "}
          張
        </p>
        <p>
          外資賣：
          {stock.dailyChip === null
            ? 0
            : formatter.format(
                (stock.dailyChip.ForeignSellVolume1 +
                  stock.dailyChip.ForeignSellVolume2) /
                  1000
              )}{" "}
          張
        </p>
        <p>外資買賣超</p>
        <p>外資當日交易佔比</p>

        <p>投信買</p>
        <p>投信賣</p>
        <p>投信買賣超</p>
        <p>投信當日交易佔比</p>

        <p>外資買</p>
        <p>外資賣</p>
        <p>外資買賣超</p>
        <p>當日交易佔比</p>
      </main>
      <moment>速度, 加速度, by week 圖, 期間價量變化</moment>
      <PriceTime></PriceTime>
      <footer>籌碼分析</footer>
    </div>
  );
}

export default ChipView;
