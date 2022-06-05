import React from 'react'
import { render } from 'react-dom'

import { HashLoader } from 'react-spinners'

export default class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }
  render() {
    return (
      <div className="sweet-loading">
        {/* <RingLoader color={'#D736C2'} loading={this.state.loading} />
        <BounceLoader color={'#D736C2'} loading={this.state.loading} /> */}
        <HashLoader color={'#3657FF'} loading={this.state.loading} />
      </div>
    )
  }
}

render(<AwesomeComponent />, document.getElementById('root'))
