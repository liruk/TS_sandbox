import { shallowMount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'
import flushPromises from 'flush-promises';

describe('SubmitButton.vue', () => {
  it('renders props.msg when passed', async () => {
    const value = 'new message'
    const wrapper = shallowMount(SubmitButton, {
      propsData: { value }
    })
    await flushPromises();
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  })
})
