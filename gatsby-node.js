exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      """
      Stock information
      """
      type Stock implements Node @dontInfer {
        sid: String!
        name: String!
        # https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/
        # ipoDate: Date! @dateformat(formatString: "YYYY/MM/DD")
        ipoDate: String!
        market: String!
        industry: String!
        stype: String!
        subtype: String!
        dailyPrice: DailyPrice @link(by: "stockId", from: "sid") # foreign-key relation by custom field
        dailyChip: DailyChip @link(by: "stockId", from: "sid") # foreign-key relation by custom field
      }

      type DailyPrice implements Node @dontInfer {
        stockId: String!
        StockName: String!
        TradeVolume: Int!
        Transaction: Int!
        TradeValue: Float!
        Open: Float!
        Max: Float!
        Min: Float!
        Close: Float!
        Change: Float!
        LastBuy: Float!
        LastBuyVolume: Int!
        LastSell: Float!
        LastSellVolume: Int!
        Close: Float!
        DateStr: String!
        Yield: Float!
        IntYear: Int!
        PERatio: Float!
        PBRatio: Float!
      }

      type DailyChip implements Node @dontInfer {
        stockId: String!
        StockName: String!
        ForeignBuyVolume1: Float!
        ForeignSellVolume1: Float!
        ForeignNetVolume1: Float!
        ForeignBuyVolume2: Float!
        ForeignSellVolume2: Float!
        ForeignNetVolume2: Float!
        LocalTrustBuyVolume: Float!
        LocalTrustSellVolume: Float!
        LocalTrustNetVolume: Float!
        LocalSecuNetVolume: Float!
        LocalSecuBuyVolume1: Float!
        LocalSecuSellVolume1: Float!
        LocalSecuNetVolume1: Float!
        LocalSecuBuyVolume2: Float!
        LocalSecuSellVolume2: Float!
        LocalSecuNetVolume2: Float!
        NetVolume: Float!
        DateStr: String!
      }
    `
    createTypes(typeDefs)
  }