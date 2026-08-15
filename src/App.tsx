import { useEffect, useState } from 'react';
import Terms from './Terms';
import Support from './Support';

function getPage() {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  if (hash === 'terms') return 'terms';
  if (hash === 'support') return 'support';
  return 'privacy';
}

function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (page === 'terms') return <Terms />;
  if (page === 'support') return <Support />;
  return <Privacy />;
}

function Privacy() {
  return (
    <div className="container">
      <p className="app-name">Simple<span>Rep</span></p>
      <p className="page-title">Privacy Policy</p>
      <p className="updated">Last updated: August 11, 2026</p>

      <h2>1. Introduction</h2>
      <p>
        SimpleRep ("the App") is developed and operated by Faisal Alshawan ("the
        Developer", "we", "us", or "our"). This Privacy Policy explains how we
        handle information when you use the App. By downloading, installing, or
        using SimpleRep, you acknowledge that you have read and understood this
        Privacy Policy and consent to the practices described herein.
      </p>

      <h2>2. Data Stored on Your Device</h2>
      <p>
        All data you create in SimpleRep, including exercise logs, workout
        history, routines, goals, and preferences, is stored locally on your
        device and is never sent to us or any server. We do not have access to
        your workout data. If you delete the App, this data is permanently
        deleted with it.
      </p>

      <h2>3. Data Processed by Third Parties</h2>
      <p>
        We use{' '}
        <a href="https://www.revenuecat.com" target="_blank" rel="noreferrer">RevenueCat</a>{' '}
        to manage in-app purchases and subscriptions. When you make or restore a
        purchase, RevenueCat processes purchase-related data (such as transaction
        history and basic device information) to validate your purchase and
        manage your subscription. This processing is necessary to provide the
        Service and by using the App you consent to this processing. We have not
        enabled optional data collection such as advertising identifiers (IDFA)
        or IP address logging.
      </p>
      <p>
        For details on what RevenueCat collects and how it handles your data,
        see{' '}
        <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noreferrer">
          RevenueCat's Privacy Policy
        </a>
        .
      </p>

      <h2>4. Apple</h2>
      <p>
        Apple may collect data related to app downloads, purchases, and
        diagnostics per{' '}
        <a href="https://www.apple.com/privacy/" target="_blank" rel="noreferrer">
          Apple's Privacy Policy
        </a>
        . For any data requests related to Apple, use{' '}
        <a href="https://privacy.apple.com/" target="_blank" rel="noreferrer">
          Apple's privacy tools
        </a>
        .
      </p>

      <h2>5. What We Do Not Collect</h2>
      <p>
        We do not collect your name, email address, location, health data,
        photos, advertising identifiers, analytics, or any personal information.
        The App does not use HealthKit, does not track you across apps or
        websites, and does not display ads. We do not sell your personal
        information to anyone.
      </p>

      <h2>6. Data Security</h2>
      <p>
        All your workout data is stored locally on your device and is never
        transmitted to any server. We do not have access to your data.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Under the Personal Data Protection Law (PDPL) of the Kingdom of Saudi
        Arabia and other applicable data protection laws, you have the right to
        know what personal data is being processed, access your personal data,
        request correction or deletion of your data, and withdraw consent. Since
        SimpleRep stores all data locally on your device and we do not collect
        or have access to your personal data, you have full control over your
        data at all times. You can view, modify, or delete your data directly
        within the App.
      </p>

      <h2>8. Children</h2>
      <p>
        The App is not directed at children under 13. We do not knowingly
        collect personal information from children.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted here with a revised date. Continued use of the App after changes
        are posted constitutes acceptance of the updated policy.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        This Privacy Policy is governed by the laws of the Kingdom of Saudi
        Arabia, including the Personal Data Protection Law (PDPL).
      </p>

      <h2>11. Contact</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{' '}
        <strong>simplerep@faisaldev.co</strong>.
      </p>
    </div>
  );
}

export default App;
