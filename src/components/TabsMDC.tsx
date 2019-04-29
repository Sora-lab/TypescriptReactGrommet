import React, { Component } from 'react';
import { MDCTab } from '@material/tab';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTabScroller } from '@material/tab-scroller';

interface Tabs {
    tab: HTMLElement | null;
    tabBar: HTMLElement | null;
    tabScroller: HTMLElement | null;
}

interface Props {
    readonly tabindex: string;
}
class Tabs extends Component {
    constructor(props: any) {
        super(props);
        this.tab = null;
        this.tabBar = null;
        this.tabScroller = null;
    }
    componentDidMount() {
        this.tab = new MDCTab(document.querySelector('.mdc-tab'));
        this.tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
        this.tabScroller = new MDCTabScroller(document.querySelector('.mdc-tab-scroller'));
    }
    //TODO: pass on which tabs will be loaded 
    render(){
        
        return (
            <div className="mdc-tab-bar" role="tablist">
                <div className="mdc-tab-scroller">
                    <div className="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll">
                        <div className="mdc-tab-scroller__scroll-content">
                            <button className="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" id="mdc-tab-10">
                                <span className="mdc-tab__content"><span className="mdc-tab__text-label">Tab One</span></span><span className="mdc-tab-indicator mdc-tab-indicator--active"><span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span></span><span className="mdc-tab__ripple"></span>
                            </button>
                            <button className="mdc-tab" role="tab" aria-selected="false" tabindex="-1" id="mdc-tab-11">
                                <span className="mdc-tab__content"><span className="mdc-tab__text-label">Tab Two</span></span><span className="mdc-tab-indicator"><span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span></span><span className="mdc-tab__ripple"></span>
                            </button>
                            <button className="mdc-tab" role="tab" aria-selected="false" tabindex="-1" id="mdc-tab-12">
                                <span className="mdc-tab__content"><span className="mdc-tab__text-label">Tab Three</span></span><span className="mdc-tab-indicator"><span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span></span><span className="mdc-tab__ripple"></span>
                            </button>
                            <button className="mdc-tab" role="tab" aria-selected="false" tabindex="-1" id="mdc-tab-13">
                                <span className="mdc-tab__content"><span className="mdc-tab__text-label">Tab Four</span></span><span className="mdc-tab-indicator"><span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span></span><span className="mdc-tab__ripple"></span>
                            </button>
                            <button className="mdc-tab" role="tab" aria-selected="false" tabindex="-1" id="mdc-tab-14">
                                <span className="mdc-tab__content"><span className="mdc-tab__text-label">Tab Five</span></span><span className="mdc-tab-indicator"><span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span></span><span className="mdc-tab__ripple"></span>
                            </button>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}
