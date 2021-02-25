import { shallowMount, createLocalVue } from '@vue/test-utils';
import Signup from '@/components/Signup.vue'
import Vuex from 'vuex'

describe('Signup.vue', () => {
    it('should display welcome to the event when user has pressed the apply button', async () => {
        window.alert = jest.fn();
        const apply = jest.spyOn(Signup.methods, 'apply')
        const localVue = createLocalVue()
        localVue.use(Vuex)

        const store = new Vuex.Store(Vuex)

        const wrapper = shallowMount(Signup, {
            propsData: {
                event: {
                    status: "new"
                }
            },
            localVue,
            store
        })

        let applyButton = wrapper.find('.applyButton')
        await applyButton.trigger('click')

        expect(apply).toHaveBeenCalled();

        const welcomeText = wrapper.find('.welcomeText')
        expect(welcomeText).toBeTruthy()
    })

    
    it('should display the apply button if the status of the event is new or ongoing', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Vuex)

        const wrapper = shallowMount(Signup, {
            propsData: {
                event: {
                    status: "new"
                }
            },
            localVue,
            store
        })

        const expectedText = "Apply"
        let applyButton = wrapper.find('.applyButton').text()
        
        expect(applyButton).toBeTruthy()
        expect(applyButton).toBe(expectedText)
    })



    it('should display the thank you when user has pressed the button sendIn', async () => {
        window.alert = jest.fn();
        const sendIn = jest.spyOn(Signup.methods, 'sendIn')
        const localVue = createLocalVue()
        localVue.use(Vuex)

        const store = new Vuex.Store(Vuex)

        const wrapper = shallowMount(Signup, {
            propsData: {
                event: {
                    status: "old"
                }
            },
            localVue,
            store
        })

        let sendInButton = wrapper.find('.sendInButton')
        await sendInButton.trigger('click')

        expect(sendIn).toHaveBeenCalled();

        const thankYouText = wrapper.find('.thankYouText')
        expect(thankYouText).toBeTruthy()
    })
})