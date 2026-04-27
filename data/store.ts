export type DayStatus = "open" | "closed" | "soldout";

export type BusinessDay = {
  date: string;
  status: DayStatus;
  note?: string;
};

export type ProductCategory = {
  id: string;
  label: string;
  name: string;
  copy: string;
  image: string;
};

export type UsageScene = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type InstagramMoodItem = {
  id: string;
  title: string;
  caption: string;
  image: string;
};

export const brandStory = {
  title: "小さな幸せを、ひとつずつ。",
  text: "焼きたての香り、季節の素材、手に取った時のうれしさ。Impulsionのお菓子は、日常の中に少しだけ特別な時間を届けます。",
  image: "/images/brand-story.svg",
};

export const heroCopy = {
  catch: "今日のご褒美に、焼きたての甘さを。",
  sub: "焼き菓子とケーキのお店 Impulsion",
};

export const businessNotice = {
  statusLabel: "本日営業",
  detail: "11:00〜18:00",
  caution: "※ 焼き上がり状況により、閉店時間が早まる場合があります。",
};

export const businessCalendar: BusinessDay[] = [
  { date: "4/24(金)", status: "open", note: "フィナンシェ焼き上がり 11:00" },
  { date: "4/25(土)", status: "open", note: "母の日ギフト先行案内" },
  { date: "4/26(日)", status: "closed", note: "お休み" },
  { date: "4/27(月)", status: "closed", note: "仕込み日" },
  { date: "4/28(火)", status: "soldout", note: "15:10 売り切れ" },
  { date: "4/29(水)", status: "open", note: "こどもの日ギフト受付開始" },
  { date: "4/30(木)", status: "open", note: "通常営業" },
];

export const products: ProductCategory[] = [
  {
    id: "macaron",
    label: "Macaron",
    name: "マカロン",
    copy: "軽やかな口どけと、季節の香り。",
    image: "/images/macaron.svg",
  },
  {
    id: "baked",
    label: "Baked sweets",
    name: "焼き菓子",
    copy: "手土産にも、自分へのご褒美にも。",
    image: "/images/matcha-muffin.png",
  },
  {
    id: "cake",
    label: "Cake",
    name: "ケーキ",
    copy: "その日のショーケースから選ぶ楽しみ。",
    image: "/images/cake.svg",
  },
  {
    id: "gift",
    label: "Gift",
    name: "ギフト",
    copy: "大切な人へ、やさしい甘さを。",
    image: "/images/gift.svg",
  },
];

export const assurancePoints = [
  "初めてのご来店でも、商品選びをスタッフが丁寧にご案内します。",
  "売り切れ状況をサイトで確認できるため、安心してご来店いただけます。",
  "手土産向けの詰め合わせ相談にも対応。用途に合わせた提案が可能です。",
];

export const firstVisitPoints = [
  "お一人様でもお気軽にご来店いただけます",
  "手土産や差し入れにもおすすめです",
  "売り切れ次第終了となります",
  "営業日はInstagramでもご確認いただけます",
];

export const usageScenes: UsageScene[] = [
  {
    id: "reward",
    title: "自分へのご褒美に",
    description: "頑張った日の終わりに、甘い余韻を。",
    image: "/images/instagram-1.svg",
  },
  {
    id: "gift",
    title: "手土産に",
    description: "気持ちが伝わる、やさしい詰め合わせ。",
    image: "/images/instagram-5.svg",
  },
  {
    id: "special",
    title: "大切な人への贈り物に",
    description: "記念日に寄り添う、上品な甘さ。",
    image: "/images/instagram-6.svg",
  },
  {
    id: "holiday",
    title: "休日のおやつに",
    description: "午後の光に似合う、小さな幸せ。",
    image: "/images/instagram-3.svg",
  },
];

export const instagramMoodItems: InstagramMoodItem[] = [
  { id: "i1", title: "Macaron", caption: "色とりどりの軽やかな口どけ。", image: "/images/instagram-2.svg" },
  { id: "i2", title: "Cake", caption: "季節の果実を使ったショーケース。", image: "/images/instagram-1.svg" },
  { id: "i3", title: "Baked sweets", caption: "焼きたての香りを、そのまま。", image: "/images/matcha-muffin.png" },
  { id: "i4", title: "Gift", caption: "手土産に選ばれる定番。", image: "/images/instagram-5.svg" },
  { id: "i5", title: "Calendar", caption: "営業日と売り切れ情報を更新。", image: "/images/instagram-4.svg" },
  { id: "i6", title: "Shop mood", caption: "ふらっと立ち寄れる小さなお店。", image: "/images/instagram-6.svg" },
];

export const storeInfo = {
  address: "大阪府東大阪市菱屋東 1-1-31 フローラ21",
  businessHours: "11:00 - 売り切れ次第終了（不定休）",
  phone: "電話番号は準備中（Instagram DMでお問い合わせください）",
  station: "河内花園駅から徒歩約3分",
  mapUrl: "https://maps.google.com/?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E6%9D%B1%E5%A4%A7%E9%98%AA%E5%B8%82%E8%8F%B1%E5%B1%8B%E6%9D%B11-1-31",
  instagram: "https://www.instagram.com/impulsion_2025/",
};
