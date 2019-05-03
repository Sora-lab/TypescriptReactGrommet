import React from 'react';
import {  Table, TableHeader, TableCell, TableBody, TableRow, Button, Box } from 'grommet';
import { Ascend } from 'grommet-icons';

interface narrativeData {
    wsID: string; name: string; last_saved: string;
}
//array1.sort((a, b) => a.key1 - b.key1);
interface Props {
        narrativeList: Array<narrativeData>;
}
const Narratives = (props:Props)=>{
    console.log("Narrative", props)
    let tableContent: Array<JSX.Element> = [];
    props.narrativeList.forEach(ws => {
        let lastSaved = new Date(ws.last_saved);
        let savedMonth = lastSaved.getMonth()+1;
        let savedDate = lastSaved.getDate();
        let savedYear = lastSaved.getFullYear();
        tableContent.push(<TableRow id={ws.wsID}><TableCell>{ws.name}</TableCell><TableCell>{savedMonth}/{savedDate}/{savedYear}</TableCell><TableCell>{savedMonth}/{savedDate}/{savedYear}</TableCell></TableRow>)
    });
    
    // <pre>{ JSON.stringify(props.narrativeList) }</pre>
    return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>
                            Title <Button alignSelf='end' label="Sort" icon={<Ascend />} onClick={() => {}}/>
                        </TableCell>
                        <TableCell>
                            {/* Last Saved <Button icon={<Ascend />} label="Last Saved" alignSelf='end' gap="large" onClick={() => {}} /> */}
                            {/* <Box><Button icon={<Ascend />} label="Add" gap="xlarge" onClick={() => {}} /></Box> */}
                            Last Saved <Button alignSelf='start' label="Last Saved" icon={<Ascend />} onClick={() => {}}/>
                        </TableCell>
                        <TableCell>
                            Created <Button reverse label="Sort" icon={<Ascend />} onClick={() => {}}/>
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    { tableContent }
                </TableBody>
            </Table>
    )
}

export default Narratives;