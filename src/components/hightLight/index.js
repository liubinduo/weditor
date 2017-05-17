/**
 * Created by yeanzhi on 17/4/10.
 */
'use strict';
import './index.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {contains} from '../../lib/util';
import {getEditor} from '../../lib/quillEditor';
const $ = window.$;

export default class extends Component {

    state = {
        open:false
    }

    componentDidMount() {
        this.target = ReactDOM.findDOMNode(this);
        console.log('fdsaf',this.target);
    }

    componentWillUnmount() {
        window.document.removeEventListener('click',this.otherDOMClick);
    }

    otherDOMClick = (e) => {
        let node = e.target;
        let target = this.target;
        if (!this.state.open) {
            return false;
        }
        if (this.state.open && !contains(target, node)) {
            this.onClose();
        }
    }

    onClick = ()=>{
        this.setState({
            open:true
        });
        setTimeout(()=>{
            window.document.addEventListener('click',this.otherDOMClick);
        },100);
    }

    onClose() {
        this.setState({
            open:false
        });
        window.document.removeEventListener('click',this.otherDOMClick);

    }

    selectBackground(color) {
        return ()=>{
            getEditor().format('background',color,'user');
            this.onClose();
        };
    }

    render() {
        return (
            <span className="weditor-hightlight">
                <svg viewBox="0 0 18 18" onClick={this.onClick}>
                    <g className="ql-fill ql-color-label">
                        <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon>
                        <rect height="1" width="1" x="4" y="4"></rect>
                        <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon>
                        <rect height="1" width="1" x="2" y="6"></rect>
                        <rect height="1" width="1" x="3" y="5"></rect>
                        <rect height="1" width="1" x="4" y="7"></rect>
                        <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon>
                        <rect height="1" width="1" x="2" y="12"></rect>
                        <rect height="1" width="1" x="2" y="9"></rect>
                        <rect height="1" width="1" x="2" y="15"></rect>
                        <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon>
                        <rect height="1" width="1" x="3" y="8"></rect>
                        <path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"></path>
                        <path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"></path>
                        <path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"></path>
                        <rect height="1" width="1" x="12" y="2"></rect>
                        <rect height="1" width="1" x="11" y="3"></rect>
                        <path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"></path>
                        <rect height="1" width="1" x="2" y="3"></rect>
                        <rect height="1" width="1" x="6" y="2"></rect>
                        <rect height="1" width="1" x="3" y="2"></rect>
                        <rect height="1" width="1" x="5" y="3"></rect>
                        <rect height="1" width="1" x="9" y="2"></rect>
                        <rect height="1" width="1" x="15" y="14"></rect>
                        <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon>
                        <rect height="1" width="1" x="13" y="7"></rect>
                        <rect height="1" width="1" x="15" y="5"></rect>
                        <rect height="1" width="1" x="14" y="6"></rect>
                        <rect height="1" width="1" x="15" y="8"></rect>
                        <rect height="1" width="1" x="14" y="9"></rect>
                        <path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"></path>
                        <rect height="1" width="1" x="14" y="3"></rect>
                        <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon>
                        <rect height="1" width="1" x="15" y="2"></rect>
                        <rect height="1" width="1" x="12" y="5"></rect>
                        <rect height="1" width="1" x="13" y="4"></rect>
                        <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon>
                        <rect height="1" width="1" x="9" y="14"></rect>
                        <rect height="1" width="1" x="8" y="15"></rect>
                        <path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"></path>
                        <rect height="1" width="1" x="5" y="15"></rect>
                        <path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"></path>
                        <rect height="1" width="1" x="11" y="15"></rect>
                        <path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"></path>
                        <rect height="1" width="1" x="14" y="15"></rect>
                        <rect height="1" width="1" x="15" y="11"></rect>
                    </g>
                    <polyline className="ql-stroke" points="5.5 13 9 5 12.5 13"></polyline>
                    <line className="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"></line>
                </svg>
                <div className="hightlight-color-panel" style={{display:this.state.open ? 'block' : 'none'}}>
                    {
                        ['yellow','green','cyan','magenta','darkYellow','darkGray','lightGray','black',
                            'blue','red','darkBlue','darkCyan','darkGreen','darkMagenta','darkRed'].map((item)=>{
                                return <span style={{background:item}} key={item} onClick={this.selectBackground(item)}></span>;
                            })
                    }
                </div>
            </span>
        );
    }
}
