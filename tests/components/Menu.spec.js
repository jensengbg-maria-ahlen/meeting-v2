import { shallowMount, createLocalVue } from '@vue/test-utils';
import Menu from '@/components/Menu.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'


describe('Menu.vue', () => {
    it('should go to correct router view when link is clicked on', async () => {
        const changeRoute = jest.spyOn(Menu.methods, 'goTo')
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()

        localVue.use(Vuex)
        const mutations = { toggleMenu: jest.fn() }
        const store = new Vuex.Store(Vuex, { mutations })
        
        const wrapper = shallowMount(Menu, { localVue, store, router })
        await wrapper.find('a').trigger('click')

        expect(wrapper.vm.$route.path).toBe('/allevents')
        expect(changeRoute).toHaveBeenCalled()
    })
})