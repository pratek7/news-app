import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../response.json";

async function Homepage() {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  //  Checkig wheather the data is coming or not through API
  //  console.log(news);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
