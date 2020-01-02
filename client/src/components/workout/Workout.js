import React, { Component } from 'react';
import './style.css';
import API from "../../utils/API";

class Workout extends Component {
    constructor(props){
        super(props)

        this.state={
            date: "",
            exercise: "",
            sets: "",
            reps: "",
            weight: "",  
            message: {}
        }

        
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleExerciseChange = this.handleExerciseChange.bind(this);
        this.handleRepChange = this.handleRepChange.bind(this);
        this.handleSetChange = this.handleSetChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.previousForm = this.previousForm.bind(this);
    }

    handleDateChange (e){
        this.setState({
            date: e.target.value
        })
    }

    handleExerciseChange (e){
        this.setState({
            exercise: e.target.value
        })
    }

    handleSetChange (e){
        this.setState({
            sets: e.target.value
        })
    }

    handleRepChange (e){
        this.setState({
            reps: e.target.value
        })
    }

    handleWeightChange (e){
        this.setState({
            weight: e.target.value
        })
    }

    formSubmit(e){
        e.preventDefault();

        API.workOut( this.state, cb => {

            this.setState({
                message: cb.data
            });

            if (cb.data.success){
                console.log(this.setState)
            }
        })
    }

    previousForm(e){
        e.preventDefault();

        API.previousWorkOut(this.state, res =>{
          
            
        })
    }

    render(){

        return(
        <div className="main">
            <h3>Workout page</h3>
                <div className="previousWorkOut">
                    <div class="previous">
                    <h3>Previous WorkOut</h3>
                    <form onSubmit={this.previousForm}>
                        <div> {this.setState.date}</div>
                        <div>{this.handleExerciseChange}</div>
                        <div>{this.handleRepChange}</div>
                        <div>{this.handleSetChange}</div>
                        <div>{this.handleWeightChange}</div>
                        <button>Previous WorkOut</button>
                    </form>
                    </div>
                </div>
                <div className="newWorkOut">
                    <form onSubmit={this.formSubmit}>
                        <input
                        placeholder="Date"
                        type="text"
                        value={this.state.date}
                        onChange={this.handleDateChange} />
                        <br />
                        <input
                        placeholder="Exercise"
                        type="text"
                        value={this.state.exercise}
                        onChange={this.handleExerciseChange} />
                        <br />
                        <input
                        placeholder="Sets"
                        type="text"
                        value={this.state.sets}
                        onChange={this.handleSetChange} />
                        <br />
                        <input
                        placeholder="Reps"
                        type="text"
                        value={this.state.reps}
                        onChange={this.handleRepChange} />
                        <br />
                        <input
                        placeholder="Weight"
                        type="text"
                        value={this.state.weight}
                        onChange={this.handleWeightChange} />
                        <br />
                        <button> Add Workout </button>
                    </form>
                </div>
        </div>
        )
    }
}

export default Workout;