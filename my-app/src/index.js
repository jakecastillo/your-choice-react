import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List, Input, Label } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
        <Container>
          <Menu.Item fitted position="right"><Icon positon="right" name="facebook f"/></Menu.Item>
          <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
          <Dropdown item text="USD" icon="dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>CAD</Dropdown.Item>
              <Dropdown.Item>JPY</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item><hr/></Menu.Item>
        </Container>
    </Menu>
  )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div class="yourchoice-background">
          <Grid centered>
            <Menu.Item left><Icon name="search"/></Menu.Item>
          <Dropdown item text="Stickers">
            <Dropdown.Menu>
              <Dropdown.Item>Lorem ipsum</Dropdown.Item>
              <Dropdown.Item>Lorem ipsum</Dropdown.Item>
              <Dropdown.Item>Lorem ipsum</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            <Dropdown item text="Apparel">
              <Dropdown.Menu>
                <Dropdown.Item>Lorem ipsum</Dropdown.Item>
                <Dropdown.Item>Lorem ipsum</Dropdown.Item>
                <Dropdown.Item>Lorem ipsum</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              <Menu.Item>Car</Menu.Item>
            <img src="//cdn.shopify.com/s/files/1/0738/5885/files/NEBAJAPA2N3_150x.png?v=1557187274"></img>
              <Menu.Item>F.A.Q</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Photo blog</Menu.Item>
            <Menu.Item left><Icon name="user icon"/></Menu.Item>
            <Menu.Item left><Icon name="shopping bag"/></Menu.Item>
          </Grid>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Container>
            <Grid left>
            <Grid columns={3} divided>
                <Grid.Column>
                <Menu.Item>Search</Menu.Item>
                <Menu.Item>F.A.Q</Menu.Item>
                <Menu.Item>Contact</Menu.Item>
                <img src="https://cdn.shopify.com/s/files/1/0738/5885/files/boxcatmail_x100@2x.png?v=1557187666"></img>
                </Grid.Column>

                <Grid.Column>
                <Menu.Item>NEWSLETTER SIGN UP</Menu.Item>
                  <form>
                    <label>
                      Name:
                      <input type="text" email="email" />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                    <Icon name="black button">Join</Icon>
                </Grid.Column>
                </Grid>
            </Grid>
          </Container>
        </div>
    )
  }
}
class YourChoice extends React.Component {

  render() {
    return (
        <div>
        <TopMenu/>
        <MiddleMenu/>
        <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<YourChoice/>, document.getElementById('root'));