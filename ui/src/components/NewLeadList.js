import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { format } from 'date-fns';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Location from 'material-ui/svg-icons/maps/add-location';
import Folder from 'material-ui/svg-icons/file/folder-open';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      height: 30
    },
    gridTitleIcon: {
        width: 30
    },
    gridTitleText: {
        width: 700
    },
  };

class NewLeadList extends Component {
  render() {
    const { newLeads, onAccept, onDecline } = this.props;
    return (
      <MuiThemeProvider>
        <List>
          {newLeads.map((lead) => (
            <ListItem>
              <Card>
                <CardHeader
                  title={lead.contact_name}
                  subtitle={format(new Date(lead.created_at), 'MMMM do @ h:mm a') }
                  avatar={
                    <Avatar aria-label="recipe">
                      R
                    </Avatar>
                  }
                />
                <Divider />
                <CardText>
                  <GridList style={styles.gridList} cols={50}>
                    <GridTile cols={1.2}><Location /></GridTile>
                    <GridTile cols={5}>
                      {`${lead.suburb} ${lead.postcode}`}
                    </GridTile>
                    <GridTile cols={1.8}><Folder /></GridTile>
                    <GridTile cols={5}>
                      {lead.category}
                    </GridTile>
                    <GridTile cols={37}>
                      Job ID: {lead.id}
                    </GridTile>
                  </GridList>
                </CardText>
                <Divider />
                <CardText>
                  {lead.description}
                </CardText>
                <Divider />
                <CardActions>
                  <GridList cols={5.5} style={{height: '50px'}}>
                    <GridTile >
                      <RaisedButton label="Accept" disabled={!!lead.loading} onClick={() => {
                        lead.loading = true;
                        onAccept(lead.id);
                      }} />
                    </GridTile>
                    <GridTile >
                      <RaisedButton label="Decline" disabled={!!lead.loading} onClick={() => {
                        lead.loading = true;
                        onDecline(lead.id)
                      }} />
                    </GridTile>
                    <GridTile cols={2}>
                      <div style={{display: 'flex'}}> $ {lead.price}.00 Lead Invitation </div>
                    </GridTile>
                  </GridList>
                </CardActions>
              </Card>
            </ListItem>
          ))}  
        </List>
      </MuiThemeProvider>
    );
  }
}

export default NewLeadList;
