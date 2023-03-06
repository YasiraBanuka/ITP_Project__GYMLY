import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Schedule from '../pages/schedule/Schedule'
import EditInstructor from '../pages/schedule/scheduleEdit/EditInstructor'
import EditTimeSlot from '../pages/schedule/scheduleEdit/EditTimeSlot'
import ScheduleTable from '../pages/schedule/ScheduleTable'
import InstructorConfirmOM from '../pages/schedule/InstructorConfirmOM'

import standardPackages from '../pages/package/standardPackages'
import editStandard from '../pages/package/editStandard'
import promoPackages from '../pages/package/promoPackages'
import addNewPromo from '../pages/package/addNewPromo'
import promoApproval from '../pages/package/promoApproval'

import Login from '../pages/Users/Login'
import Registation from '../pages/Users/Registation'
import Dashboard from '../pages/Users/Dashboard'

import ServiceFeedbackform from '../pages/CustomerAffairs/ServiceFeedbackform'
import InstructorFeedbackform from '../pages/CustomerAffairs/InstructorFeedbackform'
import FeedbackApproval from '../pages/CustomerAffairs/FeedbackApproval'
import FeedbackOptions from '../pages/CustomerAffairs/FeedbackOptions'
import AboutUs from '../pages/CustomerAffairs/AboutUs'
import ContactUs from '../pages/CustomerAffairs/ContactUs'

import Placeorder from '../pages/Supplements/Placeorder'
import Salesmanagerreport from '../pages/Supplements/Salessmanagerreport'
import SupplementstoreCashier from '../pages/Supplements/SupplementstoreCashier'
import SupplementstoreUser from '../pages/Supplements/SupplementstoreUser'



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

            {/* Schedule pages routing */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/changetimeslot" element={<EditTimeSlot />} />
            <Route path="/changeinstrutor" element={<EditInstructor />} />
            <Route path="/trainings" element={<ScheduleTable />} />
            <Route path="/confirmation" element={<InstructorConfirmOM />} />


            {/* package */}
            <Route path="/standardpackages" element={<standardPackages />} />
            <Route path="/editstandard" element={<editStandard />} />
            <Route path="/promopackages" element={<promoPackages />} />
            <Route path="/newpromo" element={<addNewPromo />} />
            <Route path="/promoapproval" element={<promoApproval />} />


            {/*User Management*/}
            <Route path="/Loging" element={<Login />} />
            <Route path="/Registation" element={<Registation />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            {/*User Management*/}
            
            
            {/*Customer Affairs Management*/}
            <Route path="/ServiceFeedbackform" element={<ServiceFeedbackform />} />
            <Route path="/InstructorFeedbackform" element={<InstructorFeedbackform />} />
            <Route path="/FeedbackApproval" element={<FeedbackApproval />} />
            <Route path="/FeedbackOptions" element={<FeedbackOptions />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            
            {/* Supplements pages routing*/}
            <Route path="/order" element={<Placeorder/>} />
            <Route path="/report" element={<Salesmanagerreport/>} />
            <Route path="/storecashier" element={<SupplementstoreCashier/>} />
            <Route path="/storeuser" element={<SupplementstoreUser />} />
            





      </Routes>

             
    )
}

export default Router;