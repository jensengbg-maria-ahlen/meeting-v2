import { shallowMount, createLocalVue } from '@vue/test-utils';
import Comments from '@/components/Comments.vue'
import Vuex from 'vuex'

describe('Comments.vue', () => {
    it('should display previous comment and by whom when mounted', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Vuex)

        const wrapper = shallowMount(Comments, {
            propsData: {
                review: {
                    name: "Maria",
                    email: 'maria@mail.com',
                    comment: "En kommentar"
                }
            },
            localVue,
            store
        })

        const expectedName = 'By: Maria'
        const expectedComment = 'En kommentar'

        const actualName = wrapper.find('h3').text()
        const actualComment = wrapper.find('h4').text()

        expect(actualName).toBe(expectedName)
        expect(actualComment).toBe(expectedComment)
    })
})

