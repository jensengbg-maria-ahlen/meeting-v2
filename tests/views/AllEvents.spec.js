import { shallowMount, createLocalVue } from '@vue/test-utils';
import AllEvents from '@/views/AllEvents.vue'
import Vuex from 'vuex'

describe('AllEvents.vue', () => {
    it('should display the menu when menuIcon is clicked', async () => {
        const toggle = jest.spyOn(AllEvents.methods, 'toggleMenu')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const mutations = { toggleMenu: jest.fn() }
        const store = new Vuex.Store({ mutations })

        const wrapper = shallowMount(AllEvents, { localVue, store })
        await wrapper.find('.menuIcon').trigger('click')

        expect(toggle).toHaveBeenCalled()
    })


    it('should display filtered events when typing in the inputfield', () => {
        const filter = jest.spyOn(AllEvents.methods, 'filter')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const actions = { filterEvents: jest.fn() }
        const store = new Vuex.Store({ actions })

        const wrapper = shallowMount(AllEvents, {
            propsData: {
                events: [
                    {
                        "id": 1,
                        "title": "Bakdax",
                        "when": "22 Mars 2021",
                        "organizer": "Camilla Hamid"
                    },
                ]
            },
            localVue,
            store
        })

        const inputField = wrapper.find('input[type="text"]')
        inputField.setValue('Bak')

        expect(filter).toHaveBeenCalled()
        expect(inputField.element.value).toBe('Bak')
    })
    
})