# VueContentful
Vue-Contentful is a Vue 3 based plugin to handle Graph-QL outputs from the Contentful API

<hr>

## Usage
```js
import VueContentFul from 'vue-contentful';
```

```html
<vue-contentful :document="document">

  // Templates

</vue-contentful>
```

<hr>


## Block elements
Standard html elements are returned for rich text items such as:
* H1
* H2
* H3
* H4
* H5
* H6
* P
* UL
* OL
* LI
* BLOCKQUOTE
* HR

## Inline Elements
Text styling is also acheived with html elements:
* STRONG
* EM
* U
* CODE

Whilst these are not configurable, styling can be applied using CSS rules.

<hr>

