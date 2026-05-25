import { useState, useEffect, useRef } from "react";
import "./App.css";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00c896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.47 2 2 0 0 1 3.55 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 5.65 5.65l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16h.27" />
  </svg>
);

const IdCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <circle cx="8" cy="12" r="2" />
    <path d="M14 9h4M14 12h4M14 15h2" />
  </svg>
);

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const roles = [
  { label: "Citizen",   icon: <UserIcon /> },
  {
    label: "Volunteer",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    label: "Admin",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 1 0 20 12" />
      </svg>
    ),
  },
];

const navItems = ["Home", "Blog", "Services", "About"];

const SKILLS = ["First Aid", "Fire Fighting", "Medical", "Search & Rescue"];

// ─── Reusable PasswordInput ───────────────────────────────────────────────────

function PasswordInput({ placeholder, value, onChange }) {
  const [show, setShow] = useState(false);
  return (
    <div className="input-group">
      <span className="input-icon"><LockIcon /></span>
      <input
        className="input"
        type={show ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button className="eye-btn" onClick={() => setShow(s => !s)} type="button">
        {show ? <EyeIcon /> : <EyeOffIcon />}
      </button>
    </div>
  );
}

// ─── Section: Citizen ─────────────────────────────────────────────────────────

function CitizenSection({ tab, setTab }) {
  const [showPwd, setShowPwd]         = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [remember, setRemember]       = useState(false);

  return (
    <>
      <div className="card-tabs">
        <button className={`card-tab ${tab === "signin" ? "card-tab--active" : ""}`} onClick={() => setTab("signin")}>Sign In</button>
        <button className={`card-tab ${tab === "signup" ? "card-tab--active" : ""}`} onClick={() => setTab("signup")}>Sign Up</button>
      </div>

      <div className="form-body">
        {/* ── Sign In ── */}
        {tab === "signin" && (
          <>
            <div>
              <h2 className="form-title">Welcome back</h2>
              <p className="form-subtitle">Don't have an account? <span className="link" onClick={() => setTab("signup")}>Sign Up</span></p>
            </div>

            <div className="input-group">
              <span className="input-icon"><UserIcon /></span>
              <input className="input" type="text" placeholder="Username or Email" />
            </div>

            <PasswordInput placeholder="Password" value="" onChange={() => {}} />

            <div className="remember-row">
              <label className="remember-label">
                <input type="checkbox" className="checkbox" checked={remember} onChange={() => setRemember(r => !r)} />
                Remember me
              </label>
              <span className="forgot-link">Forgot password?</span>
            </div>

            <button className="submit-btn" type="button">Sign In</button>
          </>
        )}

        {/* ── Sign Up ── */}
        {tab === "signup" && (
          <>
            <div>
              <h2 className="form-title">Create Account</h2>
              <p className="form-subtitle">Already registered? <span className="link" onClick={() => setTab("signin")}>Sign In</span></p>
            </div>

            <div className="field-row">
              <div className="input-group">
                <span className="input-icon"><UserIcon /></span>
                <input className="input" type="text" placeholder="First name" />
              </div>
              <div className="input-group">
                <span className="input-icon"><UserIcon /></span>
                <input className="input" type="text" placeholder="Last name" />
              </div>
            </div>

            <div className="input-group">
              <span className="input-icon"><MailIcon /></span>
              <input className="input" type="email" placeholder="Email address" />
            </div>

            <PasswordInput placeholder="Create password" value="" onChange={() => {}} />
            <PasswordInput placeholder="Confirm password" value="" onChange={() => {}} />

            <button className="submit-btn" type="button">Create Account</button>
          </>
        )}
      </div>
    </>
  );
}

// ─── Section: Volunteer ───────────────────────────────────────────────────────

function VolunteerSection() {
  const [tab, setTab]             = useState("signin");
  const [remember, setRemember]   = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [skills, setSkills]       = useState([]);
  const [availability, setAvail]  = useState("");
  const fileRef                   = useRef();

  const toggleSkill = (s) =>
    setSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (f) setUploadedFile(f.name.length > 28 ? f.name.slice(0, 25) + "…" : f.name);
  };

  return (
    <>
      {/* Volunteer badge */}
      <div className="role-notice vol-badge">
        <span className="role-notice__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </span>
        Rescue Personnel Registration
      </div>

      {/* Pending notice */}
      <div className="pending-notice">
        <span className="pending-notice__icon"><InfoIcon /></span>
        <span>Account will be <strong>PENDING</strong> until approved by an Admin.</span>
      </div>

      <div className="card-tabs">
        <button className={`card-tab card-tab--vol ${tab === "signin" ? "card-tab--active card-tab--vol-active" : ""}`} onClick={() => setTab("signin")}>Sign In</button>
        <button className={`card-tab card-tab--vol ${tab === "signup" ? "card-tab--active card-tab--vol-active" : ""}`} onClick={() => setTab("signup")}>Sign Up</button>
      </div>

      <div className="form-body">
        {/* ── Volunteer Sign In ── */}
        {tab === "signin" && (
          <>
            <div>
              <h2 className="form-title">Volunteer Login</h2>
              <p className="form-subtitle">Not registered? <span className="link link--vol" onClick={() => setTab("signup")}>Sign Up</span></p>
            </div>

            <div className="input-group">
              <span className="input-icon"><UserIcon /></span>
              <input className="input" type="text" placeholder="Username or Email" />
            </div>

            <PasswordInput placeholder="Password" value="" onChange={() => {}} />

            <div className="remember-row">
              <label className="remember-label">
                <input type="checkbox" className="checkbox checkbox--vol" checked={remember} onChange={() => setRemember(r => !r)} />
                Remember me
              </label>
              <span className="forgot-link">Forgot password?</span>
            </div>

            <button className="submit-btn submit-btn--vol" type="button">Sign In</button>
          </>
        )}

        {/* ── Volunteer Sign Up ── */}
        {tab === "signup" && (
          <>
            <div>
              <h2 className="form-title">Join as Volunteer</h2>
              <p className="form-subtitle">Already registered? <span className="link link--vol" onClick={() => setTab("signin")}>Sign In</span></p>
            </div>

            {/* Name row */}
            <div className="field-row">
              <div className="input-group">
                <span className="input-icon"><UserIcon /></span>
                <input className="input" type="text" placeholder="First name" />
              </div>
              <div className="input-group">
                <span className="input-icon"><UserIcon /></span>
                <input className="input" type="text" placeholder="Last name" />
              </div>
            </div>

            <div className="input-group">
              <span className="input-icon"><MailIcon /></span>
              <input className="input" type="email" placeholder="Email address" />
            </div>

            <div className="input-group">
              <span className="input-icon"><PhoneIcon /></span>
              <input className="input" type="tel" placeholder="Phone number" />
            </div>

            <PasswordInput placeholder="Create password" value="" onChange={() => {}} />
            <PasswordInput placeholder="Confirm password" value="" onChange={() => {}} />

            {/* Divider */}
            <div className="section-divider"><span>Rescue Details</span></div>

            {/* ID Upload */}
            <div className="field-block">
              <label className="field-label">
                <IdCardIcon /> ID Proof <span className="required">*</span>
              </label>
              <div
                className={`upload-box ${uploadedFile ? "upload-box--done" : ""}`}
                onClick={() => fileRef.current.click()}
              >
                <span className={`upload-box__icon ${uploadedFile ? "upload-box__icon--done" : ""}`}>
                  {uploadedFile ? <CheckIcon /> : <UploadIcon />}
                </span>
                <span className="upload-box__text">
                  {uploadedFile ? `✓ ${uploadedFile}` : "Click to upload ID proof"}
                </span>
                <small>Aadhar / Passport / Driving License (JPG, PNG, PDF)</small>
                <input ref={fileRef} type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFile} style={{ display: "none" }} />
              </div>
            </div>

            {/* Skills */}
            <div className="field-block">
              <label className="field-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                Skills <span className="required">*</span>
              </label>
              <div className="skills-grid">
                {SKILLS.map(s => (
                  <label key={s} className={`skill-chip ${skills.includes(s) ? "skill-chip--active" : ""}`}>
                    <input type="checkbox" checked={skills.includes(s)} onChange={() => toggleSkill(s)} />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="field-block">
              <label className="field-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                Experience <span className="optional">(optional)</span>
              </label>
              <textarea
                className="input-textarea"
                placeholder="Briefly describe your rescue/volunteer experience…"
                rows={3}
              />
            </div>

            {/* Availability */}
            <div className="field-block">
              <label className="field-label">
                <ClockIcon /> Availability <span className="required">*</span>
              </label>
              <div className="radio-group">
                {["Full-time", "Part-time"].map(v => (
                  <label key={v} className={`radio-chip ${availability === v ? "radio-chip--active" : ""}`}>
                    <input type="radio" name="availability" value={v} checked={availability === v} onChange={() => setAvail(v)} />
                    {v}
                  </label>
                ))}
              </div>
            </div>

            

            <button className="submit-btn submit-btn--vol" type="button">Submit for Approval</button>
          </>
        )}
      </div>
    </>
  );
}

// ─── Section: Admin ───────────────────────────────────────────────────────────

function AdminSection() {
  return (
    <>
      <div className="role-notice admin-badge">
        <span className="role-notice__icon"><ShieldIcon /></span>
        Admin Portal — Restricted Access
      </div>

      <div className="form-body">
        <div>
          <h2 className="form-title">Admin Login</h2>
          <p className="form-subtitle">Authorised personnel only</p>
        </div>

        <div className="input-group">
          <span className="input-icon"><IdCardIcon /></span>
          <input className="input" type="text" placeholder="Admin ID" />
        </div>

        <PasswordInput placeholder="Password" value="" onChange={() => {}} />

        <button className="submit-btn submit-btn--admin" type="button">Login as Admin</button>
      </div>
    </>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [role, setRole]       = useState("Citizen");
  const [tab, setTab]         = useState("signin");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef               = useRef();

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 640) setMenuOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleNavSignIn  = () => { setRole("Citizen"); setTab("signin");  setMenuOpen(false); };
  const handleNavSignUp  = () => { setRole("Citizen"); setTab("signup");  setMenuOpen(false); };

  return (
    <div className="app">
      <div className="background" />
      <div className="overlay" />

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="nav-logo">
          <ShieldIcon />
          <span className="nav-brand">SMART RESCUE</span>
        </div>

        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item}>
              <a className={`nav-link ${item === "Home" ? "nav-link--active" : ""}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn-outline" onClick={handleNavSignIn}>Sign In</button>
          <button className="btn-primary" onClick={handleNavSignUp}>Sign Up</button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" ref={menuRef}>
          <ul className="mobile-links">
            {navItems.map(item => (
              <li key={item}><a className="mobile-link" onClick={() => setMenuOpen(false)}>{item}</a></li>
            ))}
          </ul>
          <div className="mobile-actions">
            <button className="btn-outline" onClick={handleNavSignIn}>Sign In</button>
            <button className="btn-primary" onClick={handleNavSignUp}>Sign Up</button>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <main className="hero">
        <h1 className="hero-title">
          Disaster Management
          <span className="hero-accent"> Portal</span>
        </h1>
        <p className="hero-subtitle">
          Coordinated response. Real-time alerts.<br />
          Community safety — all in one place.
        </p>

        {/* Role selector */}
        <div className="role-tabs">
          {roles.map(({ label, icon }) => (
            <button
              key={label}
              className={`role-btn ${role === label ? "role-btn--active" : ""}`}
              onClick={() => { setRole(label); setTab("signin"); }}
            >
              <span className="role-icon">{icon}</span>
              {label}
            </button>
          ))}
        </div>

        {/* Auth card */}
        <div className={`card ${role === "Volunteer" ? "card--wide" : ""}`}>
          {role === "Citizen"   && <CitizenSection tab={tab} setTab={setTab} />}
          {role === "Volunteer" && <VolunteerSection />}
          {role === "Admin"     && <AdminSection />}
        </div>
      </main>
    </div>
  );
}
