'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--emerald-deep)' }}>
      <div
        style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="section-container">
          <Link
            href="/"
            style={{
              fontSize: 14,
              color: 'var(--gold-light)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            ←
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 24px 96px' }}>
        <div
          style={{
            display: 'inline-block',
            fontSize: 12,
            color: 'var(--gold-light)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: 20,
            padding: '4px 14px',
            marginBottom: 24,
          }}
        >
          Last updated: June 2026
        </div>

        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: 'var(--white)',
            marginBottom: 32,
          }}
        >
          Privacy Policy
        </h1>

        <p style={pStyle}>
          Amol Tracker (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) is built to help Muslims
          track their daily Islamic habits with sincerity and consistency. We
          take your privacy seriously. This policy explains what data we
          collect, why we collect it, and how we protect it.
        </p>

        <h2 style={h2Style}>1. Information We Collect</h2>

        <h3 style={h3Style}>1.1 Account Information</h3>
        <p style={pStyle}>When you sign in with Google, we receive:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>Your display name</li>
          <li style={liStyle}>Your email address</li>
          <li style={liStyle}>Your profile photo URL</li>
          <li style={liStyle}>A unique Google user ID</li>
        </ul>
        <p style={pStyle}>
          If you sign in as a guest (anonymous), we only store a randomly
          generated anonymous user ID. No personal information is collected.
        </p>

        <h3 style={h3Style}>1.2 Amal Log Data</h3>
        <p style={pStyle}>When you log your daily amal, we store:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>Which amal fields you completed each day</li>
          <li style={liStyle}>Your daily score</li>
          <li style={liStyle}>The Hijri date of the log</li>
          <li style={liStyle}>Timestamp of submission</li>
        </ul>
        <p style={pStyle}>
          This data is stored in our Firebase database and is used to power the
          community sheet, leaderboard, and your personal history.
        </p>

        <h3 style={h3Style}>1.3 Usage Data</h3>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>Streak and badge progress</li>
          <li style={liStyle}>Notification preferences</li>
          <li style={liStyle}>Language preferences</li>
          <li style={liStyle}>App settings (quiet hours, anonymous mode)</li>
        </ul>

        <h3 style={h3Style}>1.4 Device Information</h3>
        <p style={pStyle}>For push notifications, we collect and store your:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>Firebase Cloud Messaging (FCM) token</li>
        </ul>
        <p style={pStyle}>
          We do not collect your device model, operating system version, or any
          other hardware information beyond what is needed for notifications.
        </p>

        <h2 style={h2Style}>2. How We Use Your Information</h2>
        <div style={cardStyle}>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={liStyle}>To display your amal progress on your personal home screen</li>
            <li style={liStyle}>To show community members&apos; amal logs on the community sheet</li>
            <li style={liStyle}>To calculate and display leaderboard rankings</li>
            <li style={liStyle}>To send daily reminders and streak notifications</li>
            <li style={liStyle}>To maintain your streak and badge history</li>
            <li style={liStyle}>To allow you to send and receive duas within the community</li>
          </ul>
        </div>

        <p style={pStyle}>
          We do <strong style={{ color: 'var(--gold-light)' }}>not</strong> use
          your data for:
        </p>
        <div style={cardStyle}>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={liStyle}>Selling to third parties</li>
            <li style={liStyle}>Advertising or marketing</li>
            <li style={liStyle}>Profiling or tracking outside the app</li>
            <li style={liStyle}>
              Any purpose unrelated to the app&apos;s Islamic habit tracking
              function
            </li>
          </ul>
        </div>

        <h2 style={h2Style}>3. Community &amp; Public Data</h2>
        <p style={pStyle}>
          Amol Tracker has a public community sheet where all users&apos; daily amal
          logs are visible to other signed-in users of the app.
        </p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            By default, your display name, profile photo, and amal data are
            visible to other users in the community sheet and leaderboard.
          </li>
          <li style={liStyle}>
            You can enable <strong style={{ color: 'var(--gold-light)' }}>Anonymous Mode</strong> in
            Settings at any time. When enabled, your name and photo are hidden —
            you appear as &quot;Anonymous&quot; to other users.
          </li>
          <li style={liStyle}>
            Your amal data (which tasks you completed) remains visible even in
            anonymous mode — only your identity is hidden.
          </li>
        </ul>

        <h2 style={h2Style}>4. Data Storage &amp; Security</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            All data is stored securely on <strong style={{ color: 'var(--gold-light)' }}>Google Firebase</strong> (Firestore),
            hosted on Google&apos;s secure infrastructure.
          </li>
          <li style={liStyle}>All data is transmitted over encrypted HTTPS connections.</li>
          <li style={liStyle}>
            Access to your data is protected by Firebase Security Rules — users
            can only read and write their own amal logs.
          </li>
          <li style={liStyle}>
            A local offline cache is stored on your device using Hive (encrypted
            local storage) so the app works without internet.
          </li>
        </ul>

        <h2 style={h2Style}>5. Data Retention</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            Your account data and amal logs are retained as long as your account
            is active.
          </li>
          <li style={liStyle}>
            If you delete your account, all your personal data and amal logs
            will be permanently deleted within 30 days.
          </li>
          <li style={liStyle}>To request account deletion, contact us at the email below.</li>
        </ul>

        <h2 style={h2Style}>6. Third-Party Services</h2>
        <p style={pStyle}>We use the following third-party services:</p>
        <div style={cardStyle}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                <th style={thStyle}>Service</th>
                <th style={thStyle}>Purpose</th>
                <th style={thStyle}>Privacy Policy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Google Firebase</td>
                <td style={tdStyle}>Authentication, database, notifications</td>
                <td style={tdStyle}>
                  <a href="https://firebase.google.com/support/privacy" style={{ color: 'var(--gold-light)' }}>
                    firebase.google.com
                  </a>
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>Google Sign-In</td>
                <td style={tdStyle}>Account authentication</td>
                <td style={tdStyle}>
                  <a href="https://policies.google.com/privacy" style={{ color: 'var(--gold-light)' }}>
                    policies.google.com
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, borderBottom: 'none' }}>Firebase Cloud Messaging</td>
                <td style={{ ...tdStyle, borderBottom: 'none' }}>Push notifications</td>
                <td style={{ ...tdStyle, borderBottom: 'none' }}>
                  <a href="https://firebase.google.com/support/privacy" style={{ color: 'var(--gold-light)' }}>
                    firebase.google.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={h2Style}>7. Children&apos;s Privacy</h2>
        <p style={pStyle}>
          Amol Tracker is intended for users aged 13 and older. We do not
          knowingly collect personal information from children under 13. If you
          believe a child under 13 has provided us with personal information,
          please contact us immediately and we will delete it.
        </p>

        <h2 style={h2Style}>8. Your Rights</h2>
        <p style={pStyle}>You have the right to:</p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>Access the personal data we hold about you</li>
          <li style={liStyle}>Request correction of inaccurate data</li>
          <li style={liStyle}>Request deletion of your account and all associated data</li>
          <li style={liStyle}>Opt out of notifications at any time through app Settings</li>
          <li style={liStyle}>Enable anonymous mode to hide your identity from other users</li>
        </ul>

        <h2 style={h2Style}>9. Changes to This Policy</h2>
        <p style={pStyle}>
          We may update this Privacy Policy from time to time. When we do, we
          will update the &quot;Last updated&quot; date at the top of this page and notify
          users through an in-app announcement. Continued use of the app after
          changes means you accept the updated policy.
        </p>

        <div style={contactBoxStyle}>
          <h2 style={contactBoxH2Style}>10. Contact Us</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 12, fontSize: 14 }}>
            Questions about this Privacy Policy? We&apos;re here to help.
          </p>
          <p style={{ marginTop: 8, fontSize: 14 }}>
            <a href="mailto:shakibshovon.10@gmail.com" style={contactLinkStyle}>
              shakibshovon.10@gmail.com
            </a>
          </p>
        </div>
      </div>

      <footer
        style={{
          textAlign: 'center',
          padding: '32px 24px',
          fontSize: 12,
          color: 'rgba(255,255,255,0.4)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          marginTop: 48,
        }}
      >
        © 2026 Amol Tracker. All rights reserved.
      </footer>
    </div>
  );
}

