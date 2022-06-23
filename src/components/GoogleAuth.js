import React from 'react';
import { connect } from 'react-redux';

import { signInAction, signOutAction } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        // Initialize the library
        window.gapi.load('client:auth2', () => {
          window.gapi.client.init({
            clientId: "809170041099-p8canmrk6bluiur35vfrcf48uslktlp8.apps.googleusercontent.com",
            scope: 'email',
            plugin_name: "WILLTV"
          }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            // Callback function caso isSignedIn mude:
            // função listen vinda de _proto_ de isSignedIn
            this.auth.isSignedIn.listen(this.onAuthChange);
          });  
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signInAction(this.auth.currentUser.get().getId());
        } else {
            this.props.signOutAction();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return <div className="ui text active loader"></div>
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className='ui red google button'>
                    <i className='google icon' />
                    Sign Out
                </button>
            );
        } else{
            return (
                <button onClick={this.onSignInClick} className='ui red google button'>
                    <i className='google icon' />
                    Sign in with Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { signInAction, signOutAction })(GoogleAuth);