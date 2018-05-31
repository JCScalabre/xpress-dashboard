import _ from "lodash";
import React, { Component } from "react";
import {
    Container,
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive
} from "semantic-ui-react";

const NavBarMobile = ({
    children,
    topItems,
    onPusherClick,
    onToggle,
    bottomItems,
    visible
}) => (
    <Sidebar.Pushable>
        <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            items={topItems}
            vertical
            visible={visible}
        />
        <Sidebar.Pusher
            dimmed={visible}
            onClick={onPusherClick}
            style={{ minHeight: "100vh" }}
        >
        <Menu fixed="top" icon="labeled">
            <Menu.Item>
                <Image size="small" href="https://xpresstaxappeals.com/" src={require('../content/images/xta_logo.png')} alt="XpressTaxAppeals"/>
            </Menu.Item>
            <Menu.Item onClick={onToggle}>
                <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Menu position="right">
                {_.map(bottomItems, item => <Menu.Item {...item} />)}
            </Menu.Menu>
        </Menu>
        {children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>
);

const NavBarDesktop = ({ topItems, bottomItems }) => (
    <Menu fixed="left" vertical  icon="labeled">
        <Menu.Item>
            <Image size="small" href="https://xpresstaxappeals.com/" src={require('../content/images/xta_logo.png')} alt="XpressTaxAppeals"/>
        </Menu.Item>
            {_.map(topItems, item => <Menu.Item {...item} />)}
        <Menu.Menu>
            {_.map(bottomItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
    </Menu>
);

const NavBarChildren = ({ children }) => (
    <Container style={{ marginTop: "5em" }}>{children}</Container>
);

export default class NavBar extends Component {
    
    state = {
        visible: false
    };

    handlePusher = () => {
        const { visible } = this.state;

        if (visible) this.setState({ visible: false });
    };

    handleToggle = () => this.setState({ visible: !this.state.visible });

    render() {
        const { children, topItems, bottomItems } = this.props;
        const { visible } = this.state;

        return (
            <div>
                <Responsive {...Responsive.onlyMobile}>
                    <NavBarMobile
                        topItems={topItems}
                        onPusherClick={this.handlePusher}
                        onToggle={this.handleToggle}
                        bottomItems={bottomItems}
                        visible={visible}
                    >
                    <NavBarChildren>{children}</NavBarChildren>
                    </NavBarMobile>
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <NavBarDesktop onClick={this.props.test} topItems={topItems} bottomItems={bottomItems} />
                    <NavBarChildren>{children}</NavBarChildren>
                </Responsive>
            </div>
        );
    }
}
