import { render, h } from 'preact';

const app = (
    <div>
      <button onClick={ e => parent.postMessage({ pluginMessage: { type: 'log-selection' } }, '*') }>
        Log Selection
      </button>
    </div>
)

window.onload = function() {
  render(app, document.getElementById("app"));
}
