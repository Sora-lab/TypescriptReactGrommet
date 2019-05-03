import React from 'react';
import { Box, Image } from 'grommet';

interface Props {
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
const Profile = (props:Props) => {
    const profile = props.userProfile;
    let affiliations = {title: '',
                        organization: '',
                        started: ''};
    let researchInterests=[];
    if(profile.affiliations[0]){
        affiliations = profile.affiliations[0];
        researchInterests = profile.researchInterests
    }
    return(
        <Box wrap overflow='auto' direction='row'>
            <Box overflow='auto' margin='small' pad='small' height='small' width='small'>
                <Image src="https://www.gravatar.com/avatar/4210d8e14db97e647b8cedc9fa3c4119?s=500&amp;r=pg&d=monsterid" fit="contain" />
            </Box>
            <Box overflow='auto' margin='small' pad='small' width='medium' elevation='xsmall'><h2>Position</h2> <h4>Title:</h4>{ profile.jobTitleOther}<h4>organization:</h4>{ profile.organization} <h4>Department:</h4>{ profile.department}</Box>
            <Box overflow='auto' margin='small' pad='small' width='medium' elevation='xsmall'><h2>Research Interests</h2><ul><li>{researchInterests[0]}</li><li>{researchInterests[1]}</li><li>{researchInterests[2]}</li></ul></Box>
            <Box overflow='auto' margin='small' pad='small' width='medium' elevation='xsmall'><h2>Affiliations</h2> As { affiliations.title } ({ affiliations.started }-present) at {affiliations.organization}</Box>
            <Box overflow='auto' margin='small' pad='small' width='large' elevation='xsmall'><h2>Research or personal statement</h2> { profile.researchStatement }</Box>
            <Box overflow='auto' margin='small' pad='small' elevation='xsmall'><h2>Research or personal statement</h2> { profile.researchStatement }</Box>
        </Box>)
}


export default Profile;