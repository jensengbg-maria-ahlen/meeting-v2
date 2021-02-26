import { shallowMount } from '@vue/test-utils';
import Comments from '@/components/Comments.vue'

describe('Comments.vue', () => {
    it('should display a comment and by who when mounted', () => {
        const wrapper = shallowMount(Comments, {
            propsData: {
                review: {
                    name: "Maria",
                    email: 'maria@mail.com',
                    comment: "En kommentar"
                }
            },
        })

        const expectedName = 'By: Maria'
        const expectedComment = 'En kommentar'

        const actualName = wrapper.find('h3').text()
        const actualComment = wrapper.find('h4').text()

        expect(actualName).toBe(expectedName)
        expect(actualComment).toBe(expectedComment)
    })
})

