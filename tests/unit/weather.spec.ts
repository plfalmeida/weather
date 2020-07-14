import { shallowMount, createLocalVue } from '@vue/test-utils'
import Weather from '@/views/Weather.vue';

import VueRouter from 'vue-router'
import Vuex from 'vuex'

import store from '../../src/store';


const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

const router = new VueRouter()

describe('Weather.vue', ()=> {
  it('Match snapshot', () => {
    const wrapper = shallowMount(Weather, { localVue, router, store })
    expect(wrapper).toMatchSnapshot()
  })
})
