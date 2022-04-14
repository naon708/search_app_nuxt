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
          <h3>お客様から取得する情報</h3>
          <p>当サービスは、お客様から以下の情報を取得します。</p>
          <ol>
            <li>氏名(ニックネームやペンネームも含む)</li>
            <!-- <li>写真や動画</li> -->
            <!-- <li>当社ウェブサイトの滞在時間、入力履歴、購買履歴等の当社ウェブサイトにおけるお客様の行動履歴</li> -->
            <!-- <li>当社アプリの起動時間、入力履歴、購買履歴等の当社アプリの利用履歴</li> -->
          </ol>
          <br>

          <h3>お客様の情報を利用する目的</h3>
          <p>当サービスは、お客様から取得した情報を、以下の目的のために利用します。</p>
          <ol>
            <li>当サービスに関する登録の受付、お客様の本人確認、認証のため</li>
            <li>以上の他、当サービスの提供、維持、保護及び改善のため</li>
          </ol><br>
          <p>安全管理のために講じた措置</p>
          <p>当サービスが、お客様から取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問い合わせ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。</p>
          <br>

          <h3>第三者提供</h3>
          <p>当サービスは、お客様から取得する情報のうち、個人データ（個人情報保護法第２条第６項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。但し、次の場合は除きます。</p>
          <ol>
            <li>個人データの取扱いを外部に委託する場合</li>
            <li>当サービスが買収された場合</li>
            <li>事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）</li>
            <li>その他、法律によって合法的に第三者提供が許されている場合</li>
          </ol>
          <br>

          <h3>アクセス解析ツール</h3>
          <p>当ウェブサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。 この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp" target="_blank" rel="noopener noreferrer">Googleアナリティクス利用規約</a>をご覧ください。</p>
          <br>

          <h3>プライバシーポリシーの変更</h3>
          <p>当ウェブサイトは、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。</p>
          <br>

          <h3>お問い合わせ</h3>
          <p>お客様の情報の開示、情報の訂正、利用停止、削除をご希望の場合は、以下のメールアドレスにご連絡ください。</p>
          <p>naoya.nis78@gmail.com</p>

          <h3>管理者の氏名</h3>
          <p>西口直弥</p>
          <p>2022年03月07日 制定<br>2022年04月14日 改定</p>

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