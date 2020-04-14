// https://fmc-goal-api.azurewebsites.net/
import axios from 'axios'

const cache = {
    lastUpdate: undefined
}

const getData = async ({culture}) => {
    if (!cache.data) {
        const response = await axios.get(`https://fmc-goal-api.azurewebsites.net/api/goals`)
        cache.data = response.data
    }
    return cache.data.filter(g => g.culture === culture)
}


export default getData