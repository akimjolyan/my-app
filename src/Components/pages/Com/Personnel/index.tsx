import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import {
    Avatar,
    Box,
    Button,
    Card,
    Link,
    Stack,
    Typography
} from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';
import CalendarTS from '../Events/Calendar/index.tsx';

// --- Constants & Colors ---
const COLORS = {
    PRIMARY: '#004b49',
    TEXT_MAIN: '#1e293b',
    TEXT_SUB: '#64748b',
    BG_PAGE: '#f8fafc',
    BORDER: '#f1f5f9',
    STATUS: {
        LEAVE: '#a2d2cd',      // חופשה
        OUTSIDE: '#5d4037',    // תפקיד חוץ
        HOME_RESERVE: '#fbc091', // כוננות בית
        BASE: '#e2e8f0',       // בבסיס
        SUCCESS: '#2d4f43',    // נוכחים (for chart)
    }
};

// --- Mock Data ---
interface PersonnelMember {
    id: string;
    name: string;
    unit: string;
    status: string;
    initials: string;
    accentColor: string;
}

const personnelData: PersonnelMember[] = [
    { id: '1', name: 'סמ"ר מיה שרון', unit: 'לוגיסטיקה', status: 'חופשה', initials: 'מש', accentColor: COLORS.STATUS.LEAVE },
    { id: '2', name: 'רס"ן דור לוי', unit: 'אג"ם', status: 'כוננות בית', initials: 'דל', accentColor: COLORS.STATUS.HOME_RESERVE },
    { id: '3', name: 'רב"ט נועם לוי', unit: 'צוות בראבו', status: 'בבסיס', initials: 'נל', accentColor: COLORS.STATUS.BASE },
    { id: '4', name: 'רס"ל יניב כהן', unit: 'צוות אלפא', status: 'בבסיס', initials: 'יכ', accentColor: COLORS.STATUS.BASE },
    { id: '5', name: 'סגן רועי אברהם', unit: 'מטה היחידה', status: 'תפקיד חוץ', initials: 'רא', accentColor: COLORS.STATUS.OUTSIDE },
    { id: '6', name: 'סרן אבי דוד', unit: 'אג"ם', status: 'בבסיס', initials: 'אד', accentColor: COLORS.STATUS.BASE },
];

const chartData = [
    { id: 0, value: 8, label: 'נוכחים', color: COLORS.STATUS.SUCCESS },
    { id: 1, value: 2, label: 'בתפקיד חוץ', color: COLORS.STATUS.OUTSIDE },
    { id: 2, value: 2, label: 'חופשה', color: COLORS.STATUS.LEAVE },
    { id: 3, value: 1, label: 'כוננות בית', color: COLORS.STATUS.HOME_RESERVE },
];

// --- Helper Components ---
const PersonnelCard: React.FC<{ member: PersonnelMember }> = ({ member }) => (
    <Card
        sx={{
            p: "1em !important",
            borderRadius: 3,
            border: `1px solid ${COLORS.BORDER}`,
            borderRight: `4px solid ${member.accentColor}`,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            },
            width: '49%',
            overflow: 'hidden'
        }}
    >
        <Avatar
            sx={{
                width: 48,
                height: 48,
                bgcolor: `${member.accentColor}20`,
                color: member.accentColor === COLORS.STATUS.BASE ? COLORS.TEXT_MAIN : member.accentColor,
                fontWeight: 'bold',
                fontSize: '1rem',
                border: `1px solid ${member.accentColor}40`
            }}
        >
            {member.initials}
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="subtitle2" noWrap sx={{ fontWeight: 'bold', color: COLORS.TEXT_MAIN }}>
                {member.name}
            </Typography>
            <Typography variant="caption" noWrap sx={{ color: COLORS.TEXT_SUB }}>
                {member.unit}
            </Typography>
        </Box>
        <Box
            sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: '12px',
                bgcolor: '#f8fafc',
                border: '1px solid #e2e8f0',
            }}
        >
            <Typography variant="caption" sx={{ fontWeight: 'bold', fontSize: '0.65rem', color: COLORS.TEXT_SUB }}>
                {member.status}
            </Typography>
        </Box>
    </Card>
);

