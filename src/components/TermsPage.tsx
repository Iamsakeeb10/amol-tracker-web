'use client';

import Link from 'next/link';

export default function TermsPage() {
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
            ← amoltracker.app
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
          Terms & Conditions
        </h1>

        <p style={pStyle}>
          Please read these Terms and Conditions carefully before using Amol
          Tracker. By downloading, installing, or using the app, you agree to be
          bound by these terms. If you do not agree, please do not use the app.
        </p>

        <h2 style={h2Style}>1. About Amol Tracker</h2>
        <p style={pStyle}>
          Amol Tracker is a free mobile application designed to help Muslims track
          their daily Islamic habits (amal), maintain consistency through streaks
          and reminders, and stay motivated through community accountability.
        </p>
        <div style={highlightStyle}>
          This app is built as a tool for personal improvement and community
          accountability. It is not a religious authority. All Islamic content is
          provided for reference only. Please consult a qualified scholar for
          religious rulings.
        </div>

        <h2 style={h2Style}>2. Eligibility</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            You must be at least <strong>13 years old</strong> to use this app.
          </li>
          <li style={liStyle}>
            By using the app, you confirm that you are 13 or older, or that you
            have parental consent if you are between 13–18 years old.
          </li>
          <li style={liStyle}>
            You must provide accurate information when creating your account.
          </li>
        </ul>

        <h2 style={h2Style}>3. User Account</h2>

        <h3 style={h3Style}>3.1 Account Creation</h3>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            You can sign in using your Google account or as an anonymous guest.
          </li>
          <li style={liStyle}>
            You are responsible for maintaining the security of your Google
            account and any activity that occurs through your Amol Tracker
            account.
          </li>
          <li style={liStyle}>You may only create one account per person.</li>
        </ul>

        <h3 style={h3Style}>3.2 Account Termination</h3>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>You may delete your account at any time by contacting us.</li>
          <li style={liStyle}>
            We reserve the right to suspend or terminate accounts that violate
            these terms, without prior notice.
          </li>
        </ul>

        <h2 style={h2Style}>4. Acceptable Use</h2>
        <p style={pStyle}>
          You agree to use Amol Tracker only for its intended purpose. You must
          NOT:
        </p>
        <div style={cardStyle}>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            <li style={liStyle}>
              Post offensive, abusive, or un-Islamic content in your display
              name or any public field
            </li>
            <li style={liStyle}>
              Impersonate another person or use a misleading display name
            </li>
            <li style={liStyle}>
              Attempt to manipulate, hack, or exploit the app or its data
            </li>
            <li style={liStyle}>Use the app to spam or harass other users</li>
            <li style={liStyle}>Send inappropriate or harmful duas to other users</li>
            <li style={liStyle}>Attempt to reverse-engineer or copy the app</li>
            <li style={liStyle}>
              Use the app for any commercial purpose without our written
              consent
            </li>
            <li style={liStyle}>Create fake accounts to manipulate leaderboard rankings</li>
          </ul>
        </div>
        <div style={warningStyle}>
          Violation of acceptable use may result in immediate account
          suspension without warning or refund.
        </div>

        <h2 style={h2Style}>5. Community Features</h2>

        <h3 style={h3Style}>5.1 Community Sheet &amp; Leaderboard</h3>
        <p style={pStyle}>
          By submitting your daily amal log, you agree that your data (display
          name, photo, and amal completion status) may be visible to other
          authenticated users of the app in the community sheet and leaderboard.
        </p>
        <p style={pStyle}>
          You can enable Anonymous Mode in Settings at any time to hide your
          identity from other users.
        </p>

        <h3 style={h3Style}>5.2 Dua Feature</h3>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            The dua feature allows users to send a single dua notification to
            another user per day.
          </li>
          <li style={liStyle}>
            Duas sent through the app are limited to the built-in feature and
            must not be used to contact or harass users.
          </li>
          <li style={liStyle}>
            We reserve the right to disable the dua feature for any user who
            misuses it.
          </li>
        </ul>

        <h3 style={h3Style}>5.3 User Content</h3>
        <p style={pStyle}>
          Any content you provide (display name, etc.) must be appropriate,
          respectful, and consistent with Islamic values. We reserve the right
          to remove content that violates these standards.
        </p>

        <h2 style={h2Style}>6. Amal Data &amp; Accuracy</h2>
        <div style={highlightStyle}>
          Amol Tracker is a self-reporting tool. We rely entirely on your
          honest input. The app is a tool to help you — its value depends on
          your sincerity. Remember: Allah knows what is in our hearts.
        </div>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            All amal logs are self-reported by the user. We do not verify
            whether amal was actually performed.
          </li>
          <li style={liStyle}>
            Scores, streaks, and leaderboard positions are calculated based on
            your submitted data.
          </li>
          <li style={liStyle}>
            We are not responsible for any religious or spiritual outcomes based
            on your use of this app.
          </li>
        </ul>

        <h2 style={h2Style}>7. Islamic Content Disclaimer</h2>
        <p style={pStyle}>
          Amol Tracker includes Islamic content such as hadiths, duas, and amal
          suggestions. Please note:
        </p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            All hadiths are sourced from authentic collections (Bukhari, Muslim,
            etc.) but are provided for motivational purposes only.
          </li>
          <li style={liStyle}>
            The app is not a fatwa platform. Do not rely on the app for Islamic
            legal rulings.
          </li>
          <li style={liStyle}>
            Prayer times and Islamic date calculations are approximations.
            Please verify with your local mosque for exact times.
          </li>
          <li style={liStyle}>
            We make no claim that using this app fulfills any religious
            obligation or guarantees spiritual benefit.
          </li>
        </ul>

        <h2 style={h2Style}>8. Intellectual Property</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            The Amol Tracker app, its design, code, and brand are owned by the
            developer.
          </li>
          <li style={liStyle}>
            You may not copy, modify, distribute, or create derivative works
            based on this app without written permission.
          </li>
          <li style={liStyle}>
            Islamic texts (Quran verses, hadiths) quoted in the app are in the
            public domain.
          </li>
        </ul>

        <h2 style={h2Style}>9. Availability &amp; Updates</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>
            Amol Tracker is provided free of charge. We reserve the right to
            modify, suspend, or discontinue the service at any time without
            notice.
          </li>
          <li style={liStyle}>
            We may release updates to improve the app. Some updates may be
            required to continue using the service.
          </li>
          <li style={liStyle}>
            We do not guarantee 100% uptime. Scheduled or emergency
            maintenance may cause temporary unavailability.
          </li>
        </ul>

        <h2 style={h2Style}>10. Limitation of Liability</h2>
        <p style={pStyle}>
          To the maximum extent permitted by law, Amol Tracker and its developer
          are not liable for:
        </p>
        <ul style={{ paddingLeft: 20 }}>
          <li style={liStyle}>Any loss of amal data due to technical issues</li>
          <li style={liStyle}>Incorrect prayer times or Hijri date calculations</li>
          <li style={liStyle}>Any spiritual or religious outcomes from using the app</li>
          <li style={liStyle}>Any harm caused by content posted by other users</li>
          <li style={liStyle}>
            Any indirect, incidental, or consequential damages arising from use
            of the app
          </li>
        </ul>
        <p style={pStyle}>
          The app is provided &quot;as is&quot; without warranties of any kind,
          express or implied.
        </p>

        <h2 style={h2Style}>11. Privacy</h2>
        <p style={pStyle}>
          Your use of Amol Tracker is also governed by our{' '}
          <Link
            href="/privacy"
            style={{ color: 'var(--gold-light)', fontWeight: 600 }}
          >
            Privacy Policy
          </Link>
          , which is incorporated into these Terms by reference.
        </p>

        <h2 style={h2Style}>12. Changes to These Terms</h2>
        <p style={pStyle}>
          We may update these Terms and Conditions from time to time. When we
          do, we will update the date at the top of this page and notify users
          through an in-app announcement. Your continued use of the app after
          changes take effect means you accept the new terms.
        </p>

        <h2 style={h2Style}>13. Governing Law</h2>
        <p style={pStyle}>
          These Terms are governed by the laws of Bangladesh. Any disputes
          arising from the use of Amol Tracker will be subject to the
          jurisdiction of the courts of Bangladesh.
        </p>

        <div style={contactBoxStyle}>
          <h2 style={contactBoxH2Style}>14. Contact Us</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 12, fontSize: 14 }}>
            Questions about these Terms? We&apos;re happy to help.
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

const highlightStyle: React.CSSProperties = {
  background: 'rgba(26,92,66,0.3)',
  borderLeft: '4px solid var(--gold-light)',
  padding: '14px 16px',
  borderRadius: '0 8px 8px 0',
  margin: '16px 0',
  fontSize: 14,
  color: 'rgba(255,255,255,0.75)',
  lineHeight: 1.7,
};

const warningStyle: React.CSSProperties = {
  background: 'rgba(198,40,40,0.15)',
  borderLeft: '4px solid #c62828',
  padding: '14px 16px',
  borderRadius: '0 8px 8px 0',
  margin: '16px 0',
  fontSize: 14,
  color: 'rgba(255,150,150,0.9)',
  lineHeight: 1.7,
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
