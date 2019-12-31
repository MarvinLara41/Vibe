const workOut = require('../models/workOut.js');

module.exports = {
    workOut: function(req, res) {
    const {body} = req;
    const {
        date,
        exercise,
        sets,
        reps,
        weight
    }= body;
    
    
    //if error checks incase the user forgets to enter information
    if (!date){
        return res.send({
            success: false, 
            message: 'Error: must fill in date'
        });
    }
    if (!exercise){
        return res.send({
            success: false, 
            message: 'Error: must fill in exercise'
        });
    }


        //save new workout
        const Exercise = new workOut();
        Exercise.date = date;
        Exercise.exercise = exercise;
        Exercise.reps = reps;
        Exercise.sets = sets;
        Exercise.weight = weight;

        Exercise.save((err,work) => {
            if (err){
                return res.send({
                success: false, 
                message: 'Server error'
            });
        }
        return res.send({
            success: true, 
            message: 'workout saved'
        });
    });
  }
}
