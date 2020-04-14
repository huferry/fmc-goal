// https://fmc-goal-api.azurewebsites.net/
import axios from 'axios'

const getData = async ({culture}) => {
    const response = await axios.get(`https://fmc-goal-api.azurewebsites.net/api/goals?culture=${culture || 'id'}`)
    return response
        .data
        .sort((a,b) => a.publish_date - b.publish_date)
}


export default getData