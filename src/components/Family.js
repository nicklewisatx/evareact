import React from 'react'

class Family extends React.Component {
  state = {
    familyMessage: 'Enter your first name and we shall see.',
  }

  familyChecker = event => {
    const familyList = new Map([
      ['Nana', 'Grandma'],
      ['Nick', 'Uncle'],
      ['Eva', 'Me!'],
      ['Laura', 'Mom'],
      ['Peggy', 'Great Grandama!'],
      ['Sammy', 'Brother'],
      ['Duffy', 'Grandpa'],
    ])
    // this is what you entered into the form
    const value = event.target.value
    // we check if the value is in the list
    if (familyList.get(value)) {
      this.setState({
        familyMessage: value + ' is my ' + familyList.get(value),
      })
    }
    else {
      this.setState({
        familyMessage:
          'This website does not think "' + value + '" is family.',
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <section id="contact">
        <div className="inner">
          <section>
            <form onSubmit={this.handleSubmit}>
              <div className="field first">
                <label htmlFor="name">First</label>
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.familyChecker}
                />
              </div>
              <h3>{this.state.familyMessage}</h3>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope"></span>
                <h3>Results</h3>
                <span>
                  You've entered: {this.state.firstName} {this.state.lastName}
                </span>
                <h3>{this.state.familyMessage}</h3>
              </div>
            </section>
          </section>
        </div>
      </section>
    )
  }
}
export default Family
