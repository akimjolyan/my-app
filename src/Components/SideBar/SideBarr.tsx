import React, { useState } from 'react';
import {
    Typography,
    Collapse,
} from '@mui/material';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Team {
    id: string;
    label: string;
    active: boolean;
}

interface Node {
    id: string;
    label: string;
    Icon?: any;
    children?: Node[];
    teams?: Team[];
    active?: boolean;
}

const treeData: Node[] = [
    {
        id: 'main',
        label: 'מרכז (אגף התקשוב)',
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
                            { id: 't1', label: 'צוות UI/UX', active: false },
                            { id: 't2', label: 'צוות Backend', active: true },
                        ],
                    },
                ],
            },
        ],
    },
];

const Sidebar: React.FC = () => {
    return (
        <aside
            style={{
                width: '280px',
                height: 'calc(100vh - 70px)',
                backgroundColor: 'white',
                borderLeft: '1px solid #f1f5f9',
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                overflowY: 'auto',
                position: 'sticky',
                top: '70px',
            }}
            dir="rtl"
        >
            <div style={{ marginBottom: '2.5rem', padding: '0 0.5rem' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                    היררכיה ארגונית
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>
                    סינון לפי מבנה היחידה
                </Typography>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {treeData.map(node => <BranchNode key={node.id} branch={node} level={0} />)}
            </nav>
        </aside>
    );
};

const BranchNode: React.FC<{ branch: Node, level: number }> = ({ branch, level }) => {
    const [open, setOpen] = useState(false);
    const { Icon } = branch;

    return (
        <div style={{ marginRight: level > 0 ? '1.5rem' : 0 }}>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: branch.active ? '#e6f4f1' : 'transparent',
                    cursor: 'pointer',
                    color: branch.active ? '#004b49' : '#1e293b',
                    textAlign: 'right',
                    transition: 'background 0.2s',
                    fontWeight: branch.active ? 'bold' : '500',
                    fontSize: '0.85rem'
                }}
                onMouseOver={(e) => !branch.active && (e.currentTarget.style.backgroundColor = '#f8fafc')}
                onMouseOut={(e) => !branch.active && (e.currentTarget.style.backgroundColor = 'transparent')}
            >
                {Icon && <Icon sx={{ fontSize: 18, color: branch.active ? '#004b49' : '#64748b' }} />}
                <span style={{ flex: 1 }}>{branch.label}</span>
                <ExpandMoreIcon
                    sx={{
                        fontSize: 15,
                        color: '#94a3b8',
                        transform: open ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s'
                    }}
                />
            </button>

            <Collapse in={open}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                    {branch.children?.map(child => <BranchNode key={child.id} branch={child} level={level + 1} />)}
                    {branch.teams?.map(team => (
                        <div
                            key={team.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.6rem 1rem 0.6rem 2.5rem',
                                marginRight: '1.5rem',
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                color: team.active ? '#004b49' : '#64748b',
                                fontWeight: team.active ? 'bold' : 'normal',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                backgroundColor: team.active ? '#e6f4f1' : 'transparent'
                            }}
                        >
                            <PersonIcon sx={{ fontSize: 14, color: team.active ? '#004b49' : '#94a3b8' }} />
                            <span>{team.label}</span>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    );
};

export default Sidebar;
