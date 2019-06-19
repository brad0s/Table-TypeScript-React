import * as React from 'react';

interface Props {
   sportsData: string
}

interface State {

}

class Table extends React.Component<Props, State> {
    // constructor(props: Props) {
    //     super(props);
    // }
    render() {
        const { sportsData } = this.props
        return (
           <table>
               <TableHeader />
               <TableBody sportsData={ sportsData }/>
           </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <th>Sport</th>
            <th>Day</th>
            <th>Time</th>
            <th>Location</th>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.sportsData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.Sport}</td>
                <td>{row.Day}</td>
                <td>{row.Time}</td>
                <td>{row.Location}</td>
            </tr>
        ); 
    });

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

export default Table