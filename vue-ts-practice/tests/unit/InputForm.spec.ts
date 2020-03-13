import { shallowMount } from '@vue/test-utils'
import InputForm from '@/components/InputForm.vue'
import flushPromises from 'flush-promises';

describe('InputForm.vue', () => {
  it('renders props.msg when passed', async () => {
    const value = 'new message'
    const wrapper = shallowMount(InputForm, {
      propsData: { value }
    })
    await flushPromises();
    const input = wrapper.find('input')
    input.setValue('ninja')
    expect(wrapper.vm.$data.content).toBe('ninja')
  })
})
