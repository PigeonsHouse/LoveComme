# LoveComme!(ラブコメ)

## テーマ

「コメント」

## アイデア

自分の愛情・熱量(=LOVE)を乗せてコメントを投げる(物理)ことができる配信サービス(？)

コンテンツ部分は実装時間がないので、ニコ生、YoutubeLiveなどを想定してコメント部分のみ作成

- ライブ一覧ページ
    - 今回はライブを行う機能は実装しないため、一覧はモック。
- ライブページ
    - 上と同様にライブ画面部はモック。
    - コメント表示は実装
        - コメントをWebSocketで受け取ると、コメントを投げた速度でライブ画面上を横切る。
        - その代わり速いとLOVEポイントが高いということになるので、右側のコメント一覧では長く閲覧できる。
- コメントページ
    - コメント入力ページ
        - 普通に入力フォーム。
    - コメント投稿ページ
        - ここが肝。
        - コメントオブジェクトをクリックして思いっきり投げて、放す瞬間の速度を愛情・熱量(LOVE)として扱う。(←ここが楽しい！！…はず)
        - LOVEポイント、投稿からの時間の経過度合い、文字数(文字数が少ないほうがよく飛ぶ)辺りで、コメントの滞在時間が決まる。
        - LOVEポイントでちまちまポイントを貯めたり、課金したりすると、LOVEポイントをブーストできる機能なんてあるとマネタイズも導入しやすそう。(運用できるレベルのマネタイズを考えるならもう少し練らなきゃだけど…)
