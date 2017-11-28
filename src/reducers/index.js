import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmpoloyeesReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmpoloyeesReducer
});
