export type DayStatus = "open" | "closed" | "soldout";

export type BusinessDay = {
  date: string;
  status: DayStatus;
  note?: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const heroCopy = {
  catch: "今日のご褒美に、ちょうどいい甘さ。",
  sub: "焼き菓子とケーキのお店 Impulsion",
};

export const businessNotice = {
  statusLabel: "本日営業",
  detail: "11:00 - 売り切れ次第終了",
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
    name: "マカロン",
    description: "季節のフレーバーを中心に、口どけの軽さを大切にした定番人気。",
    image: "/images/product-macaron.svg",
  },
  {
    id: "baked",
    name: "焼き菓子",
    description: "毎朝焼き上げるフィナンシェ、マドレーヌ、カヌレ。手土産にも好評です。",
    image: "/images/product-baked.svg",
  },
  {
    id: "cake",
    name: "ケーキ",
    description: "その日のショーケース情報を営業日セクションで更新。売り切れ情報も掲載します。",
    image: "/images/product-cake.svg",
  },
];

export const assurancePoints = [
  "初めてのご来店でも、商品選びをスタッフが丁寧にご案内します。",
  "売り切れ状況をサイトで確認できるため、安心してご来店いただけます。",
  "手土産向けの詰め合わせ相談にも対応。用途に合わせた提案が可能です。",
];

export const storeInfo = {
  address: "大阪府東大阪市菱屋東 1-1-31 フローラ21",
  businessHours: "11:00 - 売り切れ次第終了（不定休）",
  phone: "電話番号は準備中（Instagram DMでお問い合わせください）",
  station: "河内花園駅から徒歩約3分",
  mapUrl: "https://maps.google.com/?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E6%9D%B1%E5%A4%A7%E9%98%AA%E5%B8%82%E8%8F%B1%E5%B1%8B%E6%9D%B11-1-31",
  instagram: "https://www.instagram.com/impulsion_2025/",
};
