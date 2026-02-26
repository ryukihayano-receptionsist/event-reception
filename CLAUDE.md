# 招待レセプション（event-reception）- Vercel版

## 概要
- **移管元**: WordPress（AWS Lightsail / Bitnami）
- **移管先**: Vercel（Next.js App Router + TypeScript）
- **本番URL**: https://event.receptionist.jp/
- **構成**: Vercelのみ（DB不要）

## 技術スタック
- Next.js 15 (App Router)
- TypeScript
- React 19
- 既存CSS（WordPress時代のCSS をそのまま移植・FLOCSS命名: p-*, c-*, l-*）
- Google Fonts: DM Sans, Poppins, Noto Sans JP, Roboto

## セットアップ
```bash
cd vercel/event-reception
npm install
cp .env.local.example .env.local
# .env.local に実際の値を設定
npm run dev
```

## 環境変数（.env.local）
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=   # reCAPTCHA v3 サイトキー
RECAPTCHA_SECRET_KEY=             # reCAPTCHA v3 シークレットキー
PARDOT_ENDPOINT_REQUEST=          # Pardot 資料請求用エンドポイント
PARDOT_ENDPOINT_CONTACT=          # Pardot お問い合わせ用エンドポイント
SLACK_WEBHOOK_REQUEST=            # Slack Webhook（資料請求通知用）
SLACK_WEBHOOK_CONTACT=            # Slack Webhook（お問い合わせ通知用）
```

## ディレクトリ構成
```
src/
├── app/
│   ├── layout.tsx                # ルートレイアウト（GTM-MM8R64TR, Google Fonts）
│   ├── page.tsx                  # トップページ（LP・9セクション）
│   ├── globals.css               # CSS一括インポート
│   ├── api/form/route.ts         # フォーム送信API（reCAPTCHA+Pardot+Slack×2）
│   ├── case/
│   │   ├── page.tsx              # 導入事例一覧
│   │   └── [slug]/page.tsx       # 導入事例詳細（2カラム+企業概要サイドバー）
│   ├── resource/
│   │   ├── page.tsx              # リソース一覧
│   │   └── [slug]/page.tsx       # リソース詳細（+サイドバーフォーム）
│   ├── help/
│   │   ├── page.tsx              # ヘルプ一覧
│   │   └── [slug]/page.tsx       # ヘルプ詳細
│   ├── contact/
│   │   └── page.tsx              # お問い合わせ
│   ├── contact-thanks/
│   │   └── page.tsx              # お問い合わせ完了
│   └── resource-thanks/
│       └── page.tsx              # 資料請求完了
├── components/
│   ├── Header.tsx                # ヘッダー（ハンバーガーメニュー+条件分岐ナビ）
│   ├── Footer.tsx                # フッター（CTA+会社情報+レスポンシブ画像）
│   ├── LpScripts.tsx             # スクロール監視・FAQ accordion・viewport fix
│   ├── RequestForm.tsx           # 資料請求フォーム（イベント固有フィールド付き）
│   ├── ContactForm.tsx           # お問い合わせフォーム
│   └── sections/                 # LP各セクション（9セクション）
│       ├── FvSection.tsx         # ファーストビュー
│       ├── AboutSection.tsx      # サービス説明
│       ├── ProblemSection.tsx    # よくある課題（4項目）
│       ├── FlowSection.tsx       # 利用フロー（4ステップ）
│       ├── UseCaseSection.tsx    # 利用シーン（4パターン）
│       ├── MeritSection.tsx      # 導入メリット（5項目）
│       ├── CaseStudySection.tsx  # 導入事例（最新2件・JSON連動）
│       ├── PlanSection.tsx       # 料金プラン（シリーズ契約/その他）
│       └── FaqSection.tsx        # FAQ（4問）
├── data/
│   ├── cases.json                # 導入事例データ
│   ├── resources.json            # 資料データ
│   └── helps.json                # ヘルプ記事データ
├── lib/
│   └── content.ts                # コンテンツ取得ユーティリティ
└── styles/                       # WordPress移植CSS（11ファイル）
    ├── common.css
    ├── header.css
    ├── footer.css
    ├── front-page.css
    ├── page.css
    ├── single-case.css
    ├── single-resource.css
    ├── single-help.css
    ├── archive-case.css
    ├── archive-resource.css
    └── archive-help.css
```

## IVRサイトとの主な相違点
| 項目 | IVR | event-reception |
|------|-----|-----------------|
| CSS命名 | lp-connect__* (BEM) | p-*, c-*, l-* (FLOCSS) |
| セクション数 | 7 | 9（+UseCase, Merit, Flow） |
| ハンバーガーメニュー | なし | あり（960px以下） |
| ナビゲーション | 固定 | 条件分岐（isFrontPage） |
| フォーム固有項目 | 電話回線、受電数 | イベント種類、開催時期、招待人数 |
| Slack Webhook | 1つ | 2つ（request / contact 別） |
| FAQ | 静的表示 | アコーディオン（Web Animations API） |
| Google Fonts | なし | DM Sans, Poppins, Noto Sans JP, Roboto |
| GTM ID | GTM-5DTPNZSB | GTM-MM8R64TR |

## WordPress時代との対応表
| WP | Next.js |
|----|---------|
| front-page.php | src/app/page.tsx |
| header.php | src/components/Header.tsx |
| footer.php | src/components/Footer.tsx |
| sections/fv.php | src/components/sections/FvSection.tsx |
| sections/about.php | src/components/sections/AboutSection.tsx |
| sections/problem.php | src/components/sections/ProblemSection.tsx |
| sections/flow.php | src/components/sections/FlowSection.tsx |
| sections/use-case.php | src/components/sections/UseCaseSection.tsx |
| sections/merit.php | src/components/sections/MeritSection.tsx |
| sections/case-study.php | src/components/sections/CaseStudySection.tsx |
| sections/plan.php | src/components/sections/PlanSection.tsx |
| sections/faq.php | src/components/sections/FaqSection.tsx |
| assets/js/script.js | src/components/LpScripts.tsx |
| archive-case.php | src/app/case/page.tsx |
| single-case.php | src/app/case/[slug]/page.tsx |
| archive-resource.php | src/app/resource/page.tsx |
| single-resource.php | src/app/resource/[slug]/page.tsx |
| archive-help.php | src/app/help/page.tsx |
| single-help.php | src/app/help/[slug]/page.tsx |
| page-contact.php | src/app/contact/page.tsx |
| page-thanks-contact.php | src/app/contact-thanks/page.tsx |
| page-thanks-request.php | src/app/resource-thanks/page.tsx |
| form-parts/request-form.php | src/components/RequestForm.tsx |
| form-parts/contact-form.php | src/components/ContactForm.tsx |
| inc/form-handler.php + form-handler.js | src/app/api/form/route.ts |

## フォーム処理フロー
1. クライアント: RequestForm/ContactForm → `/api/form` にPOST
2. サーバー: reCAPTCHA v3検証 → Pardot送信 + Slack通知（並行・別Webhook）
3. クライアント: 成功時にサンクスページへリダイレクト

## 残作業
- [ ] WPからの実データエクスポート（case, resource, help）
- [ ] reCAPTCHA v3のクライアントサイドトークン取得実装
- [ ] レスポンシブ動作確認
- [ ] GTMイベントトラッキング設定
- [ ] Vercelプロジェクト作成・デプロイ設定
- [ ] DNS設定（event.receptionist.jp → Vercel）
