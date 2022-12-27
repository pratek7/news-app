import { gql } from "graphql-request";
const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query

  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries:"us, nep"
        sort: "published_des"
        keywords: $keywords
      )(
        access_key: "tabira::stepzen.net+1000::8f5f84fdb5a210acefe8966c28873156cb1dfc8b433556242f1cbc85d454f632"
      ) {
        data {
          author
          category
          description
          country
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  // Fetch function with Next.js 13 Caching...
  const req = await fetch()
  //  Sort function by images vs not images present
  // return res
};
export default fetchNews;
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=efe41cd0a3534189792d3a1379c4e204&categories=business,sports"
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=efe41cd0a3534189792d3a1379c4e204&countries=us%2Cgb,nep&limit=100&offset=0&sort=published_desc"
