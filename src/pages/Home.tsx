import * as React from 'react';


interface State {
    realName: string;
    userID: string;
    
}

class Home extends React.Component<State>{
    constructor(props: any){
        super(props);
        this.state = {
            foo: 'woo'
        };
    };
}