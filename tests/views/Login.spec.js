import { shallowMount, createLocalVue } from '@vue/test-utils';
import Login from '@/views/Login.vue'
import Vuex from 'vuex'

describe('Login.vue', () => {
    it('should display the menu when menuIcon is clicked', async () => {
        const toggle = jest.spyOn(Login.methods, 'toggleMenu')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const mutations = { toggleMenu: jest.fn() }
        const store = new Vuex.Store({ mutations })

        const wrapper = shallowMount(Login, { localVue, store })
        await wrapper.find('.menuIcon').trigger('click')

        expect(toggle).toHaveBeenCalled()
    })
})