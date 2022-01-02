
import React from "react";
import Login from './components/Login';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          <Login />
        </h1>
      </>
    );
  }
}

export default App;
