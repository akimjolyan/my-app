import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import Hierarchy from '../shared/Hierarchy/index.tsx';
import HierarchyNode from '../../types/HierarchyNode';

const treeData: HierarchyNode[] = [
  {
    id: 'main',
    label: 'מרכז שליטה',
    Icon: CorporateFareIcon,
    children: [
      {
        id: 'branch1',
        label: 'ענף מבצעים',
        Icon: FolderOpenIcon,
        children: [
          {
            id: 'leaf1',
            label: 'מדור מודיעין',
            Icon: GroupsIcon,
            teams: [
              { id: 't1', label: 'צוות איסוף' },
            ],
          },
        ],
      },
    ],
  },
];

const CommanderSidebar = () => {
  const { id = '1' } = useParams<{ id: string }>();
  const [activeId, setActiveId] = useState<string | null>('leaf2');

  const handleSelect = (id: string) => {
    setActiveId(id);
  };

  interface NavItem {
    text: string;
    icon: React.ReactNode;
    path: string;
    end?: boolean;
  }

  const navItems: NavItem[] = [
    { text: 'לוח בקרה', icon: <DashboardIcon />, path: `/Dashboard/${id}`, end: true },
    { text: 'נוכחות', icon: <GroupIcon />, path: `/Dashboard/${id}/personnel` },
    { text: 'תורנויות', icon: <AssignmentIcon />, path: `/Dashboard/${id}/events` },
  ];

  return (
    <Box
      component="aside"
      sx={{
        width: 280,
        height: 'calc(100vh - 70px)',
        bgcolor: "background.paper",
        borderLeft: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 70,
        overflowY: 'auto',
      }}
      dir="rtl"
    >
      {/* Profile Section */}
      <Box sx={{ p: 4, pt: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          component="img"
          src="/logo-small.png"
          alt="MIZEMI"
          sx={{
            height: { xs: 120, md: 150 },
            objectFit: 'contain',
            mixBlendMode: 'multiply',
            mb: 2
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          מרכז שליטה
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mt: 0.5 }}>
          ניהול כוח אדם מבצעים
        </Typography>
      </Box>

      {/* Main Nav */}
      <List sx={{ px: 2, py: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={NavLink}
              to={item.path}
              end={item.end}
              sx={{
                borderRadius: 2,
                '&.active': {
                  bgcolor: '#004b49',
                  color: 'white',
                  '& .MuiListItemIcon-root': { color: 'white' },
                  '&:hover': { bgcolor: '#004b49e0' }
                },
                color: '#64748b'
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 1, mx: 1 }} />

      {/* Hierarchy Section */}
      <Box sx={{ px: 3, flex: 1, pb: 4 }}>
        <Box sx={{ mb: 1, px: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
            היררכיה ארגונית
          </Typography>
        </Box>

        <Hierarchy
          data={treeData}
          activeId={activeId}
          onSelect={handleSelect}
        />
      </Box>
    </Box>
  );
};

export default CommanderSidebar;
