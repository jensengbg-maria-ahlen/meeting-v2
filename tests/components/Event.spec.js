import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import Event from '@/components/Event.vue'
import Index from '@/store/index.js'


describe('Event.vue', () => {
    it('should display all events from store when loaded', () => {
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
    })
})
