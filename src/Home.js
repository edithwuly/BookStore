import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import RightContent from './RightContent.js'
import { Link } from 'react-router'

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <li className="selected"><Link to="/">home</Link></li>
                <li><Link to="/Category">books</Link></li>
                <li><a href="#">specials</a></li>
                <li><a href="#">my accout</a></li>
                <li><a href="#">register</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        );
    };
}

class CenterContent extends React.Component{
    render_left(){
        return(
            <div  className="left_content">
                <div className="title"><span className="title_icon"><img src="images/bullet1.gif" alt="" title="" /></span>Featured books</div>
                <div className="feat_prod_box">
                    <div className="prod_img"><a href="details.html"><img src="images/prod1.gif" alt="" title="" border="0" /></a></div>
                    <div className="prod_det_box">
                        <div className="box_top"></div>
                        <div className="box_center">
                            <div className="prod_title">Product name</div>
                            <p className="details"></p>
                            <a href="details.html" className="more">- more details -</a>
                            <div className="clear"></div>
                        </div>
                        <div className="box_bottom"></div>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className="feat_prod_box">
                    <div className="prod_img"><a href="details.html"><img src="images/prod2.gif" alt="" title="" border="0" /></a></div>
                    <div className="prod_det_box">
                        <div className="box_top"></div>
                        <div className="box_center">
                            <div className="prod_title">Product name</div>
                            <p className="details"></p>
                            <a href="details.html" className="more">- more details -</a>
                            <div className="clear"></div>
                        </div>
                        <div className="box_bottom"></div>
                    </div>
                    <div className="clear"></div>
                </div>


                <div className="title"><span className="title_icon"><img src="images/bullet2.gif" alt="" title="" /></span>New books</div>
                <div className="new_products">
                    <div className="new_prod_box">
                        <a href="details.html">product name</a>
                        <div className="new_prod_bg">
                            <span className="new_icon"><img src="images/new_icon.gif" alt="" title="" /></span>
                            <a href="details.html"><img src="images/thumb1.gif" alt="" title="" className="thumb" border="0" /></a>
                        </div>
                    </div>
                    <div className="new_prod_box">
                        <a href="details.html">product name</a>
                        <div className="new_prod_bg">
                            <span className="new_icon"><img src="images/new_icon.gif" alt="" title="" /></span>
                            <a href="details.html"><img src="images/thumb2.gif" alt="" title="" className="thumb" border="0" /></a>
                        </div>
                    </div>
                    <div className="new_prod_box">
                        <a href="details.html">product name</a>
                        <div className="new_prod_bg">
                            <span className="new_icon"><img src="images/new_icon.gif" alt="" title="" /></span>
                            <a href="details.html"><img src="images/thumb3.gif" alt="" title="" className="thumb" border="0" /></a>
                        </div>
                    </div>
                </div>

                <div className="clear"></div>
            </div>
        );
    };

    render(){
        return(
            <div className="center_content">
                {this.render_left()}
                <RightContent/>
                <div class="clear"></div>
            </div>
        );
    };
}

class Home extends React.Component{
    render()
    {
        return(
            <div id="wrap">
                <div className="header">
                    <div className="logo"><img src="images/logo.gif" alt="" title="" border="0" /></div>
                    <div id="menu"><Menu /></div>
                </div>
                <CenterContent />
                <div className="footer">
                    <div className="left_footer"><img src="images/footer_logo.gif" alt="" title="" /><br /></div>
                    <div className="right_footer">
                        <a href="#">home</a>
                        <a href="#">about us</a>
                        <a href="#">services</a>
                        <a href="#">privacy policy</a>
                        <a href="#">contact us</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;