import React , {Component} from 'react';
import moment from 'moment';
import { Formik,Form, Field, ErrorMessage } from 'formik';
import TodoService from '../../api/todos/TodoService';
import AuthenticationService from './authentication/AuthenticationService';

class AddTodoComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.match.params.id,
            description : "",
            targetDate : null
        }
        this.submitUpdateForm = this.submitUpdateForm.bind(this);
        this.validateUpdateForm = this.validateUpdateForm.bind(this);
    }

    componentDidMount() {

        console.log(this.state.id);

        if(this.state.id === 'create') {
            return
        }
        TodoService.getOneTodoOfUser(AuthenticationService.getUserLoggedIn(), this.state.id)
                    .then(response => {
                        this.setState({
                            id : response.data.id,
                            description : response.data.description,
                            targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
                        })
                    });     
    }

    submitUpdateForm(values) {
        let name = AuthenticationService.getUserLoggedIn();
        if(this.state.id === 'create') {
            TodoService.createTodoOfUser(name, values)
                        .then(response => this.props.history.push(`/todos`));
        } else {
            TodoService.updateTodoOfUser(name, this.state.id, values)
                    .then(response => this.props.history.push(`/todos`));
        }
    }

    validateUpdateForm(values) {
        let errors = {}
        if(! values.description) {
            console.log("No description")
            errors.description = "Description can't be empty";
        } else {
            if(values.description.length < 10) 
                errors.description = "Description should be atleast 10 characters long";
        }
        if(!moment(values.targetDate).isAfter()) {
            errors.targetDate = "Target Date can be today or any future date can't be past date.."
        }
        return errors;
    }

    render() {

        let {description, targetDate} = this.state;

        return(
            <div className="container">
                Add Your Todo Here... {this.props.match.params.id}
                <div className="container">
                    <Formik initialValues={{ description , targetDate }} 
                            validate={this.validateUpdateForm}
                            onSubmit={this.submitUpdateForm}
                            enableReinitialize={true}
                            validateOnBlur={true}
                            validateOnChange={true}>
                        {
                            (props) => (
                                <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                        
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                    { this.state.id === 'create' && <button className="btn btn-block btn-success" type="submit"> SAVE </button>}
                                    { this.state.id !== 'create' &&<button className="btn btn-block btn-warning" type="submit"> UPDATE </button>}
                                </Form>
                            )
                        }        
                    </Formik>
                </div>
            </div>
        );
    }
}

export default AddTodoComponent;