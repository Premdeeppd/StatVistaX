import React from 'react';
import InstalledApp from './installedapp';
import PerformanceGraph from './performanceGraph';
import StatusGrid from './statusGrid';
import PremiumAlert from './premiumAlert';

const Dashboard = () => {
    return (
        <div>
            <PremiumAlert/>
            <StatusGrid/>
            <PerformanceGraph/>
            <InstalledApp/>
        </div>
    );
};

export default Dashboard;