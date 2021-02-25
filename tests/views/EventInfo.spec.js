import { shallowMount, createLocalVue } from '@vue/test-utils';
import EventInfo from '@/views/EventInfo.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

describe('EventInfo.vue', () => {
    it('should display the menu when menuIcon is clicked', async () => {
        const toggle = jest.spyOn(EventInfo.methods, 'toggleMenu')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        localVue.use(VueRouter)
        const router = new VueRouter()
/*
        const mutations = { toggleMenu: jest.fn() }
        const store = new Vuex.Store({ mutations })

        const wrapper = shallowMount(EventInfo, {
            propsData: {
                events: [
                    {
                        reviews: [
                            {
                                name: "Maria"
                            }
                        ]
                    }
                ]
            },
            localVue,
            router,
            store
        })
        await wrapper.find('.menuIcon').trigger('click')

        expect(toggle).toHaveBeenCalled()
        */
    })
})