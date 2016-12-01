import React, { Component, PropTypes } from 'react'
import '../style/style.css'
import classnames from 'classnames'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSearchBox: true
    }
  }
  componentWillMount() {
    // console.log(this.props)
  }
  onInput(event) {
    this.props.getThenShow(event.target.value);
    this.setState({
      showSearchBox: true
    })
  }
  jumpSearchContent(event) {
    window.open(`https://www.baidu.com/s?word=${encodeURIComponent(event.target.innerHTML)}`, '_blank');
  }
  clickSerchContent() {
    var content = this.refs.content.value;
    window.open(`https://www.baidu.com/s?word=${encodeURIComponent(content)}`, '_blank');
  }
  noShowSearchBox(event) {
    if(event.target.className === 'box') {
      this.setState({
        showSearchBox: false
      })
    }
  }
  render() {
    var id = 0;
    return (
      <div className="box" onClick={ this.noShowSearchBox.bind(this) }>
        <div className="container">
          <p>我的百度</p>
          <div style={{marginBottom: '0px'}}>
            <input id="text" type="text" onInput={ this.onInput.bind(this) } ref="content" />
            <input id="btn" type="button" value="百度一下" onClick={() => this.clickSerchContent()}/>
          </div>
          <ul id="search" style={{display: this.props.searchLists.length && this.state.showSearchBox ? 'block' : 'none'}}
            onClick={ this.jumpSearchContent }>
            {
              this.props.searchLists.map(item => <li key={ id++ }>{ item }</li>)
            }
          </ul> 
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  searchLists: PropTypes.array.isRequired,
  getThenShow: PropTypes.func.isRequired
};

export default Search
