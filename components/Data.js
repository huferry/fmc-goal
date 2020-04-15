// https://fmc-goal-api.azurewebsites.net/
import axios from 'axios'

class Cache {
    constructor() {
        this.lastUpdate = 0        
    }

    async _getData() {

        function parseDate(s) {
            const matchDate = s.match(/(\d{4})(\d{2})(\d{2})/)
            if (matchDate) {
                return new Date(
                    parseInt(matchDate[1]), 
                    parseInt(matchDate[2])-1, 
                    parseInt(matchDate[3]))
            } 
            return new Date(2000, 1, 1)
        }

        const response = await axios.get(`https://fmc-goal-api.azurewebsites.net/api/goals`)
        this.lastUpdate = new Date().valueOf()
        return response.data.map(g => {
            g.publish_date = parseDate(g.publishDate)
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