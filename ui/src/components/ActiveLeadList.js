import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { format } from 'date-fns';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Location from 'material-ui/svg-icons/maps/add-location';
import Folder from 'material-ui/svg-icons/file/folder-open';
import CallIcon from 'material-ui/svg-icons/communication/call';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import {GridList, GridTile} from 'material-ui/GridList';

class ActiveLeadList extends Component {

  render() {
    const { activeLeads } = this.props;
    return (
      <MuiThemeProvider>
        <List>
          {activeLeads.map((lead) => (
            <ListItem>
              <Card>
                <CardHeader
                  title={lead.contact_name}
                  subtitle={format(new Date(lead.created_at), 'MMMM do yyyy @ h:mm a') }
                  avatar={
                    <Avatar aria-label="recipe">
                      R
                    </Avatar>
                  }
                />
                <Divider />
                <CardText>
                  <GridList cols={50} style={{height: '30px'}}>
                    <GridTile cols={1.2}><Location /></GridTile>
                    <GridTile class=".gt-txt" cols={5}>
                        {`${lead.suburb}  ${lead.postcode}`}
                    </GridTile>
                    <GridTile cols={1.8}><Folder /></GridTile>
                    <GridTile class=".gt-txt" cols={5}>
                      {lead.category}
                    </GridTile>
                    <GridTile class=".gt-txt" cols={7}>
                      Job ID: {lead.id}
                    </GridTile>
                    <GridTile class=".gt-txt" cols={30}>
                      <div style={{display: 'flex'}}> $ {lead.price}.00 Lead Invitation </div>
                    </GridTile>
                  </GridList>
                </CardText>
                <Divider />
                <CardText>
                  <GridList cols={25} style={{height: '50px'}}>
                    <GridTile cols={1}><CallIcon /></GridTile>
                    <GridTile class=".gt-txt" cols={4}>
                      {lead.contact_phone}
                    </GridTile>
                    <GridTile cols={1.2}><EmailIcon /></GridTile>
                    <GridTile class=".gt-txt" cols={9}>
                      {lead.contact_email}
                    </GridTile>
                  </GridList>
                  {lead.description}
                </CardText>
              </Card>
            </ListItem>
          ))}  
        </List>
      </MuiThemeProvider>
    );
  }
}

export default ActiveLeadList;
