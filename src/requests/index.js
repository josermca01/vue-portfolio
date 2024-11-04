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
    reposList = res.data.data
  })
  .catch(err=>{console.log(err)})
export default reposList