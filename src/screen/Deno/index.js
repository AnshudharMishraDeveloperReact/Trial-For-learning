import React, {Component} from 'react';
import {
  Text,
  View,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Subtitle,
  Segment,
  ListItem,
  Container,
  CheckBox,
  Icon,
} from 'native-base';
import {Image} from 'react-native'
let userList = require('../../../userList.json');
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      deletionArray: [],
      allSelected: false,
    };
  }
  componentDidMount() {
    this.setState({users: userList});
  }

  deleteAllItems() {
    this.setState({users: []});
  }

  deleteItem(index) {
    let helperArray = this.state.users;
    let helperArray2 = this.state.deletionArray;
    helperArray.splice(index, 1);
    let itemIndex = helperArray2.indexOf(index);
    helperArray2.splice(itemIndex, 1);
    this.setState({users: helperArray, deletionArray: helperArray2});
  }

  deletedSelectedItems() {
    let helperArray = this.state.users;
    let helperArray2 = this.state.deletionArray;
    for (let i = helperArray2.length - 1; i >= 0; i--) {
      helperArray.splice(helperArray2[i], 1);
      helperArray2.splice(i, 1);
    }
    this.setState({
      users: helperArray,
      deletionArray: helperArray2,
    });
  }

  selectAll() {
    let helperArray = [];
    for (let index = 0; index < this.state.users.length; index++) {
      if (!this.state.allSelected) {
        helperArray.push(index);
      } else if (this.state.allSelected) {
        helperArray = [];
      }
    }
    this.setState({
      deletionArray: helperArray,
      allSelected: !this.state.allSelected,
    });
  }

  selectAnItem(index) {
    let helperArray = this.state.deletionArray;
    let ItemIndex = helperArray.indexOf(index);
    if (helperArray.includes(index)) {
      helperArray.splice(ItemIndex, 1);
      this.setState({allSelected: false});
    } else {
      helperArray.push(index);
    }
    this.setState({deletionArray: helperArray});
  }
  render() {
    return (
      <Container>
        <Header style={{
                  backgroundColor:"#fff",
                  alignItems:"center",
                  justifyContent:"center"

                }}>
          <Body
            style={{
            alignItems:"center",
            justifyContent:"center"
            }}>
            <Title style={{
              color:"#000"
            }}>Total Users : {this.state.users.length} </Title>
            <Subtitle style={{
              color:"#000"
            }}>
              Selected User : {this.state.deletionArray.length}
            </Subtitle>
          </Body>
        </Header>
        <Segment style={{
          backgroundColor:"#00a8ff"
        }}>
          <Button first onPress={() => this.deletedSelectedItems()}>
            <Text>Delete Selected</Text>
          </Button>
          <Button onPress={() => this.selectAll()}>
            <Text>
              {this.state.allSelected ? 'Unselect All' : ' select All'}
            </Text>
          </Button>
          <Button last onPress={() => this.deleteAllItems()}>
            <Text>Delete All</Text>
          </Button>
        </Segment>
        <Content>
          {this.state.users.map((item, index) => (
            <ListItem key={index}>
              <CheckBox
                onPress={() => this.selectAnItem(index)}
                style={{marginRight: 30}}
                checked={this.state.deletionArray.includes(index)}
              />
              <Body>
                <Text>{item.name}</Text>
              </Body>
              <Right>
                <Button 
                  onPress={() => this.deleteItem()}>
                  <Image
                  source={require("../../assests/checked.png")} 
                    style={{
                      width:18,
                      height:10
                    }}
                  />
                </Button>
              </Right>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}

