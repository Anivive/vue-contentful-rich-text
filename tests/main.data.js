export const EXPECTED_VALUE = 'Value Test';

export default {
  empty: {
    json: {
      nodeType: 'document',
      data: {},
      content: []
    }
  },
  invalid: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'invalid',
          content: [
            {
              nodeType: 'text',
              value: EXPECTED_VALUE,
              marks: [],
              data: {}
            }
          ],
          data: {}
        }
      ]
    }
  },
  'new-line': {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value: `${EXPECTED_VALUE}\n${EXPECTED_VALUE}`,
              marks: [],
              data: {}
            }
          ],
          data: {}
        }
      ]
    }
  },
  p: {
    json: {
      nodeType: 'document',
      data: { },
      content: [
        {
          nodeType: 'paragraph',
          content: [
            {
              nodeType: 'text',
              value: EXPECTED_VALUE,
              marks: [],
              data: {}
            }
          ],
          data: { }
        }
      ]
    }
  },
  h1: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-1'
        }
      ]
    },
  },
  h2: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        }
      ]
    },
  },
  h3: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-3'
        }
      ]
    },
  },
  h4: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-4'
        }
      ]
    },
  },
  h5: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-5'
        }
      ]
    },
  },
  h6: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-6'
        }
      ]
    },
  },
  blockquote: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'blockquote',
          content: [
            {
              nodeType: 'text',
              value: EXPECTED_VALUE,
              marks: [],
              data: {}
            }
          ],
          data: {}
        }
      ]
    }
  },
  hr: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'hr',
          content: [
            {
              nodeType: 'text',
              value: EXPECTED_VALUE,
              marks: [],
              data: {}
            }
          ],
          data: {}
        }
      ]
    }
  },
  hyperlink: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: '',
              nodeType: 'text'
            },
            {
              data: {
                uri: 'www.google.com'
              },
              content: [
                {
                  data: {},
                  marks: [],
                  value: EXPECTED_VALUE,
                  nodeType: 'text'
                }
              ],
              nodeType: 'hyperlink'
            },
            {
              data: {},
              marks: [],
              value: '',
              nodeType: 'text'
            }
          ],
          nodeType: 'paragraph'
        },
      ]
    }
  },
  strong: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'bold'
                }
              ],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
      ]
    }
  },
  em: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'italic'
                }
              ],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
      ]
    }
  },
  u: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'underline'
                }
              ],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
      ]
    }
  },
  code: {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'code'
                }
              ],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
      ]
    }
  },
  'invalid-mark': {
    json: {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [
                {
                  type: 'invalid-mark'
                }
              ],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'heading-2'
        },
      ]
    }
  },
  ol: {
    json: {
      nodeType: 'document',
      data: { },
      content: [
        {
          nodeType: 'ordered-list',
          content: [
            {
              nodeType: 'list-item',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: '1',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ]
            },
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: '2',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            },
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: '3',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          data: {}
        },
      ]
    }
  },
  ul: {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: '1',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ]
            },
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: '2',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            },
            {
              nodeType: 'list-item',
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value: '3',
                      marks: [],
                      data: {}
                    }
                  ],
                  data: {}
                }
              ],
              data: {}
            }
          ],
          nodeType: 'unordered-list'
        }
      ]
    }
  },
  'embedded-entry': {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {
            target: {
              sys: {
                id: 'SYRsKQ7rH8jCZmWoc4cUu',
                type: 'Link',
                linkType: 'Entry'
              }
            }
          },
          content: [],
          nodeType: 'embedded-entry-block'
        }
      ]
    },
    links: {
      entries: {
        block: [
          {
            sys: {
              id: 'SYRsKQ7rH8jCZmWoc4cUu',
              publishedAt: '2021-01-29T23:55:49.792Z'
            },
            title: EXPECTED_VALUE
          }
        ]
      }
    }
  },
  'embedded-asset': {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {
            target: {
              sys: {
                id: '6nvWJT1AkM64so8Auue4QQ',
                type: 'Link',
                linkType: 'Asset'
              }
            }
          },
          content: [],
          nodeType: 'embedded-asset-block'
        }
      ]
    },
    links: {
      assets: {
        block: [
          {
            sys: {
              id: '6nvWJT1AkM64so8Auue4QQ'
            },
            title: EXPECTED_VALUE,
            url: 'https://images.ctfassets.net/xrzfvv18og30/6nvWJT1AkM64so8Auue4QQ/49f5fe4786c4b55589621fb450eae8f4/EngineeringHistory.png'
          }
        ]
      }
    }
  },
  'inline-embedded-entry': {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {
            target: {
              sys: {
                id: 'SYRsKQ7rH8jCZmWoc4cUu',
                type: 'Link',
                linkType: 'Entry'
              }
            }
          },
          content: [],
          nodeType: 'embedded-entry-inline'
        }
      ]
    },
    links: {
      entries: {
        inline: [
          {
            sys: {
              id: 'SYRsKQ7rH8jCZmWoc4cUu'
            },
            title: EXPECTED_VALUE
          }
        ]
      }
    }
  },
  'inline-entry-link': {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {
            target: {
              sys: {
                id: 'SYRsKQ7rH8jCZmWoc4cUu',
                type: 'Link',
                linkType: 'Entry'
              }
            }
          },
          content: [
            {
              data: {},
              marks: [],
              value: EXPECTED_VALUE,
              nodeType: 'text'
            }
          ],
          nodeType: 'entry-hyperlink'
        },
      ]
    },
    links: {
      entries: {
        hyperlink: [
          {
            sys: {
              id: 'SYRsKQ7rH8jCZmWoc4cUu'
            },
            title: EXPECTED_VALUE
          }
        ]
      }
    }
  },
  'inline-image-link': {
    json: {
      nodeType: 'document',
      data: {},
      content: [
        {
          data: {
            target: {
              sys: {
                id: '6nvWJT1AkM64so8Auue4QQ',
                type: 'Link',
                linkType: 'Asset'
              }
            }
          },
          content: [
            {
              data: {},
              marks: [],
              value: 'Image',
              nodeType: 'text'
            }
          ],
          nodeType: 'asset-hyperlink'
        }
      ]
    },
    links: {
      assets: {
        hyperlink: [
          {
            sys: {
              id: '6nvWJT1AkM64so8Auue4QQ'
            },
            title: EXPECTED_VALUE,
            url: 'https://images.ctfassets.net/xrzfvv18og30/6nvWJT1AkM64so8Auue4QQ/49f5fe4786c4b55589621fb450eae8f4/EngineeringHistory.png'
          }
        ]
      }
    }
  }
};
