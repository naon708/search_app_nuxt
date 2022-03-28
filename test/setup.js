import Vue from 'vue'
import Vuetify from 'vuetify'
import { RouterLinkStub, config } from '@vue/test-utils'

Vue.config.productionTip = false
Vue.use(Vuetify)

// Mock <nuxt-link />
config.stubs['nuxt-link'] = RouterLinkStub;