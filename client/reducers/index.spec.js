import reducer from './index';
import * as types from '../constants/ActionTypes';

describe('dashboard reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      data: []
    })
  });

  it('should handle PORTFOLIO_LIST_SUCCESS', () => {
    expect(reducer({}, {
      type: types.PORTFOLIO_LIST_SUCCESS,
      body: [
        'portfolio1', 'portfolio2'
      ]
    })).toEqual({
      data: ['portfolio1', 'portfolio2']
    })
  });
});