import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const PriceTime = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      allOperation(
        filter: {
          parent: { internal: { description: { regex: "/daily-op/" } } }
        }
      ) {
        nodes {
          # priceDate
          updateTime
        }
      }
    }
  `);

  return (
    <div>
      {/*
        <div>
          股價日期：<priceDate>{data.allOperation.nodes[0].priceDate}</priceDate>
        </div>
         */}
      <div>
        更新時間：
        <updateTime>{data.allOperation.nodes[0].updateTime}</updateTime>
      </div>
    </div>
  );
};

export default PriceTime;
