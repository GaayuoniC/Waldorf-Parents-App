import { useState } from "react";

export function AcceptanceCard({ onAccept = () => {} }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="acceptance-card">
      <h1>Acceptance message</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAccept(name, message);
        }}
        className="acceptance-card-form"
      >
        <label>
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Name"
          />
        </label>
        <label>
          <span>Message</span>
          <input
            type="text"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            placeholder="Message"
          />
        </label>
        <button>Send</button>
      </form>
    </div>
  );
}
