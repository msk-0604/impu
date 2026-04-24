import { createClient } from "microcms-js-sdk";

export type NewsItem = {
  id: string;
  title: string;
  publishedAt?: string;
};

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

const client =
  serviceDomain && apiKey
    ? createClient({
        serviceDomain,
        apiKey,
      })
    : null;

const fallbackNews: NewsItem[] = [
  { id: "1", title: "4/24 本日営業しています（売り切れ次第終了）" },
  { id: "2", title: "母の日ギフトのご予約受付を開始しました" },
  { id: "3", title: "フィナンシェは毎日11:00ごろ焼き上がります" },
];

export async function getNews(): Promise<NewsItem[]> {
  if (!client) return fallbackNews;

  try {
    const response = await client.getList<NewsItem>({
      endpoint: "news",
      queries: { limit: 3, orders: "-publishedAt" },
      customRequestInit: {
        next: { revalidate: 300 },
      },
    });

    return response.contents.length > 0 ? response.contents : fallbackNews;
  } catch {
    return fallbackNews;
  }
}
