import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import PolicyIcon from '@mui/icons-material/Policy';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar
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
              { id: 't2', label: 'צוות אנליטיקה' },
            ],
          },
          {
            id: 'leaf2',
            label: 'מדור לוחמה אלקטרונית',
            Icon: PolicyIcon,
            teams: [
              { id: 't3', label: 'צוות לוחמה אלקטרונית' },
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
      <Box sx={{ p: 4, pt: 5, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          src="/logo-small.png"
          alt="MIZEMI"
          sx={{
            width: 70,
            height: 70,
            mb: 2,
            border: '1px solid',
            borderColor: 'divider',
            p: 1.5,
            '& img': { objectFit: 'contain' }
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b', fontSize: '1.2rem' }}>
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

      <Divider sx={{ my: 2, mx: 3 }} />

      {/* Hierarchy Section */}
      <Box sx={{ px: 3, flex: 1, pb: 4 }}>
        <Box sx={{ mb: 2, px: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#1e293b', fontSize: '0.9rem' }}>
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
