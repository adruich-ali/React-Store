import React, { Component } from 'react'
import formatCurrency from '../util';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            address:"",
            showCheckout: false,

        };
    }
    handelInput=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };
    createOrder= (e)=>{
        e.preventDefault();
const order ={
    name: this.state.name,
    email:this.state.email,
    address:this.state.address,
    cartItems:this.state.cartItems,
};
       this.props.createOrder(order);
         
    }
    render() {
        const {cartItems} = this.props;
        return (
            <div>
            <div>
            { 
            cartItems.length === 0 ? (
            <div className="cart cart-header">Cart is empty</div>
            ):(
            <div className="cart cart-header">You Have {cartItems.length} in the Cart{""}</div>
            )
            }
            </div>
            <div className="cart">
                <ul className="cart-item">
                {
                    cartItems.map((item)=>(
                        <li key={item._id}>
                            <div>
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div  className="right">
                                   <div> {formatCurrency(item.price)} x {item.count}</div>
                                <button className="button-remove"
                                 onClick={()=> this.props.removeFromCart(item)}>
                                    Remove
                                </button>
                                </div>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </div>
            {cartItems.length !==0 &&(   
            <div>   
            <div className="cart">
                <div className="total">
                    <div>
                    Total : {" "}
                        {formatCurrency(cartItems.reduce((a,c)=> a+ c.price * c.count,0)
                        )}
                        
                    </div>
                    <button  className="button primary" onClick={()=>{this.setState({showCheckout:true})}}>Proceed</button>
                </div>
                </div>
                {this.state.showCheckout &&(
                    <div className="cart">
                    <form onSubmit={this.createOrder}>
                        <ul className="form-container">
                            <li>
                            <label>Email</label>
                            <input type="email"
                            name="email"
                            required
                            onChange={this.handelInput}
                            />
                            </li>
                        <li className="form-container">
                            <label>Name</label>
                            <input type="text"
                            name="name"
                            required
                            onChange={this.handelInput}
                            />
                        </li>
                        <li className="form-container">
                            <label>Address</label>
                            <input type="text"
                            name="address"
                            required
                            onChange={this.handelInput}
                            />
                        </li>
                        <li>
                            <button className="button primary" type="submit">
                             checkOut   
                            </button>
                        </li>
                        </ul>
                    </form>
                </div>
                )}
                </div>    
       )}
              
            </div>
        );
    }
}
