import { shallowMount, createLocalVue } from '@vue/test-utils';
import About from '@/views/About.vue'
import Vuex from 'vuex'

describe('About.vue', () => {
    it('should display title when mounted', () => {
        const wrapper = shallowMount(About)
        const expectedTitle = 'About the creator of Meetups'
        const actualTitle = wrapper.find('h1').text();

        expect(actualTitle).toBeTruthy()
        expect(actualTitle).toBe(expectedTitle);
    })

    it('should display the menuIcon when mounted', () => {
        const wrapper = shallowMount(About)
        const image = wrapper.find('.menuIcon')
        expect(image).toBeTruthy()
    })

    it('should display the menu when menuIcon is clicked', async () => {
        const toggle = jest.spyOn(About.methods, 'toggleMenu')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const mutations = { toggleMenu: jest.fn()}
        const store = new Vuex.Store({mutations})

        const wrapper = shallowMount(About, { localVue, store })
        await wrapper.find('.menuIcon').trigger('click')

        expect(toggle).toHaveBeenCalled()
    })
})