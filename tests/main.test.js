import { mount, shallowMount } from '@vue/test-utils';
import VueContentful from '@/main.ts';

import testDocuments, {
  EXPECTED_VALUE
} from './main.data.js';

let wrapper;

const createWrapper = (document, slots, method = shallowMount) => {
  return method(VueContentful, {
    propsData: {
      document
    },
    slots
  });
}

beforeEach(() => {
});

afterEach(() => {
  wrapper.unmount();
});

describe('Component', () => {
  it('Should be a Vue instance', () => {
    wrapper = createWrapper(testDocuments.empty);
    expect(wrapper.vm).toBeTruthy();
  });

  it('Should not error if document not passed', () => {
    wrapper = createWrapper();
    expect(wrapper.vm).toBeTruthy();
  });

  it('Should not error if invalid nodeType is found', () => {
    wrapper = createWrapper(testDocuments.invalid);
    expect(wrapper.vm).toBeTruthy();
  });

  it(`Should not error if invalid mark type is found`, () => {
    wrapper = createWrapper(testDocuments['invalid-mark']);
    expect(wrapper.text()).toEqual(EXPECTED_VALUE);
  });

  it('Should not error if invalid slotType is found', () => {
    wrapper = createWrapper(testDocuments.invalid, {
      invalid: `
        <template #invalid="item">
          {{ item.title }}
        </template>
      `
    }, mount);
  });

  it(`Should convert \\n characters to br tags`, () => {
    wrapper = createWrapper(testDocuments['new-line']);
    expect(wrapper.html()).toContain(`${EXPECTED_VALUE}<br>${EXPECTED_VALUE}`);
  });

  describe('render tests', () => {
    const tags = [
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'hr',
    ];
    const markTags = [
      'strong',
      'u',
      'em',
      'code'
    ];
    const listTags = [
      'ol', 
      'ul'
    ];
    const templateTags = [
      'embedded-entry',
      'embedded-asset',
      'inline-embedded-entry',
      'inline-entry-link',
      'inline-image-link'
    ];
    let testsTotel = 1 + tags.length + markTags.length + listTags.length + templateTags.length;
    let testsExecuted = 0;

    tags.forEach((tag) => {
      it(`Should output data with ${tag} a tag`, () => {
        wrapper = createWrapper(testDocuments[tag]);
        expect(wrapper.find(tag).text()).toEqual(EXPECTED_VALUE);
        testsExecuted++;
      });
    });

    it(`Should output data with hyperlink tag`, () => {
      wrapper = createWrapper(testDocuments['hyperlink']);
      expect(wrapper.find('a').text()).toEqual(EXPECTED_VALUE);
      testsExecuted++;
    });
    
    markTags.forEach((tag) => {
      it(`Should output data with ${tag} a tag`, () => {
        wrapper = createWrapper(testDocuments[tag]);
        expect(wrapper.find(tag).text()).toEqual(EXPECTED_VALUE);
        testsExecuted++;
      });
    });

    listTags.forEach((tag, index) => {
      it(`Should output data with ${tag} a tag`, () => {
        wrapper = createWrapper(testDocuments[tag]);
        expect(wrapper.find(tag).element.children.length).toEqual(3);
        expect(wrapper.find(tag).find(`:nth-child(${index + 1})`).text()).toEqual(String(index + 1));
        testsExecuted++;
      });
    });

    templateTags.forEach((tag) => {
      it(`Should output data to scoped slot if ${tag} template is passed`, () => {
        wrapper = createWrapper(testDocuments[tag], {
          [tag]: `
            <template #${tag}="item">
              {{ item.title }}
            </template>
          `
        }, mount);
        expect(wrapper.html()).toContain(EXPECTED_VALUE);
        testsExecuted++;
      });
    });

    it('should have executed all the tests', () => {
      expect(testsExecuted).toEqual(testsTotel);
    });
  });
});