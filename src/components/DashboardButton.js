export function DashboardButton() {
  return (
    <>
      <button className="dashboard-btn">
          Go to Dashboard →
          this line shouldn't be detected as changed
      </button>

      <h1>this should include in PR </h1>
    </>
  );
}
