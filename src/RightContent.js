import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class RightContent extends React.Component {
    render() {
        return (
            <div className="right_content">
                <div className="languages_box">
                    <span className="red">Languages:</span>
                    <a href="#" className="selected"><img src="images/gb.gif" alt="" title="" border="0"/></a>
                    <a href="#"><img src="images/fr.gif" alt="" title="" border="0"/></a>
                    <a href="#"><img src="images/de.gif" alt="" title="" border="0"/></a>
                </div>
                <div className="currency">
                    <span className="red">Currency: </span>
                    <a href="#">GBP</a>
                    <a href="#">EUR</a>
                    <a href="#" className="selected">USD</a>
                </div>


                <div className="cart">
                    <div className="title"><span className="title_icon"><img src="images/cart.gif" alt=""
                                                                             title=""/></span>My
                        cart
                    </div>
                    <div className="home_cart_content">
                        3 x items | <span className="red">TOTAL: 100$</span>
                    </div>
                    <a href="cart.html" className="view_cart">view cart</a>

                </div>


                <div className="title"><span className="title_icon"><img src="images/bullet3.gif" alt=""
                                                                         title=""/></span>About
                    Our Store
                </div>
                <div className="about">
                    <p>
                        <img src="images/about.gif" alt="" title="" className="right"/>
                    </p>

                </div>

                <div className="right_box">

                    <div className="title"><span className="title_icon"><img src="images/bullet4.gif" alt="" title=""/></span>Promotions
                    </div>
                    <div className="new_prod_box">
                        <a href="details.html">product name</a>
                        <div className="new_prod_bg">
                            <span className="new_icon"><img src="images/promo_icon.gif" alt="" title=""/></span>
                            <a href="details.html"><img src="images/thumb1.gif" alt="" title="" className="thumb"
                                                        border="0"/></a>
                        </div>
                    </div>

                    <div className="new_prod_box">
                        <a href="details.html">product name</a>
                        <div className="new_prod_bg">
                            <span className="new_icon"><img src="images/promo_icon.gif" alt="" title=""/></span>
                            <a href="details.html"><img src="images/thumb2.gif" alt="" title="" className="thumb"
                                                        border="0"/></a>
                        </div>
                    </div>

                    <div className="new_prod_box">
                        <a href="details.html">product name</a>
                        <div className="new_prod_bg">
                            <span className="new_icon"><img src="images/promo_icon.gif" alt="" title=""/></span>
                            <a href="details.html"><img src="images/thumb3.gif" alt="" title="" className="thumb"
                                                        border="0"/></a>
                        </div>
                    </div>

                </div>

                <div className="right_box">

                    <div className="title"><span className="title_icon"><img src="images/bullet5.gif" alt="" title=""/></span>Categories
                    </div>

                    <ul className="list">
                        <li><a href="#">accesories</a></li>
                        <li><a href="#">books gifts</a></li>
                        <li><a href="#">specials</a></li>
                        <li><a href="#">hollidays gifts</a></li>
                        <li><a href="#">accesories</a></li>
                        <li><a href="#">books gifts</a></li>
                        <li><a href="#">specials</a></li>
                        <li><a href="#">hollidays gifts</a></li>
                        <li><a href="#">accesories</a></li>
                        <li><a href="#">books gifts</a></li>
                        <li><a href="#">specials</a></li>
                    </ul>

                    <div className="title"><span className="title_icon"><img src="images/bullet6.gif" alt="" title=""/></span>Partners
                    </div>

                    <ul className="list">
                        <li><a href="#">accesories</a></li>
                        <li><a href="#">books gifts</a></li>
                        <li><a href="#">specials</a></li>
                        <li><a href="#">hollidays gifts</a></li>
                        <li><a href="#">accesories</a></li>
                        <li><a href="#">books gifts</a></li>
                        <li><a href="#">specials</a></li>
                        <li><a href="#">hollidays gifts</a></li>
                        <li><a href="#">accesories</a></li>
                    </ul>

                </div>
            </div>
        );
    };
}

export default RightContent;