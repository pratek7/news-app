import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
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
        countries: "us"
        sort: "published_desc"
        keywords: $keywords
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
  const res = await fetch(
    "https://tabira.stepzen.net/api/knotted-seagull/__graphql",
    {
      method: "POST",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  // console.log(
  //   "LOADING NEW DATA FROM API FOR CATEGORY >>>>>",
  //   category,
  //   keywords
  // );
  const newsResponse = await res.json();

  //  Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery);
  // return news
  return news;
};
export default fetchNews;
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=7460d21afebd2755d1909cfe78a58fe4&sources=business,sports"
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=efe41cd0a3534189792d3a1379c4e204&countries=us%2Cgb,nep&limit=100&offset=0&sort=published_desc"
// export const revalidate = 60;
