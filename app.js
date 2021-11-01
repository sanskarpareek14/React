const containers = document.getElementById('apps')

const jsx =
    <ul>
        <li>I m a heading</li>
        <li>I m a heading</li>
        <li>I m a heading</li>
        <li>I m a heading</li>
        <ul>
            <li>abc</li>
            <li>def</li>
        </ul>
    </ul>
const content = React.createElement('div', {}, [
    React.createElement('h1', {}, 'This is a heading'),
    React.createElement('p', {}, 'Something written'),
    React.createElement('ul', {}, [
        React.createElement('li', {}, 'list1'),
        React.createElement('li', {}, 'list2'),
        React.createElement('li', {}, 'list3'),
        React.createElement('li', {}, 'list4')
    ]),
]
)

ReactDOM.render(content, containers)