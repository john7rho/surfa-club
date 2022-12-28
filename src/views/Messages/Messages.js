import Header from './header.jsx';
import Body from './body.jsx'
import React from 'react';
import './css/app.css';

export default class App extends React.PureComponent {
  /*
   * @description: Builds application instance.
   * @parameters:
   *   -> Object props: Contains class properties.
   * @return: void
   */
  constructor(props) {
    // Calls the parent constructor.
    super(props);
    // Global attributes.
    this.state = {};
  }

  /*
   * @description: Returns this view as JSX format.
   * @return: JSXObject
   */
  render = () => (
    <div className="chat-simulation">
      {/* Application global header view */}
      <Header />
      {/* Application chat workspace */}
      <Body/>
    </div>
  );
}
