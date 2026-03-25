import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Stack,
} from '@mui/material';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

interface CommandHierarchyTexts {
    title: string;
    directCommanderLabel: string;
    directCommanderName: string;
    teamMembers: string[];
    highlightedMember: string;
}

const TEXT_DATA: CommandHierarchyTexts = {
    title: "היררכיה פיקודית",
    directCommanderLabel: "מפקד ישיר",
    directCommanderName: 'רס"ן אלון דיין',
    teamMembers: ['סמל רעות לוי', 'יוסי ישראלי', 'סמ"ר דניאל אביב'],
    highlightedMember: 'יוסי ישראלי',
};

const CommandHierarchyCard: React.FC = () => {
    return (
        <Paper
            sx={{
                p: "1.5em 2em !important",
                borderRadius: 1,
                border: '1px solid #f0f0f0',
                bgcolor: 'white',
            }}
        >
            <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                <AccountTreeOutlinedIcon sx={{ color: '#004b49' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                    {TEXT_DATA.title}
                </Typography>
            </Stack>

            <Box sx={{ textAlign: 'center' }}>
                <Box
                    sx={{
                        display: 'inline-block',
                        p: 1.5,
                        bgcolor: '#f1f5f9',
                        borderRadius: 2,
                        mb: 4,
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -32,
                            left: '50%',
                            width: 2,
                            height: 32,
                            bgcolor: '#cbd5e1'
                        }
                    }}
                >
                    <Typography variant="caption" color="text.secondary">{TEXT_DATA.directCommanderLabel}</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{TEXT_DATA.directCommanderName}</Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 1,
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -32,
                        left: '10%',
                        right: '10%',
                        height: 2,
                        bgcolor: '#cbd5e1'
                    }
                }}>
                    {TEXT_DATA.teamMembers.map((name) => (
                        <Box
                            key={name}
                            sx={{
                                flex: 1,
                                p: 1,
                                borderRadius: 1.5,
                                bgcolor: name === TEXT_DATA.highlightedMember ? '#004b49' : 'transparent',
                                color: name === TEXT_DATA.highlightedMember ? 'white' : 'inherit',
                                border: name === TEXT_DATA.highlightedMember ? 'none' : '1px solid #f1f5f9',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: -32,
                                    left: '50%',
                                    width: 2,
                                    height: 32,
                                    bgcolor: '#cbd5e1'
                                }
                            }}
                        >
                            <Typography variant="caption" sx={{ fontSize: '0.65rem' }}>{name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Paper>
    );
};

export default CommandHierarchyCard;

