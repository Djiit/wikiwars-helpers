import { shallow } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard.vue'

describe('Dashboard.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = ''
    const wrapper = shallow(Dashboard)
    expect(wrapper.text()).toMatch(msg)
  })
})
