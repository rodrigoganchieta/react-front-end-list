import React, { Component } from 'react';
import Form from './Form';
import FrontendList from './FrontendList';
import Footer from './Footer';

import './Main.css';

export default class Main extends Component {
  state = {
    newFrontend: '',
    frontendList: [],
    index: -1,
  };

  componentDidMount() {
    let frontendList = JSON.parse(localStorage.getItem('frontendList'));

    if (!frontendList) {
      frontendList = ['JavaScript', 'React', 'Vue.js', 'Next.js', 'Angular', 'Bootstrap', 'HTML5', 'CSS3', 'Dart', 'Flutter'];
    }

    this.setState({ frontendList });
  }

  componentDidUpdate(prevProps, prevState) {
    const { frontendList } = this.state;

    if (frontendList === prevState.frontendList) return;

    localStorage.setItem('frontendList', JSON.stringify(frontendList));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { frontendList, index } = this.state;
    let { newFrontend } = this.state;
    newFrontend = newFrontend.trim();

    if (frontendList.indexOf(newFrontend) !== -1) return;

    const newFrontendList = [...frontendList];

    if (index === -1) {
      this.setState({
        frontendList: [...newFrontendList, newFrontend],
        newFrontend: '',
      });
    } else {
      newFrontendList[index] = newFrontend;

      this.setState({
        frontendList: [...newFrontendList],
        index: -1,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      newFrontend: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    const { frontendList } = this.state;

    this.setState({
      index,
      newFrontend: frontendList[index],
    });
  }

  handleDelete = (e, index) => {
    const { frontendList } = this.state;
    const newFrontendList = [...frontendList];
    newFrontendList.splice(index, 1);

    this.setState({
      frontendList: [...newFrontendList],
    });
  }

  render() {
    const { newFrontend, frontendList } = this.state;

    return (
      <>
        <main>
          <div className="list">
            <h1>Front-end List</h1>

            <Form
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              newFrontend={newFrontend}
            />

            <FrontendList
              frontendList={frontendList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />

          </div>
        </main>
        <Footer />
      </>
    );
  }
}
