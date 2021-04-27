import React from "react";
import { Button, Icon, Modal} from 'react-materialize';


function Table(props) {
    return (  
        <tbody className="align-center">
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
              <div class="center-align">
                <h2 class="center-align">{props.firstName + " " + props.lastName}</h2>
                <img class="circle center-align" src={props.picture}></img>
                <p><strong>Location:</strong> {props.city}, {props.country}</p>
                <p><strong>Cellphone:</strong> {props.cell}</p>
                <p><strong>Email:</strong> {props.email}</p>
              </div>
            </Modal></td>
          </tr>
        </tbody>
    );
}

export default Table;