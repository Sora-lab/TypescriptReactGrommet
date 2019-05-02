import React, { Component } from "react";
import fetchProfile from '../utils/fetch';
import GrommetTabs from '../components/GrommetTabs';
// Use Global theme - Font size, Brand Color

type State = {
    tabTitle: Array<string>;
    userName: {
        name: string;
        userID: string;
    };
    userProfile: {
        organization: string;
        department: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        affiliations: Array<any>;
        researchStatement: string;
        jobTitle: string;
        jobTitleOther: string;
        researchInterests: Array<any>;
    };
}

class Home extends Component<any, State> {
    constructor(props: any){
        super(props);
        this.state = {
            tabTitle: ['Profile', 'Narratives', 'Collaborator Network', 'Search other users'],
            userName: {
                name: '',
                userID: '',
            },
            userProfile: {
                organization: '',
                department: '',
                city: '',
                state: '',
                postalCode: '',
                country: '',
                affiliations: [],
                researchStatement: '',
                jobTitle: '',
                jobTitleOther: '',
                researchInterests: [],
            }
        }
    }


    componentDidMount(){
        fetchProfile()
        .then((response:{version: string, result:Array<any>})=>{
            let res = response.result[0][0];
            console.log('here', response.result[0][0])
            this.setState({
                tabTitle: [res['user']['realname'],'Narratives', 'Collaborator Network', 'Search other users'],
                userName: {
                    name: res['user']['realname'],
                    userID: res['user']['username']
                },
                userProfile: response.result[0][0]['profile']['userdata'],
            })
        });
    }

    componentDidUpdate(prevProps:any, prevState:any){
        console.log("hello", prevProps, prevState, this.state)
        if(this.state === prevState){
            console.log('there')
            return
        } else {
            console.log("in else")
        }
    }

 
    render() {
        return (
            <div>
                <GrommetTabs data={this.state} />
            </div>
        );
    }
}

export default Home;