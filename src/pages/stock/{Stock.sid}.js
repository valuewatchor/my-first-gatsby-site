import * as React from "react";
import { graphql } from "gatsby";
import StockView from "../../views/stock-view";
import ChipView from "../../views/chip-view";

function Stock(props) {
  const { stock } = props.data;
  return (
    <div>
      <StockView stock={stock} />
      <ChipView stock={stock} />
    </div>
  );
}

export default Stock;

export const query = graphql`
  query ($id: String!) {
    stock(id: { eq: $id }) {
      sid
      name
      # https://www.gatsbyjs.com/docs/graphql-reference/#dates
      # https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/#formatting-dates
      # ipoDate(formatString: "MMMM Do, YYYY")
      ipoDate
      market
      industry
      stype
      subtype
      dailyPrice {
        StockName
        Transaction
        TradeVolume
        TradeValue
        Open
        Close
        Max
        Min
        Change
        LastBuy
        LastBuyVolume
        LastSell
        LastSellVolume
        DateStr
        PBRatio
        PERatio
        Yield
        IntYear
      }
      dailyChip {
        ForeignBuyVolume1
        ForeignBuyVolume2
        ForeignSellVolume1
        ForeignSellVolume2
        ForeignNetVolume1
        ForeignNetVolume2

        LocalTrustBuyVolume
        LocalTrustSellVolume
        LocalTrustNetVolume

        LocalSecuBuyVolume1
        LocalSecuSellVolume1
        LocalSecuNetVolume1

        LocalSecuBuyVolume2
        LocalSecuSellVolume2
        LocalSecuNetVolume2

        LocalSecuNetVolume
        
        NetVolume
        DateStr
      }
    }
  }
`;
