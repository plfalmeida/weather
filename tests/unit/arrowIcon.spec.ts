import { shallowMount } from '@vue/test-utils'
import ArrowIcon from '@/components/ui/ArrowIcon.vue'

describe('ArrowIcon.vue', () => {

  it('render correct direction', () => {
    const direction = 'down'
    const wrapper = shallowMount(ArrowIcon, {
      propsData: { direction }
    })
    expect(wrapper.attributes('data-direction')).toBe(direction)
  })

})
