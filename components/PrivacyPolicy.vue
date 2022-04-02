<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="90%"
      scrollable
    >
      <template #activator="{ on, attrs }">
        <v-card-subtitle
          class="pb-0 secondary--text"
          v-bind="attrs"
          v-on="on"
        >
          プライバシーポリシー
        </v-card-subtitle>
      </template>

      <v-card>
        <v-card-title class="grey--text text--darken-2 text-h6 grey lighten-3">
          プライバシーポリシー
        </v-card-title>

        <v-card-text>
          <br>
          <p>本ウェブサイトの管理者（以下、「管理者」といいます。）は、本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。</p>

          <h3>第1条（利用目的）</h3>
          <p>本サービスのサービス提供にかかわる利用者情報の具体的な利用目的は以下です。</p>
          <ol>
            <li>ユーザーのトラフィック測定及び行動測定のため</li>
            <li>本サービスが提供する各種ツールの品質向上のため</li>
          </ol>
          <br>

          <h3>第2条（アクセス解析ツール）</h3>
          <p>本ウェブサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。 この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp" target="_blank" rel="noopener noreferrer">Googleアナリティクス利用規約</a>、<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">Googleポリシーと規約</a>をご覧ください。</p>
          <br>

          <h3>第3条（プライバシーポリシーの変更）</h3>
          <ol>
          <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</li>
          <li>当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</li>
          </ol>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="secondary"
            text
            @click="dialog = false"
          >
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  }
}
</script>

<style>

</style>