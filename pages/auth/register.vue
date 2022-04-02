<template>
  <v-row justify="center">
    <v-col cols="11" sm="10" md="8" lg="6">
      <v-card>
        <v-form ref="form" v-model="isValid">
          <v-card-text>
            <v-text-field
              v-model="user.name"
              color="info"
              :rules="[nameRules.min, nameRules.max]"
              label="ニックネーム"
              placeholder="6〜20文字"
              counter
              validate-on-blur
              required
            ></v-text-field>

            <v-text-field
              v-model="user.password"
              color="info"
              :append-icon="showIcon ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[passwordRules.min, passwordRules.regex]"
              :type="showIcon ? 'text' : 'password'"
              label="パスワード"
              placeholder="8文字以上"
              counter
              validate-on-blur
              @click:append="showIcon = !showIcon"
            ></v-text-field>

            <v-text-field
              v-model="user.password_confirmation"
              color="info"
              :append-icon="showIcon ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[confirmPasswordRules]"
              :type="showIcon ? 'text' : 'password'"
              label="パスワード確認"
              placeholder="確認のため再度ご入力ください"
              counter
              validate-on-blur
              @click:append="showIcon = !showIcon"
            ></v-text-field>
          </v-card-text>

          <v-card-text>
            <v-alert v-for="message of errorMessages" :key="message" text type="info">
              {{ message }}
            </v-alert>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn color="info" width="150" class="mb-2" rounded :disabled="!isValid || loading" :loading="loading" @click="register">
              登録
            </v-btn>
          </v-card-actions>
        </v-form>
        <v-divider></v-divider>
        <v-card-text class="text-center">
          登録がお済みの方は<nuxt-link to="/auth/login">こちら</nuxt-link>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    isValid: false,
    loading: false,
    user: {
      name: '',
      password: '',
      password_confirmation: '',
    },
    nameRules: {
      min: v => (v && v.length >= 6) || '6〜20文字が有効です',
      max: v => (v && v.length <= 20) || '6〜20文字が有効です',
    },
    passwordRules: {
      min: v => (v && v.length >= 8) || '8〜25文字が有効です',
      max: v => (v && v.length <= 25) || '8〜25文字が有効です',
      regex: v => /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/.test(v) || '半角英数字記号が有効です',
    },
    showIcon: false,
    errorMessages: [],
  }),

  head() {
    return {
      title: 'ユーザー登録'
    }
  },

  computed: {
    form () {
      return {
        name: this.user.name,
        password: this.user.password,
      }
    },
    confirmPasswordRules() {
      return () => (this.user.password === this.user.password_confirmation) || 'パスワードが一致していません'
    },
  },

  methods: {
    register () {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.errorMessages = []
        // 登録処理
        this.$axios.post('api/register', this.user).then((res) => {
          if (res.data.status === 401) {
            this.errorMessages = res.data.error.name
            return
          }
          this.$auth.loginWith('local', { data: this.user })
        })
      }
      this.loading = false
    },
  },
}
</script>

<style>

</style>
