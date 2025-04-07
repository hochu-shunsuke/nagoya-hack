import type { EventType } from "@/types/event"

export const events: EventType[] = [
  {
    id: "nagoya-hack-2025",
    title: "NagoyaHack 2025",
    description: "名古屋の学生のためのハッカソンイベント。アイデアを形にし、技術を競い合おう。",
    date: "2025年5月10日-11日",
    location: "名古屋市中区栄",
    image: "/placeholder.svg?height=400&width=600",
    registrationUrl: "/register/nagoya-hack-2025",
    websiteUrl: "/events/nagoya-hack-2025",
    details:
      "NagoyaHack 2025は、名古屋地域の学生を対象としたハッカソンイベントです。24時間という限られた時間の中で、チームでアイデアを出し合い、プロトタイプを開発し、プレゼンテーションを行います。今年のテーマは「地域社会の課題解決」です。",
    schedule: [
      {
        time: "5月10日 9:00",
        title: "受付開始",
        description: "参加者登録と名札の配布",
      },
      {
        time: "5月10日 10:00",
        title: "オープニングセレモニー",
        description: "イベント説明とスポンサー紹介",
      },
      {
        time: "5月10日 11:00",
        title: "チーム形成",
        description: "アイスブレイクとチームビルディング",
      },
      {
        time: "5月10日 13:00",
        title: "ハッキング開始",
        description: "開発スタート",
      },
      {
        time: "5月11日 12:00",
        title: "ハッキング終了",
        description: "開発終了、提出準備",
      },
      {
        time: "5月11日 14:00",
        title: "プレゼンテーション",
        description: "各チーム5分間の発表",
      },
      {
        time: "5月11日 16:00",
        title: "審査と表彰式",
        description: "優勝チームの発表と賞品授与",
      },
    ],
  },
  {
    id: "tech-workshop-2025",
    title: "テックワークショップ 2025",
    description: "最新技術を学べる1日集中ワークショップ。AI、ブロックチェーン、Web開発など様々なトラックをご用意。",
    date: "2025年6月15日",
    location: "名古屋市中村区名駅",
    image: "/placeholder.svg?height=400&width=600",
    registrationUrl: "/register/tech-workshop-2025",
    websiteUrl: "/events/tech-workshop-2025",
    details:
      "テックワークショップ 2025は、最新の技術トレンドを学べる1日集中型のワークショップイベントです。初心者から上級者まで、様々なレベルに合わせたコンテンツをご用意しています。",
    schedule: [
      {
        time: "9:30",
        title: "受付開始",
        description: "参加者登録と資料配布",
      },
      {
        time: "10:00",
        title: "基調講演",
        description: "テクノロジー業界の最新トレンド",
      },
      {
        time: "11:00",
        title: "ワークショップ セッション1",
        description: "AIトラック / Webトラック / ブロックチェーントラック",
      },
      {
        time: "12:30",
        title: "ランチタイム",
        description: "ネットワーキングランチ",
      },
      {
        time: "13:30",
        title: "ワークショップ セッション2",
        description: "AIトラック / Webトラック / ブロックチェーントラック",
      },
      {
        time: "15:30",
        title: "パネルディスカッション",
        description: "業界リーダーによるキャリアトーク",
      },
      {
        time: "17:00",
        title: "ネットワーキングセッション",
        description: "参加者同士の交流会",
      },
    ],
  },
  {
    id: "startup-meetup-2025",
    title: "スタートアップミートアップ 2025",
    description: "名古屋のスタートアップエコシステムを盛り上げるネットワーキングイベント。投資家との出会いも。",
    date: "2025年7月5日",
    location: "名古屋市東区葵",
    image: "/placeholder.svg?height=400&width=600",
    registrationUrl: "/register/startup-meetup-2025",
    websiteUrl: "/events/startup-meetup-2025",
    details:
      "スタートアップミートアップは、名古屋地域のスタートアップエコシステムを活性化するためのネットワーキングイベントです。起業家、投資家、学生、企業の方々が集まり、新しいビジネスチャンスを探ります。",
    schedule: [
      {
        time: "18:00",
        title: "開場・受付開始",
        description: "名刺交換タイム",
      },
      {
        time: "18:30",
        title: "オープニングトーク",
        description: "主催者挨拶とイベント説明",
      },
      {
        time: "19:00",
        title: "ピッチセッション",
        description: "スタートアップ5社によるピッチ（各5分）",
      },
      {
        time: "19:30",
        title: "パネルディスカッション",
        description: "「地方からグローバルへ：名古屋発スタートアップの可能性」",
      },
      {
        time: "20:15",
        title: "ネットワーキングタイム",
        description: "軽食と飲み物を楽しみながらの交流会",
      },
      {
        time: "21:30",
        title: "クロージング",
        description: "次回イベントの案内",
      },
    ],
  },
]

