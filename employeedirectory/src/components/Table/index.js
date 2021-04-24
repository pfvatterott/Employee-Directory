import React from "react";
import { Button, Icon, Modal} from 'react-materialize';


function Table(props) {
    return (  
        <tbody>
          <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
            <td>{props.email}</td>
            <td><Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header="Modal Header"
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
              }}
              
              trigger={<Button className="red"
                        floating
                        icon={<Icon>add</Icon>}
                        node="button"
                        waves="light"
                      ></Button>}
            >
              <img class="circle" src={props.picture}></img>
            </Modal></td>
          </tr>
        </tbody>
    );
}

export default Table;