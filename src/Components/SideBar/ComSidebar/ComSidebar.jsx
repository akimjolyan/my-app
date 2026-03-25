import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './ComSidebar.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import PolicyIcon from '@mui/icons-material/Policy';

const treeData = [
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
            active: false,
            teams: [
              { id: 't1', label: 'צוות איסוף', active: false },
            ],
          },
          {
            id: 'leaf2',
            label: 'צוות אנליטיקה',
            Icon: PolicyIcon,
            active: true,
            teams: [],
          },
        ],
      },
    ],
  },
];

const TeamItem = ({ team }) => (
  <div className={`${s.teamItem} ${team.active ? s.activeTeam : ''}`}>
    <PersonIcon sx={{ fontSize: 14 }} />
    <span>{team.label}</span>
  </div>
);

const LeafNode = ({ leaf }) => {
  const [open, setOpen] = useState(leaf.active);
  const { Icon } = leaf;
  return (
    <div className={`${s.leafContainer} ${leaf.active ? s.activeTeam : ''}`}>
      <button className={`${s.branchTrigger} ${s.leafHeader}`} onClick={() => setOpen(!open)}>
        <Icon sx={{ fontSize: 15 }} />
        <span className={s.label}>{leaf.label}</span>
        {leaf.teams && leaf.teams.length > 0 && (
          <ExpandMoreIcon
            sx={{ fontSize: 15 }}
            className={`${s.arrow} ${open ? s.down : ''}`}
          />
        )}
      </button>
      {open && leaf.teams && leaf.teams.length > 0 && (
        <div className={s.teamList}>
          {leaf.teams.map(t => <TeamItem key={t.id} team={t} />)}
        </div>
      )}
    </div>
  );
};

const BranchNode = ({ branch }) => {
  const [open, setOpen] = useState(true);
  const { Icon } = branch;
  return (
    <div className={s.branch}>
      <button className={s.branchTrigger} onClick={() => setOpen(!open)}>
        <Icon sx={{ fontSize: 15 }} />
        <span className={s.label}>{branch.label}</span>
        <ExpandMoreIcon
          sx={{ fontSize: 15 }}
          className={`${s.arrow} ${open ? s.down : ''}`}
        />
      </button>
      {open && branch.children && (
        <div className={s.subBranch}>
          {branch.children.map(child =>
            child.teams
              ? <LeafNode key={child.id} leaf={child} />
              : <BranchNode key={child.id} branch={child} />
          )}
        </div>
      )}
    </div>
  );
};

const ComSidebar = () => {
  return (
    <aside className={s.sidebar} dir="rtl">
      <div className={s.profileSection}>
        <div className={s.avatarPlaceholder}>
          <img src="/logo-small.png" alt="MIZEMI" className={s.logoImage} />
        </div>
        <h2 className={s.title}>מרכז שליטה</h2>
        <p className={s.subtitle}>ניהול כוח אדם מבצעים</p>
      </div>

      <nav className={s.mainNav}>
        <NavLink to="/Dashboard" end className={({ isActive }) => isActive ? `${s.navLink} ${s.activeNavLink}` : s.navLink}>
          <DashboardIcon className={s.navIcon} />
          <span>לוח בקרה</span>
        </NavLink>
        <NavLink to="/Dashboard/personnel" className={({ isActive }) => isActive ? `${s.navLink} ${s.activeNavLink}` : s.navLink}>
          <GroupIcon className={s.navIcon} />
          <span>נוכחות</span>
        </NavLink>
        <NavLink to="/Dashboard/events" className={({ isActive }) => isActive ? `${s.navLink} ${s.activeNavLink}` : s.navLink}>
          <AssignmentIcon className={s.navIcon} />
          <span>תורנויות</span>
        </NavLink>
      </nav>

      <div className={s.divider}></div>

      <div className={s.hierarchyContainer}>
        <header className={s.header}>
          <h3 className={s.hierarchyTitle}>היררכיה ארגונית</h3>
        </header>

        <nav className={s.treeNav}>
          {treeData.map(node => <BranchNode key={node.id} branch={node} />)}
        </nav>
      </div>
    </aside>
  );
};

export default ComSidebar;
