const Home = () => {

    const handleClick = () => {
        console.log('it is working!');
    }

    return (
        <div className="home">
            <h2>HOME</h2>
            <p>App's Instructions</p>
            <div className="levelselector">
                <a href="/easy">EASY</a>
                <br/>
                <a href="/medium">MEDIUM</a>
                <br/>
                <a href="/hard">HARD</a>
                <br/>
            </div>
        </div>
    );
}
 
export default Home;