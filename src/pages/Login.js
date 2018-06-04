import React, { Component } from 'react';
import { Button, Form, Container, Header, Divider, Message, Image } from 'semantic-ui-react'

export default class Login extends Component {

    render() {

        return (
            <div>
                <Container style={{marginTop: "200px", width:"30%", color:"grey", backgroundColor: "white", padding:"30px"}}>
                    <Container style={{marginBottom: "30px"}}>
                        <Image centered src='/images/xta_logo.png' size='medium'/>
                    </Container>
                    <Form>
                        <Header as='h2'>Sign In</Header>
                        <Divider />
                        <p>To sign into your personal dashboard, enter your email and click on the link enclosed.</p>
                        <Form.Input
                            icon="mail"
                            iconPosition="left"
                            placeholder='you@info.com'
                            name="email"
                            value={this.props.value}
                            onChange={this.props.handleChange}
                        />
                        <Button fluid onClick={this.props.handleSubmit} style={{backgroundColor: "#3b3872", color: "#ffffff"}}>Send Link</Button>
                        {(this.props.message !== "")
                            ?
                            this.props.isSuccess === true
                                ?
                                    (<Message positive> {this.props.message} </Message>)
                                :
                                    (<Message negative> {this.props.message} </Message>)
                            : ""}
                    </Form>
                </Container>
            </div>
        );
    }
}