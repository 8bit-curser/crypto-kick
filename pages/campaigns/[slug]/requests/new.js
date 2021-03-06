import { React, Component } from 'react'
import Layout from '../../../../components/Layout';
import RequestForm from '../../../../components/RequestForm';
import 'semantic-ui-css/semantic.min.css'

class NewRequest extends Component {

    static async getInitialProps(props) {

        const { slug } = props.query;
        return {slug};
    }

    render() {
        return (
            <Layout>
                <RequestForm address={this.props.slug} />
            </Layout>
        )
    }
}

export default NewRequest;