import React from 'react';
import {  Table, TableHeader, TableCell, TableBody, TableRow, Button, Box, Text, DataTable } from 'grommet';
import { Ascend } from 'grommet-icons';

interface narrativeData {
    wsID: string; name: string; last_saved: string;
}

interface Props {
    narratives: Array<narrativeData>
}
//array1.sort((a, b) => a.key1 - b.key1);

const Narratives = (props:Props)=>{
    console.log("Narrative", props)
    let data = props.narratives
    //let data = props
    // let data = [
    //     {
    //     "wsID": 39031,
    //     "name": "Luna pughuahua sampling",
    //     "last_saved": "2019-04-10T20:20:39+0000"
    //     },
    //     {
    //     "wsID": 39650,
    //     "name": "Cat Genome Test ",
    //     "last_saved": "2019-01-18T18:32:36+0000"
    //     },
    //     {
    //     "wsID": 41484,
    //     "name": "kirby genome annotation",
    //     "last_saved": "2019-04-22T22:59:31+0000"
    //     }
    //     ];

    const columns = [
        {
            property: "name",
            header: <Text>Title</Text>,
            primary: true,
        },
        {
            property: "last_saved",
            header: <Text>Last saved</Text>,
            primary: true,
        },
        {
            property: "created",
            header: <Text>Created</Text>,
            primary: true,
            sortable: true,
            search: true
        },
    ];
    
    return (
        <div>
        <pre>{ JSON.stringify(props.narratives) }</pre>
        <DataTable sortable columns={columns} data={data} />
        </div>
    )
}

export default Narratives;