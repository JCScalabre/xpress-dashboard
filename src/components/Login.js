import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <Input icon='mail' iconPosition='left' placeholder='you@info.com ...' />
                </div>
            </div>
        );
    }
}