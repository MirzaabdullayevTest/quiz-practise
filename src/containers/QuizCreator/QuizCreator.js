import React, { Component } from 'react'
import classes from './QuizCreator.module.css'
import { Button } from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import formFremwork from '../../form/formFremwork'
import Select from '../../components/Select/Select'


function createOption(number) {
  return formFremwork({
    errorMsg: `Option${number} required`,
    label: `Option${number}`
  }, { required: true })
}

function formControlsOption() {
  return {
    question: formFremwork({
      errorMsg: 'Question required',
      label: 'Question'
    }, { required: true }),
    option1: createOption(1),
    option2: createOption(2),
    option3: createOption(3),
    option4: createOption(4)
  }
}

export default class QuizCreator extends Component {
  state = {
    formControls: formControlsOption(),
    quiz: []
  }

  addQuestionHandler = (e) => {
    e.prevenetDefault()
  }

  createTestHandler = (e) => {
    e.prevenetDefault()
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
          valid={this.state.formControls[control].valid}
          shouldValidate={!!this.state.formControls[control].validation}
          errorMsg={this.state.formControls[control].errorMsg}
        />
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz Creator</h1>
          <form>
            {this.renderInputs()}

            <Select
              label="Right answer"
              type="select"
              options={
                [
                  { text: 'Option 1', value: '' },
                  { text: 'Option 2', value: '' },
                  { text: 'Option 3', value: '' },
                  { text: 'Option 4', value: '' }
                ]
              }
            />

            <Button type="primary" onClick={this.addQuestionHandler}>
              Add question
            </Button>

            <Button type="success" onClick={this.createTestHandler}>
              Create test
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
