import { createStore } from "vuex"

const store = createStore({
    state: {
    },
    actions: {
        createAccount: ({commit}, userInfos) => {
            commit;
            axios.post('/user', {
                firstName: "Fred",
                lastName: "Jamy"
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
        }
    }
})

export default store