import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'


import OMHome from '../pages/OMdashboard/OMHome'

import StandardPackages from '../pages/Membership/StandardPackages'
import EditStandard from '../pages/Membership/EditStandard'
import PromoPackages from '../pages/Membership/PromoPackages'
import AddNewPromo from '../pages/Membership/AddNewPromo'
import PromoApproval from '../pages/Membership/PromoApproval'
import MMdashboard from '../pages/Membership/MMdashboard'
import MembershipPackages from '../pages/Membership/MembershipPackages'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

            {/* operation manager homepage */}
            <Route path="/home" element={<OMHome />} />

            {/* membership package */}
            <Route path="/standardpackages" element={<StandardPackages />} />
            <Route path="/editstandard/:id" element={<EditStandard />} />
            <Route path="/promopackages" element={<PromoPackages />} />
            <Route path="/newpromo" element={<AddNewPromo />} />
            <Route path="/promoapproval" element={<PromoApproval />} />
            <Route path="/mmdashboard" element={<MMdashboard />} />
            <Route path="/membershippackages" element={<MembershipPackages />} />

        </Routes>
    )
}

export default Router;