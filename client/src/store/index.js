import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import ReviewReducer from '../store/reducers/ReviewReducer'
import CategoryReducer from '../store/reducers/CategoryReducer'
import UserReducer from '../store/reducers/UserReducer'
import TagReducer from '../store/reducers/TagReducer'
import AuthReducer from '../store/reducers/AuthReducer'

const store = createStore(
    combineReducers({
        reviewState: ReviewReducer,
        categoryState: CategoryReducer,
        userState: UserReducer,
        tagState: TagReducer,
        authState: AuthReducer
    }),
    applyMiddleware(thunk)
)
export default store