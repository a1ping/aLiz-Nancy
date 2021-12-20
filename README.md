# 説明

ejs, scss, typescript を用いた Web サイト制作の練習や環境構築を行うためのリポジトリです。

# 利用の際の事前準備

- 以下のインストール
  - node (v16)
  - npm
    
※ コマンドラインでの操作となります。Windows の場合は PowerShell, Mac の場合はターミナルなどを利用してください。

# 環境構築

1. このリポジトリを `git clone`
1. `npm install` を実行し、エラーが出ていないことを確認
1. `npm run serve` を実行
  - ブラウザが自動で起動すれば成功
  - 以降の開発は `/src/` を編集して行います
  - ファイルに変更があった場合、自動で以下のことが行われます
    - ejs をビルドして html に変換し `public` フォルダ以下に配置
    - sass をビルドして css に変換し `public` フォルダ以下に配置 
    - ts をビルドして js に変換し `public` フォルダ以下に配置
    - ブラウザをリロード

# 基礎学習

以下に、サイト制作を効率的に行うためにこのリポジトリで利用している技術を記載します。

全く勉強したことがないものがあれば、各自調査して勉強したことを自身の技術ブログ等にアウトプットして下さい。

- html
- css
- javascript
- ejs
- sass
- typescript
- node
- npm
- git

# フォルダ構成

- export
  - 各種出力用フォルダ
  - 開発の際はこのフォルダは使用しないでくださ
- dist
  - Web サーバに実際に配置するフォルダ
- public
  - 開発の際に表示されるフォルダ
  - このフォルダの中に、公開したくないファイルを配置しないようにして下さい
- src
  - 開発のためのリソースフォルダ
  - scss ファイルなどが置かれます

# 制作したものをサーバに配置する際

1. `npm run build` を実行
1. dist という公開用のファイルができるので、中身を FTP 等でサーバに配置する

# 参考

https://github.com/aLizlab/product-web-template のテンプレートを利用しています。

    <a
        href="https://qiita.com/miwashutaro0611/items/36910f2d784ff70a527d"
        target="_blank"
    >
        ejsの書き方の参考サイト
    </a>