const LegendItem: React.FC<{ color: string; label: string; value: number }> = ({ color, label, value }) => (
    <Stack direction="row" alignItems="center" justifyContent={"flex-start"} spacing={1.5} sx={{ gap: 0.5 }}>
        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: color }} />

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 1 }}>

            <Typography variant="caption" sx={{ color: COLORS.TEXT_SUB, fontWeight: '500' }}>
                {label}
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 'bold', color: COLORS.TEXT_MAIN }}>
                {value}
            </Typography>
        </Box>

    </Stack>
);

const Personnel: React.FC = () => {
    return (
        <Box sx={{ p: 4, minHeight: '100vh', direction: 'rtl' }}>
            {/* Header Section */}

            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight="bold" color="#004b49" gutterBottom>
                    ניהול נוכחות כוח אדם
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    סטטוס מוכנות וזמינות יחידתית בזמן אמת (13 חיילים סדיר/קבע)
                </Typography>
            </Box>

            {/* Main Content Layout using CSS Grid */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.3fr',
                gap: 4
            }}>

                {/* Right Section: Daily Presence Report (Fixed Flex basis) */}
                <Box >
                    <Card
                        elevation={0}
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            border: `1px solid ${COLORS.BORDER}`,
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, alignItems: 'center', mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, }}>
                                <Box sx={{ width: 4, bgcolor: COLORS.PRIMARY, borderRadius: 1 }} />
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: COLORS.TEXT_MAIN }}>
                                    דו"ח נוכחות יומי
                                </Typography>
                            </Box>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                    bgcolor: COLORS.PRIMARY,
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    px: 2,
                                    fontSize: '0.8rem'
                                }}
                            >
                                הפקת דו"ח
                            </Button>
                        </Box>

                        <Box sx={{ position: 'relative', height: 240, display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                            <PieChart
                                series={[
                                    {
                                        data: chartData,
                                        innerRadius: 65,
                                        outerRadius: 85,
                                        paddingAngle: 2,
                                        cornerRadius: 4,
                                        startAngle: -90,
                                        endAngle: 270,
                                    },
                                ]}
                                width={240}
                                height={240}
                                hideLegend
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="h3" sx={{ fontWeight: 'bold', color: COLORS.PRIMARY, lineHeight: 1 }}>
                                    13
                                </Typography>
                                <Typography variant="caption" sx={{ color: COLORS.TEXT_SUB, fontWeight: 'bold', fontSize: '0.75rem' }}>
                                    סד"כ פעיל
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 2,
                            mt: 'auto',
                            px: 2
                        }}>
                            {chartData.map((item) => (
                                <LegendItem key={item.id} color={item.color} label={item.label} value={item.value} />
                            ))}
                        </Box>
                    </Card>
                </Box>
                {/* Left Section: Personal Tracking (Flex: 1 to Grow) */}
                <Box >

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <ContactPageOutlinedIcon sx={{ color: "text.primary" }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: "text.primary" }}>
                                מעקב פרטני אחר חיילים
                            </Typography>
                        </Stack>
                        <Link href="#" underline='none' sx={{ color: "background.primary", fontSize: '0.8rem', fontWeight: 'bold', py: 0.5, borderBottom: `1px solid ${COLORS.PRIMARY}` }}>
                            צפייה בכל הסד"כ
                        </Link>
                    </Box>

                    {/* Cards Container using CSS Grid for exact 2-column layout */}
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        height: "86%"
                    }}>
                        {personnelData.map((member) => (
                            <PersonnelCard key={member.id} member={member} />
                        ))}
                    </Box>

                </Box>


            </Box>
            {/* Bottom Section: Calendar (Full Width) */}
            <Box sx={{ width: '100%', mt: 4 }}>
                <CalendarTS />
            </Box>

        </Box >
    );
};

export default Personnel;
