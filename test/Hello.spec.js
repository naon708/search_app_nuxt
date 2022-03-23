import { mount } from '@vue/test-utils'
import Hello from '@/pages/index'

describe('HelloWorld', () => {
  test('display Hello World', () => {
    const wrapper = mount(Hello)
    expect(wrapper.text()).toMatch("バレエダンサー")
  })
})