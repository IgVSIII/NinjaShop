<template> 
    <main>       
        <section class="flex-center-wrap">
            <section class ="flex-center-column-wrap">
                <section class="big-logo">                    
                    <div><h1>NINJA SHOP</h1></div>
                    <div class="circle"></div>
                </section>
                <section class="user-authorization">
                    <form>
                        <label for="user-name">Почта&nbsp;</label>
                        <input v-model.trim = "email" id="user-name" type="text" size="16">
                        <br>
                        <label for="password-name">Пароль</label>
                        <input v-model.trim = "password" id = "password-name" type="password" size="16">
                        <br>
                    </form>   
                    <span> {{error}} </span>  
                    <div v-on:click="getToken" class="enter-button"><b>Авторизоваться</b></div>                   
                </section>
            </section>                                     
        </section>
    </main>
</template>

<script>
import { config } from '../config';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
            uri: '',
        };
    },
    methods: {
        getToken: function() {

            const xhr = new XMLHttpRequest();
            xhr.open("POST", this.uri + "login", true);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

            xhr.send(JSON.stringify({email: this.email,
                      password: this.password}));

            xhr.onerror = () => {
                this.error = 'Что, то не так на сервере'
            }          
            
            xhr.onloadend = () => {
                if (xhr.status == 500) {
                    this.error = "Проверьте введеные значения"
                } else if (xhr.status !== 200) {
                    this.error = "Ошибка авторизации"
                } else {
                    localStorage.token = xhr.responseText;
                    window.location.href = window.location.href +  "main";
                    this.error = ''
                }
            }

        }
    },
    created: function() {
        this.uri = config.uri;
    }
      
}
</script>
