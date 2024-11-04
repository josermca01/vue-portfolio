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