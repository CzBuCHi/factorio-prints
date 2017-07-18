import isEmpty from 'lodash/isEmpty';
import {AUTH_STATE_CHANGED, RECEIVED_MY_FAVORITES} from '../actions/actionTypes';

const initialState =
{
	loggedIn   : false,
	user       : {},
	myFavorites: {
		loading: false,
		data   : {},
	},
};

const emptyFavorites = {};

const authReducer = (state = initialState, action) =>
{
	switch (action.type)
	{
		case AUTH_STATE_CHANGED:
			const {user} = action;
			if (isEmpty(user))
			{
				return initialState;
			}
			return {
				...state,
				loggedIn: true,
				user,
			};
		case RECEIVED_MY_FAVORITES:
			return {
				...state,
				loggedIn   : true,
				myFavorites: {
					loading       : false,
					myFavoritesRef: action.myFavoritesRef,
					data          : action.myFavorites || emptyFavorites,
				},
			};
		default:
			return state;
	}
};

export default authReducer;
