let appVue = new Vue ({
    el: '#app',
    data: {
        cityName: '',
        request:'',
        min:''

    },
    methods: {
        makeRequest() {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.cityName + '&appid=09428684b8272cbafc39db375ecb991d')
          .then(response => this.request = response.data.main)
          this.min = this.request.temp_min
      },
    }
    
    
})