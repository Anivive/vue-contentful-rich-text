<div style="text-align:center" align="center">

![Package Logo](https://res.cloudinary.com/dzdcsnjvp/image/upload/v1612208324/software/vc-rectangle.png)


[![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)](/templates/LICENSE.md)
[![Vue](https://img.shields.io/badge/vue-3.0.5-%2342b883)](https://v3.vuejs.org/)
[![Typescript](https://img.shields.io/badge/typescript-4.1.3-blue)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/jest-26.6.3-red)](https://jestjs.io/en/)
[![Docsify](https://img.shields.io/badge/docsify-4.11.6-green)](https://docsify.js.org/#/)
[![Testing Coverage](https://img.shields.io/badge/coverage-100%25-green)](https://github.com/Anivive/vue-contentful)

# Vue-Contentful-Rich-Text

Vue 3 compatable plugin for outputting a Contentful Rich Text Field. 

Contentful is a modern content management solution, designed as a framework to serve content in a presentation-independant way.

---
</div> 


## Table of Contents

* [Getting Started](#getting-started)
* [Table of Contents](#table-of-contents)
* [Advanced Usage](#advanced-usage)
* [Contributing Guidelines](#contributing-guidelines)
* [Code Of Conduct](#code-of-conduct)
* [Bugs and Feature Requests](#bugs-and-feature-requests)
* [Copyright and License](#copyright-and-license)

---

## Getting Started
### Install
```
npm install @anivive/vue-contentful-rich-text
```

### Usage
```
import VueContentFul from 'vue-contentful-rich-text';
```

To use VueContentfulRichText, import the package onto your component directly and bind in the components key

```
export default {
  components: {
    VueContentfulRichText
  }
}
```

You can then add to your document markup where ever you need to display a Contentful Rich Text field, just pass in the field with the document property.


```
<vue-contentful-rich-text :document="richTextField" />
```

### Output
Rich text items are converted to basic block and inline html elements which can be styled using css.

***Block elements:***
```html
<h1> <h2> <h3> <h4> <h5> <h6> <p> <ul> <ol> <li> <hr> <blockquote>
```

***Inline elements:***
```html
<strong> <u> <em> <code>
```

---

## Advanced Usage
The Contentful Content Model allows for embedded entries and assets to be linked within a rich text field, to output these, Vue Templates and Scoped Slots can be used to allow for a custom implementation for each within your project. 


A rich-text object consists of `json` and `links` properties which descibe the 'document' and the embedded items' properties within. This plugin will handle getting the linked data from the links property by matching the `sys.id` field, which must be added in your query.

### embedded-asset
```html
  <template #embedded-asset="item">
    <div class="image-container">
      <img :src="item.url" :alt="item.title" />
    </div>
  </template>
```

### embedded-entry
```html
  <template #embedded-entry="item">
    <div>{{ item.title }}</div>
  </template>
```

### embedded-inline-entry
```html
  <template #embedded-inline-entry="item">
    <div>{{ item.title }}</div>
  </template>
```

### inline-asset-link
```html
  <template #inline-asset-link="item">
    <a href="item.url">{{ item.title }}</div>
  </template>
```

### inline-entry-link
```html
  <template #inline-entry-link="item">
    <a href="item.url">{{ item.title }}</div>
  </template>
```
---



## Contributing Guidelines
Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions
for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include relevant
unit tests. All HTML and CSS should conform to the Code Guide, maintained by Mark Otto.

---



## Code Of Conduct
Please read through our [code of conduct](CODE_OF_CONDUCT.md).

---



## Bugs and Feature Requests
Found a bug or have a feature request? Please first read the issue guidelines and search for
existing and closed issues.

If your problem or idea is not addressed yet, please
[open a new issue](https://github.com/Anivive/vue-package-starter/issues).



## Thanks
Thank you to all of you who have contributed to this package.
[[Contribute to the Project](CONTRIBUTING.md)]



## Copyright and License
Code and documentation copyright 2021 Anivive Lifesciences Code released under the [MIT License](LICENSE.md).

Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.



---



Status badges created using [Shields.io](https://github.com/badges/shields).
