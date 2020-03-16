import React, {useEffect, useState} from 'react';
import _ from 'lodash';

let text = [{
    "index": 1,
    "id": "5e3961face022d16a03b1de9_1023632_1004876",
    "costtable": [
        {
            "roomname": "Single",
            "room_id": "1023632_479490,1004876_385485",
            "family": [
                {
                    "title": "adult 1",
                    "cost": 3.7568000,
                    "unit": "10",
                    "type": "2"
                }
            ]
        }
    ]
},
{
    "index": 2,
    "id": "5e3961face022d16a03b1de9_1088496_1005362",
    "costtable": [
        {
            "roomname": "Double",
            "room_id": "1088496_447339,1005362_415279",
            "family": [
                {
                    "title": "adult 1",
                    "cost": 5.6868000,
                    "unit": "10",
                    "type": "2"
                }
            ]
        }
    ]
},
{
    "index": 3,
    "id": "5e3961face022d16a03b1de9_1141859_1005529",
    "costtable": [
        {
            "roomname": "Single",
            "room_id": "1141859_74888,1005529_870689",
            "family": [
                {
                    "title": "adult 1",
                    "cost": 5.9586000,
                    "unit": "10",
                    "type": "2"
                }
            ]
        }
    ]
}
]

const App = () =>{

    const usersWithName = Object.keys(text).map(function(key) {
        var user = text[key];
        return user.costtable[0].family[0].cost;
      });
    
    let costArray = usersWithName

    const [ascValue, setAscValue] = useState(true);
    const [values, setValues] = useState(costArray);


        function sortValues() {
            const compare = ascValue ? (a, b) => a - b : (a, b) => b - a;
            setValues([...values].sort(compare));
          }
        

        useEffect(() => {
            sortValues();
          }, [ascValue]);




        return (
        <div>
            <h3>{ascValue.toString()}</h3>
            <button onClick={() => setAscValue(!ascValue)}>Toggle Asc</button>
            {values.map(v => (
                <p key={v}>{v}</p>
            ))}
        </div>
        );
    }

export default App;