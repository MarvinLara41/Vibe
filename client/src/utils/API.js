import axios from "axios";

export default {
  sign_In: function(type, callback) {
    let URL = "/api/signIn/signIn"; // change to sign in

    axios
      .post(URL, {
        email:type.email,//login route
        password:type.password
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, 

  workOut:function(type, callback) {
    let URL = "/api/workout/workout"; 

    axios
      .post(URL, {
        date:type.date,//login route
        exercise:type.exercise,
        sets:type.sets,
        reps: type.reps,
        weight:type.weight
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, 
}