import axios from "axios";
const state= {
    user:{ }
};
const getters= {};
const actions= {
    getUser( {commit}){
      axios.get("api/user/current")
          .then(response => {
            commit('setUser', response.data);
          });
    },
    loginUser( {},user){
        axios.post("/api/user/login",{
            email: user.email,
            password: user.password
        })
            .then( response =>{
               if( response.data.access_token){
                   localStorage.setItem(
                       "blog_token",
                           response.data.access_token
                   )
                   window.location.replace("/home")
               }
        })
    },
    registerUser({},user){
        axios.post("/api/user/",{
            name:user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
        }).then( response => {
                if (response.data.access_token) {
                    localStorage.setItem(
                        "blog_token",
                        response.data.access_token
                    )
                    window.location.replace("/home")
                }
         }).catch(error => {
            if (error.response.status == 422){
                this.errors = error.response.data.errors;
                console.log(this.errors);

            }
            // console.log(this.errors);
            });

    }
};
const mutations= {
    setUser(state,data){
        state.user = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
