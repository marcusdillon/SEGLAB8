import React, { Component } from 'react';

class NavAppointment extends Component {

    constructor(props) {
        super(props);
        this.state = {
          availability: [{ date: '', time: '' }],
          advice: '',
          advisor: '',
          phoneNumber: '',
          formSubmitted: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e, index) {
        const { name, value } = e.target;
        const list = [...this.state.availability];
        list[index][name] = value;
        this.setState({ availability: list });
    }
    
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleAdd() {
        this.setState({ availability: [...this.state.availability, { date: '', time: '' }] });
    }
    
    handleRemove(index) {
        const list = [...this.state.availability];
        list.splice(index, 1);
        this.setState({ availability: list });
    }

    handleSubmit(e) {
        if (window.confirm('Do you really want to submit the form?')) {
            e.preventDefault();
            this.setState({ formSubmitted: true });
        } else {
            this.setState({ formSubmitted: false });
        }
        
    }

    render() {
        if (this.state.formSubmitted) {
            return (
                <h2>Form Submitted!</h2>
            )
        } else {
            return (
                <div class="appointment">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <h2>Provide User Info</h2>
                        <label for="f_name">First Name</label>
                        <input type="text" id="f_name" name="f_name" required/><br></br>
                        <label for="l_name">Last Name</label>
                        <input type="text" id="l_name" name="l_name" required/><br></br>
                        <label for="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" pattern="^[0-9]{10}$" placeholder="Enter phone number" maxlength="10" required
                            onChange={this.handleInputChange}
                            onKeyDown={(e) => {
                                if (!(/[0-9]/.test(e.key)) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)) {
                                e.preventDefault();
                                }
                            }}
                        /><br></br>

                        <h2>What is your aptitude and knowledge regarding investing?</h2>
                        <input type="radio" id="beginner" name="interest" value="beginner" required/>
                        <label for="beginner">beginner</label><br></br>
                        <input type="radio" id="intermediate" name="interest" value="intermediate"/>
                        <label for="intermediate">intermediate</label><br></br>
                        <input type="radio" id="advanced" name="interest" value="advanced"/>
                        <label for="advanced">advanced</label><br></br>
                        <input type="radio" id="unsure" name="interest" value="unsure"/>
                        <label for="unsure">unsure</label><br></br>

                        <h2>What type of advice are you looking for?</h2>
                        <select id="advice" name="advice" required onChange={this.handleInputChange}>
                            <option value="">Choose type of Advice</option>
                            <option value="General Advice">General Advice</option>
                            <option value="Comprehensive Advice">Comprehensive Advice</option>
                        </select>

                        <h2>Select your availability:</h2>
                        {this.state.availability.map((item, index) => (
                            <div key={index}>
                            <label htmlFor={`date-${index}`}>Date:</label>
                            <input
                                type="date"
                                id={`date-${index}`}
                                name="date"
                                value={item.date}
                                onChange={(e) => this.handleChange(e, index)}
                            />
                            <label htmlFor={`time-${index}`}>Time:</label>
                            <input
                                type="time"
                                id={`time-${index}`}
                                name="time"
                                value={item.time}
                                onChange={(e) => this.handleChange(e, index)}
                            />
                            {this.state.availability.length > 1 && (
                                <button type="button" onClick={() => this.handleRemove(index)}>
                                Remove
                                </button>
                            )}
                            </div>
                        ))}
                        <button type="button" onClick={() => this.handleAdd()}>
                            Add Availability
                        </button>
                        
                        <h2>Select a Financial Advisor</h2>
                        <select id="advisor" name="advisor" required onChange={this.handleInputChange}>
                            <option value="">Choose Your Advisor</option>
                            <option value="Emily Davis">Emily Davis</option>
                            <option value="Jack Wilson">Jack Wilson</option>
                            <option value="Sarah Adams">Sarah Adams</option>
                            <option value="Ethan Lee">Ethan Lee</option>
                        </select>
                        
                        <h2>Additional Comments:</h2>
                        <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                        <br></br>
                        <br></br>
                        <input type="submit" value="Submit"/>

                    </form>


                </div>
            )
        }
    }
}

export default NavAppointment
