<template>
    <div>
        <div class="form-group">
            <label for="exampleInputName">Name</label>
            <input type="text" class="form-control" v-model="user.name" id="exampleInputName" >
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" v-model="user.email" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="user.password" id="exampleInputPassword1">
        </div>
        <div class="form-group">
            <label for="exampleInputPasswordConfirmation">Password</label>
            <input type="password" class="form-control" v-model="user.password_confirmation" id="exampleInputPasswordConfirmation">
        </div>

        <button type="submit" @click="register" class="btn btn-primary">Submit</button>
    </div>
</template>


    <script>
    export default {
        data: () =>({
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                errors: {}
            },
        }),
        methods:{
            register() {
                this.$store.dispatch('currentUser/registerUser', this.user)

            }
        }
    }
</script>


<style scoped>

</style>
