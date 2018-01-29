// import 'cross-fetch/polyfill';
import 'isomorphic-fetch';

export function fetchPortfolioListRequest() {
    return {
        type: 'PORTFOLIO_LIST_REQUEST'
    }
}

export function fetchPortfolioListSuccess(body) {
    return {
        type: 'PORTFOLIO_LIST_SUCCESS',
        body
    }
}

export function fetchPortfolioListFailure(ex) {
    return {
        type: 'PORTFOLIO_LIST_FAILURE',
        ex
    }
}

export function fetchPortfolioList() {
    return dispatch => {
        dispatch(fetchPortfolioListRequest());
        return fetch('http://example.com/list')
            .then(res => res.json())
            .then(response => dispatch(fetchPortfolioListSuccess(response)))
            .catch(ex => dispatch(fetchPortfolioListFailure(ex)));
    };
}