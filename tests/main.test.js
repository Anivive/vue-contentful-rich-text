import { shallowMount } from '@vue/test-utils';
import VueContentful from '@/main.ts';

let wrapper;

let title = 'Testing Title';

beforeEach(() => {
  wrapper = shallowMount(VueContentful, {
    propsData: {
      title
    },
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.unmount();
});

describe('Component', () => {
  it('Should be a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});