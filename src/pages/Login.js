import React, { Component } from 'react';
import { Button, Form, Container, Header, Divider } from 'semantic-ui-react'

export default class Login extends Component {

    render() {

        return (
            <div>
                <Container style={{marginTop: "200px", width:"30%", color:"grey"}}>
                    <Form>
                        <Header as='h2'>Sign In</Header>
                        <Divider />
                        <p>Please enter your email to receive a link that will sign you in instantly.</p>
                        <Form.Input
                            icon="mail"
                            iconPosition="left"
                            placeholder='you@info.com'
                            name="email"
                            value={this.props.value}
                            onChange={this.props.handleChange}
                        />
                        <Button fluid onClick={this.props.handleSubmit} style={{backgroundColor: "#3b3872", color: "#ffffff"}}>Send Link</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}