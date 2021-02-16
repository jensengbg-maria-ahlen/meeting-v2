import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import Vue from 'vue'
import Event from '@/components/Event.vue'
import Index from '@/store/index.js'

const vueWithVuex = createLocalVue()
vueWithVuex.use(Vuex)


it('should load the store', () => {
    const store = new Vuex.Store(Index)

    const wrapper = mount(Event, {
        localVue: vueWithVuex,
        store
    })
    console.log(wrapper)
})


/*

describe('Event.vue', () => {
    let event
    let store 


    beforeEach(() => {
        event = { eventClick: jest.fn() }
        store = new Vuex.Store({
            event
        })
    })

    it('should display title on event when mounted', async () => {
        const localVue = createLocalVue()
        console.log(localVue)
        //localVue.use(Vuex)


        const wrapper = shallowMount(Event, { store, localVue });
        let eventTitle = wrapper.find('.title');

        console.log(eventTitle);

    })
})

*/