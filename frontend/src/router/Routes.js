import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import EmployeeForm from '../pages/employeeMgt/EmployeeForm'
import EmployeeTable from '../pages/employeeMgt/EmployeeTable'
import EmployeeLeave from '../pages/employeeMgt/EmployeeLeave'
import EmployeeSalaryForm from '../pages/employeeMgt/EmployeeSalaryForm'
import EmployeeFormEdit from '../pages/employeeMgt/EmployeeFormEdit'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

            {/* Employee Management pages routing */}
            <Route path="/employeeDashboard" element={<EmployeeTable />} />
            <Route path="/employeeRegister" element={<EmployeeForm />} />
            <Route path="/employeeUpdate/:id" element={<EmployeeFormEdit />} />
            <Route path="/employeeLeave" element={<EmployeeLeave />} />
            <Route path="/employeeSalary/:id" element={<EmployeeSalaryForm />} />

        </Routes>
    )
}

export default Router;