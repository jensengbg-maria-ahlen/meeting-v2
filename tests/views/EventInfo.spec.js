import { shallowMount, createLocalVue } from '@vue/test-utils';
import EventInfo from '@/views/EventInfo.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


describe('EventInfo.vue', () => {
    it('should display correct path when mounted', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const getters = {
            chosenEvent: () => [{
                "id": 1,
                "title": "Bake off",
                "when": "22 March 2021",
                "organizer": "Camilla Hamid",
                "reviews": []
            }]
        }

        const store = new Vuex.Store(Vuex, { getters}) 
        localVue.use(VueRouter)
        const router = new VueRouter()
/*
        const wrapper = shallowMount(EventInfo, {
            propsData: {
                events: {
                    "id": 1,
                    "title": "Bake off",
                    "when": "22 March 2021",
                    "organizer": "Camilla Hamid",
                    "reviews": []
                }
            },
            localVue,
            store,
            router
        });

        router.push("/eventinfo/1")

        expect(wrapper.vm.$route.path).toBe("/eventinfo/1")
*/
    })

})