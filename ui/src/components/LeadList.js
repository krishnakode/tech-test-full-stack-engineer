import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import { getLeads, acceptLead, declineLead } from '../services/leadService';
import NewLeadList from './NewLeadList';
import Dialog from 'material-ui/Dialog';
import ActiveLeadList from './ActiveLeadList';

class LeadList extends Component {
  constructor() {
    super();
    this.state = {
      leads: [],
      error: '',
      loading: false,
    };
    this.fetchData = this.fetchData.bind(this)
    this.handleAcceptLead = this.handleAcceptLead.bind(this)
    this.handleDeclineLead = this.handleDeclineLead.bind(this)
    this.handleCallback = this.handleCallback.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    const {
      loading, leads, error
    } = this.state;
    if (loading === false && (leads.length === 0 && !error)){
      this.fetchData();
    }
  }

  async fetchData() {
    this.setState({ loading: true });
    const data = await getLeads();
    if (typeof data === 'object' && data.length){
      this.setState({ leads: data, loading: false });
    } else {
      this.setState({ error: "something went wrong", loading: false  })
    }
  }

  async handleAcceptLead(leadId) {
    await acceptLead(leadId, this.handleCallback);
  }

  async handleDeclineLead(leadId) {
    await declineLead(leadId, this.handleCallback);
  }

  handleCallback({leadId, status, error}) {
    if (error) {
        this.setState((prevState) => ({
          error: "something went wrong",
          ...leadId ? {leads: prevState.leads.map((lead) =>
            lead.id === leadId ? { ...lead, loading: false } : lead
          )} : {},
        }));
    } else if (leadId && status) {
      this.setState((prevState) => ({
        leads: prevState.leads.map((lead) =>
          lead.id === leadId ? { ...lead, status } : lead
        ),
      }));
    }
  }

  handleClose() {
    this.setState({error: null});
  };

  render() {
    const { leads, loading, error } = this.state;

    return (
      <div>
        <MuiThemeProvider>
        {error && 
          <Dialog
            title="Action could not be completed"
            modal={false}
            open={this.state.error}
            onRequestClose={this.handleClose}
          >
            Something went wrong!!
          </Dialog>
        }
        { loading ? <CircularProgress /> : 
        <Tabs>
          <Tab label="New">
            <NewLeadList
              newLeads={leads.filter(({status}) => status === 'new')}
              onAccept={this.handleAcceptLead}
              onDecline={this.handleDeclineLead}
            />
          </Tab>
          <Tab label="Active">
            <ActiveLeadList activeLeads={leads.filter(({status}) => status === 'active')} />
          </Tab>
        </Tabs> }
        </MuiThemeProvider>
      </div>
    );
  }
}

export default LeadList;