const h2Style: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: 'var(--gold-light)',
  marginTop: 32,
  marginBottom: 12,
  paddingBottom: 8,
  borderBottom: '2px solid rgba(232,201,106,0.3)',
};

const h3Style: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--gold-light)',
  marginTop: 20,
  marginBottom: 8,
};

const pStyle: React.CSSProperties = {
  fontSize: 14,
  color: 'rgba(255,255,255,0.7)',
  lineHeight: 1.8,
  marginBottom: 12,
};

const liStyle: React.CSSProperties = {
  fontSize: 14,
  color: 'rgba(255,255,255,0.7)',
  lineHeight: 1.8,
  marginBottom: 6,
};

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.06)',
  borderRadius: 12,
  padding: 20,
  margin: '16px 0',
  border: '1px solid rgba(255,255,255,0.08)',
};

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '8px 12px',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  color: 'var(--gold-light)',
  fontWeight: 600,
  fontSize: 13,
};

const tdStyle: React.CSSProperties = {
  padding: '8px 12px',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  color: 'rgba(255,255,255,0.7)',
  fontSize: 13,
};

const contactBoxStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,0.2)',
  borderRadius: 12,
  padding: 24,
  marginTop: 40,
  textAlign: 'center',
};

const contactBoxH2Style: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: 'var(--gold-light)',
  marginBottom: 0,
};

const contactLinkStyle: React.CSSProperties = {
  color: 'var(--gold-light)',
  textDecoration: 'none',
  fontWeight: 600,
};
