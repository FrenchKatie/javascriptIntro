//Object Coding Pattern

var app = {
      propertyTest: "katie",
      config: {
            settingA: true,
            language: "en",
            colorSchemeA: "blue",
            colorSchemeB: "red"
      },
      saySomething: function () {  //This is now a method not a function as it is in an object
            console.log("where in the world is " + app.propertyTest + " today?");
      },
      init: function () {
            this.config.settingA = false;
            this.saySomething();
            console.log(app.config.settingA);
            console.log(this);
      },
      argumentMethod: function (updater) {
            app.config.colorSchemeA = updater;
            console.log(app);
      }
}

app.argumentMethod("green");
//Go to terminal and type "node objectCodingPattern.js" to log this
console.log(app.init());
