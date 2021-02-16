import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import Event from '@/components/Event.vue'
import Index from '@/store/index.js'

describe('Event.vue', () => {
    it('should display all events and the events title from store when mounted', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Index)

        const wrapper = shallowMount(Event, {
            propsData: {
                event: {
                    "title": "Bakdax"
                }
            },
            localVue,
            store
        });

        let allEventsExist = wrapper.findAll('.event').exists()
        expect(allEventsExist).toBeTruthy();

        const expectedTitle = 'Bakdax'
        const actualTitle = wrapper.find('.title').text()
        expect(actualTitle).toBe(expectedTitle);
    })


    it('should display event image when mounted', () => {
        const wrapper = shallowMount(Event, {
            propsData: {
                event: {
                    "title": "Bakdax"
                }
            }
        });

        const imgExist = wrapper.findAll('img')
        console.log(imgExist)
        //expect(imgExist).toBeTruthy();      
    })

    //it('should display event image when mounted')
})
