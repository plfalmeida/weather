import { shallowMount } from '@vue/test-utils'
import WeatherIcon from '@/components/ui/WeatherIcon.vue'

describe('WeatherIcon.vue', () => {
  const iconId = '01d'
  const iconSize = '@4x'

  it('render default icon', () => {
    const wrapper = shallowMount(WeatherIcon)
    expect(wrapper.html()).toContain(`<img src="http://openweathermap.org/img/wn/02d.png">`)
  })

  it('render correct icon', () => {
    const wrapper = shallowMount(WeatherIcon, {
      propsData: { iconId }
    })
    expect(wrapper.html()).toContain(`<img src="http://openweathermap.org/img/wn/${iconId}.png">`)
  })

  it('render correct icon size', () => {
    const wrapper = shallowMount(WeatherIcon, {
      propsData: { iconSize }
    })
    expect(wrapper.html()).toContain(`http://openweathermap.org/img/wn/02d${iconSize}.png`)
  })

})
