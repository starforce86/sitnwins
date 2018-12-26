import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import starIcon from './img/star.png';
import './DataTable.css'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 9,
    margin: '0px 0px 0px 0px',
  },
  body: {
    fontSize: 8,
    textAlign: 'left',
    margin: '0px 0px 0px 0px'
  },
}))(TableCell);

const styles = theme => ({
  root: {
    marginTop: 0,
    minHeight: '500px',
    maxHeight: '750px',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'auto',
    zIndex: 101,
    boxShadow: 'none',
    square: true
  },
  table: {
    padding: "dense",
    boxShadow: 'none'
  },
  header: {
    backgroundColor: '#1d1c1e',
    color: '#cccccc',
    position: '-webkit-sticky',
	  position: 'sticky',
    top: 0,
    zIndex: 12,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(contest, type, payouts, style, slip, totalprize, entry, live) {
  id += 1;
  return { id, contest, type, payouts, style, slip, totalprize, entry, live };
}

const rows = [
  createData('1.Bundesliga', 'Season', 'Top 10', 'Uber/Unter', '$4', '$15000', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Daily', 'Top 1', 'Mixed', '$4', '$1500', '325/441', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Mixed', '$27', '$750', '9/32', '19:46:50'),
  createData('Mixed Leagues', 'Daily', 'Top 2', 'Correct result', '$27', '$1000', '22/32', '19:46:50'),
  createData('1.Bundesliga', 'Season', 'Top 10', 'Mixed', '$100', '$205', '1/11', '19:46:50'),
  createData('1.Bundesliga', 'Daily', 'Top 1', 'Mixed', '$9', '$150', '9/26', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Correct result', '$5', '$100', '7/34', '19:46:50'),
  createData('Mixed Leagues', 'Daily', 'Top 2', 'Uber/Unter', '$5', '$200', '8/35', '19:46:50'),
  createData('1.Bundesliga', 'Season', 'Top 10', 'Mixed', '$2', '$150', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Daily', 'Top 1', 'Mixed', '$1', '$150', '91/44100', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Correct result', '$0.25', '$5000', '91/44100', '19:46:50'),
  createData('Mixed Leagues', 'Daily', 'Top 2', 'Uber/Unter', '$5', '$5000', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Season', 'Top 10', 'Mixed', '$33', '$2000', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Daily', 'Top 1', 'Mixed', '$4', '$5000', '91/44100', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Correct result', '$200', '$2000', '91/44100', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Correct result', '$5', '$100', '7/34', '19:46:50'),
  createData('Mixed Leagues', 'Daily', 'Top 2', 'Uber/Unter', '$5', '$200', '8/35', '19:46:50'),
  createData('1.Bundesliga', 'Season', 'Top 10', 'Mixed', '$2', '$150', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Daily', 'Top 1', 'Mixed', '$1', '$150', '91/44100', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Correct result', '$0.25', '$5000', '91/44100', '19:46:50'),
  createData('Mixed Leagues', 'Daily', 'Top 2', 'Uber/Unter', '$5', '$5000', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Season', 'Top 10', 'Mixed', '$33', '$2000', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Daily', 'Top 1', 'Mixed', '$4', '$5000', '91/44100', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Correct result', '$200', '$2000', '91/44100', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Correct result', '$5', '$100', '7/34', '19:46:50'),
  createData('Mixed Leagues', 'Daily', 'Top 2', 'Uber/Unter', '$5', '$200', '8/35', '19:46:50'),
  createData('1.Bundesliga', 'Season', 'Top 10', 'Mixed', '$2', '$150', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Daily', 'Top 1', 'Mixed', '$1', '$150', '91/44100', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Correct result', '$0.25', '$5000', '91/44100', '19:46:50'),
  createData('Mixed Leagues', 'Daily', 'Top 2', 'Uber/Unter', '$5', '$5000', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Season', 'Top 10', 'Mixed', '$33', '$2000', '91/44100', '19:46:50'),
  createData('1.Bundesliga', 'Daily', 'Top 1', 'Mixed', '$4', '$5000', '91/44100', '19:46:50'),
  createData('2.Bundesliga', 'Daily', 'Top 3', 'Correct result', '$200', '$2000', '91/44100', '19:46:50'),
];

function DataTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} id="style-table">
      <Table className={classes.table}>
        <TableHead class={classes.header}>
          <TableRow>
            <CustomTableCell class="tiny-cell tbl-header">Contest</CustomTableCell>
            <CustomTableCell class="tiny-cell tbl-header">Game Type</CustomTableCell>
            <CustomTableCell class="tiny-cell tbl-header">Payouts</CustomTableCell>
            <CustomTableCell class="tiny-cell tbl-header">Style</CustomTableCell>
            <CustomTableCell class="tiny-cell tbl-header">Betting slip</CustomTableCell>
            <CustomTableCell class="tiny-cell tbl-header">Total Prizes</CustomTableCell>
            <CustomTableCell class="tiny-cell tbl-header">Entries</CustomTableCell>
            <CustomTableCell class="tiny-cell tbl-header">Live</CustomTableCell>
            <CustomTableCell class="tiny-cell tbl-header"></CustomTableCell>
            <CustomTableCell class="tiny-cell tbl-header"></CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell class="tiny-cell" component="th" scope="row"><img src={starIcon} class="mr-1 px-0" height="12" width="12" alt="star"/>
                  {row.contest}
                </CustomTableCell>
                <CustomTableCell class="tiny-cell">{row.type}</CustomTableCell>
                <CustomTableCell class="tiny-cell">{row.payouts}</CustomTableCell>
                <CustomTableCell class="tiny-cell">{row.style}</CustomTableCell>
                <CustomTableCell class="tiny-cell">{row.slip}</CustomTableCell>
                <CustomTableCell class="tiny-cell total-prize">{row.totalprize}</CustomTableCell>
                <CustomTableCell class="tiny-cell">{row.entry}</CustomTableCell>
                <CustomTableCell class="tiny-cell">{row.live}</CustomTableCell>
                <CustomTableCell class="tiny-cell"><button type="button" class="btn btn-success btn-sm waves-effect mx-0 my-0 px-1 py-1">Bet Now</button></CustomTableCell>
                <CustomTableCell class="tiny-cell"><button type="button" class="btn btn-dark btn-sm waves-effect mx-0 my-0 px-1 py-1">Lobby</button></CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataTable);