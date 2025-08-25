const Challenge = () => {
    const a = 2;
    const b = 3;

    const soma = () => {
        console.log(a + b);
    }
    
    return (
        <div>
            <p>a = {a}</p>
            <p>b = {b}</p>
            <button onClick = {soma}>Realizar a soma</button>
        </div>
    );
}

export default Challenge;