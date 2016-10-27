namespace sampledata.Controllers {

  const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=";
  const apiKey = "&appid=ddf4617215c851dc1872708540707032";

    export class HomeController {

      public search;
      public forecast;

      fetch() {
          if (this.search) {
              console.log('searching');
              this.$http.get(apiURL + this.search + apiKey)
                  .then((results) => {
                    console.log(this.forecast);
                      this.forecast = results.data;
                  });
          }
      }

      constructor(private $http: ng.IHttpService) { }
  }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
