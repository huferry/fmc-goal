// https://fmc-goal-api.azurewebsites.net/
import axios from 'axios'

class Cache {
    constructor() {
        this.lastUpdate = 0        
    }

    async _getData() {
        const response = await axios.get(`http://192.168.1.39:8080/api/goals`) // `https://fmc-goal-api.azurewebsites.net/api/goals`)
        this.lastUpdate = new Date().valueOf()
        return response.data.map(g => {
            g.publish_date = new Date(g.publishDate)
            return g
        })
    }

    async getData() {
        const MaxAgeInMSecs = 2*60*1000
        if (new Date().valueOf() - this.lastUpdate > MaxAgeInMSecs) {
            this.data = undefined
            this.lastUpdate = 0
        }
        this.data = this.data || this._getData()
        return this.data
    }

}

const cache = new Cache()

const getData = async ({culture}) => {
    var data = await cache.getData()
    return data.filter(g => g.culture === culture)
}


export default getData