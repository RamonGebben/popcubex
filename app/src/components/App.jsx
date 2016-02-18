import React from 'react';

class App extends React.Component {

  constructor(){
    super();
  }

  render() {
    return (
        <div>
            <header className="header">
                <h1 className="header-name">ItemBoard</h1>
            </header>
            <div className="site_message"><a href="/dashboard">go to the board</a></div>
        </div>
    );
  }
}

export default App;
