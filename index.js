'use strict';
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Immutable = require('immutable')
const { render } = require('rapscallion')

const testMap = Immutable.Map([['a', 'Hello'], ['b', 'World']])
const testList = Immutable.List(['Hello', 'World'])
const testMulti = Immutable.Map([
  ['a', Immutable.List(['Lorem', 'ipsum'])],
  ['b', Immutable.List(['dolor', 'sit', 'amet'])],
])

/*
const doc = (
  <div>
    <div>
      Map:<br />
      {testMap.map((item, key) => (<span key={key}>{item} </span>))}
    </div>
    <div>
      List:<br />
      {testList.map((item, key) => (<span key={key}>{item} </span>))}
    </div>
    <div>
      Multi:<br />
      {testMulti.map((item) => (
        item.map((subitem, key) => (
          <span key={key}>{subitem} </span>
        ))
      ))}
    </div>
  </div>
)
*/

const doc = React.createElement(
  'div',
  null,
  React.createElement(
    'div',
    null,
    'Map:',
    React.createElement('br', null),
    testMap.map(function (item, key) {
      return React.createElement(
        'span',
        { key: key },
        item,
        ' '
      );
    })
  ),
  React.createElement(
    'div',
    null,
    'List:',
    React.createElement('br', null),
    testList.map(function (item, key) {
      return React.createElement(
        'span',
        { key: key },
        item,
        ' '
      );
    })
  ),
  React.createElement(
    'div',
    null,
    'Multi:',
    React.createElement('br', null),
    testMulti.map(function (item) {
      return item.map(function (subitem, key) {
        return React.createElement(
          'span',
          { key: key },
          subitem,
          ' '
        );
      });
    })
  )
)

console.log(ReactDOMServer.renderToString(doc))

render(doc).toPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error))

