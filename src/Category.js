import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import RightContent from './RightContent.js'
import { Link } from 'react-router'

const headers=['Book','Author','Language','Published','Sales']
const initial_data=[
    ['And Then There Were None','Agatha Christie','English','1939','100 million'],
    ['Dream of the Red Chamber','Cao Xueqin','Chinese','1754-1791','100 million'],
    ["Harry Potter and the Philosopher's Stone",'J.K.Rowing','English','1997','107 million'],
    ['Le Petit Prince(The Little Prince)','Antoine de Saint-Exupery','French','1943','140 million'],
    ['She:A History of Adventure','H.Rider Haggard','English','1887','100 million'],
    ['The Hobbit','J.R.R.Rolkien','English','1937','100 million'],
    ['The Lord of the Ring','J.R.R.Rolkien','English','1954-1955','150 million']
];

class Menu extends React.Component {
    render() {
        return (
            <ul>
                <li><Link to="/">home</Link></li>
                <li className="selected"><a href="#">books</a></li>
                <li><a href="#">specials</a></li>
                <li><a href="#">my accout</a></li>
                <li><a href="#">register</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        );
    };
}

class Excel extends React.Component{
    constructor(props) {
        super(props);
        this.sort = this.sort.bind(this);
        this.showEditor = this.showEditor.bind(this);
        this.save = this.save.bind(this);
        this.renderSearch = this.renderSearch.bind(this);
        this.renderToolbar = this.renderToolbar.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
        this.search = this.search.bind(this);
        this.preSearch=null;
        this.state = {
            data:initial_data,
            sortby:null,
            descending:false,
            edit:null,
            search:false
        };
    }

    static defaultProps = {
        schema : headers
    };


    showEditor(e){
        this.setState({edit: {row:parseInt(e.target.dataset.row,10),cell:e.target.cellIndex}});
    };

    sort(e){
        var column = e.target.cellIndex;
        var newdata = Array.from(this.state.data);
        newdata.sort((a,b)=>{
            return this.state.descending ? (a[column]<b[column] ? 1:-1):(a[column]>b[column] ? 1:-1)});
        this.state.descending?(this.setState({data:newdata,sortby:column,descending:false})):
            (this.setState({data:newdata,sortby:column,descending:true}))
    };

    save(e){
        e.preventDefault();
        var input = e.target.firstChild;
        var newdata = Array.from(this.state.data);
        newdata[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({edit:null,data:newdata});
    }

    search(e){
        var needle = e.target.value.toLowerCase();
        if (!needle){
            this.setState({data:this.preSearch});
            return;
        }
        var index = e.target.dataset.idx;
        var searchdata = this.preSearch.filter((row)=>{
            return row[index].toString().toLowerCase().indexOf(needle) >-1});
        this.setState({data:searchdata});
    }

    renderSearch() {
        if (!this.state.search) {
            return null;
        }
        return (
            <tr onChange={this.search}>
                {
                    this.props.schema.map((head, index) => <th key={index}><input type='text' data-idx={index}/>
                    </th>)
                }
            </tr>
        );
    }

    toggleSearch(){
        if (this.state.search){
            this.setState({data:this.preSearch,search:false});
            this.preSearch=null;
        }
        else{
            this.preSearch=this.state.data;
            this.setState({search:true});
        }
    }

    renderToolbar(){
        return (
            <button className='toolbar' onClick={this.toggleSearch}>search</button>
        );
    }

    renderTable(){
        return (
            <div>
                <table className='tabel' border="2">
                    <thead className='theads' onClick={this.sort}>
                    {this.renderToolbar()}
                    <tr>
                        {
                            this.props.schema.map((head,index)=>
                                <th key={index}>{head}</th> )
                        }
                    </tr>
                    </thead>

                    <tbody onDoubleClick={this.showEditor} >
                    {this.renderSearch()}
                    {
                        this.state.data.map((row,rowindex)=>{
                            return (<tr key={rowindex}>
                                    {
                                        row.map((cell,index)=>{
                                            const edit=this.state.edit;
                                            let content=cell;
                                            if (edit && edit.row === rowindex && edit.cell === index)
                                                content = (
                                                    <form onSubmit={this.save}>
                                                        <input type='text' defaultValue={content}></input>
                                                    </form>
                                                );
                                            return <td key={index} data-row={rowindex}>{content}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    };

    render(){
        return (
            <div className="Excel">
                {this.renderTable()}
            </div>
        );
    };

}



class CategoryCenterContent extends React.Component{
    render_left(){
        return(
            <div class="left_content">
                <div class="crumb_nav">
                    <a href="index.html">home</a> &gt;&gt; category name
                </div>
                <div class="title"><span class="title_icon"><img src="images/bullet1.gif" alt="" title="" /></span>Category books</div>
                <Excel/>
                <div class="clear"></div>
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

class Category extends React.Component{
    render()
    {
        return(
            <div id="wrap">
                <div className="header">
                    <div className="logo"><img src="images/logo.gif" alt="" title="" border="0" /></div>
                    <div id="menu"><Menu /></div>
                </div>
                <CategoryCenterContent />
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

export default Category;