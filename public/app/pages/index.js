import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {addProduct, addAttribute} from '../store'
import axios from 'axios'
import NewInput from '../components/NewInput'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const base_url = "http://localhost:8000";

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        text: '',
        atext: '',
        error: '',
        help: '',
        selectedProduct: null
    };
  }

  static async getInitialProps() {
    // const res = await axios.get(base_url+'/products')
  }

  componentDidMount() {
    axios.get(base_url+'/products').then(res => {
        if(res.data.length > 0) this.props.addProduct(res.data);
    }).catch(err=> {

    })
  }

  fetchProductAttrs(product) {
      this.setState({selectedProduct: product});
    axios.get(base_url+'/products/'+product.id+'/attributes').then(res => {
        this.props.addAttribute(res.data);
    }).catch(err=> {

    })
  }

  ulCreator(arr, clickHandler = () => {}) {
      if(!Array.isArray(arr)) return;
      let list = [];
      arr.map(l => {
          if(!l) return;
          list.push(<li key={l.id} onClick={() => clickHandler(l)}>({l.id}) --- {l.name}</li>);
      });
      return list;
  }

  onChangeInputText(event) {
    this.setState({text: event.target.value});
  }

  onChangeAttrInputText(event) {
    this.setState({atext: event.target.value});
  }

  submitProduct() {
    axios.post(base_url+'/products', {
        name: this.state.text
    }).then(res => {
        console.log(res);
        if(res.data && res.data.err) this.setState({error: res.data.err, help: res.data.help_message});
        else {
            this.props.addProduct([res.data]);
            this.setState({text: "", error: "", help: ""});
        }
    }).catch(err => {
        console.log(err);
        this.setState({error: "خطا. لاگ رو بخون :'("});
    })
  }

  submitAttr() {
    axios.post(base_url+'/products/'+this.state.selectedProduct.id+'/attributes', {
        name: this.state.atext
    }).then(res => {
        console.log(res);
        if(res.data && res.data.err) this.setState({error: res.data.err, help: res.data.help_message});
        else {
            this.props.addAttribute(res.data);
            this.setState({atext: "", error: "", help: ""});
        }
    }).catch(err => {
        console.log(err);
        this.setState({error: "خطا. لاگ رو بخون :'("});
    })
  }

  render() {
    return (
      <div style={{display:"flex", flexDirection: "row"}}>
        <div style={{padding: 10}}>
        <p>click on product to see attrs or add new one</p>
        <p style={{color: "red"}}>{this.state.error}</p>
        <p>{this.state.help}</p>
        <ul>
            <li><NewInput
                btnText="submit new product"
                default={this.state.text}
                onchange={this.onChangeInputText.bind(this)}
                onclick={this.submitProduct.bind(this)}></NewInput></li>
            {this.ulCreator(this.props.products, this.fetchProductAttrs.bind(this))}
        </ul>
        </div>
        {this.state.selectedProduct ? <div style={{padding: 10}}>
            <h3>{this.state.selectedProduct && this.state.selectedProduct.name} attrs:</h3>
            <ul>
                <li><NewInput
                    btnText="submit new attributes"
                    default={this.state.atext}
                    onchange={this.onChangeAttrInputText.bind(this)}
                    onclick={this.submitAttr.bind(this)}></NewInput></li>
                {this.ulCreator(this.props.attributes)}
            </ul>
        </div>
        : null}
      </div>
    )
  }
}


function mapStateToProps(state) {
    return {
      products: state.products,
      attributes: state.attributes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: (products) => dispatch(addProduct(products)),
        addAttribute: (attrs) => dispatch(addAttribute(attrs))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)