import React from 'react';
import HierarchyNode from '../../../types/HierarchyNode';
import BranchNode from './BranchNode/index.tsx';
import { Box } from '@mui/material';

interface HierarchyProps {
    data: HierarchyNode[];
    activeId: string | null;
    onSelect: (id: string) => void;
}

const Hierarchy: React.FC<HierarchyProps> = ({ data, activeId, onSelect }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {data.map(node => (
                <BranchNode
                    key={node.id}
                    branch={node}
                    level={0}
                    activeId={activeId}
                    onSelect={onSelect}
                />
            ))}
        </Box>
    );
};

export default Hierarchy;
