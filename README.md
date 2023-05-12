## 使用技術

### Next.js
TypeScriptとの親和性や周辺環境の充実度から採用しました。

### TypeScript
型安全に開発することができるので選択しました。

### vanilla-extract
css-in-jsについてはいくつか候補(styled-components, tailwind)はありましたが、HTML部分の可読性や型安全性や定義参照などのDXの点で優れていると感じたため選択しました。

### Jest/React-Testing-Library
特に他に候補がない様に思われたので特に選択理由はありません。

### Vercel
Nextとの親和性や自動デプロイが魅力的だと感じたので選択しました

### github
選択理由は特にありません。機能ごとにブランチを切ってmainブランチにマージするという流れで開発を行いました。

### react-query
データフェッチやグローバルな状態管理で利用しています。キャッシュで動作を高速化できたりswrと違いisLoadingで読み込みを管理できる点が魅力的だと思っています。

## デザインパターン

### TreeDesign
最初はatomic designが候補にありましたが、①今回の規模の開発でmoleclesやorganismを分けられる自信がなく、また分ける必要性を感じなかったこと ②DOMに即したディレクトリ構成にすることでより直感と合った開発をすることができる、という２点からTreeDesignを採用しています。
