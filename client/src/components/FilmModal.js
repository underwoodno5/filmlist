import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addFilm } from '../actions/filmactions';

class FilmModal extends Component {
  state = {
    modal: false,
    name: '',
    link: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newFilm = {
      name: this.state.name,
      link: this.state.link
    };
    //Add film via addFilm action
    this.props.addFilm(newFilm);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color='warning'
          onClick={this.toggle}
          className='film-modal-btn'
        >
          <i className='fas fa-plus-circle fa-3x' />
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Film List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='film'>Film</Label>
                <Input
                  type='text'
                  name='name'
                  id='film'
                  placeholder='Add new film'
                  onChange={this.onChange}
                />
                <Input
                  type='text'
                  name='link'
                  id='film'
                  placeholder='Add new link'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Add Film
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  film: state.film
});

export default connect(
  mapStateToProps,
  { addFilm }
)(FilmModal);
