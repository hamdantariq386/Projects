function Hello() {
    let myname = 'Hamdan'
    let number = 456
    let fullName = () => {
    return 'Hamdan Tariq'
}

    return <p>
        Message no: {number}  My name is {fullName()}
    </p>
}

export default Hello;