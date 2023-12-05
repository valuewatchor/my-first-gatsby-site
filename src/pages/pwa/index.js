import * as React from "react";
import { graphql, Link } from "gatsby";

function Index({ data }) {
  return (
    <div className="wrapper">
      <main>
        <h1>PWA</h1>
      </main>
    </div>
  );
}

export default Index;

// export const query = graphql`
//   {
//     stocks: allStock(
//       sort: { sid: ASC }
//       filter: { stype: { eq: "stock" }, subtype: { eq: "" } }
//     ) {
//       nodes {
//         sid
//         industry
//         ipoDate
//         market
//         name
//         stype
//         subtype
//       }
//     }
//   }
// `;
