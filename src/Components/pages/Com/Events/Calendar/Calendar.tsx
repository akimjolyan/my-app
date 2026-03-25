import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventContentArg } from '@fullcalendar/core';
import { Box, Paper, Typography, IconButton, Stack } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "./overide.css"
// --- Types ---
interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    backgroundColor: string;
    variant: 'light' | 'dark';
}

interface LegendProps {
    color: string;
    label: string;
}
// --- Helper Components ---
const Legend: React.FC<LegendProps> = ({ color, label }) => (
    <Stack direction="row" spacing={1} alignItems="center" gap={"0.2em"}>
        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: color }} />
        <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#555' }}>
            {label}
        </Typography>
    </Stack>
);

const CalendarTS: React.FC = () => {
    const calendarRef = useRef<FullCalendar>(null);

    // --- Mock Data ---
    const events: CalendarEvent[] = [
        { id: '1', title: 'אבטחה: לוי', start: '2026-10-02', backgroundColor: '#e9f1ee', variant: 'light' },
        { id: '2', title: 'מטבח: טל', start: '2026-10-02', backgroundColor: '#f0ede6', variant: 'light' },
        { id: '3', title: 'יום מבצעי מוגבר', start: '2026-10-07', backgroundColor: '#284d43', variant: 'dark' },
        { id: '4', title: "רס''ר: אדלר", start: '2026-10-17', backgroundColor: '#eeeeee', variant: 'light' },
    ];

    // --- Custom Event Renderer ---
    const renderEventContent = (eventInfo: EventContentArg) => {
        const { variant } = eventInfo.event.extendedProps as { variant: string };
        const isDark = variant === 'dark';

        return (
            <Box
                sx={{
                    bgcolor: eventInfo.backgroundColor,
                    color: isDark ? '#fff' : '#2d4f43',
                    px: 2,
                    py: 0.5,
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'center',
                    border: '1px solid rgba(0,0,0,0.03)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                    '&:hover': {
                        opacity: 0.9
                    }
                }}
            >
                {eventInfo.event.title}
            </Box>
        );
    };

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 5,
                bgcolor: '#fff',
                direction: 'rtl',
                width: '100%',
                border: '1px solid #f0f0f0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
            }}
        >
            {/* HEADER SECTION */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4, px: 2 }}>
                {/* Title and Nav Section */}
                <Stack direction="row" spacing={2} alignItems="center" gap={"1em"}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#004b49' }}>
                        יומן היעדרויות - אוקטובר 2026
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <IconButton
                            size="small"
                            onClick={() => calendarRef.current?.getApi().prev()}
                            sx={{ border: '1px solid #f0f0f0', width: 36, height: 36 }}
                        >
                            <ChevronRightIcon fontSize="small" color="action" />
                        </IconButton>
                        <IconButton
                            size="small"
                            onClick={() => calendarRef.current?.getApi().next()}
                            sx={{ border: '1px solid #f0f0f0', width: 36, height: 36 }}
                        >
                            <ChevronLeftIcon fontSize="small" color="action" />
                        </IconButton>
                    </Stack>
                </Stack>

                {/* Legend Section */}
                <Stack direction="row" gap={"0.5em"} alignItems="center">
                    <Legend color="#a2d2cd" label="חופשה" />
                    <Legend color="#5d4037" label="תפקיד חוץ" />
                    <Legend color="#fbc091" label="כוננות בית" />
                </Stack>
            </Stack>

            {/* CALENDAR SECTION */}
            <Box>
                <FullCalendar // TODO: remove bottom and side border
                    ref={calendarRef}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGrid"
                    duration={{ weeks: 3 }}
                    initialDate="2026-10-01"
                    direction="rtl"
                    locale="he"
                    headerToolbar={false}
                    events={events}
                    eventContent={renderEventContent}
                    dayMaxEvents={3}
                    height={650}
                    dayHeaderContent={(arg) => {
                        const day = arg.text.replace('יום ', '');
                        return day;
                    }}
                    fixedWeekCount={false}
                    showNonCurrentDates={true}
                />
            </Box>
        </Paper>
    );
};


export default CalendarTS;