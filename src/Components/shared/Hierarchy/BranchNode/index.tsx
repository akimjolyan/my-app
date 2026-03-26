import React, { useState } from 'react';
import {
    Box,
    Button,
    Collapse,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HierarchyNode from '../../../../types/HierarchyNode';

interface BranchNodeProps {
    branch: HierarchyNode;
    level: number;
    activeId: string | null;
    onSelect: (id: string) => void;
}

const BranchNode: React.FC<BranchNodeProps> = ({ branch, level, activeId, onSelect }) => {
    const isLeaf = !!branch.teams;
    const isSelected = activeId === branch.id;
    const [open, setOpen] = useState(false);
    const { Icon } = branch;

    return (
        <Box sx={{ marginRight: level > 0 ? '1.5rem' : 0 }}>
            <Button
                onClick={() => {
                    setOpen(!open);
                    if (isLeaf) onSelect(branch.id);
                }}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: "transparent",
                    cursor: 'pointer',
                    color: isSelected ? "text.primary" : 'text.secondary',
                    textAlign: 'right',
                    transition: 'background 0.2s',
                    fontWeight: isSelected ? 'bold' : '500',
                    fontSize: '0.85rem',
                    fontFamily: 'inherit',
                    '&:hover': { backgroundColor: 'background.default' }
                }}
            >
                {Icon && <Icon sx={{ fontSize: 18, color: isSelected ? 'text.primary' : 'text.secondary' }} />}
                <span style={{ flex: 1 }}>{branch.label}</span>
                <ExpandMoreIcon
                    sx={{
                        fontSize: 15,
                        color: '#94a3b8',
                        transform: open ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s'
                    }}
                />
            </Button>

            <Collapse in={open}>
                <Box style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                    {branch.children?.map(child => (
                        <BranchNode
                            key={child.id}
                            branch={child}
                            level={level + 1}
                            activeId={activeId}
                            onSelect={onSelect}
                        />
                    ))}
                    {branch.teams?.map(team => (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.6rem 1rem 0.6rem 2.5rem',
                                marginRight: '1.5rem',
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                fontWeight: activeId === team.id ? 'bold' : 'normal',
                                color: activeId === team.id && 'text.primary',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                backgroundColor: activeId === team.id && 'background.default',
                                '&:hover': { backgroundColor: 'background.default' }
                            }}
                            key={team.id}
                        >
                            <PersonIcon sx={{ fontSize: 14, color: activeId === team.id ? '#004b49' : '#94a3b8' }} />
                            <span>{team.label}</span>
                        </Box>
                    ))}
                </Box>
            </Collapse>
        </Box>
    );
};
export default BranchNode;