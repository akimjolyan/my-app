import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GroupsIcon from '@mui/icons-material/Groups';
import {
    Box,
    Typography
} from '@mui/material';
import React, { useState } from 'react';

import Hierarchy from '../shared/Hierarchy/index.tsx';
import HierarchyNode from '../../types/HierarchyNode';

const treeData: HierarchyNode[] = [
    {
        id: '1',
        label: 'מרכז שליטה',
        Icon: CorporateFareIcon,
        children: [
            {
                id: 'branch1',
                label: 'ענף מערכות',
                Icon: FolderOpenIcon,
                children: [
                    {
                        id: 'leaf1',
                        label: 'מדור פיתוח',
                        Icon: GroupsIcon,
                        active: true,
                        teams: [
                            { id: 't1', label: 'צוות UI/UX' },
                            { id: 't2', label: 'צוות Backend' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: '2',
        label: 'מרכז מחשוב',
        Icon: CorporateFareIcon,
        children: [
            {
                id: 'branch1',
                label: 'ענף מערכות',
                Icon: FolderOpenIcon,
                children: [
                    {
                        id: 'leaf1',
                        label: 'מדור פיתוח',
                        Icon: GroupsIcon,
                        active: true,
                        teams: [
                            { id: 't1', label: 'צוות UI/UX' },
                            { id: 't2', label: 'צוות Backend' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: '3',
        label: 'מרכז תוכנה',
        Icon: CorporateFareIcon,
        children: [
            {
                id: 'branch1',
                label: 'ענף מערכות',
                Icon: FolderOpenIcon,
                children: [
                    {
                        id: 'leaf1',
                        label: 'מדור פיתוח',
                        Icon: GroupsIcon,
                        active: true,
                        teams: [
                            { id: 't1', label: 'צוות UI/UX' },
                            { id: 't2', label: 'צוות Backend' },
                        ],
                    },
                ],
            },
        ],
    }
];

const Sidebar: React.FC = () => {
    const [activeId, setActiveId] = useState<string | null>('leaf1');

    const handleSelect = (id: string) => {
        setActiveId(id);
    };

    return (
        <Box
            sx={{
                width: '280px',
                height: 'calc(100vh - 70px)',
                borderLeft: '1px solid #f1f5f9',
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                overflowY: 'auto',
                position: 'sticky',
                top: '70px',
                backgroundColor: "background.paper"
            }}
            dir="rtl"
        >
            <Box sx={{ marginBottom: '2.5rem', padding: '0 0.5rem', }}>
                <Typography variant="subtitle2" sx={{ fontSize: "1.5em", fontWeight: 'bold' }}>
                    היררכיה ארגונית
                </Typography>
                <Typography variant="caption" sx={{ fontSize: "1em" }}>
                    סינון לפי מבנה היחידה
                </Typography>
            </Box>

            <Box>
                <Hierarchy
                    data={treeData}
                    activeId={activeId}
                    onSelect={handleSelect}
                />
            </Box>
        </Box>
    );
};

export default Sidebar;
