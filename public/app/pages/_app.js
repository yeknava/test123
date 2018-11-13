import App, {Container} from 'next/app'
import React from 'react'
// import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import {initializeStore} from '../store'
import withRedux from "next-redux-wrapper";
// const store = initializeStore()
class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too
        // ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(initializeStore)(MyApp);

// export default MyApp 
