import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as types from '../constants/ActionTypes';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('create PORTFOLIO_LIST_SUCCESS when fetching portfolio list has been done', () => {
        fetchMock.getOnce('http://example.com/list', {
            body: {
                list: [
                    'portfolio1',
                    'portfolio2'
                ]
            },
            headers: {
                'content-type': 'application/json'
            }
        }).catch((ex) => {
            return ;
        });

        const expectedActions = [
            { type: types.PORTFOLIO_LIST_REQUEST },
            { type: types.PORTFOLIO_LIST_SUCCESS, body: {list: [
                'portfolio1',
                'portfolio2'
            ]} }
        ];

        const store = mockStore({list: []});

        return store.dispatch(actions.fetchPortfolioList()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});