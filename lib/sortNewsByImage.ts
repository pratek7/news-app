export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news.data.filter((item) => item.image !== null);
  const newsWithoutImage = news.data.filter((item) => item.image === null);

  const sortedNewsResponse = {
    Pagination: news.Pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  };
  return sortedNewsResponse
}
