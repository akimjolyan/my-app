import ActiveAlertsCard from './ActiveAlertsCard/index.tsx';
import CurrentPresenceCard from './CurrentPresenceCard/index.tsx';
import TotalPersonnelCard from './TotalPersonnelCard/index.tsx';
import { Box } from '@mui/material';

const MetricsRow = () => {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '24px' }}>
            <TotalPersonnelCard />
            <CurrentPresenceCard present={10} total={13} />
            <ActiveAlertsCard />
        </Box>
    );
};

export default MetricsRow;
