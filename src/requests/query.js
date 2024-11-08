export default `{
  viewer{
    pinnedItems(first: 6, types: [REPOSITORY]){
      totalCount
      edges{
        node{
          ...on Repository{
            id
            name
            url
            stargazerCount
            description
            languages(first:3){
              nodes{
                name
              }
            }
          }
        }
      }
    }
  }
}`