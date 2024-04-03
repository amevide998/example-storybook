<template>
    <div>
        <div>
            <h3>Login</h3>
        </div>
        <div>
            <label for="email">email</label>
            <input id="email" type="email" />
        </div>
        <div>
            <label for="password">password</label>
            <input id="password" type="password" />
        </div>
        <div>
            <p v-if="!errorMessage != ''">{{ errorMessage }}</p>
        </div>
        <div>
            <button id="button" class="submit" @click="goToNext()">
                <text v-if="!loading">Submit</text>
                <text v-else>Loading...</text>
            </button>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            loading : false,
            errorMessage: ''
        }
    },
    methods: { 
        goToNext(){
            this.loading = true,
            setTimeout(()=> {
                // const email = document.getElementById('email') 
                // if(email.value == ' '){
                //     this.errorMessage = 'email is required !!'
                // }
                // this.redirect()
            }, 2000)
        }
    },
    props: {
        redirect : {
            type : Function
        }
    }
}
</script>

<style scoped>
</style>