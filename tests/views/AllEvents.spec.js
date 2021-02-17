import { shallowMount } from '@vue/test-utils';
import AllEvents from '@/views/AllEvents.vue'

describe('AllEvents.vue', () => {
    it('should display filtered events when typing in the inputfield', () => {
        const filter = jest.spyOn(AllEvents.methods, 'filter')

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
            }
        })

        const inputField = wrapper.find('input[type="text"]')
        inputField.setValue('Bak')

        expect(filter).toHaveBeenCalled()
        expect(inputField.element.value).toBe('Bak')
    })
})