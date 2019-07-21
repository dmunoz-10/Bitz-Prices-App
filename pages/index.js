import Layout from '../components/Layout'
import Prices from '../components/Prices'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
        <h1>Welcome to BitzPrices</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={props.bpi}/>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()

    return {
        bpi: data.bpi
    }
}

export default Index