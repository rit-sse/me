import React from 'react';
import { connect } from 'react-redux';
import LogIn from '../components/log-in';
import { signOut, checkLogin } from '../actions/auth';

function mapStateToProps(state) {
  return {
    auth: state,
  };
}

class MeApp extends React.Component {
  constructor() {
    super();

    this.renderLogIn = this.renderLogIn.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(checkLogin());
  }

  renderLogIn() {
    if (!this.props.auth.signedIn) {
      return (
        <li>
          <LogIn key='login' dispatch={this.props.dispatch} />
        </li>
      );
    }
    return (
      <li>
        <button
          id='sign-out'
          key='logout'
          className='btn'
          onClick={() => this.props.dispatch(signOut())}
        >
          Sign Out
        </button>
      </li>
    );
  }

  renderBody() {
    if (this.props.auth.signedIn) {
      return (
        <div className='jumbotron'>
          <h2>Your name is:</h2>
          <h1>
            {`${this.props.auth.user.firstName} ${this.props.auth.user.lastName}`}
          </h1>
          <p>
            If you have a problem fix it <a target='_blank' href='https://start.rit.edu/NamePreference/'>here</a>
          </p>
        </div>
      );
    }
    return (
      <span />
    );
  }

  render() {
    return (
      <div className='container'>
        <div id='header' className='page-header'>
          <div className='flex'>
            <h1 className='text-left'>
              Me
              <small> Update yourself</small>
            </h1>
            <ul className='list-inline bottom-align hidden-xs'>
              {this.renderLogIn()}
            </ul>

          </div>
        </div>
        {this.renderBody()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(MeApp);
