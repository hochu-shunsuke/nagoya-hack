import type { Event, EventProposal } from "./types"

export const upcomingEvents: Event[] = [
  {
    id: "nagoya-hack-2025-spring",
    title: "NagoyaHack 2025 春",
    date: "2025年5月10日-11日",
    location: "名古屋市中区栄",
    description:
      "名古屋の学生のためのハッカソンイベント。アイデアを形にし、技術を競い合おう。テーマは「地域社会の課題解決」です。",
    image: "/placeholder.svg?height=200&width=400",
    capacity: 100,
    registrationUrl: "https://example.com/register",
    requirements: "名古屋近郊の大学・専門学校に通う学生であること。プログラミング経験は問いません。",
    additionalInfo: "宿泊施設は提供されませんが、会場内に仮眠スペースを用意しています。",
    schedule: {
      "1日目 - 5月10日（土）": [
        {
          time: "9:00",
          title: "受付開始",
          description: "参加者登録と名札の配布",
        },
        {
          time: "10:00",
          title: "オープニングセレモニー",
          description: "イベント説明とスポンサー紹介",
        },
        {
          time: "11:00",
          title: "チーム形成",
          description: "アイスブレイクとチームビルディング",
        },
        {
          time: "12:00",
          title: "ランチタイム",
          description: "ケータリングによる昼食",
        },
        {
          time: "13:00",
          title: "ハッキング開始",
          description: "開発スタート",
        },
        {
          time: "18:00",
          title: "夕食",
          description: "ケータリングによる夕食",
        },
        {
          time: "21:00",
          title: "中間発表",
          description: "進捗状況の共有",
        },
      ],
      "2日目 - 5月11日（日）": [
        {
          time: "9:00",
          title: "朝食",
          description: "軽食の提供",
        },
        {
          time: "12:00",
          title: "ハッキング終了",
          description: "開発終了、提出準備",
        },
        {
          time: "13:00",
          title: "ランチタイム",
          description: "ケータリングによる昼食",
        },
        {
          time: "14:00",
          title: "プレゼンテーション",
          description: "各チーム5分間の発表",
        },
        {
          time: "16:00",
          title: "審査と表彰式",
          description: "優勝チームの発表と賞品授与",
        },
        {
          time: "17:00",
          title: "クロージング",
          description: "閉会の挨拶と記念撮影",
        },
      ],
    },
    prizes: [
      {
        title: "最優秀賞",
        description: "賞金30万円と企業インターンシップ",
      },
      {
        title: "技術賞",
        description: "賞金10万円と最新テクノロジーガジェット",
      },
      {
        title: "アイデア賞",
        description: "賞金5万円とクラウドサービスクレジット",
      },
    ],
  },
  {
    id: "nagoya-hack-2025-summer",
    title: "NagoyaHack 2025 夏",
    date: "2025年8月15日-16日",
    location: "名古屋市千種区",
    description: "夏休み特別企画！学生エンジニアのためのサマーハッカソン。テーマは「次世代モビリティ」です。",
    image: "/placeholder.svg?height=200&width=400",
    capacity: 80,
    registrationUrl: "https://example.com/register-summer",
    requirements: "高校生、大学生、専門学校生が対象です。",
    schedule: {
      "1日目 - 8月15日（金）": [
        {
          time: "10:00",
          title: "受付開始",
          description: "参加者登録",
        },
        {
          time: "11:00",
          title: "オープニング",
          description: "イベント説明",
        },
        {
          time: "12:00",
          title: "チーム形成",
          description: "チームビルディング",
        },
        {
          time: "13:00",
          title: "ハッキング開始",
          description: "開発スタート",
        },
      ],
      "2日目 - 8月16日（土）": [
        {
          time: "12:00",
          title: "ハッキング終了",
          description: "開発終了",
        },
        {
          time: "14:00",
          title: "発表会",
          description: "成果発表",
        },
        {
          time: "16:00",
          title: "表彰式",
          description: "優勝チーム発表",
        },
      ],
    },
    prizes: [
      {
        title: "グランプリ",
        description: "賞金20万円",
      },
      {
        title: "準グランプリ",
        description: "賞金10万円",
      },
    ],
  },
  {
    id: "nagoya-hack-2025-autumn",
    title: "NagoyaHack 2025 秋",
    date: "2025年10月25日-26日",
    location: "名古屋市中村区",
    description:
      "秋の特別企画。テーマは「AIと未来社会」です。最新のAI技術を活用した革新的なプロジェクトを開発しましょう。",
    image: "/placeholder.svg?height=200&width=400",
    capacity: 120,
    registrationUrl: "https://example.com/register-autumn",
    additionalInfo: "AIに関する基礎知識があると望ましいですが、初心者向けのワークショップも用意しています。",
  },
]

