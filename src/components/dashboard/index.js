// @flow
// Smart Component Template
import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import Demo                   from './demo'
import Header                 from '../common/AppBar'



class DefaultDashboard extends React.Component {
    render() {
      return (
        <div>
          <Header title="Searchlight" />
          <div className="body-content">
            <Demo example="XYZ"/>
          </div>
        </div>
      )
    }

}

function mapStateToProps(state) {
  return {
    // Map state to props here
  }
}

function mapDispatchToProps(dispatch: Object) {
  return {
    // Map Dispatch to props here
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultDashboard)
