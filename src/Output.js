import React from 'react';

function Output(props) {
  let list = props.numbers.map(function(number, i) {
    let key = 'numbers' + i;
    return <li key={key}>{number}</li>;
  });
  return (
    <div id="output">
      <ul>{list}</ul>
    </div>
  );
}

export default Output;
