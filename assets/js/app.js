let appVue = new Vue({
    el: '#app',
    data: {
        cityName: '',
        emailName:'',
        request: '',
        min: '',
        max: '',
        temp: '',
        feels: '',
        pression: '',
        humidity: '',
        regex: /[^A-Za-z]+$/,
        error: false,
        display: false,
        regexMail: /[^a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        errorMail: false

    },
    methods: {
        makeRequest() {
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.cityName + '&appid=09428684b8272cbafc39db375ecb991d')
                .then(response => this.request = response.data.main)
            
        },
        displayForm: function() {
            this.display = !this.display
        },
        celsius() {
            this.temp = parseInt(this.request.temp - 274.15)
            this.min = parseInt(this.request.temp_min - 274.15)
            this.max = parseInt(this.request.temp_max - 274.15)
            this.feels = parseInt(this.request.feels_like - 274.15)
            this.pression = this.request.pressure
            this.humidity = this.request.humidity

        },
        check() {
            if (this.regex.test(this.cityName)) {
                return this.error = true
            }
            else {
                return this.error = false
            }
        },
        checkMail() {
            if (this.regexMail.test(this.emailName)) {
                return this.errorMail = true
            }
            else {
                return this.errorMail = false
            }
        }
    },

})