import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFilms, deleteFilm } from '../actions/filmactions';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

class FilmList extends Component {
  componentDidMount() {
    this.props.getFilms();
  }

  onDeleteClick = id => {
    this.props.deleteFilm(id);
  };

  //Model Toggle
  state = {
    modal: false
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { films } = this.props.film;
    return (
      <Container>
        <TransitionGroup className='film-list'>
          {films.map(({ _id, name, link }) => (
            <CSSTransition key={_id} timeout={500} classNames='fade'>
              <Container className='item-container'>
                <Button
                  className='remove-btn'
                  color='info'
                  size='sm'
                  onClick={this.onDeleteClick.bind(this, _id)}
                  outline
                >
                  <i className='fas fa-trash' />
                </Button>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className='name'>{name}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>{link}</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Container>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Container>
    );
  }
}

FilmList.propTypes = {
  getFilms: PropTypes.func.isRequired,
  film: PropTypes.object.usRequired
};

const mapStateToProps = state => ({
  film: state.film
});
export default connect(
  mapStateToProps,
  { getFilms, deleteFilm }
)(FilmList);
