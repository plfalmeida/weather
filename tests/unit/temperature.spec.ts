import { shallowMount } from '@vue/test-utils'
import Temperature from '@/components/Temperature/Temperature.vue'

describe('Temperature.vue', () => {
  const temperature = {
    current: 17,
    min: 15,
    max: 22,
  }

  it('render current weather', () => {
    const wrapper = shallowMount(Temperature, {
      propsData: { temperature }
    })
    expect(wrapper.text()).toMatch(`${temperature.current}`)
  })

  it('render min weather', () => {
    const wrapper = shallowMount(Temperature, {
      propsData: { temperature }
    })
    expect(wrapper.text()).toMatch(`${temperature.min}`)
  })

  it('render max weather', () => {
    const wrapper = shallowMount(Temperature, {
      propsData: { temperature }
    })
    expect(wrapper.text()).toMatch(`${temperature.max}`)
  })

})
