/* eslint-disable no-use-before-define */
import { h } from 'vue';

import {
  BLOCKS, INLINES, MARKS, helpers
} from '@contentful/rich-text-types';

const defaultMarkRenderers = {
  [MARKS.BOLD]: 'strong',
  [MARKS.ITALIC]: 'em',
  [MARKS.UNDERLINE]: 'u',
  [MARKS.CODE]: 'code'
};

const defaultNodeRenderers = {
  [BLOCKS.PARAGRAPH]: 'p',
  [BLOCKS.HEADING_1]: 'h1',
  [BLOCKS.HEADING_2]: 'h2',
  [BLOCKS.HEADING_3]: 'h3',
  [BLOCKS.HEADING_4]: 'h4',
  [BLOCKS.HEADING_5]: 'h5',
  [BLOCKS.HEADING_6]: 'h6',
  [BLOCKS.UL_LIST]: 'ul',
  [BLOCKS.OL_LIST]: 'ol',
  [BLOCKS.LIST_ITEM]: 'li',
  [BLOCKS.QUOTE]: 'blockquote',
  [BLOCKS.HR]: 'hr',
  [INLINES.HYPERLINK]: (node: any, next: Function) => h('a', { href: node.data.uri }, next(node.content))
};

const defaultTemplateRenderers = {
  [BLOCKS.EMBEDDED_ENTRY]: 'embedded-entry',
  [BLOCKS.EMBEDDED_ASSET]: 'embedded-asset',
  [INLINES.EMBEDDED_ENTRY]: 'inline-embedded-entry',
  [INLINES.ENTRY_HYPERLINK]: 'inline-entry-link',
  [INLINES.ASSET_HYPERLINK]: 'inline-image-link',
};

const getData = (slotType: string, links: any, id: string) => {
  let data = [];
  // eslint-disable-next-line default-case
  switch (slotType) {
    case 'embedded-entry':
      data = links.entries.block; break;
    case 'embedded-asset':
      data = links.assets.block; break;
    case 'inline-embedded-entry':
      data = links.entries.inline; break;
    case 'inline-entry-link':
      data = links.entries.hyperlink; break;
    case 'inline-image-link':
      data = links.assets.hyperlink; break;
  }
  return data.find((obj: any) => obj.sys.id === id);
};

const renderNode = (node: any, links: any, slots: any) => {
  const nodeType = defaultNodeRenderers[node.nodeType];
  const slotType = defaultTemplateRenderers[node.nodeType];

  if (helpers.isText(node)) {
    const marksReversed = [...node.marks].reverse();
    const handledValue: any[] = [];

    node.value.split(/\n/g).forEach((item: any) => {
      handledValue.push(item);
      handledValue.push(h('br'));
    });

    return marksReversed.reduce((value: any, mark: any) => {
      const tag = defaultMarkRenderers[mark.type];
      if (typeof tag === 'string') {
        return h(tag, null, value);
      }
      return value;
    }, handledValue);
  }

  const nextNode = (nodes: any) => renderNodeList(nodes, links, slots);

  if (slotType && slots[slotType]) {
    return slots[slotType](getData(slotType, links, node.data.target.sys.id));
  }

  if (typeof nodeType === 'function') {
    return nodeType(node, nextNode);
  }

  if (typeof nodeType === 'undefined') {
    return null;
  }

  return h(nodeType, null, nextNode(node.content));
};

const renderNodeList = (nodes: any, links: any, slots: any) => nodes.map((node: any) => renderNode(node, links, slots));

export default {
  name: 'VueContentful',
  props: {
    document: {
      type: Object,
      required: false
    },
    wrapper: {
      type: String,
      required: false,
      default: 'div'
    }
  },
  setup(props: any, {
    slots, attrs
  }) {
    const { document, wrapper } = props;

    return () => h(
      wrapper, {
        ...attrs
      },
      document
        ? renderNodeList(document.json.content, document.links, slots)
        : undefined
    );
  }
};
