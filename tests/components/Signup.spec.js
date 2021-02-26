import { shallowMount, createLocalVue } from '@vue/test-utils';
import Signup from '@/components/Signup.vue'
import Vuex from 'vuex'

describe('Signup.vue', () => {
    it('should display welcome when user has pressed the apply button', async () => {
        window.alert = jest.fn();
        const apply = jest.spyOn(Signup.methods, 'apply')

        const wrapper = shallowMount(Signup, {
            propsData: {
                event: {
                    status: "new"
                }
            },
            data() {
                return {
                    disabled: false,
                    showWelcome: true
                }
            },
        })

        let applyButton = wrapper.find('.applyButton')
        await applyButton.trigger('click')
        expect(apply).toHaveBeenCalled()
        
        const welcomeText = wrapper.find('.welcomeText').text()
        expect(welcomeText).toBeTruthy()
    })


    it('should display thank you and push value to backend when user has pressed the sendIn button', async () => {
        window.alert = jest.fn();
        const sendIn = jest.spyOn(Signup.methods, 'sendIn')
        
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const actions = { postCommentToBackend: jest.fn() }
        const store = new Vuex.Store({ actions })

        const wrapper = shallowMount(Signup, {
            propsData: {
                event: {
                    status: "old",
                    reviews: []
                }
            },
            data() {
                return {
                    disabled: false,
                    showThankYou: true
                }
            },
            localVue,
            store
        })

        let sendInButton = wrapper.find('.sendInButton')
        await sendInButton.trigger('click')
        expect(sendIn).toHaveBeenCalled()
        
        const thankYouText = wrapper.find('.thankYouText').text()
        expect(thankYouText).toBeTruthy()
    })
})