export function AcceptanceCard() {
  return (
    <div className="acceptance-card">
      <h1>Acceptance Card</h1>
      <form className="acceptance-card-form">
        <label>
          <span>Name</span>
          <input type="text" placeholder="Name" />
        </label>
        <label>
          <span>Message</span>
          <input type="text" placeholder="Message" />
        </label>
        <button>Send</button>
      </form>
    </div>
  );
}
