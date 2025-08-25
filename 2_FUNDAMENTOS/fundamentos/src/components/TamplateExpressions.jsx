const TamplateExpressions = () => {

    const name = "Isabela";
    const data = {
        age: 19,
        job: "Estudante",
    };
    return (
        <div>
            <h1>Olá, {name}! Tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4+4}</p>
        </div>
    );
}

export default TamplateExpressions;