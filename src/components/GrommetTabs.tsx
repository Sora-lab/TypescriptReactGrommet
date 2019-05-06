import React from 'react';
import { Tabs, Tab, Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import GlobalTheme from '../GlobalTheme';
import Profile from '../components/Profile';
import Narratives from '../components/Narratives'

interface narrativeData {
    wsID: string; name: string; last_saved: string;
}

interface Props {
    data: {
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
}
//TODO: write a function that makes tabs and content from the props
{/* <pre>{ JSON.stringify(info.userProfile) }</pre> */}

const GrommetTabs = (props: Props) => {
    console.log("Tabs", props)
    const data = props.data
    return (
        <Grommet theme={grommet}>
        <Tabs alignSelf='center' justify='start'>
            <Tab title={data.tabTitle[0]}>
                <Box overflow='auto' margin='small' pad='small'><Profile userName={data.userName} userProfile={data.userProfile} /></Box>
            </Tab>
            <Tab title={data.tabTitle[1]}>
                <Box overflow='auto' margin='small' pad='small'><Narratives narratives={data.narratives}/></Box>
            </Tab>
            <Tab title={data.tabTitle[2]}>
                <Box overflow='auto' margin='small' pad='small'>something something</Box>
            </Tab>
            <Tab title={data.tabTitle[3]}>
                <Box overflow='auto' margin='small' pad='small'>something something</Box>
            </Tab>
        </Tabs>
        </Grommet>
    )
}
export default GrommetTabs;