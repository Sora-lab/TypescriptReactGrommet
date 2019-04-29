import React, { Component } from 'react';
import { string } from 'prop-types';


interface State {
    realName: string;
    userID: string;

}
interface Props {
    props: any;
}
class Home extends Component<State, Props>{
    constructor(props: Props){
        super(props);
        this.state = {
            realName: "hawhouaw",
        };
    };
}