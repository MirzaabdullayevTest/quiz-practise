import React, { Component } from 'react'
import classes from './Auth.module.css'
import { Button } from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import is from 'is_js'

export default class Auth extends Component {
    state = {
        formControls: {
            email: {
                type: 'email',
                label: 'Email',
                value: '',
                touched: false,
                errorMsg: 'Invalid email',
                valid: true,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                type: 'password',
                label: 'Password',
                value: '',
                touched: false,
                errorMsg: 'Invalid password',
                valid: true,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
        }
    }
    onLoginHandler = () => {

    }

    onRegisterHandler = () => {

    }

    validControl = (value, validation) => {
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== ''
        }

        if (validation.email) {
            isValid = is.email(value)
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls }
        const control = { ...this.state.formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validControl(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((control, index) => {
            return (
                <Input
                    key={index}
                    type={this.state.formControls[control].type}
                    label={this.state.formControls[control].label}
                    value={this.state.formControls[control].value}
                    touched={this.state.formControls[control].touched}
                    onChange={(event) => this.onChangeHandler(event, control)}
                    valid={this.state.formControls[control].valid}
                    shouldValidate={!!this.state.formControls[control].validation}
                    errorMsg={this.state.formControls[control].errorMsg}
                />
            )
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Auth</h1>
                    <form className={classes.AuthForm} onSubmit={this.onSubmitHandler}>
                        {
                            this.renderInputs()
                        }

                        <Button
                            type="success"
                            onClick={this.onLoginHandler}
                        >Login
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.onRegisterHandler}
                        >Register
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}
