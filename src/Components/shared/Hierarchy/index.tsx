import React, { useState } from 'react';
import {
    Collapse,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HierarchyNode from '../../../types/HierarchyNode';

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
        <div style={{ marginRight: level > 0 ? '1.5rem' : 0 }}>
            <button
                onClick={() => {
                    setOpen(!open);
                    if (isLeaf) onSelect(branch.id);
                }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: isSelected ? '#e6f4f1' : 'transparent',
                    cursor: 'pointer',
                    color: isSelected ? '#004b49' : '#1e293b',
                    textAlign: 'right',
                    transition: 'background 0.2s',
                    fontWeight: isSelected ? 'bold' : '500',
                    fontSize: '0.85rem',
                    fontFamily: 'inherit'
                }}
                onMouseOver={(e) => !isSelected && (e.currentTarget.style.backgroundColor = '#f8fafc')}
                onMouseOut={(e) => !isSelected && (e.currentTarget.style.backgroundColor = 'transparent')}
            >
                {Icon && <Icon sx={{ fontSize: 18, color: isSelected ? '#004b49' : '#64748b' }} />}
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
                        <div
                            key={team.id}
                            onClick={(e) => {
                                e.stopPropagation();
                                onSelect(team.id);
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.6rem 1rem 0.6rem 2.5rem',
                                marginRight: '1.5rem',
                                borderRadius: '8px',
                                fontSize: '0.8rem',
                                color: activeId === team.id ? '#004b49' : '#64748b',
                                fontWeight: activeId === team.id ? 'bold' : 'normal',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                backgroundColor: activeId === team.id ? '#e6f4f1' : 'transparent',
                                direction: 'rtl'
                            }}
                        >
                            <PersonIcon sx={{ fontSize: 14, color: activeId === team.id ? '#004b49' : '#94a3b8' }} />
                            <span>{team.label}</span>
                        </div>
                    ))}
                </div>
            </Collapse>
        </div>
    );
};

interface HierarchyProps {
    data: HierarchyNode[];
    activeId: string | null;
    onSelect: (id: string) => void;
}

const Hierarchy: React.FC<HierarchyProps> = ({ data, activeId, onSelect }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {data.map(node => (
                <BranchNode
                    key={node.id}
                    branch={node}
                    level={0}
                    activeId={activeId}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};

export default Hierarchy;
