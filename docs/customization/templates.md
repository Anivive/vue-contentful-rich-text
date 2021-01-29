
## Available Templates
* embedded-asset
* embedded-entry
* inline-embedded-entry
* inline-asset-link
* inline-entry-link

To create a template a vue named slot should be used with a slot scope object to allow for the document properties to be handled as the user desires.

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
  <template #embedded-asset="item">
    <div>{{ item.title }}</div>
  </template>
```

### embedded-inline-entry
```html
  <template #embedded-asset="item">
    <div>{{ item.title }}</div>
  </template>
```

### inline-asset-link
```html
  <template #inline-entry-link="item">
    <a href="item.url">{{ item.title }}</div>
  </template>
```

### inline-entry-link
```html
  <template #inline-entry-link="item">
    <a href="item.url">{{ item.title }}</div>
  </template>
```

<hr>