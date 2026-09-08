

function PortfolioCard(props) {
    return (
        <>
            <h3>{props.title}</h3>

            <h2>{props.intro}</h2>

            <p>{props.param}</p>
        </>
    );
}

export default PortfolioCard;