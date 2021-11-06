const Content = () => {
    const chores = ["item 1", "item 2", "item 3", "item 4"]
    return (
        <div class="container">
            <ul>
                {
                    chores.map(chore => <li>{chore}</li>)
                }
            </ul>
        </div>
    );
}

export default Content;