export const pastEvents: Event[] = [
  {
    id: "nagoya-hack-2024-winter",
    title: "NagoyaHack 2024 冬",
    date: "2024年1月20日-21日",
    location: "名古屋市熱田区",
    description:
      "「スマートシティ」をテーマにした2日間のハッカソン。都市の課題をテクノロジーで解決するアイデアが集まりました。",
    image: "/placeholder.svg?height=200&width=400",
    capacity: 90,
    isPast: true,
    schedule: {
      "1日目 - 1月20日（土）": [
        {
          time: "9:00",
          title: "受付開始",
          description: "参加者登録",
        },
        {
          time: "10:00",
          title: "オープニング",
          description: "イベント説明",
        },
        {
          time: "13:00",
          title: "ハッキング開始",
          description: "開発スタート",
        },
      ],
      "2日目 - 1月21日（日）": [
        {
          time: "12:00",
          title: "ハッキング終了",
          description: "開発終了",
        },
        {
          time: "14:00",
          title: "発表会",
          description: "成果発表",
        },
      ],
    },
    prizes: [
      {
        title: "最優秀賞",
        description: "賞金20万円",
      },
      {
        title: "技術賞",
        description: "賞金10万円",
      },
    ],
  },
  {
    id: "tech-workshop-2024-autumn",
    title: "テックワークショップ 2024 秋",
    date: "2024年9月15日",
    location: "名古屋市中区",
    description: "Web3とブロックチェーン技術に焦点を当てた1日集中ワークショップ。基礎から応用まで幅広く学びました。",
    image: "/placeholder.svg?height=200&width=400",
    isPast: true,
    schedule: {
      "9月15日（日）": [
        {
          time: "10:00",
          title: "基調講演",
          description: "Web3の現状と未来",
        },
        {
          time: "11:00",
          title: "ハンズオンセッション1",
          description: "スマートコントラクト入門",
        },
        {
          time: "13:00",
          title: "ハンズオンセッション2",
          description: "dApp開発実践",
        },
        {
          time: "15:00",
          title: "パネルディスカッション",
          description: "Web3ビジネスの可能性",
        },
      ],
    },
  },
  {
    id: "nagoya-hack-2024-summer",
    title: "NagoyaHack 2024 夏",
    date: "2024年7月27日-28日",
    location: "名古屋市千種区",
    description:
      "「サステナブルテック」をテーマにした夏のハッカソン。環境問題の解決に貢献するプロジェクトが多数生まれました。",
    image: "/placeholder.svg?height=200&width=400",
    isPast: true,
  },
  {
    id: "startup-meetup-2024-spring",
    title: "スタートアップミートアップ 2024 春",
    date: "2024年4月20日",
    location: "名古屋市中村区",
    description:
      "名古屋のスタートアップエコシステムを盛り上げるネットワーキングイベント。多くの起業家と投資家が参加しました。",
    image: "/placeholder.svg?height=200&width=400",
    isPast: true,
  },
  {
    id: "nagoya-hack-2024-spring",
    title: "NagoyaHack 2024 春",
    date: "2024年5月18日-19日",
    location: "名古屋市中区栄",
    description:
      "「ヘルスケアイノベーション」をテーマにした春のハッカソン。健康管理や医療に関する革新的なソリューションが生まれました。",
    image: "/placeholder.svg?height=200&width=400",
    isPast: true,
  },
  {
    id: "tech-workshop-2024-winter",
    title: "テックワークショップ 2024 冬",
    date: "2024年2月11日",
    location: "名古屋市東区",
    description: "AIと機械学習に焦点を当てた1日集中ワークショップ。実践的なスキルを身につける機会となりました。",
    image: "/placeholder.svg?height=200&width=400",
    isPast: true,
  },
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

