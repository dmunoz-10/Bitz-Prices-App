class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    handleChange = e => {
        this.setState({
            currency: e.target.value
        })
    }

    render() {
        let money = {}
        if (this.state.currency === 'USD') {
            money = this.props.bpi.USD
        } else if (this.state.currency === 'GBP') {
            money = this.props.bpi.GBP
        } else if (this.state.currency === 'EUR') {
            money = this.props.bpi.EUR
        }

        return (
             <React.Fragment>
                 <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for { money.description }
                        : <span className="badge badge-primary"> {money.code} </span>
                        <strong> {money.rate} </strong>
                    </li>
                 </ul>
                 <select className="form-control" onChange={this.handleChange}>
                     <option value="USD">USD</option>
                     <option value="GBP">GBP</option>
                     <option value="EUR">EUR</option>
                 </select>
             </React.Fragment>
        )
    }
}

export default Prices