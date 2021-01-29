
## Contentful API
A document is the returned response from the Graph QL API found here: [Contentful GraphQL API](https://www.contentful.com/developers/docs/references/graphql/). To output properties from an RTF section can be done like this: 

```gql
fragment imageParts on Asset {
  title
  description
  contentType
  fileName
  size
  url
  width
  height
}

fragment articleParts on Article {
  sys {
    id
    publishedAt
  }
  title
  description
  primaryImage {
    ...imageParts
  }
  category {
    name
  }
}

fragment richTextParts on ArticleBody {
  json
  links {
    assets {
      hyperlink {
        sys {
          id
        }
        title
        url
      }
      block {
        sys {
          id
        }
        title
        url
      }
    }
    entries {
      inline {
        sys {
          id
        }
        ... on Article {
          ...articleParts
        }
      }
      block {
        sys {
          id
        }
        ... on Article {
          ...articleParts
        }
      }
      hyperlink {
        sys {
          id
        }
        ... on Article {
          articleParts
        }
      }
    }
  }
}

query {
  articleCollection(limit: 1, where: {
    sys: {
      id: "${id}"
    }
  }) {
    items {
      ... on Article {
        ...articlePart
      }

      sys {
        id
        publishedAt
        publishedVersion
      }
    }
  }
}
        
```

Where article is a document type in your contentful types and article parts would be a fragment containing the 'article' properties you would like to access, it can also be customized for each template type if desired.
<hr>
