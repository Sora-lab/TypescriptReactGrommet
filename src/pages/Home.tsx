import React, { Component } from "react";
import { fetchProfile, fetchNarratives} from '../utils/fetch';
import GrommetTabs from '../components/GrommetTabs';
import { Grid, Box, Button } from 'grommet';

// Use Global theme - Font size, Brand Color

interface narrativeData {
    wsID: string; name: string; last_saved: string;
}
interface State {
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
    narratives: Array<narrativeData>;
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
            },
            narratives: []
        }
    }
    
    componentDidMount(){
        fetchProfile()
        .then((response:{version: string, result:Array<any>})=>{
            let res = response.result[0][0];
            this.setState({
                tabTitle: [res['user']['realname'],'Narratives', 'Collaborator Network', 'Search other users'],
                userName: {
                    name: res['user']['realname'],
                    userID: res['user']['username']
                },
                userProfile: response.result[0][0]['profile']['userdata'],
            })
        });
        fetchNarratives()
        .then((response:Array<any>)=>{
            console.log('fetchNarratives', response)
            this.setState(
                {narratives: response}
            )
        })
    }

    componentDidUpdate(prevProps:any, prevState:any){
        console.log("hello", prevProps, prevState, this.state)
        if(this.state === prevState){
            return
        }
    }

    render() {
        console.log('home render', this.state)
        return (
            <Grid
                fill
                rows={["auto", "flex"]}
                columns={["auto", "flex"]}
                areas={[
                  { name: "header", start: [0, 0], end: [1, 0] },
                  { name: "sidebar", start: [0, 1], end: [0, 1] },
                  { name: "main", start: [1, 1], end: [1, 1] }
                ]}
            >
            <Box
                gridArea="header"
                direction="row"
                align="center"
                justify="between"
                pad={{ horizontal: "medium", vertical: "small" }}
                background="dark-2"
            ></Box>
            <Box
                gridArea="sidebar"
                background="dark-3"
                width="small"
                animation={[
                    { type: "fadeIn", duration: 300 },
                    { type: "slideRight", size: "xlarge", duration: 150 }
                ]}
            >
                {["First", "Second", "Third"].map(name => (
                    <Button key={name} href="#" hoverIndicator>
                        <Box pad={{ horizontal: "medium", vertical: "small" }}>
                            <p>{name}</p>
                        </Box>
                    </Button>
                ))}
            </Box>
            <Box>
                <GrommetTabs data={this.state} />
            </Box>
            </Grid>
        );
    }
}

export default Home;