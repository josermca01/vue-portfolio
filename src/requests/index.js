import axios from 'axios'
import query from './query'
let reposList = []
const repos = await axios.post(
    `https://api.github.com/graphql`,
    {
      query
    },

    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_GRAPHQL_KEY,
      },
    }
).then((res)=>{
  for (const element of res.data.data.viewer.pinnedItems.edges) {
    const arrayAux=[];
    for (const lang of element.node.languages.nodes) {
      arrayAux.push(lang.name);
    }
    reposList.push({
      name: element.node.name,
      description: element.node.description,
      stargazerCount: element.node.stargazerCount,
      html_url: element.node.url,
      language: arrayAux,
    });
    console.log(reposList);
  }})
  .catch(err=>{console.log(err)})
export default reposList