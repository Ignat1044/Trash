import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items';
import { Dialog } from '@headlessui/react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      orders:[],
      items:[
      {
        id:0,
        title:'Chair Gray',
        img:'gray_chair.jpeg',
        desc:'pam pam pam grey chair pam pam',
        category:'chairs',
        price:'49.99'
      },
      {
        id:2,
        title:'Chair Gray',
        img:'gray_chair.jpeg',
        desc:'pam pam pam grey chair pam pam',
        category:'chairs',
        price:'79.99'
      }


      ]
    }
    this.addToOrder=this.addToOrder.bind(this)
    this.delateOrder=this.delateOrder.bind(this)

  }
  render(){
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelate={this.delateOrder}/>
        {/* <Dialog/> */}
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer/>
      </div>
    );
  }
  delateOrder(id){
    this.setState({orders: this.state.orders.filter(el=>el.id!==id )})
  }
  addToOrder(item){
    let isInArray=false
    this.state.orders.forEach(el => {
      if(el.id===item.id){
        isInArray=true
      }
    })
    if(!isInArray){
      this.setState({orders:[...this.state.orders, item]})
    }
    
  }
}



export default App;
