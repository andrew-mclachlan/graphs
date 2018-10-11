import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';
import SimpleBarChart from './BarChart';
import StreamingDemo from './Zoom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HighChartChart from './highChartChart';
import HighChartMap from './highChartMap';
import { PlotlyBar, PlotlyScatter } from './Plotly';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class Dashboard extends Component {
  state = {
    open: true,
    value: 0
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Line Chart" />
              <Tab label="Bar Chart" />
              <Tab label="Zoom" />
              <Tab label="High Chart Simple" />
              <Tab label="High Chart Map" />
              <Tab label="Plotly Bar" />
              <Tab label="Plotly Scatter" href="#basic-tabs" />
            </Tabs>
          </AppBar>
          <main className={classes.content}>
            {value === 0 && <TabContainer>
              <Typography variant="h4" gutterBottom component="h2">
                Recharts Line Chart
                </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <SimpleLineChart />
              </Typography>
            </TabContainer>}
            {value === 1 && <TabContainer>
              <Typography variant="h4" gutterBottom component="h2">
                Recharts Bar Chart
              </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <SimpleBarChart />
              </Typography>
            </TabContainer>}
            {value === 2 && <TabContainer>
              <Typography variant="h4" gutterBottom component="h2">
              Recharts Zoom
              </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <StreamingDemo />
              </Typography>
            </TabContainer>}
            {value === 3 && <TabContainer>
              <Typography variant="h4" gutterBottom component="h2">
              Highcharts Simple Chart
              </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <HighChartChart />
              </Typography>
            </TabContainer>}
            {value === 4 && <TabContainer>
              <Typography variant="h4" gutterBottom component="h2">
              Highcharts Map
              </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <HighChartMap />
              </Typography>
            </TabContainer>}
            {value === 5 && <TabContainer>
              <Typography variant="h4" gutterBottom component="h2">
              Plotly Bar
              </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <PlotlyBar />
              </Typography>
            </TabContainer>}
            {value === 6 && <TabContainer>
              <Typography variant="h4" gutterBottom component="h2">
              Plotly Scatter
              </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <PlotlyScatter />
              </Typography>
            </TabContainer>}
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
