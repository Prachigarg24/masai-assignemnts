import { useState } from "react";

/* ---------------- QUESTION 1: DASHBOARD ---------------- */

function Dashboard() {
  const [userStats, setUserStats] = useState(true);
  const [recentActivity, setRecentActivity] = useState(true);
  const [quickActions, setQuickActions] = useState(true);

  const noWidgets =
    !userStats && !recentActivity && !quickActions;

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={() => setUserStats(!userStats)}>
        Toggle User Stats
      </button>

      <button onClick={() => setRecentActivity(!recentActivity)}>
        Toggle Recent Activity
      </button>

      <button onClick={() => setQuickActions(!quickActions)}>
        Toggle Quick Actions
      </button>

      <hr />

      {/* Early condition */}
      {noWidgets && <p>No widgets selected</p>}

      {/* && pattern */}
      {userStats && <div>User Stats Widget</div>}

      {/* ternary */}
      {recentActivity ? <div>Recent Activity Widget</div> : null}

      {/* && pattern */}
      {quickActions && <div>Quick Actions Widget</div>}
    </div>
  );
}

/* ---------------- QUESTION 2: ALERT SYSTEM ---------------- */

function Alert({ type, children, onClose }) {
  const icons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️"
  };

  return (
    <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
      <span>{icons[type]} </span>
      {children}
      <button onClick={onClose} style={{ marginLeft: "10px" }}>
        X
      </button>
    </div>
  );
}

function AlertContainer() {
  const [alerts, setAlerts] = useState([]);

  const showAlerts = () => {
    setAlerts([
      { id: 1, type: "success", msg: "Success alert" },
      { id: 2, type: "error", msg: "Error alert" },
      { id: 3, type: "warning", msg: "Warning alert" },
      { id: 4, type: "info", msg: "Info alert" }
    ]);
  };

  const removeAlert = (id) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  return (
    <div>
      <h2>Alerts</h2>
      <button onClick={showAlerts}>Show Sample Alerts</button>

      {alerts.map(alert => (
        <Alert
          key={alert.id}
          type={alert.type}
          onClose={() => removeAlert(alert.id)}
        >
          {alert.msg}
        </Alert>
      ))}
    </div>
  );
}

/* ---------------- MAIN APP ---------------- */

export default function App() {
  return (
    <div>
      <Dashboard />
      <hr />
      <AlertContainer />
    </div>
  );
}
