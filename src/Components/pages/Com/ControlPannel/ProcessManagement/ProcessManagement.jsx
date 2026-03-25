import React from 'react';
import s from './ProcessManagement.module.css';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// TODO: move to mui
const ProcessManagement = () => {
  return (
    <div className={s.processSection}>
      <div className={s.processHeader}>
        <div className={s.processTitleArea}>
          <div className={s.processIconWrapper}>
            <AccountTreeIcon />
          </div>
          <div>
            <h2 className={s.processTitle}>ניהול תהליכים </h2>
            <p className={s.processSubtitle}>עקוב אחר התקדמות תהליכי כוח אדם ביחידה</p>
          </div>
        </div>
        <div className={s.processSelector}>
          <span className={s.selectorLabel}>בחר תהליך לביצוע</span>
          <select className={s.selectBox}>
            <option>ראיון פרידה ושחרור</option>
          </select>
        </div>
      </div>

      <div className={s.stepperContainer}>
        <div className={s.stepLine}></div>

        <div className={`${s.step} ${s.completed}`}>
          <div className={s.stepCircle}><CheckCircleIcon /></div>
          <span className={s.stepLabel}>זימון לראיון</span>
        </div>

        <div className={`${s.step} ${s.completed}`}>
          <div className={s.stepCircle}><CheckCircleIcon /></div>
          <span className={s.stepLabel}>ביצוע ראיון</span>
        </div>

        <div className={`${s.step} ${s.active}`}>
          <div className={s.stepCircle}>3</div>
          <span className={s.stepLabel}>חתימה על מסמכים</span>
        </div>

        <div className={`${s.step} ${s.pending}`}>
          <div className={s.stepCircle}>4</div>
          <span className={s.stepLabel}>אישור סופי</span>
        </div>
      </div>

      <div className={s.processDetails}>
        {/* Right List: Commander Tasks */}
        <div className={s.taskList}>
          <h3 className={s.listTitle}>
            <CheckCircleIcon sx={{ fontSize: 18 }} /> משימות מפקד לשלב זה
          </h3>
          <div className={`${s.taskItem} ${s.taskCompleted}`}>
            <CheckCircleIcon className={s.taskCheck} />
            <span>קביעת מועד לראיון פרידה</span>
          </div>
          <div className={`${s.taskItem} ${s.taskCompleted}`}>
            <CheckCircleIcon className={s.taskCheck} />
            <span>ביצוע הראיון בפועל</span>
          </div>
          <div className={`${s.taskItem} ${s.taskPending}`}>
            <RadioButtonUncheckedIcon className={s.taskUncheck} />
            <span>חתימה דיגיטלית על המלצת מפקד</span>
          </div>
        </div>

        {/* Left List: Required Documents */}
        <div className={s.docList}>
          <h3 className={s.listTitle}>
            <ListAltIcon sx={{ fontSize: 18 }} /> מסמכים נדרשים להעלאה
          </h3>
          <div className={`${s.docItem} ${s.docUploaded}`}>
            <div className={s.docInfo}>
              <VerifiedUserIcon className={s.docCheck} />
              <span>טופס 1004 (סיכום ראיון)</span>
            </div>
            <span className={s.uploadedBadge}>הועלה</span>
          </div>
          <div className={s.docItem}>
            <div className={s.docInfo}>
              <AttachFileIcon className={s.docIcon} />
              <span>עדכון סיווג ביטחוני חתום</span>
            </div>
            <button className={s.uploadBtn}>לחץ להעלאה</button>
          </div>
          <div className={s.docItem}>
            <div className={s.docInfo}>
              <AttachFileIcon className={s.docIcon} />
              <span>טופס טיולים פנימי</span>
            </div>
            <button className={s.uploadBtn}>לחץ להעלאה</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessManagement;
