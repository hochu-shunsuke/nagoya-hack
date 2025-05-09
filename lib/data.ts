import type { Event, EventProposal } from "./types"

export const upcomingEvents: Event[] = [
  {
    id: "nagoya-hack-2025-2",
    title: "はじめてのプログラミング",
    date: "2025年5月31日",
    location: "名古屋市中区栄ナディアパーク",
    description:
      "名古屋のプログラム初心者の大学生向けイベント．プログラミングの面白さに触れながら，効果的な学びの場を提供します．",
    image: "/images/はじめてのプログラミング.png",
    capacity: 15,
    registrationUrl: "https://connpass.com/event/354470/",
    requirements: "名古屋近郊の大学・専門学校に通う学生であること。プログラミング経験は問いません。",
    additionalInfo: "パソコンをお持ちください．",
    schedule: {
      "1日目 - 5月31日（土）": [
        {
          time: "13:00",
          title: "受付開始",
          description: "参加者登録と名札の配布",
        },
        {
          time: "13:30",
          title: "イベント開始",
          description: "pc持参",
        },
        {
          time: "17:30",
          title: "イベント終了",
          description: "イベント後は交流会も(参加自由)",
        },

      ]
    },
    prizes: [

    ],
  },
]

export const pastEvents: Event[] = [
  {
    id: "nagoya-hack-2025-1",
    title: "はじめてのハッカソン",
    date: "2025年4月26日",
    location: "名古屋市中区新栄",
    description:
      "初学者から上級者まで，幅広い学生が参加したハッカソン．アルゴリズム解決をチーム対抗で行いました．",
    image: "/images/はじめてのハッカソン.jpg?width=1200",
    capacity: 20,
    isPast: true,
    schedule: {
      "1日目 - 1月20日（土）": [
        {
          time: "13:00",
          title: "受付開始",
          description: "参加者登録",
        },
        {
          time: "13:30",
          title: "オープニング",
          description: "イベント説明",
        },
        {
          time: "14:00",
          title: "ハッキング開始",
          description: "開発スタート",
        },
      ],
    },
  }
]

export const eventProposals: EventProposal[] = [
  {
    id: "proposal-1",
    title: "ゲーム開発ハッカソン",
    description:
      "48時間でゲームを開発するハッカソン。初心者から上級者まで参加可能で、Unity、Unreal Engine、Godotなどのエンジンを使用します。",
    votes: 24,
    category: "ハッカソン",
    date: "2025年11月",
  },
  {
    id: "proposal-2",
    title: "AIアプリケーション開発ワークショップ",
    description:
      "最新のAI技術を活用したアプリケーション開発を学ぶワークショップ。OpenAI APIやHugging Faceなどのツールを使用します。",
    votes: 32,
    category: "ワークショップ",
    date: "2025年9月",
  },
  {
    id: "proposal-3",
    title: "IoTデバイスハッカソン",
    description:
      "IoTデバイスを使った革新的なプロジェクトを開発するハッカソン。Raspberry PiやArduinoなどのデバイスを提供します。",
    votes: 18,
    category: "ハッカソン",
    date: "2025年10月",
  },
  {
    id: "proposal-4",
    title: "女性エンジニアのためのネットワーキングイベント",
    description:
      "テック業界で活躍する女性エンジニアのためのネットワーキングイベント。キャリア相談やメンタリングの機会も提供します。",
    votes: 27,
    category: "ネットワーキング",
    date: "2025年8月",
  },
  {
    id: "proposal-5",
    title: "ブロックチェーン技術入門セミナー",
    description:
      "ブロックチェーン技術の基礎から応用までを学ぶセミナー。実際にスマートコントラクトを作成するハンズオンも含みます。",
    votes: 15,
    category: "セミナー",
    date: "2025年12月",
  },
]

