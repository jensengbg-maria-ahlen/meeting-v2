import { shallowMount, createLocalVue } from '@vue/test-utils';
import EventInfo from '@/views/EventInfo.vue'
import Vuex from 'vuex'

describe('EventInfo.vue', () => {
    it('should display correct url when mounted', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const mutations = { toggleMenu: jest.fn() }
        const getters = { chosenEvent: jest.fn() }
        const store = new Vuex.Store({ mutations, getters }) 

        const wrapper = shallowMount(EventInfo, {
            mocks: {
                $route: {
                    path: '/eventinfo/1'
                }
            },
            localVue,
            store
        });

        expect(wrapper.vm.$route.path).toBe('/eventinfo/1')
    })

    it('should display event when mounted', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const mutations = { toggleMenu: jest.fn() }
        const getters = { chosenEvent: jest.fn() }
        const store = new Vuex.Store({ mutations, getters }) 

        const wrapper = shallowMount(EventInfo, {
            mocks: {
                $route: {
                    path: '/eventinfo/1'
                }
            },
            localVue,
            store
        });

        const meetupInfo = wrapper.find('.meetupInfo').exists()
        expect(meetupInfo).toBeTruthy()
    })


    it('should display the menu when menuIcon is clicked', async () => {
        const toggle = jest.spyOn(EventInfo.methods, 'toggleMenu')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const mutations = { toggleMenu: jest.fn() }
        const getters = { chosenEvent: jest.fn() }
        const store = new Vuex.Store({ mutations, getters }) 

        const wrapper = shallowMount(EventInfo, {
            mocks: {
                $route: {
                    params: { id: 1 }
                }
            },
            localVue,
            store
        });

        await wrapper.find('.menuIcon').trigger('click')
        expect(toggle).toHaveBeenCalled()
    })
})