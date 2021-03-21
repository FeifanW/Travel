
const mutations = {
    change_city (state, payload) {
        state.city = payload
        try {
            localStorage.city = payload
        } 
        catch (e) {}
    }
}

export default mutations